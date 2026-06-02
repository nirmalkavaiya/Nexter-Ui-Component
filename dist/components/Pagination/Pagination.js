import { jsxs as f, jsx as l } from "react/jsx-runtime";
import { useState as v, useCallback as s, useMemo as g } from "react";
function k({ page: c, totalPages: i = 1, onChange: a, showPrevNext: p = !0, className: m = "" }) {
  const r = c !== void 0, [u, d] = v(1), n = r ? c : u, e = s(
    (t) => {
      const o = Math.min(i, Math.max(1, t));
      r || d(o), a && a(o);
    },
    [r, a, i]
  ), b = g(
    () => Array.from({ length: i }, (t, o) => o + 1),
    [i]
  ), x = s(() => e(n - 1), [e, n]), _ = s(() => e(n + 1), [e, n]);
  return /* @__PURE__ */ f("nav", { className: `nxp-pagination ${m}`, "aria-label": "Pagination", children: [
    p && /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: x,
        disabled: n === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ),
    b.map((t) => /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: `nxp-pagination__item${n === t ? " is-active" : ""}`,
        onClick: () => e(t),
        "aria-current": n === t ? "page" : void 0,
        children: t
      },
      t
    )),
    p && /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: _,
        disabled: n === i,
        "aria-label": "Next page",
        children: "›"
      }
    )
  ] });
}
export {
  k as Pagination,
  k as default
};
