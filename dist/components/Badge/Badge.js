import { jsx as r } from "react/jsx-runtime";
import { memo as s } from "react";
function d({ variant: e = "default", children: a, className: n = "" }) {
  return e === "gradient" ? /* @__PURE__ */ r("span", { className: `nxp-badge nxp-badge--gradient ${n}`, children: a }) : ["primary", "success", "warning", "error"].includes(e) ? /* @__PURE__ */ r("span", { className: `nxp-badge nxp-badge--${e} ${n}`, children: a }) : /* @__PURE__ */ r("span", { className: `nxp-badge ${n}`, children: a });
}
const o = s(d);
export {
  o as Badge,
  o as default
};
