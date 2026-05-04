import React, { useRef } from 'react';

/**
 * ScrollArea
 *
 * A scrollable container with a styled custom scrollbar overlay.
 * Thin, rounded scrollbar that matches the Nexter design token system.
 *
 * Props
 * ─────
 * height       string | number    Fixed height (e.g. '320px', 320)
 * maxHeight    string | number    Max-height (use instead of height for dynamic)
 * horizontal   boolean            Enable horizontal scroll (default: false)
 * children     ReactNode
 * className    string
 *
 * @example
 * <ScrollArea maxHeight="400px">
 *   {longList.map(item => <div key={item.id}>{item.label}</div>)}
 * </ScrollArea>
 */
function ScrollArea({
  height,
  maxHeight,
  horizontal = false,
  children,
  className = '',
}) {
  const style = {
    ...(height    !== undefined ? { height    : typeof height    === 'number' ? `${height}px`    : height }    : {}),
    ...(maxHeight !== undefined ? { maxHeight : typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight } : {}),
  };

  const overflowX = horizontal ? 'auto' : 'hidden';

  const cls = [
    'nxp-scroll-area',
    horizontal ? 'nxp-scroll-area--x' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cls}
      style={{ ...style, overflowX, overflowY: 'auto' }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export { ScrollArea };
export default ScrollArea;
