function e() {
  return process.env.NODE_ENV !== "production" && console.warn(
    "[nexter-ui] useCarousel() is no longer available in Carousel v3. Use the Splide ref API via the `options` escape-hatch if needed."
  ), null;
}
export {
  e as useCarousel
};
