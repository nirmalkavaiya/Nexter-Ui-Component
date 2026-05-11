import { jsx as d } from "react/jsx-runtime";
import "react";
function t({
  children: l,
  background: e,
  className: r = "",
  style: i = {},
  ...s
}) {
  const o = e ? { background: e, ...i } : i;
  return /* @__PURE__ */ d(
    "div",
    {
      className: `nxp-carousel__slide-content ${r}`.trim(),
      style: o,
      ...s,
      children: l
    }
  );
}
t.__isSlide = !0;
t.displayName = "Slide";
export {
  t as Slide
};
