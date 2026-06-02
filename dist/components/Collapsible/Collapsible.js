import { jsxs as p, jsx as l } from "react/jsx-runtime";
import { useState as y, useId as I, useCallback as m, useMemo as x } from "react";
import { cn as d } from "../../lib/utils.js";
import { ChevronDownIcon as k } from "../../lib/icons.js";
const w = () => /* @__PURE__ */ l(k, { className: "nxp-collapsible__chevron-svg" });
function E({
  open: r,
  defaultOpen: _ = !1,
  onOpenChange: s,
  trigger: f,
  showChevron: h = !0,
  disabled: o = !1,
  children: u,
  className: a = ""
}) {
  const c = r !== void 0, [v, b] = y(_), n = c ? r : v, i = I(), t = m(() => {
    if (o) return;
    const e = !n;
    c || b(e), s && s(e);
  }, [o, n, c, s]), g = m(
    (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t());
    },
    [t]
  ), C = x(
    () => d("nxp-collapsible", n && "nxp-collapsible--open", o && "nxp-collapsible--disabled", a),
    [n, o, a]
  ), N = x(
    () => d("nxp-collapsible__chevron", n && "nxp-collapsible__chevron--open"),
    [n]
  );
  return /* @__PURE__ */ p("div", { className: C, children: [
    /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        className: "nxp-collapsible__trigger",
        onClick: t,
        onKeyDown: g,
        "aria-expanded": n,
        "aria-controls": i,
        disabled: o,
        children: [
          /* @__PURE__ */ l("span", { className: "nxp-collapsible__trigger-content", children: f ?? (n ? "Hide" : "Show") }),
          h && /* @__PURE__ */ l("span", { className: N, children: /* @__PURE__ */ l(w, {}) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      "div",
      {
        id: i,
        className: "nxp-collapsible__content",
        "aria-hidden": !n,
        role: "region",
        children: /* @__PURE__ */ l("div", { className: "nxp-collapsible__inner", children: u })
      }
    )
  ] });
}
export {
  E as Collapsible,
  E as default
};
