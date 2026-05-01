import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

/* ─── Date helpers (same pattern as DatePicker) ─────────────── */
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
function isBetween(d, s, e) {
  const ds = startOfDay(d), ss = startOfDay(s), ee = startOfDay(e);
  return ds > ss && ds < ee;
}

function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay();
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
const ChevLeft  = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L5 7l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ChevRight = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 2l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CalIcon   = () => <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 5.5h11M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>;
const ClearIcon = () => <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
const ArrowIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/* ─── Single calendar panel ──────────────────────────────────── */
function CalendarPanel({
  year, month, start, end, hovered,
  onDayClick, onDayHover,
  prevMonth, nextMonth,
  showPrev = true, showNext = true,
  monthNames, dayNames, prevLabel, nextLabel,
}) {
  const cells = useMemo(() => buildCalendar(year, month), [year, month]);
  const today = startOfDay(new Date());

  const rangeEnd = end ?? hovered;

  return (
    <div className="nxp-drp__cal">
      {/* Header */}
      <div className="nxp-drp__cal-header">
        {showPrev
          ? <button type="button" className="nxp-date__nav" onClick={prevMonth} aria-label={prevLabel}><ChevLeft /></button>
          : <span />
        }
        <span className="nxp-date__month-label">{monthNames[month]} {year}</span>
        {showNext
          ? <button type="button" className="nxp-date__nav" onClick={nextMonth} aria-label={nextLabel}><ChevRight /></button>
          : <span />
        }
      </div>

      {/* Day-of-week */}
      <div className="nxp-date__grid nxp-date__grid--head">
        {dayNames.map((d) => <span key={d} className="nxp-date__dow">{d}</span>)}
      </div>

      {/* Days */}
      <div className="nxp-date__grid">
        {cells.map((cell, i) => {
          const dt       = new Date(cell.year, cell.month, cell.d);
          const isStart  = isSameDay(dt, start);
          const isEnd    = isSameDay(dt, end);
          const isToday  = isSameDay(dt, today);
          const inRange  = start && rangeEnd && !cell.outside && isBetween(dt, start < rangeEnd ? start : rangeEnd, start < rangeEnd ? rangeEnd : start);

          return (
            <button
              key={i}
              type="button"
              className={[
                'nxp-date__day',
                cell.outside  ? 'nxp-date__day--outside'  : '',
                isStart       ? 'nxp-date__day--selected nxp-date__day--range-start' : '',
                isEnd         ? 'nxp-date__day--selected nxp-date__day--range-end'   : '',
                isToday       ? 'nxp-date__day--today'     : '',
                inRange       ? 'nxp-date__day--in-range'  : '',
              ].filter(Boolean).join(' ')}
              onClick={() => onDayClick(dt)}
              onMouseEnter={() => onDayHover(dt)}
              aria-label={toISO(dt)}
              aria-selected={isStart || isEnd}
            >
              {cell.d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── DateRangePicker ───────────────────────────────────────── */
function DateRangePicker({
  value,            // { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } (controlled)
  defaultValue,     // same shape (uncontrolled)
  onChange,         // ({ start, end }) => void

  disabled   = false,
  clearable  = true,

  /* translatable */
  startPlaceholder = 'Start date',
  endPlaceholder   = 'End date',
  clearText        = 'Clear',
  applyText        = 'Apply',
  monthNames       = ['January','February','March','April','May','June','July','August','September','October','November','December'],
  dayNames         = ['Su','Mo','Tu','We','Th','Fr','Sa'],
  prevMonthLabel   = 'Previous month',
  nextMonthLabel   = 'Next month',

  className = '',
}) {
  const isControlled = value !== undefined;

  const initStart = parseISO((isControlled ? value?.start : defaultValue?.start) ?? null);
  const initEnd   = parseISO((isControlled ? value?.end   : defaultValue?.end)   ?? null);

  const [start,    setStart]    = useState(initStart);
  const [end,      setEnd]      = useState(initEnd);
  const [hovered,  setHovered]  = useState(null);
  const [picking,  setPicking]  = useState('start');  // 'start' | 'end'
  const [open,     setOpen]     = useState(false);
  const [viewYear, setViewYear] = useState(() => (initStart ?? new Date()).getFullYear());
  const [viewMonth, setViewMonth] = useState(() => (initStart ?? new Date()).getMonth());

  const rootRef = useRef(null);

  /* sync controlled */
  useEffect(() => {
    if (!isControlled) return;
    setStart(parseISO(value?.start ?? null));
    setEnd(parseISO(value?.end ?? null));
  }, [isControlled, value?.start, value?.end]); // eslint-disable-line

  /* click outside */
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', h);
    return () => document.removeEventListener('pointerdown', h);
  }, [open]);

  /* second month = viewMonth + 1 */
  const m2 = viewMonth === 11 ? 0  : viewMonth + 1;
  const y2 = viewMonth === 11 ? viewYear + 1 : viewYear;

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  }

  const onDayClick = useCallback((dt) => {
    if (picking === 'start' || (start && end)) {
      /* start a new selection */
      setStart(dt);
      setEnd(null);
      setPicking('end');
      if (!isControlled) {}
    } else {
      /* set end */
      let s = start, e = dt;
      if (e < s) { s = dt; e = start; }
      setEnd(e);
      setPicking('start');
      setHovered(null);
      const payload = { start: toISO(s), end: toISO(e) };
      if (!isControlled) { setStart(s); setEnd(e); }
      onChange?.(payload);
      setOpen(false);
    }
  }, [picking, start, end, isControlled, onChange]);

  const onDayHover = useCallback((dt) => {
    if (picking === 'end' && start && !end) setHovered(dt);
  }, [picking, start, end]);

  function clearRange(e) {
    e.stopPropagation();
    setStart(null); setEnd(null); setPicking('start');
    onChange?.({ start: null, end: null });
  }

  /* display strings */
  const displayStart = start ? toISO(start) : '';
  const displayEnd   = end   ? toISO(end)   : '';

  const rootClass = ['nxp-drp', disabled ? 'nxp-drp--disabled' : '', open ? 'nxp-drp--open' : '', className]
    .filter(Boolean).join(' ');

  return (
    <div ref={rootRef} className={rootClass}>

      {/* ── Trigger ── */}
      <div
        className="nxp-drp__trigger"
        onClick={() => !disabled && setOpen((o) => !o)}
        role="button"
        aria-expanded={open}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && setOpen((o) => !o); } }}
      >
        <span className="nxp-date__icon"><CalIcon /></span>

        <span className={`nxp-drp__segment${!displayStart ? ' nxp-date__value--placeholder' : ''}`}>
          {displayStart || startPlaceholder}
        </span>

        <span className="nxp-drp__arrow"><ArrowIcon /></span>

        <span className={`nxp-drp__segment${!displayEnd ? ' nxp-date__value--placeholder' : ''}`}>
          {displayEnd || endPlaceholder}
        </span>

        {clearable && (start || end) && !disabled && (
          <button type="button" className="nxp-date__clear" onClick={clearRange} aria-label={clearText}>
            <ClearIcon />
          </button>
        )}
      </div>

      {/* ── Popover — two calendars side by side ── */}
      {open && (
        <div className="nxp-drp__popover" role="dialog" aria-label="Date range picker">
          <div className="nxp-drp__calendars">
            <CalendarPanel
              year={viewYear} month={viewMonth}
              start={start} end={end} hovered={hovered}
              onDayClick={onDayClick} onDayHover={onDayHover}
              prevMonth={prevMonth} nextMonth={() => {}}
              showPrev={true} showNext={false}
              monthNames={monthNames} dayNames={dayNames}
              prevLabel={prevMonthLabel} nextLabel={nextMonthLabel}
            />
            <CalendarPanel
              year={y2} month={m2}
              start={start} end={end} hovered={hovered}
              onDayClick={onDayClick} onDayHover={onDayHover}
              prevMonth={() => {}} nextMonth={nextMonth}
              showPrev={false} showNext={true}
              monthNames={monthNames} dayNames={dayNames}
              prevLabel={prevMonthLabel} nextLabel={nextMonthLabel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export { DateRangePicker };
export default DateRangePicker;
