import { jsx as a } from "react/jsx-runtime";
import "react";
function i({
  orientation: r = "horizontal",
  label: n,
  decorative: p = !0,
  className: o = ""
}) {
  return n && r === "horizontal" ? /* @__PURE__ */ a(
    "div",
    {
      className: `nxp-sep nxp-sep--label ${o}`,
      role: p ? "none" : "separator",
      "aria-orientation": p ? void 0 : r,
      children: n
    }
  ) : /* @__PURE__ */ a(
    "div",
    {
      role: p ? "none" : "separator",
      "aria-orientation": p ? void 0 : r,
      className: `nxp-sep nxp-sep--${r} ${o}`
    }
  );
}
export {
  i as Separator,
  i as default
};
