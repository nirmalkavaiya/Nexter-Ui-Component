import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';

/* ─── Chevron icon ──────────────────────────────────────────── */
const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Checkmark icon ────────────────────────────────────────── */
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 6l3 3 5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Helpers ───────────────────────────────────────────────── */

/**
 * Normalise options — accepts both flat and grouped shapes.
 * Flat:    [{ label, value, disabled? }]
 * Grouped: [{ label, options: [{ label, value, disabled? }] }]
 */
function normalise(options) {
  if (!options.length) return [];
  if ('options' in options[0]) return options; // already grouped
  return [{ label: null, options }];           // wrap flat list
}

/* ─── Component ─────────────────────────────────────────────── */

function MultiSelect({
  /* data */
  options       = [],
  value         = [],
  onChange,

  /* behaviour */
  searchable    = true,
  disabled      = false,

  /* translatable UI strings */
  placeholder        = 'Select options',
  searchPlaceholder  = 'Search…',
  noResultsText      = 'No results found',
  clearAllLabel      = 'Clear all',
  removeLabel        = 'Remove',

  className = '',
}) {
  const [isOpen, setIsOpen]           = useState(false);
  const [search, setSearch]           = useState('');
  const [focusedIdx, setFocusedIdx]   = useState(-1);

  const rootRef   = useRef(null);
  const searchRef = useRef(null);
  const listRef   = useRef(null);

  /* ── Normalised groups ── */
  const groups = useMemo(() => normalise(options), [options]);

  /* ── All flat options (for label lookup) ── */
  const allOptions = useMemo(
    () => groups.flatMap((g) => g.options ?? []),
    [groups]
  );

  /* ── Filtered groups ── */
  const filteredGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        options: (g.options ?? []).filter((o) =>
          o.label.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.options.length > 0);
  }, [groups, search]);

  /* ── Flat visible options (for keyboard nav) ── */
  const visibleOptions = useMemo(
    () => filteredGroups.flatMap((g) => g.options ?? []),
    [filteredGroups]
  );

  /* ── Open / close ── */
  const openDropdown = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
    setFocusedIdx(-1);
    // focus search input after dropdown renders
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [disabled]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setSearch('');
    setFocusedIdx(-1);
  }, []);

  /* ── Click outside ── */
  useEffect(() => {
    if (!isOpen) return;
    function onPointer(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        closeDropdown();
      }
    }
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [isOpen, closeDropdown]);

  /* ── Toggle option ── */
  const toggleOption = useCallback(
    (val) => {
      if (disabled) return;
      const next = value.includes(val)
        ? value.filter((v) => v !== val)
        : [...value, val];
      onChange?.(next);
    },
    [disabled, value, onChange]
  );

  /* ── Remove single tag ── */
  const removeTag = useCallback(
    (val, e) => {
      e.stopPropagation();
      onChange?.(value.filter((v) => v !== val));
    },
    [value, onChange]
  );

  /* ── Clear all ── */
  const clearAll = useCallback(
    (e) => {
      e.stopPropagation();
      onChange?.([]);
    },
    [onChange]
  );

  /* ── Label lookup ── */
  const getLabel = useCallback(
    (val) => allOptions.find((o) => o.value === val)?.label ?? String(val),
    [allOptions]
  );

  /* ── Keyboard navigation (root + search delegates here) ── */
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) {
        if (['Enter', ' ', 'ArrowDown'].includes(e.key)) {
          e.preventDefault();
          openDropdown();
        }
        return;
      }
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeDropdown();
          rootRef.current?.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIdx((i) => Math.min(i + 1, visibleOptions.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIdx((i) => Math.max(i - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (focusedIdx >= 0 && visibleOptions[focusedIdx]) {
            toggleOption(visibleOptions[focusedIdx].value);
          }
          break;
        default:
          break;
      }
    },
    [isOpen, openDropdown, closeDropdown, visibleOptions, focusedIdx, toggleOption]
  );

  /* ── Scroll focused option into view ── */
  useEffect(() => {
    if (focusedIdx < 0 || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${focusedIdx}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [focusedIdx]);

  /* ── Root class ── */
  const rootClass = [
    'nxp-ms',
    isOpen    ? 'nxp-ms--open'     : '',
    disabled  ? 'nxp-ms--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  /* ── Render ── */
  return (
    <div
      ref={rootRef}
      className={rootClass}
      tabIndex={disabled ? -1 : 0}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-disabled={disabled || undefined}
      onKeyDown={handleKeyDown}
    >
      {/* ─── Trigger (tags + actions) ─────────────────────── */}
      <div
        className="nxp-ms__trigger"
        onClick={isOpen ? closeDropdown : openDropdown}
        aria-label="Open select"
      >
        <div className="nxp-ms__tags-wrap">
          {value.length === 0 && (
            <span className="nxp-ms__placeholder">{placeholder}</span>
          )}

          {value.map((v) => (
            <span key={v} className="nxp-ms__tag">
              <span className="nxp-ms__tag-label">{getLabel(v)}</span>
              <button
                type="button"
                className="nxp-ms__tag-remove"
                onPointerDown={(e) => removeTag(v, e)}
                aria-label={`${removeLabel} ${getLabel(v)}`}
                tabIndex={-1}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="nxp-ms__trigger-end">
          {value.length > 0 && !disabled && (
            <button
              type="button"
              className="nxp-ms__clear"
              onPointerDown={clearAll}
              aria-label={clearAllLabel}
              tabIndex={-1}
            >
              ×
            </button>
          )}
          <span
            className={`nxp-ms__chevron${isOpen ? ' nxp-ms__chevron--up' : ''}`}
          >
            <ChevronIcon />
          </span>
        </div>
      </div>

      {/* ─── Dropdown ─────────────────────────────────────── */}
      {isOpen && (
        <div className="nxp-ms__dropdown">

          {/* Search */}
          {searchable && (
            <div className="nxp-ms__search-wrap">
              <input
                ref={searchRef}
                type="text"
                className="nxp-ms__search"
                value={search}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setFocusedIdx(-1);
                }}
                onKeyDown={(e) => {
                  // delegate navigation keys; let typing pass through
                  if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
                    e.preventDefault();
                    handleKeyDown(e);
                  }
                }}
              />
            </div>
          )}

          {/* Options list */}
          <div
            ref={listRef}
            className="nxp-ms__list"
            role="listbox"
            aria-multiselectable="true"
          >
            {filteredGroups.length === 0 && (
              <div className="nxp-ms__empty" role="status">
                {noResultsText}
              </div>
            )}

            {(() => {
              let runningIdx = 0;
              return filteredGroups.map((group) => (
                <div
                  key={group.label ?? '__ungrouped'}
                  className="nxp-ms__group"
                >
                  {group.label && (
                    <div className="nxp-ms__group-label" aria-label={group.label}>
                      {group.label}
                    </div>
                  )}

                  {(group.options ?? []).map((opt) => {
                    const idx        = runningIdx++;
                    const isSelected = value.includes(opt.value);
                    const isFocused  = focusedIdx === idx;
                    const isDisabled = opt.disabled ?? false;

                    return (
                      <div
                        key={opt.value}
                        data-idx={idx}
                        className={[
                          'nxp-ms__option',
                          isSelected ? 'nxp-ms__option--selected' : '',
                          isFocused  ? 'nxp-ms__option--focused'  : '',
                          isDisabled ? 'nxp-ms__option--disabled'  : '',
                        ].filter(Boolean).join(' ')}
                        role="option"
                        aria-selected={isSelected}
                        aria-disabled={isDisabled || undefined}
                        onPointerDown={(e) => {
                          e.preventDefault(); // keep focus on root
                          if (!isDisabled) toggleOption(opt.value);
                        }}
                        onMouseEnter={() => !isDisabled && setFocusedIdx(idx)}
                      >
                        <span className="nxp-ms__option-label">{opt.label}</span>
                        {isSelected && (
                          <span className="nxp-ms__option-check">
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ));
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export { MultiSelect };
export default MultiSelect;
