import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { useRef as k, useEffect as c, useCallback as N } from "react";
import { createPortal as g } from "react-dom";
const A = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r("path", { d: "M1 1l12 12M13 1L1 13", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) });
function q({
  open: a = !1,
  onClose: n,
  placement: l = "right",
  size: h = "md",
  title: t,
  byline: s,
  footer: u,
  closeOnBackdrop: x = !0,
  closeOnEscape: m = !0,
  hideClose: f = !1,
  className: v = "",
  children: b
}) {
  const _ = k(null);
  c(() => {
    if (!a) return;
    const e = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = e;
    };
  }, [a]);
  const d = N(
    (e) => {
      e.key === "Escape" && m && n && n();
    },
    [n, m]
  );
  if (c(() => {
    if (a)
      return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [a, d]), c(() => {
    if (!a) return;
    let e, w;
    return e = requestAnimationFrame(() => {
      w = requestAnimationFrame(() => {
        var p;
        const i = (p = _.current) == null ? void 0 : p.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        i == null || i.focus();
      });
    }), () => {
      cancelAnimationFrame(e), cancelAnimationFrame(w);
    };
  }, [a]), !a) return null;
  const y = [
    "nxp-drawer__panel",
    `nxp-drawer__panel--${l}`,
    `nxp-drawer__panel--${h}`,
    v
  ].filter(Boolean).join(" ");
  return g(
    /* @__PURE__ */ r(
      "div",
      {
        className: `nxp-drawer__backdrop nxp-drawer__backdrop--${l}`,
        onMouseDown: (e) => {
          x && e.target === e.currentTarget && n && n();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof t == "string" ? t : "Drawer",
        children: /* @__PURE__ */ o("div", { className: y, ref: _, children: [
          (t || !f) && /* @__PURE__ */ o("div", { className: "nxp-drawer__head", children: [
            /* @__PURE__ */ o("div", { className: "nxp-drawer__head-text", children: [
              t && /* @__PURE__ */ r("div", { className: "nxp-drawer__title", children: t }),
              s && /* @__PURE__ */ r("div", { className: "nxp-drawer__byline", children: s })
            ] }),
            !f && n && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: "nxp-drawer__close",
                onClick: n,
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ r(A, {})
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "nxp-drawer__body", children: b }),
          u && /* @__PURE__ */ r("div", { className: "nxp-drawer__foot", children: u })
        ] })
      }
    ),
    document.body
  );
}
export {
  q as Drawer,
  q as default
};
