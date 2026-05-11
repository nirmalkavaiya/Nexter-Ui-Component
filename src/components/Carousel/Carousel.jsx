/**
 * Carousel — v2  (nexter-ui-component)
 *
 * New in v2
 *  • Transform-based engine (GPU-accelerated translate3d)
 *  • Drag / swipe — mouse + touch with momentum & threshold
 *  • pauseOnHover — suspend autoPlay while hovered
 *  • JSX <Slide> API — children-based composable slides
 *  • Mixed API — slides[] prop + <Slide> children merged in order
 *  • infinite loop — clone-based seamless wrapping
 *  • slidesPerView — number | { desktop, tablet, mobile }
 *  • gap — pixel gap between slides
 *  • keyboardNavigation — ArrowLeft / ArrowRight
 *  • autoHeight — track height matches current slide
 *  • rtl — reversed direction + transforms
 *  • virtual — render only visible ± buffer slides
 *  • Controlled API — activeIndex + onSlideChange
 *  • Context API + useCarousel() hook
 *  • Full ARIA: role=region, aria-live, role=tab dots
 *  • TypeScript types in index.d.ts
 *
 * Backward compatible with v1 API:
 *  slides[], autoPlay, interval, showArrows, variant, className
 */

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  Children,
  isValidElement,
} from 'react';

import { Slide } from './Slide';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */
const DUR_SLIDE   = 380; // ms — mirrors --nxp-dur-slide CSS var
const EASE_SLIDE  = 'cubic-bezier(0.16,1,0.3,1)';

/* ─────────────────────────────────────────────────────────────
   CONTEXT
───────────────────────────────────────────────────────────── */
const CarouselCtx = createContext(null);

/** Access carousel state from any descendant component */
export function useCarousel() {
  const ctx = useContext(CarouselCtx);
  if (!ctx) throw new Error('useCarousel must be used inside <Carousel>');
  return ctx;
}

/* ─────────────────────────────────────────────────────────────
   HOOK — useResizeObserver
───────────────────────────────────────────────────────────── */
function useResizeObserver(ref, cb) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frameId;
    const ro = new ResizeObserver(entries => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (entries[0]) cb(entries[0].contentRect);
      });
    });
    ro.observe(el);
    return () => { ro.disconnect(); cancelAnimationFrame(frameId); };
  }, [ref, cb]);
}

/* ─────────────────────────────────────────────────────────────
   HOOK — useAutoplay
───────────────────────────────────────────────────────────── */
function useAutoplay({ enabled, interval, paused, totalReal, goNext }) {
  // Use ref so interval never stales on goNext identity change
  const goNextRef = useRef(goNext);
  useEffect(() => { goNextRef.current = goNext; }, [goNext]);

  useEffect(() => {
    if (!enabled || totalReal <= 1 || paused) return;
    const t = setInterval(() => goNextRef.current(), interval);
    return () => clearInterval(t);
  }, [enabled, interval, paused, totalReal]);
}

