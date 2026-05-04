import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { useState as h, useCallback as f } from "react";
function j({
  checked: s,
  onChange: t,
  disabled: e = !1,
  variant: r,
  label: i,
  className: p = ""
}) {
  const o = s !== void 0, [g, m] = h(!1), c = o ? s : g, l = f(() => {
    e || (o ? t && t(!s) : m((n) => !n));
  }, [e, o, s, t]), u = f(
    (n) => {
      n.key === " " && (n.preventDefault(), l());
    },
    [l]
  ), x = [
    "nxp-toggle",
    c ? "is-checked" : "",
    e ? "is-disabled" : "",
    r ? `nxp-toggle--${r}` : "",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "div",
    {
      className: x,
      role: "switch",
      "aria-checked": c,
      "aria-disabled": e,
      tabIndex: e ? -1 : 0,
      onClick: l,
      onKeyDown: u,
      children: [
        /* @__PURE__ */ a("span", { className: "nxp-toggle__track", children: /* @__PURE__ */ a("span", { className: "nxp-toggle__thumb" }) }),
        i && /* @__PURE__ */ a("span", { children: i })
      ]
    }
  );
}
export {
  j as Toggle,
  j as default
};
