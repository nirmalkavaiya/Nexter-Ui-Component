import { jsxs as c, jsx as n } from "react/jsx-runtime";
import { useState as g, useId as k, useCallback as p } from "react";
const N = () => /* @__PURE__ */ n(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true",
    className: "nxp-collapsible__chevron-svg",
    children: /* @__PURE__ */ n(
      "path",
      {
        d: "M3 5l4 4 4-4",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function C({
  open: r,
  defaultOpen: d = !1,
  onOpenChange: s,
  trigger: h,
  showChevron: x = !0,
  disabled: o = !1,
  children: u,
  className: _ = ""
}) {
  const t = r !== void 0, [b, f] = g(d), e = t ? r : b, a = k(), i = p(() => {
    if (o) return;
    const l = !e;
    t || f(l), s && s(l);
  }, [o, e, t, s]), v = p(
    (l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), i());
    },
    [i]
  ), m = [
    "nxp-collapsible",
    e ? "nxp-collapsible--open" : "",
    o ? "nxp-collapsible--disabled" : "",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: m, children: [
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        className: "nxp-collapsible__trigger",
        onClick: i,
        onKeyDown: v,
        "aria-expanded": e,
        "aria-controls": a,
        disabled: o,
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-collapsible__trigger-content", children: h ?? (e ? "Hide" : "Show") }),
          x && /* @__PURE__ */ n("span", { className: `nxp-collapsible__chevron${e ? " nxp-collapsible__chevron--open" : ""}`, children: /* @__PURE__ */ n(N, {}) })
        ]
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        id: a,
        className: "nxp-collapsible__content",
        "aria-hidden": !e,
        role: "region",
        children: /* @__PURE__ */ n("div", { className: "nxp-collapsible__inner", children: u })
      }
    )
  ] });
}
export {
  C as Collapsible,
  C as default
};
