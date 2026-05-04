import { jsx as r } from "react/jsx-runtime";
import "react";
function c({ variant: e = "line", width: t, style: n = {}, className: l = "" }) {
  const o = e === "circle" ? " nxp-skeleton--circle" : e === "title" ? " nxp-skeleton--title" : "", s = { ...t ? { width: t } : {}, ...n };
  return /* @__PURE__ */ r(
    "span",
    {
      className: `nxp-skeleton${o} ${l}`,
      style: s,
      "aria-hidden": "true",
      role: "presentation"
    }
  );
}
export {
  c as Skeleton,
  c as default
};
