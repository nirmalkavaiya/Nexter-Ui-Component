import { jsx as e, jsxs as n } from "react/jsx-runtime";
import "react";
function p({ columns: r = [], rows: i = [], striped: d = !1, actions: l, className: h = "" }) {
  return /* @__PURE__ */ e("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ n("table", { className: `nxp-table${d ? " nxp-table--striped" : ""} ${h}`, children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ n("tr", { children: [
      r.map((t) => /* @__PURE__ */ e("th", { className: t.numeric ? "nxp-table__num" : "", children: t.label }, t.key)),
      l && /* @__PURE__ */ e("th", { style: { textAlign: "right" }, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: i.map((t, s) => /* @__PURE__ */ n("tr", { children: [
      r.map((a) => /* @__PURE__ */ e("td", { className: a.numeric ? "nxp-table__num" : "", children: t[a.key] }, a.key)),
      l && /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("div", { className: "nxp-table__actions", children: l(t) }) })
    ] }, s)) })
  ] }) });
}
export {
  p as Table,
  p as default
};
