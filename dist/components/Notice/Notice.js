import { jsxs as N, jsx as i } from "react/jsx-runtime";
import { useState as c, useRef as b, useEffect as h, useCallback as g } from "react";
const r = {
  default: "ℹ",
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
function y({
  variant: e = "default",
  icon: n,
  children: a,
  onDismiss: s,
  dismissible: l = !0,
  className: o = ""
}) {
  const [u, d] = c(!1), [f, m] = c(!1), t = b(null);
  h(() => () => {
    t.current && clearTimeout(t.current);
  }, []);
  const p = g(() => {
    d(!0), t.current = setTimeout(() => {
      m(!0), s && s();
    }, 220);
  }, [s]);
  if (f) return null;
  const x = n !== void 0 ? n : r[e] || r.default, _ = e !== "default" ? ` nxp-notice--${e}` : "";
  return /* @__PURE__ */ N(
    "div",
    {
      className: `nxp-notice${_}${u ? " is-dismissing" : ""} ${o}`,
      role: "status",
      children: [
        /* @__PURE__ */ i("span", { className: "nxp-notice__icon", "aria-hidden": "true", children: x }),
        /* @__PURE__ */ i("div", { className: "nxp-notice__body", children: a }),
        l && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "nxp-notice__close",
            "aria-label": "Dismiss",
            onClick: p,
            children: "×"
          }
        )
      ]
    }
  );
}
export {
  y as Notice,
  y as default
};