/* ─────────────────────────────────────────────────────────────
   HOOK — useDrag
───────────────────────────────────────────────────────────── */
function useDrag({ trackRef, enabled, dragThreshold, swipeVelocity, goPrev, goNext, rtl }) {
  const state   = useRef({ active: false, startX: 0, startY: 0, delta: 0, t0: 0 });
  const goPrevR = useRef(goPrev);
  const goNextR = useRef(goNext);
  useEffect(() => { goPrevR.current = goPrev; goNextR.current = goNext; }, [goPrev, goNext]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta]   = useState(0);

  const onStart = useCallback((clientX, clientY) => {
    state.current = { active: true, startX: clientX, startY: clientY, delta: 0, t0: Date.now() };
    setDragDelta(0);
  }, []);

  const onMove = useCallback((clientX) => {
    if (!state.current.active) return;
    const raw = clientX - state.current.startX;
    state.current.delta = raw;
    if (Math.abs(raw) > 6) setIsDragging(true);
    setDragDelta(rtl ? -raw : raw);
  }, [rtl]);

  const onEnd = useCallback(() => {
    if (!state.current.active) return;
    state.current.active = false;
    const { delta, t0 } = state.current;
    const elapsed  = Math.max(1, Date.now() - t0);
    const velocity = Math.abs(delta) / elapsed;
    const shouldMove = Math.abs(delta) >= dragThreshold || velocity >= swipeVelocity;

    if (shouldMove) {
      const forward = rtl ? delta > 0 : delta < 0;
      if (forward) goNextR.current(); else goPrevR.current();
    }

    setDragDelta(0);
    // brief delay before clearing isDragging so click is suppressed
    setTimeout(() => setIsDragging(false), 50);
  }, [dragThreshold, swipeVelocity, rtl]);

  useEffect(() => {
    if (!enabled) return;
    const el = trackRef.current;
    if (!el) return;

    /* Mouse */
    const onMouseDown = (e) => { e.preventDefault(); onStart(e.clientX, e.clientY); };
    const onMouseMove = (e) => { if (state.current.active) { e.preventDefault(); onMove(e.clientX); } };
    const onMouseUp   = ()  => onEnd();

    /* Touch — detect vertical scroll and bail */
    let verticalScroll = false;
    const onTouchStart = (e) => {
      verticalScroll = false;
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchMove = (e) => {
      if (!state.current.active) return;
      const dx = Math.abs(e.touches[0].clientX - state.current.startX);
      const dy = Math.abs(e.touches[0].clientY - state.current.startY);
      if (dy > dx && dx < 10) { verticalScroll = true; state.current.active = false; setDragDelta(0); return; }
      if (!verticalScroll) { e.preventDefault(); onMove(e.touches[0].clientX); }
    };
    const onTouchEnd = () => { if (!verticalScroll) onEnd(); };

    el.addEventListener('mousedown',  onMouseDown,  { passive: false });
    window.addEventListener('mousemove', onMouseMove, { passive: false });
    window.addEventListener('mouseup',   onMouseUp);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove',  onTouchMove,  { passive: false });
    el.addEventListener('touchend',   onTouchEnd,   { passive: true });

    return () => {
      el.removeEventListener('mousedown',  onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove',  onTouchMove);
      el.removeEventListener('touchend',   onTouchEnd);
    };
  }, [enabled, onStart, onMove, onEnd, trackRef]);

  return { isDragging, dragDelta };
}

/* ─────────────────────────────────────────────────────────────
   HOOK — useKeyboardNav
───────────────────────────────────────────────────────────── */
function useKeyboardNav({ rootRef, enabled, goPrev, goNext }) {
  const goPrevR = useRef(goPrev);
  const goNextR = useRef(goNext);
  useEffect(() => { goPrevR.current = goPrev; goNextR.current = goNext; }, [goPrev, goNext]);

  useEffect(() => {
    if (!enabled) return;
    const el = rootRef.current;
    if (!el) return;
    const handler = (e) => {
      if (!el.contains(document.activeElement) && document.activeElement !== el) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrevR.current(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goNextR.current(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [enabled, rootRef]);
}

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

/** Resolve slidesPerView to a number based on container width */
function resolvePerView(slidesPerView, containerWidth) {
  if (typeof slidesPerView === 'number') return Math.max(1, Math.floor(slidesPerView));
  if (typeof slidesPerView === 'object' && slidesPerView !== null) {
    const { desktop = 1, tablet = 1, mobile = 1 } = slidesPerView;
    if (containerWidth > 0 && containerWidth <= 640)  return Math.max(1, mobile);
    if (containerWidth > 0 && containerWidth <= 1024) return Math.max(1, tablet);
    return Math.max(1, desktop);
  }
  return 1;
}

/** Collect slides from slides[] prop + JSX <Slide> children */
function buildSlideList(slidesProp, children) {
  const list = [];

  (slidesProp || []).forEach((s, i) => {
    list.push({ __type: 'data', __key: `prop-${i}`, ...s });
  });

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    const isSlide = child.type === Slide || child.type?.__isSlide;
    if (isSlide) {
      list.push({ __type: 'jsx', __key: child.key ?? `jsx-${list.length}`, __node: child });
    }
  });

  return list;
}

/* ─────────────────────────────────────────────────────────────
   SLIDE CELL — renders one slide (data or JSX)
───────────────────────────────────────────────────────────── */
function SlideCell({ slide, slideWidth, gapPx, isLast, index, totalInTrack }) {
  const layoutStyle = {
    width:       slideWidth,
    flexShrink:  0,
    marginRight: isLast ? 0 : gapPx,
    boxSizing:   'border-box',
    ...(slide.__isClone ? {} : {}), // clones look identical
  };

  /* JSX slide — clone element and inject layout style */
  if (slide.__type === 'jsx') {
    const orig = slide.__node;
    return React.cloneElement(orig, {
      key:   slide.__key,
      style: { ...layoutStyle, ...(orig.props.style || {}) },
      'aria-hidden': slide.__isClone ? 'true' : undefined,
      'aria-roledescription': 'slide',
      'aria-label': slide.__isClone ? undefined : `Slide ${(slide.__realIdx ?? index) + 1} of ${totalInTrack}`,
    });
  }

  /* Data slide — render default text layout or custom content */
  return (
    <div
      key={slide.__key}
      className={`nxp-carousel__slide${slide.content ? ' nxp-carousel__slide--custom' : ''}`}
      style={{
        ...layoutStyle,
        ...(slide.background ? { background: slide.background } : {}),
      }}
      aria-roledescription="slide"
      aria-label={slide.__isClone ? undefined : `Slide ${(slide.__realIdx ?? index) + 1} of ${totalInTrack}`}
      aria-hidden={slide.__isClone ? 'true' : undefined}
    >
      {slide.content ? slide.content : (
        <>
          {slide.eyebrow    && <span className="nxp-carousel__eyebrow">{slide.eyebrow}</span>}
          {slide.title      && <div  className="nxp-carousel__title">{slide.title}</div>}
          {slide.description && <p   className="nxp-carousel__desc">{slide.description}</p>}
          {slide.cta && (
            <a
              className="nxp-carousel__cta"
              href={slide.ctaHref || '#'}
              onClick={slide.ctaHref ? undefined : (e) => e.preventDefault()}
            >
              {slide.cta} →
            </a>
          )}
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN CAROUSEL
───────────────────────────────────────────────────────────── */
function Carousel({
  /* ── v1 props (backward compat) ── */
  slides        = [],
  className     = '',
  autoPlay      = false,
  interval      = 4000,
  showArrows    = true,
  variant       = '',

  /* ── v2 props ── */
  children,
  draggable           = true,
  dragThreshold       = 50,
  swipeVelocity       = 0.3,
  pauseOnHover        = true,
  infinite            = false,
  slidesPerView       = 1,
  gap                 = 0,
  keyboardNavigation  = true,
  autoHeight          = false,
  rtl                 = false,
  virtual             = false,
  label               = 'Carousel',

  /* ── controlled API ── */
  activeIndex,
  onSlideChange,
}) {
  const rootRef    = useRef(null);
  const wrapperRef = useRef(null);   // viewport element — has overflow:hidden, safe to measure
  const trackRef   = useRef(null);

  /* container width — drives geometry + responsive perView */
  const [containerWidth, setContainerWidth] = useState(0);

  /* hover pause */
  const [hovering, setHovering] = useState(false);
  const paused = pauseOnHover && hovering && autoPlay;

  /* slide height for autoHeight */
  const [slideHeight, setSlideHeight] = useState(null);

  /* ── build real slide list ── */
  const realSlides = useMemo(
    () => buildSlideList(slides, children).map((s, i) => ({ ...s, __realIdx: i })),
    [slides, children],
  );
  const totalReal = realSlides.length;

  /* ── resolve perView ── */
  const perView = useMemo(
    () => resolvePerView(slidesPerView, containerWidth),
    [slidesPerView, containerWidth],
  );

  /* ── clone slides for infinite mode ── */
  const { displaySlides, cloneOffset } = useMemo(() => {
    if (!infinite || totalReal === 0) return { displaySlides: realSlides, cloneOffset: 0 };
    const n = Math.min(perView, totalReal);
    const before = realSlides.slice(-n).map((s, i) => ({ ...s, __key: `cb-${i}`, __isClone: true }));
    const after  = realSlides.slice(0,  n).map((s, i) => ({ ...s, __key: `ca-${i}`, __isClone: true }));
    return { displaySlides: [...before, ...realSlides, ...after], cloneOffset: n };
  }, [realSlides, infinite, perView, totalReal]);

  /* ── track index ── */
  const [trackIndex, setTrackIndex]     = useState(() => infinite ? Math.min(perView, totalReal) : 0);
  const [noTransition, setNoTransition] = useState(false);
  const jumpLock = useRef(false);

  const isControlled   = activeIndex !== undefined;
  const displayIndex   = isControlled
    ? Math.max(0, Math.min(activeIndex, totalReal - 1))
    : Math.max(0, Math.min(trackIndex - cloneOffset, totalReal - 1));

  /* ── geometry ── */
  const gapPx      = typeof gap === 'number' ? gap : parseInt(gap, 10) || 0;
  const slideWidth = containerWidth > 0
    ? Math.max(0, (containerWidth - gapPx * (perView - 1)) / perView)
    : 0;
  const slideStep  = slideWidth + gapPx;

  /* ─────────────────────────────────────────
     Navigation
  ───────────────────────────────────────── */
  const goTo = useCallback((realIdx, skipTransition = false) => {
    const clamped = infinite
      ? ((realIdx % totalReal) + totalReal) % totalReal
      : Math.max(0, Math.min(realIdx, totalReal - 1));
    const newTrack = infinite ? clamped + cloneOffset : clamped;
    if (skipTransition) setNoTransition(true);
    setTrackIndex(newTrack);
    onSlideChange?.(clamped);
  }, [totalReal, infinite, cloneOffset, onSlideChange]);

  const goPrev = useCallback(() => {
    if (isControlled) {
      onSlideChange?.((activeIndex - 1 + totalReal) % totalReal);
      return;
    }
    if (infinite) {
      setTrackIndex(p => p - 1);
      onSlideChange?.((displayIndex - 1 + totalReal) % totalReal);
    } else {
      if (displayIndex <= 0) return;
      goTo(displayIndex - 1);
    }
  }, [isControlled, infinite, displayIndex, totalReal, goTo, onSlideChange, activeIndex]);

  const goNext = useCallback(() => {
    if (isControlled) {
      onSlideChange?.((activeIndex + 1) % totalReal);
      return;
    }
    if (infinite) {
      setTrackIndex(p => p + 1);
      onSlideChange?.((displayIndex + 1) % totalReal);
    } else {
      if (displayIndex >= totalReal - perView) return;
      goTo(displayIndex + 1);
    }
  }, [isControlled, infinite, displayIndex, totalReal, perView, goTo, onSlideChange, activeIndex]);

  /* ─────────────────────────────────────────
     Infinite loop jump-back
  ───────────────────────────────────────── */
  useEffect(() => {
    if (!infinite || jumpLock.current) return;
    const maxReal = cloneOffset + totalReal - 1;
    const inCloneZone = trackIndex > maxReal + (Math.min(perView, totalReal) - 1)
                     || trackIndex < cloneOffset;
    if (!inCloneZone) return;

    jumpLock.current = true;
    const timer = setTimeout(() => {
      const mod = ((trackIndex - cloneOffset) % totalReal + totalReal) % totalReal;
      const target = mod + cloneOffset;
      setNoTransition(true);
      setTrackIndex(target);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setNoTransition(false);
        jumpLock.current = false;
      }));
    }, DUR_SLIDE);

    return () => clearTimeout(timer);
  }, [trackIndex, infinite, cloneOffset, totalReal, perView]);

  /* ─────────────────────────────────────────
     noTransition one-frame reset
  ───────────────────────────────────────── */
  useEffect(() => {
    if (!noTransition) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setNoTransition(false)));
    return () => cancelAnimationFrame(id);
  }, [noTransition]);

  /* ─────────────────────────────────────────
     Controlled index sync
  ───────────────────────────────────────── */
  useEffect(() => {
    if (!isControlled) return;
    const clamped = Math.max(0, Math.min(activeIndex, totalReal - 1));
    setTrackIndex(clamped + cloneOffset);
  }, [isControlled, activeIndex, totalReal, cloneOffset]);

  /* ─────────────────────────────────────────
     Reset trackIndex when perView changes
     (avoid being in a clone zone with wrong offset)
  ───────────────────────────────────────── */
  useEffect(() => {
    if (!infinite) return;
    setNoTransition(true);
    setTrackIndex(displayIndex + cloneOffset);
  }, [perView]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ─────────────────────────────────────────
     Resize observer
  ───────────────────────────────────────── */
  const onResize = useCallback((rect) => setContainerWidth(rect.width), []);
  // Observe the viewport (has overflow:hidden) — never the root which can report
  // inflated width from overflowing track children causing a feedback loop.
  useResizeObserver(wrapperRef, onResize);
  useEffect(() => {
    if (wrapperRef.current) setContainerWidth(wrapperRef.current.offsetWidth);
  }, []);

  /* ─────────────────────────────────────────
     autoHeight — observe current slide
  ───────────────────────────────────────── */
  useEffect(() => {
    if (!autoHeight || !trackRef.current) return;
    const el = trackRef.current.children[trackIndex];
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSlideHeight(e.contentRect.height));
    ro.observe(el);
    setSlideHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, [autoHeight, trackIndex]);

  /* ─────────────────────────────────────────
     Hooks
  ───────────────────────────────────────── */
  useAutoplay({ enabled: autoPlay, interval, paused, totalReal, goNext });
  useKeyboardNav({ rootRef, enabled: keyboardNavigation, goPrev, goNext });

  /* ─────────────────────────────────────────
     Drag
  ───────────────────────────────────────── */
  const drag = useDrag({
    trackRef,
    enabled:       draggable && totalReal > 1,
    dragThreshold,
    swipeVelocity,
    goPrev,
    goNext,
    rtl,
  });

  /* ─────────────────────────────────────────
     Virtual — visible range
  ───────────────────────────────────────── */
  const visibleRange = useMemo(() => {
    if (!virtual) return null;
    const buffer = perView + 1;
    return {
      start: Math.max(0, trackIndex - buffer),
      end:   Math.min(displaySlides.length - 1, trackIndex + perView + buffer - 1),
    };
  }, [virtual, trackIndex, perView, displaySlides.length]);

  /* ─────────────────────────────────────────
     Track style
  ───────────────────────────────────────── */
  const rawOffset  = trackIndex * slideStep;
  const translateX = rtl ? rawOffset + drag.dragDelta : -(rawOffset - drag.dragDelta);

  const trackStyle = {
    display:     'flex',
    willChange:  'transform',
    transform:   `translate3d(${translateX}px, 0, 0)`,
    transition:  (noTransition || drag.isDragging)
      ? 'none'
      : `transform ${DUR_SLIDE}ms ${EASE_SLIDE}`,
    ...(autoHeight && slideHeight != null ? { alignItems: 'flex-start' } : {}),
  };

  /* ─────────────────────────────────────────
     Root classes
  ───────────────────────────────────────── */
  const rootClass = [
    'nxp-carousel',
    variant === 'dark'  ? 'nxp-carousel--dark'       : '',
    drag.isDragging     ? 'nxp-carousel--dragging'   : '',
    rtl                 ? 'nxp-carousel--rtl'         : '',
    autoHeight          ? 'nxp-carousel--auto-height' : '',
    className,
  ].filter(Boolean).join(' ');

  /* ─────────────────────────────────────────
     Context
  ───────────────────────────────────────── */
  const ctxValue = useMemo(() => ({
    current:    displayIndex,
    total:      totalReal,
    perView,
    isDragging: drag.isDragging,
    goTo,
    goPrev,
    goNext,
  }), [displayIndex, totalReal, perView, drag.isDragging, goTo, goPrev, goNext]);

  /* ─────────────────────────────────────────
     Guard — nothing to render
  ───────────────────────────────────────── */
  if (totalReal === 0) return null;

  const prevDisabled = !infinite && displayIndex <= 0;
  const nextDisabled = !infinite && displayIndex >= totalReal - perView;

  /* ─────────────────────────────────────────
     Render
  ───────────────────────────────────────── */
  return (
    <CarouselCtx.Provider value={ctxValue}>
      <div
        ref={rootRef}
        className={rootClass}
        role="region"
        aria-label={label}
        aria-roledescription="carousel"
        tabIndex={keyboardNavigation ? 0 : undefined}
        onMouseEnter={pauseOnHover ? () => setHovering(true)  : undefined}
        onMouseLeave={pauseOnHover ? () => setHovering(false) : undefined}
      >

        {/* ── Viewport (clips track overflow) ── */}
        <div
          ref={wrapperRef}
          className="nxp-carousel__viewport"
          style={autoHeight && slideHeight != null ? { height: slideHeight } : undefined}
        >
          <div
            ref={trackRef}
            className={`nxp-carousel__track${drag.isDragging ? ' nxp-carousel__track--dragging' : ''}`}
            style={trackStyle}
            aria-live={autoPlay ? 'off' : 'polite'}
          >
            {displaySlides.map((slide, idx) => {
              /* virtual mode — placeholder for off-screen slides */
              if (virtual && visibleRange && (idx < visibleRange.start || idx > visibleRange.end)) {
                return (
                  <div
                    key={slide.__key}
                    aria-hidden="true"
                    style={{
                      width:       slideWidth,
                      flexShrink:  0,
                      marginRight: idx === displaySlides.length - 1 ? 0 : gapPx,
                    }}
                  />
                );
              }
              return (
                <SlideCell
                  key={slide.__key}
                  slide={slide}
                  slideWidth={slideWidth}
                  gapPx={gapPx}
                  index={idx}
                  isLast={idx === displaySlides.length - 1}
                  totalInTrack={totalReal}
                />
              );
            })}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="nxp-carousel__nav" role="group" aria-label="Carousel controls">

          {showArrows && (
            <button
              type="button"
              className="nxp-carousel__btn nxp-carousel__btn--prev"
              onClick={goPrev}
              disabled={prevDisabled}
              aria-label="Previous slide"
            >
              {rtl ? '›' : '‹'}
            </button>
          )}

          {/* Dots */}
          <div
            className="nxp-carousel__dots"
            role="tablist"
            aria-label="Select slide"
          >
            {Array.from({ length: totalReal }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                className={`nxp-carousel__dot${displayIndex === idx ? ' is-active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Slide ${idx + 1} of ${totalReal}`}
                aria-selected={displayIndex === idx}
                tabIndex={displayIndex === idx ? 0 : -1}
              />
            ))}
          </div>

          {showArrows && (
            <button
              type="button"
              className="nxp-carousel__btn nxp-carousel__btn--next"
              onClick={goNext}
              disabled={nextDisabled}
              aria-label="Next slide"
            >
              {rtl ? '‹' : '›'}
            </button>
          )}

        </div>
      </div>
    </CarouselCtx.Provider>
  );
}

Carousel.Slide = Slide;
Carousel.displayName = 'Carousel';

export { Carousel };
export default Carousel;
