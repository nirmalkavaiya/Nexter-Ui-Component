import { jsxs as k, jsx as t } from "react/jsx-runtime";
import { useState as g, useRef as y, useEffect as N } from "react";
function j({
  children: u,
  onConfirm: r,
  /* text — all translatable */
  message: f = "Are you sure?",
  confirmText: a = "Yes, confirm",
  cancelText: m = "Cancel",
  /* styling */
  variant: o = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: p,
  // defaults to same as variant
  size: x = "md",
  // 'sm' | 'md'
  disabled: c = !1,
  /* timing */
  autoResetMs: i = 0,
  // auto-cancel confirmation after N ms (0 = never)
  className: s = ""
}) {
  const [b, n] = g(!1), e = y(null);
  function _() {
    c || (n(!0), i > 0 && (e.current = setTimeout(() => n(!1), i)));
  }
  function d() {
    clearTimeout(e.current), n(!1), r == null || r();
  }
  function C() {
    clearTimeout(e.current), n(!1);
  }
  N(() => () => clearTimeout(e.current), []);
  const h = p ?? o, l = x === "sm" ? " nxp-confirm--sm" : "";
  return b ? /* @__PURE__ */ k("div", { className: `nxp-confirm nxp-confirm--inline${l} ${s}`, role: "group", "aria-label": "Confirm action", children: [
    /* @__PURE__ */ t("span", { className: "nxp-confirm__message", children: f }),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: `nxp-confirm__ok nxp-confirm__ok--${h}`,
        onClick: d,
        autoFocus: !0,
        children: a
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "nxp-confirm__cancel",
        onClick: C,
        children: m
      }
    )
  ] }) : /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: [`nxp-btn nxp-btn--${o}`, l, s].filter(Boolean).join(" "),
      onClick: _,
      disabled: c,
      children: u
    }
  );
}
export {
  j as ConfirmButton,
  j as default
};
