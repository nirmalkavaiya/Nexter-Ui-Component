import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { useState as f, useEffect as B } from "react";
const E = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function N({
  item: n,
  active: d,
  onSelect: t,
  collapsed: a,
  depth: c = 0
}) {
  const o = Array.isArray(n.children) && n.children.length > 0, i = o && n.children.some((r) => r.id === d), [p, b] = f(i);
  B(() => {
    i && b(!0);
  }, [i]);
  const h = n.id === d;
  function _(r) {
    r.preventDefault(), o && !a ? b((u) => !u) : t == null || t(n.id, n);
  }
  const x = [
    "nxp-sb__item",
    c > 0 ? "nxp-sb__item--child" : "",
    h ? "nxp-sb__item--active" : "",
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
        "aria-current": h ? "page" : void 0,
        "aria-disabled": n.disabled || void 0,
        tabIndex: n.disabled ? -1 : 0,
        title: a && typeof n.label == "string" ? n.label : void 0,
        children: [
          n.icon && /* @__PURE__ */ e("span", { className: "nxp-sb__icon", "aria-hidden": "true", children: n.icon }),
          !a && /* @__PURE__ */ e("span", { className: "nxp-sb__label", children: n.label }),
          !a && n.badge != null && /* @__PURE__ */ e("span", { className: `nxp-sb__badge${n.badgeVariant ? ` nxp-sb__badge--${n.badgeVariant}` : ""}`, children: n.badge }),
          !a && o && /* @__PURE__ */ e("span", { className: `nxp-sb__chevron${p ? " nxp-sb__chevron--open" : ""}`, children: /* @__PURE__ */ e(E, {}) })
        ]
      }
    ),
    o && !a && p && /* @__PURE__ */ e("ul", { className: "nxp-sb__sub", role: "list", children: n.children.map((r) => /* @__PURE__ */ e(
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
function V({
  items: n = [],
  active: d,
  defaultActive: t,
  onSelect: a,
  collapsed: c,
  defaultCollapsed: o = !1,
  onCollapse: i,
  collapsible: p = !0,
  header: b,
  footer: h,
  width: _ = "220px",
  collapsedWidth: x = "56px",
  className: r = ""
}) {
  const u = d !== void 0, [k, C] = f(t ?? null), y = u ? d : k, g = c !== void 0, [w, A] = f(o), l = g ? c : w;
  function j(s, L) {
    u || C(s), a == null || a(s, L);
  }
  function m() {
    const s = !l;
    g || A(s), i == null || i(s);
  }
  const I = [
    "nxp-sb",
    l ? "nxp-sb--collapsed" : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v("aside", { className: I, style: {
    "--nxp-sb-width": _,
    "--nxp-sb-col-width": x,
    width: l ? x : _
  }, "aria-label": "Sidebar navigation", children: [
    b && /* @__PURE__ */ e("div", { className: "nxp-sb__header", children: b }),
    /* @__PURE__ */ e("nav", { className: "nxp-sb__nav", children: /* @__PURE__ */ e("ul", { className: "nxp-sb__list", role: "list", children: n.map((s) => s.type === "divider" ? /* @__PURE__ */ e("li", { className: "nxp-sb__divider", role: "separator", children: !l && s.label && /* @__PURE__ */ e("span", { className: "nxp-sb__section-label", children: s.label }) }, s.id ?? s.label) : /* @__PURE__ */ e(
      N,
      {
        item: s,
        active: y,
        onSelect: j,
        collapsed: l
      },
      s.id
    )) }) }),
    h && /* @__PURE__ */ e("div", { className: "nxp-sb__footer", children: h }),
    p && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "nxp-sb__toggle",
        onClick: m,
        "aria-label": l ? "Expand sidebar" : "Collapse sidebar",
        children: /* @__PURE__ */ e(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            style: { transform: l ? "rotate(180deg)" : "none", transition: "transform 200ms ease" },
            children: /* @__PURE__ */ e("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      }
    )
  ] });
}
export {
  V as Sidebar,
  V as default
};
