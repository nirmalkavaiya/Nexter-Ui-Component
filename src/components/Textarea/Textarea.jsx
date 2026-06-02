import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';

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

  /* Stable handler — was a plain fn re-created every render */
  const handleChange = useCallback(
    (e) => {
      if (!isControlled) setInternal(e.target.value);
      onChange?.(e);
    },
    [isControlled, onChange]
  );

  /* Stable root class */
  const rootClass = useMemo(
    () => cn('nxp-textarea', invalid && 'nxp-textarea--invalid', disabled && 'nxp-textarea--disabled', className),
    [invalid, disabled, className]
  );

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
