import React, { useState, useCallback, useMemo } from 'react';
import { cn } from '../../lib/utils';
import { ToggleItem } from './ToggleItem';

function ToggleGrid({
  items           = [],
  columns         = 2,
  onChange,
  valueMap,
  disabled        = false,
  tooltipPosition = 'top',   // 'top'|'bottom'|'left'|'right' — group default; item.tooltipPosition overrides
  className       = '',
}) {
  const isControlled = valueMap !== undefined;
  const [internal, setInternal] = useState(() =>
    Object.fromEntries(items.map((it) => [it.key, it.value ?? false]))
  );

  /* Stable reference — avoids re-rendering all ToggleItems when any sibling toggles */
  const values = useMemo(
    () => (isControlled ? valueMap : internal),
    [isControlled, valueMap, internal]
  );

  /* Stable callback — ToggleItem is memo'd; a new fn ref every render defeats that */
  const handleToggle = useCallback(
    (key, newValue) => {
      const updatedValues = { ...values, [key]: newValue };
      const updatedItems = items.map((it) => ({
        ...it,
        value: updatedValues[it.key] ?? it.value ?? false,
      }));
      if (!isControlled) setInternal(updatedValues);
      onChange?.(key, newValue, updatedItems);
    },
    [values, items, isControlled, onChange]
  );

  const cols = useMemo(() => Math.min(Math.max(Number(columns) || 2, 1), 4), [columns]);

  const gridClass = useMemo(
    () => cn('nxp-tg', `nxp-tg--cols-${cols}`, className),
    [cols, className]
  );

  return (
    <div className={gridClass} role="group">
      {items.map((item) => (
        <ToggleItem
          key={item.key}
          itemKey={item.key}
          label={item.label}
          value={values[item.key] ?? item.value ?? false}
          tooltip={item.tooltip}
          tooltipPosition={item.tooltipPosition ?? tooltipPosition}
          isPro={item.isPro ?? false}
          proText={item.proText ?? 'PRO'}
          onToggle={handleToggle}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export { ToggleGrid };
export default ToggleGrid;
