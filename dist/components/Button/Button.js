import { jsxs as b, jsx as m } from "react/jsx-runtime";
import "react";
import { cn as c } from "../../lib/utils.js";
function l({
  variant: r = "secondary",
  size: t,
  icon: s = !1,
  loading: n = !1,
  disabled: a = !1,
  onClick: e,
  children: p,
  className: o = "",
  ...x
}) {
  return /* @__PURE__ */ b(
    "button",
    {
      className: c(
        "nxp-btn",
        `nxp-btn--${r}`,
        t && t !== "md" ? `nxp-btn--${t}` : "",
        s ? "nxp-btn--icon" : "",
        n ? "nxp-btn--loading" : "",
        o
      ),
      disabled: a || n,
      onClick: e,
      "aria-disabled": a || n,
      ...x,
      children: [
        n && /* @__PURE__ */ m("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        p
      ]
    }
  );
}
export {
  l as Button,
  l as default
};
