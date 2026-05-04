/**
 * Style Dictionary v4 config — Nexter UI
 *
 * Reads:  tokens/global.json + tokens/light.json + tokens/dark.json
 * Writes: src/styles/theme.css
 *
 * Output structure:
 *   :root { }                                      ← global + light tokens
 *   .nxp-dark, [data-theme="dark"] { }            ← dark tokens (explicit)
 *   @media (prefers-color-scheme: dark) {          ← dark tokens (system)
 *     :root:not(.nxp-light) { }
 *   }
 */

import StyleDictionary from 'style-dictionary';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/* ── Load token sets ────────────────────────────────────────── */
const global = JSON.parse(readFileSync(resolve(__dirname, 'tokens/global.json'), 'utf8'));
const light  = JSON.parse(readFileSync(resolve(__dirname, 'tokens/light.json'),  'utf8'));
const dark   = JSON.parse(readFileSync(resolve(__dirname, 'tokens/dark.json'),   'utf8'));

/* ── Flatten helper ─────────────────────────────────────────── */
function deepMerge(...objects) {
  const out = {};
  for (const obj of objects) {
    for (const [k, v] of Object.entries(obj)) {
      if (v && typeof v === 'object' && !v.value) {
        out[k] = deepMerge(out[k] || {}, v);
      } else {
        out[k] = v;
      }
    }
  }
  return out;
}

/* ── CSS property transformer ───────────────────────────────── */
function tokenToCssVar(name) {
  // nxp.color.bg.default → --nxp-color-bg-default
  return '--' + name.replace(/\./g, '-');
}

function collectVars(obj, prefix = '') {
  const lines = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !('value' in v)) {
      lines.push(...collectVars(v, key));
    } else if (v && typeof v === 'object' && 'value' in v) {
      lines.push(`  ${tokenToCssVar(key)}: ${v.value};`);
    }
  }
  return lines;
}

/* ── Build CSS ──────────────────────────────────────────────── */
function buildThemeCss() {
  const lightTokens = deepMerge(global, light);
  const darkTokens  = deepMerge(global, dark);

  const lightVars = collectVars(lightTokens);
  const darkVars  = collectVars(darkTokens);

  /* Backward-compat aliases — map old token names to new ones */
  const aliases = `
  /* ── Backward-compat aliases (legacy → semantic token) ── */
  --nxp-brand: var(--nxp-color-primary-default);
  --nxp-brand-2: var(--nxp-color-brand-accent);
  --nxp-brand-soft: var(--nxp-color-brand-soft);
  --nxp-brand-grad: var(--nxp-color-brand-grad);
  --nxp-bg: var(--nxp-color-bg-default);
  --nxp-bg-alt: var(--nxp-color-bg-alt);
  --nxp-wash-hover: var(--nxp-color-bg-wash);
  --nxp-wash-active: var(--nxp-color-bg-wash-active);
  --nxp-text: var(--nxp-color-text-default);
  --nxp-text-strong: var(--nxp-color-text-strong);
  --nxp-text-muted: var(--nxp-color-text-muted);
  --nxp-text-faint: var(--nxp-color-text-faint);
  --nxp-border: var(--nxp-color-border-default);
  --nxp-border-strong: var(--nxp-color-border-strong);
  --nxp-success: var(--nxp-color-success-default);
  --nxp-warning: var(--nxp-color-warning-default);
  --nxp-error: var(--nxp-color-error-default);
  --nxp-info: var(--nxp-color-info-default);
  --nxp-shadow-sm: var(--nxp-shadow-sm);
  --nxp-shadow: var(--nxp-shadow-md);
  --nxp-shadow-md: var(--nxp-shadow-lg);
  --nxp-shadow-lg: var(--nxp-shadow-xl);
  --nxp-ring: var(--nxp-shadow-ring);
  --nxp-ease: var(--nxp-motion-ease-standard);
  --nxp-dur-hover: var(--nxp-motion-duration-hover);
  --nxp-dur-active: var(--nxp-motion-duration-active);
  --nxp-dur-motion: var(--nxp-motion-duration-motion);
  --nxp-font: var(--nxp-font-family-sans);
  --nxp-radius: var(--nxp-radius-md);
  --nxp-radius-sm: var(--nxp-radius-sm);
  --nxp-radius-lg: var(--nxp-radius-lg);
  --nxp-radius-pill: var(--nxp-radius-full);
  --nxp-h: var(--nxp-size-h-md);
  --nxp-h-sm: var(--nxp-size-h-sm);
  --nxp-h-lg: var(--nxp-size-h-lg);`;

  return `/* ============================================================
   Nexter UI — Generated Design Tokens (theme.css)
   DO NOT EDIT — run \`npm run build:tokens\` to regenerate.
   Source: tokens/global.json, tokens/light.json, tokens/dark.json
   ============================================================ */

/* ── Light theme (default / :root) ─────────────────────────── */
:root {
${lightVars.join('\n')}
${aliases}
}

/* ── Dark theme (explicit class / data attribute) ───────────── */
.nxp-dark,
[data-theme="dark"] {
${darkVars.join('\n')}
}

/* ── Dark theme (system preference, overridable with .nxp-light) */
@media (prefers-color-scheme: dark) {
  :root:not(.nxp-light) {
${darkVars.join('\n')}
  }
}
`;
}

/* ── Write file ─────────────────────────────────────────────── */
import { writeFileSync, mkdirSync } from 'fs';

const css = buildThemeCss();
mkdirSync(resolve(__dirname, 'src/styles'), { recursive: true });
writeFileSync(resolve(__dirname, 'src/styles/theme.css'), css, 'utf8');

console.log('✅ theme.css generated → src/styles/theme.css');
console.log(`   ${css.split('\n').length} lines, ${(Buffer.byteLength(css, 'utf8') / 1024).toFixed(1)} KB`);
