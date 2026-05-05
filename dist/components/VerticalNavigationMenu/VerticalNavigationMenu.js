import { jsxs as _, jsx as e } from "react/jsx-runtime";
import { useState as g, useEffect as y, useCallback as k } from "react";
/* empty css                        */
const C = () => /* @__PURE__ */ e(
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
), A = () => /* @__PURE__ */ e(
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
function b(n, l) {
  return n.key === l ? !0 : Array.isArray(n.children) ? n.children.some((s) => b(s, l)) : !1;
}
function w({ item: n, activeKey: l, onChange: s, depth: o, openGroups: t, toggleGroup: p }) {
  const i = Array.isArray(n.children) && n.children.length > 0, u = l === n.key, d = t.has(n.key), h = i && b(n, l), v = k(
    (a) => {
      n.disabled || (i ? p(n.key) : typeof n.onClick == "function" ? n.onClick(a) : typeof s == "function" && s(n.key));
    },
    [i, n, s, p]
  ), f = k(
    (a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), v(a));
    },
    [v]
  ), x = [
    "nxp-nav__link",
    o > 0 ? "nxp-nav__link--child" : "",
    u || h ? "nxp-nav__link--active" : "",
    n.disabled ? "nxp-nav__link--disabled" : ""
  ].filter(Boolean).join(" "), r = n.href ? "a" : "span", c = n.href ? {
    href: n.href,
    target: n.target || void 0,
    rel: n.target === "_blank" ? "noopener noreferrer" : void 0
  } : {
    role: "button",
    tabIndex: n.disabled ? -1 : 0,
    onKeyDown: f,
    "aria-disabled": n.disabled || void 0
  };
  return (
    /* nxtext_navlink parent <div> */
    /* @__PURE__ */ _("div", { className: `nxp-nav__item-wrap${o > 0 ? " nxp-nav__item-wrap--child" : ""}`, children: [
      /* @__PURE__ */ _(
        r,
        {
          className: x,
          onClick: v,
          "aria-current": u ? "page" : void 0,
          "aria-expanded": i ? d : void 0,
          "aria-haspopup": i ? "true" : void 0,
          ...c,
          children: [
            n.icon && /* @__PURE__ */ e("span", { className: "nxp-nav__icon", "aria-hidden": "true", children: n.icon }),
            /* @__PURE__ */ e("span", { className: "nxp-nav__label", children: n.label }),
            n.badge && /* @__PURE__ */ e("span", { className: "nxp-nav__badge", children: n.badge }),
            i && /* @__PURE__ */ e(
              "span",
              {
                className: `nxp-nav__toggle-icon${d ? " nxp-nav__toggle-icon--open" : ""}`,
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(C, {})
              }
            )
          ]
        }
      ),
      i && /* @__PURE__ */ e(
        "div",
        {
          className: `nxp-nav__children${d ? " nxp-nav__children--open" : ""}`,
          role: "list",
          "aria-label": `${n.label} submenu`,
          children: /* @__PURE__ */ e("div", { className: "nxp-nav__children-inner", children: n.children.map((a) => (
            /* nxtext_nav_dropdown_links */
            /* @__PURE__ */ e("div", { className: "nxp-nav__child-wrap", role: "listitem", children: /* @__PURE__ */ e(
              w,
              {
                item: a,
                activeKey: l,
                onChange: s,
                depth: o + 1,
                openGroups: t,
                toggleGroup: p
              }
            ) }, a.key)
          )) })
        }
      )
    ] })
  );
}
function O({
  menuItems: n = [],
  activeKey: l,
  onChange: s,
  logo: o,
  footer: t,
  theme: p = "light",
  className: i = ""
}) {
  const [u, d] = g(/* @__PURE__ */ new Set()), [h, v] = g(!1);
  y(() => {
    l && d((r) => {
      const c = new Set(r);
      return n.forEach((a) => {
        Array.isArray(a.children) && a.children.some((N) => b(N, l)) && c.add(a.key);
      }), c;
    });
  }, [l]);
  const f = k((r) => {
    d((c) => {
      const a = new Set(c);
      return a.has(r) ? a.delete(r) : a.add(r), a;
    });
  }, []), x = [
    "nxp-nav",
    p === "dark" ? "nxp-nav--dark" : "",
    i
  ].filter(Boolean).join(" ");
  return (
    /* nxtext_navigation_cover */
    /* @__PURE__ */ _("nav", { className: x, "aria-label": "Sidebar navigation", children: [
      o && /* @__PURE__ */ _("div", { className: "nxp-nav__logo-strip", children: [
        /* @__PURE__ */ e("div", { className: "nxp-nav__logo-wrap", children: o }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-nav__mobile-toggle",
            "aria-label": h ? "Close menu" : "Open menu",
            "aria-expanded": h,
            "aria-controls": "nxp-nav-cover",
            onClick: () => v((r) => !r),
            children: /* @__PURE__ */ e(A, {})
          }
        )
      ] }),
      /* @__PURE__ */ _(
        "div",
        {
          id: "nxp-nav-cover",
          className: `nxp-nav__cover${h ? " nxp-nav__cover--open" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { className: "nxp-nav__inner", role: "list", children: n.map((r) => r.type === "divider" ? /* @__PURE__ */ e("div", { className: "nxp-nav__divider", role: "separator" }, r.key) : r.type === "section" ? /* @__PURE__ */ e("div", { className: "nxp-nav__section-label", "aria-hidden": "true", children: r.label }, r.key) : /* @__PURE__ */ e("div", { role: "listitem", children: /* @__PURE__ */ e(
              w,
              {
                item: r,
                activeKey: l,
                onChange: s,
                depth: 0,
                openGroups: u,
                toggleGroup: f
              }
            ) }, r.key)) }),
            t && /* @__PURE__ */ e("div", { className: "nxp-nav__footer", children: t })
          ]
        }
      )
    ] })
  );
}
export {
  O as VerticalNavigationMenu
};
