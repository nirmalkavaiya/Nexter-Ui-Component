import { jsxs as p, jsx as a } from "react/jsx-runtime";
import { useState as C, useCallback as f } from "react";
import { cn as N } from "../../lib/utils.js";
function j({
  checked: r,
  onChange: c,
  disabled: t = !1,
  variant: h,
  label: u,
  className: d = "",
  isPro: s = !1,
  onProClick: k
}) {
  const e = typeof s == "function" ? s : k, g = typeof s == "function" ? !0 : !!s, o = !!e, i = r !== void 0, [x, w] = C(!1), m = i ? r : x, l = f(() => {
    t || o || (i ? c && c(!r) : w((n) => !n));
  }, [t, o, i, r, c]), v = f(
    (n) => {
      if (!t) {
        if (o) {
          n.stopPropagation(), e(n);
          return;
        }
        l();
      }
    },
    [t, o, e, l]
  ), y = f(
    (n) => {
      if (!(n.key !== " " && n.key !== "Enter") && (n.preventDefault(), !t)) {
        if (o) {
          n.stopPropagation(), e(n);
          return;
        }
        l();
      }
    },
    [t, o, e, l]
  ), V = N(
    "nxp-toggle",
    m && "is-checked",
    t && "is-disabled",
    g && "is-pro-locked",
    h && `nxp-toggle--${h}`,
    d
  );
  return /* @__PURE__ */ p(
    "div",
    {
      className: V,
      role: "switch",
      "aria-checked": m,
      "aria-disabled": t || o,
      tabIndex: t ? -1 : 0,
      onClick: v,
      onKeyDown: y,
      children: [
        /* @__PURE__ */ p("span", { className: "nxp-toggle__track", children: [
          /* @__PURE__ */ a("span", { className: "nxp-toggle__thumb" }),
          g && /* @__PURE__ */ a("span", { className: "nxp-pro-lock", "aria-hidden": "true", children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none", viewBox: "0 0 14 14", children: [
            /* @__PURE__ */ a("path", { fill: "#727272", d: "M10.063 5.25V3.81A2.94 2.94 0 0 0 7.127.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25a1.313 1.313 0 0 0-1.312 1.313v4.068a2.5 2.5 0 0 0 2.494 2.494H8.88a2.5 2.5 0 0 0 2.494-2.494V6.563a1.313 1.313 0 0 0-1.312-1.313m-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H4.814z" }),
            /* @__PURE__ */ a("path", { fill: "#d1d1d6", d: "M7.438 9.065V10.5a.438.438 0 0 1-.875 0V9.065a.875.875 0 1 1 .875 0" })
          ] }) })
        ] }),
        u && /* @__PURE__ */ a("span", { children: u })
      ]
    }
  );
}
export {
  j as Toggle,
  j as default
};
