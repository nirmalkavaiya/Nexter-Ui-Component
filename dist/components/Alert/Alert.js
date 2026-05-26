import { jsxs as e, jsx as r } from "react/jsx-runtime";
import "react";
const l = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ r("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ r("path", { d: "M8 7v4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ r("circle", { cx: "8", cy: "4.5", r: "0.75", fill: "currentColor" })
] }), d = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ r("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ r("path", { d: "M5 8l2.5 2.5L11 5.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
] }), h = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ r("path", { d: "M8 1.5L14.5 13H1.5L8 1.5Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" }),
  /* @__PURE__ */ r("path", { d: "M8 6v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ r("circle", { cx: "8", cy: "11", r: "0.75", fill: "currentColor" })
] }), a = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ r("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ r("path", { d: "M5.5 5.5l5 5M10.5 5.5l-5 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
] }), n = {
  info: /* @__PURE__ */ r(l, {}),
  success: /* @__PURE__ */ r(d, {}),
  warning: /* @__PURE__ */ r(h, {}),
  error: /* @__PURE__ */ r(a, {})
};
function p({ variant: o = "info", icon: t, children: i, className: c = "" }) {
  const s = t !== void 0 ? t : n[o] ?? n.info;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `nxp-alert nxp-alert--${o} ${c}`,
      role: "alert",
      children: [
        /* @__PURE__ */ r("span", { className: "nxp-alert__icon", "aria-hidden": "true", children: s }),
        /* @__PURE__ */ r("div", { className: "nxp-alert__body", children: i })
      ]
    }
  );
}
export {
  p as Alert,
  p as default
};
