import { jsxs as l, jsx as n } from "react/jsx-runtime";
import "react";
const p = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function x({ variant: e = "default", icon: a, title: r, text: s, actions: c, className: i = "" }) {
  const d = a !== void 0 ? a : p[e], o = e !== "default" ? ` nxp-banner--${e}` : "";
  return /* @__PURE__ */ l("div", { className: `nxp-banner${o} ${i}`, role: "region", children: [
    d && /* @__PURE__ */ n("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: d }),
    /* @__PURE__ */ l("div", { className: "nxp-banner__body", children: [
      r && /* @__PURE__ */ n("div", { className: "nxp-banner__title", children: r }),
      s && /* @__PURE__ */ n("p", { className: "nxp-banner__text", children: s }),
      c && /* @__PURE__ */ n("div", { className: "nxp-banner__actions", children: c })
    ] })
  ] });
}
export {
  x as Banner,
  x as default
};
