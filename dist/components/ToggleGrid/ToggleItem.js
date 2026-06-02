import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { memo as x } from "react";
import { Toggle as d } from "../Toggle/Toggle.js";
import { Tooltip as g } from "../Tooltip/Tooltip.js";
import { InfoIcon as f } from "../../lib/icons.js";
const T = x(function({
  itemKey: i,
  label: o,
  value: m,
  tooltip: n,
  tooltipPosition: a = "top",
  isPro: r = !1,
  proText: l = "PRO",
  onToggle: p,
  disabled: s
}) {
  return /* @__PURE__ */ t("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ t("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ e("span", { className: "nxp-tg__item-label nxp-body", children: o }),
      r && /* @__PURE__ */ e("span", { className: "nxp-absolute nxp-flex-center nxp-tg-item-pro nxp-weight-medium", children: l }),
      n && /* @__PURE__ */ e(g, { content: n, position: a, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${o}`,
          children: /* @__PURE__ */ e(f, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      d,
      {
        checked: m,
        onChange: (c) => p(i, c),
        disabled: s,
        "aria-label": `Enable ${o}`
      }
    )
  ] });
});
export {
  T as ToggleItem
};
