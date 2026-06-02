import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { memo as p } from "react";
import { sanitizeHtml as c } from "../../lib/sanitize.js";
const m = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ o("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ o("path", { d: "M8 7.5V11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ o("circle", { cx: "8", cy: "5.5", r: "0.75", fill: "currentColor" })
] });
function d({
  content: t,
  children: r,
  position: l = "top",
  className: i = "",
  style: s
}) {
  if (!t) return r ?? null;
  const n = typeof t == "string" && /<[a-z][\s\S]*>/i.test(t), a = r != null && r !== "" ? r : /* @__PURE__ */ o(
    "span",
    {
      className: "nxp-tooltip-wrap__icon",
      role: "img",
      "aria-label": "More information",
      tabIndex: 0,
      children: /* @__PURE__ */ o(m, {})
    }
  );
  return /* @__PURE__ */ e(
    "span",
    {
      className: `nxp-tooltip-wrap${i ? ` ${i}` : ""}`,
      "data-position": l,
      style: s,
      children: [
        a,
        n ? /* @__PURE__ */ o(
          "div",
          {
            className: "nxp-tooltip",
            role: "tooltip",
            dangerouslySetInnerHTML: { __html: c(t) }
          }
        ) : /* @__PURE__ */ o("div", { className: "nxp-tooltip", role: "tooltip", children: t })
      ]
    }
  );
}
const h = p(d);
export {
  h as Tooltip,
  h as default
};
