import { jsxs as p, jsx as n } from "react/jsx-runtime";
import { useState as u, useId as f, useCallback as b } from "react";
function y({
  checked: o,
  onChange: i,
  disabled: e = !1,
  label: a,
  className: h = ""
}) {
  const c = o !== void 0, [x, d] = u(!1), s = c ? o : x, l = f(), r = b(() => {
    e || (c ? i && i(!o) : d((t) => !t));
  }, [e, c, o, i]), k = [
    "nxp-checkbox",
    s ? "is-checked" : "",
    e ? "is-disabled" : "",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("label", { className: k, htmlFor: l, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: l,
        type: "checkbox",
        checked: s,
        onChange: r,
        disabled: e,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": s,
        "aria-disabled": e,
        tabIndex: e ? -1 : 0,
        onKeyDown: (t) => {
          t.key === " " && (t.preventDefault(), r());
        },
        onClick: (t) => {
          t.preventDefault(), r();
        },
        children: s && /* @__PURE__ */ n("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ n("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    a && /* @__PURE__ */ n("span", { children: a })
  ] });
}
export {
  y as Checkbox,
  y as default
};
