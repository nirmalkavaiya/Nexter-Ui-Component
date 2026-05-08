import { jsx as l } from "react/jsx-runtime";
import "react";
function o({ children: x, size: a = "md", src: r, alt: t = "", className: n = "" }) {
  return /* @__PURE__ */ l("span", { className: `nxp-avatar${a === "sm" ? " nxp-avatar--sm" : a === "lg" ? " nxp-avatar--lg" : a === "xl" ? " nxp-avatar--xl" : a === "xxl" ? " nxp-avatar--xxl" : ""} ${n}`, "aria-label": t || x, children: r ? /* @__PURE__ */ l("img", { src: r, alt: t }) : x });
}
export {
  o as Avatar,
  o as default
};
