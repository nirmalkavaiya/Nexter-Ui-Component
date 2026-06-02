import React, { memo } from 'react';
import { cn } from '../../lib/utils';

/**
 * FeatureList — v1.0.0
 *
 * A lightweight, accessible feature/checklist component that supports
 * both vertical (stacked) and horizontal (inline) layouts.
 *
 * Follows the nxp- BEM-style naming convention and uses CSS custom
 * properties (--nxpl-*) for all visual tokens so consumers can
 * override any value without touching component code.
 *
 * Usage examples
 * ─────────────────────────────────────────────────────────────
 * // Vertical (default) — string shorthand
 * <FeatureList items={['Unlimited pages', 'Dark mode', 'RTL support']} />
 *
 * // Horizontal with wrap
 * <FeatureList
 *   layout="horizontal"
 *   items={['SEO ready', 'Fast load', 'Accessible', 'Responsive']}
 * />
 *
 * // Per-item custom icon
 * <FeatureList
 *   items={[
 *     { text: 'Starter plan', icon: <StarIcon /> },
 *     { text: 'Pro plan',     icon: <ProIcon />  },
 *     { text: 'Enterprise',   icon: null },   // hides icon for this item
 *   ]}
 * />
 *
 * // With dividers + centered align
 * <FeatureList
 *   items={['One', 'Two', 'Three']}
 *   divider
 *   align="center"
 * />
 * ─────────────────────────────────────────────────────────────
 *
 * Props
 *  items        Array<string | { text: string, icon?: ReactNode | null }>
 *               — list data; per-item icon overrides the global `icon` prop.
 *               — pass `icon: null` on an item to suppress the icon for that row.
 *
 *  icon         ReactNode | null  — global icon applied to every item.
 *               Defaults to the built-in circular blue check SVG.
 *               Pass `null` to render all items without an icon.
 *
 *  layout       'vertical' (default) | 'horizontal'
 *  iconSize     number | string  — px value (default 16). Sets --nxpl-icon-size.
 *  iconTextGap  number | string  — gap between icon and text. Sets --nxpl-icon-text-gap.
 *  itemGap      number | string  — gap between list items. Sets --nxpl-item-gap.
 *               In horizontal layout, also sets --nxpl-layout-gap when layoutGap is omitted.
 *  layoutGap    number | string  — horizontal row/column gap only. Sets --nxpl-layout-gap.
 *  align        'start' (default) | 'center' | 'end'
 *  wrap         boolean (default true) — wraps items in horizontal layout.
 *  divider      boolean (default false) — renders a separator between vertical items.
 *  fullWidth    boolean (default false) — stretches list to 100% width.
 *  className    string  — extra classes on the root <ul>.
 *  style        object  — inline styles merged with --nxpl-* CSS variable overrides.
 *  textClassName string  — extra classes on every nxp-feature-list__text <span>.
 */

/* ── Default circular check icon ────────────────────────────── */
const DefaultCheckIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="8" cy="8" r="8" fill="var(--nxpl-icon-bg, var(--nxp-color-primary))" />
    <path
      d="M4.75 8.25 7 10.5l4.25-4.25"
      stroke="var(--nxpl-icon-check, #ffffff)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Component ───────────────────────────────────────────────── */
function FeatureList({
  /* data */
  items = [],

  /* icon */
  icon,

  /* layout */
  layout    = 'vertical',

  /* sizing */
  iconSize  = 16,

  /* spacing */
  iconTextGap,
  itemGap,
  layoutGap,

  /* alignment */
  align     = 'start',

  /* behaviour */
  wrap      = true,
  divider   = false,
  fullWidth = false,

  /* passthrough */
  className     = '',
  style: styleProp,
  textClassName = '',
}) {
  /* ── Root class list ───────────────────────────────────────── */
  const rootClass = cn(
    'nxp-feature-list',
    `nxp-feature-list--${layout}`,
    align !== 'start'                      ? `nxp-feature-list--align-${align}` : '',
    layout === 'horizontal' && wrap        ? 'nxp-feature-list--wrap'            : '',
    divider                                ? 'nxp-feature-list--divider'         : '',
    fullWidth                              ? 'nxp-feature-list--full-width'      : '',
    className,
  );

  const toCssSize = (value) =>
    typeof value === 'number' ? `${value}px` : value;

  /* ── Inline CSS variable overrides + consumer style ───────── */
  const cssVars = {};
  if (iconSize !== 16) {
    cssVars['--nxpl-icon-size'] = toCssSize(iconSize);
  }
  if (iconTextGap !== undefined) {
    cssVars['--nxpl-icon-text-gap'] = toCssSize(iconTextGap);
  }
  if (itemGap !== undefined) {
    cssVars['--nxpl-item-gap'] = toCssSize(itemGap);
  }

  const resolvedLayoutGap =
    layoutGap !== undefined
      ? layoutGap
      : layout === 'horizontal' && itemGap !== undefined
        ? itemGap
        : undefined;

  if (resolvedLayoutGap !== undefined) {
    cssVars['--nxpl-layout-gap'] = toCssSize(resolvedLayoutGap);
  }

  const mergedStyle =
    styleProp || Object.keys(cssVars).length
      ? { ...cssVars, ...styleProp }
      : undefined;

  return (
    <ul
      className={rootClass}
      style={mergedStyle}
      role="list"
    >
      {items.map((item, index) => {
        /* Normalise item shape */
        const text = typeof item === 'string' ? item : item.text;

        /* Per-item icon wins over global icon.
           If item.icon === null  → suppress icon for this row.
           If item.icon is absent → fall back to global icon prop.
           If global icon is absent → render default check SVG.
           If icon prop === null → no icon across the board. */
        let resolvedIcon;
        if (typeof item === 'object' && 'icon' in item) {
          resolvedIcon = item.icon; // may be null (suppress) or ReactNode
        } else if (icon !== undefined) {
          resolvedIcon = icon;      // global override (may be null)
        } else {
          resolvedIcon = <DefaultCheckIcon size={iconSize} />;
        }

        return (
          <li key={index} className="nxp-feature-list__item">
            {resolvedIcon !== null && resolvedIcon !== undefined && (
              <span className="nxp-feature-list__icon" aria-hidden="true">
                {resolvedIcon}
              </span>
            )}
            <span className={cn('nxp-feature-list__text', textClassName)}>
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

const FeatureListMemoized = memo(FeatureList);
export { FeatureListMemoized as FeatureList };
export default FeatureListMemoized;
