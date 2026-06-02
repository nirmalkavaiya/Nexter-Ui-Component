import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { useRef as g, useEffect as l, useCallback as b, useMemo as M } from "react";
import { cn as A } from "../../lib/utils.js";
import { createPortal as D } from "react-dom";
const F = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r("path", { d: "M1 1l12 12M13 1L1 13", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) });
function j({
  open: n = !1,
  onClose: a,
  placement: d = "right",
  size: s = "md",
  title: t,
  byline: u,
  footer: m,
  closeOnBackdrop: f = !0,
  closeOnEscape: w = !0,
  hideClose: _ = !1,
  className: p = "",
  children: y
}) {
  const h = g(null);
  l(() => {
    if (!n) return;
    const e = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = e;
    };
  }, [n]);
  const i = b(
    (e) => {
      e.key === "Escape" && w && a && a();
    },
    [a, w]
  );
  l(() => {
    if (n)
      return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, i]), l(() => {
    if (!n) return;
    let e, x;
    return e = requestAnimationFrame(() => {
      x = requestAnimationFrame(() => {
        var v;
        const o = (v = h.current) == null ? void 0 : v.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        o == null || o.focus();
      });
    }), () => {
      cancelAnimationFrame(e), cancelAnimationFrame(x);
    };
  }, [n]);
  const k = b(
    (e) => {
      f && e.target === e.currentTarget && a && a();
    },
    [f, a]
  ), N = M(
    () => A("nxp-drawer__panel", `nxp-drawer__panel--${d}`, `nxp-drawer__panel--${s}`, p),
    [d, s, p]
  );
  return n ? D(
    /* @__PURE__ */ r(
      "div",
      {
        className: `nxp-drawer__backdrop nxp-drawer__backdrop--${d}`,
        onMouseDown: k,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof t == "string" ? t : "Drawer",
        children: /* @__PURE__ */ c("div", { className: N, ref: h, children: [
          (t || !_) && /* @__PURE__ */ c("div", { className: "nxp-drawer__head", children: [
            /* @__PURE__ */ c("div", { className: "nxp-drawer__head-text", children: [
              t && /* @__PURE__ */ r("div", { className: "nxp-drawer__title", children: t }),
              u && /* @__PURE__ */ r("div", { className: "nxp-drawer__byline", children: u })
            ] }),
            !_ && a && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: "nxp-drawer__close",
                onClick: a,
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ r(F, {})
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "nxp-drawer__body", children: y }),
          m && /* @__PURE__ */ r("div", { className: "nxp-drawer__foot", children: m })
        ] })
      }
    ),
    document.body
  ) : null;
}
export {
  j as Drawer,
  j as default
};
