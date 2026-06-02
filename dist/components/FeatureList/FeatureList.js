import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { memo as N } from "react";
import { cn as h } from "../../lib/utils.js";
const z = ({ size: i = 16 }) => /* @__PURE__ */ v(
  "svg",
  {
    width: i,
    height: i,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ r("circle", { cx: "8", cy: "8", r: "8", fill: "var(--nxpl-icon-bg, var(--nxp-color-primary))" }),
      /* @__PURE__ */ r(
        "path",
        {
          d: "M4.75 8.25 7 10.5l4.25-4.25",
          stroke: "var(--nxpl-icon-check, #ffffff)",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
function C({
  /* data */
  items: i = [],
  /* icon */
  icon: c,
  /* layout */
  layout: l = "vertical",
  /* sizing */
  iconSize: a = 16,
  /* spacing */
  iconTextGap: f,
  itemGap: n,
  layoutGap: d,
  /* alignment */
  align: p = "start",
  /* behaviour */
  wrap: m = !0,
  divider: g = !1,
  fullWidth: k = !1,
  /* passthrough */
  className: y = "",
  style: x,
  textClassName: L = ""
}) {
  const _ = h(
    "nxp-feature-list",
    `nxp-feature-list--${l}`,
    p !== "start" ? `nxp-feature-list--align-${p}` : "",
    l === "horizontal" && m ? "nxp-feature-list--wrap" : "",
    g ? "nxp-feature-list--divider" : "",
    k ? "nxp-feature-list--full-width" : "",
    y
  ), o = (e) => typeof e == "number" ? `${e}px` : e, t = {};
  a !== 16 && (t["--nxpl-icon-size"] = o(a)), f !== void 0 && (t["--nxpl-icon-text-gap"] = o(f)), n !== void 0 && (t["--nxpl-item-gap"] = o(n));
  const u = d !== void 0 ? d : l === "horizontal" && n !== void 0 ? n : void 0;
  u !== void 0 && (t["--nxpl-layout-gap"] = o(u));
  const b = x || Object.keys(t).length ? { ...t, ...x } : void 0;
  return /* @__PURE__ */ r(
    "ul",
    {
      className: _,
      style: b,
      role: "list",
      children: i.map((e, j) => {
        const w = typeof e == "string" ? e : e.text;
        let s;
        return typeof e == "object" && "icon" in e ? s = e.icon : c !== void 0 ? s = c : s = /* @__PURE__ */ r(z, { size: a }), /* @__PURE__ */ v("li", { className: "nxp-feature-list__item", children: [
          s != null && /* @__PURE__ */ r("span", { className: "nxp-feature-list__icon", "aria-hidden": "true", children: s }),
          /* @__PURE__ */ r("span", { className: h("nxp-feature-list__text", L), children: w })
        ] }, j);
      })
    }
  );
}
const M = N(C);
export {
  M as FeatureList,
  M as default
};
