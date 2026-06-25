import { jsxs as p, jsx as t } from "react/jsx-runtime";
import k, { useState as x, useCallback as b, useMemo as T } from "react";
function C({
  variant: a = "pill",
  tabs: s = [],
  activeTab: r,
  onTabChange: n,
  defaultTab: m,
  className: u = ""
}) {
  const c = r !== void 0, [_, $] = x(m || s[0] && s[0].id), i = c ? r : _, [v, f] = x({}), N = b(
    (e) => {
      c || $(e), n && n(e);
    },
    [c, n]
  ), h = b((e, l) => {
    f((j) => ({ ...j, [e]: l }));
  }, []), S = a !== "pill" ? ` nxp-tabs--${a}` : "", o = a === "vertical", d = T(
    () => s.find((e) => e.id === i),
    [s, i]
  );
  return /* @__PURE__ */ p("div", { className: `nxp-tabs${S} ${u}`, role: "tablist", children: [
    /* @__PURE__ */ t("div", { className: "nxp-tabs__list", children: s.map((e) => /* @__PURE__ */ p(k.Fragment, { children: [
      /* @__PURE__ */ t(
        "button",
        {
          id: `nxp-tab-${e.id}`,
          className: `nxp-tabs__tab${i === e.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": i === e.id,
          "aria-controls": `nxp-panel-${e.id}`,
          onClick: () => N(e.id),
          children: e.label
        }
      ),
      o && e.subTabs && i === e.id && /* @__PURE__ */ t("div", { className: "nxp-tabs__sub-list", children: e.subTabs.map((l) => /* @__PURE__ */ t(
        "button",
        {
          className: `nxp-tabs__sub${v[e.id] === l.id ? " is-active" : ""}`,
          onClick: () => h(e.id, l.id),
          children: l.label
        },
        l.id
      )) })
    ] }, e.id)) }),
    d && d.content && /* @__PURE__ */ t(
      "div",
      {
        id: `nxp-panel-${i}`,
        className: `nxp-tabs__panel${o ? " nxp-tabs__content" : ""}`,
        role: "tabpanel",
        "aria-labelledby": `nxp-tab-${i}`,
        children: d.content
      }
    )
  ] });
}
export {
  C as Tabs,
  C as default
};
