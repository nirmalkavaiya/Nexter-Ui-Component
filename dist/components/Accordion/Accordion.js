import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as h, useCallback as u, memo as x } from "react";
const f = x(function({ item: o, isOpen: c, onToggle: d }) {
  return /* @__PURE__ */ i("div", { className: `nxp-accordion__item${c ? " is-open" : ""}`, children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: "nxp-accordion__head",
        onClick: () => d(o.id),
        "aria-expanded": c,
        "aria-controls": `accordion-body-${o.id}`,
        children: [
          /* @__PURE__ */ e("span", { children: o.title }),
          /* @__PURE__ */ e("svg", { className: "nxp-accordion__chevron", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ e("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ]
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        id: `accordion-body-${o.id}`,
        className: "nxp-accordion__body",
        role: "region",
        children: o.content
      }
    )
  ] });
});
function b({ items: a = [], defaultOpen: o = [], multi: c = !1, className: d = "" }) {
  const [s, t] = h(new Set(o)), l = u(
    (n) => {
      t((p) => {
        const r = new Set(p);
        return r.has(n) ? r.delete(n) : (c || r.clear(), r.add(n)), r;
      });
    },
    [c]
  );
  return /* @__PURE__ */ e("div", { className: `nxp-accordion ${d}`, children: a.map((n) => /* @__PURE__ */ e(
    f,
    {
      item: n,
      isOpen: s.has(n.id),
      onToggle: l
    },
    n.id
  )) });
}
export {
  b as Accordion,
  b as default
};
