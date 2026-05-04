import { jsx as e } from "react/jsx-runtime";
import "react";
function r({ variant: a = "default", children: t, className: s = "" }) {
  const n = a !== "default" ? ` nxp-tag--${a}` : "";
  return /* @__PURE__ */ e("span", { className: `nxp-tag${n} ${s}`, children: t });
}
export {
  r as Tag,
  r as default
};
