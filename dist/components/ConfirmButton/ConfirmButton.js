import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { useState as R, useRef as v, useCallback as f, useEffect as d } from "react";
function D({
  children: h,
  label: k,
  // fallback trigger label when no children
  onConfirm: r,
  /* text — all translatable */
  message: p = "",
  // optional message above actions; empty = hidden
  confirmText: b = "Remove",
  cancelText: y = "Cancel",
  /* styling */
  variant: x = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: w,
  // defaults to variant
  size: E = "md",
  // 'sm' | 'md'
  disabled: i = !1,
  /* behaviour */
  autoResetMs: s = 0,
  // auto-dismiss confirmation after N ms (0 = never)
  placement: N = "bottom-end",
  // 'bottom-end' | 'bottom-start' | 'bottom'
  className: g = "",
  btnClassName: _ = ""
}) {
  const [e, o] = R(!1), c = v(null), l = v(null), n = f(() => {
    clearTimeout(c.current), o(!1);
  }, []), C = f(() => {
    clearTimeout(c.current), o(!1), r == null || r();
  }, [r]), $ = f(() => {
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
  const L = w ?? x, T = E === "sm" ? " nxp-confirm--sm" : "", j = h ?? k;
  return /* @__PURE__ */ m(
    "div",
    {
      ref: l,
      className: `nxp-confirm${T} ${g}`.trim(),
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: `nxp-btn nxp-btn--${x}${_ ? " " + _ : ""}`,
            onClick: $,
            disabled: i,
            "aria-expanded": e,
            "aria-haspopup": "dialog",
            children: j
          }
        ),
        e && /* @__PURE__ */ m(
          "div",
          {
            className: "nxp-confirm__popover",
            "data-placement": N,
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
                    children: y
                  }
                ),
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: `nxp-confirm__ok nxp-confirm__ok--${L}`,
                    onClick: C,
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
  D as ConfirmButton,
  D as default
};
