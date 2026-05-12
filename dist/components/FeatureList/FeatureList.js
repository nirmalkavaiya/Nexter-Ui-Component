import { jsx as r, jsxs as c } from "react/jsx-runtime";
import "react";
import { cn as m } from "../../lib/utils.js";
const g = ({ size: s = 16 }) => /* @__PURE__ */ c(
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
function $({
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
  wrap: u = !0,
  divider: d = !1,
  fullWidth: x = !1,
  /* passthrough */
  className: h = ""
}) {
  const v = m(
    "nxp-feature-list",
    `nxp-feature-list--${f}`,
    p !== "start" ? `nxp-feature-list--align-${p}` : "",
    f === "horizontal" && u ? "nxp-feature-list--wrap" : "",
    d ? "nxp-feature-list--divider" : "",
    x ? "nxp-feature-list--full-width" : "",
    h
  ), n = {};
  return l !== 16 && (n["--nxpl-icon-size"] = typeof l == "number" ? `${l}px` : l), i !== void 0 && (n["--nxpl-icon-text-gap"] = typeof i == "number" ? `${i}px` : i), o !== void 0 && (n["--nxpl-item-gap"] = typeof o == "number" ? `${o}px` : o), /* @__PURE__ */ r(
    "ul",
    {
      className: v,
      style: Object.keys(n).length ? n : void 0,
      role: "list",
      children: s.map((e, y) => {
        const b = typeof e == "string" ? e : e.text;
        let t;
        return typeof e == "object" && "icon" in e ? t = e.icon : a !== void 0 ? t = a : t = /* @__PURE__ */ r(g, { size: l }), /* @__PURE__ */ c("li", { className: "nxp-feature-list__item", children: [
          t != null && /* @__PURE__ */ r("span", { className: "nxp-feature-list__icon", "aria-hidden": "true", children: t }),
          /* @__PURE__ */ r("span", { className: "nxp-feature-list__text nxp-body", children: b })
        ] }, y);
      })
    }
  );
}
export {
  $ as FeatureList,
  $ as default
};
