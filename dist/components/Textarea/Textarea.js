import { jsxs as i, jsx as N } from "react/jsx-runtime";
import { useState as B } from "react";
function T({
  value: e,
  defaultValue: c,
  onChange: t,
  placeholder: x,
  rows: f = 4,
  disabled: r = !1,
  invalid: n = !1,
  maxLength: a,
  showCount: d = !1,
  className: p = "",
  ...u
}) {
  const l = e !== void 0, [m, v] = B(c ?? ""), s = l ? e : m;
  function _(o) {
    l || v(o.target.value), t == null || t(o);
  }
  const j = [
    "nxp-textarea",
    n ? "nxp-textarea--invalid" : "",
    r ? "nxp-textarea--disabled" : "",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("div", { className: j, children: [
    /* @__PURE__ */ N(
      "textarea",
      {
        className: "nxp-textarea__control",
        value: s,
        onChange: _,
        placeholder: x,
        rows: f,
        disabled: r,
        maxLength: a,
        "aria-invalid": n || void 0,
        ...u
      }
    ),
    d && a != null && /* @__PURE__ */ i("span", { className: "nxp-textarea__count", children: [
      s.length,
      "/",
      a
    ] })
  ] });
}
export {
  T as Textarea,
  T as default
};
