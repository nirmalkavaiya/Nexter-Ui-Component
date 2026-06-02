import { jsx as s } from "react/jsx-runtime";
import { memo as p } from "react";
import { cn as r } from "../../lib/utils.js";
function i({ size: n = "md", type: a = "", className: e = "" }) {
  return a === "wdk" ? /* @__PURE__ */ s(
    "span",
    {
      className: r("nxp-spinner-wdk", n === "sm" ? "nxp-spinner-wdk--sm" : n === "lg" ? "nxp-spinner-wdk--lg" : "", e),
      role: "status",
      "aria-label": "Loading",
      children: /* @__PURE__ */ s("span", { className: "nxp-spinner-wdk__outer", children: /* @__PURE__ */ s("span", { className: "nxp-spinner-wdk__inner" }) })
    }
  ) : /* @__PURE__ */ s(
    "span",
    {
      className: r("nxp-spinner", n === "sm" ? "nxp-spinner--sm" : n === "lg" ? "nxp-spinner--lg" : "", e),
      role: "status",
      "aria-label": "Loading"
    }
  );
}
const c = p(i);
export {
  c as Spinner,
  c as default
};
