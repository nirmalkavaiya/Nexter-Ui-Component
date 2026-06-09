import React, { useId, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Radio({
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  label,
  className = '',
}) {
  const id = useId();

  const classes = useMemo(
    () => cn('nxp-radio', checked && 'is-checked', disabled && 'is-disabled', className),
    [checked, disabled, className]
  );

  const handleChange = useCallback(() => {
    if (!disabled) onChange && onChange(value);
  }, [disabled, onChange, value]);

  return (
    <label className={classes} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="nxp-sr-only"
      />
      <div className="nxp-radio__dot" aria-hidden="true">
        <span className="nxp-radio__inner" />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

export { Radio };
export default Radio;
