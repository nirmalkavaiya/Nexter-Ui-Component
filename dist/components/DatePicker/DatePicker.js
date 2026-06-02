import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { useState as b, useRef as Z, useMemo as w, useEffect as ee, useCallback as $ } from "react";
import { CalendarIcon as te, DateClearIcon as ne, ChevronLeftIcon as ae, ChevronRightIcon as re } from "../../lib/icons.js";
function J(t) {
  return String(t).padStart(2, "0");
}
function M(t) {
  return t ? `${t.getFullYear()}-${J(t.getMonth() + 1)}-${J(t.getDate())}` : "";
}
function u(t) {
  if (!t) return null;
  const [n, o, l] = t.split("-").map(Number);
  if (!n || !o || !l) return null;
  const d = new Date(n, o - 1, l);
  return isNaN(d) ? null : d;
}
function L(t, n) {
  return t && n && t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function k(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}
function oe(t, n) {
  const o = new Date(t, n, 1).getDay(), l = new Date(t, n + 1, 0).getDate(), d = new Date(t, n, 0).getDate(), s = [];
  for (let r = o - 1; r >= 0; r--)
    s.push({ d: d - r, month: n - 1, year: n === 0 ? t - 1 : t, outside: !0 });
  for (let r = 1; r <= l; r++)
    s.push({ d: r, month: n, year: t, outside: !1 });
  const v = 42 - s.length;
  for (let r = 1; r <= v; r++)
    s.push({ d: r, month: n + 1, year: n === 11 ? t + 1 : t, outside: !0 });
  return s;
}
function de({
  value: t,
  // ISO string 'YYYY-MM-DD' (controlled)
  defaultValue: n,
  // ISO string (uncontrolled)
  onChange: o,
  // (isoString | null) => void
  minDate: l,
  // ISO string
  maxDate: d,
  // ISO string
  disabled: s = !1,
  clearable: v = !0,
  /* translatable */
  placeholder: r = "Select date",
  todayText: P = "Today",
  clearText: R = "Clear",
  monthNames: A = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: B = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: K = "Previous month",
  nextMonthLabel: V = "Next month",
  className: W = ""
}) {
  const p = t !== void 0, [q, S] = b(() => u(n)), [f, x] = b(!1), [g, F] = b(() => (u(t ?? n) ?? /* @__PURE__ */ new Date()).getFullYear()), [_, D] = b(() => (u(t ?? n) ?? /* @__PURE__ */ new Date()).getMonth()), I = Z(null), h = p ? u(t) : q, Y = w(() => u(l), [l]), C = w(() => u(d), [d]);
  ee(() => {
    if (!f) return;
    const e = (i) => {
      var c;
      (c = I.current) != null && c.contains(i.target) || x(!1);
    };
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [f]);
  const O = $((e) => {
    const i = new Date(e.year, e.month, e.d);
    p || S(i), o == null || o(M(i)), x(!1);
  }, [p, o]), z = $((e) => {
    e.stopPropagation(), p || S(null), o == null || o(null);
  }, [p, o]);
  function G() {
    _ === 0 ? (D(11), F((e) => e - 1)) : D((e) => e - 1);
  }
  function H() {
    _ === 11 ? (D(0), F((e) => e + 1)) : D((e) => e + 1);
  }
  const Q = w(() => oe(g, _), [g, _]), y = k(/* @__PURE__ */ new Date());
  function U(e) {
    const i = new Date(e.year, e.month, e.d);
    return !!(Y && i < k(Y) || C && i > k(C));
  }
  const j = h ? M(h) : "", X = ["nxp-date", s ? "nxp-date--disabled" : "", f ? "nxp-date--open" : "", W].filter(Boolean).join(" ");
  return /* @__PURE__ */ m("div", { ref: I, className: X, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: "nxp-date__trigger",
        onClick: () => !s && x((e) => !e),
        role: "button",
        "aria-label": r,
        "aria-expanded": f,
        tabIndex: s ? -1 : 0,
        onKeyDown: (e) => {
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), !s && x((i) => !i));
        },
        children: [
          /* @__PURE__ */ a("span", { className: "nxp-date__icon", children: /* @__PURE__ */ a(te, {}) }),
          /* @__PURE__ */ a("span", { className: `nxp-date__value${j ? "" : " nxp-date__value--placeholder"}`, children: j || r }),
          v && h && !s && /* @__PURE__ */ a("button", { type: "button", className: "nxp-date__clear", onClick: z, "aria-label": R, children: /* @__PURE__ */ a(ne, {}) })
        ]
      }
    ),
    f && /* @__PURE__ */ m("div", { className: "nxp-date__popover", role: "dialog", "aria-label": "Date picker", children: [
      /* @__PURE__ */ m("div", { className: "nxp-date__header", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "nxp-date__nav", onClick: G, "aria-label": K, children: /* @__PURE__ */ a(ae, {}) }),
        /* @__PURE__ */ m("span", { className: "nxp-date__month-label", children: [
          A[_],
          " ",
          g
        ] }),
        /* @__PURE__ */ a("button", { type: "button", className: "nxp-date__nav", onClick: H, "aria-label": V, children: /* @__PURE__ */ a(re, {}) })
      ] }),
      /* @__PURE__ */ a("div", { className: "nxp-date__grid nxp-date__grid--head", children: B.map((e) => /* @__PURE__ */ a("span", { className: "nxp-date__dow", children: e }, e)) }),
      /* @__PURE__ */ a("div", { className: "nxp-date__grid", children: Q.map((e, i) => {
        const c = new Date(e.year, e.month, e.d), E = L(c, h), T = L(c, y), N = U(e);
        return /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: [
              "nxp-date__day",
              e.outside ? "nxp-date__day--outside" : "",
              E ? "nxp-date__day--selected" : "",
              T ? "nxp-date__day--today" : "",
              N ? "nxp-date__day--disabled" : ""
            ].filter(Boolean).join(" "),
            onClick: () => !N && O(e),
            disabled: N,
            "aria-label": M(c),
            "aria-selected": E,
            "aria-current": T ? "date" : void 0,
            children: e.d
          },
          i
        );
      }) }),
      /* @__PURE__ */ a("div", { className: "nxp-date__footer", children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "nxp-date__today-btn",
          onClick: () => O({ d: y.getDate(), month: y.getMonth(), year: y.getFullYear() }),
          children: P
        }
      ) })
    ] })
  ] });
}
export {
  de as DatePicker,
  de as default
};
