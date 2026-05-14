import { jsxs as o, jsx as n } from "react/jsx-runtime";
import "react";
const x = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function u({ variant: e = "default", size: a = "md", icon: r, title: s, text: d, actions: c, className: l = "" }) {
  const i = r !== void 0 ? r : x[e], t = a !== "md" ? ` nxp-banner--${a}` : "", p = e !== "default" ? ` nxp-banner--${e}` : "", m = `nxp-banner${t}${p}${l ? ` ${l}` : ""}`.trim();
  return /* @__PURE__ */ o("div", { className: m, role: "region", children: [
    i && /* @__PURE__ */ n("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: i }),
    /* @__PURE__ */ o("div", { className: "nxp-banner__body", children: [
      s && /* @__PURE__ */ n("div", { className: "nxp-banner__title", children: s }),
      d && /* @__PURE__ */ n("p", { className: "nxp-banner__text", children: d }),
      c && /* @__PURE__ */ n("div", { className: "nxp-banner__actions", children: c })
    ] })
  ] });
}
export {
  u as Banner,
  u as default
};
