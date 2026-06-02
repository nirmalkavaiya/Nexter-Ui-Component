import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { memo as u, useMemo as d } from "react";
import { cn as f } from "../../lib/utils.js";
function p({
  options: s = [],
  value: r,
  onChange: n,
  disabled: a = !1,
  placeholder: l,
  className: o = "",
  ...c
}) {
  const i = d(() => f("nxp-select", o), [o]);
  return /* @__PURE__ */ m(
    "select",
    {
      className: i,
      value: r,
      onChange: n,
      disabled: a,
      ...c,
      children: [
        l && /* @__PURE__ */ t("option", { value: "", disabled: !0, children: l }),
        s.map((e) => /* @__PURE__ */ t("option", { value: e.value, children: e.label }, e.value))
      ]
    }
  );
}
const b = u(p);
export {
  b as Select,
  b as default
};
