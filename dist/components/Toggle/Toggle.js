import { jsxs as f, jsx as a } from "react/jsx-runtime";
import { useState as N, useCallback as h } from "react";
import { cn as _ } from "../../lib/utils.js";
function H({
  checked: r,
  onChange: c,
  disabled: t = !1,
  variant: g,
  label: s,
  className: k = "",
  isPro: l = !1,
  onProClick: x,
  ...u
}) {
  const e = typeof l == "function" ? l : x, m = typeof l == "function" ? !0 : !!l, o = !!e, p = r !== void 0, [w, v] = N(!1), d = p ? r : w, i = h(() => {
    t || o || (p ? c && c(!r) : v((n) => !n));
  }, [t, o, p, r, c]), y = h(
    (n) => {
      if (!t) {
        if (o) {
          n.stopPropagation(), e(n);
          return;
        }
        i();
      }
    },
    [t, o, e, i]
  ), V = h(
    (n) => {
      if (!(n.key !== " " && n.key !== "Enter") && (n.preventDefault(), !t)) {
        if (o) {
          n.stopPropagation(), e(n);
          return;
        }
        i();
      }
    },
    [t, o, e, i]
  ), C = _(
    "nxp-toggle",
    d && "is-checked",
    t && "is-disabled",
    m && "is-pro-locked",
    g && `nxp-toggle--${g}`,
    k
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: C,
      role: "switch",
      "aria-checked": d,
      "aria-disabled": t || o,
      tabIndex: t ? -1 : 0,
      onClick: y,
      onKeyDown: V,
      "aria-label": u["aria-label"] ?? (typeof s == "string" ? s : void 0),
      ...u,
      children: [
        /* @__PURE__ */ f("span", { className: "nxp-toggle__track", children: [
          /* @__PURE__ */ a("span", { className: "nxp-toggle__thumb" }),
          m && /* @__PURE__ */ a("span", { className: "nxp-pro-lock", "aria-hidden": "true", children: /* @__PURE__ */ f("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none", viewBox: "0 0 14 14", children: [
            /* @__PURE__ */ a("path", { fill: "#727272", d: "M10.063 5.25V3.81A2.94 2.94 0 0 0 7.127.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25a1.313 1.313 0 0 0-1.312 1.313v4.068a2.5 2.5 0 0 0 2.494 2.494H8.88a2.5 2.5 0 0 0 2.494-2.494V6.563a1.313 1.313 0 0 0-1.312-1.313m-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H4.814z" }),
            /* @__PURE__ */ a("path", { fill: "#d1d1d6", d: "M7.438 9.065V10.5a.438.438 0 0 1-.875 0V9.065a.875.875 0 1 1 .875 0" })
          ] }) })
        ] }),
        s && /* @__PURE__ */ a("span", { children: s })
      ]
    }
  );
}
export {
  H as Toggle,
  H as default
};
