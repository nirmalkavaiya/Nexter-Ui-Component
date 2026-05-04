import { jsxs as p, jsx as e } from "react/jsx-runtime";
import "react";
function l({ icon: s, title: t, description: a, action: r, className: m = "" }) {
  return /* @__PURE__ */ p("div", { className: `nxp-empty ${m}`, role: "status", children: [
    s && /* @__PURE__ */ e("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: s }),
    t && /* @__PURE__ */ e("div", { className: "nxp-empty__title", children: t }),
    a && /* @__PURE__ */ e("p", { className: "nxp-empty__desc", children: a }),
    r && /* @__PURE__ */ e("div", { style: { marginTop: 8 }, children: r })
  ] });
}
export {
  l as EmptyState,
  l as default
};
