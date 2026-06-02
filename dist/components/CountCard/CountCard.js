import { jsxs as x, jsx as e } from "react/jsx-runtime";
import { memo as a } from "react";
function r({ value: p, label: t, badge: n, className: s = "" }) {
  return /* @__PURE__ */ x("div", { className: `nxp-flex nxp-flex-1 nxp-justify-between nxp-items-start nxp-border-muted nxp-rounded-md nxp-p-16 nxp-bg-default ${s}`.trim(), children: [
    /* @__PURE__ */ x("div", { className: "nxp-flex nxp-flex-col nxp-gap-4", children: [
      /* @__PURE__ */ e("span", { className: "nxp-subheading", children: p }),
      /* @__PURE__ */ e("span", { className: "nxp-text-muted nxp-text-sm nxp-title-label nxp-weight-regular", children: t })
    ] }),
    n != null && /* @__PURE__ */ e("span", { className: "nxp-bg-default nxp-border nxp-flex nxp-font-family nxp-items-center nxp-px-12 nxp-py-4 nxp-rounded-xs nxp-text-muted nxp-text-sm nxp-weight-medium nxp-whitespace-nowrap", children: n })
  ] });
}
const m = a(r);
export {
  m as CountCard,
  m as default
};
