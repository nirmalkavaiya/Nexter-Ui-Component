import { jsxs as r, jsx as n } from "react/jsx-runtime";
import { useState as N, useId as g, useCallback as p } from "react";
import { ChevronDownIcon as y } from "../../lib/icons.js";
const C = () => /* @__PURE__ */ n(y, { className: "nxp-collapsible__chevron-svg" });
function D({
  open: c,
  defaultOpen: d = !1,
  onOpenChange: s,
  trigger: x,
  showChevron: _ = !0,
  disabled: o = !1,
  children: m,
  className: b = ""
}) {
  const a = c !== void 0, [f, h] = N(d), e = a ? c : f, i = g(), t = p(() => {
    if (o) return;
    const l = !e;
    a || h(l), s && s(l);
  }, [o, e, a, s]), u = p(
    (l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), t());
    },
    [t]
  ), v = [
    "nxp-collapsible",
    e ? "nxp-collapsible--open" : "",
    o ? "nxp-collapsible--disabled" : "",
    b
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: v, children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: "nxp-collapsible__trigger",
        onClick: t,
        onKeyDown: u,
        "aria-expanded": e,
        "aria-controls": i,
        disabled: o,
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-collapsible__trigger-content", children: x ?? (e ? "Hide" : "Show") }),
          _ && /* @__PURE__ */ n("span", { className: `nxp-collapsible__chevron${e ? " nxp-collapsible__chevron--open" : ""}`, children: /* @__PURE__ */ n(C, {}) })
        ]
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        id: i,
        className: "nxp-collapsible__content",
        "aria-hidden": !e,
        role: "region",
        children: /* @__PURE__ */ n("div", { className: "nxp-collapsible__inner", children: m })
      }
    )
  ] });
}
export {
  D as Collapsible,
  D as default
};
