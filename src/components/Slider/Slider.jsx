import React, { useState, useCallback, useRef, useEffect } from 'react';

function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  unit = '',
  disabled = false,
  className = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(50);
  const current = isControlled ? value : internal;
  const rangeRef = useRef(null);

  const percent = ((current - min) / (max - min)) * 100;

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.setProperty('--val', String(percent));
    }
  }, [percent]);

  const handleChange = useCallback(
    (e) => {
      const v = Number(e.target.value);
      if (isControlled) {
        onChange && onChange(v);
      } else {
        setInternal(v);
        onChange && onChange(v);
      }
    },
    [isControlled, onChange]
  );

  return (
    <div className={`nxp-slider ${className}`}>
      <input
        ref={rangeRef}
        type="range"
        className="nxp-slider__range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={handleChange}
        disabled={disabled}
        style={{ '--val': percent }}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={current}
      />
      <span className="nxp-slider__value">
        {current}{unit}
      </span>
    </div>
  );
}

export { Slider };
export default Slider;
