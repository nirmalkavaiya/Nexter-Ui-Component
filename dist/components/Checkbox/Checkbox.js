import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { useState as u, useId as f, useCallback as m } from "react";
function C({
  checked: t,
  onChange: c,
  disabled: e = !1,
  label: r,
  className: h = ""
}) {
  const a = t !== void 0, [x, k] = u(!1), s = a ? t : x, l = f(), i = m(() => {
    e || (a ? c && c(!t) : k((n) => !n));
  }, [e, a, t, c]), d = [
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
        onChange: i,
        disabled: e,
        className: "absolute opacity-0 w-0 h-0",
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
          n.key === " " && (n.preventDefault(), i());
        },
        onClick: (n) => {
          n.preventDefault(), i();
        },
        children: s && /* @__PURE__ */ o("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ o("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    r && /* @__PURE__ */ o("span", { children: r })
  ] });
}
export {
  C as Checkbox,
  C as default
};
