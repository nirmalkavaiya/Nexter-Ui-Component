import { jsxs as s, jsx as a } from "react/jsx-runtime";
import "react";
function m({
  open: d = !0,
  onClose: c,
  icon: i,
  iconVariant: n = "warning",
  title: l,
  description: e,
  actions: r,
  className: o = ""
}) {
  return d ? /* @__PURE__ */ s(
    "div",
    {
      className: `nxp-dialog ${o}`,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-label": l,
      children: [
        i && /* @__PURE__ */ a("div", { className: `nxp-dialog__icon nxp-dialog__icon--${n}`, "aria-hidden": "true", children: i }),
        l && /* @__PURE__ */ a("div", { className: "nxp-dialog__title", children: l }),
        e && /* @__PURE__ */ a("p", { className: "nxp-dialog__desc", children: e }),
        r && /* @__PURE__ */ a("div", { className: "nxp-dialog__actions", children: r })
      ]
    }
  ) : null;
}
export {
  m as Dialog,
  m as default
};
