import { jsxs as l, jsx as n } from "react/jsx-runtime";
import "react";
const o = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×"
};
function d({ variant: r = "info", icon: e, children: s, className: a = "" }) {
  const i = e !== void 0 ? e : o[r] || "i";
  return /* @__PURE__ */ l(
    "div",
    {
      className: `nxp-alert nxp-alert--${r} ${a}`,
      role: "alert",
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-alert__icon", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ n("div", { className: "nxp-alert__body", children: s })
      ]
    }
  );
}
export {
  d as Alert,
  d as default
};
