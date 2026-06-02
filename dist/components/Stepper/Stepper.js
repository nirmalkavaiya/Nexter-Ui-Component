import { jsxs as N, jsx as u } from "react/jsx-runtime";
import { useState as k, useCallback as p, useMemo as y } from "react";
import { cn as S } from "../../lib/utils.js";
function V({
  value: d,
  onChange: r,
  min: s = 0,
  max: e,
  step: l = 1,
  disabled: o = !1,
  className: b = ""
}) {
  const i = d !== void 0, [f, m] = k(0), t = i ? d : f, n = p(
    (c) => {
      const a = e !== void 0 ? Math.min(e, Math.max(s, c)) : Math.max(s, c);
      i || m(a), r && r(a);
    },
    [i, r, s, e]
  ), h = p(
    (c) => {
      const a = parseInt(c.target.value, 10);
      isNaN(a) || n(a);
    },
    [n]
  ), v = p(() => n(t - l), [n, t, l]), M = p(() => n(t + l), [n, t, l]), _ = t <= s, x = e !== void 0 && t >= e, I = y(
    () => S("nxp-stepper", o && "nxp-stepper--disabled", b),
    [o, b]
  );
  return /* @__PURE__ */ N("div", { className: I, "aria-label": "Stepper", children: [
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: v,
        disabled: o || _,
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ u(
      "input",
      {
        type: "number",
        className: "nxp-stepper__input",
        value: t,
        onChange: h,
        disabled: o,
        min: s,
        max: e,
        step: l,
        "aria-label": "Value"
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: M,
        disabled: o || x,
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
export {
  V as Stepper,
  V as default
};
