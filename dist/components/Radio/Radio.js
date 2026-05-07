import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { useId as m } from "react";
function u({
  checked: r = !1,
  onChange: o,
  disabled: a = !1,
  name: d,
  value: s,
  label: t,
  className: c = ""
}) {
  const l = m(), p = [
    "nxp-radio",
    r ? "is-checked" : "",
    a ? "is-disabled" : "",
    c
  ].filter(Boolean).join(" "), i = () => {
    a || o && o(s);
  };
  return /* @__PURE__ */ f("label", { className: p, htmlFor: l, children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: l,
        type: "radio",
        name: d,
        value: s,
        checked: r,
        onChange: i,
        disabled: a,
        className: "nxp-sr-only",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": r,
        "aria-disabled": a,
        tabIndex: a ? -1 : 0,
        onKeyDown: (n) => {
          n.key === " " && (n.preventDefault(), i());
        },
        onClick: (n) => {
          n.preventDefault(), i();
        },
        children: /* @__PURE__ */ e("span", { className: "nxp-radio__inner" })
      }
    ),
    t && /* @__PURE__ */ e("span", { children: t })
  ] });
}
export {
  u as Radio,
  u as default
};
