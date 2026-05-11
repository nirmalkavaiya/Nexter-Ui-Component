import { jsxs as _, jsx as j } from "react/jsx-runtime";
import "react";
import { cn as D } from "../../lib/utils.js";
function A({
  /* ── visual ── */
  variant: b = "secondary",
  size: t,
  icon: f = !1,
  loading: s = !1,
  disabled: x = !1,
  /* ── content ── */
  children: m,
  className: u = "",
  /* ── link / anchor ── */
  href: e,
  target: l,
  rel: r,
  download: d,
  /* ── element override ── */
  as: v,
  /* ── button-specific ── */
  type: k = "button",
  /* ── events ── */
  onClick: h,
  /* ── anything else (data-*, aria-*, etc.) ── */
  ...y
}) {
  const n = x || s, a = v || (e ? "a" : "button"), p = a === "a" || typeof a != "string" && e, C = r !== void 0 ? r : l === "_blank" ? "nofollow noopener noreferrer" : void 0, o = {}, i = {};
  p ? (o.href = n ? void 0 : e, o.target = l, o.rel = C, d !== void 0 && (o.download = d), n && (o.tabIndex = -1)) : (i.type = k, i.disabled = n);
  const P = D(
    "nxp-btn",
    `nxp-btn--${b}`,
    t && t !== "md" ? `nxp-btn--${t}` : "",
    f ? "nxp-btn--icon" : "",
    s ? "nxp-btn--loading" : "",
    n && p ? "nxp-btn--disabled" : "",
    u
  );
  return /* @__PURE__ */ _(
    a,
    {
      className: P,
      "aria-disabled": n || void 0,
      onClick: n ? (c) => {
        c.preventDefault(), c.stopPropagation();
      } : h,
      ...o,
      ...i,
      ...y,
      children: [
        s && /* @__PURE__ */ j("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        m
      ]
    }
  );
}
export {
  A as Button,
  A as default
};
