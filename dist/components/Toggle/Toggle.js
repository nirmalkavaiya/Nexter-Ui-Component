import { jsxs as r, jsx as l } from "react/jsx-runtime";
import { useState as u, useCallback as d } from "react";
function V({
  checked: n,
  onChange: s,
  disabled: e = !1,
  variant: c,
  label: p,
  className: f = "",
  isPro: t
}) {
  const o = n !== void 0, [g, m] = u(!1), h = o ? n : g, i = d(() => {
    e || (o ? s && s(!n) : m((a) => !a));
  }, [e, o, n, s]), x = d(
    (a) => {
      a.key === " " && (a.preventDefault(), i());
    },
    [i]
  ), w = [
    "nxp-toggle",
    h ? "is-checked" : "",
    e ? "is-disabled" : "",
    c ? `nxp-toggle--${c}` : "",
    f
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "div",
    {
      className: w,
      role: "switch",
      "aria-checked": h,
      "aria-disabled": e,
      tabIndex: e ? -1 : 0,
      onClick: t || i,
      onKeyDown: x,
      children: [
        /* @__PURE__ */ r("span", { className: "nxp-toggle__track", children: [
          /* @__PURE__ */ l("span", { className: "nxp-toggle__thumb" }),
          t && /* @__PURE__ */ l("span", { className: "nxp-pro-lock", children: /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none", viewBox: "0 0 14 14", children: [
            /* @__PURE__ */ l("path", { fill: "#727272", d: "M10.063 5.25V3.81A2.94 2.94 0 0 0 7.127.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25a1.313 1.313 0 0 0-1.312 1.313v4.068a2.5 2.5 0 0 0 2.494 2.494H8.88a2.5 2.5 0 0 0 2.494-2.494V6.563a1.313 1.313 0 0 0-1.312-1.313m-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H4.814z" }),
            /* @__PURE__ */ l("path", { fill: "#d1d1d6", d: "M7.438 9.065V10.5a.438.438 0 0 1-.875 0V9.065a.875.875 0 1 1 .875 0" })
          ] }) })
        ] }),
        p && /* @__PURE__ */ l("span", { children: p })
      ]
    }
  );
}
export {
  V as Toggle,
  V as default
};
