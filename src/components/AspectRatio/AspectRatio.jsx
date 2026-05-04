import React from 'react';

/**
 * AspectRatio
 *
 * Constrains its child to a specific aspect ratio.
 * Works with images, videos, iframes, maps — any content.
 *
 * Props
 * ─────
 * ratio      number   width/height ratio, e.g. 16/9 (default), 4/3, 1/1
 * children   ReactNode
 * className  string
 *
 * @example
 * <AspectRatio ratio={16/9}>
 *   <img src="..." alt="..." style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
 * </AspectRatio>
 */
function AspectRatio({ ratio = 16 / 9, children, className = '' }) {
  return (
    <div
      className={`nxp-aspect ${className}`}
      style={{ '--nxp-aspect-ratio': ratio }}
    >
      <div className="nxp-aspect__inner">{children}</div>
    </div>
  );
}

export { AspectRatio };
export default AspectRatio;
