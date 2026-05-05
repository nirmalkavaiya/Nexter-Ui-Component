import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Button — uses bundled nxp-btn--* CSS (works without Tailwind in consumer projects).
 * cn() merges any extra className cleanly (Tailwind classes work if consumer has Tailwind).
 */
function Button({
  variant = 'secondary',
  size,
  icon = false,
  loading = false,
  disabled = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  return (
    <button
      className={cn(
        'nxp-btn',
        `nxp-btn--${variant}`,
        size && size !== 'md' ? `nxp-btn--${size}` : '',
        icon ? 'nxp-btn--icon' : '',
        loading ? 'nxp-btn--loading' : '',
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="nxp-btn__spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}

export { Button };
export default Button;
