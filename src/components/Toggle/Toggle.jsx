import React, { useState, useCallback } from 'react';
import { cn } from '../../lib/utils';

function Toggle({
  checked,
  onChange,
  disabled = false,
  variant,
  label,
  ariaLabel,
  className = '',
  isPro = false,
  onProClick,
  'aria-label': ariaLabelAttr,
  ...rest
}) {
  // Back-compat: older callers passed the click handler as `isPro`.
  const proClick = typeof isPro === 'function' ? isPro : onProClick;
  const showProLock = typeof isPro === 'function' ? true : Boolean(isPro);
  const isLocked = Boolean(proClick);

  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(false);
  const isChecked = isControlled ? checked : internal;

  const handleToggle = useCallback(() => {
    if (disabled || isLocked) return;
    if (isControlled) {
      onChange && onChange(!checked);
    } else {
      setInternal((prev) => !prev);
    }
  }, [disabled, isLocked, isControlled, checked, onChange]);

  const handleClick = useCallback(
    (e) => {
      if (disabled) return;
      if (isLocked) {
        e.stopPropagation();
        proClick(e);
        return;
      }
      handleToggle();
    },
    [disabled, isLocked, proClick, handleToggle],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key !== ' ' && e.key !== 'Enter') return;
      e.preventDefault();
      if (disabled) return;
      if (isLocked) {
        e.stopPropagation();
        proClick(e);
        return;
      }
      handleToggle();
    },
    [disabled, isLocked, proClick, handleToggle],
  );

  const classes = cn(
    'nxp-toggle',
    isChecked && 'is-checked',
    disabled && 'is-disabled',
    showProLock && 'is-pro-locked',
    variant && `nxp-toggle--${variant}`,
    className,
  );

  return (
    <div
      className={classes}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled || isLocked}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel ?? ariaLabelAttr ?? (typeof label === 'string' ? label : undefined)}
      {...rest}
    >
      <span className="nxp-toggle__track">
        <span className="nxp-toggle__thumb" />
        {showProLock && (
          <span className="nxp-pro-lock" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#727272" d="M10.063 5.25V3.81A2.94 2.94 0 0 0 7.127.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25a1.313 1.313 0 0 0-1.312 1.313v4.068a2.5 2.5 0 0 0 2.494 2.494H8.88a2.5 2.5 0 0 0 2.494-2.494V6.563a1.313 1.313 0 0 0-1.312-1.313m-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H4.814z"></path><path fill="#d1d1d6" d="M7.438 9.065V10.5a.438.438 0 0 1-.875 0V9.065a.875.875 0 1 1 .875 0"></path></svg>
          </span>
        )}
      </span>
      {label && <span>{label}</span>}
    </div>
  );
}

export { Toggle };
export default Toggle;
