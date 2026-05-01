import React from 'react';

function Toast({ variant = 'default', icon, title, description, onClose, className = '' }) {
  const defaultIcon = variant === 'error' ? '✕' : '✓';
  const displayIcon = icon !== undefined ? icon : defaultIcon;

  return (
    <div className={`nxp-toast${variant !== 'default' ? ` nxp-toast--${variant}` : ''} ${className}`} role="alert" aria-live="assertive">
      {displayIcon && (
        <span className="nxp-toast__icon" aria-hidden="true">{displayIcon}</span>
      )}
      <div className="nxp-toast__body">
        {title && <div className="nxp-toast__title">{title}</div>}
        {description && <div className="nxp-toast__desc">{description}</div>}
      </div>
      {onClose && (
        <button type="button" className="nxp-toast__close" aria-label="Close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
}

export { Toast };
export default Toast;
