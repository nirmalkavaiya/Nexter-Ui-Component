import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { memo as d } from "react";
import { Toggle as h } from "../Toggle/Toggle.js";
import { Tooltip as x } from "../Tooltip/Tooltip.js";
const g = () => /* @__PURE__ */ r("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), v = d(function({
  itemKey: n,
  label: o,
  value: i,
  tooltip: t,
  tooltipPosition: l = "top",
  isPro: c = !1,
  proText: a = "PRO",
  onToggle: s,
  disabled: m
}) {
  return /* @__PURE__ */ r("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ r("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ e("span", { className: "nxp-tg__item-label nxp-body", children: o }),
      c && /* @__PURE__ */ e("span", { className: "nxp-absolute nxp-flex-center nxp-tg-item-pro nxp-weight-medium", children: a }),
      t && /* @__PURE__ */ e(x, { content: t, position: l, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${o}`,
          children: /* @__PURE__ */ e(g, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      h,
      {
        checked: i,
        onChange: (p) => s(n, p),
        disabled: m,
        "aria-label": `Enable ${o}`
      }
    )
  ] });
});
export {
  v as ToggleItem
};
