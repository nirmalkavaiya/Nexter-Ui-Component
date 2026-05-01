import React from 'react';

function Popover({ title, description, footer, className = '' }) {
  return (
    <div className={`nxp-popover ${className}`} role="tooltip">
      {title && <div className="nxp-popover__title">{title}</div>}
      {description && <p className="nxp-popover__desc">{description}</p>}
      {footer && <div className="nxp-popover__footer">{footer}</div>}
    </div>
  );
}

export { Popover };
export default Popover;
