import { jsxs as N, jsx as $ } from "react/jsx-runtime";
import { useCallback as g } from "react";
import { cn as w } from "../../lib/utils.js";
function I({
  /* ── visual ── */
  variant: f = "secondary",
  size: o,
  icon: x = !1,
  loading: e = !1,
  disabled: m = !1,
  /* ── content ── */
  children: u,
  className: v = "",
  /* ── link / anchor ── */
  href: a,
  target: d,
  rel: l,
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
  const n = m || e, r = h || (a ? "a" : "button"), c = r === "a" || typeof r != "string" && a, _ = l !== void 0 ? l : d === "_blank" ? "nofollow noopener noreferrer" : void 0, t = {}, i = {};
  c ? (t.href = n ? void 0 : a, t.target = d, t.rel = _, b !== void 0 && (t.download = b), n && (t.tabIndex = -1)) : (i.type = y, i.disabled = n);
  const j = w(
    "nxp-btn",
    `nxp-btn--${f}`,
    o && o !== "md" ? `nxp-btn--${o}` : "",
    x ? "nxp-btn--icon" : "",
    e ? "nxp-btn--loading" : "",
    n && c ? "nxp-btn--disabled" : "",
    v
  ), D = g(
    (p) => {
      if (n) {
        p.preventDefault(), p.stopPropagation();
        return;
      }
      s == null || s(p);
    },
    [n, s]
  );
  return /* @__PURE__ */ N(
    r,
    {
      className: j,
      "aria-disabled": n || void 0,
      onClick: D,
      ...t,
      ...i,
      ...P,
      children: [
        e && /* @__PURE__ */ $("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        u
      ]
    }
  );
}
export {
  I as Button,
  I as default
};
