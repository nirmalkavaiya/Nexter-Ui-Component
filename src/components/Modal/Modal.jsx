import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import Button from '../Button';

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
 *   open, onClose, size, align, title, byline, children, className
 *   byline            {string|ReactNode} — plain text, HTML string, or JSX
 *   footer            {ReactNode} — custom footer content (wins over preset actions)
 *   footerClassName   {string}    — extra classes on .nxp-modal__foot
 *   Preset footer (used when `footer` is omitted and at least one is set):
 *   doclink           {string}    — docs URL → underline link button
 *   doclinkText       {ReactNode} — link label (default "Read How it Works")
 *   onClick           {function}  — primary action handler
 *   buttonText        {ReactNode} — primary button label (default "Save")
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
  footerClassName,
  doclink,
  doclinkText,
  buttonText,
  onClick,
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

  const hasPresetActions = Boolean(doclink || onClick);
  const hasCustomFooter = footer != null && footer !== true && footer !== false;
  const showFooter = hasCustomFooter || hasPresetActions;

  const footLayoutClass =
    !hasCustomFooter && hasPresetActions
      ? doclink && onClick
        ? 'nxp-flex-between'
        : onClick
          ? 'nxp-flex-end'
          : 'nxp-flex-start'
      : '';

  if (!open) return null;

  const sizeClass   = size !== 'md' ? ` nxp-modal--${size}` : '';
  const alignClass  = align === 'center' ? ' nxp-modal--center' : '';
  const hasHead     = title || byline || onClose;

  const docLabel = doclinkText ?? 'Read How it Works';
  const primaryLabel = buttonText ?? 'Save';
  const isBylineHtml =
    typeof byline === 'string' && /<[a-z][\s\S]*>/i.test(byline);

  return createPortal(
    <div
      className="nxp-modal-backdrop"
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      <div className={`nxp-modal${sizeClass}${alignClass} ${className}`.trim()}>

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

        {hasHead && (
          <div className="nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head">
            {title  && <div className="nxp-modal__title">{title}</div>}
            {byline && (
              isBylineHtml ? (
                <div
                  className="nxp-modal__byline"
                  dangerouslySetInnerHTML={{ __html: byline }}
                />
              ) : (
                <div className="nxp-modal__byline">{byline}</div>
              )
            )}
          </div>
        )}

        <div className="nxp-modal__body">{children}</div>

        {showFooter && (
          <div
            className={cn('nxp-modal__foot', footLayoutClass, footerClassName)}
          >
            {hasCustomFooter ? (
              footer
            ) : (
              <>
                {doclink && (
                  <Button
                    className="nxp-text-primary nxp-weight-regular nxp-text-hover"
                    variant="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={doclink}
                  >
                    {docLabel}
                  </Button>
                )}
                {onClick && (
                  <Button type="button" variant="primary" onClick={onClick}>
                    {primaryLabel}
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export { Modal };
export default Modal;
