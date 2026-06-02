import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Progress({ value = 0, variant = 'default', className = '' }) {
  const clamped = Math.min(100, Math.max(0, value));

  const rootClass = useMemo(
    () => cn('nxp-progress', variant !== 'default' && `nxp-progress--${variant}`, className),
    [variant, className]
  );

  const barStyle = useMemo(() => ({ width: `${clamped}%` }), [clamped]);

  return (
    <div
      className={rootClass}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="nxp-progress__bar" style={barStyle} />
    </div>
  );
}

const ProgressMemoized = memo(Progress);
export { ProgressMemoized as Progress };
export default ProgressMemoized;
