import React, { memo } from 'react';

const DEFAULT_ICONS = {
  default: '🚀',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

function Banner({ variant = 'default', size = 'md', icon, title, text, actions, className = '' }) {
  const displayIcon = icon !== undefined ? icon : DEFAULT_ICONS[variant];
  const sizeClass = size !== 'md' ? ` nxp-banner--${size}` : '';
  const variantClass = variant !== 'default' ? ` nxp-banner--${variant}` : '';
  const rootClass = `nxp-banner${sizeClass}${variantClass}${className ? ` ${className}` : ''}`.trim();

  return (
    <div className={rootClass} role="region">
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

const BannerMemoized = memo(Banner);
export { BannerMemoized as Banner };
export default BannerMemoized;
