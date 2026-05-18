import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { useState as h, useCallback as D } from "react";
const q = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), z = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) });
function J({
  value: _,
  defaultValue: B = 0,
  onChange: c,
  min: a,
  max: i,
  step: s = 1,
  precision: C,
  // decimal places — inferred from step if omitted
  label: u,
  prefix: f,
  suffix: x,
  hint: N,
  error: r,
  disabled: o = !1,
  readOnly: d = !1,
  className: F = "",
  /* translatable */
  increaseLabel: S = "Increase",
  decreaseLabel: j = "Decrease"
}) {
  var I;
  const v = _ !== void 0, [A, K] = h(B), [b, w] = h(""), [L, k] = h(!1), t = v ? _ : A, l = C ?? (s % 1 !== 0 ? ((I = String(s).split(".")[1]) == null ? void 0 : I.length) ?? 0 : 0);
  function W(n) {
    return isNaN(n) ? t : (a !== void 0 && (n = Math.max(a, n)), i !== void 0 && (n = Math.min(i, n)), l > 0 ? parseFloat(n.toFixed(l)) : Math.round(n));
  }
  function p(n) {
    const y = W(n);
    v || K(y), c == null || c(y);
  }
  const M = D(() => p(Number(t) + s), [t, s, a, i, l]), g = D(() => p(Number(t) - s), [t, s, a, i, l]);
  function E(n) {
    n.key === "ArrowUp" && (n.preventDefault(), M()), n.key === "ArrowDown" && (n.preventDefault(), g());
  }
  const P = a !== void 0 && Number(t) <= a, R = i !== void 0 && Number(t) >= i, U = [
    "nxp-num",
    r ? "nxp-num--error" : "",
    o ? "nxp-num--disabled" : "",
    F
  ].filter(Boolean).join(" "), V = L ? b : String(t ?? "");
  return /* @__PURE__ */ m("div", { className: U, children: [
    u && /* @__PURE__ */ e("label", { className: "nxp-num__label", children: u }),
    /* @__PURE__ */ m("div", { className: "nxp-num__wrap", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--dec",
          onClick: g,
          disabled: o || d || P,
          "aria-label": j,
          tabIndex: -1,
          children: /* @__PURE__ */ e(q, {})
        }
      ),
      /* @__PURE__ */ m("div", { className: "nxp-num__field", children: [
        f && /* @__PURE__ */ e("span", { className: "nxp-num__prefix", children: f }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            className: "nxp-num__input",
            value: V,
            disabled: o,
            readOnly: d,
            "aria-label": u ?? "Number input",
            "aria-invalid": !!r,
            onFocus: () => {
              k(!0), w(String(t ?? ""));
            },
            onChange: (n) => w(n.target.value),
            onBlur: () => {
              k(!1);
              const n = parseFloat(b);
              p(isNaN(n) ? t : n);
            },
            onKeyDown: E
          }
        ),
        x && /* @__PURE__ */ e("span", { className: "nxp-num__suffix", children: x })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--inc",
          onClick: M,
          disabled: o || d || R,
          "aria-label": S,
          tabIndex: -1,
          children: /* @__PURE__ */ e(z, {})
        }
      )
    ] }),
    N && !r && /* @__PURE__ */ e("span", { className: "nxp-num__hint", children: N }),
    r && /* @__PURE__ */ e("span", { className: "nxp-num__error", role: "alert", children: r })
  ] });
}
export {
  J as NumberInput,
  J as default
};
