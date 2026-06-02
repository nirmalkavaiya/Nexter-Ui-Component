import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { useState as f, useEffect as B } from "react";
import { ChevronDownIcon as D } from "../../lib/icons.js";
const E = () => /* @__PURE__ */ e(D, { size: 12 });
function N({
  item: n,
  active: d,
  onSelect: t,
  collapsed: a,
  depth: c = 0
}) {
  const o = Array.isArray(n.children) && n.children.length > 0, i = o && n.children.some((r) => r.id === d), [h, b] = f(i);
  B(() => {
    i && b(!0);
  }, [i]);
  const p = n.id === d;
  function _(r) {
    r.preventDefault(), o && !a ? b((u) => !u) : t == null || t(n.id, n);
  }
  const x = [
    "nxp-sb__item",
    c > 0 ? "nxp-sb__item--child" : "",
    p ? "nxp-sb__item--active" : "",
    i ? "nxp-sb__item--active-parent" : "",
    n.disabled ? "nxp-sb__item--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v("li", { children: [
    /* @__PURE__ */ v(
      "a",
      {
        href: n.href ?? "#",
        className: x,
        onClick: _,
        "aria-current": p ? "page" : void 0,
        "aria-disabled": n.disabled || void 0,
        tabIndex: n.disabled ? -1 : 0,
        title: a && typeof n.label == "string" ? n.label : void 0,
        children: [
          n.icon && /* @__PURE__ */ e("span", { className: "nxp-sb__icon", "aria-hidden": "true", children: n.icon }),
          !a && /* @__PURE__ */ e("span", { className: "nxp-sb__label", children: n.label }),
          !a && n.badge != null && /* @__PURE__ */ e("span", { className: `nxp-sb__badge${n.badgeVariant ? ` nxp-sb__badge--${n.badgeVariant}` : ""}`, children: n.badge }),
          !a && o && /* @__PURE__ */ e("span", { className: `nxp-sb__chevron${h ? " nxp-sb__chevron--open" : ""}`, children: /* @__PURE__ */ e(E, {}) })
        ]
      }
    ),
    o && !a && h && /* @__PURE__ */ e("ul", { className: "nxp-sb__sub", role: "list", children: n.children.map((r) => /* @__PURE__ */ e(
      N,
      {
        item: r,
        active: d,
        onSelect: t,
        collapsed: a,
        depth: c + 1
      },
      r.id
    )) })
  ] });
}
function P({
  items: n = [],
  active: d,
  defaultActive: t,
  onSelect: a,
  collapsed: c,
  defaultCollapsed: o = !1,
  onCollapse: i,
  collapsible: h = !0,
  header: b,
  footer: p,
  width: _ = "220px",
  collapsedWidth: x = "56px",
  className: r = ""
}) {
  const u = d !== void 0, [C, k] = f(t ?? null), m = u ? d : C, g = c !== void 0, [y, A] = f(o), l = g ? c : y;
  function w(s, $) {
    u || k(s), a == null || a(s, $);
  }
  function I() {
    const s = !l;
    g || A(s), i == null || i(s);
  }
  const j = [
    "nxp-sb",
    l ? "nxp-sb--collapsed" : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v("aside", { className: j, style: {
    "--nxp-sb-width": _,
    "--nxp-sb-col-width": x,
    width: l ? x : _
  }, "aria-label": "Sidebar navigation", children: [
    b && /* @__PURE__ */ e("div", { className: "nxp-sb__header", children: b }),
    /* @__PURE__ */ e("nav", { className: "nxp-sb__nav", children: /* @__PURE__ */ e("ul", { className: "nxp-sb__list", role: "list", children: n.map((s) => s.type === "divider" ? /* @__PURE__ */ e("li", { className: "nxp-sb__divider", role: "separator", children: !l && s.label && /* @__PURE__ */ e("span", { className: "nxp-sb__section-label", children: s.label }) }, s.id ?? s.label) : /* @__PURE__ */ e(
      N,
      {
        item: s,
        active: m,
        onSelect: w,
        collapsed: l
      },
      s.id
    )) }) }),
    p && /* @__PURE__ */ e("div", { className: "nxp-sb__footer", children: p }),
    h && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "nxp-sb__toggle",
        onClick: I,
        "aria-label": l ? "Expand sidebar" : "Collapse sidebar",
        children: /* @__PURE__ */ e(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            className: `transition-transform duration-200 ease-in-out${l ? " rotate-180" : ""}`,
            children: /* @__PURE__ */ e("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      }
    )
  ] });
}
export {
  P as Sidebar,
  P as default
};
