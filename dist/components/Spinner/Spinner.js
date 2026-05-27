import { jsx as s } from "react/jsx-runtime";
import "react";
import { cn as a } from "../../lib/utils.js";
function o({ size: n = "md", type: e = "", className: r = "" }) {
  return e === "wdk" ? /* @__PURE__ */ s(
    "span",
    {
      className: a("nxp-spinner-wdk", n === "sm" ? "nxp-spinner-wdk--sm" : n === "lg" ? "nxp-spinner-wdk--lg" : "", r),
      role: "status",
      "aria-label": "Loading",
      children: /* @__PURE__ */ s("span", { className: "nxp-spinner-wdk__outer", children: /* @__PURE__ */ s("span", { className: "nxp-spinner-wdk__inner" }) })
    }
  ) : /* @__PURE__ */ s(
    "span",
    {
      className: a("nxp-spinner", n === "sm" ? "nxp-spinner--sm" : n === "lg" ? "nxp-spinner--lg" : "", r),
      role: "status",
      "aria-label": "Loading"
    }
  );
}
export {
  o as Spinner,
  o as default
};
