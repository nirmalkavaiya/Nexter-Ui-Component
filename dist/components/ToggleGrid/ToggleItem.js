import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { memo as s } from "react";
import { Toggle as m } from "../Toggle/Toggle.js";
import { Tooltip as d } from "../Tooltip/Tooltip.js";
const h = () => /* @__PURE__ */ o("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), _ = s(function({ itemKey: n, label: r, value: i, tooltip: t, onToggle: c, disabled: l }) {
  return /* @__PURE__ */ o("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ o("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ e("span", { className: "nxp-tg__item-label", children: r }),
      t && /* @__PURE__ */ e(d, { content: t, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${r}`,
          children: /* @__PURE__ */ e(h, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      m,
      {
        checked: i,
        onChange: (a) => c(n, a),
        disabled: l,
        "aria-label": `Enable ${r}`
      }
    )
  ] });
});
export {
  _ as ToggleItem
};
