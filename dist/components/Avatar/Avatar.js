import { jsx as m } from "react/jsx-runtime";
import "react";
function i({ children: a, size: s = "md", src: r, alt: t = "", className: n = "" }) {
  return /* @__PURE__ */ m("span", { className: `nxp-avatar${s === "sm" ? " nxp-avatar--sm" : s === "lg" ? " nxp-avatar--lg" : ""} ${n}`, "aria-label": t || a, children: r ? /* @__PURE__ */ m("img", { src: r, alt: t }) : a });
}
export {
  i as Avatar,
  i as default
};
