import React from 'react';
import { sanitizeHtml } from '../../lib/sanitize';

/**
 * Tooltip — CSS-only show/hide (no JS events).
 *
 * Props
 * ─────
 * content   string | ReactNode  — tooltip text, HTML string, or JSX
 * position  'top'|'bottom'|'left'|'right'  (default 'top')
 * className string  — extra classes on the wrapper span
 * style     object  — inline styles on the wrapper span
 * children  ReactNode  — trigger element; falls back to ⓘ SVG icon
 *
 * Behaviour
 * ─────────
 * • Shown on  :hover  and  :focus-within  via CSS — zero JS events.
 * • content as HTML string → rendered via dangerouslySetInnerHTML.
 * • content as JSX          → rendered as React children.
 * • No children → renders the default SVG info icon (.nxp-tooltip-wrap__icon).
 *
 * Usage
 * ─────
 * <Tooltip content="Plain text" position="top">
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * <Tooltip content="<strong>Bold</strong> and <em>italic</em>" position="bottom" />
 *
 * <Tooltip content={<span>Rich <b>JSX</b></span>} position="right">
 *   <span className="nxp-tooltip-wrap__icon"><MyIcon /></span>
 * </Tooltip>
 */

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 7.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
  </svg>
);

function Tooltip({
  content,
  children,
  position = 'top',
  className = '',
  style,
}) {
  if (!content) return children ?? null;

  /* Detect HTML string so we can use dangerouslySetInnerHTML */
  const isHtml = typeof content === 'string' && /<[a-z][\s\S]*>/i.test(content);

  /* Default trigger — SVG info icon */
  const trigger = (children != null && children !== '')
    ? children
    : (
      <span
        className="nxp-tooltip-wrap__icon"
        role="img"
        aria-label="More information"
        tabIndex={0}
      >
        <InfoIcon />
      </span>
    );

  return (
    <span
      className={`nxp-tooltip-wrap${className ? ` ${className}` : ''}`}
      data-position={position}
      style={style}
    >
      {trigger}

      {isHtml ? (
        <div
          className="nxp-tooltip"
          role="tooltip"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        />
      ) : (
        <div className="nxp-tooltip" role="tooltip">
          {content}
        </div>
      )}
    </span>
  );
}

export { Tooltip };
export default Tooltip;
