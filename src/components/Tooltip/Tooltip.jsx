import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Tooltip({ content, children, className = '' }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const anchorRef = useRef(null);
  const tooltipRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const tooltipWidth = tooltipRef.current?.offsetWidth || 120;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 30;
    let top = rect.top - tooltipHeight - 6 + window.scrollY;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2 + window.scrollX;
    // Clamp to viewport
    left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
    if (top < 4) top = rect.bottom + 6 + window.scrollY;
    setPos({ top, left });
  }, []);

  const show = useCallback(() => {
    setVisible(true);
    requestAnimationFrame(updatePosition);
  }, [updatePosition]);

  const hide = useCallback(() => setVisible(false), []);

  // Reposition on scroll/resize while visible
  useEffect(() => {
    if (!visible) return;
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [visible, updatePosition]);

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
        {children}
      </span>
      {visible && content && createPortal(
        <div
          ref={tooltipRef}
          className="nxp-tooltip"
          style={{ top: pos.top, left: pos.left }}
          role="tooltip"
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
