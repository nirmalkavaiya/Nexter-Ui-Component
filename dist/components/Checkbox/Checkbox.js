import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { useState as f, useId as u, useCallback as m } from "react";
function C({
  checked: t,
  onChange: c,
  disabled: e = !1,
  label: i,
  className: h = ""
}) {
  const r = t !== void 0, [x, k] = f(!1), s = r ? t : x, l = u(), a = m(() => {
    e || (r ? c && c(!t) : k((n) => !n));
  }, [e, r, t, c]), d = [
    "nxp-checkbox",
    s ? "is-checked" : "",
    e ? "is-disabled" : "",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("label", { className: d, htmlFor: l, children: [
    /* @__PURE__ */ o(
      "input",
      {
        id: l,
        type: "checkbox",
        checked: s,
        onChange: a,
        disabled: e,
        className: "nxp-sr-only",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": s,
        "aria-disabled": e,
        tabIndex: e ? -1 : 0,
        onKeyDown: (n) => {
          n.key === " " && (n.preventDefault(), a());
        },
        onClick: (n) => {
          n.preventDefault(), a();
        },
        children: s && /* @__PURE__ */ o("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ o("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ o("span", { children: i })
  ] });
}
export {
  C as Checkbox,
  C as default
};
