import React from 'react';

function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  invalid = false,
  className = '',
  ...rest
}) {
  const classes = ['nxp-input', invalid ? 'nxp-input--invalid' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={invalid ? 'true' : undefined}
      {...rest}
    />
  );
}

export { Input };
export default Input;
