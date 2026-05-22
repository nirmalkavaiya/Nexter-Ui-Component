import { jsx as p } from "react/jsx-runtime";
import { useState as b } from "react";
import { ToggleItem as k } from "./ToggleItem.js";
function B({
  items: l = [],
  columns: c = 2,
  onChange: t,
  valueMap: s,
  disabled: i = !1,
  tooltipPosition: f = "top",
  // 'top'|'bottom'|'left'|'right' — group default; item.tooltipPosition overrides
  className: d = ""
}) {
  const a = s !== void 0, [g, v] = b(
    () => Object.fromEntries(l.map((o) => [o.key, o.value ?? !1]))
  );
  function r() {
    return a ? s : g;
  }
  function m(o, n) {
    const u = { ...r(), [o]: n }, P = l.map((e) => ({
      ...e,
      value: u[e.key] ?? e.value ?? !1
    }));
    a || v(u), t == null || t(o, n, P);
  }
  const x = Math.min(Math.max(Number(c) || 2, 1), 4), T = r(), y = [
    "nxp-tg",
    `nxp-tg--cols-${x}`,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { className: y, role: "group", children: l.map((o) => /* @__PURE__ */ p(
    k,
    {
      itemKey: o.key,
      label: o.label,
      value: T[o.key] ?? o.value ?? !1,
      tooltip: o.tooltip,
      tooltipPosition: o.tooltipPosition ?? f,
      isPro: o.isPro ?? !1,
      proText: o.proText ?? "PRO",
      onToggle: m,
      disabled: i
    },
    o.key
  )) });
}
export {
  B as ToggleGrid,
  B as default
};
