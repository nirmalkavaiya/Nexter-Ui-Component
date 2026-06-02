import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Select({
  options = [],
  value,
  onChange,
  disabled = false,
  placeholder,
  className = '',
  ...rest
}) {
  const rootClass = useMemo(() => cn('nxp-select', className), [className]);

  return (
    <select
      className={rootClass}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

const SelectMemoized = memo(Select);
export { SelectMemoized as Select };
export default SelectMemoized;
