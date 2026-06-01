import { jsxs as p, jsx as t } from "react/jsx-runtime";
import { useState as g, useId as D, useCallback as l } from "react";
import { cn as V } from "../../lib/utils.js";
function I() {
  return /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", fill: "none", viewBox: "0 0 10 10", "aria-hidden": "true", children: [
    /* @__PURE__ */ t("path", { fill: "#fff", d: "M8.313 5.25V3.81A2.94 2.94 0 0 0 5.377.876h-.254a2.94 2.94 0 0 0-2.936 2.936V5.25A1.313 1.313 0 0 0 .875 6.563v4.068a2.498 2.498 0 0 0 2.494 2.494H7.13a2.498 2.498 0 0 0 2.494-2.494V6.562A1.313 1.313 0 0 0 8.312 5.25Zm-5.25-1.44a2.06 2.06 0 0 1 2.06-2.06h.254a2.06 2.06 0 0 1 2.06 2.06v1.44H3.063V3.81Zm5.687 6.821a1.619 1.619 0 0 1-1.619 1.619H3.37a1.619 1.619 0 0 1-1.619-1.619V6.562a.437.437 0 0 1 .438-.437h6.124a.437.437 0 0 1 .438.438v4.068Z" }),
    /* @__PURE__ */ t("path", { fill: "#fff", d: "M5.688 9.065V10.5a.437.437 0 1 1-.875 0V9.065a.875.875 0 1 1 .875 0Z" })
  ] });
}
function Z({
  checked: s,
  onChange: h,
  disabled: n = !1,
  label: i,
  className: d = "",
  lock: a = !1,
  onLockClick: r
}) {
  const f = s !== void 0, [m, v] = g(!1), o = f ? s : m, u = D(), c = l(() => {
    n || a || (f ? h && h(!s) : v((e) => !e));
  }, [n, a, f, s, h]), w = l((e) => {
    n || (e.preventDefault(), e.stopPropagation(), r == null || r(e));
  }, [n, r]), y = l((e) => {
    e.key !== " " && e.key !== "Enter" || (e.preventDefault(), !n && (r == null || r(e)));
  }, [n, r]), x = V(
    "nxp-checkbox",
    o && !a && "is-checked",
    n && "is-disabled",
    a && "is-locked",
    d
  );
  return a ? /* @__PURE__ */ p("div", { className: x, children: [
    /* @__PURE__ */ t(
      "span",
      {
        className: "nxp-checkbox__lock",
        role: "button",
        tabIndex: n ? -1 : 0,
        "aria-disabled": n,
        "aria-label": "Upgrade to unlock",
        onClick: w,
        onKeyDown: y,
        children: /* @__PURE__ */ t(I, {})
      }
    ),
    i && /* @__PURE__ */ t("span", { children: i })
  ] }) : /* @__PURE__ */ p("label", { className: x, htmlFor: u, children: [
    /* @__PURE__ */ t(
      "input",
      {
        id: u,
        type: "checkbox",
        checked: o,
        onChange: c,
        disabled: n,
        className: "nxp-sr-only",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        onKeyDown: (e) => {
          e.key === " " && (e.preventDefault(), c());
        },
        onClick: (e) => {
          e.preventDefault(), c();
        },
        children: o && /* @__PURE__ */ t("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ t("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t("span", { children: i })
  ] });
}
export {
  Z as Checkbox,
  Z as default
};
