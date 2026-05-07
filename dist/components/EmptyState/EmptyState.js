import { jsxs as n, jsx as e } from "react/jsx-runtime";
import "react";
function i({ icon: a, title: s, description: t, action: m, className: p = "" }) {
  return /* @__PURE__ */ n("div", { className: `nxp-empty ${p}`, role: "status", children: [
    a && /* @__PURE__ */ e("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: a }),
    s && /* @__PURE__ */ e("div", { className: "nxp-empty__title", children: s }),
    t && /* @__PURE__ */ e("p", { className: "nxp-empty__desc", children: t }),
    m && /* @__PURE__ */ e("div", { className: "nxp-empty__action", children: m })
  ] });
}
export {
  i as EmptyState,
  i as default
};
