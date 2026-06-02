import React, { memo } from 'react';
import { Toggle } from '../Toggle/Toggle';
import { Tooltip } from '../Tooltip/Tooltip';
import { InfoIcon } from '../../lib/icons';

const ToggleItem = memo(function ToggleItem({
  itemKey,
  label,
  value,
  tooltip,
  tooltipPosition = 'top',
  isPro    = false,
  proText  = 'PRO',
  onToggle,
  disabled,
}) {
  return (
    <div className="nxp-tg__item">
      <div className="nxp-tg__item-label-row">
        <span className="nxp-tg__item-label nxp-body">{label}</span>
        {isPro && (
          <span className="nxp-absolute nxp-flex-center nxp-tg-item-pro nxp-weight-medium">
            {proText}
          </span>
        )}
        {tooltip && (
          <Tooltip content={tooltip} position={tooltipPosition}>
            <span
              className="nxp-tg__item-info"
              tabIndex={0}
              role="button"
              aria-label={`About ${label}`}
            >
              <InfoIcon />
            </span>
          </Tooltip>
        )}
      </div>
      <Toggle
        checked={value}
        onChange={(v) => onToggle(itemKey, v)}
        disabled={disabled}
        aria-label={`Enable ${label}`}
      />
    </div>
  );
});

export { ToggleItem };
export default ToggleItem;
