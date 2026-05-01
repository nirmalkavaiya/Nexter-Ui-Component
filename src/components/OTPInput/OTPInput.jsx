import React, { useState, useRef, useCallback, useEffect } from 'react';

function OTPInput({
  length       = 6,
  value,                    // controlled: string of digits/chars
  onChange,                 // (fullString) => void
  defaultValue = '',

  type         = 'number',  // 'number' | 'text' | 'password'
  disabled     = false,
  autoFocus    = false,

  separator,                // insert a dash/dot after this index (e.g. 3 → "XXX-XXX")
  separatorChar = '–',

  /* translatable */
  inputLabel   = 'OTP digit',   // aria-label prefix per input

  className    = '',
}) {
  const isControlled = value !== undefined;

  /* internal char array */
  const [slots, setSlots] = useState(() => {
    const seed = (isControlled ? value : defaultValue) ?? '';
    return Array.from({ length }, (_, i) => seed[i] ?? '');
  });

  /* sync controlled value into slots */
  useEffect(() => {
    if (!isControlled) return;
    setSlots(Array.from({ length }, (_, i) => (value ?? '')[i] ?? ''));
  }, [isControlled, value, length]);

  const refs = useRef([]);

  function focusAt(i) {
    refs.current[i]?.focus();
    refs.current[i]?.select();
  }

  const commit = useCallback((next) => {
    if (!isControlled) setSlots(next);
    onChange?.(next.join(''));
  }, [isControlled, onChange]);

  function handleChange(idx, e) {
    const v = e.target.value;
    /* take only the last character typed */
    const char = v.slice(-1);
    if (type === 'number' && char !== '' && !/^\d$/.test(char)) return;

    const next = [...slots];
    next[idx] = char;
    commit(next);

    if (char && idx < length - 1) focusAt(idx + 1);
  }

  function handleKeyDown(idx, e) {
    if (e.key === 'Backspace') {
      if (slots[idx]) {
        /* clear current cell */
        const next = [...slots]; next[idx] = ''; commit(next);
      } else if (idx > 0) {
        /* move back and clear previous */
        const next = [...slots]; next[idx - 1] = ''; commit(next);
        focusAt(idx - 1);
      }
    }
    if (e.key === 'ArrowLeft'  && idx > 0)            focusAt(idx - 1);
    if (e.key === 'ArrowRight' && idx < length - 1)   focusAt(idx + 1);
  }

  function handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData('text').replace(/\D/g, type === 'number' ? '' : undefined).slice(0, length);
    if (!text) return;
    const next = Array.from({ length }, (_, i) => text[i] ?? '');
    commit(next);
    focusAt(Math.min(text.length, length - 1));
  }

  const rootClass = ['nxp-otp', disabled ? 'nxp-otp--disabled' : '', className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} role="group" aria-label="OTP input">
      {Array.from({ length }, (_, i) => (
        <React.Fragment key={i}>
          <input
            ref={(el) => { refs.current[i] = el; }}
            type={type === 'number' ? 'tel' : type}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            pattern={type === 'number' ? '[0-9]*' : undefined}
            maxLength={1}
            className="nxp-otp__input"
            value={slots[i]}
            disabled={disabled}
            autoFocus={autoFocus && i === 0}
            aria-label={`${inputLabel} ${i + 1}`}
            onChange={(e) => handleChange(i, e)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
          />
          {separator && i === separator - 1 && (
            <span className="nxp-otp__sep" aria-hidden="true">{separatorChar}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export { OTPInput };
export default OTPInput;
