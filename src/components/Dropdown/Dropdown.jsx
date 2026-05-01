import React, { useState, useRef, useEffect, useCallback } from 'react';

function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState('');
  const selected = isControlled ? value : internal;

  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(-1);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  const visibleOptions = options.filter((o) => !o.divider);
  const selectedLabel = options.find((o) => o.value === selected)?.label;

  const close = useCallback(() => {
    setOpen(false);
    setFocused(-1);
  }, []);

  const select = useCallback(
    (opt) => {
      if (isControlled) {
        onChange && onChange(opt.value);
      } else {
        setInternal(opt.value);
        onChange && onChange(opt.value);
      }
      close();
    },
    [isControlled, onChange, close]
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, close]);

  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
        setFocused(0);
      }
      return;
    }
    const items = visibleOptions;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocused((f) => Math.min(f + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocused((f) => Math.max(f - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocused(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setFocused(items.length - 1);
    } else if (e.key === 'Enter' && focused >= 0) {
      e.preventDefault();
      select(items[focused]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  };

  let visIdx = -1;

  return (
    <div
      className={`nxp-dropdown${open ? ' is-open' : ''} ${className}`}
      ref={containerRef}
    >
      <button
        type="button"
        className="nxp-dropdown__trigger"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => { if (!disabled) setOpen((o) => !o); }}
        onKeyDown={handleKeyDown}
      >
        <span style={{ color: selected ? 'var(--nxp-text)' : 'var(--nxp-text-faint)' }}>
          {selectedLabel || placeholder}
        </span>
        <svg className="nxp-dropdown__chevron" viewBox="0 0 14 14" fill="none">
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="nxp-dropdown__menu"
          role="listbox"
          ref={menuRef}
          aria-label="Options"
        >
          {options.map((opt, idx) => {
            if (opt.divider) {
              return <div key={idx} className="nxp-dropdown__divider" />;
            }
            visIdx++;
            const vIdx = visIdx;
            const isSelected = opt.value === selected;
            const isFocused = focused === vIdx;
            return (
              <div
                key={opt.value}
                className={`nxp-dropdown__item${isSelected ? ' is-selected' : ''}${isFocused ? ' is-focused' : ''}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => select(opt)}
                onMouseEnter={() => setFocused(vIdx)}
              >
                <span style={{ flex: 1 }}>{opt.label}</span>
                {opt.sub && <span className="nxp-dropdown__sub">{opt.sub}</span>}
                {isSelected && (
                  <svg className="nxp-dropdown__check" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { Dropdown };
export default Dropdown;
