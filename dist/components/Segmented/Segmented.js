import { jsx as d } from "react/jsx-runtime";
import { memo as v, useState as S, useCallback as m, useMemo as b } from "react";
import { cn as g } from "../../lib/utils.js";
function x({ options: a = [], value: n, onChange: t, className: r = "" }) {
  var c;
  const l = n !== void 0, [i, u] = S((c = a[0]) == null ? void 0 : c.value), s = l ? n : i, o = m(
    (e) => {
      l || u(e), t && t(e);
    },
    [l, t]
  ), f = m(
    (e) => o(e.currentTarget.dataset.value),
    [o]
  ), p = b(
    () => g("nxp-segmented", r),
    [r]
  );
  return /* @__PURE__ */ d("div", { className: p, role: "group", "aria-label": "Segmented control", children: a.map((e) => /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      "data-value": e.value,
      className: `nxp-segmented__option${s === e.value ? " is-selected" : ""}`,
      onClick: f,
      "aria-pressed": s === e.value,
      children: e.label
    },
    e.value
  )) });
}
const j = v(x);
export {
  j as Segmented,
  j as default
};
