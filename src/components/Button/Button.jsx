import React, { useCallback } from 'react';
import { cn } from '../../lib/utils';

/**
 * Button — v2
 *
 * Renders a <button> by default.
 * Renders an <a> when `href` is supplied.
 * Use `as` to swap in any element / router component (Next.js Link, etc.).
 *
 * Key rules
 *  • type="button" is always set on <button> — prevents accidental form submit.
 *  • href + target="_blank" → rel="nofollow noopener noreferrer" is applied
 *    automatically unless you supply your own rel.
 *  • Disabled <a> elements: href is removed, tabIndex=-1, aria-disabled=true,
 *    pointer-events:none via .nxp-btn--disabled CSS class.
 *
 * Usage examples
 * ─────────────────────────────────────────────────────────────
 * // Regular button (default)
 * <Button variant="primary">Save</Button>
 *
 * // External link — auto rel, opens in new tab
 * <Button href="https://nexterwp.com/docs/" target="_blank">
 *   Read Docs
 * </Button>
 *
 * // Internal link — plain anchor
 * <Button href="/settings" variant="outline">Settings</Button>
 *
 * // Next.js / React Router — pass the Link component via `as`
 * import Link from 'next/link';
 * <Button as={Link} href="/dashboard" variant="primary">Dashboard</Button>
 *
 * // Download link
 * <Button href="/export.csv" download="export.csv" variant="secondary">
 *   Download CSV
 * </Button>
 *
 * // Submit button inside a form
 * <Button type="submit" variant="primary">Submit</Button>
 * ─────────────────────────────────────────────────────────────
 *
 * Props
 *  variant      'primary'|'secondary'|'outline'|'ghost'|'destructive'|'link'|'grad'|'underline'
 *  size         'sm'|'md'|'lg'
 *  icon         boolean  — square icon-only button
 *  loading      boolean  — shows spinner, disables interaction
 *  disabled     boolean
 *  href         string   — renders <a>
 *  target       string   — '_blank' | '_self' | …
 *  rel          string   — override auto rel
 *  download     string|boolean
 *  as           ElementType — swap root element (Link, etc.)
 *  type         'button'|'submit'|'reset'  (default 'button')
 *  onClick      handler
 *  className    string
 */
function Button({
  /* ── visual ── */
  variant   = 'secondary',
  size,
  icon      = false,
  loading   = false,
  disabled  = false,

  /* ── content ── */
  children,
  className = '',

  /* ── link / anchor ── */
  href,
  target,
  rel,
  download,

  /* ── element override ── */
  as: Tag,

  /* ── button-specific ── */
  type = 'button',

  /* ── events ── */
  onClick,

  /* ── anything else (data-*, aria-*, etc.) ── */
  ...rest
}) {
  const isDisabled = disabled || loading;

  /* ── Resolve element ────────────────────────────────────── */
  // Priority: explicit `as` > href present → 'a' > 'button'
  const Element = Tag || (href ? 'a' : 'button');
  const isAnchor = Element === 'a' || (typeof Element !== 'string' && href);

  /* ── Auto rel for external links ────────────────────────── */
  // Only applied when target="_blank" and no explicit rel was passed
  const resolvedRel = rel !== undefined
    ? rel
    : (target === '_blank' ? 'nofollow noopener noreferrer' : undefined);

  /* ── Element-specific props ──────────────────────────────── */
  const linkProps  = {};
  const btnProps   = {};

  if (isAnchor) {
    // Disabled anchors: strip href so browser doesn't navigate
    linkProps.href     = isDisabled ? undefined : href;
    linkProps.target   = target;
    linkProps.rel      = resolvedRel;
    if (download !== undefined) linkProps.download = download;
    if (isDisabled) linkProps.tabIndex = -1;
  } else {
    btnProps.type     = type;
    btnProps.disabled = isDisabled;
  }

  /* ── Class list ──────────────────────────────────────────── */
  const classes = cn(
    'nxp-btn',
    `nxp-btn--${variant}`,
    size ? `nxp-btn--${size}` : '',
    icon     ? 'nxp-btn--icon'     : '',
    loading  ? 'nxp-btn--loading'  : '',
    isDisabled && isAnchor ? 'nxp-btn--disabled' : '',
    className,
  );

  /* ── Click guard for disabled state ─────────────────────── */
  /* Single stable function — avoids a new arrow fn every render when isDisabled=true */
  const handleClick = useCallback(
    (e) => {
      if (isDisabled) { e.preventDefault(); e.stopPropagation(); return; }
      onClick?.(e);
    },
    [isDisabled, onClick]
  );

  return (
    <Element
      className={classes}
      aria-disabled={isDisabled || undefined}
      onClick={handleClick}
      {...linkProps}
      {...btnProps}
      {...rest}
    >
      {loading && <span className="nxp-btn__spinner" aria-hidden="true" />}
      {children}
    </Element>
  );
}

export { Button };
export default Button;
