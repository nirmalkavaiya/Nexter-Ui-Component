import { jsx as a } from "react/jsx-runtime";
import "react";
function i({ size: s = "md", className: n = "" }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: `nxp-spinner${s === "sm" ? " nxp-spinner--sm" : s === "lg" ? " nxp-spinner--lg" : ""} ${n}`,
      role: "status",
      "aria-label": "Loading"
    }
  );
}
export {
  i as Spinner,
  i as default
};
