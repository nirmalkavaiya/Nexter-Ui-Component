import { jsx as t } from "react/jsx-runtime";
import "react";
function n({ ratio: e = 16 / 9, children: a, className: s = "" }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `nxp-aspect ${s}`,
      style: { "--nxp-aspect-ratio": e },
      children: /* @__PURE__ */ t("div", { className: "nxp-aspect__inner", children: a })
    }
  );
}
export {
  n as AspectRatio,
  n as default
};
