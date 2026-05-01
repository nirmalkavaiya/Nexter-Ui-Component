import React, { useState, useCallback } from 'react';

function Stepper({
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  disabled = false,
  className = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(0);
  const current = isControlled ? value : internal;

  const update = useCallback(
    (next) => {
      const clamped = max !== undefined ? Math.min(max, Math.max(min, next)) : Math.max(min, next);
      if (isControlled) {
        onChange && onChange(clamped);
      } else {
        setInternal(clamped);
        onChange && onChange(clamped);
      }
    },
    [isControlled, onChange, min, max]
  );

  const handleInput = (e) => {
    const v = parseInt(e.target.value, 10);
    if (!isNaN(v)) update(v);
  };

  const atMin = current <= min;
  const atMax = max !== undefined && current >= max;

  return (
    <div className={`nxp-stepper ${className}`} aria-label="Stepper">
      <button
        type="button"
        className="nxp-stepper__btn"
        onClick={() => update(current - step)}
        disabled={disabled || atMin}
        aria-label="Decrease"
      >
        −
      </button>
      <input
        type="number"
        className="nxp-stepper__input"
        value={current}
        onChange={handleInput}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        aria-label="Value"
      />
      <button
        type="button"
        className="nxp-stepper__btn"
        onClick={() => update(current + step)}
        disabled={disabled || atMax}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

export { Stepper };
export default Stepper;
