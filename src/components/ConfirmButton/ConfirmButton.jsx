import React, { useState, useRef, useEffect, useCallback } from 'react';

function ConfirmButton({
  children,
  label,                          // fallback trigger label when no children
  onConfirm,

  /* text — all translatable */
  message       = '',             // optional message above actions; empty = hidden
  confirmText   = 'Remove',
  cancelText    = 'Cancel',

  /* styling */
  variant       = 'error',        // 'error' | 'warning' | 'primary'
  confirmVariant,                  // defaults to variant
  size          = 'md',           // 'sm' | 'md'
  disabled      = false,

  /* behaviour */
  autoResetMs   = 0,              // auto-dismiss confirmation after N ms (0 = never)
  placement     = 'bottom-end',   // 'bottom-end' | 'bottom-start' | 'bottom'

  className     = '',
  btnClassName  = '',
}) {
  const [open, setOpen] = useState(false);
  const timerRef        = useRef(null);
  const wrapRef         = useRef(null);

  const handleCancel = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(false);
  }, []);

  const handleConfirm = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(false);
    onConfirm?.();
  }, [onConfirm]);

  const openConfirm = useCallback(() => {
    if (disabled) return;
    setOpen(true);
    if (autoResetMs > 0) {
      timerRef.current = setTimeout(() => setOpen(false), autoResetMs);
    }
  }, [disabled, autoResetMs]);

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    function onDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        handleCancel();
      }
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open, handleCancel]);

  /* close on Escape */
  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === 'Escape') handleCancel(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, handleCancel]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const cv        = confirmVariant ?? variant;
  const sizeClass = size === 'sm' ? ' nxp-confirm--sm' : '';
  const trigger   = children ?? label;

  return (
    <div
      ref={wrapRef}
      className={`nxp-confirm${sizeClass} ${className}`.trim()}
    >
      {/* ── Trigger button ── */}
      <button
        type="button"
        className={`nxp-btn nxp-btn--${variant}${btnClassName ? ' ' + btnClassName : ''}`}
        onClick={openConfirm}
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {trigger}
      </button>

      {/* ── Confirmation popover ── */}
      {open && (
        <div
          className="nxp-confirm__popover"
          data-placement={placement}
          role="dialog"
          aria-label="Confirm action"
          aria-modal="false"
        >
          {message && (
            <p className="nxp-confirm__message">{message}</p>
          )}
          <div className="nxp-confirm__actions">
            <button
              type="button"
              className="nxp-confirm__cancel"
              onClick={handleCancel}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className={`nxp-confirm__ok nxp-confirm__ok--${cv}`}
              onClick={handleConfirm}
              autoFocus
            >
              {confirmText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { ConfirmButton };
export default ConfirmButton;
