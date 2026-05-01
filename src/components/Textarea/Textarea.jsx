import React, { useState } from 'react';

function Textarea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  invalid = false,
  maxLength,
  showCount = false,
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? '');
  const current = isControlled ? value : internal;

  function handleChange(e) {
    if (!isControlled) setInternal(e.target.value);
    onChange?.(e);
  }

  const rootClass = [
    'nxp-textarea',
    invalid    ? 'nxp-textarea--invalid'  : '',
    disabled   ? 'nxp-textarea--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <textarea
        className="nxp-textarea__control"
        value={current}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        aria-invalid={invalid || undefined}
        {...rest}
      />
      {showCount && maxLength != null && (
        <span className="nxp-textarea__count">
          {current.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

export { Textarea };
export default Textarea;
