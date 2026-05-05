import { jsxs as f, jsx as n } from "react/jsx-runtime";
import { useId as m } from "react";
function x({
  checked: i = !1,
  onChange: r,
  disabled: a = !1,
  name: d,
  value: s,
  label: t,
  className: c = ""
}) {
  const l = m(), p = [
    "nxp-radio",
    i ? "is-checked" : "",
    a ? "is-disabled" : "",
    c
  ].filter(Boolean).join(" "), o = () => {
    a || r && r(s);
  };
  return /* @__PURE__ */ f("label", { className: p, htmlFor: l, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: l,
        type: "radio",
        name: d,
        value: s,
        checked: i,
        onChange: o,
        disabled: a,
        className: "absolute opacity-0 w-0 h-0",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": i,
        "aria-disabled": a,
        tabIndex: a ? -1 : 0,
        onKeyDown: (e) => {
          e.key === " " && (e.preventDefault(), o());
        },
        onClick: (e) => {
          e.preventDefault(), o();
        },
        children: /* @__PURE__ */ n("span", { className: "nxp-radio__inner" })
      }
    ),
    t && /* @__PURE__ */ n("span", { children: t })
  ] });
}
export {
  x as Radio,
  x as default
};
