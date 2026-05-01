import React from 'react';

function Progress({ value = 0, variant = 'default', className = '' }) {
  const clamped = Math.min(100, Math.max(0, value));
  const variantClass = variant !== 'default' ? ` nxp-progress--${variant}` : '';

  return (
    <div
      className={`nxp-progress${variantClass} ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="nxp-progress__bar" style={{ width: `${clamped}%` }} />
    </div>
  );
}

export { Progress };
export default Progress;
