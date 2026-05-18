import React, { useState, useRef, useCallback } from 'react';

/* ─── Icons ─────────────────────────────────────────────────── */
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50"><g clip-path="url(#asdada)"><mask id="bertete" width="51" height="50" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M.5 0h50v50H.5z"/></mask><g fill="#727272" mask="url(#bertete)"><path d="M45.292 50H24.458a5.216 5.216 0 0 1-5.208-5.208v-8.334a1.042 1.042 0 0 1 2.083 0v8.334a3.13 3.13 0 0 0 3.125 3.125h20.834a3.13 3.13 0 0 0 3.125-3.125V23.958a3.13 3.13 0 0 0-3.125-3.125H34.875a1.042 1.042 0 0 1 0-2.083h10.417a5.216 5.216 0 0 1 5.208 5.208v20.834A5.216 5.216 0 0 1 45.292 50m-29.17-18.749h-1.041a1.042 1.042 0 0 1 0-2.083h1.041a1.042 1.042 0 0 1 0 2.083m-5.25-.001H8.768a1.042 1.042 0 0 1 0-2.083h2.106a1.042 1.042 0 0 1 0 2.083m-6.301-.158q-.142 0-.286-.04a5.2 5.2 0 0 1-2.245-1.317 1.04 1.04 0 1 1 1.468-1.477c.375.373.842.646 1.346.79.554.156.875.733.717 1.287a1.04 1.04 0 0 1-1 .757M1.54 26.16A1.04 1.04 0 0 1 .5 25.12v-2.106a1.042 1.042 0 0 1 2.083 0v2.106c0 .575-.466 1.041-1.041 1.041m0-6.318A1.04 1.04 0 0 1 .5 18.8v-2.106a1.042 1.042 0 0 1 2.083 0V18.8c0 .575-.466 1.042-1.041 1.042m0-6.317A1.04 1.04 0 0 1 .5 12.483v-2.106a1.042 1.042 0 0 1 2.083 0v2.106c0 .575-.466 1.042-1.041 1.042m29.167-2.148a1.04 1.04 0 0 1-1.041-1.042V8.23a1.042 1.042 0 0 1 2.083 0v2.106c0 .575-.467 1.042-1.042 1.042M1.542 7.207A1.04 1.04 0 0 1 .5 6.164v-.957c0-.479.067-.956.196-1.416a1.034 1.034 0 0 1 1.285-.72c.554.157.875.732.719 1.286q-.116.414-.117.85v.957c0 .575-.466 1.041-1.041 1.041M30.54 5.074c-.452 0-.867-.296-1-.75a3.15 3.15 0 0 0-.8-1.34 1.042 1.042 0 0 1 1.464-1.48A5.2 5.2 0 0 1 31.54 3.74a1.04 1.04 0 0 1-1 1.335M4.538 2.25c-.45 0-.867-.294-1-.748A1.045 1.045 0 0 1 4.246.208 5.2 5.2 0 0 1 5.708 0h.92a1.042 1.042 0 0 1 0 2.083h-.92a3.1 3.1 0 0 0-.877.125q-.147.043-.294.042m21.043-.167h-2.106a1.042 1.042 0 0 1 0-2.083h2.106a1.042 1.042 0 0 1 0 2.083m-6.318 0h-2.105a1.042 1.042 0 0 1 0-2.083h2.107a1.042 1.042 0 1 1-.003 2.083m-6.317 0H10.84a1.042 1.042 0 0 1 0-2.083h2.106a1.042 1.042 0 0 1 0 2.083m17.76 14.585a1.04 1.04 0 0 1-1.042-1.042v-1.041a1.042 1.042 0 0 1 2.083 0v1.041c0 .575-.466 1.042-1.041 1.042"/><path d="M26.646 37.5h-4.27a5.216 5.216 0 0 1-5.21-5.208v-3.736l-.933-.933a3.23 3.23 0 0 1-.952-2.3c0-.869.338-1.686.952-2.3a3.24 3.24 0 0 1 1.859-.923 3.25 3.25 0 0 1 .943-2.525 3.28 3.28 0 0 1 2.755-.92 3.24 3.24 0 0 1 .891-1.684 3.31 3.31 0 0 1 3.37-.773c.151-.48.418-.931.797-1.31a3.257 3.257 0 0 1 4.598 0l3.23 3.229A11.29 11.29 0 0 1 38 26.146c0 6.26-5.094 11.354-11.354 11.354m-7.396-6.86v1.652a3.13 3.13 0 0 0 3.125 3.125h4.27c5.113 0 9.272-4.159 9.272-9.271a9.2 9.2 0 0 0-2.715-6.554l-3.229-3.23a1.168 1.168 0 0 0-1.654 1.65 1.04 1.04 0 0 1 .002 1.476 1.04 1.04 0 0 1-1.473 0l-1.042-1.042a1.196 1.196 0 0 0-1.652 0 1.17 1.17 0 0 0 0 1.652l1.042 1.042a1.046 1.046 0 0 1 0 1.473 1.04 1.04 0 0 1-1.473 0l-1.562-1.563a1.196 1.196 0 0 0-1.653 0 1.17 1.17 0 0 0 0 1.652l2.605 2.604a1.046 1.046 0 0 1 0 1.473 1.04 1.04 0 0 1-1.473 0l-2.282-2.281a1.196 1.196 0 0 0-1.652 0 1.16 1.16 0 0 0-.341.825c0 .31.12.606.341.825l5.407 5.406a1.046 1.046 0 0 1 0 1.475 1.04 1.04 0 0 1-1.473 0z"/></g></g><defs><clipPath id="asdada"><path fill="#fff" d="M.5 0h50v50H.5z"/></clipPath></defs></svg>
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
          className="nxp-hidden"
          onChange={onFileInput}
          disabled={disabled}
        />
      </div>

      {/* ── Errors ── */}
      {errors.map((err, i) => (
        <p key={`err-${i}-${err}`} className="nxp-upload__error" role="alert">{err}</p>
      ))}

      {/* ── Preview list ── */}
      {showPreview && value.length > 0 && (
        <div className="nxp-upload__preview">
          {value.map((file, i) => {
            const isImg = isImageFile(file);
            const url   = file.url ? file.url : getFileUrl(file);
            const name  = file.name ? file.name : getFileName(file);
            const size  = file instanceof File ? formatBytes(file.size) : null;

            return (
              <div key={`${name}-${i}`} className="nxp-upload__item">
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
