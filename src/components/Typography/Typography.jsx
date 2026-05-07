import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Typography
 *
 * Two modes:
 *
 * 1) Variant mode — renders a single styled text element:
 *    <Typography variant="h1">Heading</Typography>
 *    <Typography variant="lead">Lead paragraph</Typography>
 *    <Typography variant="body">Body text</Typography>
 *    <Typography variant="sm">Small text</Typography>
 *    <Typography variant="xs">Extra small text</Typography>
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
 * variant   'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'lead'|'body'|'p'|'large'|'sm'|'small'|'xs'|'muted'|'code'|'blockquote'
 * prose     boolean     — enable prose wrapper mode (ignores `variant`)
 * as        ElementType — override the rendered tag (default inferred from variant)
 * color     'default'|'muted'|'primary'|'success'|'warning'|'error' — override text color
 * truncate  boolean     — single-line ellipsis overflow
 * clamp     number      — multi-line -webkit-line-clamp (e.g. clamp={2})
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
  body:       'p',
  large:      'p',
  sm:         'small',
  small:      'small',
  xs:         'span',
  muted:      'p',
  code:       'code',
  blockquote: 'blockquote',
};

function Typography({
  variant,
  prose = false,
  as: Tag,
  color,
  truncate = false,
  clamp,
  children,
  className = '',
  style,
  ...rest
}) {
  /* ── Prose wrapper mode ── */
  if (prose) {
    const Root = Tag || 'div';
    return (
      <Root className={cn('nxp-prose', className)} style={style} {...rest}>
        {children}
      </Root>
    );
  }

  /* ── Single-variant mode ── */
  const ResolvedTag = Tag || (variant ? VARIANT_TAG[variant] : 'p') || 'p';

  const colorClass = color && color !== 'default' ? `nxp-typo--color-${color}` : '';

  const cls = cn(
    'nxp-typo',
    variant ? `nxp-typo--${variant}` : '',
    colorClass,
    truncate ? 'nxp-typo--truncate' : '',
    clamp    ? 'nxp-typo--clamp'    : '',
    className,
  );

  const clampStyle = clamp
    ? {
        display: '-webkit-box',
        WebkitLineClamp: clamp,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        ...style,
      }
    : style;

  return (
    <ResolvedTag className={cls} style={clampStyle} {...rest}>
      {children}
    </ResolvedTag>
  );
}

export { Typography };
export default Typography;
