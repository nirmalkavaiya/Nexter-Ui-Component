import React, { useId, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';
import Radio from '../Radio/Radio';
import Tooltip from '../Tooltip/Tooltip';

function RadioGroup({
  options          = [],
  value,
  onChange,
  name,
  disabled         = false,
  tooltipPosition  = 'top',
  className        = '',
}) {
  const autoId    = useId();
  const groupName = name || autoId;

  /* Stable onChange wrapper — prevents Radio children re-rendering due to new fn ref */
  const handleChange = useCallback((val) => onChange?.(val), [onChange]);

  /* Stable root class */
  const rootClass = useMemo(
    () => cn('nxp-radio-group', className),
    [className]
  );

  return (
    <div className={rootClass} role="radiogroup">
      {options.map((opt) => {
        const isChecked  = value === opt.value;
        const isDisabled = disabled || !!opt.disabled;
        const tipPos     = opt.tooltipPosition ?? tooltipPosition;

        const itemClass = cn(
          'nxp-radio-group__item',
          isChecked  && 'is-checked',
          isDisabled && 'is-disabled',
        );

        return (
          <div key={opt.value} className={itemClass}>
            <Radio
              name={groupName}
              value={opt.value}
              checked={isChecked}
              onChange={handleChange}
              disabled={isDisabled}
              label={opt.label}
            />
            {opt.tooltip && (
              <Tooltip content={opt.tooltip} position={tipPos} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export { RadioGroup };
export default RadioGroup;
