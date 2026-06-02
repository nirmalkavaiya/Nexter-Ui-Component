import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CheckIcon } from '../../lib/icons';

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="4.5" y="1.5" width="8" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M1.5 4.5H3v7A1.5 1.5 0 0 0 4.5 13H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function CopyInput({
  value        = '',
  label,
  hint,
  disabled     = false,
  /* translatable */
  copyText     = 'Copy',
  copiedText   = 'Copied!',
  copyLabel    = 'Copy to clipboard',
  className    = '',
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const handleCopy = useCallback(async () => {
    if (disabled || !value) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* fallback for HTTP/older browsers */
      const el = document.createElement('textarea');
      el.value = value;
      el.style.position = 'fixed';
      el.style.opacity  = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  }, [disabled, value]);

  const rootClass = [
    'nxp-copy',
    disabled ? 'nxp-copy--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      {label && <label className="nxp-copy__label">{label}</label>}

      <div className="nxp-copy__wrap">
        <input
          type="text"
          className="nxp-copy__input"
          value={value}
          readOnly
          aria-label={label ?? 'Copy value'}
          disabled={disabled}
        />
        <button
          type="button"
          className={`nxp-copy__btn${copied ? ' nxp-copy__btn--copied' : ''}`}
          onClick={handleCopy}
          disabled={disabled}
          aria-label={copyLabel}
          title={copyLabel}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? copiedText : copyText}</span>
        </button>
      </div>

      {hint && <span className="nxp-copy__hint">{hint}</span>}
    </div>
  );
}

export { CopyInput };
export default CopyInput;
