import React from 'react';

/**
 * Slide — composable slide cell for Carousel v2.
 *
 * Usage:
 *   <Carousel>
 *     <Slide>Any content</Slide>
 *     <Slide background="linear-gradient(135deg,#1717cc,#4F46E5)">
 *       <MyHeroBanner />
 *     </Slide>
 *   </Carousel>
 *
 * When used as a direct child of Carousel, the component receives
 * width / margin layout styles injected by the Carousel engine.
 * Any style you pass is merged on top of those layout styles.
 */
export function Slide({
  children,
  background,
  className  = '',
  style      = {},
  ...rest
}) {
  const resolvedStyle = background
    ? { background, ...style }
    : style;

  return (
    <div
      className={`nxp-carousel__slide nxp-carousel__slide--custom ${className}`.trim()}
      style={resolvedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}

// Marker used by Carousel to detect <Slide> children
Slide.__isSlide    = true;
Slide.displayName  = 'Slide';

export default Slide;
