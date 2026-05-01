import React from 'react';

function Field({ label, hint, error, children, className = '' }) {
  return (
    <div className={`nxp-field ${className}`}>
      {label && <label className="nxp-field__label">{label}</label>}
      {children}
      {hint && !error && <span className="nxp-field__hint">{hint}</span>}
      {error && <span className="nxp-field__error" role="alert">{error}</span>}
    </div>
  );
}

export { Field };
export default Field;
