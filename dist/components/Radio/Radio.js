import { jsxs as u, jsx as e } from "react/jsx-runtime";
import { useId as h, useMemo as y, useCallback as i } from "react";
import { cn as D } from "../../lib/utils.js";
function I({
  checked: o = !1,
  onChange: s,
  disabled: n = !1,
  name: d,
  value: t,
  label: l,
  className: c = ""
}) {
  const p = h(), f = y(
    () => D("nxp-radio", o && "is-checked", n && "is-disabled", c),
    [o, n, c]
  ), a = i(() => {
    n || s && s(t);
  }, [n, s, t]), m = i(
    (r) => {
      r.key === " " && (r.preventDefault(), a());
    },
    [a]
  ), x = i(
    (r) => {
      r.preventDefault(), a();
    },
    [a]
  );
  return /* @__PURE__ */ u("label", { className: f, htmlFor: p, children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: p,
        type: "radio",
        name: d,
        value: t,
        checked: o,
        onChange: a,
        disabled: n,
        className: "nxp-sr-only",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": o,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        onKeyDown: m,
        onClick: x,
        children: /* @__PURE__ */ e("span", { className: "nxp-radio__inner" })
      }
    ),
    l && /* @__PURE__ */ e("span", { children: l })
  ] });
}
export {
  I as Radio,
  I as default
};
