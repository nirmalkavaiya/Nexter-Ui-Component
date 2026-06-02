import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { memo as f } from "react";
import { Tooltip as t } from "../Tooltip/Tooltip.js";
import { InfoIcon as _ } from "../../lib/icons.js";
function h({
  label: i,
  tooltip: a,
  hint: d,
  error: l,
  required: s = !1,
  htmlFor: r,
  children: c,
  extraContent: n,
  className: m = ""
}) {
  const p = !!(i || a || n);
  return /* @__PURE__ */ o("div", { className: `nxp-field${l ? " nxp-field--error" : ""} ${m}`, children: [
    p && /* @__PURE__ */ o("div", { className: "nxp-field__label-row", children: [
      i && /* @__PURE__ */ o("label", { className: "nxp-field__label", htmlFor: r, children: [
        i,
        s && /* @__PURE__ */ e("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      a && /* @__PURE__ */ e(t, { content: a, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ e(_, {})
        }
      ) }),
      n && n
    ] }),
    c,
    d && !l && /* @__PURE__ */ e("span", { className: "nxp-field__hint", children: d }),
    l && /* @__PURE__ */ e("span", { className: "nxp-field__error", role: "alert", children: l })
  ] });
}
const w = f(h);
export {
  w as Field,
  w as default
};
