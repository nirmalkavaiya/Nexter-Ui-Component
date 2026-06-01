import React, { useState, useCallback, useId } from 'react';
import { cn } from '../../lib/utils';

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none" aria-hidden="true" viewBox="0 0 10 10"><path fill="#fff" d="M8.313 5.25V3.81A2.94 2.94 0 0 0 5.377.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25A1.313 1.313 0 0 0 .875 6.563v4.068a2.5 2.5 0 0 0 2.494 2.494H7.13a2.5 2.5 0 0 0 2.494-2.494V6.562A1.313 1.313 0 0 0 8.312 5.25Zm-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H3.063zm5.687 6.821a1.62 1.62 0 0 1-1.619 1.619H3.37a1.62 1.62 0 0 1-1.619-1.619V6.562a.437.437 0 0 1 .438-.437h6.124a.437.437 0 0 1 .438.438z"/><path fill="#fff" d="M5.688 9.065V10.5a.437.437 0 1 1-.875 0V9.065a.875.875 0 1 1 .875 0"/></svg>
  );
}

function Checkbox({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
  lock = false,
  onLockClick,
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(false);
  const isChecked = isControlled ? checked : internal;
  const id = useId();

  const handleChange = useCallback(() => {
    if (disabled || lock) return;
    if (isControlled) {
      onChange && onChange(!checked);
    } else {
      setInternal((prev) => !prev);
    }
  }, [disabled, lock, isControlled, checked, onChange]);

  const handleLockClick = useCallback((e) => {
    if (disabled) return;
    e.preventDefault();
    e.stopPropagation();
    onLockClick?.(e);
  }, [disabled, onLockClick]);

  const handleLockKeyDown = useCallback((e) => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    e.preventDefault();
    if (disabled) return;
    onLockClick?.(e);
  }, [disabled, onLockClick]);

  const classes = cn(
    'nxp-checkbox',
    isChecked && !lock && 'is-checked',
    disabled && 'is-disabled',
    lock && 'is-locked',
    className,
  );

  if (lock) {
    return (
      <div className={classes}>
        <span
          className="nxp-checkbox__lock"
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-label="Upgrade to unlock"
          onClick={handleLockClick}
          onKeyDown={handleLockKeyDown}
        >
          <LockIcon />
        </span>
        {label && <span>{label}</span>}
      </div>
    );
  }

  return (
    <label className={classes} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="nxp-sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        className="nxp-checkbox__box"
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); handleChange(); } }}
        onClick={(e) => { e.preventDefault(); handleChange(); }}
      >
        {isChecked && (
          <svg className="nxp-checkbox__check" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

export { Checkbox };
export default Checkbox;
