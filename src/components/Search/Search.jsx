import React, { useState, useCallback } from 'react';

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Search({ value, onChange, placeholder = 'Search…', onClear, className = '' }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState('');
  const current = isControlled ? value : internal;

  const handleChange = useCallback(
    (e) => {
      const v = e.target.value;
      if (!isControlled) setInternal(v);
      onChange && onChange(v);
    },
    [isControlled, onChange]
  );

  const handleClear = useCallback(() => {
    if (!isControlled) setInternal('');
    onChange && onChange('');
    onClear && onClear();
  }, [isControlled, onChange, onClear]);

  return (
    <div className={`nxp-search ${className}`}>
      <span className="nxp-search__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17"><path stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 14.5-3.4647-3.4646m0 0c.9378-.9378 1.4646-2.20957 1.4646-3.5357s-.5268-2.59795-1.4646-3.53567c-.93768-.93771-2.2095-1.46452-3.53563-1.46452S4.40172 3.02632 3.464 3.96403c-.93771.93772-1.46452 2.20954-1.46452 3.53567s.52681 2.5979 1.46452 3.5357c.93772.9377 2.20954 1.4645 3.53567 1.4645s2.59795-.5268 3.53563-1.4645Z"/></svg></span>
      <input
        type="search"
        className="nxp-search__input"
        value={current}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {Boolean(current) && (
        <button
          type="button"
          className="nxp-search__clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export { Search };
export default Search;
