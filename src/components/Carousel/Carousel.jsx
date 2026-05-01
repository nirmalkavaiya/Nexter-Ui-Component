import React, { useState, useRef, useCallback, useEffect } from 'react';

function Carousel({ slides = [], className = '' }) {
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

  // Update dot on scroll
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

  return (
    <div className={`nxp-carousel ${className}`}>
      <div className="nxp-carousel__track" ref={trackRef}>
        {slides.map((slide, idx) => (
          <div key={idx} className="nxp-carousel__slide">
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
          </div>
        ))}
      </div>
      <div className="nxp-carousel__nav">
        <button
          type="button"
          className="nxp-carousel__btn"
          onClick={() => scrollToSlide(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          ‹
        </button>
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
        <button
          type="button"
          className="nxp-carousel__btn"
          onClick={() => scrollToSlide(current + 1)}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export { Carousel };
export default Carousel;
