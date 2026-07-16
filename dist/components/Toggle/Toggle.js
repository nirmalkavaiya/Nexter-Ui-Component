import { jsxs as d, jsx as l } from "react/jsx-runtime";
import { useState as j, useCallback as h } from "react";
import { cn as H } from "../../lib/utils.js";
function $({
  checked: r,
  onChange: c,
  disabled: e = !1,
  variant: u,
  label: t,
  ariaLabel: y,
  id: p,
  className: L = "",
  isPro: s = !1,
  onProClick: V,
  "aria-label": C,
  "aria-labelledby": g,
  ...N
}) {
  const a = typeof s == "function" ? s : V, m = typeof s == "function" ? !0 : !!s, n = !!a, f = r !== void 0, [_, b] = j(!1), v = f ? r : _, x = y ?? C, k = p && t && !x && !g ? `${p}-label` : void 0, w = g ?? k, A = w ? void 0 : x ?? (typeof t == "string" ? t : void 0), i = h(() => {
    e || n || (f ? c && c(!r) : b((o) => !o));
  }, [e, n, f, r, c]), B = h(
    (o) => {
      if (!e) {
        if (n) {
          o.stopPropagation(), a(o);
          return;
        }
        i();
      }
    },
    [e, n, a, i]
  ), D = h(
    (o) => {
      if (!(o.key !== " " && o.key !== "Enter") && (o.preventDefault(), !e)) {
        if (n) {
          o.stopPropagation(), a(o);
          return;
        }
        i();
      }
    },
    [e, n, a, i]
  ), I = H(
    "nxp-toggle",
    v && "is-checked",
    e && "is-disabled",
    m && "is-pro-locked",
    u && `nxp-toggle--${u}`,
    L
  );
  return /* @__PURE__ */ d(
    "div",
    {
      id: p,
      className: I,
      role: "switch",
      "aria-checked": v,
      "aria-disabled": e || n,
      tabIndex: e ? -1 : 0,
      onClick: B,
      onKeyDown: D,
      "aria-label": A,
      "aria-labelledby": w,
      ...N,
      children: [
        /* @__PURE__ */ d("span", { className: "nxp-toggle__track", children: [
          /* @__PURE__ */ l("span", { className: "nxp-toggle__thumb" }),
          m && /* @__PURE__ */ l("span", { className: "nxp-pro-lock", "aria-hidden": "true", children: /* @__PURE__ */ d("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none", viewBox: "0 0 14 14", children: [
            /* @__PURE__ */ l("path", { fill: "#727272", d: "M10.063 5.25V3.81A2.94 2.94 0 0 0 7.127.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25a1.313 1.313 0 0 0-1.312 1.313v4.068a2.5 2.5 0 0 0 2.494 2.494H8.88a2.5 2.5 0 0 0 2.494-2.494V6.563a1.313 1.313 0 0 0-1.312-1.313m-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H4.814z" }),
            /* @__PURE__ */ l("path", { fill: "#d1d1d6", d: "M7.438 9.065V10.5a.438.438 0 0 1-.875 0V9.065a.875.875 0 1 1 .875 0" })
          ] }) })
        ] }),
        t && /* @__PURE__ */ l("span", { id: k, children: t })
      ]
    }
  );
}
export {
  $ as Toggle,
  $ as default
};
