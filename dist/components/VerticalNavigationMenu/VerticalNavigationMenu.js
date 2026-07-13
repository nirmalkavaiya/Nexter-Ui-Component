import { jsxs as x, jsx as e, Fragment as m } from "react/jsx-runtime";
import { useState as D, useCallback as b, useEffect as F } from "react";
/* empty css                        */
const G = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M5 3L9 7L5 11",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), q = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M3 11H19M3 5H19M3 17H19",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function S(n, r, l) {
  return (l ? l(n, r) : n.key === r) ? !0 : Array.isArray(n.children) ? n.children.some((t) => S(t, r, l)) : !1;
}
function $(n = []) {
  return n.filter((r) => r.visible !== !1).map(
    (r) => Array.isArray(r.children) ? { ...r, children: $(r.children) } : r
  );
}
function z(n, r, l) {
  return typeof l == "function" ? l(n, r) : r === n.key;
}
function A({ item: n, hasChildren: r, isOpen: l }) {
  return /* @__PURE__ */ x(m, { children: [
    n.icon && /* @__PURE__ */ e("span", { className: "nxp-nav__icon", "aria-hidden": "true", children: n.icon }),
    /* @__PURE__ */ e("span", { className: "nxp-nav__label", children: n.label }),
    n.badge && /* @__PURE__ */ e("span", { className: "nxp-nav__badge", children: n.badge }),
    n.suffix && /* @__PURE__ */ e("span", { className: "nxp-nav__suffix", "aria-hidden": "true", children: n.suffix }),
    r && /* @__PURE__ */ e(
      "span",
      {
        className: `nxp-nav__toggle-icon${l ? " nxp-nav__toggle-icon--open" : ""}`,
        "aria-hidden": "true",
        children: /* @__PURE__ */ e(G, {})
      }
    )
  ] });
}
function H({
  item: n,
  activeKey: r,
  onChange: l,
  depth: t,
  openGroups: g,
  toggleGroup: k,
  linkComponent: p,
  isActive: h
}) {
  const i = Array.isArray(n.children) && n.children.length > 0, y = z(n, r, h), N = g.has(n.key), C = i && S(n, r, h), v = b(
    (s) => {
      n.disabled || (typeof n.onClick == "function" && n.onClick(s), typeof l == "function" && l(n.key, n));
    },
    [n, l]
  ), c = b(
    (s) => {
      if (!n.disabled) {
        if (i) {
          k(n.key);
          return;
        }
        v(s);
      }
    },
    [i, n.disabled, n.key, k, v]
  ), I = b(
    (s) => {
      (s.key === "Enter" || s.key === " ") && (s.preventDefault(), c(s));
    },
    [c]
  ), u = [
    "nxp-nav__link",
    t > 0 ? "nxp-nav__link--child" : "",
    y || C ? "nxp-nav__link--active" : "",
    n.disabled ? "nxp-nav__link--disabled" : ""
  ].filter(Boolean).join(" "), _ = {
    "aria-current": y ? "page" : void 0,
    "aria-expanded": i ? N : void 0
  };
  let f;
  return i ? f = /* @__PURE__ */ e(
    "span",
    {
      className: u,
      role: "button",
      tabIndex: n.disabled ? -1 : 0,
      onClick: c,
      onKeyDown: I,
      "aria-disabled": n.disabled || void 0,
      ..._,
      children: /* @__PURE__ */ e(A, { item: n, hasChildren: i, isOpen: N })
    }
  ) : n.to && p ? f = /* @__PURE__ */ e(
    p,
    {
      to: n.to,
      className: u,
      onClick: v,
      ..._,
      children: /* @__PURE__ */ e(A, { item: n, hasChildren: !1, isOpen: !1 })
    }
  ) : n.href ? f = /* @__PURE__ */ e(
    "a",
    {
      href: n.href,
      target: n.target || void 0,
      rel: n.target === "_blank" ? "noopener noreferrer" : void 0,
      className: u,
      onClick: v,
      ..._,
      children: /* @__PURE__ */ e(A, { item: n, hasChildren: !1, isOpen: !1 })
    }
  ) : f = /* @__PURE__ */ e(
    "span",
    {
      className: u,
      role: "button",
      tabIndex: n.disabled ? -1 : 0,
      onClick: c,
      onKeyDown: I,
      "aria-disabled": n.disabled || void 0,
      ..._,
      children: /* @__PURE__ */ e(A, { item: n, hasChildren: !1, isOpen: !1 })
    }
  ), /* @__PURE__ */ x(
    "div",
    {
      className: `nxp-nav__item-wrap${t > 0 ? " nxp-nav__item-wrap--child" : ""}`,
      children: [
        f,
        i && /* @__PURE__ */ e(
          "div",
          {
            className: `nxp-nav__children${N ? " nxp-nav__children--open" : ""}`,
            role: "list",
            "aria-label": `${n.label} submenu`,
            children: /* @__PURE__ */ e("div", { className: "nxp-nav__children-inner", children: n.children.map((s) => /* @__PURE__ */ e("div", { className: "nxp-nav__child-wrap", role: "listitem", children: /* @__PURE__ */ e(
              H,
              {
                item: s,
                activeKey: r,
                onChange: l,
                depth: t + 1,
                openGroups: g,
                toggleGroup: k,
                linkComponent: p,
                isActive: h
              }
            ) }, s.key)) })
          }
        )
      ]
    }
  );
}
function T({
  menuItems: n = [],
  activeKey: r,
  defaultActiveKey: l,
  onChange: t,
  openGroups: g,
  defaultOpenGroups: k = [],
  onOpenGroupsChange: p,
  logo: h,
  headerBadge: i,
  footer: y,
  linkComponent: N,
  isActive: C,
  mobileOpen: v,
  onMobileOpenChange: c,
  theme: I = "light",
  className: u = ""
}) {
  const [_, f] = D(
    () => new Set(k)
  ), [s, E] = D(!1), L = g ?? _, w = v ?? s, M = b(
    (a) => {
      const o = typeof a == "function" ? a(L) : a;
      p ? p(o) : f(o);
    },
    [L, p]
  ), B = b(
    (a) => {
      const o = typeof a == "function" ? a(w) : a;
      c ? c(o) : E(o);
    },
    [w, c]
  ), O = r ?? l, j = $(n);
  F(() => {
    O && M((a) => {
      const o = new Set(a);
      return j.forEach((d) => {
        d.defaultOpen && o.add(d.key), Array.isArray(d.children) && d.children.some(
          (W) => S(W, O, C)
        ) && o.add(d.key);
      }), o;
    });
  }, [O]);
  const P = b(
    (a) => {
      M((o) => {
        const d = new Set(o);
        return d.has(a) ? d.delete(a) : d.add(a), d;
      });
    },
    [M]
  ), V = [
    "nxp-nav",
    I === "dark" ? "nxp-nav--dark" : "",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ x("nav", { className: V, "aria-label": "Sidebar navigation", children: [
    (h || i) && /* @__PURE__ */ x("div", { className: "nxp-nav__logo-strip", children: [
      h && /* @__PURE__ */ e("div", { className: "nxp-nav__logo-wrap", children: h }),
      /* @__PURE__ */ x("div", { className: "nxp-nav__mobile-menu", children: [
        i && /* @__PURE__ */ e("div", { className: "nxp-nav__header-badge", children: i }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-nav__mobile-toggle",
            "aria-label": w ? "Close menu" : "Open menu",
            "aria-expanded": w,
            "aria-controls": "nxp-nav-cover",
            onClick: () => B((a) => !a),
            children: /* @__PURE__ */ e(q, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ x(
      "div",
      {
        id: "nxp-nav-cover",
        className: `nxp-nav__cover${w ? " nxp-nav__cover--open" : ""}`,
        children: [
          /* @__PURE__ */ e("div", { className: "nxp-nav__inner", children: j.map((a) => a.type === "divider" ? /* @__PURE__ */ e("div", { className: "nxp-nav__divider", role: "separator" }, a.key) : a.type === "section" ? /* @__PURE__ */ e("div", { className: "nxp-nav__section-label", "aria-hidden": "true", children: a.label }, a.key) : /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            H,
            {
              item: a,
              activeKey: O,
              onChange: t,
              depth: 0,
              openGroups: L,
              toggleGroup: P,
              linkComponent: N,
              isActive: C
            }
          ) }, a.key)) }),
          y && /* @__PURE__ */ e("div", { className: "nxp-nav__footer", children: y })
        ]
      }
    )
  ] });
}
export {
  T as VerticalNavigationMenu,
  $ as filterVisibleMenuItems
};
