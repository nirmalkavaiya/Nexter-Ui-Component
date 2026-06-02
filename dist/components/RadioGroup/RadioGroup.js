import { jsx as e, jsxs as k } from "react/jsx-runtime";
import { useId as h, useCallback as j, useMemo as I } from "react";
import { cn as a } from "../../lib/utils.js";
import { Radio as M } from "../Radio/Radio.js";
import { Tooltip as N } from "../Tooltip/Tooltip.js";
function z({
  options: r = [],
  value: d,
  onChange: i,
  name: c,
  disabled: m = !1,
  tooltipPosition: u = "top",
  className: s = ""
}) {
  const n = h(), p = c || n, f = j((o) => i == null ? void 0 : i(o), [i]), b = I(
    () => a("nxp-radio-group", s),
    [s]
  );
  return /* @__PURE__ */ e("div", { className: b, role: "radiogroup", children: r.map((o) => {
    const t = d === o.value, l = m || !!o.disabled, v = o.tooltipPosition ?? u, x = a(
      "nxp-radio-group__item",
      t && "is-checked",
      l && "is-disabled"
    );
    return /* @__PURE__ */ k("div", { className: x, children: [
      /* @__PURE__ */ e(
        M,
        {
          name: p,
          value: o.value,
          checked: t,
          onChange: f,
          disabled: l,
          label: o.label
        }
      ),
      o.tooltip && /* @__PURE__ */ e(N, { content: o.tooltip, position: v })
    ] }, o.value);
  }) });
}
export {
  z as RadioGroup,
  z as default
};
