import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { useState as h, useCallback as u } from "react";
function _({ items: d = [], defaultOpen: s = [], multi: c = !1, className: i = "" }) {
  const [t, l] = h(new Set(s)), p = u(
    (n) => {
      l((r) => {
        const o = new Set(r);
        return o.has(n) ? o.delete(n) : (c || o.clear(), o.add(n)), o;
      });
    },
    [c]
  );
  return /* @__PURE__ */ e("div", { className: `nxp-accordion ${i}`, children: d.map((n) => {
    const r = t.has(n.id);
    return /* @__PURE__ */ a(
      "div",
      {
        className: `nxp-accordion__item${r ? " is-open" : ""}`,
        children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "nxp-accordion__head",
              onClick: () => p(n.id),
              "aria-expanded": r,
              "aria-controls": `accordion-body-${n.id}`,
              children: [
                /* @__PURE__ */ e("span", { children: n.title }),
                /* @__PURE__ */ e("svg", { className: "nxp-accordion__chevron", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ e("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              id: `accordion-body-${n.id}`,
              className: "nxp-accordion__body",
              role: "region",
              children: n.content
            }
          )
        ]
      },
      n.id
    );
  }) });
}
export {
  _ as Accordion,
  _ as default
};
