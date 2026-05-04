import { jsxs as p, jsx as i } from "react/jsx-runtime";
import j, { useState as m, useCallback as k } from "react";
function A({
  variant: c = "pill",
  tabs: l = [],
  activeTab: r,
  onTabChange: e,
  defaultTab: _,
  className: b = ""
}) {
  const a = r !== void 0, [u, x] = m(_ || l[0] && l[0].id), t = a ? r : u, [v, f] = m({}), N = k(
    (s) => {
      a || x(s), e && e(s);
    },
    [a, e]
  ), $ = c !== "pill" ? ` nxp-tabs--${c}` : "", o = c === "vertical", d = l.find((s) => s.id === t);
  return /* @__PURE__ */ p("div", { className: `nxp-tabs${$} ${b}`, role: "tablist", children: [
    /* @__PURE__ */ i("div", { className: "nxp-tabs__list", children: l.map((s) => /* @__PURE__ */ p(j.Fragment, { children: [
      /* @__PURE__ */ i(
        "button",
        {
          className: `nxp-tabs__tab${t === s.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": t === s.id,
          onClick: () => N(s.id),
          children: s.label
        }
      ),
      o && s.subTabs && t === s.id && /* @__PURE__ */ i("div", { className: "nxp-tabs__sub-list", children: s.subTabs.map((n) => /* @__PURE__ */ i(
        "button",
        {
          className: `nxp-tabs__sub${v[s.id] === n.id ? " is-active" : ""}`,
          onClick: () => f((h) => ({ ...h, [s.id]: n.id })),
          children: n.label
        },
        n.id
      )) })
    ] }, s.id)) }),
    d && d.content && /* @__PURE__ */ i("div", { className: `nxp-tabs__panel${o ? " nxp-tabs__content" : ""}`, role: "tabpanel", children: d.content })
  ] });
}
export {
  A as Tabs,
  A as default
};
