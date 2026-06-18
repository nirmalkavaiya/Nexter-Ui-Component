import React, { useState, useCallback, memo } from 'react';
import { cn } from '../../lib/utils';

/**
 * NxpAccordion
 *
 * Reusable accordion built from the Content-SEO "drawer" accordion design.
 * Each item is a self-contained bordered card; expanding animates the body
 * open via a CSS grid-rows transition (no JS height measuring).
 *
 * Props
 * ─────
 * items          {Array<{ id, title, content }>} — panel data; content may be
 *                string | JSX | ReactNode
 * defaultActive  {number|string|Array} — initially open item(s). A number is
 *                treated as an index, a string as an id. Array for multi.
 * active         {number|string|Array} — controlled open item(s). When set,
 *                the component is controlled and reports changes via onChange.
 * onChange       {(active) => void} — fires on toggle. Receives an id (single
 *                mode) or an array of ids (allowMultiple).
 * toggleType     {'arrow'|'plus'|'none'} — right-side toggle icon. Default 'arrow'.
 * allowMultiple  {boolean} — allow multiple panels open at once. Default false.
 * className      {string} — extra wrapper classes.
 */

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" d="M12 6s-2.946 4-4 4-4-4-4-4" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M7 1v12M1 7h12" />
  </svg>
);

/** Resolve a defaultActive/active value (index | id | array) to a Set of ids. */
function resolveOpenSet(value, items, allowMultiple) {
  const toId = (v) => (typeof v === 'number' ? items[v]?.id : v);
  if (allowMultiple) {
    const arr = Array.isArray(value) ? value : value == null ? [] : [value];
    return new Set(arr.map(toId).filter((x) => x != null));
  }
  const first = Array.isArray(value) ? value[0] : value;
  const id = toId(first);
  return new Set(id != null ? [id] : []);
}

const AccordionItem = memo(function AccordionItem({ item, isOpen, toggleType, onToggle }) {
  const headId = `nxp-acc-head-${item.id}`;
  const bodyId = `nxp-acc-body-${item.id}`;

  return (
    <div className={cn('nxp-accordion-item', isOpen && 'is-open')}>
      <button
        type="button"
        id={headId}
        className="nxp-accordion-header"
        aria-expanded={isOpen}
        aria-controls={bodyId}
        onClick={() => onToggle(item.id)}
      >
        <span className="nxp-accordion-title">{item.title}</span>
        {toggleType !== 'none' && (
          <span
            className={cn('nxp-accordion-toggle', `nxp-accordion-toggle--${toggleType}`, isOpen && 'is-open')}
            aria-hidden="true"
          >
            {toggleType === 'plus' ? <PlusIcon /> : <ChevronIcon />}
          </span>
        )}
      </button>
      <div id={bodyId} role="region" aria-labelledby={headId} className="nxp-accordion-content">
        <div className="nxp-accordion-content__inner">
          <div className="nxp-accordion-body">{item.content}</div>
        </div>
      </div>
    </div>
  );
});

function NxpAccordion({
  items = [],
  defaultActive = 0,
  active,
  onChange,
  toggleType = 'arrow',
  allowMultiple = false,
  className = '',
}) {
  const isControlled = active !== undefined;
  const [internal, setInternal] = useState(() => resolveOpenSet(defaultActive, items, allowMultiple));
  const openIds = isControlled ? resolveOpenSet(active, items, allowMultiple) : internal;

  const toggle = useCallback(
    (id) => {
      const next = new Set(openIds);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      const report = allowMultiple ? Array.from(next) : (Array.from(next)[0] ?? null);
      if (!isControlled) setInternal(next);
      onChange?.(report);
    },
    [openIds, allowMultiple, isControlled, onChange]
  );

  return (
    <div className={cn('nxp-accordion nxp-accordion--cards', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          toggleType={toggleType}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}

const NxpAccordionMemoized = memo(NxpAccordion);
export { NxpAccordionMemoized as NxpAccordion };
export default NxpAccordionMemoized;
