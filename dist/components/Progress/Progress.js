import { jsx as o } from "react/jsx-runtime";
import { memo as n, useMemo as a } from "react";
import { cn as i } from "../../lib/utils.js";
function p({ value: t = 0, variant: r = "default", className: e = "" }) {
  const s = Math.min(100, Math.max(0, t)), m = a(
    () => i("nxp-progress", r !== "default" && `nxp-progress--${r}`, e),
    [r, e]
  ), l = a(() => ({ width: `${s}%` }), [s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: m,
      role: "progressbar",
      "aria-valuenow": s,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ o("div", { className: "nxp-progress__bar", style: l })
    }
  );
}
const f = n(p);
export {
  f as Progress,
  f as default
};
