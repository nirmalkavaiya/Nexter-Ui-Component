import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Carousel
 *
 * Props:
 *   slides      {Array}    — each item may contain:
 *                            title, eyebrow, description, cta, ctaHref  (default text layout)
 *                            content   {ReactNode}  — fully custom slide content (overrides text layout)
 *                            background {string}    — inline background override (e.g. gradient)
 *   autoPlay    {boolean}  — auto-advance slides (default false)
 *   interval    {number}   — ms between auto-advances (default 4000)
 *   showArrows  {boolean}  — show prev/next arrow buttons (default true)
 *   variant     {string}   — '' | 'dark'  — 'dark' uses white dots for dark/gradient backgrounds
 *   className   {string}   — extra class on root .nxp-carousel
 */
function Carousel({
  slides = [],
  className    = '',
  autoPlay     = false,
  interval     = 4000,
  showArrows   = true,
  variant      = '',
}) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const scrollToSlide = useCallback((idx) => {
    if (!trackRef.current) return;
    const slide = trackRef.current.children[idx];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    setCurrent(idx);
  }, []);

  /* ── update dot on manual scroll ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let rafId;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const slideWidth = track.offsetWidth;
        const idx = Math.round(track.scrollLeft / slideWidth);
        setCurrent(Math.min(Math.max(0, idx), slides.length - 1));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [slides.length]);

  /* ── auto-play ── */
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const t = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;
        if (trackRef.current) {
          const el = trackRef.current.children[next];
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        return next;
      });
    }, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, slides.length]);

  const variantClass = variant === 'dark' ? ' nxp-carousel--dark' : '';

  return (
    <div className={`nxp-carousel${variantClass} ${className}`.trim()}>

      {/* ── Track ── */}
      <div className="nxp-carousel__track" ref={trackRef}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`nxp-carousel__slide${slide.content ? ' nxp-carousel__slide--custom' : ''}`}
            style={slide.background ? { background: slide.background } : undefined}
          >
            {slide.content ? slide.content : (
              <>
                {slide.eyebrow && (
                  <span className="nxp-carousel__eyebrow">{slide.eyebrow}</span>
                )}
                <div className="nxp-carousel__title">{slide.title}</div>
                {slide.description && (
                  <p className="nxp-carousel__desc">{slide.description}</p>
                )}
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
        ))}
      </div>

      {/* ── Nav ── */}
      <div className="nxp-carousel__nav">
        {showArrows && (
          <button
            type="button"
            className="nxp-carousel__btn"
            onClick={() => scrollToSlide(current - 1)}
            disabled={current === 0}
            aria-label="Previous slide"
          >‹</button>
        )}
        <div className="nxp-carousel__dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`nxp-carousel__dot${current === idx ? ' is-active' : ''}`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={current === idx}
            />
          ))}
        </div>
        {showArrows && (
          <button
            type="button"
            className="nxp-carousel__btn"
            onClick={() => scrollToSlide(current + 1)}
            disabled={current === slides.length - 1}
            aria-label="Next slide"
          >›</button>
        )}
      </div>
    </div>
  );
}

export { Carousel };
export default Carousel;
