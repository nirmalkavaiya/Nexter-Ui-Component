import { jsxs as b, jsx as l } from "react/jsx-runtime";
import { useState as x, useCallback as _ } from "react";
function v({ page: s, totalPages: e = 1, onChange: i, showPrevNext: c = !0, className: p = "" }) {
  const o = s !== void 0, [m, u] = x(1), n = o ? s : m, r = _(
    (t) => {
      const a = Math.min(e, Math.max(1, t));
      o || u(a), i && i(a);
    },
    [o, i, e]
  ), d = Array.from({ length: e }, (t, a) => a + 1);
  return /* @__PURE__ */ b("nav", { className: `nxp-pagination ${p}`, "aria-label": "Pagination", children: [
    c && /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: () => r(n - 1),
        disabled: n === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ),
    d.map((t) => /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: `nxp-pagination__item${n === t ? " is-active" : ""}`,
        onClick: () => r(t),
        "aria-current": n === t ? "page" : void 0,
        children: t
      },
      t
    )),
    c && /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: () => r(n + 1),
        disabled: n === e,
        "aria-label": "Next page",
        children: "›"
      }
    )
  ] });
}
export {
  v as Pagination,
  v as default
};
