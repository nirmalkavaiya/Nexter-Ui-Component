import { jsxs as r, jsx as e } from "react/jsx-runtime";
import "react";
import { Tooltip as p } from "../Tooltip/Tooltip.js";
const f = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] });
function u({
  label: i,
  tooltip: n,
  hint: a,
  error: l,
  required: c = !1,
  htmlFor: d,
  children: s,
  extraContent: o,
  className: t = ""
}) {
  const h = !!(i || n || o);
  return /* @__PURE__ */ r("div", { className: `nxp-field${l ? " nxp-field--error" : ""} ${t}`, children: [
    h && /* @__PURE__ */ r("div", { className: "nxp-field__label-row", children: [
      i && /* @__PURE__ */ r("label", { className: "nxp-field__label", htmlFor: d, children: [
        i,
        c && /* @__PURE__ */ e("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      n && /* @__PURE__ */ e(p, { content: n, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ e(f, {})
        }
      ) }),
      o && o
    ] }),
    s,
    a && !l && /* @__PURE__ */ e("span", { className: "nxp-field__hint", children: a }),
    l && /* @__PURE__ */ e("span", { className: "nxp-field__error", role: "alert", children: l })
  ] });
}
export {
  u as Field,
  u as default
};
