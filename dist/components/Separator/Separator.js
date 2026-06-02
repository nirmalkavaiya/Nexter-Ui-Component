import { jsx as p } from "react/jsx-runtime";
import { memo as n } from "react";
function s({
  orientation: r = "horizontal",
  label: a,
  decorative: o = !0,
  className: e = ""
}) {
  return a && r === "horizontal" ? /* @__PURE__ */ p(
    "div",
    {
      className: `nxp-sep nxp-sep--label ${e}`,
      role: o ? "none" : "separator",
      "aria-orientation": o ? void 0 : r,
      children: a
    }
  ) : /* @__PURE__ */ p(
    "div",
    {
      role: o ? "none" : "separator",
      "aria-orientation": o ? void 0 : r,
      className: `nxp-sep nxp-sep--${r} ${e}`
    }
  );
}
const m = n(s);
export {
  m as Separator,
  m as default
};
