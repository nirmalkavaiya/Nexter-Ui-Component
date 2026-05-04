import { jsxs as c, jsx as a } from "react/jsx-runtime";
import "react";
function m({
  options: s = [],
  value: t,
  onChange: i,
  disabled: n = !1,
  placeholder: l,
  className: r = "",
  ...u
}) {
  return /* @__PURE__ */ c(
    "select",
    {
      className: `nxp-select ${r}`,
      value: t,
      onChange: i,
      disabled: n,
      ...u,
      children: [
        l && /* @__PURE__ */ a("option", { value: "", disabled: !0, children: l }),
        s.map((e) => /* @__PURE__ */ a("option", { value: e.value, children: e.label }, e.value))
      ]
    }
  );
}
export {
  m as Select,
  m as default
};
