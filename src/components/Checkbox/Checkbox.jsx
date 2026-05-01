import React, { useState, useCallback, useId } from 'react';

function Checkbox({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(false);
  const isChecked = isControlled ? checked : internal;
  const id = useId();

  const handleChange = useCallback(() => {
    if (disabled) return;
    if (isControlled) {
      onChange && onChange(!checked);
    } else {
      setInternal((prev) => !prev);
    }
  }, [disabled, isControlled, checked, onChange]);

  const classes = [
    'nxp-checkbox',
    isChecked ? 'is-checked' : '',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classes} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        className="nxp-checkbox__box"
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); handleChange(); } }}
        onClick={(e) => { e.preventDefault(); handleChange(); }}
      >
        {isChecked && (
          <svg className="nxp-checkbox__check" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

export { Checkbox };
export default Checkbox;
