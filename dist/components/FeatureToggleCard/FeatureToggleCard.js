import { jsxs as n, jsx as e, Fragment as E } from "react/jsx-runtime";
import "react";
import { Toggle as M } from "../Toggle/Toggle.js";
import { Tooltip as W } from "../Tooltip/Tooltip.js";
const j = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), y = () => /* @__PURE__ */ n("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e(
    "path",
    {
      d: "M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e(
    "path",
    {
      d: "M12.03 9.22a1 1 0 0 0 .2 1.1l.04.04a1.21 1.21 0 0 1-1.71 1.71l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91v.11a1.21 1.21 0 0 1-2.42 0v-.06a1 1 0 0 0-.66-.91 1 1 0 0 0-1.1.2l-.04.04a1.21 1.21 0 0 1-1.71-1.71l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H2.1a1.21 1.21 0 0 1 0-2.42h.06a1 1 0 0 0 .91-.66 1 1 0 0 0-.2-1.1l-.04-.04a1.21 1.21 0 0 1 1.71-1.71l.04.04a1 1 0 0 0 1.1.2h.05a1 1 0 0 0 .6-.91V2.1a1.21 1.21 0 0 1 2.42 0v.06a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.04a1.21 1.21 0 0 1 1.71 1.71l-.04.04a1 1 0 0 0-.2 1.1v.05a1 1 0 0 0 .91.6h.11a1.21 1.21 0 0 1 0 2.42h-.06a1 1 0 0 0-.91.6Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }), A = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("rect", { x: "2.5", y: "6.5", width: "9", height: "6.5", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ e(
    "path",
    {
      d: "M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round"
    }
  )
] }), $ = () => /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 5.5h7M6 3l3 2.5L6 8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }), b = {
  default: "nxp-ftc__badge",
  primary: "nxp-ftc__badge nxp-ftc__badge--primary",
  success: "nxp-ftc__badge nxp-ftc__badge--success",
  warning: "nxp-ftc__badge nxp-ftc__badge--warning",
  error: "nxp-ftc__badge nxp-ftc__badge--error",
  beta: "nxp-ftc__badge nxp-ftc__badge--beta",
  pro: "nxp-ftc__badge nxp-ftc__badge--pro"
}, R = {
  pro: "PRO",
  freemium: "FREEMIUM"
};
function G({
  /* content */
  title: t,
  tooltip: p,
  /* plan */
  planType: c = "free",
  // 'free' | 'pro' | 'freemium'
  isLocked: r = !1,
  isNew: k = !1,
  onUpgradeClick: i,
  /* feature-level badge (backward compat) */
  showBadge: m = !1,
  badgeText: l = "BETA",
  badgeVariant: g = "beta",
  /* docs */
  docsLabel: f = "Read Docs",
  docsHref: h,
  onDocsClick: v,
  /* interaction */
  isEnabled: N,
  onToggle: s,
  onChange: d,
  onSettingsClick: _,
  disabled: a = !1,
  className: w = ""
}) {
  const x = c && c !== "free", o = r || a;
  function I(u) {
    d == null || d(u), s == null || s(u);
  }
  const B = [
    "nxp-ftc-outer",
    x ? "nxp-ftc-outer--has-plan" : ""
  ].filter(Boolean).join(" "), L = [
    "nxp-ftc",
    r ? "nxp-ftc--locked" : "",
    a ? "nxp-ftc--disabled" : "",
    w
  ].filter(Boolean).join(" "), C = h ? /* @__PURE__ */ e(
    "a",
    {
      href: h,
      className: "nxp-ftc__link",
      target: "_blank",
      rel: "noopener noreferrer",
      tabIndex: o ? -1 : 0,
      children: f
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "nxp-ftc__link nxp-ftc__link--btn",
      onClick: v,
      disabled: o,
      tabIndex: o ? -1 : 0,
      children: f
    }
  );
  return /* @__PURE__ */ n("div", { className: B, children: [
    x && /* @__PURE__ */ e("span", { className: `nxp-ftc-plan nxp-ftc-plan--${c}`, children: R[c] }),
    /* @__PURE__ */ e("div", { className: L, children: /* @__PURE__ */ n("div", { className: "nxp-ftc__body", children: [
      /* @__PURE__ */ n("div", { className: "nxp-ftc__left", children: [
        /* @__PURE__ */ n("div", { className: "nxp-ftc__title-row", children: [
          /* @__PURE__ */ e("span", { className: "nxp-ftc__title", children: t }),
          k && /* @__PURE__ */ e("span", { className: "nxp-ftc__badge nxp-ftc__badge--new", "aria-label": "New feature", children: "NEW" }),
          m && l && /* @__PURE__ */ e(
            "span",
            {
              className: b[g] ?? b.default,
              "aria-label": `${l} feature`,
              children: l
            }
          ),
          p && /* @__PURE__ */ e(W, { content: p, children: /* @__PURE__ */ e(
            "span",
            {
              className: "nxp-ftc__info-icon",
              tabIndex: o ? -1 : 0,
              role: "button",
              "aria-label": `About ${t}`,
              children: /* @__PURE__ */ e(j, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ n("div", { className: "nxp-ftc__links", children: [
          C,
          r && i && /* @__PURE__ */ n(E, { children: [
            /* @__PURE__ */ e("span", { className: "nxp-ftc__links-sep", "aria-hidden": "true", children: "·" }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-ftc__upgrade-link nxp-ftc__link--btn",
                onClick: i,
                children: [
                  "Upgrade",
                  /* @__PURE__ */ e($, {})
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-ftc__right", children: [
        _ && !r && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-ftc__settings-btn",
            onClick: _,
            disabled: a,
            "aria-label": `${t} settings`,
            tabIndex: a ? -1 : 0,
            children: /* @__PURE__ */ e(y, {})
          }
        ),
        r ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-ftc__lock-btn",
            onClick: i,
            "aria-label": `Upgrade to unlock ${t}`,
            title: "Upgrade to unlock",
            children: /* @__PURE__ */ e(A, {})
          }
        ) : /* @__PURE__ */ e(
          M,
          {
            checked: N,
            onChange: I,
            disabled: a,
            "aria-label": `Enable ${t}`
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  G as FeatureToggleCard,
  G as default
};
