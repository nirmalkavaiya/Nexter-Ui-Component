import { jsxs as b, jsx as i } from "react/jsx-runtime";
import { useState as k, useCallback as l, useMemo as v } from "react";
function f({ page: c, totalPages: e = 1, onChange: o, showPrevNext: p = !0, className: d = "" }) {
  const s = c !== void 0, [u, m] = k(1), n = s ? c : u, r = l(
    (t) => {
      const a = Math.min(e, Math.max(1, t));
      s || m(a), o && o(a);
    },
    [s, o, e]
  ), h = v(
    () => Array.from({ length: e }, (t, a) => a + 1),
    [e]
  ), x = l(() => r(n - 1), [r, n]), g = l(() => r(n + 1), [r, n]);
  return /* @__PURE__ */ b("nav", { className: `nxp-pagination nxp-sm-flex-wrap ${d}`, "aria-label": "Pagination", children: [
    p && /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: x,
        disabled: n === 1,
        "aria-label": "Previous page",
        children: /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ i("polyline", { points: "15 18 9 12 15 6" }) })
      }
    ),
    h.map((t) => /* @__PURE__ */ i(
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
    p && /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: g,
        disabled: n === e,
        "aria-label": "Next page",
        children: /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ i("polyline", { points: "9 18 15 12 9 6" }) })
      }
    )
  ] });
}
export {
  f as Pagination,
  f as default
};
