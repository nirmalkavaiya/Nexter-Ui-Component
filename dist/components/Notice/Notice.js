import { jsxs as _, jsx as t } from "react/jsx-runtime";
import { useState as n, useCallback as N } from "react";
const a = {
  default: "ℹ",
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
function g({
  variant: s = "default",
  icon: i,
  children: o,
  onDismiss: e,
  dismissible: c = !0,
  className: l = ""
}) {
  const [r, d] = n(!1), [u, m] = n(!1), f = N(() => {
    d(!0), setTimeout(() => {
      m(!0), e && e();
    }, 220);
  }, [e]);
  if (u) return null;
  const p = i !== void 0 ? i : a[s] || a.default, x = s !== "default" ? ` nxp-notice--${s}` : "";
  return /* @__PURE__ */ _(
    "div",
    {
      className: `nxp-notice${x}${r ? " is-dismissing" : ""} ${l}`,
      role: "status",
      children: [
        /* @__PURE__ */ t("span", { className: "nxp-notice__icon", "aria-hidden": "true", children: p }),
        /* @__PURE__ */ t("div", { className: "nxp-notice__body", children: o }),
        c && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: "nxp-notice__close",
            "aria-label": "Dismiss",
            onClick: f,
            children: "×"
          }
        )
      ]
    }
  );
}
export {
  g as Notice,
  g as default
};
