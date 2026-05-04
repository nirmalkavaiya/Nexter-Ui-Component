import { jsxs as M, jsx as i } from "react/jsx-runtime";
import { useState as h, useCallback as m } from "react";
function k({
  value: u,
  onChange: a,
  min: s = 0,
  max: t,
  step: r = 1,
  disabled: p = !1,
  className: b = ""
}) {
  const c = u !== void 0, [d, f] = h(0), n = c ? u : d, o = m(
    (l) => {
      const e = t !== void 0 ? Math.min(t, Math.max(s, l)) : Math.max(s, l);
      c || f(e), a && a(e);
    },
    [c, a, s, t]
  ), v = (l) => {
    const e = parseInt(l.target.value, 10);
    isNaN(e) || o(e);
  }, N = n <= s, _ = t !== void 0 && n >= t;
  return /* @__PURE__ */ M("div", { className: `nxp-stepper ${b}`, "aria-label": "Stepper", children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => o(n - r),
        disabled: p || N,
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ i(
      "input",
      {
        type: "number",
        className: "nxp-stepper__input",
        value: n,
        onChange: v,
        disabled: p,
        min: s,
        max: t,
        step: r,
        "aria-label": "Value"
      }
    ),
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => o(n + r),
        disabled: p || _,
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
export {
  k as Stepper,
  k as default
};
