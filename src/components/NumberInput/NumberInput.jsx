import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';

const MinusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function NumberInput({
  value,
  defaultValue = 0,
  onChange,

  min,
  max,
  step    = 1,
  precision,  // decimal places — inferred from step if omitted

  label,
  prefix,
  suffix,
  hint,
  error,

  disabled    = false,
  readOnly    = false,
  className   = '',

  /* translatable */
  increaseLabel = 'Increase',
  decreaseLabel = 'Decrease',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const [raw, setRaw] = useState('');
  const [editing, setEditing] = useState(false);

  const current = isControlled ? value : internal;

  /* infer decimal precision from step */
  const decimals = useMemo(
    () => precision ?? (step % 1 !== 0 ? String(step).split('.')[1]?.length ?? 0 : 0),
    [precision, step]
  );

  const clamp = useCallback(
    (n) => {
      if (isNaN(n)) return current;
      if (min !== undefined) n = Math.max(min, n);
      if (max !== undefined) n = Math.min(max, n);
      return decimals > 0 ? parseFloat(n.toFixed(decimals)) : Math.round(n);
    },
    [current, min, max, decimals]
  );

  const commit = useCallback(
    (n) => {
      const clamped = clamp(n);
      if (!isControlled) setInternal(clamped);
      onChange?.(clamped);
    },
    [clamp, isControlled, onChange]
  );

  const increment = useCallback(() => commit(Number(current) + step), [commit, current, step]);
  const decrement = useCallback(() => commit(Number(current) - step), [commit, current, step]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowUp')   { e.preventDefault(); increment(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); decrement(); }
    },
    [increment, decrement]
  );

  const handleFocus = useCallback(() => {
    setEditing(true);
    setRaw(String(current ?? ''));
  }, [current]);

  const handleChange = useCallback((e) => setRaw(e.target.value), []);

  const handleBlur = useCallback(() => {
    setEditing(false);
    const n = parseFloat(raw);
    commit(isNaN(n) ? current : n);
  }, [raw, current, commit]);

  const atMin = min !== undefined && Number(current) <= min;
  const atMax = max !== undefined && Number(current) >= max;

  const rootClass = useMemo(
    () => cn('nxp-num', error && 'nxp-num--error', disabled && 'nxp-num--disabled', className),
    [error, disabled, className]
  );

  const displayVal = editing ? raw : String(current ?? '');

  return (
    <div className={rootClass}>
      {label && <label className="nxp-num__label">{label}</label>}

      <div className="nxp-num__wrap">
        {/* Decrement */}
        <button
          type="button"
          className="nxp-num__step nxp-num__step--dec"
          onClick={decrement}
          disabled={disabled || readOnly || atMin}
          aria-label={decreaseLabel}
          tabIndex={-1}
        >
          <MinusIcon />
        </button>

        {/* Input area */}
        <div className="nxp-num__field">
          {prefix && <span className="nxp-num__prefix">{prefix}</span>}
          <input
            type="text"
            inputMode="decimal"
            className="nxp-num__input"
            value={displayVal}
            disabled={disabled}
            readOnly={readOnly}
            aria-label={label ?? 'Number input'}
            aria-invalid={!!error}
            onFocus={handleFocus}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          {suffix && <span className="nxp-num__suffix">{suffix}</span>}
        </div>

        {/* Increment */}
        <button
          type="button"
          className="nxp-num__step nxp-num__step--inc"
          onClick={increment}
          disabled={disabled || readOnly || atMax}
          aria-label={increaseLabel}
          tabIndex={-1}
        >
          <PlusIcon />
        </button>
      </div>

      {hint  && !error && <span className="nxp-num__hint">{hint}</span>}
      {error && <span className="nxp-num__error" role="alert">{error}</span>}
    </div>
  );
}

export { NumberInput };
export default NumberInput;
