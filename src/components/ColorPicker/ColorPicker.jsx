import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

/* ─── Color utilities ───────────────────────────────────────── */
function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16) || 0,
    parseInt(h.substring(2, 4), 16) || 0,
    parseInt(h.substring(4, 6), 16) || 0,
  ];
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b]
    .map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0'))
    .join('');
}

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d > 0) {
    if      (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else                h = ((r - g) / d + 4) / 6;
  }
  return [h * 360, max === 0 ? 0 : d / max, max];
}

function hsvToRgb(h, s, v) {
  h /= 360;
  const i = Math.floor(h * 6);
  const f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
  const m = [[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,p,v],[v,p,q]];
  const [r, g, b] = m[i % 6];
  return [r * 255, g * 255, b * 255];
}

function hexToHsv(hex) { return rgbToHsv(...hexToRgb(hex)); }
function hsvToHex(h, s, v) { return rgbToHex(...hsvToRgb(h, s, v)); }
function isValidHex(h) { return /^#[0-9A-Fa-f]{6}$/.test(h); }

/* ─── Default swatches ───────────────────────────────────────── */
const DEFAULT_SWATCHES = [
  '#000000','#ffffff','#ef4444','#f97316','#eab308',
  '#22c55e','#3b82f6','#8b5cf6','#ec4899','#6b7280',
  '#1e40af','#065f46','#7c2d12','#1e3a5f','#4a044e',
];

/* ─── Component ─────────────────────────────────────────────── */
function ColorPicker({
  value,
  defaultValue  = '#1E40AF',
  onChange,

  swatches      = DEFAULT_SWATCHES,  // pass [] to hide
  showAlpha     = false,
  disabled      = false,

  /* translatable */
  hexLabel      = 'Hex color',
  alphaLabel    = 'Opacity',

  className     = '',
}) {
  const isControlled = value !== undefined;

  /* parse initial hex → HSV */
  const initHex = isControlled ? value : defaultValue;
  const [hsv,   setHsv]   = useState(() => hexToHsv(isValidHex(initHex) ? initHex : '#1E40AF'));
  const [alpha, setAlpha]  = useState(1);
  const [hexIn, setHexIn]  = useState(initHex);
  const [open,  setOpen]   = useState(false);

  const rootRef    = useRef(null);
  const boxRef     = useRef(null);
  const draggingBox = useRef(false);

  /* derived hex */
  const currentHex = useMemo(() => hsvToHex(...hsv), [hsv]);

  /* sync controlled value → hsv */
  useEffect(() => {
    if (!isControlled) return;
    if (isValidHex(value) && value.toLowerCase() !== currentHex.toLowerCase()) {
      setHsv(hexToHsv(value));
      setHexIn(value);
    }
  }, [isControlled, value]); // eslint-disable-line

  /* emit on change */
  const emit = useCallback((h, s, v, a = alpha) => {
    const hex = hsvToHex(h, s, v);
    if (!isControlled) setHsv([h, s, v]);
    setHexIn(hex);
    onChange?.(showAlpha ? { hex, alpha: a } : hex);
  }, [isControlled, alpha, showAlpha, onChange]);

  /* click outside */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  /* ── 2D gradient box drag ── */
  function calcBoxSV(e) {
    const rect = boxRef.current.getBoundingClientRect();
    const s = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const v = clamp(1 - (e.clientY - rect.top) / rect.height, 0, 1);
    return [s, v];
  }

  function onBoxPointerDown(e) {
    draggingBox.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    const [s, v] = calcBoxSV(e);
    emit(hsv[0], s, v);
  }
  function onBoxPointerMove(e) {
    if (!draggingBox.current) return;
    const [s, v] = calcBoxSV(e);
    emit(hsv[0], s, v);
  }
  function onBoxPointerUp() { draggingBox.current = false; }

  /* ── Hex input ── */
  function onHexChange(e) {
    const raw = e.target.value;
    setHexIn(raw);
    const full = raw.startsWith('#') ? raw : '#' + raw;
    if (isValidHex(full)) {
      const [h, s, v] = hexToHsv(full);
      setHsv([h, s, v]);
      onChange?.(showAlpha ? { hex: full, alpha } : full);
    }
  }
  function onHexBlur() {
    const full = hexIn.startsWith('#') ? hexIn : '#' + hexIn;
    if (!isValidHex(full)) setHexIn(currentHex);
  }

  /* hue pure color for the gradient box background */
  const hueColor = `hsl(${hsv[0]}, 100%, 50%)`;

  /* thumb position in the box */
  const thumbLeft = `${hsv[1] * 100}%`;
  const thumbTop  = `${(1 - hsv[2]) * 100}%`;

  /* trigger swatch color */
  const triggerColor = showAlpha
    ? `rgba(${hsvToRgb(...hsv).map(Math.round).join(',')},${alpha})`
    : currentHex;

  const rootClass = ['nxp-cpicker', disabled ? 'nxp-cpicker--disabled' : '', className]
    .filter(Boolean).join(' ');

  return (
    <div ref={rootRef} className={rootClass}>
      {/* ── Trigger ── */}
      <button
        type="button"
        className="nxp-cpicker__trigger"
        style={{ '--swatch': triggerColor }}
        onClick={() => !disabled && setOpen((o) => !o)}
        aria-label={`Color picker, current: ${currentHex}`}
        aria-expanded={open}
        disabled={disabled}
      >
        <span className="nxp-cpicker__trigger-swatch" />
        <span className="nxp-cpicker__trigger-hex">{currentHex.toUpperCase()}</span>
        <span className="nxp-cpicker__trigger-caret" aria-hidden="true">▾</span>
      </button>

      {/* ── Panel ── */}
      {open && (
        <div className="nxp-cpicker__panel">

          {/* 2D gradient box */}
          <div
            ref={boxRef}
            className="nxp-cpicker__gradient"
            style={{ background: hueColor }}
            onPointerDown={onBoxPointerDown}
            onPointerMove={onBoxPointerMove}
            onPointerUp={onBoxPointerUp}
          >
            <div className="nxp-cpicker__gradient-white" />
            <div className="nxp-cpicker__gradient-black" />
            {/* Thumb */}
            <div
              className="nxp-cpicker__thumb"
              style={{ left: thumbLeft, top: thumbTop, background: currentHex }}
            />
          </div>

          {/* Hue slider */}
          <div className="nxp-cpicker__sliders">
            <input
              type="range"
              className="nxp-cpicker__hue"
              min={0} max={360} step={1}
              value={Math.round(hsv[0])}
              onChange={(e) => emit(Number(e.target.value), hsv[1], hsv[2])}
              aria-label="Hue"
            />

            {/* Alpha slider */}
            {showAlpha && (
              <div className="nxp-cpicker__alpha-wrap">
                <input
                  type="range"
                  className="nxp-cpicker__alpha"
                  min={0} max={100} step={1}
                  value={Math.round(alpha * 100)}
                  onChange={(e) => {
                    const a = Number(e.target.value) / 100;
                    setAlpha(a);
                    onChange?.({ hex: currentHex, alpha: a });
                  }}
                  aria-label={alphaLabel}
                  style={{
                    '--alpha-start': `rgba(${hsvToRgb(...hsv).map(Math.round).join(',')},0)`,
                    '--alpha-end':   `rgba(${hsvToRgb(...hsv).map(Math.round).join(',')},1)`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Hex input + preview */}
          <div className="nxp-cpicker__hex-row">
            <div className="nxp-cpicker__preview" style={{ background: triggerColor }} />
            <div className="nxp-cpicker__hex-wrap">
              <span className="nxp-cpicker__hex-hash">#</span>
              <input
                type="text"
                className="nxp-cpicker__hex-input"
                value={hexIn.replace('#', '').toUpperCase()}
                maxLength={6}
                onChange={onHexChange}
                onBlur={onHexBlur}
                aria-label={hexLabel}
              />
            </div>
            {showAlpha && (
              <div className="nxp-cpicker__alpha-val">
                {Math.round(alpha * 100)}%
              </div>
            )}
          </div>

          {/* Swatches */}
          {swatches.length > 0 && (
            <div className="nxp-cpicker__swatches">
              {swatches.map((sw) => (
                <button
                  key={sw}
                  type="button"
                  className={`nxp-cpicker__swatch${sw.toLowerCase() === currentHex.toLowerCase() ? ' nxp-cpicker__swatch--active' : ''}`}
                  style={{ background: sw }}
                  onClick={() => {
                    const [h, s, v] = hexToHsv(sw);
                    setHsv([h, s, v]);
                    setHexIn(sw);
                    onChange?.(showAlpha ? { hex: sw, alpha } : sw);
                  }}
                  aria-label={sw}
                  title={sw}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { ColorPicker };
export default ColorPicker;
