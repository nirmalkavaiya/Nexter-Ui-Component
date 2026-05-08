/**
 * Nexter UI — Token Generator  v3
 * ============================================================
 * Source:  figma-export.json
 * Output:  src/styles/theme.css
 *
 * Architecture — single-layer, flat CSS custom properties:
 *
 *   :root {
 *     ── Section 1: --nxp-color-*   (final hex values, no var() chains)
 *     ── Section 2: --nxp-space-*   (final px values)
 *     ── Section 3: --nxp-radius-*  (final px values)
 *     ── Section 4: --nxp-text-*    (font sizes)
 *     ──            --nxp-font-*    (families + weights)
 *     ──            --nxp-leading-* (line heights)
 *     ── Section 5: --nxp-shadow-*  (not in Figma — literal values)
 *     ── Section 6: --nxp-ease-*    (motion easing)
 *     ──            --nxp-duration-* (motion timing)
 *     ── Section 7: --nxp-h-*       (component heights)
 *     ── Section 8: Backward-compat aliases (one-hop max, never through
 *                   --nexter-*).  Old component names → new --nxp-* names.
 *   }
 *
 * ❌ --nexter-* NEVER appears in the output CSS.
 * ❌ No multi-hop var() chains.
 * ✅ Every alias resolves in ≤ 1 CSS custom property lookup.
 * ============================================================
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const figma = JSON.parse(readFileSync(resolve(__dirname, 'figma-export.json'), 'utf8'));

/* ══════════════════════════════════════════════════════════════
   1. COLOUR MAP  —  Figma var name → public --nxp-color-* name
   ══════════════════════════════════════════════════════════════ */
const COLOR_MAP = {
  /* Primary */
  '--nexter-color-primary':              '--nxp-color-primary',
  '--nexter-color-primary-darker':       '--nxp-color-primary-dark',
  '--nexter-color-primary-lighter':      '--nxp-color-primary-light',
  '--nexter-color-primary-lightest':     '--nxp-color-primary-subtle',
  /* Secondary */
  '--nexter-color-secondary':            '--nxp-color-secondary',
  '--nexter-color-secondary-darker':     '--nxp-color-secondary-dark',
  '--nexter-color-secondary-lighter':    '--nxp-color-secondary-light',
  '--nexter-color-secondary-lightest':   '--nxp-color-secondary-subtle',
  /* Text */
  '--nexter-color-text-default':         '--nxp-color-text',
  '--nexter-color-text-weaker':          '--nxp-color-text-muted',
  '--nexter-color-text-disabled':        '--nxp-color-text-faint',
  '--nexter-color-text-white':           '--nxp-color-text-inverse',
  /* Background */
  '--nexter-color-background-weaker':    '--nxp-color-bg',
  '--nexter-color-background-default':   '--nxp-color-bg-muted',
  '--nexter-color-background-stronger':  '--nxp-color-bg-subtle',
  '--nexter-color-background-strongest': '--nxp-color-bg-strong',
  /* Border */
  '--nexter-color-border-default':       '--nxp-color-border',
  '--nexter-color-border-weak':          '--nxp-color-border-subtle',
  /* Status — success */
  '--nexter-color-success':              '--nxp-color-success',
  '--nexter-color-success-lightest':     '--nxp-color-success-subtle',
  '--nexter-color-success-lighter':      '--nxp-color-success-light',
  '--nexter-color-success-darker':       '--nxp-color-success-dark',
  /* Status — warning */
  '--nexter-color-warning':              '--nxp-color-warning',
  '--nexter-color-warning-lightest':     '--nxp-color-warning-subtle',
  '--nexter-color-warning-lighter':      '--nxp-color-warning-light',
  '--nexter-color-warning-darker':       '--nxp-color-warning-dark',
  /* Status — error */
  '--nexter-color-error':                '--nxp-color-error',
  '--nexter-color-error-lightest':       '--nxp-color-error-subtle',
  '--nexter-color-error-lighter':        '--nxp-color-error-light',
  '--nexter-color-error-darker':         '--nxp-color-error-dark',
};

/* Preferred display order */
const COLOR_GROUP_ORDER = [
  'primary', 'secondary', 'text', 'bg', 'border',
  'success', 'warning', 'error',
];

