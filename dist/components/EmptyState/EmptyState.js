import { jsxs as d, jsx as e } from "react/jsx-runtime";
import "react";
function i({ icon: s, title: a, description: t, action: m, className: r = "" }) {
  return /* @__PURE__ */ d("div", { className: `nxp-empty ${r}`, role: "status", children: [
    s && /* @__PURE__ */ e("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: s }),
    a && /* @__PURE__ */ e("div", { className: "nxp-empty__title", children: a }),
    t && /* @__PURE__ */ e("p", { className: "nxp-empty__desc", children: t }),
    m && /* @__PURE__ */ e("div", { className: "mt-2", children: m })
  ] });
}
export {
  i as EmptyState,
  i as default
};
