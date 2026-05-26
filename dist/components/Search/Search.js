import { jsxs as w, jsx as e } from "react/jsx-runtime";
import { useState as x, useCallback as l } from "react";
const k = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M12 4L4 12M4 4L12 12",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function g({ value: n, onChange: t, placeholder: a = "Search…", onClear: s, className: h = "" }) {
  const r = n !== void 0, [d, i] = x(""), o = r ? n : d, u = l(
    (m) => {
      const c = m.target.value;
      r || i(c), t && t(c);
    },
    [r, t]
  ), p = l(() => {
    r || i(""), t && t(""), s && s();
  }, [r, t, s]);
  return /* @__PURE__ */ w("div", { className: `nxp-search ${h}`, children: [
    /* @__PURE__ */ e("span", { className: "nxp-search__icon", "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", viewBox: "0 0 16 17", children: /* @__PURE__ */ e("path", { stroke: "#727272", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "m14 14.5-3.4647-3.4646m0 0c.9378-.9378 1.4646-2.20957 1.4646-3.5357s-.5268-2.59795-1.4646-3.53567c-.93768-.93771-2.2095-1.46452-3.53563-1.46452S4.40172 3.02632 3.464 3.96403c-.93771.93772-1.46452 2.20954-1.46452 3.53567s.52681 2.5979 1.46452 3.5357c.93772.9377 2.20954 1.4645 3.53567 1.4645s2.59795-.5268 3.53563-1.4645Z" }) }) }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: o,
        onChange: u,
        placeholder: a,
        "aria-label": a
      }
    ),
    !!o && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "nxp-search__clear",
        "aria-label": "Clear search",
        onClick: p,
        children: /* @__PURE__ */ e(k, {})
      }
    )
  ] });
}
export {
  g as Search,
  g as default
};
