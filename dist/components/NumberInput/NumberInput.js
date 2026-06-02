import { jsxs as N, jsx as e } from "react/jsx-runtime";
import { useState as v, useMemo as C, useCallback as a } from "react";
import { cn as H } from "../../lib/utils.js";
const J = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), Q = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) });
function Z({
  value: b,
  defaultValue: S = 0,
  onChange: u,
  min: r,
  max: l,
  step: s = 1,
  precision: w,
  // decimal places — inferred from step if omitted
  label: d,
  prefix: k,
  suffix: M,
  hint: g,
  error: i,
  disabled: c = !1,
  readOnly: p = !1,
  className: I = "",
  /* translatable */
  increaseLabel: j = "Increase",
  decreaseLabel: A = "Decrease"
}) {
  const m = b !== void 0, [K, L] = v(S), [h, y] = v(""), [W, D] = v(!1), t = m ? b : K, _ = C(
    () => {
      var n;
      return w ?? (s % 1 !== 0 ? ((n = String(s).split(".")[1]) == null ? void 0 : n.length) ?? 0 : 0);
    },
    [w, s]
  ), F = a(
    (n) => isNaN(n) ? t : (r !== void 0 && (n = Math.max(r, n)), l !== void 0 && (n = Math.min(l, n)), _ > 0 ? parseFloat(n.toFixed(_)) : Math.round(n)),
    [t, r, l, _]
  ), o = a(
    (n) => {
      const B = F(n);
      m || L(B), u == null || u(B);
    },
    [F, m, u]
  ), x = a(() => o(Number(t) + s), [o, t, s]), f = a(() => o(Number(t) - s), [o, t, s]), E = a(
    (n) => {
      n.key === "ArrowUp" && (n.preventDefault(), x()), n.key === "ArrowDown" && (n.preventDefault(), f());
    },
    [x, f]
  ), P = a(() => {
    D(!0), y(String(t ?? ""));
  }, [t]), R = a((n) => y(n.target.value), []), U = a(() => {
    D(!1);
    const n = parseFloat(h);
    o(isNaN(n) ? t : n);
  }, [h, t, o]), V = r !== void 0 && Number(t) <= r, q = l !== void 0 && Number(t) >= l, z = C(
    () => H("nxp-num", i && "nxp-num--error", c && "nxp-num--disabled", I),
    [i, c, I]
  ), G = W ? h : String(t ?? "");
  return /* @__PURE__ */ N("div", { className: z, children: [
    d && /* @__PURE__ */ e("label", { className: "nxp-num__label", children: d }),
    /* @__PURE__ */ N("div", { className: "nxp-num__wrap", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--dec",
          onClick: f,
          disabled: c || p || V,
          "aria-label": A,
          tabIndex: -1,
          children: /* @__PURE__ */ e(J, {})
        }
      ),
      /* @__PURE__ */ N("div", { className: "nxp-num__field", children: [
        k && /* @__PURE__ */ e("span", { className: "nxp-num__prefix", children: k }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            className: "nxp-num__input",
            value: G,
            disabled: c,
            readOnly: p,
            "aria-label": d ?? "Number input",
            "aria-invalid": !!i,
            onFocus: P,
            onChange: R,
            onBlur: U,
            onKeyDown: E
          }
        ),
        M && /* @__PURE__ */ e("span", { className: "nxp-num__suffix", children: M })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--inc",
          onClick: x,
          disabled: c || p || q,
          "aria-label": j,
          tabIndex: -1,
          children: /* @__PURE__ */ e(Q, {})
        }
      )
    ] }),
    g && !i && /* @__PURE__ */ e("span", { className: "nxp-num__hint", children: g }),
    i && /* @__PURE__ */ e("span", { className: "nxp-num__error", role: "alert", children: i })
  ] });
}
export {
  Z as NumberInput,
  Z as default
};
