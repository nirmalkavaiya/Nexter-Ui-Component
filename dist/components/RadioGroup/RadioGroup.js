import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { useId as p } from "react";
import { Radio as f } from "../Radio/Radio.js";
import { Tooltip as b } from "../Tooltip/Tooltip.js";
function j({
  options: l = [],
  value: r,
  onChange: s,
  name: d,
  disabled: n = !1,
  className: t = ""
}) {
  const c = p(), u = d || c;
  return /* @__PURE__ */ e(
    "div",
    {
      className: ["nxp-radio-group", t].filter(Boolean).join(" "),
      role: "radiogroup",
      children: l.map((o) => {
        const i = r === o.value, a = n || !!o.disabled;
        return /* @__PURE__ */ m(
          "div",
          {
            className: [
              "nxp-radio-group__item",
              i ? "is-checked" : "",
              a ? "is-disabled" : ""
            ].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ e(
                f,
                {
                  name: u,
                  value: o.value,
                  checked: i,
                  onChange: s,
                  disabled: a,
                  label: o.label
                }
              ),
              o.tooltip && /* @__PURE__ */ e(b, { content: o.tooltip, position: "top" })
            ]
          },
          o.value
        );
      })
    }
  );
}
export {
  j as RadioGroup,
  j as default
};