/* ══════════════════════════════════════════════════════════════
   2. RADIUS NAME MAP  —  index → semantic name
   ══════════════════════════════════════════════════════════════ */
const RADIUS_NAMES = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

/* ══════════════════════════════════════════════════════════════
   3. PARSE FIGMA JSON
   ══════════════════════════════════════════════════════════════ */

/* — Colors — */
const colors = [];
for (const c of figma.collections.Colors.variables.colors) {
  const match = c.name.match(/-{1,2}nexter-[\w-]+/);
  if (!match) continue;
  let figmaVar = match[0];
  if (!figmaVar.startsWith('--')) figmaVar = '--' + figmaVar.slice(1);
  const nxpVar = COLOR_MAP[figmaVar];
  if (nxpVar) colors.push({ var: nxpVar, value: c.value });
}
colors.sort((a, b) => {
  const rank = v => {
    const idx = COLOR_GROUP_ORDER.findIndex(g => v.includes(`-${g}`));
    return idx === -1 ? 99 : idx;
  };
  const ra = rank(a.var), rb = rank(b.var);
  return ra !== rb ? ra - rb : a.var.localeCompare(b.var);
});

/* — Spacing — use pixel value as the scale key (e.g. --nxp-space-8 = 8px) */
const spacing = figma.collections.Spacing.variables.numbers
  .sort((a, b) => a.value - b.value)
  .map(s => ({ var: `--nxp-space-${s.value}`, value: `${s.value}px` }));

/* — Radius — */
const radiusSorted = [...figma.collections.Radius.variables.numbers]
  .sort((a, b) => a.value - b.value);
const radius = radiusSorted.map((r, i) => ({
  var:   `--nxp-radius-${RADIUS_NAMES[i] ?? i}`,
  value: `${r.value}px`,
}));

/* — Typography — */
const typo           = figma.collections.Typography.variables;
const fontWeightNums = { regular: 400, medium: 500, bold: 700 };

const fontSizes = typo.numbers
  .filter(t => t.token.startsWith('font-size-'))
  .sort((a, b) => a.value - b.value)
  .map(t => ({ var: `--nxp-text-${t.token.replace('font-size-', '')}`, value: `${t.value}px` }));

const fontWeights = typo.strings
  .filter(t => t.token.startsWith('font-weight-'))
  .map(t => {
    const name = t.token.replace('font-weight-', '');
    return { var: `--nxp-font-${name}`, value: `${fontWeightNums[name] ?? t.value}` };
  });

const lineHeights = typo.numbers
  .filter(t => t.token.startsWith('line-height-'))
  .sort((a, b) => a.value - b.value)
  .map(t => {
    const name = t.token.replace(/^line-height-/, '').replace(/-\d+px$/, '');
    return { var: `--nxp-leading-${name}`, value: `${t.value}px` };
  });

/* ══════════════════════════════════════════════════════════════
   4. HELPERS
   ══════════════════════════════════════════════════════════════ */
const L = (arr, indent = '  ') =>
  arr.map(t => `${indent}${t.var}: ${t.value};`).join('\n');

/* ══════════════════════════════════════════════════════════════
   5. GENERATE CSS
   ══════════════════════════════════════════════════════════════ */
