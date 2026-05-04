import React from 'react';

/**
 * Typography
 *
 * Two modes:
 *
 * 1) Variant mode — renders a single styled text element:
 *    <Typography variant="h1">Heading</Typography>
 *    <Typography variant="lead">Lead paragraph</Typography>
 *    <Typography variant="muted">Muted helper text</Typography>
 *
 * 2) Prose mode — wraps rich HTML content and auto-styles all
 *    child elements (h1–h6, p, ul, ol, blockquote, code, pre, a…):
 *    <Typography prose>
 *      <h2>My Heading</h2>
 *      <p>A paragraph with <strong>bold</strong> text.</p>
 *    </Typography>
 *
 * Props
 * ─────
 * variant   'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'lead'|'large'|'small'|'muted'|'code'|'blockquote'
 * prose     boolean     — enable prose wrapper mode (ignores `variant`)
 * as        ElementType — override the rendered tag (default inferred from variant)
 * className string
 * children  ReactNode
 */

const VARIANT_TAG = {
  h1:         'h1',
  h2:         'h2',
  h3:         'h3',
  h4:         'h4',
  h5:         'h5',
  h6:         'h6',
  p:          'p',
  lead:       'p',
  large:      'p',
  small:      'small',
  muted:      'p',
  code:       'code',
  blockquote: 'blockquote',
};

function Typography({
  variant,
  prose = false,
  as: Tag,
  children,
  className = '',
}) {
  /* ── Prose wrapper mode ── */
  if (prose) {
    const Root = Tag || 'div';
    return <Root className={`nxp-prose ${className}`}>{children}</Root>;
  }

  /* ── Single-variant mode ── */
  const ResolvedTag = Tag || (variant ? VARIANT_TAG[variant] : 'p') || 'p';
  const cls = variant
    ? `nxp-typo nxp-typo--${variant} ${className}`
    : `nxp-typo ${className}`;

  return <ResolvedTag className={cls}>{children}</ResolvedTag>;
}

export { Typography };
export default Typography;
