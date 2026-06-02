import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { memo as t } from "react";
function d({
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
  return /* @__PURE__ */ o("label", { htmlFor: e, className: r, children: [
    s,
    l && /* @__PURE__ */ i("span", { className: "nxp-label__required", "aria-hidden": "true", children: " *" })
  ] });
}
const c = t(d);
export {
  c as Label,
  c as default
};
