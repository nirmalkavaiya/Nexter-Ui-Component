import { jsxs as r, jsx as a } from "react/jsx-runtime";
import { memo as i } from "react";
function n({ label: t, value: s, meta: d, className: e = "" }) {
  return /* @__PURE__ */ r("div", { className: `nxp-stat ${e}`, children: [
    t && /* @__PURE__ */ a("div", { className: "nxp-stat__label", children: t }),
    s !== void 0 && /* @__PURE__ */ a("div", { className: "nxp-stat__value", children: s }),
    d && /* @__PURE__ */ a("div", { className: "nxp-stat__meta", children: d })
  ] });
}
const o = i(n);
export {
  o as StatCard,
  o as default
};
