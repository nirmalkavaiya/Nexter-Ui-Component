import { jsx as c } from "react/jsx-runtime";
import { useState as k } from "react";
import { ToggleItem as T } from "./ToggleItem.js";
function E({
  items: l = [],
  columns: f = 2,
  onChange: o,
  valueMap: s,
  disabled: p = !1,
  className: d = ""
}) {
  const a = s !== void 0, [i, m] = k(
    () => Object.fromEntries(l.map((e) => [e.key, e.value ?? !1]))
  );
  function r() {
    return a ? s : i;
  }
  function g(e, n) {
    const u = { ...r(), [e]: n }, b = l.map((t) => ({
      ...t,
      value: u[t.key] ?? t.value ?? !1
    }));
    a || m(u), o == null || o(e, n, b);
  }
  const v = Math.min(Math.max(Number(f) || 2, 1), 4), x = r(), y = [
    "nxp-tg",
    `nxp-tg--cols-${v}`,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: y, role: "group", children: l.map((e) => /* @__PURE__ */ c(
    T,
    {
      itemKey: e.key,
      label: e.label,
      value: x[e.key] ?? e.value ?? !1,
      tooltip: e.tooltip,
      onToggle: g,
      disabled: p
    },
    e.key
  )) });
}
export {
  E as ToggleGrid,
  E as default
};
