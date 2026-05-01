import React, { useState, useRef, useCallback } from 'react';

/* ─── Icons ─────────────────────────────────────────────────── */
const UploadIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 18V10M14 10l-3.5 3.5M14 10l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
  </svg>
);

const FileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M13 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M13 2v7h7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const RemoveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WPIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M4 7c0-1.66 1.34-3 3-3a3 3 0 0 1 2.83 2M7 10a3 3 0 0 1-2.83-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M7 4.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

/* ─── Helpers ───────────────────────────────────────────────── */
function formatBytes(bytes) {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1048576)    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function isImageFile(file) {
  if (typeof file === 'string') return /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(file);
  const type = file?.type ?? file?.mime_type ?? '';
  const name = file?.name ?? file?.filename ?? '';
  return type.startsWith('image/') || /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(name);
}

function getFileUrl(file) {
  if (typeof file === 'string')   return file;
  if (file?.url)                  return file.url;
  if (file instanceof File)       return URL.createObjectURL(file);
  return '';
}

function getFileName(file) {
  if (typeof file === 'string')  return file.split('/').pop();
  return file?.filename ?? file?.name ?? file?.url ?? 'file';
}

/* ─── Component ─────────────────────────────────────────────── */
function FileUpload({
  value       = [],   // File[] | WPMedia[] | string[]
  onChange,

  accept      = '*/*',
  multiple    = false,
  maxSize,            // bytes
  maxFiles,

  disabled    = false,
  showPreview = true,

  /* WP Media integration */
  wpMedia           = false,
  wpMediaTitle      = 'Select Media',
  wpMediaButton     = 'Use this media',
  wpMediaType,      // 'image' | 'video' | undefined

  /* translatable */
  dropText          = 'Drag & drop files here, or',
  browseText        = 'Browse',
  wpMediaText       = 'Media Library',
  maxSizeText,
  removeFileLabel   = 'Remove file',
  errorSizeText     = (name, max) => `"${name}" exceeds the ${formatBytes(max)} limit`,
  errorMaxText      = (max) => `Maximum ${max} file(s) allowed`,

  className   = '',
}) {
  const fileRef   = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [errors,   setErrors]   = useState([]);

  /* ── Open WP Media picker ── */
  const openWpMedia = useCallback(() => {
    if (!window.wp?.media) return;
    const frame = window.wp.media({
      title:    wpMediaTitle,
      button:   { text: wpMediaButton },
      multiple,
      library:  wpMediaType ? { type: wpMediaType } : undefined,
    });
    frame.on('select', () => {
      const selected = frame.state().get('selection').toJSON();
      const next = multiple
        ? [...value, ...selected].slice(0, maxFiles ?? Infinity)
        : [selected[0]];
      onChange?.(next);
    });
    frame.open();
  }, [value, multiple, maxFiles, wpMediaTitle, wpMediaButton, wpMediaType, onChange]);

  /* ── Process file list ── */
  const processFiles = useCallback((fileList) => {
    const incoming = Array.from(fileList);
    const errs     = [];
    const valid    = incoming.filter((f) => {
      if (maxSize && f.size > maxSize) {
        errs.push(errorSizeText(f.name, maxSize));
        return false;
      }
      return true;
    });

    const combined = multiple ? [...value, ...valid] : [valid[0]].filter(Boolean);
    const trimmed  = maxFiles ? combined.slice(0, maxFiles) : combined;

    if (maxFiles && combined.length > maxFiles) {
      errs.push(errorMaxText(maxFiles));
    }

    setErrors(errs);
    if (trimmed.length) onChange?.(trimmed);
  }, [value, multiple, maxFiles, maxSize, errorSizeText, errorMaxText, onChange]);

  /* ── Drag events ── */
  const onDragOver  = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = ()  => setDragging(false);
  const onDrop      = (e) => {
    e.preventDefault();
    setDragging(false);
    if (!disabled) processFiles(e.dataTransfer.files);
  };

  /* ── File input change ── */
  const onFileInput = (e) => {
    processFiles(e.target.files);
    e.target.value = '';   // allow re-selecting same file
  };

  /* ── Remove item ── */
  const removeFile = (idx) => onChange?.(value.filter((_, i) => i !== idx));

  const zoneClass = [
    'nxp-upload__zone',
    dragging ? 'nxp-upload__zone--over'     : '',
    disabled ? 'nxp-upload__zone--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={['nxp-upload', className].filter(Boolean).join(' ')}>

      {/* ── Drop zone ── */}
      <div
        className={zoneClass}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => !disabled && !wpMedia && fileRef.current?.click()}
        aria-label="File upload area"
      >
        <UploadIcon />
        <span className="nxp-upload__drop-text">{dropText}</span>

        <div className="nxp-upload__actions">
          {/* WP Media button */}
          {wpMedia && (
            <button
              type="button"
              className="nxp-upload__browse nxp-upload__browse--wp"
              onClick={(e) => { e.stopPropagation(); if (!disabled) openWpMedia(); }}
              disabled={disabled}
            >
              <WPIcon />
              {wpMediaText}
            </button>
          )}

          {/* Native browse button */}
          <button
            type="button"
            className="nxp-upload__browse"
            onClick={(e) => { e.stopPropagation(); if (!disabled) fileRef.current?.click(); }}
            disabled={disabled}
          >
            {browseText}
          </button>
        </div>

        {maxSizeText && (
          <span className="nxp-upload__hint">{maxSizeText}</span>
        )}

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept={accept}
          multiple={multiple}
          style={{ display: 'none' }}
          onChange={onFileInput}
          disabled={disabled}
        />
      </div>

      {/* ── Errors ── */}
      {errors.map((err, i) => (
        <p key={i} className="nxp-upload__error" role="alert">{err}</p>
      ))}

      {/* ── Preview list ── */}
      {showPreview && value.length > 0 && (
        <div className="nxp-upload__preview">
          {value.map((file, i) => {
            const isImg = isImageFile(file);
            const url   = getFileUrl(file);
            const name  = getFileName(file);
            const size  = file instanceof File ? formatBytes(file.size) : null;

            return (
              <div key={i} className="nxp-upload__item">
                <div className="nxp-upload__item-thumb">
                  {isImg
                    ? <img src={url} alt={name} className="nxp-upload__item-img" />
                    : <FileIcon />
                  }
                </div>
                <div className="nxp-upload__item-info">
                  <span className="nxp-upload__item-name">{name}</span>
                  {size && <span className="nxp-upload__item-size">{size}</span>}
                </div>
                {!disabled && (
                  <button
                    type="button"
                    className="nxp-upload__item-remove"
                    onClick={() => removeFile(i)}
                    aria-label={`${removeFileLabel}: ${name}`}
                  >
                    <RemoveIcon />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { FileUpload };
export default FileUpload;
