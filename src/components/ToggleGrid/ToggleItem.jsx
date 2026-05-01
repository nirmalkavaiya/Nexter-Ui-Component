import React, { memo } from 'react';
import { Toggle } from '../Toggle/Toggle';
import { Tooltip } from '../Tooltip/Tooltip';

const InfoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="4.25" r="0.875" fill="currentColor" />
  </svg>
);

const ToggleItem = memo(function ToggleItem({ itemKey, label, value, tooltip, onToggle, disabled }) {
  return (
    <div className="nxp-tg__item">
      <div className="nxp-tg__item-label-row">
        <span className="nxp-tg__item-label">{label}</span>
        {tooltip && (
          <Tooltip content={tooltip}>
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
