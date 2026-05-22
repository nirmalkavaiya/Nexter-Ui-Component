import { jsx as c } from "react/jsx-runtime";
import { useState as T } from "react";
import { ToggleItem as j } from "./ToggleItem.js";
function E({
  items: l = [],
  columns: i = 2,
  onChange: t,
  valueMap: s,
  disabled: p = !1,
  tooltipPosition: f = "top",
  // 'top'|'bottom'|'left'|'right' — group default; item.tooltipPosition overrides
  className: d = ""
}) {
  const a = s !== void 0, [g, m] = T(
    () => Object.fromEntries(l.map((o) => [o.key, o.value ?? !1]))
  );
  function n() {
    return a ? s : g;
  }
  function v(o, r) {
    const u = { ...n(), [o]: r }, k = l.map((e) => ({
      ...e,
      value: u[e.key] ?? e.value ?? !1
    }));
    a || m(u), t == null || t(o, r, k);
  }
  const x = Math.min(Math.max(Number(i) || 2, 1), 4), y = n(), b = [
    "nxp-tg",
    `nxp-tg--cols-${x}`,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: b, role: "group", children: l.map((o) => /* @__PURE__ */ c(
    j,
    {
      itemKey: o.key,
      label: o.label,
      value: y[o.key] ?? o.value ?? !1,
      tooltip: o.tooltip,
      tooltipPosition: o.tooltipPosition ?? f,
      onToggle: v,
      disabled: p
    },
    o.key
  )) });
}
export {
  E as ToggleGrid,
  E as default
};
