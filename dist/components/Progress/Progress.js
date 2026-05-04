import { jsx as s } from "react/jsx-runtime";
import "react";
function n({ value: e = 0, variant: a = "default", className: o = "" }) {
  const r = Math.min(100, Math.max(0, e)), t = a !== "default" ? ` nxp-progress--${a}` : "";
  return /* @__PURE__ */ s(
    "div",
    {
      className: `nxp-progress${t} ${o}`,
      role: "progressbar",
      "aria-valuenow": r,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ s("div", { className: "nxp-progress__bar", style: { width: `${r}%` } })
    }
  );
}
export {
  n as Progress,
  n as default
};
