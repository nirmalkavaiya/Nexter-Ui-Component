import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

const GAP = 8; // px gap between anchor edge and tooltip

function Tooltip({
  content,
  children,
  /** 'top' | 'bottom' | 'left' | 'right' — default 'top' */
  position = 'top',
  className = '',
}) {
  const [visible, setVisible]   = useState(false);
  const [pos, setPos]           = useState({ top: 0, left: 0 });
  const [actualPos, setActualPos] = useState(position);
  const anchorRef  = useRef(null);
  const tooltipRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const tw = tooltipRef.current?.offsetWidth  || 120;
    const th = tooltipRef.current?.offsetHeight || 32;
    let top, left, used = position;

    if (position === 'top') {
      top  = rect.top  - th - GAP + window.scrollY;
      left = rect.left + rect.width / 2 - tw / 2 + window.scrollX;
      // Flip to bottom if no room above
      if (top < window.scrollY + 8) {
        top  = rect.bottom + GAP + window.scrollY;
        used = 'bottom';
      }
    } else if (position === 'bottom') {
      top  = rect.bottom + GAP + window.scrollY;
      left = rect.left + rect.width / 2 - tw / 2 + window.scrollX;
      // Flip to top if no room below
      if (top + th > window.scrollY + window.innerHeight - 8) {
        top  = rect.top - th - GAP + window.scrollY;
        used = 'top';
      }
    } else if (position === 'left') {
      top  = rect.top  + rect.height / 2 - th / 2 + window.scrollY;
      left = rect.left - tw - GAP + window.scrollX;
      // Flip to right if no room on left
      if (left < 8) {
        left = rect.right + GAP + window.scrollX;
        used = 'right';
      }
    } else if (position === 'right') {
      top  = rect.top  + rect.height / 2 - th / 2 + window.scrollY;
      left = rect.right + GAP + window.scrollX;
      // Flip to left if no room on right
      if (left + tw > window.innerWidth - 8) {
        left = rect.left - tw - GAP + window.scrollX;
        used = 'left';
      }
    }

    // Clamp horizontal within viewport
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

    setPos({ top, left });
    setActualPos(used);
  }, [position]);

  const show = useCallback(() => {
    setVisible(true);
    // Run twice: first render to get size, then reposition
    requestAnimationFrame(() => requestAnimationFrame(updatePosition));
  }, [updatePosition]);

  const hide = useCallback(() => setVisible(false), []);

  // Reposition on scroll / resize while tooltip is open
  useEffect(() => {
    if (!visible) return;
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [visible, updatePosition]);

  // When children is omitted/null, fall back to the ⓘ info icon
  const trigger = (children !== undefined && children !== null && children !== '')
    ? children
    : (
      <span
        className="nxp-tooltip-wrap__icon"
        role="img"
        aria-label="Info"
        tabIndex={0}
      >
        ⓘ
      </span>
    );

  return (
    <>
      <span
        ref={anchorRef}
        className={`nxp-tooltip-wrap ${className}`}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {trigger}
      </span>

      {visible && content && createPortal(
        <div
          ref={tooltipRef}
          className="nxp-tooltip"
          data-position={actualPos}
          style={{ top: pos.top, left: pos.left }}
          role="tooltip"
          aria-live="polite"
        >
          {content}
        </div>,
        document.body
      )}
    </>
  );
}

export { Tooltip };
export default Tooltip;
