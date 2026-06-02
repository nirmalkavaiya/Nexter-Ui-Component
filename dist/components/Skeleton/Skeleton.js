import { jsx as m } from "react/jsx-runtime";
import { memo as c, useMemo as l } from "react";
import { cn as i } from "../../lib/utils.js";
function p({ variant: e = "line", width: o, style: t = {}, className: n = "" }) {
  const r = l(
    () => i(
      "nxp-skeleton",
      e === "circle" && "nxp-skeleton--circle",
      e === "title" && "nxp-skeleton--title",
      n
    ),
    [e, n]
  ), s = l(
    () => ({ ...o ? { width: o } : {}, ...t }),
    [o, t]
  );
  return /* @__PURE__ */ m(
    "span",
    {
      className: r,
      style: s,
      "aria-hidden": "true",
      role: "presentation"
    }
  );
}
const x = c(p);
export {
  x as Skeleton,
  x as default
};
