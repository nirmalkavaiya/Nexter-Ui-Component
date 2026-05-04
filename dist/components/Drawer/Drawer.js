import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useRef as y, useEffect as c, useCallback as k } from "react";
import { createPortal as N } from "react-dom";
const g = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 1l12 12M13 1L1 13", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) });
function E({
  open: a = !1,
  onClose: t,
  placement: l = "right",
  size: p = "md",
  title: n,
  byline: s,
  footer: u,
  closeOnBackdrop: h = !0,
  closeOnEscape: f = !0,
  hideClose: m = !1,
  className: x = "",
  children: v
}) {
  const _ = y(null);
  c(() => {
    if (!a) return;
    const r = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = r;
    };
  }, [a]);
  const d = k(
    (r) => {
      r.key === "Escape" && f && t && t();
    },
    [t, f]
  );
  if (c(() => {
    if (a)
      return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [a, d]), c(() => {
    if (!a) return;
    const r = setTimeout(() => {
      var w;
      const o = (w = _.current) == null ? void 0 : w.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o == null || o.focus();
    }, 50);
    return () => clearTimeout(r);
  }, [a]), !a) return null;
  const b = [
    "nxp-drawer__panel",
    `nxp-drawer__panel--${l}`,
    `nxp-drawer__panel--${p}`,
    x
  ].filter(Boolean).join(" ");
  return N(
    /* @__PURE__ */ e(
      "div",
      {
        className: `nxp-drawer__backdrop nxp-drawer__backdrop--${l}`,
        onMouseDown: (r) => {
          h && r.target === r.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof n == "string" ? n : "Drawer",
        children: /* @__PURE__ */ i("div", { className: b, ref: _, children: [
          (n || !m) && /* @__PURE__ */ i("div", { className: "nxp-drawer__head", children: [
            /* @__PURE__ */ i("div", { className: "nxp-drawer__head-text", children: [
              n && /* @__PURE__ */ e("div", { className: "nxp-drawer__title", children: n }),
              s && /* @__PURE__ */ e("div", { className: "nxp-drawer__byline", children: s })
            ] }),
            !m && t && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: "nxp-drawer__close",
                onClick: t,
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ e(g, {})
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-drawer__body", children: v }),
          u && /* @__PURE__ */ e("div", { className: "nxp-drawer__foot", children: u })
        ] })
      }
    ),
    document.body
  );
}
export {
  E as Drawer,
  E as default
};
