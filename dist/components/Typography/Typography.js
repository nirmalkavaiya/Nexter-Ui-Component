import { jsx as c } from "react/jsx-runtime";
import { memo as f } from "react";
import { cn as m } from "../../lib/utils.js";
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
function b({
  variant: o,
  prose: h = !1,
  as: s,
  color: p,
  truncate: r = !1,
  clamp: t,
  children: l,
  className: n = "",
  style: e,
  ...a
}) {
  if (h)
    return /* @__PURE__ */ c(s || "div", { className: m("nxp-prose", n), style: e, ...a, children: l });
  const y = s || (o ? u[o] : "p") || "p", d = p && p !== "default" ? `nxp-typo--color-${p}` : "", i = m(
    "nxp-typo",
    o ? `nxp-typo--${o}` : "",
    d,
    r ? "nxp-typo--truncate" : "",
    t ? "nxp-typo--clamp" : "",
    n
  ), x = t ? {
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    ...e
  } : e;
  return /* @__PURE__ */ c(y, { className: i, style: x, ...a, children: l });
}
const A = f(b);
export {
  A as Typography,
  A as default
};
