import { jsx as e } from "react/jsx-runtime";
import { memo as a, useMemo as m } from "react";
import { cn as r } from "../../lib/utils.js";
function f({ variant: t = "default", children: o, className: s = "" }) {
  const u = m(
    () => r("nxp-status", t !== "default" && `nxp-status--${t}`, s),
    [t, s]
  );
  return /* @__PURE__ */ e("span", { className: u, "aria-label": `Status: ${t}`, children: o });
}
const c = a(f);
export {
  c as Status,
  c as default
};
