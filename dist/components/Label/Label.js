import { jsxs as i, jsx as o } from "react/jsx-runtime";
import "react";
function c({
  htmlFor: e,
  required: l = !1,
  disabled: a = !1,
  children: s,
  className: n = ""
}) {
  const r = [
    "nxp-label",
    a ? "nxp-label--disabled" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i("label", { htmlFor: e, className: r, children: [
    s,
    l && /* @__PURE__ */ o("span", { className: "nxp-label__required", "aria-hidden": "true", children: " *" })
  ] });
}
export {
  c as Label,
  c as default
};
