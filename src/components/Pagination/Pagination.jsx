import React, { useState, useCallback, useMemo } from 'react';

function Pagination({ page, totalPages = 1, onChange, showPrevNext = true, className = '' }) {
  const isControlled = page !== undefined;
  const [internal, setInternal] = useState(1);
  const current = isControlled ? page : internal;

  const go = useCallback(
    (p) => {
      const clamped = Math.min(totalPages, Math.max(1, p));
      if (isControlled) {
        onChange && onChange(clamped);
      } else {
        setInternal(clamped);
        onChange && onChange(clamped);
      }
    },
    [isControlled, onChange, totalPages]
  );

  /* Avoid re-allocating a new array on every render */
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  /* Stable prev/next handlers */
  const handlePrev = useCallback(() => go(current - 1), [go, current]);
  const handleNext = useCallback(() => go(current + 1), [go, current]);

  return (
    <nav className={`nxp-pagination ${className}`} aria-label="Pagination">
      {showPrevNext && (
        <button
          type="button"
          className="nxp-pagination__item nxp-pagination__item--prev"
          onClick={handlePrev}
          disabled={current === 1}
          aria-label="Previous page"
        >
          ‹
        </button>
      )}
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`nxp-pagination__item${current === p ? ' is-active' : ''}`}
          onClick={() => go(p)}
          aria-current={current === p ? 'page' : undefined}
        >
          {p}
        </button>
      ))}
      {showPrevNext && (
        <button
          type="button"
          className="nxp-pagination__item nxp-pagination__item--next"
          onClick={handleNext}
          disabled={current === totalPages}
          aria-label="Next page"
        >
          ›
        </button>
      )}
    </nav>
  );
}

export { Pagination };
export default Pagination;
