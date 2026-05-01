import React, { useState, useCallback } from 'react';

function Toggle({
  checked,
  onChange,
  disabled = false,
  variant,
  label,
  className = '',
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(false);
  const isChecked = isControlled ? checked : internal;

  const handleToggle = useCallback(() => {
    if (disabled) return;
    if (isControlled) {
      onChange && onChange(!checked);
    } else {
      setInternal((prev) => !prev);
    }
  }, [disabled, isControlled, checked, onChange]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        handleToggle();
      }
    },
    [handleToggle]
  );

  const classes = [
    'nxp-toggle',
    isChecked ? 'is-checked' : '',
    disabled ? 'is-disabled' : '',
    variant ? `nxp-toggle--${variant}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <span className="nxp-toggle__track">
        <span className="nxp-toggle__thumb" />
      </span>
      {label && <span>{label}</span>}
    </div>
  );
}

export { Toggle };
export default Toggle;
