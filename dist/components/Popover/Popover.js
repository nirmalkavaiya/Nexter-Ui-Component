import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { memo as l } from "react";
function m({ title: e, description: p, footer: r, className: s = "" }) {
  return /* @__PURE__ */ a("div", { className: `nxp-popover ${s}`, role: "tooltip", children: [
    e && /* @__PURE__ */ o("div", { className: "nxp-popover__title", children: e }),
    p && /* @__PURE__ */ o("p", { className: "nxp-popover__desc", children: p }),
    r && /* @__PURE__ */ o("div", { className: "nxp-popover__footer", children: r })
  ] });
}
const i = l(m);
export {
  i as Popover,
  i as default
};
