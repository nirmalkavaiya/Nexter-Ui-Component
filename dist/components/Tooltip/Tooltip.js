import { jsxs as l, jsx as o } from "react/jsx-runtime";
import "react";
import { sanitizeHtml as a } from "../../lib/sanitize.js";
const p = () => /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ o("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ o("path", { d: "M8 7.5V11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ o("circle", { cx: "8", cy: "5.5", r: "0.75", fill: "currentColor" })
] });
function u({
  content: r,
  children: t,
  position: e = "top",
  className: i = ""
}) {
  if (!r) return t ?? null;
  const n = typeof r == "string" && /<[a-z][\s\S]*>/i.test(r), s = t != null && t !== "" ? t : /* @__PURE__ */ o(
    "span",
    {
      className: "nxp-tooltip-wrap__icon",
      role: "img",
      "aria-label": "More information",
      tabIndex: 0,
      children: /* @__PURE__ */ o(p, {})
    }
  );
  return /* @__PURE__ */ l(
    "span",
    {
      className: `nxp-tooltip-wrap${i ? ` ${i}` : ""}`,
      "data-position": e,
      children: [
        s,
        n ? /* @__PURE__ */ o(
          "div",
          {
            className: "nxp-tooltip",
            role: "tooltip",
            dangerouslySetInnerHTML: { __html: a(r) }
          }
        ) : /* @__PURE__ */ o("div", { className: "nxp-tooltip", role: "tooltip", children: r })
      ]
    }
  );
}
export {
  u as Tooltip,
  u as default
};
