import React from 'react';
import { Tooltip } from '../Tooltip/Tooltip';

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="4.25" r="0.875" fill="currentColor" />
  </svg>
);

function Field({
  label,
  tooltip,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = '',
}) {
  return (
    <div className={`nxp-field${error ? ' nxp-field--error' : ''} ${className}`}>
      {label && (
        <div className="nxp-field__label-row">
          <label className="nxp-field__label" htmlFor={htmlFor}>
            {label}
            {required && (
              <span className="nxp-field__required" aria-hidden="true"> *</span>
            )}
          </label>
          {tooltip && (
            <Tooltip content={tooltip}>
              <span
                className="nxp-field__tooltip-icon"
                tabIndex={0}
                role="button"
                aria-label="More information"
              >
                <InfoIcon />
              </span>
            </Tooltip>
          )}
        </div>
      )}
      {children}
      {hint && !error && (
        <span className="nxp-field__hint">{hint}</span>
      )}
      {error && (
        <span className="nxp-field__error" role="alert">{error}</span>
      )}
    </div>
  );
}

export { Field };
export default Field;
