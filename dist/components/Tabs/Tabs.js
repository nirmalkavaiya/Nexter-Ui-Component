import { jsxs as p, jsx as n } from "react/jsx-runtime";
import k, { useState as m, useCallback as u, useMemo as T } from "react";
function F({
  variant: c = "pill",
  tabs: i = [],
  activeTab: o,
  onTabChange: l,
  defaultTab: b,
  className: _ = ""
}) {
  const a = o !== void 0, [x, v] = m(b || i[0] && i[0].id), t = a ? o : x, [f, N] = m({}), $ = u(
    (s) => {
      a || v(s), l && l(s);
    },
    [a, l]
  ), h = u((s, e) => {
    N((j) => ({ ...j, [s]: e }));
  }, []), S = c !== "pill" ? ` nxp-tabs--${c}` : "", r = c === "vertical", d = T(
    () => i.find((s) => s.id === t),
    [i, t]
  );
  return /* @__PURE__ */ p("div", { className: `nxp-tabs${S} ${_}`, role: "tablist", children: [
    /* @__PURE__ */ n("div", { className: "nxp-tabs__list", children: i.map((s) => /* @__PURE__ */ p(k.Fragment, { children: [
      /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__tab${t === s.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": t === s.id,
          onClick: () => $(s.id),
          children: s.label
        }
      ),
      r && s.subTabs && t === s.id && /* @__PURE__ */ n("div", { className: "nxp-tabs__sub-list", children: s.subTabs.map((e) => /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__sub${f[s.id] === e.id ? " is-active" : ""}`,
          onClick: () => h(s.id, e.id),
          children: e.label
        },
        e.id
      )) })
    ] }, s.id)) }),
    d && d.content && /* @__PURE__ */ n("div", { className: `nxp-tabs__panel${r ? " nxp-tabs__content" : ""}`, role: "tabpanel", children: d.content })
  ] });
}
export {
  F as Tabs,
  F as default
};
