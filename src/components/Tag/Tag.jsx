import React from 'react';

function Tag({ variant = 'default', children, className = '' }) {
  const variantClass = variant !== 'default' ? ` nxp-tag--${variant}` : '';
  return (
    <span className={`nxp-tag${variantClass} ${className}`}>{children}</span>
  );
}

export { Tag };
export default Tag;
