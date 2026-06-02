import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Status({ variant = 'default', children, className = '' }) {
  const rootClass = useMemo(
    () => cn('nxp-status', variant !== 'default' && `nxp-status--${variant}`, className),
    [variant, className]
  );
  return (
    <span className={rootClass} aria-label={`Status: ${variant}`}>
      {children}
    </span>
  );
}

const StatusMemoized = memo(Status);
export { StatusMemoized as Status };
export default StatusMemoized;
