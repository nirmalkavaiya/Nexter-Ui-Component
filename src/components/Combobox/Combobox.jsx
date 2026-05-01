import React, { useState, useRef, useEffect, useCallback } from 'react';

function Combobox({ options = [], value, onChange, placeholder = 'Type to search…', className = '' }) {
  const isControlled = value !== undefined;
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  const selectedLabel = isControlled
    ? options.find((o) => o.value === value)?.label || ''
    : '';

  // Sync query with controlled value label
  useEffect(() => {
    if (isControlled && value) {
      const label = options.find((o) => o.value === value)?.label || '';
      setQuery(label);
    }
  }, [value, isControlled, options]);

  const select = useCallback(
    (opt) => {
      if (isControlled) {
        onChange && onChange(opt.value);
      } else {
        onChange && onChange(opt.value);
      }
      setQuery(opt.label);
      setOpen(false);
      setFocused(-1);
    },
    [isControlled, onChange]
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setOpen(true);
      setFocused(0);
      return;
    }
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocused((f) => Math.min(f + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocused((f) => Math.max(f - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocused(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setFocused(filtered.length - 1);
    } else if (e.key === 'Enter' && focused >= 0 && filtered[focused]) {
      e.preventDefault();
      select(filtered[focused]);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setFocused(-1);
    }
  };

  return (
    <div className={`nxp-combobox ${className}`} ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        className="nxp-combobox__input"
        value={query}
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setFocused(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-haspopup="listbox"
      />
      {open && filtered.length > 0 && (
        <div className="nxp-combobox__list" role="listbox">
          {filtered.map((opt, idx) => (
            <div
              key={opt.value}
              className={`nxp-combobox__item${focused === idx ? ' is-focused' : ''}`}
              role="option"
              aria-selected={focused === idx}
              onMouseEnter={() => setFocused(idx)}
              onMouseDown={(e) => { e.preventDefault(); select(opt); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Combobox };
export default Combobox;
