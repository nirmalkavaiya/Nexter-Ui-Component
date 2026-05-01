import React from 'react';

function Sheet({ title, byline, children, footer, className = '' }) {
  return (
    <div className={`nxp-sheet ${className}`}>
      {(title || byline) && (
        <div className="nxp-sheet__head">
          {title && <div className="nxp-sheet__title">{title}</div>}
          {byline && <div className="nxp-sheet__byline">{byline}</div>}
        </div>
      )}
      <div className="nxp-sheet__body">{children}</div>
      {footer && <div className="nxp-sheet__foot">{footer}</div>}
    </div>
  );
}

export { Sheet };
export default Sheet;
