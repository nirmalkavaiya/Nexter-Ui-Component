import { jsx as s, jsxs as v } from "react/jsx-runtime";
import "react";
import { cn as h } from "../../lib/utils.js";
const N = ({ size: i = 16 }) => /* @__PURE__ */ v(
  "svg",
  {
    width: i,
    height: i,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ s("circle", { cx: "8", cy: "8", r: "8", fill: "var(--nxpl-icon-bg, var(--nxp-color-primary))" }),
      /* @__PURE__ */ s(
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
function I({
  /* data */
  items: i = [],
  /* icon */
  icon: c,
  /* layout */
  layout: o = "vertical",
  /* sizing */
  iconSize: a = 16,
  /* spacing */
  iconTextGap: f,
  itemGap: n,
  layoutGap: d,
  /* alignment */
  align: p = "start",
  /* behaviour */
  wrap: g = !0,
  divider: k = !1,
  fullWidth: m = !1,
  /* passthrough */
  className: y = "",
  style: x,
  textClassName: _ = ""
}) {
  const b = h(
    "nxp-feature-list",
    `nxp-feature-list--${o}`,
    p !== "start" ? `nxp-feature-list--align-${p}` : "",
    o === "horizontal" && g ? "nxp-feature-list--wrap" : "",
    k ? "nxp-feature-list--divider" : "",
    m ? "nxp-feature-list--full-width" : "",
    y
  ), l = (e) => typeof e == "number" ? `${e}px` : e, t = {};
  a !== 16 && (t["--nxpl-icon-size"] = l(a)), f !== void 0 && (t["--nxpl-icon-text-gap"] = l(f)), n !== void 0 && (t["--nxpl-item-gap"] = l(n));
  const u = d !== void 0 ? d : o === "horizontal" && n !== void 0 ? n : void 0;
  u !== void 0 && (t["--nxpl-layout-gap"] = l(u));
  const j = x || Object.keys(t).length ? { ...t, ...x } : void 0;
  return /* @__PURE__ */ s(
    "ul",
    {
      className: b,
      style: j,
      role: "list",
      children: i.map((e, w) => {
        const L = typeof e == "string" ? e : e.text;
        let r;
        return typeof e == "object" && "icon" in e ? r = e.icon : c !== void 0 ? r = c : r = /* @__PURE__ */ s(N, { size: a }), /* @__PURE__ */ v("li", { className: "nxp-feature-list__item", children: [
          r != null && /* @__PURE__ */ s("span", { className: "nxp-feature-list__icon", "aria-hidden": "true", children: r }),
          /* @__PURE__ */ s("span", { className: h("nxp-feature-list__text", _), children: L })
        ] }, w);
      })
    }
  );
}
export {
  I as FeatureList,
  I as default
};
