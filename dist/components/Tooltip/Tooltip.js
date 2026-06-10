import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { memo as d } from "react";
import { sanitizeHtml as u } from "../../lib/sanitize.js";
const f = () => /* @__PURE__ */ s("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ o("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ o("path", { d: "M8 7.5V11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ o("circle", { cx: "8", cy: "5.5", r: "0.75", fill: "currentColor" })
] });
function x({
  content: t,
  children: r,
  position: n = "top",
  className: i = "",
  style: a,
  width: l,
  tooltipStyle: p
}) {
  if (!t) return r ?? null;
  const c = typeof t == "string" && /<[a-z][\s\S]*>/i.test(t), e = {
    ...l != null && l !== "" ? { width: l } : {},
    ...p
  }, m = r != null && r !== "" ? r : /* @__PURE__ */ o(
    "span",
    {
      className: "nxp-tooltip-wrap__icon",
      role: "img",
      "aria-label": "More information",
      tabIndex: 0,
      children: /* @__PURE__ */ o(f, {})
    }
  );
  return /* @__PURE__ */ s(
    "span",
    {
      className: `nxp-tooltip-wrap${i ? ` ${i}` : ""}`,
      "data-position": n,
      style: a,
      children: [
        m,
        c ? /* @__PURE__ */ o(
          "div",
          {
            className: "nxp-tooltip",
            role: "tooltip",
            style: e,
            dangerouslySetInnerHTML: { __html: u(t) }
          }
        ) : /* @__PURE__ */ o("div", { className: "nxp-tooltip", role: "tooltip", style: e, children: t })
      ]
    }
  );
}
const k = d(x);
export {
  k as Tooltip,
  k as default
};
