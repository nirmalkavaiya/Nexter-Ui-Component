import React, { useState, useCallback } from 'react';

const DEFAULT_ICONS = {
  default: 'ℹ',
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

function Notice({
  variant = 'default',
  icon,
  children,
  onDismiss,
  dismissible = true,
  className = '',
}) {
  const [dismissing, setDismissing] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = useCallback(() => {
    setDismissing(true);
    setTimeout(() => {
      setDismissed(true);
      onDismiss && onDismiss();
    }, 220);
  }, [onDismiss]);

  if (dismissed) return null;

  const displayIcon = icon !== undefined ? icon : DEFAULT_ICONS[variant] || DEFAULT_ICONS.default;
  const variantClass = variant !== 'default' ? ` nxp-notice--${variant}` : '';

  return (
    <div
      className={`nxp-notice${variantClass}${dismissing ? ' is-dismissing' : ''} ${className}`}
      role="status"
    >
      <span className="nxp-notice__icon" aria-hidden="true">{displayIcon}</span>
      <div className="nxp-notice__body">{children}</div>
      {dismissible && (
        <button
          type="button"
          className="nxp-notice__close"
          aria-label="Dismiss"
          onClick={handleDismiss}
        >
          ×
        </button>
      )}
    </div>
  );
}

export { Notice };
export default Notice;
