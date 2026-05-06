/**
 * Nexter UI — Token Generator
 * Source: figma-export.json  (Figma Variables export)
 * Output: src/styles/theme.css
 *
 * Structure generated:
 *   :root {
 *     ── Section 1: --nexter-* tokens  (direct values from Figma)
 *        Colors, Spacing, Radius, Typography
 *     ── Section 2: Non-Figma tokens kept as literal values
 *        Size heights, Motion, Shadows
 *     ── Section 3: --nxp-* semantic aliases → var(--nexter-*)
 *        So all 60+ components keep working unchanged
 *     ── Section 4: Short backward-compat aliases
 *   }
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const figma = JSON.parse(readFileSync(resolve(__dirname, 'figma-export.json'), 'utf8'));

/* ── Parse Figma JSON ──────────────────────────────────────── */

// Colors — extract CSS var name from Figma variable name
// e.g. "Primary Colors/--nexter-color-primary"    → --nexter-color-primary
// e.g. "Secondary Colors/-nexter-color-secondary-darker" → --nexter-color-secondary-darker
const colorTokens = [];
for (const c of figma.collections.Colors.variables.colors) {
  const match = c.name.match(/-{1,2}nexter-[\w-]+/);
  if (!match) continue;
  let varName = match[0];
  if (!varName.startsWith('--')) varName = '--' + varName.slice(1);
  colorTokens.push({ var: varName, value: c.value });
}
colorTokens.sort((a, b) => a.var.localeCompare(b.var));

// Spacing — "Spacing - none"→spacing-none, "Spacing - xxs"→spacing-xxs …
const spacingTokens = figma.collections.Spacing.variables.numbers.map(s => ({
  var: `--nexter-spacing-${s.token.replace(/^spacing-/, '')}`,
  value: `${s.value}px`,
}));

// Radius — "Radius - 0"→radius-0 … "Radius - 8"→radius-8
const radiusTokens = figma.collections.Radius.variables.numbers
  .sort((a, b) => a.value - b.value)
  .map(r => ({
    var: `--nexter-radius-${r.token.replace(/^radius-/, '')}`,
    value: `${r.value}px`,
  }));

// Typography
const fontWeightMap = { regular: 400, medium: 500, bold: 700 };
const fontTokens      = [];
const fontSizeTokens  = [];
const fontWeightTokens = [];
const lineHeightTokens = [];

fontTokens.push({
  var: '--nexter-font-family-body',
  value: '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
});

for (const t of figma.collections.Typography.variables.numbers) {
  if (t.token.startsWith('font-size-')) {
    fontSizeTokens.push({ var: `--nexter-font-size-${t.token.replace(/^font-size-/, '')}`, value: `${t.value}px` });
  } else if (t.token.startsWith('line-height-')) {
    // "line-height-xs-10px" → name = "xs"
    const name = t.token.replace(/^line-height-/, '').replace(/-\d+px$/, '');
    lineHeightTokens.push({ var: `--nexter-line-height-${name}`, value: `${t.value}px` });
  }
}
for (const t of figma.collections.Typography.variables.strings) {
  if (t.token.startsWith('font-weight-')) {
    const name = t.token.replace(/^font-weight-/, '');
    fontWeightTokens.push({ var: `--nexter-font-weight-${name}`, value: `${fontWeightMap[name] ?? t.value}` });
  }
}

/* ── Helpers ───────────────────────────────────────────────── */
const lines = (tokens, indent = '  ') =>
  tokens.map(t => `${indent}${t.var}: ${t.value};`).join('\n');

