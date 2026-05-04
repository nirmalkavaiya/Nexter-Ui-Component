import { jsxs as l, jsx as n } from "react/jsx-runtime";
import "react";
function p({ topline: c, icon: o, title: e, description: a, cta: x, href: d, step: i, className: s = "" }) {
  return /* @__PURE__ */ l("div", { className: `nxp-iconbox ${s}`, children: [
    c && /* @__PURE__ */ n("div", { className: "nxp-iconbox__topline", children: c }),
    i !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-iconbox__step", children: i }),
    o && !i && /* @__PURE__ */ n("div", { className: "nxp-iconbox__icon", "aria-hidden": "true", children: o }),
    e && /* @__PURE__ */ n("div", { className: "nxp-iconbox__title", children: e }),
    a && /* @__PURE__ */ n("p", { className: "nxp-iconbox__desc", children: a }),
    x && /* @__PURE__ */ l("a", { className: "nxp-iconbox__cta", href: d || "#", onClick: d ? void 0 : (r) => r.preventDefault(), children: [
      x,
      " →"
    ] })
  ] });
}
export {
  p as IconBox,
  p as default
};
