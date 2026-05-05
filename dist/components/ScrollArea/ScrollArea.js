import { jsx as p } from "react/jsx-runtime";
import "react";
function f({
  height: o,
  maxHeight: r,
  horizontal: l = !1,
  children: e,
  className: n = ""
}) {
  const s = {
    ...o !== void 0 ? { height: typeof o == "number" ? `${o}px` : o } : {},
    ...r !== void 0 ? { maxHeight: typeof r == "number" ? `${r}px` : r } : {}
  }, a = [
    "nxp-scroll-area",
    l ? "nxp-scroll-area--x" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(
    "div",
    {
      className: a,
      style: s,
      tabIndex: 0,
      children: e
    }
  );
}
export {
  f as ScrollArea,
  f as default
};
