import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

/* ─── Date helpers ───────────────────────────────────────────── */
function pad(n) { return String(n).padStart(2, '0'); }
function toISO(d) { return d ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` : ''; }
function parseISO(s) {
  if (!s) return null;
  const [y, m, d] = s.split('-').map(Number);
  if (!y || !m || !d) return null;
  const dt = new Date(y, m - 1, d);
  return isNaN(dt) ? null : dt;
}
function isSameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay();   // 0=Sun
  const days  = new Date(year, month + 1, 0).getDate();
  const prev  = new Date(year, month, 0).getDate();
  const cells = [];

  for (let i = first - 1; i >= 0; i--)
    cells.push({ d: prev - i, month: month - 1, year: month === 0 ? year - 1 : year, outside: true });

  for (let d = 1; d <= days; d++)
    cells.push({ d, month, year, outside: false });

  const trail = 42 - cells.length;
  for (let d = 1; d <= trail; d++)
    cells.push({ d, month: month + 1, year: month === 11 ? year + 1 : year, outside: true });

  return cells;
}

/* ─── Icons ─────────────────────────────────────────────────── */
const ChevLeft  = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L5 7l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ChevRight = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 2l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CalIcon   = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 5.5h11M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>;
const ClearIcon = () => <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;

/* ─── Component ─────────────────────────────────────────────── */
function DatePicker({
  value,                     // ISO string 'YYYY-MM-DD' (controlled)
  defaultValue,              // ISO string (uncontrolled)
  onChange,                  // (isoString | null) => void

  minDate,                   // ISO string
  maxDate,                   // ISO string
  disabled  = false,
  clearable = true,

  /* translatable */
  placeholder   = 'Select date',
  todayText     = 'Today',
  clearText     = 'Clear',
  monthNames    = ['January','February','March','April','May','June','July','August','September','October','November','December'],
  dayNames      = ['Su','Mo','Tu','We','Th','Fr','Sa'],
  prevMonthLabel = 'Previous month',
  nextMonthLabel = 'Next month',

  className = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal]   = useState(() => parseISO(defaultValue));
  const [open,     setOpen]       = useState(false);
  const [viewYear, setViewYear]   = useState(() => {
    const d = parseISO(value ?? defaultValue) ?? new Date();
    return d.getFullYear();
  });
  const [viewMonth, setViewMonth] = useState(() => {
    const d = parseISO(value ?? defaultValue) ?? new Date();
    return d.getMonth();
  });

  const rootRef = useRef(null);
  const selected = isControlled ? parseISO(value) : internal;

  const minD = useMemo(() => parseISO(minDate), [minDate]);
  const maxD = useMemo(() => parseISO(maxDate), [maxDate]);

  /* click outside */
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', h);
    return () => document.removeEventListener('pointerdown', h);
  }, [open]);

  /* emit change */
  const select = useCallback((cell) => {
    const d = new Date(cell.year, cell.month, cell.d);
    if (!isControlled) setInternal(d);
    onChange?.(toISO(d));
    setOpen(false);
  }, [isControlled, onChange]);

  const clearDate = useCallback((e) => {
    e.stopPropagation();
    if (!isControlled) setInternal(null);
    onChange?.(null);
  }, [isControlled, onChange]);

  /* nav */
  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  }

  const cells = useMemo(() => buildCalendar(viewYear, viewMonth), [viewYear, viewMonth]);
  const today  = startOfDay(new Date());

  function isDisabledCell(cell) {
    const d = new Date(cell.year, cell.month, cell.d);
    if (minD && d < startOfDay(minD)) return true;
    if (maxD && d > startOfDay(maxD)) return true;
    return false;
  }

  const displayValue = selected ? toISO(selected) : '';

  const rootClass = ['nxp-date', disabled ? 'nxp-date--disabled' : '', open ? 'nxp-date--open' : '', className]
    .filter(Boolean).join(' ');

  return (
    <div ref={rootRef} className={rootClass}>

      {/* ── Input trigger ── */}
      <div
        className="nxp-date__trigger"
        onClick={() => !disabled && setOpen((o) => !o)}
        role="button"
        aria-label={placeholder}
        aria-expanded={open}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && setOpen((o) => !o); } }}
      >
        <span className="nxp-date__icon"><CalIcon /></span>
        <span className={`nxp-date__value${!displayValue ? ' nxp-date__value--placeholder' : ''}`}>
          {displayValue || placeholder}
        </span>
        {clearable && selected && !disabled && (
          <button type="button" className="nxp-date__clear" onClick={clearDate} aria-label={clearText}>
            <ClearIcon />
          </button>
        )}
      </div>

      {/* ── Calendar popover ── */}
      {open && (
        <div className="nxp-date__popover" role="dialog" aria-label="Date picker">

          {/* Header */}
          <div className="nxp-date__header">
            <button type="button" className="nxp-date__nav" onClick={prevMonth} aria-label={prevMonthLabel}>
              <ChevLeft />
            </button>
            <span className="nxp-date__month-label">
              {monthNames[viewMonth]} {viewYear}
            </span>
            <button type="button" className="nxp-date__nav" onClick={nextMonth} aria-label={nextMonthLabel}>
              <ChevRight />
            </button>
          </div>

          {/* Day-of-week row */}
          <div className="nxp-date__grid nxp-date__grid--head">
            {dayNames.map((d) => <span key={d} className="nxp-date__dow">{d}</span>)}
          </div>

          {/* Days grid */}
          <div className="nxp-date__grid">
            {cells.map((cell, i) => {
              const cellDate  = new Date(cell.year, cell.month, cell.d);
              const isSel     = isSameDay(cellDate, selected);
              const isToday   = isSameDay(cellDate, today);
              const isDis     = isDisabledCell(cell);

              return (
                <button
                  key={i}
                  type="button"
                  className={[
                    'nxp-date__day',
                    cell.outside ? 'nxp-date__day--outside' : '',
                    isSel        ? 'nxp-date__day--selected' : '',
                    isToday      ? 'nxp-date__day--today'    : '',
                    isDis        ? 'nxp-date__day--disabled'  : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => !isDis && select(cell)}
                  disabled={isDis}
                  aria-label={toISO(cellDate)}
                  aria-selected={isSel}
                  aria-current={isToday ? 'date' : undefined}
                >
                  {cell.d}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="nxp-date__footer">
            <button
              type="button"
              className="nxp-date__today-btn"
              onClick={() => select({ d: today.getDate(), month: today.getMonth(), year: today.getFullYear() })}
            >
              {todayText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { DatePicker };
export default DatePicker;
