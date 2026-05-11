/**
 * Carousel — v3  (nexter-ui-component)
 *
 * Powered by @splidejs/react-splide — battle-tested, accessible,
 * touch/drag/keyboard ready out of the box.
 *
 * Simple usage
 * ────────────
 *   import { Carousel, Slide } from 'nexter-ui-component';
 *
 *   <Carousel autoPlay infinite>
 *     <Slide>Any content</Slide>
 *     <Slide><MyCard /></Slide>
 *   </Carousel>
 *
 * Data API (v1 backward-compat)
 * ─────────────────────────────
 *   <Carousel slides={[{ title, description, cta, ctaHref, background }]} />
 *
 * Responsive perPage
 * ──────────────────
 *   <Carousel slidesPerView={{ desktop: 3, tablet: 2, mobile: 1 }} gap={16}>
 *
 * Controlled
 * ──────────
 *   <Carousel activeIndex={idx} onSlideChange={setIdx} />
 *
 * Raw Splide options escape-hatch
 * ───────────────────────────────
 *   <Carousel options={{ speed: 600, easing: 'linear' }} />
 */

import React, {
  useRef,
  useEffect,
  Children,
  isValidElement,
} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

/* structural-only CSS — no default Splide skin (we apply our own) */
import '@splidejs/react-splide/css/core';

import { Slide } from './Slide';

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

/** Convert our responsive object into Splide breakpoints (max-width keys) */
function toSplideBreakpoints(slidesPerView, gap) {
  if (typeof slidesPerView !== 'object' || slidesPerView === null) return undefined;
  const { desktop = 1, tablet = 1, mobile = 1 } = slidesPerView;
  const g = gap ? `${gap}px` : 0;
  return {
    1024: { perPage: tablet, gap: g },
    640:  { perPage: mobile,  gap: g },
  };
}

/* ─────────────────────────────────────────────────────────────
   DATA SLIDE RENDERER — renders a slide from the slides[] prop
───────────────────────────────────────────────────────────── */
function DataSlideContent({ slide }) {
  /* custom content node */
  if (slide.content) {
    return (
      <div className="nxp-carousel__slide" style={slide.background ? { background: slide.background } : undefined}>
        {slide.content}
      </div>
    );
  }
  return (
    <div
      className="nxp-carousel__slide"
      style={slide.background ? { background: slide.background } : undefined}
    >
      {slide.eyebrow    && <span className="nxp-carousel__eyebrow">{slide.eyebrow}</span>}
      {slide.title      && <div  className="nxp-carousel__title">{slide.title}</div>}
      {slide.description && <p   className="nxp-carousel__desc">{slide.description}</p>}
      {slide.cta && (
        <a
          className="nxp-carousel__cta"
          href={slide.ctaHref || '#'}
          onClick={!slide.ctaHref ? (e) => e.preventDefault() : undefined}
        >
          {slide.cta} →
        </a>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CAROUSEL
───────────────────────────────────────────────────────────── */
function Carousel({
  /* ── v1 props (backward compat) ── */
  slides     = [],
  className  = '',
  autoPlay   = false,
  interval   = 4000,
  showArrows = true,
  variant    = '',

  /* ── v2 props ── */
  children,
  draggable          = true,
  pauseOnHover       = true,
  infinite           = false,
  slidesPerView      = 1,
  gap                = 0,
  keyboardNavigation = true,
  autoHeight         = false,
  rtl                = false,
  label              = 'Carousel',

  /* ── controlled ── */
  activeIndex,
  onSlideChange,

  /* ── Splide escape-hatch — any raw Splide option ── */
  options: extraOptions = {},
}) {
  const splideRef = useRef(null);

  /* ── Sync controlled index → Splide ── */
  useEffect(() => {
    if (activeIndex === undefined) return;
    const sp = splideRef.current?.splide;
    if (sp && sp.index !== activeIndex) sp.go(activeIndex);
  }, [activeIndex]);

  /* ── Resolve perPage ── */
  const perPage = typeof slidesPerView === 'number'
    ? Math.max(1, slidesPerView)
    : (slidesPerView?.desktop ?? 1);

  const breakpoints = toSplideBreakpoints(slidesPerView, gap);

  /* ── Build Splide options ── */
  const splideOptions = {
    type:        infinite ? 'loop' : 'slide',
    perPage,
    gap:         gap ? `${gap}px` : 0,
    drag:        draggable,
    autoplay:    autoPlay,
    interval,
    pauseOnHover,
    direction:   rtl ? 'rtl' : 'ltr',
    arrows:      showArrows,
    pagination:  true,
    autoHeight,
    keyboard:    keyboardNavigation ? 'focused' : false,
    rewind:      !infinite,          // rewind instead of stop when not looping
    speed:       400,
    easing:      'cubic-bezier(0.25,0.1,0.25,1)',
    ...(breakpoints ? { breakpoints } : {}),
    ...extraOptions,
  };

  /* ── Collect JSX slide children (Slide or any element) ── */
  const childSlides = Children.toArray(children).filter(isValidElement);

  const hasDataSlides = slides && slides.length > 0;
  const hasJsxSlides  = childSlides.length > 0;
  if (!hasDataSlides && !hasJsxSlides) return null;

  /* ── Root class ── */
  const rootClass = [
    'nxp-carousel',
    variant === 'dark' ? 'nxp-carousel--dark' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <Splide
        ref={splideRef}
        options={splideOptions}
        aria-label={label}
        onMoved={(_splide, newIdx) => onSlideChange?.(newIdx)}
      >
        {/* ── Data slides (slides[] prop) ── */}
        {(slides || []).map((slide, i) => (
          <SplideSlide key={`data-${i}`}>
            <DataSlideContent slide={slide} />
          </SplideSlide>
        ))}

        {/* ── JSX children — any React element becomes a slide ── */}
        {childSlides.map((child, i) => (
          <SplideSlide key={child.key ?? `jsx-${i}`}>
            {child}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

Carousel.Slide        = Slide;
Carousel.displayName  = 'Carousel';

export { Carousel };
export default Carousel;
