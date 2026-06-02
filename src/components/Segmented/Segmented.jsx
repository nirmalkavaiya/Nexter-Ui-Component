import React, { useState, useCallback, useMemo, memo } from 'react';
import { cn } from '../../lib/utils';

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

  /* Single stable handler for all options — reads value from data attribute.
     Eliminates one new arrow fn per option per render. */
  const handleClick = useCallback(
    (e) => handleSelect(e.currentTarget.dataset.value),
    [handleSelect]
  );

  const rootClass = useMemo(
    () => cn('nxp-segmented', className),
    [className]
  );

  return (
    <div className={rootClass} role="group" aria-label="Segmented control">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          data-value={opt.value}
          className={`nxp-segmented__option${current === opt.value ? ' is-selected' : ''}`}
          onClick={handleClick}
          aria-pressed={current === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

const SegmentedMemoized = memo(Segmented);
export { SegmentedMemoized as Segmented };
export default SegmentedMemoized;
