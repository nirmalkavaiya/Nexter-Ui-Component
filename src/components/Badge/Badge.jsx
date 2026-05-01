import React from 'react';

function Badge({ variant = 'default', children, className = '' }) {
  if (variant === 'gradient') {
    return <span className={`nxp-badge nxp-badge--gradient ${className}`}>{children}</span>;
  }
  if (['primary', 'success', 'warning', 'error'].includes(variant)) {
    return <span className={`nxp-badge nxp-badge--${variant} ${className}`}>{children}</span>;
  }
  return <span className={`nxp-badge ${className}`}>{children}</span>;
}

export { Badge };
export default Badge;
