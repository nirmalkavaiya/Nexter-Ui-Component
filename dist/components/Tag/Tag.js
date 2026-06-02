import { jsx as s } from "react/jsx-runtime";
import { memo as a, useMemo as r } from "react";
import { cn as f } from "../../lib/utils.js";
function n({ variant: o = "default", children: e, className: t = "" }) {
  const m = r(
    () => f("nxp-tag", o !== "default" && `nxp-tag--${o}`, t),
    [o, t]
  );
  return /* @__PURE__ */ s("span", { className: m, children: e });
}
const c = a(n);
export {
  c as Tag,
  c as default
};
