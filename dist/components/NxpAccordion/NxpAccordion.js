import { jsx as n, jsxs as x } from "react/jsx-runtime";
import { memo as m, useState as y, useCallback as b } from "react";
import { cn as h } from "../../lib/utils.js";
const k = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.33", d: "M12 6s-2.946 4-4 4-4-4-4-4" }) }), I = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", fill: "none", viewBox: "0 0 14 14", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", d: "M7 1v12M1 7h12" }) });
function f(o, t, d) {
  const r = (e) => {
    var i;
    return typeof e == "number" ? (i = t[e]) == null ? void 0 : i.id : e;
  };
  if (d) {
    const e = Array.isArray(o) ? o : o == null ? [] : [o];
    return new Set(e.map(r).filter((i) => i != null));
  }
  const l = Array.isArray(o) ? o[0] : o, c = r(l);
  return new Set(c != null ? [c] : []);
}
const g = m(function({ item: t, isOpen: d, toggleType: r, onToggle: l }) {
  const c = `nxp-acc-head-${t.id}`, e = `nxp-acc-body-${t.id}`;
  return /* @__PURE__ */ x("div", { className: h("nxp-accordion-item", d && "is-open"), children: [
    /* @__PURE__ */ x(
      "button",
      {
        type: "button",
        id: c,
        className: "nxp-accordion-header",
        "aria-expanded": d,
        "aria-controls": e,
        onClick: () => l(t.id),
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-accordion-title", children: t.title }),
          r !== "none" && /* @__PURE__ */ n(
            "span",
            {
              className: h("nxp-accordion-toggle", `nxp-accordion-toggle--${r}`, d && "is-open"),
              "aria-hidden": "true",
              children: r === "plus" ? /* @__PURE__ */ n(I, {}) : /* @__PURE__ */ n(k, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n("div", { id: e, role: "region", "aria-labelledby": c, className: "nxp-accordion-content", children: /* @__PURE__ */ n("div", { className: "nxp-accordion-content__inner", children: /* @__PURE__ */ n("div", { className: "nxp-accordion-body", children: t.content }) }) })
  ] });
});
function v({
  items: o = [],
  defaultActive: t = 0,
  active: d,
  onChange: r,
  toggleType: l = "arrow",
  allowMultiple: c = !1,
  className: e = ""
}) {
  const i = d !== void 0, [u, w] = y(() => f(t, o, c)), p = i ? f(d, o, c) : u, A = b(
    (s) => {
      const a = new Set(p);
      a.has(s) ? a.delete(s) : (c || a.clear(), a.add(s));
      const N = c ? Array.from(a) : Array.from(a)[0] ?? null;
      i || w(a), r == null || r(N);
    },
    [p, c, i, r]
  );
  return /* @__PURE__ */ n("div", { className: h("nxp-accordion nxp-accordion--cards", e), children: o.map((s) => /* @__PURE__ */ n(
    g,
    {
      item: s,
      isOpen: p.has(s.id),
      toggleType: l,
      onToggle: A
    },
    s.id
  )) });
}
const $ = m(v);
export {
  $ as NxpAccordion,
  $ as default
};
