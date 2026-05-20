import React, { useId } from 'react';
import Radio from '../Radio/Radio';
import Tooltip from '../Tooltip/Tooltip';

/**
 * RadioGroup
 *
 * A horizontal bordered group of radio buttons with optional per-item tooltips.
 *
 * Props:
 *   options          { value, label, tooltip?, tooltipPosition?, disabled? }[]
 *                    — items to render; tooltipPosition on each item overrides the group default
 *   value            string                              — currently selected value
 *   onChange         (val) => void                       — called when selection changes
 *   name             string                              — shared radio name (auto-generated if omitted)
 *   disabled         boolean                             — disables all items (default false)
 *   tooltipPosition  'top'|'bottom'|'left'|'right'       — default tooltip position for all items (default 'top')
 *   className        string                              — extra classes on the wrapper
 */
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

  return (
    <div
      className={['nxp-radio-group', className].filter(Boolean).join(' ')}
      role="radiogroup"
    >
      {options.map((opt) => {
        const isChecked  = value === opt.value;
        const isDisabled = disabled || !!opt.disabled;
        const tipPos     = opt.tooltipPosition ?? tooltipPosition;

        return (
          <div
            key={opt.value}
            className={[
              'nxp-radio-group__item',
              isChecked  ? 'is-checked'  : '',
              isDisabled ? 'is-disabled' : '',
            ].filter(Boolean).join(' ')}
          >
            <Radio
              name={groupName}
              value={opt.value}
              checked={isChecked}
              onChange={onChange}
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
