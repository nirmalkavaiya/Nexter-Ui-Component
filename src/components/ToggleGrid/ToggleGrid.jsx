import React, { useState } from 'react';
import { ToggleItem } from './ToggleItem';

function ToggleGrid({
  items = [],
  columns = 2,
  onChange,
  valueMap,
  disabled = false,
  className = '',
}) {
  const isControlled = valueMap !== undefined;
  const [internal, setInternal] = useState(() =>
    Object.fromEntries(items.map((it) => [it.key, it.value ?? false]))
  );

  function getValues() {
    return isControlled ? valueMap : internal;
  }

  function handleToggle(key, newValue) {
    const values = getValues();
    const updatedValues = { ...values, [key]: newValue };
    const updatedItems = items.map((it) => ({
      ...it,
      value: updatedValues[it.key] ?? it.value ?? false,
    }));

    if (!isControlled) {
      setInternal(updatedValues);
    }

    onChange?.(key, newValue, updatedItems);
  }

  const cols = Math.min(Math.max(Number(columns) || 2, 1), 4);
  const values = getValues();

  const gridClass = [
    'nxp-tg',
    `nxp-tg--cols-${cols}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClass} role="group">
      {items.map((item) => (
        <ToggleItem
          key={item.key}
          itemKey={item.key}
          label={item.label}
          value={values[item.key] ?? item.value ?? false}
          tooltip={item.tooltip}
          onToggle={handleToggle}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export { ToggleGrid };
export default ToggleGrid;
