import { jsxs as e, jsx as a } from "react/jsx-runtime";
import "react";
function c({ label: s, value: t, meta: i, className: d = "" }) {
  return /* @__PURE__ */ e("div", { className: `nxp-stat ${d}`, children: [
    s && /* @__PURE__ */ a("div", { className: "nxp-stat__label", children: s }),
    t !== void 0 && /* @__PURE__ */ a("div", { className: "nxp-stat__value", children: t }),
    i && /* @__PURE__ */ a("div", { className: "nxp-stat__meta", children: i })
  ] });
}
export {
  c as StatCard,
  c as default
};
