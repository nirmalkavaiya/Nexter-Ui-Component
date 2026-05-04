import { jsxs as b, jsx as c } from "react/jsx-runtime";
import "react";
function d({
  variant: a = "secondary",
  size: t,
  icon: e = !1,
  loading: n = !1,
  disabled: s = !1,
  onClick: r,
  children: o,
  className: p = "",
  ...l
}) {
  const x = [
    "nxp-btn",
    `nxp-btn--${a}`,
    t && t !== "md" ? `nxp-btn--${t}` : "",
    e ? "nxp-btn--icon" : "",
    n ? "nxp-btn--loading" : "",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    "button",
    {
      className: x,
      disabled: s || n,
      onClick: r,
      "aria-disabled": s || n,
      ...l,
      children: [
        n && /* @__PURE__ */ c("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        o
      ]
    }
  );
}
export {
  d as Button,
  d as default
};
