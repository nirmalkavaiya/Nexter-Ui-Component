import React, { useState, useCallback } from 'react';

function Accordion({ items = [], defaultOpen = [], multi = false, className = '' }) {
  const [openIds, setOpenIds] = useState(new Set(defaultOpen));

  const toggle = useCallback(
    (id) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!multi) next.clear();
          next.add(id);
        }
        return next;
      });
    },
    [multi]
  );

  return (
    <div className={`nxp-accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={`nxp-accordion__item${isOpen ? ' is-open' : ''}`}
          >
            <button
              type="button"
              className="nxp-accordion__head"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${item.id}`}
            >
              <span>{item.title}</span>
              <svg className="nxp-accordion__chevron" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              id={`accordion-body-${item.id}`}
              className="nxp-accordion__body"
              role="region"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };
export default Accordion;
