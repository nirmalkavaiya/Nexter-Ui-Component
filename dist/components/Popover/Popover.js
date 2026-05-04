import { jsxs as l, jsx as e } from "react/jsx-runtime";
import "react";
function c({ title: o, description: p, footer: r, className: s = "" }) {
  return /* @__PURE__ */ l("div", { className: `nxp-popover ${s}`, role: "tooltip", children: [
    o && /* @__PURE__ */ e("div", { className: "nxp-popover__title", children: o }),
    p && /* @__PURE__ */ e("p", { className: "nxp-popover__desc", children: p }),
    r && /* @__PURE__ */ e("div", { className: "nxp-popover__footer", children: r })
  ] });
}
export {
  c as Popover,
  c as default
};
