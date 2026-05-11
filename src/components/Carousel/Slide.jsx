import React from 'react';

/**
 * Slide — content wrapper for use inside <Carousel>.
 *
 * Usage:
 *   <Carousel>
 *     <Slide>Any content</Slide>
 *     <Slide background="linear-gradient(135deg,#1717cc,#4F46E5)">
 *       <MyHeroBanner />
 *     </Slide>
 *   </Carousel>
 *
 * The <Slide> renders a full-height content div inside each Splide
 * slide cell. Pass background for quick gradient/color fills, or
 * supply any className / style overrides.
 */
export function Slide({
  children,
  background,
  className  = '',
  style      = {},
  ...rest
}) {
  const resolvedStyle = background ? { background, ...style } : style;

  return (
    <div
      className={`nxp-carousel__slide-content ${className}`.trim()}
      style={resolvedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}

/* Marker — lets Carousel distinguish <Slide> from arbitrary children */
Slide.__isSlide   = true;
Slide.displayName = 'Slide';

export default Slide;
