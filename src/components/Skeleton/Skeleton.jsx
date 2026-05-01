import React from 'react';

function Skeleton({ variant = 'line', width, style = {}, className = '' }) {
  const variantClass =
    variant === 'circle' ? ' nxp-skeleton--circle' :
    variant === 'title'  ? ' nxp-skeleton--title'  : '';

  const combinedStyle = { ...(width ? { width } : {}), ...style };

  return (
    <span
      className={`nxp-skeleton${variantClass} ${className}`}
      style={combinedStyle}
      aria-hidden="true"
      role="presentation"
    />
  );
}

export { Skeleton };
export default Skeleton;
