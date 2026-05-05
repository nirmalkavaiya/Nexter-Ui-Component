import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

/* ── SVG close icon ──────────────────────────────────────────── */
const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Modal
 *
 * Props:
 *   open      {boolean}         — show / hide
 *   onClose   {function}        — called on backdrop click, Esc, or close button
 *   size      {'sm'|'md'|'lg'|'xl'}
 *   align     {'left'|'center'} — header text alignment (default 'left')
 *   title     {ReactNode}
 *   byline    {ReactNode}       — subtitle / description below title
 *   children  {ReactNode}       — body content
 *   footer    {ReactNode}       — renders in footer bar
 *   className {string}          — extra class on .nxp-modal
 */
function Modal({
  open = false,
  onClose,
  size = 'md',
  align = 'left',
  title,
  byline,
  children,
  footer,
  className = '',
}) {
  /* ── scroll lock ── */
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  /* ── Esc to close ── */
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape' && onClose) onClose(); },
    [onClose]
  );
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [open, handleKey]);

  if (!open) return null;

  const sizeClass   = size !== 'md' ? ` nxp-modal--${size}` : '';
  const alignClass  = align === 'center' ? ' nxp-modal--center' : '';
  const hasHead     = title || byline || onClose;

  return createPortal(
    <div
      className="nxp-modal-backdrop"
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      <div className={`nxp-modal${sizeClass}${alignClass} ${className}`.trim()}>

        {/* ── Close button (always top-right, shown when onClose provided) ── */}
        {onClose && (
          <button
            type="button"
            className="nxp-modal__close"
            aria-label="Close modal"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        )}

        {/* ── Header ── */}
        {hasHead && (
          <div className="nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head">
            {title  && <div className="nxp-modal__title">{title}</div>}
            {byline && <div className="nxp-modal__byline">{byline}</div>}
          </div>
        )}

        {/* ── Body ── */}
        <div className="nxp-modal__body">{children}</div>

        {/* ── Footer ── */}
        {footer && <div className="nxp-modal__foot">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}

export { Modal };
export default Modal;
