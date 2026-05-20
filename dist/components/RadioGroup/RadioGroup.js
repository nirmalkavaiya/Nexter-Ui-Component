import { jsx as i, jsxs as f } from "react/jsx-runtime";
import { useId as b } from "react";
import { Radio as v } from "../Radio/Radio.js";
import { Tooltip as h } from "../Tooltip/Tooltip.js";
function N({
  options: l = [],
  value: r,
  onChange: s,
  name: t,
  disabled: d = !1,
  tooltipPosition: n = "top",
  className: c = ""
}) {
  const u = b(), m = t || u;
  return /* @__PURE__ */ i(
    "div",
    {
      className: ["nxp-radio-group", c].filter(Boolean).join(" "),
      role: "radiogroup",
      children: l.map((o) => {
        const e = r === o.value, a = d || !!o.disabled, p = o.tooltipPosition ?? n;
        return /* @__PURE__ */ f(
          "div",
          {
            className: [
              "nxp-radio-group__item",
              e ? "is-checked" : "",
              a ? "is-disabled" : ""
            ].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ i(
                v,
                {
                  name: m,
                  value: o.value,
                  checked: e,
                  onChange: s,
                  disabled: a,
                  label: o.label
                }
              ),
              o.tooltip && /* @__PURE__ */ i(h, { content: o.tooltip, position: p })
            ]
          },
          o.value
        );
      })
    }
  );
}
export {
  N as RadioGroup,
  N as default
};
