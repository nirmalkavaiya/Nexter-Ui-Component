import React from 'react';

function Status({ variant = 'default', children, className = '' }) {
  const variantClass = variant !== 'default' ? ` nxp-status--${variant}` : '';
  return (
    <span className={`nxp-status${variantClass} ${className}`} aria-label={`Status: ${variant}`}>
      {children}
    </span>
  );
}

export { Status };
export default Status;
