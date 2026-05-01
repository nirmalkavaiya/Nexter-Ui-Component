import React from 'react';

function Select({
  options = [],
  value,
  onChange,
  disabled = false,
  placeholder,
  className = '',
  ...rest
}) {
  return (
    <select
      className={`nxp-select ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export { Select };
export default Select;
