import { jsx as t, jsxs as f } from "react/jsx-runtime";
import u from "react";
import { cn as l } from "../../lib/utils.js";
function v({
  icon: n,
  title: m,
  description: a,
  desc: r,
  action: e,
  className: i,
  iconClassName: d,
  titleClassName: c,
  descriptionClassName: o,
  descClassName: x,
  actionClassName: y
}) {
  const p = a || r, b = o || x;
  let s = null;
  return e && (u.isValidElement(e) ? s = e : e && typeof e == "object" && e.label && (s = /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: "nxp-btn nxp-btn--primary nxp-btn--sm",
      onClick: e.onClick,
      children: e.label
    }
  ))), /* @__PURE__ */ f("div", { className: l("nxp-empty", i), role: "status", children: [
    n && /* @__PURE__ */ t("div", { className: l("nxp-empty__icon", d), "aria-hidden": "true", children: n }),
    m && /* @__PURE__ */ t("div", { className: l("nxp-empty__title", c), children: m }),
    p && /* @__PURE__ */ t("p", { className: l("nxp-empty__desc", b), children: p }),
    s && /* @__PURE__ */ t("div", { className: l("nxp-empty__action", y), children: s })
  ] });
}
export {
  v as EmptyState,
  v as default
};
