import { jsx as l } from "react/jsx-runtime";
import "react";
function x({
  type: n = "text",
  placeholder: i,
  value: a,
  onChange: e,
  disabled: o = !1,
  invalid: t = !1,
  className: s = "",
  ...p
}) {
  const r = ["nxp-input", t ? "nxp-input--invalid" : "", s].filter(Boolean).join(" ");
  return /* @__PURE__ */ l(
    "input",
    {
      type: n,
      className: r,
      placeholder: i,
      value: a,
      onChange: e,
      disabled: o,
      "aria-invalid": t ? "true" : void 0,
      ...p
    }
  );
}
export {
  x as Input,
  x as default
};
