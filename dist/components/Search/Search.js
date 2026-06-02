import { jsxs as x, jsx as t } from "react/jsx-runtime";
import { memo as v, useState as k, useCallback as h, useMemo as w } from "react";
import { cn as S } from "../../lib/utils.js";
import { CloseIcon as _ } from "../../lib/icons.js";
function b({ value: a, onChange: e, placeholder: c = "Search…", onClear: r, className: n = "" }) {
  const s = a !== void 0, [m, o] = k(""), i = s ? a : m, d = h(
    (f) => {
      const l = f.target.value;
      s || o(l), e && e(l);
    },
    [s, e]
  ), p = h(() => {
    s || o(""), e && e(""), r && r();
  }, [s, e, r]), u = w(() => S("nxp-search", n), [n]);
  return /* @__PURE__ */ x("div", { className: u, children: [
    /* @__PURE__ */ t("span", { className: "nxp-search__icon", "aria-hidden": "true", children: /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", viewBox: "0 0 16 17", children: /* @__PURE__ */ t("path", { stroke: "#727272", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m14 14.5-3.4647-3.4646m0 0c.9378-.9378 1.4646-2.20957 1.4646-3.5357s-.5268-2.59795-1.4646-3.53567c-.93768-.93771-2.2095-1.46452-3.53563-1.46452S4.40172 3.02632 3.464 3.96403c-.93771.93772-1.46452 2.20954-1.46452 3.53567s.52681 2.5979 1.46452 3.5357c.93772.9377 2.20954 1.4645 3.53567 1.4645s2.59795-.5268 3.53563-1.4645Z" }) }) }),
    /* @__PURE__ */ t(
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
    !!i && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "nxp-search__clear",
        "aria-label": "Clear search",
        onClick: p,
        children: /* @__PURE__ */ t(_, {})
      }
    )
  ] });
}
const B = v(b);
export {
  B as Search,
  B as default
};
