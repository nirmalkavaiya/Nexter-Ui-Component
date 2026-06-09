import { jsxs as l, jsx as n } from "react/jsx-runtime";
import "react";
import { cn as r } from "../../lib/utils.js";
import { Button as I } from "../Button/Button.js";
function z({
  topline: i,
  icon: c,
  title: a,
  description: e,
  cta: s,
  href: x,
  onClick: d,
  step: o,
  className: m = "",
  style: _,
  variant: p = "link",
  size: t,
  target: b,
  rel: f,
  download: h,
  as: v,
  disabled: N = !1,
  loading: u = !1,
  type: j = "button",
  showArrow: B = !1,
  ctaClassName: k = ""
}) {
  return /* @__PURE__ */ l("div", { className: r("nxp-iconbox", m), style: _, children: [
    i && /* @__PURE__ */ n("div", { className: "nxp-iconbox__topline", children: i }),
    o !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-iconbox__step", children: o }),
    c && o === void 0 && /* @__PURE__ */ n("div", { className: "nxp-iconbox__icon", "aria-hidden": "true", children: c }),
    a && /* @__PURE__ */ n("div", { className: "nxp-iconbox__title", children: a }),
    e && /* @__PURE__ */ n("p", { className: "nxp-iconbox__desc", children: e }),
    s && /* @__PURE__ */ l(
      I,
      {
        className: r("nxp-iconbox__cta", k),
        variant: p,
        size: t,
        href: x,
        target: b,
        rel: f,
        download: h,
        as: v,
        type: j,
        onClick: d,
        disabled: N,
        loading: u,
        children: [
          s,
          B ? " →" : ""
        ]
      }
    )
  ] });
}
export {
  z as IconBox,
  z as default
};
