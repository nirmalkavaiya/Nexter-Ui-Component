import { jsx as n, jsxs as _ } from "react/jsx-runtime";
import { useState as M, useRef as z, useEffect as G, useCallback as x } from "react";
function O({
  /* numeric value */
  min: e = 0,
  max: i = 100,
  step: I = 1,
  value: j,
  // controlled
  defaultValue: R = 50,
  // uncontrolled seed
  onChange: r,
  // (numericValue) => void
  /* label */
  label: a,
  /* static unit — string | false */
  unit: d = "px",
  /* dynamic units — string[] — triggers dropdown */
  units: o,
  // e.g. ['px', '%', 'rem', 'em']
  onUnitChange: u,
  // controlled unit handler (unit: string) => void
  disabled: p = !1,
  className: U = ""
}) {
  const t = j !== void 0, [h, f] = M(R), c = t ? j : h, v = Array.isArray(o) && o.length > 0, A = v ? o[0] : d || "", N = v && u !== void 0 && d !== void 0 && d !== !1, [$, b] = M(A), w = N ? d : $, y = z(null), S = Math.round((c - e) / (i - e) * 100);
  G(() => {
    y.current && y.current.style.setProperty("--val", String(S));
  }, [S]);
  const k = x((l) => {
    const s = Number(l.target.value);
    t || f(s), r == null || r(s);
  }, [t, r]), D = x((l) => {
    const s = l.target.value;
    if (s === "") {
      t || f("");
      return;
    }
    const m = Math.min(i, Math.max(e, Number(s)));
    isNaN(m) || (t || f(m), r == null || r(m));
  }, [t, e, i, r]), E = x((l) => {
    l.target.value === "" && (t || f(e), r == null || r(e));
  }, [t, e, r]), F = x((l) => {
    const s = l.target.value;
    N || b(s), u == null || u(s);
  }, [N, u]), L = !v && d !== !1 && w ? /* @__PURE__ */ n("span", { className: "nxp-slider__unit-suffix", children: w }) : null, P = v ? /* @__PURE__ */ n(
    "select",
    {
      className: "nxp-slider__unit-select",
      value: w,
      onChange: F,
      disabled: p,
      "aria-label": "Unit",
      children: o.map((l) => /* @__PURE__ */ n("option", { value: l, children: l }, l))
    }
  ) : null, q = ["nxp-slider", p ? "nxp-slider--disabled" : "", U].filter(Boolean).join(" "), B = a ? `nxp-slider-${a.replace(/\s+/g, "-").toLowerCase()}` : void 0;
  return /* @__PURE__ */ _("div", { className: q, children: [
    /* @__PURE__ */ _("div", { className: "nxp-slider__header", children: [
      a && /* @__PURE__ */ n("label", { className: "nxp-slider__label", htmlFor: B, children: a }),
      /* @__PURE__ */ _("div", { className: "nxp-slider__controls", children: [
        P,
        /* @__PURE__ */ _("div", { className: "nxp-slider__input-wrap", children: [
          /* @__PURE__ */ n(
            "input",
            {
              type: "number",
              className: "nxp-slider__input",
              value: c,
              min: e,
              max: i,
              step: I,
              disabled: p,
              onChange: D,
              onBlur: E,
              "aria-label": a ? `${a} value` : "Slider value"
            }
          ),
          L
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "input",
      {
        id: B,
        ref: y,
        type: "range",
        className: "nxp-slider__range",
        min: e,
        max: i,
        step: I,
        value: c === "" ? e : c,
        onChange: k,
        disabled: p,
        style: { "--val": S },
        "aria-valuemin": e,
        "aria-valuemax": i,
        "aria-valuenow": c === "" ? e : c,
        "aria-label": a ?? "Slider"
      }
    )
  ] });
}
export {
  O as Slider,
  O as default
};
