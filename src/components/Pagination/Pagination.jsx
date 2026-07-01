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
    <nav className={`nxp-pagination nxp-sm-flex-wrap ${className}`} aria-label="Pagination">
      {showPrevNext && (
        <button
          type="button"
          className="nxp-pagination__item nxp-pagination__item--prev"
          onClick={handlePrev}
          disabled={current === 1}
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      )}
    </nav>
  );
}

export { Pagination };
export default Pagination;
