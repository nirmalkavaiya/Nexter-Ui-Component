import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { memo as x } from "react";
import { Toggle as g } from "../Toggle/Toggle.js";
import { Tooltip as d } from "../Tooltip/Tooltip.js";
import { InfoIcon as f } from "../../lib/icons.js";
const T = x(function({
  itemKey: i,
  label: n,
  value: m,
  tooltip: o,
  tooltipPosition: r = "top",
  isPro: a = !1,
  proText: l = "PRO",
  onToggle: p,
  disabled: s
}) {
  return /* @__PURE__ */ t("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ t("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ e("span", { className: "nxp-tg__item-label nxp-body", children: n }),
      a && /* @__PURE__ */ e("span", { className: "nxp-absolute nxp-flex-center nxp-tg-item-pro nxp-weight-medium", children: l }),
      o && /* @__PURE__ */ e(d, { content: o, position: r, children: /* @__PURE__ */ e(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${n}`,
          children: /* @__PURE__ */ e(f, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      g,
      {
        checked: m,
        onChange: (c) => p(i, c),
        disabled: s,
        "aria-label": `Enable ${n}`
      }
    )
  ] });
});
export {
  T as ToggleItem
};
