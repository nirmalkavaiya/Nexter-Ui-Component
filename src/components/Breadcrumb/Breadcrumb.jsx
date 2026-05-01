import React from 'react';

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HomeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1.5 6.5L7 1.5l5.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 5.5V12a.5.5 0 0 0 .5.5h2.75V9h1.5v3.5H10.5A.5.5 0 0 0 11 12V5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * items: Array of { label: string, href?: string, onClick?: fn, icon?: ReactNode }
 * The last item is treated as the current page (no link rendered).
 */
function Breadcrumb({
  items      = [],
  separator,          // custom separator node — defaults to ChevronIcon
  showHome   = false, // prepend a home icon on first item
  className  = '',
}) {
  const rootClass = ['nxp-bc', className].filter(Boolean).join(' ');

  return (
    <nav className={rootClass} aria-label="Breadcrumb">
      <ol className="nxp-bc__list" role="list">
        {items.map((item, idx) => {
          const isCurrent = idx === items.length - 1;
          const isFirst   = idx === 0;
          const icon      = item.icon ?? (showHome && isFirst ? <HomeIcon /> : null);

          return (
            <li key={idx} className="nxp-bc__item">
              {/* Link / button */}
              {!isCurrent && (
                item.href
                  ? (
                    <a href={item.href} className="nxp-bc__link">
                      {icon && <span className="nxp-bc__icon">{icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="nxp-bc__link nxp-bc__link--btn"
                      onClick={item.onClick}
                    >
                      {icon && <span className="nxp-bc__icon">{icon}</span>}
                      {item.label}
                    </button>
                  )
              )}

              {/* Current page (no link) */}
              {isCurrent && (
                <span className="nxp-bc__current" aria-current="page">
                  {icon && <span className="nxp-bc__icon">{icon}</span>}
                  {item.label}
                </span>
              )}

              {/* Separator (not after last item) */}
              {!isCurrent && (
                <span className="nxp-bc__sep" aria-hidden="true">
                  {separator ?? <ChevronIcon />}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumb };
export default Breadcrumb;
