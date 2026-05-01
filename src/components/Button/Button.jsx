import React from 'react';

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
  const classes = [
    'nxp-btn',
    `nxp-btn--${variant}`,
    size && size !== 'md' ? `nxp-btn--${size}` : '',
    icon ? 'nxp-btn--icon' : '',
    loading ? 'nxp-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
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
