import React, { useState, useCallback } from 'react';

function Segmented({ options = [], value, onChange, className = '' }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(options[0]?.value);
  const current = isControlled ? value : internal;

  const handleSelect = useCallback(
    (v) => {
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
    <div className={`nxp-segmented ${className}`} role="group" aria-label="Segmented control">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`nxp-segmented__option${current === opt.value ? ' is-selected' : ''}`}
          onClick={() => handleSelect(opt.value)}
          aria-pressed={current === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export { Segmented };
export default Segmented;
