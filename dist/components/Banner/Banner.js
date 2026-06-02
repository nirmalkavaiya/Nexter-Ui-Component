import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { memo as x } from "react";
const _ = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function b({ variant: e = "default", size: a = "md", icon: r, title: s, text: d, actions: o, className: c = "" }) {
  const i = r !== void 0 ? r : _[e], t = a !== "md" ? ` nxp-banner--${a}` : "", m = e !== "default" ? ` nxp-banner--${e}` : "", p = `nxp-banner${t}${m}${c ? ` ${c}` : ""}`.trim();
  return /* @__PURE__ */ l("div", { className: p, role: "region", children: [
    i && /* @__PURE__ */ n("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: i }),
    /* @__PURE__ */ l("div", { className: "nxp-banner__body", children: [
      s && /* @__PURE__ */ n("div", { className: "nxp-banner__title", children: s }),
      d && /* @__PURE__ */ n("p", { className: "nxp-banner__text", children: d }),
      o && /* @__PURE__ */ n("div", { className: "nxp-banner__actions", children: o })
    ] })
  ] });
}
const h = x(b);
export {
  h as Banner,
  h as default
};
