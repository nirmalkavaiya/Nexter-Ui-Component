import React, { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

/* ─── Close icon ────────────────────────────────────────────── */
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

/* ─── Drawer ─────────────────────────────────────────────────
 *
 * Props
 * ─────
 * open          boolean               Controls visibility
 * onClose       () => void            Called when backdrop clicked or Esc pressed
 * placement     'left'|'right'|'top'|'bottom'  (default: 'right')
 * size          'sm'|'md'|'lg'|'xl'|'full'     (default: 'md')
 * title         ReactNode             Header title
 * byline        ReactNode             Subtitle below title
 * footer        ReactNode             Sticky footer content
 * closeOnBackdrop  boolean            Click backdrop to close (default: true)
 * closeOnEscape    boolean            Esc to close (default: true)
 * hideClose     boolean               Hide the × button (default: false)
 * className     string
 * children      ReactNode
 */
function Drawer({
  open = false,
  onClose,
  placement = 'right',
  size = 'md',
  title,
  byline,
  footer,
  closeOnBackdrop = true,
  closeOnEscape = true,
  hideClose = false,
  className = '',
  children,
}) {
  const panelRef = useRef(null);

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  /* ── Escape key ── */
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape' && closeOnEscape && onClose) onClose(); },
    [onClose, closeOnEscape]
  );
  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, handleKey]);

  /* ── Focus trap: move focus into panel on open ── */
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      const el = panelRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      el?.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [open]);

  if (!open) return null;

  const cls = [
    'nxp-drawer__panel',
    `nxp-drawer__panel--${placement}`,
    `nxp-drawer__panel--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return createPortal(
    <div
      className={`nxp-drawer__backdrop nxp-drawer__backdrop--${placement}`}
      onMouseDown={(e) => { if (closeOnBackdrop && e.target === e.currentTarget && onClose) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : 'Drawer'}
    >
      <div className={cls} ref={panelRef}>
        {/* ── Header ── */}
        {(title || !hideClose) && (
          <div className="nxp-drawer__head">
            <div className="nxp-drawer__head-text">
              {title && <div className="nxp-drawer__title">{title}</div>}
              {byline && <div className="nxp-drawer__byline">{byline}</div>}
            </div>
            {!hideClose && onClose && (
              <button
                type="button"
                className="nxp-drawer__close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}

        {/* ── Body ── */}
        <div className="nxp-drawer__body">{children}</div>

        {/* ── Footer ── */}
        {footer && <div className="nxp-drawer__foot">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}

export { Drawer };
export default Drawer;
