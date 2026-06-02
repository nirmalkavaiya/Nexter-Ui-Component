import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';

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

  /* Stable input handler — was re-created every render */
  const handleInput = useCallback(
    (e) => {
      const v = parseInt(e.target.value, 10);
      if (!isNaN(v)) update(v);
    },
    [update]
  );

  /* Stable step handlers */
  const handleDecrement = useCallback(() => update(current - step), [update, current, step]);
  const handleIncrement = useCallback(() => update(current + step), [update, current, step]);

  const atMin = current <= min;
  const atMax = max !== undefined && current >= max;

  const rootClass = useMemo(
    () => cn('nxp-stepper', disabled && 'nxp-stepper--disabled', className),
    [disabled, className]
  );

  return (
    <div className={rootClass} aria-label="Stepper">
      <button
        type="button"
        className="nxp-stepper__btn"
        onClick={handleDecrement}
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
        onClick={handleIncrement}
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
