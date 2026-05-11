export { default, Carousel } from './Carousel';
export { Slide } from './Slide';

/** @deprecated — useCarousel context hook removed in v3 (Splide-powered).
 *  Kept as a no-op export so existing imports don't break at build time. */
export function useCarousel() {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '[nexter-ui] useCarousel() is no longer available in Carousel v3. ' +
      'Use the Splide ref API via the `options` escape-hatch if needed.'
    );
  }
  return null;
}
