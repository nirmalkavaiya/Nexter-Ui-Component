import { jsxs as u, jsx as o } from "react/jsx-runtime";
import { useState as $, useRef as x, useEffect as l } from "react";
function z({
  children: _,
  label: v,
  // fallback trigger label when no children
  onConfirm: c,
  /* text — all translatable */
  message: m = "",
  // optional message above actions; empty = hidden
  confirmText: h = "Remove",
  cancelText: b = "Cancel",
  /* styling */
  variant: f = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: k,
  // defaults to variant
  size: y = "md",
  // 'sm' | 'md'
  disabled: d = !1,
  /* behaviour */
  autoResetMs: p = 0,
  // auto-dismiss confirmation after N ms (0 = never)
  placement: N = "bottom-end",
  // 'bottom-end' | 'bottom-start' | 'bottom'
  className: w = ""
}) {
  const [e, t] = $(!1), r = x(null), a = x(null);
  function C() {
    d || (t(!0), p > 0 && (r.current = setTimeout(() => t(!1), p)));
  }
  function E() {
    clearTimeout(r.current), t(!1), c == null || c();
  }
  function i() {
    clearTimeout(r.current), t(!1);
  }
  l(() => {
    if (!e) return;
    function n(s) {
      a.current && !a.current.contains(s.target) && i();
    }
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, [e]), l(() => {
    if (!e) return;
    function n(s) {
      s.key === "Escape" && i();
    }
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [e]), l(() => () => clearTimeout(r.current), []);
  const g = k ?? f, L = y === "sm" ? " nxp-confirm--sm" : "", T = _ ?? v;
  return /* @__PURE__ */ u(
    "div",
    {
      ref: a,
      className: `nxp-confirm${L} ${w}`.trim(),
      children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: `nxp-btn nxp-btn--${f}`,
            onClick: C,
            disabled: d,
            "aria-expanded": e,
            "aria-haspopup": "dialog",
            children: T
          }
        ),
        e && /* @__PURE__ */ u(
          "div",
          {
            className: "nxp-confirm__popover",
            "data-placement": N,
            role: "dialog",
            "aria-label": "Confirm action",
            "aria-modal": "false",
            children: [
              m && /* @__PURE__ */ o("p", { className: "nxp-confirm__message", children: m }),
              /* @__PURE__ */ u("div", { className: "nxp-confirm__actions", children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: "nxp-confirm__cancel",
                    onClick: i,
                    children: b
                  }
                ),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: `nxp-confirm__ok nxp-confirm__ok--${g}`,
                    onClick: E,
                    autoFocus: !0,
                    children: h
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
  z as ConfirmButton,
  z as default
};
