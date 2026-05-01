import React, { useState, useCallback, useRef, useEffect } from 'react';

function Slider({
  /* numeric value */
  min          = 0,
  max          = 100,
  step         = 1,
  value,                 // controlled
  defaultValue = 50,     // uncontrolled seed
  onChange,              // (numericValue) => void

  /* label */
  label,

  /* static unit — string | false */
  unit         = 'px',

  /* dynamic units — string[] — triggers dropdown */
  units,                 // e.g. ['px', '%', 'rem', 'em']
  onUnitChange,          // controlled unit handler (unit: string) => void

  disabled     = false,
  className    = '',
}) {
  /* ── Numeric value state ── */
  const isControlled   = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const current        = isControlled ? value : internal;

  /* ── Unit state ── */
  const hasDropdown      = Array.isArray(units) && units.length > 0;
  const defaultUnit      = (hasDropdown ? units[0] : (unit || ''));
  const isUnitControlled = hasDropdown && onUnitChange !== undefined && unit !== undefined && unit !== false;
  const [internalUnit, setInternalUnit] = useState(defaultUnit);
  const activeUnit = isUnitControlled ? unit : internalUnit;

  /* ── Range background fill ── */
  const rangeRef = useRef(null);
  const percent  = Math.round(((current - min) / (max - min)) * 100);

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.setProperty('--val', String(percent));
    }
  }, [percent]);

  /* ── Handlers ── */
  const handleRange = useCallback((e) => {
    const v = Number(e.target.value);
    if (!isControlled) setInternal(v);
    onChange?.(v);
  }, [isControlled, onChange]);

  const handleInput = useCallback((e) => {
    const raw = e.target.value;
    // allow empty string while typing
    if (raw === '') {
      if (!isControlled) setInternal('');
      return;
    }
    const v = Math.min(max, Math.max(min, Number(raw)));
    if (isNaN(v)) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  }, [isControlled, min, max, onChange]);

  const handleInputBlur = useCallback((e) => {
    // snap to min if left empty
    if (e.target.value === '') {
      if (!isControlled) setInternal(min);
      onChange?.(min);
    }
  }, [isControlled, min, onChange]);

  const handleUnitChange = useCallback((e) => {
    const u = e.target.value;
    if (!isUnitControlled) setInternalUnit(u);
    onUnitChange?.(u);
  }, [isUnitControlled, onUnitChange]);

  /* ── Render helpers ── */
  const showUnit = unit !== false;

  const unitSuffix = !hasDropdown && showUnit && activeUnit
    ? <span className="nxp-slider__unit-suffix">{activeUnit}</span>
    : null;

  const unitSelect = hasDropdown
    ? (
      <select
        className="nxp-slider__unit-select"
        value={activeUnit}
        onChange={handleUnitChange}
        disabled={disabled}
        aria-label="Unit"
      >
        {units.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
    ) : null;

  /* ── Root class ── */
  const rootClass = ['nxp-slider', disabled ? 'nxp-slider--disabled' : '', className]
    .filter(Boolean).join(' ');

  const sliderId = label ? `nxp-slider-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={rootClass}>

      {/* ── Header row: label + controls ── */}
      <div className="nxp-slider__header">
        {label && (
          <label className="nxp-slider__label" htmlFor={sliderId}>
            {label}
          </label>
        )}

        <div className="nxp-slider__controls">
          {/* Unit dropdown (left of input, matches screenshot) */}
          {unitSelect}

          {/* Numeric input */}
          <div className="nxp-slider__input-wrap">
            <input
              type="number"
              className="nxp-slider__input"
              value={current}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              onChange={handleInput}
              onBlur={handleInputBlur}
              aria-label={label ? `${label} value` : 'Slider value'}
            />
            {unitSuffix}
          </div>
        </div>
      </div>

      {/* ── Track row ── */}
      <input
        id={sliderId}
        ref={rangeRef}
        type="range"
        className="nxp-slider__range"
        min={min}
        max={max}
        step={step}
        value={current === '' ? min : current}
        onChange={handleRange}
        disabled={disabled}
        style={{ '--val': percent }}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={current === '' ? min : current}
        aria-label={label ?? 'Slider'}
      />

    </div>
  );
}

export { Slider };
export default Slider;
