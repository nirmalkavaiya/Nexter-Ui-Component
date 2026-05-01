import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

function Modal({
  open = false,
  onClose,
  size = 'md',
  title,
  byline,
  children,
  footer,
  className = '',
}) {
  // Body scroll lock
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Esc to close
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

  const sizeClass = size !== 'md' ? ` nxp-modal--${size}` : '';

  return createPortal(
    <div
      className="nxp-modal-backdrop"
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className={`nxp-modal${sizeClass} ${className}`}>
        <div className="nxp-modal__head">
          <div style={{ flex: 1 }}>
            {title && <div className="nxp-modal__title">{title}</div>}
            {byline && <div className="nxp-modal__byline">{byline}</div>}
          </div>
          {onClose && (
            <button type="button" className="nxp-modal__close" aria-label="Close modal" onClick={onClose}>
              ×
            </button>
          )}
        </div>
        <div className="nxp-modal__body">{children}</div>
        {footer && <div className="nxp-modal__foot">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}

export { Modal };
export default Modal;
