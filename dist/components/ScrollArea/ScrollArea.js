import { jsx as c } from "react/jsx-runtime";
import "react";
function d({
  height: o,
  maxHeight: e,
  horizontal: r = !1,
  children: l,
  className: n = ""
}) {
  const s = {
    ...o !== void 0 ? { height: typeof o == "number" ? `${o}px` : o } : {},
    ...e !== void 0 ? { maxHeight: typeof e == "number" ? `${e}px` : e } : {}
  }, t = r ? "auto" : "hidden", a = [
    "nxp-scroll-area",
    r ? "nxp-scroll-area--x" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      className: a,
      style: { ...s, overflowX: t, overflowY: "auto" },
      tabIndex: 0,
      children: l
    }
  );
}
export {
  d as ScrollArea,
  d as default
};
