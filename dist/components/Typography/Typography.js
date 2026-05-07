import { jsx as a } from "react/jsx-runtime";
import "react";
import { cn as h } from "../../lib/utils.js";
const u = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  body: "p",
  large: "p",
  sm: "small",
  small: "small",
  xs: "span",
  muted: "p",
  code: "code",
  blockquote: "blockquote"
};
function A({
  variant: o,
  prose: m = !1,
  as: s,
  color: p,
  truncate: r = !1,
  clamp: t,
  children: l,
  className: n = "",
  style: e,
  ...c
}) {
  if (m)
    return /* @__PURE__ */ a(s || "div", { className: h("nxp-prose", n), style: e, ...c, children: l });
  const d = s || (o ? u[o] : "p") || "p", x = p && p !== "default" ? `nxp-typo--color-${p}` : "", i = h(
    "nxp-typo",
    o ? `nxp-typo--${o}` : "",
    x,
    r ? "nxp-typo--truncate" : "",
    t ? "nxp-typo--clamp" : "",
    n
  ), f = t ? {
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    ...e
  } : e;
  return /* @__PURE__ */ a(d, { className: i, style: f, ...c, children: l });
}
export {
  A as Typography,
  A as default
};
