import { jsx as t, jsxs as r } from "react/jsx-runtime";
import d from "react";
function o({ icon: n, title: s, description: m, desc: a, action: e, className: i = "" }) {
  const p = m || a;
  let l = null;
  return e && (d.isValidElement(e) ? l = e : e && typeof e == "object" && e.label && (l = /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: "nxp-btn nxp-btn--primary nxp-btn--sm",
      onClick: e.onClick,
      children: e.label
    }
  ))), /* @__PURE__ */ r("div", { className: `nxp-empty ${i}`, role: "status", children: [
    n && /* @__PURE__ */ t("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: n }),
    s && /* @__PURE__ */ t("div", { className: "nxp-empty__title", children: s }),
    p && /* @__PURE__ */ t("p", { className: "nxp-empty__desc", children: p }),
    l && /* @__PURE__ */ t("div", { className: "nxp-empty__action", children: l })
  ] });
}
export {
  o as EmptyState,
  o as default
};
