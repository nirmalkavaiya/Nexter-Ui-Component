import { jsx as s } from "react/jsx-runtime";
import "react";
const n = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "p",
  small: "small",
  muted: "p",
  code: "code",
  blockquote: "blockquote"
};
function m({
  variant: o,
  prose: h = !1,
  as: t,
  children: e,
  className: p = ""
}) {
  if (h)
    return /* @__PURE__ */ s(t || "div", { className: `nxp-prose ${p}`, children: e });
  const l = t || (o ? n[o] : "p") || "p", c = o ? `nxp-typo nxp-typo--${o} ${p}` : `nxp-typo ${p}`;
  return /* @__PURE__ */ s(l, { className: c, children: e });
}
export {
  m as Typography,
  m as default
};
