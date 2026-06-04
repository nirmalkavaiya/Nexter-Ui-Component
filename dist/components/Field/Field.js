import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { memo as t } from "react";
import { Tooltip as _ } from "../Tooltip/Tooltip.js";
import { InfoIcon as h } from "../../lib/icons.js";
function x({
  label: l,
  tooltip: n,
  tooltipPosition: d = "top",
  hint: s,
  error: i,
  required: r = !1,
  htmlFor: c,
  children: m,
  extraContent: a,
  className: p = ""
}) {
  const f = !!(l || n || a);
  return /* @__PURE__ */ o("div", { className: `nxp-field${i ? " nxp-field--error" : ""} ${p}`, children: [
    f && /* @__PURE__ */ o("div", { className: "nxp-field__label-row", children: [
      l && /* @__PURE__ */ o("label", { className: "nxp-field__label", htmlFor: c, children: [
        l,
        r && /* @__PURE__ */ e("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      n && /* @__PURE__ */ e(_, { content: n, position: d, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ e(h, {})
        }
      ) }),
      a && a
    ] }),
    m,
    s && !i && /* @__PURE__ */ e("span", { className: "nxp-field__hint", children: s }),
    i && /* @__PURE__ */ e("span", { className: "nxp-field__error", role: "alert", children: i })
  ] });
}
const F = t(x);
export {
  F as Field,
  F as default
};
