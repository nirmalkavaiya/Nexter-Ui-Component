import React, { useState, useRef, useEffect } from 'react';

function ConfirmButton({
  children,
  onConfirm,

  /* text — all translatable */
  message       = 'Are you sure?',
  confirmText   = 'Yes, confirm',
  cancelText    = 'Cancel',

  /* styling */
  variant       = 'error',      // 'error' | 'warning' | 'primary'
  confirmVariant,                // defaults to same as variant
  size          = 'md',          // 'sm' | 'md'
  disabled      = false,

  /* timing */
  autoResetMs   = 0,             // auto-cancel confirmation after N ms (0 = never)

  className     = '',
}) {
  const [confirming, setConfirming] = useState(false);
  const timerRef = useRef(null);

  function openConfirm() {
    if (disabled) return;
    setConfirming(true);
    if (autoResetMs > 0) {
      timerRef.current = setTimeout(() => setConfirming(false), autoResetMs);
    }
  }

  function handleConfirm() {
    clearTimeout(timerRef.current);
    setConfirming(false);
    onConfirm?.();
  }

  function handleCancel() {
    clearTimeout(timerRef.current);
    setConfirming(false);
  }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const cv = confirmVariant ?? variant;
  const sizeClass = size === 'sm' ? ' nxp-confirm--sm' : '';

  if (confirming) {
    return (
      <div className={`nxp-confirm nxp-confirm--inline${sizeClass} ${className}`} role="group" aria-label="Confirm action">
        <span className="nxp-confirm__message">{message}</span>
        <button
          type="button"
          className={`nxp-confirm__ok nxp-confirm__ok--${cv}`}
          onClick={handleConfirm}
          autoFocus
        >
          {confirmText}
        </button>
        <button
          type="button"
          className="nxp-confirm__cancel"
          onClick={handleCancel}
        >
          {cancelText}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={[`nxp-btn nxp-btn--${variant}`, sizeClass, className].filter(Boolean).join(' ')}
      onClick={openConfirm}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export { ConfirmButton };
export default ConfirmButton;
