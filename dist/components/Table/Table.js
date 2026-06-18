import { jsxs as a, jsx as e } from "react/jsx-runtime";
import "react";
function s({
  columns: i = [],
  rows: d = [],
  striped: p = !1,
  actions: n,
  actionsLabel: c = "Actions",
  thClassName: l = "",
  className: x = ""
}) {
  return /* @__PURE__ */ a("table", { className: `nxp-table${p ? " nxp-table--striped" : ""} ${x}`, children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ a("tr", { children: [
      i.map((t) => /* @__PURE__ */ e(
        "th",
        {
          className: `nxp-title-label${t.numeric ? " nxp-table__num" : ""}${l ? " " + l : ""}`,
          children: t.label
        },
        t.key
      )),
      n && /* @__PURE__ */ e("th", { className: `nxp-title-label nxp-text-right${l ? " " + l : ""}`, children: c })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: d.map((t, b) => /* @__PURE__ */ a("tr", { children: [
      i.map((r) => /* @__PURE__ */ e("td", { className: r.numeric ? "nxp-table__num" : "", children: t[r.key] }, r.key)),
      n && /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("div", { className: "nxp-table__actions", children: n(t) }) })
    ] }, b)) })
  ] });
}
export {
  s as Table,
  s as default
};
