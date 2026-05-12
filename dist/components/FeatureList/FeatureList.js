import { jsx as r, jsxs as u } from "react/jsx-runtime";
import "react";
import { cn as c } from "../../lib/utils.js";
const k = ({ size: s = 16 }) => /* @__PURE__ */ u(
  "svg",
  {
    width: s,
    height: s,
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
function w({
  /* data */
  items: s = [],
  /* icon */
  icon: a,
  /* layout */
  layout: f = "vertical",
  /* sizing */
  iconSize: l = 16,
  /* spacing */
  iconTextGap: i,
  itemGap: o,
  /* alignment */
  align: p = "start",
  /* behaviour */
  wrap: d = !0,
  divider: x = !1,
  fullWidth: h = !1,
  /* passthrough */
  className: v = "",
  textClassName: y = ""
}) {
  const b = c(
    "nxp-feature-list",
    `nxp-feature-list--${f}`,
    p !== "start" ? `nxp-feature-list--align-${p}` : "",
    f === "horizontal" && d ? "nxp-feature-list--wrap" : "",
    x ? "nxp-feature-list--divider" : "",
    h ? "nxp-feature-list--full-width" : "",
    v
  ), n = {};
  return l !== 16 && (n["--nxpl-icon-size"] = typeof l == "number" ? `${l}px` : l), i !== void 0 && (n["--nxpl-icon-text-gap"] = typeof i == "number" ? `${i}px` : i), o !== void 0 && (n["--nxpl-item-gap"] = typeof o == "number" ? `${o}px` : o), /* @__PURE__ */ r(
    "ul",
    {
      className: b,
      style: Object.keys(n).length ? n : void 0,
      role: "list",
      children: s.map((e, m) => {
        const g = typeof e == "string" ? e : e.text;
        let t;
        return typeof e == "object" && "icon" in e ? t = e.icon : a !== void 0 ? t = a : t = /* @__PURE__ */ r(k, { size: l }), /* @__PURE__ */ u("li", { className: "nxp-feature-list__item", children: [
          t != null && /* @__PURE__ */ r("span", { className: "nxp-feature-list__icon", "aria-hidden": "true", children: t }),
          /* @__PURE__ */ r("span", { className: c("nxp-feature-list__text nxp-body", y), children: g })
        ] }, m);
      })
    }
  );
}
export {
  w as FeatureList,
  w as default
};
