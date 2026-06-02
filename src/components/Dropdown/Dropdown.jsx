import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ChevronDownIcon, CheckIcon } from '../../lib/icons';

function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  size      = 'md',   // 'sm' | 'md' | 'lg'
  disabled  = false,
  className = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState('');
  const selected = isControlled ? value : internal;

  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(-1);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  const visibleOptions = useMemo(() => options.filter((o) => !o.divider), [options]);

  /* Avoid .find() on every render */
  const selectedLabel = useMemo(
    () => options.find((o) => o.value === selected)?.label,
    [options, selected]
  );

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

  /* Stable keyboard handler */
  const handleKeyDown = useCallback(
    (e) => {
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
    },
    [open, visibleOptions, focused, select, close]
  );

  /* Stable trigger click */
  const handleTriggerClick = useCallback(() => {
    if (!disabled) setOpen((o) => !o);
  }, [disabled]);

  let visIdx = -1;

  return (
    <div
      className={`nxp-dropdown${open ? ' is-open' : ''} ${className}`}
      ref={containerRef}
    >
      <button
        type="button"
        className={`nxp-dropdown__trigger nxp-dropdown__trigger--${size}`}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
      >
        <span className={selected ? 'text-nxp-text' : 'text-nxp-text-faint'}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDownIcon className="nxp-dropdown__chevron" />
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
                <span className="nxp-flex-1">{opt.label}</span>
                {opt.sub && <span className="nxp-dropdown__sub">{opt.sub}</span>}
                {isSelected && (
                  <CheckIcon className="nxp-dropdown__check" />
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
