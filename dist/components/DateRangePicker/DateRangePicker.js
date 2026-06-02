import { jsxs as y, jsx as r } from "react/jsx-runtime";
import { useState as f, useRef as rt, useEffect as q, useCallback as z, useMemo as st } from "react";
import { CalendarIcon as ot, DateClearIcon as at, ChevronLeftIcon as it, ChevronRightIcon as ct } from "../../lib/icons.js";
function G(t) {
  return String(t).padStart(2, "0");
}
function S(t) {
  return t ? `${t.getFullYear()}-${G(t.getMonth() + 1)}-${G(t.getDate())}` : "";
}
function Y(t) {
  if (!t) return null;
  const [e, s, a] = t.split("-").map(Number);
  if (!e || !s || !a) return null;
  const _ = new Date(e, s - 1, a);
  return isNaN(_) ? null : _;
}
function $(t, e) {
  return t && e && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function R(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}
function dt(t, e, s) {
  const a = R(t), _ = R(e), l = R(s);
  return a > _ && a < l;
}
function lt(t, e) {
  const s = new Date(t, e, 1).getDay(), a = new Date(t, e + 1, 0).getDate(), _ = new Date(t, e, 0).getDate(), l = [];
  for (let i = s - 1; i >= 0; i--)
    l.push({ d: _ - i, month: e - 1, year: e === 0 ? t - 1 : t, outside: !0 });
  for (let i = 1; i <= a; i++)
    l.push({ d: i, month: e, year: t, outside: !1 });
  const w = 42 - l.length;
  for (let i = 1; i <= w; i++)
    l.push({ d: i, month: e + 1, year: e === 11 ? t + 1 : t, outside: !0 });
  return l;
}
const pt = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) });
function Q({
  year: t,
  month: e,
  start: s,
  end: a,
  hovered: _,
  onDayClick: l,
  onDayHover: w,
  prevMonth: i,
  nextMonth: A,
  showPrev: E = !0,
  showNext: I = !0,
  monthNames: C,
  dayNames: F,
  prevLabel: j,
  nextLabel: u
}) {
  const D = st(() => lt(t, e), [t, e]), v = R(/* @__PURE__ */ new Date()), o = a ?? _;
  return /* @__PURE__ */ y("div", { className: "nxp-drp__cal", children: [
    /* @__PURE__ */ y("div", { className: "nxp-drp__cal-header", children: [
      E ? /* @__PURE__ */ r("button", { type: "button", className: "nxp-date__nav", onClick: i, "aria-label": j, children: /* @__PURE__ */ r(it, {}) }) : /* @__PURE__ */ r("span", {}),
      /* @__PURE__ */ y("span", { className: "nxp-date__month-label", children: [
        C[e],
        " ",
        t
      ] }),
      I ? /* @__PURE__ */ r("button", { type: "button", className: "nxp-date__nav", onClick: A, "aria-label": u, children: /* @__PURE__ */ r(ct, {}) }) : /* @__PURE__ */ r("span", {})
    ] }),
    /* @__PURE__ */ r("div", { className: "nxp-date__grid nxp-date__grid--head", children: F.map((c) => /* @__PURE__ */ r("span", { className: "nxp-date__dow", children: c }, c)) }),
    /* @__PURE__ */ r("div", { className: "nxp-date__grid", children: D.map((c, p) => {
      const d = new Date(c.year, c.month, c.d), N = $(d, s), b = $(d, a), m = $(d, v), k = s && o && !c.outside && dt(d, s < o ? s : o, s < o ? o : s);
      return /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: [
            "nxp-date__day",
            c.outside ? "nxp-date__day--outside" : "",
            N ? "nxp-date__day--selected nxp-date__day--range-start" : "",
            b ? "nxp-date__day--selected nxp-date__day--range-end" : "",
            m ? "nxp-date__day--today" : "",
            k ? "nxp-date__day--in-range" : ""
          ].filter(Boolean).join(" "),
          onClick: () => l(d),
          onMouseEnter: () => w(d),
          "aria-label": S(d),
          "aria-selected": N || b,
          children: c.d
        },
        p
      );
    }) })
  ] });
}
function ht({
  value: t,
  // { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } (controlled)
  defaultValue: e,
  // same shape (uncontrolled)
  onChange: s,
  // ({ start, end }) => void
  disabled: a = !1,
  clearable: _ = !0,
  /* translatable */
  startPlaceholder: l = "Start date",
  endPlaceholder: w = "End date",
  clearText: i = "Clear",
  applyText: A = "Apply",
  monthNames: E = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: I = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: C = "Previous month",
  nextMonthLabel: F = "Next month",
  className: j = ""
}) {
  const u = t !== void 0, D = Y((u ? t == null ? void 0 : t.start : e == null ? void 0 : e.start) ?? null), v = Y((u ? t == null ? void 0 : t.end : e == null ? void 0 : e.end) ?? null), [o, c] = f(D), [p, d] = f(v), [N, b] = f(null), [m, k] = f("start"), [M, L] = f(!1), [O, B] = f(() => (D ?? /* @__PURE__ */ new Date()).getFullYear()), [g, P] = f(() => (D ?? /* @__PURE__ */ new Date()).getMonth()), T = rt(null);
  q(() => {
    u && (c(Y((t == null ? void 0 : t.start) ?? null)), d(Y((t == null ? void 0 : t.end) ?? null)));
  }, [u, t == null ? void 0 : t.start, t == null ? void 0 : t.end]), q(() => {
    if (!M) return;
    const n = (x) => {
      var h;
      (h = T.current) != null && h.contains(x.target) || L(!1);
    };
    return document.addEventListener("pointerdown", n), () => document.removeEventListener("pointerdown", n);
  }, [M]);
  const U = g === 11 ? 0 : g + 1, X = g === 11 ? O + 1 : O;
  function Z() {
    g === 0 ? (P(11), B((n) => n - 1)) : P((n) => n - 1);
  }
  function V() {
    g === 11 ? (P(0), B((n) => n + 1)) : P((n) => n + 1);
  }
  const J = z((n) => {
    if (m === "start" || o && p)
      c(n), d(null), k("end");
    else {
      let x = o, h = n;
      h < x && (x = n, h = o), d(h), k("start"), b(null);
      const nt = { start: S(x), end: S(h) };
      u || (c(x), d(h)), s == null || s(nt), L(!1);
    }
  }, [m, o, p, u, s]), H = z((n) => {
    m === "end" && o && !p && b(n);
  }, [m, o, p]);
  function tt(n) {
    n.stopPropagation(), c(null), d(null), k("start"), s == null || s({ start: null, end: null });
  }
  const W = o ? S(o) : "", K = p ? S(p) : "", et = ["nxp-drp", a ? "nxp-drp--disabled" : "", M ? "nxp-drp--open" : "", j].filter(Boolean).join(" ");
  return /* @__PURE__ */ y("div", { ref: T, className: et, children: [
    /* @__PURE__ */ y(
      "div",
      {
        className: "nxp-drp__trigger",
        onClick: () => !a && L((n) => !n),
        role: "button",
        "aria-expanded": M,
        tabIndex: a ? -1 : 0,
        onKeyDown: (n) => {
          (n.key === "Enter" || n.key === " ") && (n.preventDefault(), !a && L((x) => !x));
        },
        children: [
          /* @__PURE__ */ r("span", { className: "nxp-date__icon", children: /* @__PURE__ */ r(ot, {}) }),
          /* @__PURE__ */ r("span", { className: `nxp-drp__segment${W ? "" : " nxp-date__value--placeholder"}`, children: W || l }),
          /* @__PURE__ */ r("span", { className: "nxp-drp__arrow", children: /* @__PURE__ */ r(pt, {}) }),
          /* @__PURE__ */ r("span", { className: `nxp-drp__segment${K ? "" : " nxp-date__value--placeholder"}`, children: K || w }),
          _ && (o || p) && !a && /* @__PURE__ */ r("button", { type: "button", className: "nxp-date__clear", onClick: tt, "aria-label": i, children: /* @__PURE__ */ r(at, {}) })
        ]
      }
    ),
    M && /* @__PURE__ */ r("div", { className: "nxp-drp__popover", role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ y("div", { className: "nxp-drp__calendars", children: [
      /* @__PURE__ */ r(
        Q,
        {
          year: O,
          month: g,
          start: o,
          end: p,
          hovered: N,
          onDayClick: J,
          onDayHover: H,
          prevMonth: Z,
          nextMonth: () => {
          },
          showPrev: !0,
          showNext: !1,
          monthNames: E,
          dayNames: I,
          prevLabel: C,
          nextLabel: F
        }
      ),
      /* @__PURE__ */ r(
        Q,
        {
          year: X,
          month: U,
          start: o,
          end: p,
          hovered: N,
          onDayClick: J,
          onDayHover: H,
          prevMonth: () => {
          },
          nextMonth: V,
          showPrev: !1,
          showNext: !0,
          monthNames: E,
          dayNames: I,
          prevLabel: C,
          nextLabel: F
        }
      )
    ] }) })
  ] });
}
export {
  ht as DateRangePicker,
  ht as default
};
