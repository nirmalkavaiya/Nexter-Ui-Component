import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { memo as c, useMemo as t } from "react";
import { cn as g } from "../../lib/utils.js";
function p({
  open: n = !0,
  onClose: _,
  icon: i,
  iconVariant: d = "warning",
  title: o,
  description: l,
  actions: e,
  className: r = ""
}) {
  const s = t(() => g("nxp-dialog", r), [r]);
  return n ? /* @__PURE__ */ m(
    "div",
    {
      className: s,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-label": o,
      children: [
        i && /* @__PURE__ */ a("div", { className: `nxp-dialog__icon nxp-dialog__icon--${d}`, "aria-hidden": "true", children: i }),
        o && /* @__PURE__ */ a("div", { className: "nxp-dialog__title", children: o }),
        l && /* @__PURE__ */ a("p", { className: "nxp-dialog__desc", children: l }),
        e && /* @__PURE__ */ a("div", { className: "nxp-dialog__actions", children: e })
      ]
    }
  ) : null;
}
const h = c(p);
export {
  h as Dialog,
  h as default
};
