import { jsxs as p, jsx as n } from "react/jsx-runtime";
import { useState as D, useRef as Z, useMemo as b, useEffect as ee, useCallback as O } from "react";
function E(t) {
  return String(t).padStart(2, "0");
}
function M(t) {
  return t ? `${t.getFullYear()}-${E(t.getMonth() + 1)}-${E(t.getDate())}` : "";
}
function u(t) {
  if (!t) return null;
  const [r, o, d] = t.split("-").map(Number);
  if (!r || !o || !d) return null;
  const l = new Date(r, o - 1, d);
  return isNaN(l) ? null : l;
}
function T(t, r) {
  return t && r && t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate();
}
function N(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}
function te(t, r) {
  const o = new Date(t, r, 1).getDay(), d = new Date(t, r + 1, 0).getDate(), l = new Date(t, r, 0).getDate(), i = [];
  for (let a = o - 1; a >= 0; a--)
    i.push({ d: l - a, month: r - 1, year: r === 0 ? t - 1 : t, outside: !0 });
  for (let a = 1; a <= d; a++)
    i.push({ d: a, month: r, year: t, outside: !1 });
  const w = 42 - i.length;
  for (let a = 1; a <= w; a++)
    i.push({ d: a, month: r + 1, year: r === 11 ? t + 1 : t, outside: !0 });
  return i;
}
const ne = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), re = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), ae = () => /* @__PURE__ */ p("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), oe = () => /* @__PURE__ */ n("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) });
function de({
  value: t,
  // ISO string 'YYYY-MM-DD' (controlled)
  defaultValue: r,
  // ISO string (uncontrolled)
  onChange: o,
  // (isoString | null) => void
  minDate: d,
  // ISO string
  maxDate: l,
  // ISO string
  disabled: i = !1,
  clearable: w = !0,
  /* translatable */
  placeholder: a = "Select date",
  todayText: $ = "Today",
  clearText: J = "Clear",
  monthNames: P = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: R = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: A = "Previous month",
  nextMonthLabel: K = "Next month",
  className: V = ""
}) {
  const h = t !== void 0, [q, L] = D(() => u(r)), [f, x] = D(!1), [y, S] = D(() => (u(t ?? r) ?? /* @__PURE__ */ new Date()).getFullYear()), [_, m] = D(() => (u(t ?? r) ?? /* @__PURE__ */ new Date()).getMonth()), C = Z(null), v = h ? u(t) : q, F = b(() => u(d), [d]), Y = b(() => u(l), [l]);
  ee(() => {
    if (!f) return;
    const e = (s) => {
      var c;
      (c = C.current) != null && c.contains(s.target) || x(!1);
    };
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [f]);
  const j = O((e) => {
    const s = new Date(e.year, e.month, e.d);
    h || L(s), o == null || o(M(s)), x(!1);
  }, [h, o]), z = O((e) => {
    e.stopPropagation(), h || L(null), o == null || o(null);
  }, [h, o]);
  function G() {
    _ === 0 ? (m(11), S((e) => e - 1)) : m((e) => e - 1);
  }
  function H() {
    _ === 11 ? (m(0), S((e) => e + 1)) : m((e) => e + 1);
  }
  const Q = b(() => te(y, _), [y, _]), g = N(/* @__PURE__ */ new Date());
  function U(e) {
    const s = new Date(e.year, e.month, e.d);
    return !!(F && s < N(F) || Y && s > N(Y));
  }
  const B = v ? M(v) : "", X = ["nxp-date", i ? "nxp-date--disabled" : "", f ? "nxp-date--open" : "", V].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("div", { ref: C, className: X, children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: "nxp-date__trigger",
        onClick: () => !i && x((e) => !e),
        role: "button",
        "aria-label": a,
        "aria-expanded": f,
        tabIndex: i ? -1 : 0,
        onKeyDown: (e) => {
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), !i && x((s) => !s));
        },
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-date__icon", children: /* @__PURE__ */ n(ae, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-date__value${B ? "" : " nxp-date__value--placeholder"}`, children: B || a }),
          w && v && !i && /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__clear", onClick: z, "aria-label": J, children: /* @__PURE__ */ n(oe, {}) })
        ]
      }
    ),
    f && /* @__PURE__ */ p("div", { className: "nxp-date__popover", role: "dialog", "aria-label": "Date picker", children: [
      /* @__PURE__ */ p("div", { className: "nxp-date__header", children: [
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: G, "aria-label": A, children: /* @__PURE__ */ n(ne, {}) }),
        /* @__PURE__ */ p("span", { className: "nxp-date__month-label", children: [
          P[_],
          " ",
          y
        ] }),
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: H, "aria-label": K, children: /* @__PURE__ */ n(re, {}) })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid nxp-date__grid--head", children: R.map((e) => /* @__PURE__ */ n("span", { className: "nxp-date__dow", children: e }, e)) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid", children: Q.map((e, s) => {
        const c = new Date(e.year, e.month, e.d), I = T(c, v), W = T(c, g), k = U(e);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [
              "nxp-date__day",
              e.outside ? "nxp-date__day--outside" : "",
              I ? "nxp-date__day--selected" : "",
              W ? "nxp-date__day--today" : "",
              k ? "nxp-date__day--disabled" : ""
            ].filter(Boolean).join(" "),
            onClick: () => !k && j(e),
            disabled: k,
            "aria-label": M(c),
            "aria-selected": I,
            "aria-current": W ? "date" : void 0,
            children: e.d
          },
          s
        );
      }) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__footer", children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-date__today-btn",
          onClick: () => j({ d: g.getDate(), month: g.getMonth(), year: g.getFullYear() }),
          children: $
        }
      ) })
    ] })
  ] });
}
export {
  de as DatePicker,
  de as default
};
