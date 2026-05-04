import { jsxs as c, jsx as a } from "react/jsx-runtime";
import "react";
function u({ variant: t = "default", icon: s, title: e, description: l, onClose: o, className: d = "" }) {
  const n = s !== void 0 ? s : t === "error" ? "✕" : "✓";
  return /* @__PURE__ */ c("div", { className: `nxp-toast${t !== "default" ? ` nxp-toast--${t}` : ""} ${d}`, role: "alert", "aria-live": "assertive", children: [
    n && /* @__PURE__ */ a("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: n }),
    /* @__PURE__ */ c("div", { className: "nxp-toast__body", children: [
      e && /* @__PURE__ */ a("div", { className: "nxp-toast__title", children: e }),
      l && /* @__PURE__ */ a("div", { className: "nxp-toast__desc", children: l })
    ] }),
    o && /* @__PURE__ */ a("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: o, children: "×" })
  ] });
}
export {
  u as Toast,
  u as default
};
