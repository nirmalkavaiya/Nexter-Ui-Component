import { jsx as c } from "react/jsx-runtime";
import { useState as m, useCallback as b } from "react";
function v({ options: r = [], value: s, onChange: l, className: i = "" }) {
  var n;
  const t = s !== void 0, [d, u] = m((n = r[0]) == null ? void 0 : n.value), a = t ? s : d, o = b(
    (e) => {
      t || u(e), l && l(e);
    },
    [t, l]
  );
  return /* @__PURE__ */ c("div", { className: `nxp-segmented ${i}`, role: "group", "aria-label": "Segmented control", children: r.map((e) => /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      className: `nxp-segmented__option${a === e.value ? " is-selected" : ""}`,
      onClick: () => o(e.value),
      "aria-pressed": a === e.value,
      children: e.label
    },
    e.value
  )) });
}
export {
  v as Segmented,
  v as default
};
