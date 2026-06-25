import { jsxs as a, jsx as n } from "react/jsx-runtime";
import "react";
function m({
  columns: l = [],
  rows: d = [],
  striped: s = !1,
  actions: t,
  actionsLabel: c = "Actions",
  thClassName: r = "",
  className: p = ""
}) {
  return /* @__PURE__ */ a("table", { className: `nxp-table${s ? " nxp-table--striped" : ""} ${p}`, children: [
    /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ a("tr", { children: [
      l.map((e) => /* @__PURE__ */ n(
        "th",
        {
          scope: "col",
          className: `nxp-title-label${e.numeric ? " nxp-table__num" : ""}${r ? " " + r : ""}`,
          "aria-sort": e.sortDir === "asc" ? "ascending" : e.sortDir === "desc" ? "descending" : e.sortDir === "none" ? "none" : void 0,
          children: e.label
        },
        e.key
      )),
      t && /* @__PURE__ */ n("th", { scope: "col", className: `nxp-title-label nxp-text-right${r ? " " + r : ""}`, children: c })
    ] }) }),
    /* @__PURE__ */ n("tbody", { children: d.map((e, x) => /* @__PURE__ */ a("tr", { children: [
      l.map((i) => /* @__PURE__ */ n("td", { className: i.numeric ? "nxp-table__num" : "", children: e[i.key] }, i.key)),
      t && /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n("div", { className: "nxp-table__actions", children: t(e) }) })
    ] }, x)) })
  ] });
}
export {
  m as Table,
  m as default
};
