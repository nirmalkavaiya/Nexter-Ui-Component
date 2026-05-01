import React from 'react';

const DEFAULT_ICONS = {
  default: '🚀',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

function Banner({ variant = 'default', icon, title, text, actions, className = '' }) {
  const displayIcon = icon !== undefined ? icon : DEFAULT_ICONS[variant];
  const variantClass = variant !== 'default' ? ` nxp-banner--${variant}` : '';

  return (
    <div className={`nxp-banner${variantClass} ${className}`} role="region">
      {displayIcon && (
        <span className="nxp-banner__icon" aria-hidden="true">{displayIcon}</span>
      )}
      <div className="nxp-banner__body">
        {title && <div className="nxp-banner__title">{title}</div>}
        {text && <p className="nxp-banner__text">{text}</p>}
        {actions && <div className="nxp-banner__actions">{actions}</div>}
      </div>
    </div>
  );
}

export { Banner };
export default Banner;
