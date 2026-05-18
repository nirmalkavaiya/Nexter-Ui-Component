import { jsx as n, jsxs as o } from "react/jsx-runtime";
import "react";
const p = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M4 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), u = () => /* @__PURE__ */ o("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M1.5 6.5L7 1.5l5.5 5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M3 5.5V12a.5.5 0 0 0 .5.5h2.75V9h1.5v3.5H10.5A.5.5 0 0 0 11 12V5.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
] });
function k({
  items: a = [],
  separator: s,
  // custom separator node — defaults to ChevronIcon
  showHome: i = !1,
  // prepend a home icon on first item
  className: t = ""
}) {
  const h = ["nxp-bc", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("nav", { className: h, "aria-label": "Breadcrumb", children: /* @__PURE__ */ n("ol", { className: "nxp-bc__list", role: "list", children: a.map((e, c) => {
    const l = c === a.length - 1, d = c === 0, r = e.icon ?? (i && d ? /* @__PURE__ */ n(u, {}) : null);
    return /* @__PURE__ */ o("li", { className: "nxp-bc__item", children: [
      !l && (e.href ? /* @__PURE__ */ o("a", { href: e.href, className: "nxp-bc__link", children: [
        r && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: r }),
        e.label
      ] }) : /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: "nxp-bc__link nxp-bc__link--btn",
          onClick: e.onClick,
          children: [
            r && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: r }),
            e.label
          ]
        }
      )),
      l && /* @__PURE__ */ o("span", { className: "nxp-bc__current", "aria-current": "page", children: [
        r && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: r }),
        e.label
      ] }),
      !l && /* @__PURE__ */ n("span", { className: "nxp-bc__sep", "aria-hidden": "true", children: s ?? /* @__PURE__ */ n(p, {}) })
    ] }, `${e.label}-${c}`);
  }) }) });
}
export {
  k as Breadcrumb,
  k as default
};
