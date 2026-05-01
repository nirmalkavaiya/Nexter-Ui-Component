import React, { useState, useCallback } from 'react';

function Search({ value, onChange, placeholder = 'Search…', onClear, className = '' }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState('');
  const current = isControlled ? value : internal;

  const handleChange = useCallback(
    (e) => {
      const v = e.target.value;
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
    <div className={`nxp-search ${className}`}>
      <span className="nxp-search__icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        className="nxp-search__input"
        value={current}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}

export { Search };
export default Search;
