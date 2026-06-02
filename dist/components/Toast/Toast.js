import { jsxs as c, jsx as a } from "react/jsx-runtime";
import { memo as r } from "react";
function i({ variant: s = "default", icon: t, title: e, description: o, onClose: l, className: d = "" }) {
  const n = t !== void 0 ? t : s === "error" ? "✕" : "✓";
  return /* @__PURE__ */ c("div", { className: `nxp-toast${s !== "default" ? ` nxp-toast--${s}` : ""} ${d}`, role: "alert", "aria-live": "assertive", children: [
    n && /* @__PURE__ */ a("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: n }),
    /* @__PURE__ */ c("div", { className: "nxp-toast__body", children: [
      e && /* @__PURE__ */ a("div", { className: "nxp-toast__title", children: e }),
      o && /* @__PURE__ */ a("div", { className: "nxp-toast__desc", children: o })
    ] }),
    l && /* @__PURE__ */ a("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: l, children: "×" })
  ] });
}
const x = r(i);
export {
  x as Toast,
  x as default
};
