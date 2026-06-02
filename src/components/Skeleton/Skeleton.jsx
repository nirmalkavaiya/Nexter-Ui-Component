import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Skeleton({ variant = 'line', width, style = {}, className = '' }) {
  const rootClass = useMemo(
    () => cn(
      'nxp-skeleton',
      variant === 'circle' && 'nxp-skeleton--circle',
      variant === 'title'  && 'nxp-skeleton--title',
      className
    ),
    [variant, className]
  );

  const combinedStyle = useMemo(
    () => ({ ...(width ? { width } : {}), ...style }),
    [width, style]
  );

  return (
    <span
      className={rootClass}
      style={combinedStyle}
      aria-hidden="true"
      role="presentation"
    />
  );
}

const SkeletonMemoized = memo(Skeleton);
export { SkeletonMemoized as Skeleton };
export default SkeletonMemoized;
