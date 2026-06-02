import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Tag({ variant = 'default', children, className = '' }) {
  const rootClass = useMemo(
    () => cn('nxp-tag', variant !== 'default' && `nxp-tag--${variant}`, className),
    [variant, className]
  );
  return <span className={rootClass}>{children}</span>;
}

const TagMemoized = memo(Tag);
export { TagMemoized as Tag };
export default TagMemoized;
