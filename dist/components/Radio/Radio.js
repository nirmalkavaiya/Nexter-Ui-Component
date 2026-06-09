import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { useId as d, useMemo as f, useCallback as x } from "react";
import { cn as u } from "../../lib/utils.js";
function j({
  checked: r = !1,
  onChange: o,
  disabled: s = !1,
  name: p,
  value: a,
  label: i,
  className: t = ""
}) {
  const e = d(), c = f(
    () => u("nxp-radio", r && "is-checked", s && "is-disabled", t),
    [r, s, t]
  ), m = x(() => {
    s || o && o(a);
  }, [s, o, a]);
  return /* @__PURE__ */ l("label", { className: c, htmlFor: e, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: e,
        type: "radio",
        name: p,
        value: a,
        checked: r,
        onChange: m,
        disabled: s,
        className: "nxp-sr-only"
      }
    ),
    /* @__PURE__ */ n("div", { className: "nxp-radio__dot", "aria-hidden": "true", children: /* @__PURE__ */ n("span", { className: "nxp-radio__inner" }) }),
    i && /* @__PURE__ */ n("span", { children: i })
  ] });
}
export {
  j as Radio,
  j as default
};
