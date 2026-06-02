import { jsx as n, jsxs as _ } from "react/jsx-runtime";
import { useState as h, useRef as H, useEffect as J, useCallback as x, useMemo as j } from "react";
import { cn as K } from "../../lib/utils.js";
function W({
  /* numeric value */
  min: e = 0,
  max: i = 100,
  step: y = 1,
  value: I,
  // controlled
  defaultValue: A = 50,
  // uncontrolled seed
  onChange: r,
  // (numericValue) => void
  /* label */
  label: s,
  /* static unit — string | false */
  unit: u = "px",
  /* dynamic units — string[] — triggers dropdown */
  units: p,
  // e.g. ['px', '%', 'rem', 'em']
  onUnitChange: d,
  // controlled unit handler (unit: string) => void
  disabled: o = !1,
  className: M = ""
}) {
  const l = I !== void 0, [B, f] = h(A), c = l ? I : B, v = Array.isArray(p) && p.length > 0, $ = v ? p[0] : u || "", N = v && d !== void 0 && u !== void 0 && u !== !1, [k, D] = h($), m = N ? u : k, w = H(null), R = Math.round((c - e) / (i - e) * 100);
  J(() => {
    w.current && w.current.style.setProperty("--val", String(R));
  }, [R]);
  const E = x((t) => {
    const a = Number(t.target.value);
    l || f(a), r == null || r(a);
  }, [l, r]), F = x((t) => {
    const a = t.target.value;
    if (a === "") {
      l || f("");
      return;
    }
    const S = Math.min(i, Math.max(e, Number(a)));
    isNaN(S) || (l || f(S), r == null || r(S));
  }, [l, e, i, r]), L = x((t) => {
    t.target.value === "" && (l || f(e), r == null || r(e));
  }, [l, e, r]), P = x((t) => {
    const a = t.target.value;
    N || D(a), d == null || d(a);
  }, [N, d]), q = !v && u !== !1 && m ? /* @__PURE__ */ n("span", { className: "nxp-slider__unit-suffix", children: m }) : null, z = v ? /* @__PURE__ */ n(
    "select",
    {
      className: "nxp-slider__unit-select",
      value: m,
      onChange: P,
      disabled: o,
      "aria-label": "Unit",
      children: p.map((t) => /* @__PURE__ */ n("option", { value: t, children: t }, t))
    }
  ) : null, G = j(
    () => K("nxp-slider", o && "nxp-slider--disabled", M),
    [o, M]
  ), U = j(
    () => s ? `nxp-slider-${s.replace(/\s+/g, "-").toLowerCase()}` : void 0,
    [s]
  );
  return /* @__PURE__ */ _("div", { className: G, children: [
    /* @__PURE__ */ _("div", { className: "nxp-slider__header", children: [
      s && /* @__PURE__ */ n("label", { className: "nxp-slider__label", htmlFor: U, children: s }),
      /* @__PURE__ */ _("div", { className: "nxp-slider__controls", children: [
        z,
        /* @__PURE__ */ _("div", { className: "nxp-slider__input-wrap", children: [
          /* @__PURE__ */ n(
            "input",
            {
              type: "number",
              className: "nxp-slider__input",
              value: c,
              min: e,
              max: i,
              step: y,
              disabled: o,
              onChange: F,
              onBlur: L,
              "aria-label": s ? `${s} value` : "Slider value"
            }
          ),
          q
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "input",
      {
        id: U,
        ref: w,
        type: "range",
        className: "nxp-slider__range",
        min: e,
        max: i,
        step: y,
        value: c === "" ? e : c,
        onChange: E,
        disabled: o,
        "aria-valuemin": e,
        "aria-valuemax": i,
        "aria-valuenow": c === "" ? e : c,
        "aria-label": s ?? "Slider"
      }
    )
  ] });
}
export {
  W as Slider,
  W as default
};
