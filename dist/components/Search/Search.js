import { jsxs as d, jsx as n } from "react/jsx-runtime";
import { useState as h, useCallback as m } from "react";
function _({ value: r, onChange: e, placeholder: t = "Search…", onClear: x, className: c = "" }) {
  const a = r !== void 0, [i, l] = h(""), o = a ? r : i, u = m(
    (p) => {
      const s = p.target.value;
      a || l(s), e && e(s);
    },
    [a, e]
  );
  return /* @__PURE__ */ d("div", { className: `nxp-search ${c}`, children: [
    /* @__PURE__ */ n("span", { className: "nxp-search__icon", "aria-hidden": "true", children: "⌕" }),
    /* @__PURE__ */ n(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: o,
        onChange: u,
        placeholder: t,
        "aria-label": t
      }
    )
  ] });
}
export {
  _ as Search,
  _ as default
};
