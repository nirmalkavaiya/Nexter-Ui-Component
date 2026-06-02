import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { useState as j, useRef as _, useCallback as f, useEffect as d } from "react";
function B({
  children: v,
  label: h,
  // fallback trigger label when no children
  onConfirm: r,
  /* text — all translatable */
  message: p = "",
  // optional message above actions; empty = hidden
  confirmText: b = "Remove",
  cancelText: k = "Cancel",
  /* styling */
  variant: x = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: y,
  // defaults to variant
  size: N = "md",
  // 'sm' | 'md'
  disabled: i = !1,
  /* behaviour */
  autoResetMs: s = 0,
  // auto-dismiss confirmation after N ms (0 = never)
  placement: w = "bottom-end",
  // 'bottom-end' | 'bottom-start' | 'bottom'
  className: C = ""
}) {
  const [e, o] = j(!1), c = _(null), l = _(null), n = f(() => {
    clearTimeout(c.current), o(!1);
  }, []), E = f(() => {
    clearTimeout(c.current), o(!1), r == null || r();
  }, [r]), g = f(() => {
    i || (o(!0), s > 0 && (c.current = setTimeout(() => o(!1), s)));
  }, [i, s]);
  d(() => {
    if (!e) return;
    function t(u) {
      l.current && !l.current.contains(u.target) && n();
    }
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [e, n]), d(() => {
    if (!e) return;
    function t(u) {
      u.key === "Escape" && n();
    }
    return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
  }, [e, n]), d(() => () => clearTimeout(c.current), []);
  const L = y ?? x, T = N === "sm" ? " nxp-confirm--sm" : "", $ = v ?? h;
  return /* @__PURE__ */ m(
    "div",
    {
      ref: l,
      className: `nxp-confirm${T} ${C}`.trim(),
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: `nxp-btn nxp-btn--${x}`,
            onClick: g,
            disabled: i,
            "aria-expanded": e,
            "aria-haspopup": "dialog",
            children: $
          }
        ),
        e && /* @__PURE__ */ m(
          "div",
          {
            className: "nxp-confirm__popover",
            "data-placement": w,
            role: "dialog",
            "aria-label": "Confirm action",
            "aria-modal": "false",
            children: [
              p && /* @__PURE__ */ a("p", { className: "nxp-confirm__message", children: p }),
              /* @__PURE__ */ m("div", { className: "nxp-confirm__actions", children: [
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "nxp-confirm__cancel",
                    onClick: n,
                    children: k
                  }
                ),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: `nxp-confirm__ok nxp-confirm__ok--${L}`,
                    onClick: E,
                    autoFocus: !0,
                    children: b
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  B as ConfirmButton,
  B as default
};
