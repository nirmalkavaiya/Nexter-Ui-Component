import React from 'react';

const DEFAULT_ICONS = {
  info: 'i',
  success: '✓',
  warning: '!',
  error: '×',
};

function Alert({ variant = 'info', icon, children, className = '' }) {
  const displayIcon = icon !== undefined ? icon : DEFAULT_ICONS[variant] || 'i';

  return (
    <div
      className={`nxp-alert nxp-alert--${variant} ${className}`}
      role="alert"
    >
      <span className="nxp-alert__icon" aria-hidden="true">
        {displayIcon}
      </span>
      <div className="nxp-alert__body">{children}</div>
    </div>
  );
}

export { Alert };
export default Alert;
