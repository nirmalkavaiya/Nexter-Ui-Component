import { jsxs as x, jsx as s } from "react/jsx-runtime";
import { useState as f, useCallback as u } from "react";
function v({ value: r, onChange: a, placeholder: c = "Search…", onClear: t, className: o = "" }) {
  const e = r !== void 0, [p, n] = f(""), i = e ? r : p, d = u(
    (m) => {
      const l = m.target.value;
      e || n(l), a && a(l);
    },
    [e, a]
  ), h = u(() => {
    e || n(""), a && a(""), t && t();
  }, [e, a, t]);
  return /* @__PURE__ */ x("div", { className: `nxp-search ${o}`, children: [
    /* @__PURE__ */ s("span", { className: "nxp-search__icon", "aria-hidden": "true", children: "⌕" }),
    /* @__PURE__ */ s(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: i,
        onChange: d,
        placeholder: c,
        "aria-label": c
      }
    ),
    i && t && /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: "nxp-search__clear",
        "aria-label": "Clear search",
        onClick: h,
        children: "×"
      }
    )
  ] });
}
export {
  v as Search,
  v as default
};
