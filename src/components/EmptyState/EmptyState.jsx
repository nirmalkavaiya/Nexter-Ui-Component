import React from 'react';

function EmptyState({ icon, title, description, action, className = '' }) {
  return (
    <div className={`nxp-empty ${className}`} role="status">
      {icon && <div className="nxp-empty__icon" aria-hidden="true">{icon}</div>}
      {title && <div className="nxp-empty__title">{title}</div>}
      {description && <p className="nxp-empty__desc">{description}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}

export { EmptyState };
export default EmptyState;
