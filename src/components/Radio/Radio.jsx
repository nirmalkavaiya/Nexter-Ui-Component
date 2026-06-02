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

  /* Stable class — was filter/join array every render */
  const classes = useMemo(
    () => cn('nxp-radio', checked && 'is-checked', disabled && 'is-disabled', className),
    [checked, disabled, className]
  );

  /* Stable change handler */
  const handleChange = useCallback(() => {
    if (!disabled) onChange && onChange(value);
  }, [disabled, onChange, value]);

  /* Stable keyboard handler — was an inline fn in onKeyDown */
  const handleKeyDown = useCallback(
    (e) => { if (e.key === ' ') { e.preventDefault(); handleChange(); } },
    [handleChange]
  );

  /* Stable click handler on dot — was an inline fn in onClick */
  const handleDotClick = useCallback(
    (e) => { e.preventDefault(); handleChange(); },
    [handleChange]
  );

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
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        className="nxp-radio__dot"
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={handleDotClick}
      >
        <span className="nxp-radio__inner" />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

export { Radio };
export default Radio;