/* ── Generate CSS ──────────────────────────────────────────── */
const css = `/* ============================================================
   Nexter UI — Design Tokens  (theme.css)
   Source: figma-export.json  (Figma Variables)
   Regenerate: npm run build:tokens
   ============================================================ */

/* ── Figma Design Tokens ────────────────────────────────────── */
:root {

  /* ── Colors ───────────────────────────────────────────────── */
${lines(colorTokens)}

  /* ── Spacing ──────────────────────────────────────────────── */
${lines(spacingTokens)}

  /* ── Radius ───────────────────────────────────────────────── */
${lines(radiusTokens)}

  /* ── Typography ───────────────────────────────────────────── */
${lines(fontTokens)}
${lines(fontSizeTokens)}
${lines(fontWeightTokens)}
${lines(lineHeightTokens)}

  /* ── Component height tokens (not in Figma) ──────────────── */
  --nxp-size-h-sm: 28px;
  --nxp-size-h-md: 36px;
  --nxp-size-h-lg: 40px;

  /* ── Motion tokens (not in Figma) ────────────────────────── */
  --nxp-motion-ease-standard:    cubic-bezier(0.16, 1, 0.3, 1);
  --nxp-motion-ease-in:          cubic-bezier(0.4, 0, 1, 1);
  --nxp-motion-ease-out:         cubic-bezier(0, 0, 0.2, 1);
  --nxp-motion-ease-linear:      linear;
  --nxp-motion-duration-instant: 80ms;
  --nxp-motion-duration-fast:    120ms;
  --nxp-motion-duration-hover:   180ms;
  --nxp-motion-duration-active:  220ms;
  --nxp-motion-duration-motion:  240ms;
  --nxp-motion-duration-slow:    400ms;

  /* ── Shadow tokens (not in Figma) ────────────────────────── */
  --nxp-shadow-sm:   0 1px 2px rgba(15, 23, 42, 0.06);
  --nxp-shadow-md:   0 1px 2px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06);
  --nxp-shadow-lg:   0 4px 12px -4px rgba(15, 23, 42, 0.10);
  --nxp-shadow-xl:   0 12px 32px rgba(15, 23, 42, 0.12), 0 4px 8px rgba(15, 23, 42, 0.06);
  --nxp-shadow-ring: 0 0 0 2px rgba(23, 23, 204, 0.25);

  /* ══════════════════════════════════════════════════════════
     --nxp-* semantic aliases → var(--nexter-*)
     Components reference these names; all resolve to Figma tokens.
     ══════════════════════════════════════════════════════════ */

  /* Primary interactive */
  --nxp-color-primary-default:    var(--nexter-color-primary);
  --nxp-color-primary-hover:      var(--nexter-color-primary-darker);
  --nxp-color-primary-active:     var(--nexter-color-primary-darker);
  --nxp-color-primary-foreground: var(--nexter-color-text-white);

  /* Brand compat */
  --nxp-color-brand-soft:  var(--nexter-color-primary-lightest);
  --nxp-color-brand-accent: var(--nexter-color-secondary);
  --nxp-color-brand-grad:  linear-gradient(180deg, var(--nexter-color-primary-darker) 0%, var(--nexter-color-primary) 100%);

  /* Status */
  --nxp-color-success-default: var(--nexter-color-success);
  --nxp-color-success-soft:    var(--nexter-color-success-lightest);
  --nxp-color-success-dark:    var(--nexter-color-success-darker);
  --nxp-color-warning-default: var(--nexter-color-warning);
  --nxp-color-warning-soft:    var(--nexter-color-warning-lightest);
  --nxp-color-warning-dark:    var(--nexter-color-warning-darker);
  --nxp-color-error-default:   var(--nexter-color-error);
  --nxp-color-error-soft:      var(--nexter-color-error-lightest);
  --nxp-color-error-dark:      var(--nexter-color-error-darker);
  --nxp-color-info-default:    var(--nexter-color-primary);
  --nxp-color-info-soft:       var(--nexter-color-primary-lightest);
  --nxp-color-info-dark:       var(--nexter-color-primary-darker);

  /* Background */
  --nxp-color-bg-default:     var(--nexter-color-background-weaker);
  --nxp-color-bg-alt:         var(--nexter-color-background-default);
  --nxp-color-bg-wash:        var(--nexter-color-background-default);
  --nxp-color-bg-wash-active: var(--nexter-color-primary-lightest);
  --nxp-color-bg-overlay:     rgba(26, 26, 26, 0.4);

  /* Text */
  --nxp-color-text-default:    var(--nexter-color-text-default);
  --nxp-color-text-strong:     var(--nexter-color-text-default);
  --nxp-color-text-muted:      var(--nexter-color-text-weaker);
  --nxp-color-text-faint:      var(--nexter-color-text-disabled);
  --nxp-color-text-inverse:    var(--nexter-color-text-white);
  --nxp-color-text-link:       var(--nexter-color-primary);
  --nxp-color-text-link-hover: var(--nexter-color-primary-darker);

  /* Border */
  --nxp-color-border-default: var(--nexter-color-border-default);
  --nxp-color-border-strong:  var(--nexter-color-background-strongest);
  --nxp-color-border-focus:   var(--nexter-color-primary);

  /* Surface */
  --nxp-color-surface-input:        var(--nexter-color-background-weaker);
  --nxp-color-surface-card:         var(--nexter-color-background-weaker);
  --nxp-color-surface-popover:      var(--nexter-color-background-weaker);
  --nxp-color-surface-tooltip:      var(--nexter-color-text-default);
  --nxp-color-surface-tooltip-text: var(--nexter-color-text-white);

  /* Spacing aliases */
  --nxp-spacing-0:   var(--nexter-spacing-none);
  --nxp-spacing-1:   var(--nexter-spacing-xs);
  --nxp-spacing-2:   var(--nexter-spacing-md);
  --nxp-spacing-3:   var(--nexter-spacing-xl);
  --nxp-spacing-4:   var(--nexter-spacing-3xl);
  --nxp-spacing-5:   var(--nexter-spacing-4xl);
  --nxp-spacing-6:   var(--nexter-spacing-5xl);
  --nxp-spacing-8:   var(--nexter-spacing-6xl);
  --nxp-spacing-10:  var(--nexter-spacing-7xl);
  --nxp-spacing-12:  var(--nexter-spacing-8xl);
  --nxp-spacing-16:  var(--nexter-spacing-9xl);
  --nxp-spacing-xs:  var(--nexter-spacing-xs);
  --nxp-spacing-sm:  var(--nexter-spacing-md);
  --nxp-spacing-md:  var(--nexter-spacing-3xl);
  --nxp-spacing-lg:  var(--nexter-spacing-5xl);
  --nxp-spacing-xl:  var(--nexter-spacing-6xl);
  --nxp-spacing-2xl: var(--nexter-spacing-8xl);
  --nxp-spacing-3xl: var(--nexter-spacing-9xl);

  /* Radius aliases */
  --nxp-radius-none: var(--nexter-radius-0);
  --nxp-radius-sm:   var(--nexter-radius-2);
  --nxp-radius-md:   var(--nexter-radius-3);
  --nxp-radius-lg:   var(--nexter-radius-4);
  --nxp-radius-xl:   var(--nexter-radius-5);
  --nxp-radius-2xl:  var(--nexter-radius-6);
  --nxp-radius-full: var(--nexter-radius-8);

  /* Typography aliases */
  --nxp-font-family-sans:        var(--nexter-font-family-body);
  --nxp-font-size-xs:            var(--nexter-font-size-xs);
  --nxp-font-size-sm:            var(--nexter-font-size-sm);
  --nxp-font-size-md:            var(--nexter-font-size-md);
  --nxp-font-size-lg:            var(--nexter-font-size-lg);
  --nxp-font-size-xl:            18px;
  --nxp-font-size-2xl:           var(--nexter-font-size-xl);
  --nxp-font-size-3xl:           24px;
  --nxp-font-size-4xl:           30px;
  --nxp-font-size-5xl:           36px;
  --nxp-font-weight-regular:     var(--nexter-font-weight-regular);
  --nxp-font-weight-medium:      var(--nexter-font-weight-medium);
  --nxp-font-weight-semibold:    600;
  --nxp-font-weight-bold:        var(--nexter-font-weight-bold);
  --nxp-font-lineHeight-none:    1;
  --nxp-font-lineHeight-tight:   1.25;
  --nxp-font-lineHeight-snug:    1.375;
  --nxp-font-lineHeight-normal:  1.5;
  --nxp-font-lineHeight-relaxed: 1.625;
  --nxp-font-lineHeight-loose:   2;

  /* ── Short backward-compat aliases ───────────────────────── */
  --nxp-brand:           var(--nexter-color-primary);
  --nxp-brand-secondary: var(--nexter-color-secondary);
  --nxp-brand-soft:      var(--nexter-color-primary-lightest);
  --nxp-brand-grad:      var(--nxp-color-brand-grad);
  --nxp-bg:              var(--nxp-color-bg-default);
  --nxp-bg-alt:          var(--nxp-color-bg-alt);
  --nxp-wash-hover:      var(--nxp-color-bg-wash);
  --nxp-wash-active:     var(--nxp-color-bg-wash-active);
  --nxp-text:            var(--nxp-color-text-default);
  --nxp-text-strong:     var(--nxp-color-text-strong);
  --nxp-text-muted:      var(--nxp-color-text-muted);
  --nxp-text-faint:      var(--nxp-color-text-faint);
  --nxp-border:          var(--nxp-color-border-default);
  --nxp-border-strong:   var(--nxp-color-border-strong);
  --nxp-success:         var(--nxp-color-success-default);
  --nxp-warning:         var(--nxp-color-warning-default);
  --nxp-error:           var(--nxp-color-error-default);
  --nxp-info:            var(--nxp-color-info-default);
  --nxp-shadow:          var(--nxp-shadow-md);
  --nxp-ring:            var(--nxp-shadow-ring);
  --nxp-ease:            var(--nxp-motion-ease-standard);
  --nxp-dur-hover:       var(--nxp-motion-duration-hover);
  --nxp-dur-active:      var(--nxp-motion-duration-active);
  --nxp-dur-motion:      var(--nxp-motion-duration-motion);
  --nxp-font:            var(--nxp-font-family-sans);
  --nxp-radius:          var(--nxp-radius-md);
  --nxp-radius-pill:     var(--nxp-radius-full);
  --nxp-h:               var(--nxp-size-h-md);
  --nxp-h-sm:            var(--nxp-size-h-sm);
  --nxp-h-lg:            var(--nxp-size-h-lg);
}

/* ── Dark theme ──────────────────────────────────────────────── */
.nxp-dark,
[data-theme="dark"] {
}

/* ── Dark theme (system preference) ─────────────────────────── */
@media (prefers-color-scheme: dark) {
  :root:not(.nxp-light) {
  }
}
`;

/* ── Write ──────────────────────────────────────────────────── */
mkdirSync(resolve(__dirname, 'src/styles'), { recursive: true });
writeFileSync(resolve(__dirname, 'src/styles/theme.css'), css, 'utf8');

console.log('✅ theme.css generated → src/styles/theme.css');
console.log(`   ${css.split('\n').length} lines, ${(Buffer.byteLength(css, 'utf8') / 1024).toFixed(1)} KB`);
