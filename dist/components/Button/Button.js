import { jsxs as N, jsx as $ } from "react/jsx-runtime";
import { useCallback as g } from "react";
import { cn as w } from "../../lib/utils.js";
function I({
  /* ── visual ── */
  variant: f = "secondary",
  size: p,
  icon: x = !1,
  loading: e = !1,
  disabled: u = !1,
  /* ── content ── */
  children: m,
  className: v = "",
  /* ── link / anchor ── */
  href: o,
  target: l,
  rel: d,
  download: b,
  /* ── element override ── */
  as: h,
  /* ── button-specific ── */
  type: y = "button",
  /* ── events ── */
  onClick: s,
  /* ── anything else (data-*, aria-*, etc.) ── */
  ...P
}) {
  const n = u || e, a = h || (o ? "a" : "button"), c = a === "a" || typeof a != "string" && o, _ = d !== void 0 ? d : l === "_blank" ? "nofollow noopener noreferrer" : void 0, t = {}, r = {};
  c ? (t.href = n ? void 0 : o, t.target = l, t.rel = _, b !== void 0 && (t.download = b), n && (t.tabIndex = -1)) : (r.type = y, r.disabled = n);
  const j = w(
    "nxp-btn",
    `nxp-btn--${f}`,
    p ? `nxp-btn--${p}` : "",
    x ? "nxp-btn--icon" : "",
    e ? "nxp-btn--loading" : "",
    n && c ? "nxp-btn--disabled" : "",
    v
  ), D = g(
    (i) => {
      if (n) {
        i.preventDefault(), i.stopPropagation();
        return;
      }
      s == null || s(i);
    },
    [n, s]
  );
  return /* @__PURE__ */ N(
    a,
    {
      className: j,
      "aria-disabled": n || void 0,
      onClick: D,
      ...t,
      ...r,
      ...P,
      children: [
        e && /* @__PURE__ */ $("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        m
      ]
    }
  );
}
export {
  I as Button,
  I as default
};
