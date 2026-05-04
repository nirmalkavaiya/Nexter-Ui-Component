import { jsxs as g, jsx as t } from "react/jsx-runtime";
import { useState as f, useRef as re, useEffect as q, useCallback as z, useMemo as oe } from "react";
function G(e) {
  return String(e).padStart(2, "0");
}
function v(e) {
  return e ? `${e.getFullYear()}-${G(e.getMonth() + 1)}-${G(e.getDate())}` : "";
}
function F(e) {
  if (!e) return null;
  const [n, o, i] = e.split("-").map(Number);
  if (!n || !o || !i) return null;
  const h = new Date(n, o - 1, i);
  return isNaN(h) ? null : h;
}
function R(e, n) {
  return e && n && e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate();
}
function P(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function se(e, n, o) {
  const i = P(e), h = P(n), l = P(o);
  return i > h && i < l;
}
function ie(e, n) {
  const o = new Date(e, n, 1).getDay(), i = new Date(e, n + 1, 0).getDate(), h = new Date(e, n, 0).getDate(), l = [];
  for (let a = o - 1; a >= 0; a--)
    l.push({ d: h - a, month: n - 1, year: n === 0 ? e - 1 : e, outside: !0 });
  for (let a = 1; a <= i; a++)
    l.push({ d: a, month: n, year: e, outside: !1 });
  const k = 42 - l.length;
  for (let a = 1; a <= k; a++)
    l.push({ d: a, month: n + 1, year: n === 11 ? e + 1 : e, outside: !0 });
  return l;
}
const ae = () => /* @__PURE__ */ t("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), de = () => /* @__PURE__ */ t("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), ce = () => /* @__PURE__ */ g("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ t("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ t("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), le = () => /* @__PURE__ */ t("svg", { width: "10", height: "10", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) }), pe = () => /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) });
function Q({
  year: e,
  month: n,
  start: o,
  end: i,
  hovered: h,
  onDayClick: l,
  onDayHover: k,
  prevMonth: a,
  nextMonth: O,
  showPrev: L = !0,
  showNext: S = !0,
  monthNames: C,
  dayNames: E,
  prevLabel: W,
  nextLabel: u
}) {
  const y = oe(() => ie(e, n), [e, n]), Y = P(/* @__PURE__ */ new Date()), s = i ?? h;
  return /* @__PURE__ */ g("div", { className: "nxp-drp__cal", children: [
    /* @__PURE__ */ g("div", { className: "nxp-drp__cal-header", children: [
      L ? /* @__PURE__ */ t("button", { type: "button", className: "nxp-date__nav", onClick: a, "aria-label": W, children: /* @__PURE__ */ t(ae, {}) }) : /* @__PURE__ */ t("span", {}),
      /* @__PURE__ */ g("span", { className: "nxp-date__month-label", children: [
        C[n],
        " ",
        e
      ] }),
      S ? /* @__PURE__ */ t("button", { type: "button", className: "nxp-date__nav", onClick: O, "aria-label": u, children: /* @__PURE__ */ t(de, {}) }) : /* @__PURE__ */ t("span", {})
    ] }),
    /* @__PURE__ */ t("div", { className: "nxp-date__grid nxp-date__grid--head", children: E.map((d) => /* @__PURE__ */ t("span", { className: "nxp-date__dow", children: d }, d)) }),
    /* @__PURE__ */ t("div", { className: "nxp-date__grid", children: y.map((d, p) => {
      const c = new Date(d.year, d.month, d.d), D = R(c, o), M = R(c, i), w = R(c, Y), N = o && s && !d.outside && se(c, o < s ? o : s, o < s ? s : o);
      return /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: [
            "nxp-date__day",
            d.outside ? "nxp-date__day--outside" : "",
            D ? "nxp-date__day--selected nxp-date__day--range-start" : "",
            M ? "nxp-date__day--selected nxp-date__day--range-end" : "",
            w ? "nxp-date__day--today" : "",
            N ? "nxp-date__day--in-range" : ""
          ].filter(Boolean).join(" "),
          onClick: () => l(c),
          onMouseEnter: () => k(c),
          "aria-label": v(c),
          "aria-selected": D || M,
          children: d.d
        },
        p
      );
    }) })
  ] });
}
function _e({
  value: e,
  // { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } (controlled)
  defaultValue: n,
  // same shape (uncontrolled)
  onChange: o,
  // ({ start, end }) => void
  disabled: i = !1,
  clearable: h = !0,
  /* translatable */
  startPlaceholder: l = "Start date",
  endPlaceholder: k = "End date",
  clearText: a = "Clear",
  applyText: O = "Apply",
  monthNames: L = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: S = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: C = "Previous month",
  nextMonthLabel: E = "Next month",
  className: W = ""
}) {
  const u = e !== void 0, y = F((u ? e == null ? void 0 : e.start : n == null ? void 0 : n.start) ?? null), Y = F((u ? e == null ? void 0 : e.end : n == null ? void 0 : n.end) ?? null), [s, d] = f(y), [p, c] = f(Y), [D, M] = f(null), [w, N] = f("start"), [b, B] = f(!1), [I, $] = f(() => (y ?? /* @__PURE__ */ new Date()).getFullYear()), [m, j] = f(() => (y ?? /* @__PURE__ */ new Date()).getMonth()), A = re(null);
  q(() => {
    u && (d(F((e == null ? void 0 : e.start) ?? null)), c(F((e == null ? void 0 : e.end) ?? null)));
  }, [u, e == null ? void 0 : e.start, e == null ? void 0 : e.end]), q(() => {
    if (!b) return;
    const r = (_) => {
      var x;
      (x = A.current) != null && x.contains(_.target) || B(!1);
    };
    return document.addEventListener("pointerdown", r), () => document.removeEventListener("pointerdown", r);
  }, [b]);
  const U = m === 11 ? 0 : m + 1, X = m === 11 ? I + 1 : I;
  function Z() {
    m === 0 ? (j(11), $((r) => r - 1)) : j((r) => r - 1);
  }
  function V() {
    m === 11 ? (j(0), $((r) => r + 1)) : j((r) => r + 1);
  }
  const T = z((r) => {
    if (w === "start" || s && p)
      d(r), c(null), N("end");
    else {
      let _ = s, x = r;
      x < _ && (_ = r, x = s), c(x), N("start"), M(null);
      const ne = { start: v(_), end: v(x) };
      u || (d(_), c(x)), o == null || o(ne), B(!1);
    }
  }, [w, s, p, u, o]), J = z((r) => {
    w === "end" && s && !p && M(r);
  }, [w, s, p]);
  function ee(r) {
    r.stopPropagation(), d(null), c(null), N("start"), o == null || o({ start: null, end: null });
  }
  const H = s ? v(s) : "", K = p ? v(p) : "", te = ["nxp-drp", i ? "nxp-drp--disabled" : "", b ? "nxp-drp--open" : "", W].filter(Boolean).join(" ");
  return /* @__PURE__ */ g("div", { ref: A, className: te, children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: "nxp-drp__trigger",
        onClick: () => !i && B((r) => !r),
        role: "button",
        "aria-expanded": b,
        tabIndex: i ? -1 : 0,
        onKeyDown: (r) => {
          (r.key === "Enter" || r.key === " ") && (r.preventDefault(), !i && B((_) => !_));
        },
        children: [
          /* @__PURE__ */ t("span", { className: "nxp-date__icon", children: /* @__PURE__ */ t(ce, {}) }),
          /* @__PURE__ */ t("span", { className: `nxp-drp__segment${H ? "" : " nxp-date__value--placeholder"}`, children: H || l }),
          /* @__PURE__ */ t("span", { className: "nxp-drp__arrow", children: /* @__PURE__ */ t(pe, {}) }),
          /* @__PURE__ */ t("span", { className: `nxp-drp__segment${K ? "" : " nxp-date__value--placeholder"}`, children: K || k }),
          h && (s || p) && !i && /* @__PURE__ */ t("button", { type: "button", className: "nxp-date__clear", onClick: ee, "aria-label": a, children: /* @__PURE__ */ t(le, {}) })
        ]
      }
    ),
    b && /* @__PURE__ */ t("div", { className: "nxp-drp__popover", role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ g("div", { className: "nxp-drp__calendars", children: [
      /* @__PURE__ */ t(
        Q,
        {
          year: I,
          month: m,
          start: s,
          end: p,
          hovered: D,
          onDayClick: T,
          onDayHover: J,
          prevMonth: Z,
          nextMonth: () => {
          },
          showPrev: !0,
          showNext: !1,
          monthNames: L,
          dayNames: S,
          prevLabel: C,
          nextLabel: E
        }
      ),
      /* @__PURE__ */ t(
        Q,
        {
          year: X,
          month: U,
          start: s,
          end: p,
          hovered: D,
          onDayClick: T,
          onDayHover: J,
          prevMonth: () => {
          },
          nextMonth: V,
          showPrev: !1,
          showNext: !0,
          monthNames: L,
          dayNames: S,
          prevLabel: C,
          nextLabel: E
        }
      )
    ] }) })
  ] });
}
export {
  _e as DateRangePicker,
  _e as default
};
