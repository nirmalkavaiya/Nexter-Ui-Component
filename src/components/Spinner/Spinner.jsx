import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Spinner
 *
 * Props
 *  size      'sm' | 'md' | 'lg'  — default ring size (default type only)
 *  type      '' | 'wdk'          — empty = default border spinner; 'wdk' = dual-ring loader
 *  className extra classes on the root
 */
function Spinner({ size = 'md', type = '', className = '' }) {
  if (type === 'wdk') {
    const wdkSizeClass =
      size === 'sm' ? 'nxp-spinner-wdk--sm' :
      size === 'lg' ? 'nxp-spinner-wdk--lg' :
      '';

    return (
      <span
        className={cn('nxp-spinner-wdk', wdkSizeClass, className)}
        role="status"
        aria-label="Loading"
      >
        <span className="nxp-spinner-wdk__outer">
          <span className="nxp-spinner-wdk__inner" />
        </span>
      </span>
    );
  }

  const sizeClass =
    size === 'sm' ? 'nxp-spinner--sm' :
    size === 'lg' ? 'nxp-spinner--lg' :
    '';

  return (
    <span
      className={cn('nxp-spinner', sizeClass, className)}
      role="status"
      aria-label="Loading"
    />
  );
}

export { Spinner };
export default Spinner;
