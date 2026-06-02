import { jsx as t } from "react/jsx-runtime";
import { memo as o } from "react";
function i({ ratio: e = 16 / 9, children: s, className: a = "" }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `nxp-aspect ${a}`,
      style: { "--nxp-aspect-ratio": e },
      children: /* @__PURE__ */ t("div", { className: "nxp-aspect__inner", children: s })
    }
  );
}
const n = o(i);
export {
  n as AspectRatio,
  n as default
};
