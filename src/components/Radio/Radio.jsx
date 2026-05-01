import React, { useId } from 'react';

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

  const classes = [
    'nxp-radio',
    checked ? 'is-checked' : '',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = () => {
    if (!disabled) onChange && onChange(value);
  };

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
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        className="nxp-radio__dot"
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); handleChange(); } }}
        onClick={(e) => { e.preventDefault(); handleChange(); }}
      >
        <span className="nxp-radio__inner" />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

export { Radio };
export default Radio;
