import { jsx as e, jsxs as r } from "react/jsx-runtime";
import "react";
function s({
  columns: i = [],
  rows: d = [],
  striped: p = !1,
  actions: t,
  actionsLabel: c = "Actions",
  thClassName: n = "",
  className: x = ""
}) {
  return /* @__PURE__ */ e("div", { className: "nxp-overflow-x-auto", children: /* @__PURE__ */ r("table", { className: `nxp-table${p ? " nxp-table--striped" : ""} ${x}`, children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { children: [
      i.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: `nxp-title-label${l.numeric ? " nxp-table__num" : ""}${n ? " " + n : ""}`,
          children: l.label
        },
        l.key
      )),
      t && /* @__PURE__ */ e("th", { className: `nxp-title-label nxp-text-right${n ? " " + n : ""}`, children: c })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: d.map((l, h) => /* @__PURE__ */ r("tr", { children: [
      i.map((a) => /* @__PURE__ */ e("td", { className: a.numeric ? "nxp-table__num" : "", children: l[a.key] }, a.key)),
      t && /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("div", { className: "nxp-table__actions", children: t(l) }) })
    ] }, h)) })
  ] }) });
}
export {
  s as Table,
  s as default
};
