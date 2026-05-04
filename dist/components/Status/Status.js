import { jsx as e } from "react/jsx-runtime";
import "react";
function o({ variant: t = "default", children: s, className: a = "" }) {
  const u = t !== "default" ? ` nxp-status--${t}` : "";
  return /* @__PURE__ */ e("span", { className: `nxp-status${u} ${a}`, "aria-label": `Status: ${t}`, children: s });
}
export {
  o as Status,
  o as default
};
