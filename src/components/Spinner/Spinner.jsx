import React from 'react';

function Spinner({ size = 'md', className = '' }) {
  const sizeClass =
    size === 'sm' ? ' nxp-spinner--sm' :
    size === 'lg' ? ' nxp-spinner--lg' : '';

  return (
    <span
      className={`nxp-spinner${sizeClass} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}

export { Spinner };
export default Spinner;
