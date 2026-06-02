import React, { memo } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import { InfoIcon } from '../../lib/icons';

function Field({
  label,
  tooltip,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  extraContent,
  className = '',
}) {
  const showLabelRow = Boolean(label || tooltip || extraContent);

  return (
    <div className={`nxp-field${error ? ' nxp-field--error' : ''} ${className}`}>
      {showLabelRow && (
        <div className="nxp-field__label-row">
          {label && (
            <label className="nxp-field__label" htmlFor={htmlFor}>
              {label}
              {required && (
                <span className="nxp-field__required" aria-hidden="true"> *</span>
              )}
            </label>
          )}
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
          {extraContent && (
              extraContent
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

const FieldMemoized = memo(Field);
export { FieldMemoized as Field };
export default FieldMemoized;
