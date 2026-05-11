import { jsx as d } from "react/jsx-runtime";
import "react";
function s({
  children: l,
  background: e,
  className: r = "",
  style: i = {},
  ...t
}) {
  const o = e ? { background: e, ...i } : i;
  return /* @__PURE__ */ d(
    "div",
    {
      className: `nxp-carousel__slide nxp-carousel__slide--custom ${r}`.trim(),
      style: o,
      ...t,
      children: l
    }
  );
}
s.__isSlide = !0;
s.displayName = "Slide";
export {
  s as Slide
};
