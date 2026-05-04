import { jsxs as f, jsx as i } from "react/jsx-runtime";
import { useId as h } from "react";
function x({
  checked: n = !1,
  onChange: t,
  disabled: a = !1,
  name: d,
  value: r,
  label: s,
  className: p = ""
}) {
  const l = h(), c = [
    "nxp-radio",
    n ? "is-checked" : "",
    a ? "is-disabled" : "",
    p
  ].filter(Boolean).join(" "), o = () => {
    a || t && t(r);
  };
  return /* @__PURE__ */ f("label", { className: c, htmlFor: l, children: [
    /* @__PURE__ */ i(
      "input",
      {
        id: l,
        type: "radio",
        name: d,
        value: r,
        checked: n,
        onChange: o,
        disabled: a,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": n,
        "aria-disabled": a,
        tabIndex: a ? -1 : 0,
        onKeyDown: (e) => {
          e.key === " " && (e.preventDefault(), o());
        },
        onClick: (e) => {
          e.preventDefault(), o();
        },
        children: /* @__PURE__ */ i("span", { className: "nxp-radio__inner" })
      }
    ),
    s && /* @__PURE__ */ i("span", { children: s })
  ] });
}
export {
  x as Radio,
  x as default
};
