import React from 'react';

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  className = '',
  ...rest
}) {
  return (
    <textarea
      className={`nxp-textarea ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      {...rest}
    />
  );
}

export { Textarea };
export default Textarea;
