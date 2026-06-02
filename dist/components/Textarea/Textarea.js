import { jsxs as x, jsx as N } from "react/jsx-runtime";
import { useState as k, useCallback as I, useMemo as M } from "react";
import { cn as S } from "../../lib/utils.js";
function w({
  value: l,
  defaultValue: i,
  onChange: t,
  placeholder: p,
  rows: u = 4,
  disabled: e = !1,
  invalid: a = !1,
  maxLength: r,
  showCount: f = !1,
  className: n = "",
  ...m
}) {
  const s = l !== void 0, [d, v] = k(i ?? ""), o = s ? l : d, _ = I(
    (c) => {
      s || v(c.target.value), t == null || t(c);
    },
    [s, t]
  ), j = M(
    () => S("nxp-textarea", a && "nxp-textarea--invalid", e && "nxp-textarea--disabled", n),
    [a, e, n]
  );
  return /* @__PURE__ */ x("div", { className: j, children: [
    /* @__PURE__ */ N(
      "textarea",
      {
        className: "nxp-textarea__control",
        value: o,
        onChange: _,
        placeholder: p,
        rows: u,
        disabled: e,
        maxLength: r,
        "aria-invalid": a || void 0,
        ...m
      }
    ),
    f && r != null && /* @__PURE__ */ x("span", { className: "nxp-textarea__count", children: [
      o.length,
      "/",
      r
    ] })
  ] });
}
export {
  w as Textarea,
  w as default
};
