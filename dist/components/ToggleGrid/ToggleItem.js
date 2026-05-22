import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { memo as m } from "react";
import { Toggle as d } from "../Toggle/Toggle.js";
import { Tooltip as p } from "../Tooltip/Tooltip.js";
const h = () => /* @__PURE__ */ r("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), b = m(function({ itemKey: n, label: o, value: i, tooltip: t, tooltipPosition: c = "top", onToggle: l, disabled: a }) {
  return /* @__PURE__ */ r("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ r("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ e("span", { className: "nxp-tg__item-label nxp-body", children: o }),
      t && /* @__PURE__ */ e(p, { content: t, position: c, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${o}`,
          children: /* @__PURE__ */ e(h, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      d,
      {
        checked: i,
        onChange: (s) => l(n, s),
        disabled: a,
        "aria-label": `Enable ${o}`
      }
    )
  ] });
});
export {
  b as ToggleItem
};
