import { jsxs as f, jsx as s } from "react/jsx-runtime";
import { useState as g, useCallback as N, useMemo as C, useEffect as B } from "react";
import { cn as M } from "../../lib/utils.js";
import { ChevronDownIcon as V } from "../../lib/icons.js";
const z = () => /* @__PURE__ */ s(V, { size: 12 });
function m({
  item: n,
  active: d,
  onSelect: t,
  collapsed: a,
  depth: o = 0
}) {
  const c = Array.isArray(n.children) && n.children.length > 0, i = c && n.children.some((l) => l.id === d), [u, b] = g(i);
  B(() => {
    i && b(!0);
  }, [i]);
  const p = n.id === d;
  function h(l) {
    l.preventDefault(), c && !a ? b((x) => !x) : t == null || t(n.id, n);
  }
  const _ = [
    "nxp-sb__item",
    o > 0 ? "nxp-sb__item--child" : "",
    p ? "nxp-sb__item--active" : "",
    i ? "nxp-sb__item--active-parent" : "",
    n.disabled ? "nxp-sb__item--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("li", { children: [
    /* @__PURE__ */ f(
      "a",
      {
        href: n.href ?? "#",
        className: _,
        onClick: h,
        "aria-current": p ? "page" : void 0,
        "aria-disabled": n.disabled || void 0,
        tabIndex: n.disabled ? -1 : 0,
        title: a && typeof n.label == "string" ? n.label : void 0,
        children: [
          n.icon && /* @__PURE__ */ s("span", { className: "nxp-sb__icon", "aria-hidden": "true", children: n.icon }),
          !a && /* @__PURE__ */ s("span", { className: "nxp-sb__label", children: n.label }),
          !a && n.badge != null && /* @__PURE__ */ s("span", { className: `nxp-sb__badge${n.badgeVariant ? ` nxp-sb__badge--${n.badgeVariant}` : ""}`, children: n.badge }),
          !a && c && /* @__PURE__ */ s("span", { className: `nxp-sb__chevron${u ? " nxp-sb__chevron--open" : ""}`, children: /* @__PURE__ */ s(z, {}) })
        ]
      }
    ),
    c && !a && u && /* @__PURE__ */ s("ul", { className: "nxp-sb__sub", role: "list", children: n.children.map((l) => /* @__PURE__ */ s(
      m,
      {
        item: l,
        active: d,
        onSelect: t,
        collapsed: a,
        depth: o + 1
      },
      l.id
    )) })
  ] });
}
function G({
  items: n = [],
  active: d,
  defaultActive: t,
  onSelect: a,
  collapsed: o,
  defaultCollapsed: c = !1,
  onCollapse: i,
  collapsible: u = !0,
  header: b,
  footer: p,
  width: h = "220px",
  collapsedWidth: _ = "56px",
  className: l = ""
}) {
  const x = d !== void 0, [k, A] = g(t ?? null), y = x ? d : k, v = o !== void 0, [I, w] = g(c), r = v ? o : I, j = N(
    (e, L) => {
      x || A(e), a == null || a(e, L);
    },
    [x, a]
  ), $ = N(() => {
    const e = !r;
    v || w(e), i == null || i(e);
  }, [r, v, i]), D = C(
    () => M("nxp-sb", r && "nxp-sb--collapsed", l),
    [r, l]
  ), E = C(() => ({
    "--nxp-sb-width": h,
    "--nxp-sb-col-width": _,
    width: r ? _ : h
  }), [h, _, r]);
  return /* @__PURE__ */ f("aside", { className: D, style: E, "aria-label": "Sidebar navigation", children: [
    b && /* @__PURE__ */ s("div", { className: "nxp-sb__header", children: b }),
    /* @__PURE__ */ s("nav", { className: "nxp-sb__nav", children: /* @__PURE__ */ s("ul", { className: "nxp-sb__list", role: "list", children: n.map((e) => e.type === "divider" ? /* @__PURE__ */ s("li", { className: "nxp-sb__divider", role: "separator", children: !r && e.label && /* @__PURE__ */ s("span", { className: "nxp-sb__section-label", children: e.label }) }, e.id ?? e.label) : /* @__PURE__ */ s(
      m,
      {
        item: e,
        active: y,
        onSelect: j,
        collapsed: r
      },
      e.id
    )) }) }),
    p && /* @__PURE__ */ s("div", { className: "nxp-sb__footer", children: p }),
    u && /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: "nxp-sb__toggle",
        onClick: $,
        "aria-label": r ? "Expand sidebar" : "Collapse sidebar",
        children: /* @__PURE__ */ s(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            className: `transition-transform duration-200 ease-in-out${r ? " rotate-180" : ""}`,
            children: /* @__PURE__ */ s("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      }
    )
  ] });
}
export {
  G as Sidebar,
  G as default
};
