import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useState as m, useCallback as D } from "react";
const q = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), z = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) });
function J({
  value: h,
  defaultValue: B = 0,
  onChange: l,
  min: s,
  max: r,
  step: a = 1,
  precision: C,
  // decimal places — inferred from step if omitted
  label: c,
  prefix: _,
  suffix: f,
  hint: x,
  error: i,
  disabled: o = !1,
  readOnly: u = !1,
  className: F = "",
  /* translatable */
  increaseLabel: S = "Increase",
  decreaseLabel: j = "Decrease"
}) {
  var I;
  const N = h !== void 0, [A, K] = m(B), [v, b] = m(""), [L, w] = m(!1), t = N ? h : A, k = C ?? (a % 1 !== 0 ? ((I = String(a).split(".")[1]) == null ? void 0 : I.length) ?? 0 : 0);
  function W(n) {
    return isNaN(n) ? t : (s !== void 0 && (n = Math.max(s, n)), r !== void 0 && (n = Math.min(r, n)), k > 0 ? parseFloat(n.toFixed(k)) : Math.round(n));
  }
  function d(n) {
    const y = W(n);
    N || K(y), l == null || l(y);
  }
  const M = D(() => d(Number(t) + a), [t, a]), g = D(() => d(Number(t) - a), [t, a]);
  function E(n) {
    n.key === "ArrowUp" && (n.preventDefault(), M()), n.key === "ArrowDown" && (n.preventDefault(), g());
  }
  const P = s !== void 0 && Number(t) <= s, R = r !== void 0 && Number(t) >= r, U = [
    "nxp-num",
    i ? "nxp-num--error" : "",
    o ? "nxp-num--disabled" : "",
    F
  ].filter(Boolean).join(" "), V = L ? v : String(t ?? "");
  return /* @__PURE__ */ p("div", { className: U, children: [
    c && /* @__PURE__ */ e("label", { className: "nxp-num__label", children: c }),
    /* @__PURE__ */ p("div", { className: "nxp-num__wrap", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--dec",
          onClick: g,
          disabled: o || u || P,
          "aria-label": j,
          tabIndex: -1,
          children: /* @__PURE__ */ e(q, {})
        }
      ),
      /* @__PURE__ */ p("div", { className: "nxp-num__field", children: [
        _ && /* @__PURE__ */ e("span", { className: "nxp-num__prefix", children: _ }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            className: "nxp-num__input",
            value: V,
            disabled: o,
            readOnly: u,
            "aria-label": c ?? "Number input",
            "aria-invalid": !!i,
            onFocus: () => {
              w(!0), b(String(t ?? ""));
            },
            onChange: (n) => b(n.target.value),
            onBlur: () => {
              w(!1);
              const n = parseFloat(v);
              d(isNaN(n) ? t : n);
            },
            onKeyDown: E
          }
        ),
        f && /* @__PURE__ */ e("span", { className: "nxp-num__suffix", children: f })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--inc",
          onClick: M,
          disabled: o || u || R,
          "aria-label": S,
          tabIndex: -1,
          children: /* @__PURE__ */ e(z, {})
        }
      )
    ] }),
    x && !i && /* @__PURE__ */ e("span", { className: "nxp-num__hint", children: x }),
    i && /* @__PURE__ */ e("span", { className: "nxp-num__error", role: "alert", children: i })
  ] });
}
export {
  J as NumberInput,
  J as default
};
