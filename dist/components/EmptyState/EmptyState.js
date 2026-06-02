import { jsx as t, jsxs as f } from "react/jsx-runtime";
import u, { memo as N } from "react";
import { cn as s } from "../../lib/utils.js";
function _({
  icon: m,
  title: n,
  description: a,
  desc: i,
  action: e,
  className: r,
  iconClassName: d,
  titleClassName: o,
  descriptionClassName: c,
  descClassName: y,
  actionClassName: x
}) {
  const p = a || i, b = c || y;
  let l = null;
  return e && (u.isValidElement(e) ? l = e : e && typeof e == "object" && e.label && (l = /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: "nxp-btn nxp-btn--primary nxp-btn--sm",
      onClick: e.onClick,
      children: e.label
    }
  ))), /* @__PURE__ */ f("div", { className: s("nxp-empty", r), role: "status", children: [
    m && /* @__PURE__ */ t("div", { className: s("nxp-empty__icon", d), "aria-hidden": "true", children: m }),
    n && /* @__PURE__ */ t("div", { className: s("nxp-empty__title", o), children: n }),
    p && /* @__PURE__ */ t("p", { className: s("nxp-empty__desc", b), children: p }),
    l && /* @__PURE__ */ t("div", { className: s("nxp-empty__action", x), children: l })
  ] });
}
const j = N(_);
export {
  j as EmptyState,
  j as default
};
