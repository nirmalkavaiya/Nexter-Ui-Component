import { jsxs as s, jsx as e } from "react/jsx-runtime";
import "react";
import { Tooltip as m } from "../Tooltip/Tooltip.js";
import { InfoIcon as _ } from "../../lib/icons.js";
function u({
  label: i,
  tooltip: n,
  hint: d,
  error: l,
  required: r = !1,
  htmlFor: o,
  children: c,
  extraContent: a,
  className: p = ""
}) {
  const f = !!(i || n || a);
  return /* @__PURE__ */ s("div", { className: `nxp-field${l ? " nxp-field--error" : ""} ${p}`, children: [
    f && /* @__PURE__ */ s("div", { className: "nxp-field__label-row", children: [
      i && /* @__PURE__ */ s("label", { className: "nxp-field__label", htmlFor: o, children: [
        i,
        r && /* @__PURE__ */ e("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      n && /* @__PURE__ */ e(m, { content: n, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ e(_, {})
        }
      ) }),
      a && a
    ] }),
    c,
    d && !l && /* @__PURE__ */ e("span", { className: "nxp-field__hint", children: d }),
    l && /* @__PURE__ */ e("span", { className: "nxp-field__error", role: "alert", children: l })
  ] });
}
export {
  u as Field,
  u as default
};