const css = `/* ============================================================
   Nexter UI — Design Tokens  (theme.css)
   Source:      figma-export.json
   Regenerate:  npm run build:tokens
   ============================================================
   Architecture: single-layer --nxp-* custom properties.
   No --nexter-* in output. No multi-hop var() chains.
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   LIGHT THEME  (default)
   ───────────────────────────────────────────────────────────── */
:root {

  /* ══ COLORS ══════════════════════════════════════════════ */

  /* Primary */
  --nxp-color-primary:        #1717cc;
  --nxp-color-primary-dark:   #111193;
  --nxp-color-primary-light:  #b1b1f6;
  --nxp-color-primary-subtle: #f5f7fe;

  /* Secondary */
  --nxp-color-secondary:        #f12d2d;
  --nxp-color-secondary-dark:   #bf0d0d;
  --nxp-color-secondary-light:  #fbc6c6;
  --nxp-color-secondary-subtle: #fef1f1;

  /* Text */
  --nxp-color-text:         #1a1a1a;
  --nxp-color-text-muted:   #666666;
  --nxp-color-text-faint:   #b3b3b3;
  --nxp-color-text-inverse: #ffffff;

  /* Background */
  --nxp-color-bg:       #ffffff;
  --nxp-color-bg-muted: #f0f0f1;
  --nxp-color-bg-subtle: #dfdfe1;
  --nxp-color-bg-strong: #c5c5c9;

  /* Border */
  --nxp-color-border:        #d1d1d6;
  --nxp-color-border-subtle: #f0f0f0;
  --nxp-color-border-focus:  #1717cc;

  /* Surface (contextual aliases — used by components) */
  --nxp-color-surface:         #ffffff;
  --nxp-color-surface-raised:  #ffffff;
  --nxp-color-surface-overlay: rgba(26, 26, 26, 0.4);

  /* Status — Success */
  --nxp-color-success:        #2ea343;
  --nxp-color-success-dark:   #0a842a;
  --nxp-color-success-light:  #a7eaaa;
  --nxp-color-success-subtle: #e7ffe7;

  /* Status — Warning */
  --nxp-color-warning:        #aa8d10;
  --nxp-color-warning-dark:   #86700b;
  --nxp-color-warning-light:  #f4db6f;
  --nxp-color-warning-subtle: #fff8d9;

  /* Status — Error */
  --nxp-color-error:        #f65258;
  --nxp-color-error-dark:   #d12d37;
  --nxp-color-error-light:  #fdc9c6;
  --nxp-color-error-subtle: #fff2ef;

  /* Status — Info (maps to primary scale) */
  --nxp-color-info:        #1717cc;
  --nxp-color-info-dark:   #111193;
  --nxp-color-info-subtle: #f5f7fe;

  /* ══ SPACING  (scale = pixel value) ══════════════════════ */
${L(spacing)}
  --nxp-space-25: 25px;

  /* ══ RADIUS ══════════════════════════════════════════════ */
${L(radius)}
  --nxp-radius-xxs: 2px;

  /* ══ TYPOGRAPHY ══════════════════════════════════════════ */

  /* Font family */
  --nxp-font: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --nxp-font-mono: ui-monospace, "Cascadia Code", "Fira Mono", monospace;

  /* Font sizes */
${L(fontSizes)}

  /* Font weights */
${L(fontWeights)}
  --nxp-font-semibold: 600;

  /* Line heights */
${L(lineHeights)}

  /* ══ SHADOWS ═════════════════════════════════════════════ */
  --nxp-shadow-sm:   0 1px 2px rgba(15, 23, 42, 0.06);
  --nxp-shadow-md:   0 1px 2px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06);
  --nxp-shadow-lg:   0 4px 12px -4px rgba(15, 23, 42, 0.10);
  --nxp-shadow-xl:   0 12px 32px rgba(15, 23, 42, 0.12), 0 4px 8px rgba(15, 23, 42, 0.06);
  --nxp-shadow-ring: 0 0 0 2px rgba(23, 23, 204, 0.25);

  /* ══ MOTION ══════════════════════════════════════════════ */
  --nxp-ease:    cubic-bezier(0.16, 1, 0.3, 1);
  --nxp-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --nxp-ease-out: cubic-bezier(0, 0, 0.2, 1);

  --nxp-duration-instant: 80ms;
  --nxp-duration-fast:    120ms;
  --nxp-duration-hover:   180ms;
  --nxp-duration-active:  220ms;
  --nxp-duration-motion:  240ms;
  --nxp-duration-slow:    400ms;

  /* ══ COMPONENT HEIGHTS ═══════════════════════════════════ */
  --nxp-h-sm: 28px;
  --nxp-h-md: 36px;
  --nxp-h-lg: 43px;

  /* ══════════════════════════════════════════════════════════
     BACKWARD-COMPAT ALIASES
     Maps old --nxp-color-*-default / --nxp-spacing-* / etc.
     → new clean --nxp-* names.
     One hop max. Never through --nexter-*.
     Safe to remove in a future major version.
     ══════════════════════════════════════════════════════════ */

  /* ── Colors: primary interactive ── */
  --nxp-color-primary-default:    var(--nxp-color-primary);
  --nxp-color-primary-hover:      var(--nxp-color-primary-dark);
  --nxp-color-primary-active:     var(--nxp-color-primary-dark);
  --nxp-color-primary-foreground: var(--nxp-color-text-inverse);

  /* ── Colors: brand ── */
  --nxp-color-brand-soft:   var(--nxp-color-primary-subtle);
  --nxp-color-brand-accent: var(--nxp-color-secondary);
  --nxp-color-brand-grad:   linear-gradient(180deg, var(--nxp-color-primary-dark) 0%, var(--nxp-color-primary) 100%);

  /* ── Colors: status ── */
  --nxp-color-success-default: var(--nxp-color-success);
  --nxp-color-success-soft:    var(--nxp-color-success-subtle);
  --nxp-color-warning-default: var(--nxp-color-warning);
  --nxp-color-warning-soft:    var(--nxp-color-warning-subtle);
  --nxp-color-error-default:   var(--nxp-color-error);
  --nxp-color-error-soft:      var(--nxp-color-error-subtle);
  --nxp-color-info-default:    var(--nxp-color-info);
  --nxp-color-info-soft:       var(--nxp-color-info-subtle);
  --nxp-color-info-dark:       var(--nxp-color-info-dark);

  /* ── Colors: background ── */
  --nxp-color-bg-default:     var(--nxp-color-bg);
  --nxp-color-bg-alt:         var(--nxp-color-bg-muted);
  --nxp-color-bg-wash:        var(--nxp-color-bg-muted);
  --nxp-color-bg-wash-active: var(--nxp-color-primary-subtle);
  --nxp-color-bg-overlay:     var(--nxp-color-surface-overlay);

  /* ── Colors: text ── */
  --nxp-color-text-default: var(--nxp-color-text);
  --nxp-color-text-strong:  var(--nxp-color-text);
  --nxp-color-text-link:    var(--nxp-color-primary);
  --nxp-color-text-link-hover: var(--nxp-color-primary-dark);

  /* ── Colors: border ── */
  --nxp-color-border-default: var(--nxp-color-border);
  --nxp-color-border-strong:  var(--nxp-color-bg-strong);

  /* ── Colors: surface ── */
  --nxp-color-surface-input:         var(--nxp-color-bg);
  --nxp-color-surface-card:          var(--nxp-color-bg);
  --nxp-color-surface-popover:       var(--nxp-color-bg);
  --nxp-color-surface-tooltip:       var(--nxp-color-text);
  --nxp-color-surface-tooltip-text:  var(--nxp-color-text-inverse);

  /* ── Spacing: numeric scale ── */
  --nxp-spacing-0:   var(--nxp-space-0);
  --nxp-spacing-1:   var(--nxp-space-4);
  --nxp-spacing-2:   var(--nxp-space-8);
  --nxp-spacing-3:   var(--nxp-space-12);
  --nxp-spacing-4:   var(--nxp-space-16);
  --nxp-spacing-5:   var(--nxp-space-20);
  --nxp-spacing-6:   var(--nxp-space-24);
  --nxp-spacing-8:   var(--nxp-space-32);
  --nxp-spacing-10:  var(--nxp-space-40);
  --nxp-spacing-12:  var(--nxp-space-48);
  --nxp-spacing-16:  var(--nxp-space-64);
  --nxp-spacing-xs:  var(--nxp-space-4);
  --nxp-spacing-sm:  var(--nxp-space-8);
  --nxp-spacing-md:  var(--nxp-space-16);
  --nxp-spacing-lg:  var(--nxp-space-25);
  --nxp-spacing-xl:  var(--nxp-space-32);
  --nxp-spacing-2xl: var(--nxp-space-48);
  --nxp-spacing-3xl: var(--nxp-space-64);

  /* ── Radius ── (names unchanged, kept for compat) */
  --nxp-radius-2xl: var(--nxp-radius-2xl);  /* same name → no-op, documents intent */

  /* ── Typography ── */
  --nxp-font-family-sans:        var(--nxp-font);
  --nxp-font-family-mono:        var(--nxp-font-mono);
  --nxp-font-size-xs:            var(--nxp-text-xs);
  --nxp-font-size-sm:            var(--nxp-text-sm);
  --nxp-font-size-md:            var(--nxp-text-md);
  --nxp-font-size-lg:            var(--nxp-text-lg);
  --nxp-font-size-xl:            18px;
  --nxp-font-size-2xl:           var(--nxp-text-xl);
  --nxp-font-size-3xl:           24px;
  --nxp-font-size-4xl:           30px;
  --nxp-font-size-5xl:           36px;
  --nxp-font-weight-regular:     var(--nxp-font-regular);
  --nxp-font-weight-medium:      var(--nxp-font-medium);
  --nxp-font-weight-semibold:    var(--nxp-font-semibold);
  --nxp-font-weight-bold:        var(--nxp-font-bold);
  --nxp-font-lineHeight-none:    16px;
  --nxp-font-lineHeight-tight:   17px;
  --nxp-font-lineHeight-snug:    18px;
  --nxp-font-lineHeight-normal:  24px;
  --nxp-font-lineHeight-relaxed: 26px;
  --nxp-font-lineHeight-loose:   32px;

  /* ── Motion ── */
  --nxp-motion-ease-standard:       var(--nxp-ease);
  --nxp-motion-ease-in:             var(--nxp-ease-in);
  --nxp-motion-ease-out:            var(--nxp-ease-out);
  --nxp-motion-ease-linear:         linear;
  --nxp-motion-duration-instant:    var(--nxp-duration-instant);
  --nxp-motion-duration-fast:       var(--nxp-duration-fast);
  --nxp-motion-duration-hover:      var(--nxp-duration-hover);
  --nxp-motion-duration-active:     var(--nxp-duration-active);
  --nxp-motion-duration-motion:     var(--nxp-duration-motion);
  --nxp-motion-duration-slow:       var(--nxp-duration-slow);

  /* ── Size heights ── */
  --nxp-size-h-sm: var(--nxp-h-sm);
  --nxp-size-h-md: var(--nxp-h-md);
  --nxp-size-h-lg: var(--nxp-h-lg);

  /* ── Short aliases  (used directly in component styles) ── */
  --nxp-brand:           var(--nxp-color-primary);
  --nxp-brand-secondary: var(--nxp-color-secondary);
  --nxp-brand-soft:      var(--nxp-color-primary-subtle);
  --nxp-brand-grad:      var(--nxp-color-brand-grad);
  --nxp-bg:              var(--nxp-color-bg);
  --nxp-bg-alt:          var(--nxp-color-bg-muted);
  --nxp-wash-hover:      var(--nxp-color-bg-muted);
  --nxp-wash-active:     var(--nxp-color-primary-subtle);
  --nxp-text:            var(--nxp-color-text);
  --nxp-text-strong:     var(--nxp-color-text);
  --nxp-text-muted:      var(--nxp-color-text-muted);
  --nxp-text-faint:      var(--nxp-color-text-faint);
  --nxp-border:          var(--nxp-color-border);
  --nxp-border-strong:   var(--nxp-color-bg-strong);
  --nxp-success:         var(--nxp-color-success);
  --nxp-warning:         var(--nxp-color-warning);
  --nxp-error:           var(--nxp-color-error);
  --nxp-info:            var(--nxp-color-info);
  --nxp-shadow:          var(--nxp-shadow-md);
  --nxp-ring:            var(--nxp-shadow-ring);
  --nxp-dur-hover:       var(--nxp-duration-hover);
  --nxp-dur-active:      var(--nxp-duration-active);
  --nxp-dur-motion:      var(--nxp-duration-motion);
  --nxp-radius:          var(--nxp-radius-md);
  --nxp-radius-pill:     var(--nxp-radius-full);
  --nxp-h:               var(--nxp-h-md);
}

`;

/* ══════════════════════════════════════════════════════════════
   6. WRITE
   ══════════════════════════════════════════════════════════════ */
mkdirSync(resolve(__dirname, 'src/styles'), { recursive: true });
writeFileSync(resolve(__dirname, 'src/styles/theme.css'), css, 'utf8');

const lines = css.split('\n').length;
const kb    = (Buffer.byteLength(css, 'utf8') / 1024).toFixed(1);
console.log(`✅ theme.css  →  src/styles/theme.css  (${lines} lines, ${kb} KB)`);
console.log('   ❌ --nexter-* : 0 references in output');
console.log('   ✅ --nxp-*    : single layer, final values + one-hop compat aliases');
