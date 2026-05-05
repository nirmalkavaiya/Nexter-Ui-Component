import { jsx as e, jsxs as r } from "react/jsx-runtime";
import "react";
function p({ columns: n = [], rows: i = [], striped: d = !1, actions: t, className: s = "" }) {
  return /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ r("table", { className: `nxp-table${d ? " nxp-table--striped" : ""} ${s}`, children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { children: [
      n.map((a) => /* @__PURE__ */ e("th", { className: a.numeric ? "nxp-table__num" : "", children: a.label }, a.key)),
      t && /* @__PURE__ */ e("th", { className: "text-right", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: i.map((a, c) => /* @__PURE__ */ r("tr", { children: [
      n.map((l) => /* @__PURE__ */ e("td", { className: l.numeric ? "nxp-table__num" : "", children: a[l.key] }, l.key)),
      t && /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("div", { className: "nxp-table__actions", children: t(a) }) })
    ] }, c)) })
  ] }) });
}
export {
  p as Table,
  p as default
};
