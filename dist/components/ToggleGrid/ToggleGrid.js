import { jsx as g } from "react/jsx-runtime";
import { useState as y, useMemo as p, useCallback as P } from "react";
import { cn as I } from "../../lib/utils.js";
import { ToggleItem as j } from "./ToggleItem.js";
function M({
  items: l = [],
  columns: c = 2,
  onChange: t,
  valueMap: s,
  disabled: m = !1,
  tooltipPosition: x = "top",
  // 'top'|'bottom'|'left'|'right' — group default; item.tooltipPosition overrides
  className: n = ""
}) {
  const e = s !== void 0, [f, v] = y(
    () => Object.fromEntries(l.map((o) => [o.key, o.value ?? !1]))
  ), r = p(
    () => e ? s : f,
    [e, s, f]
  ), T = P(
    (o, d) => {
      const i = { ...r, [o]: d }, k = l.map((a) => ({
        ...a,
        value: i[a.key] ?? a.value ?? !1
      }));
      e || v(i), t == null || t(o, d, k);
    },
    [r, l, e, t]
  ), u = p(() => Math.min(Math.max(Number(c) || 2, 1), 4), [c]), b = p(
    () => I("nxp-tg", `nxp-tg--cols-${u}`, n),
    [u, n]
  );
  return /* @__PURE__ */ g("div", { className: b, role: "group", children: l.map((o) => /* @__PURE__ */ g(
    j,
    {
      itemKey: o.key,
      label: o.label,
      value: r[o.key] ?? o.value ?? !1,
      tooltip: o.tooltip,
      tooltipPosition: o.tooltipPosition ?? x,
      isPro: o.isPro ?? !1,
      proText: o.proText ?? "PRO",
      onToggle: T,
      disabled: m
    },
    o.key
  )) });
}
export {
  M as ToggleGrid,
  M as default
};
