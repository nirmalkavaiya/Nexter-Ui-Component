import { jsxs as n, jsx as e, Fragment as y } from "react/jsx-runtime";
import "react";
import { Toggle as E } from "../Toggle/Toggle.js";
import { Tooltip as j } from "../Tooltip/Tooltip.js";
const W = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ e("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), $ = () => /* @__PURE__ */ n("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", "aria-hidden": "true", children: [
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
] }), R = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
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
] }), F = () => /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 5.5h7M6 3l3 2.5L6 8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }), g = {
  default: "nxp-ftc__badge",
  primary: "nxp-ftc__badge nxp-ftc__badge--primary",
  success: "nxp-ftc__badge nxp-ftc__badge--success",
  warning: "nxp-ftc__badge nxp-ftc__badge--warning",
  error: "nxp-ftc__badge nxp-ftc__badge--error",
  beta: "nxp-ftc__badge nxp-ftc__badge--beta",
  pro: "nxp-ftc__badge nxp-ftc__badge--pro"
}, V = {
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
  isNew: m = !1,
  onUpgradeClick: i,
  /* feature-level badge (backward compat) */
  showBadge: v = !1,
  badgeText: l = "BETA",
  badgeVariant: N = "beta",
  /* docs */
  docsLabel: h = "Read Docs",
  docsHref: f,
  onDocsClick: w,
  /* interaction */
  isEnabled: _,
  onToggle: s,
  onChange: d,
  onSettingsClick: x,
  disabled: a = !1,
  redirectLink: u,
  className: C = ""
}) {
  const b = c && c !== "free", o = r || a;
  function L(k) {
    const A = { target: { checked: k } };
    d == null || d(A), s == null || s(k);
  }
  const M = [
    "nxp-ftc-outer",
    b ? "nxp-ftc-outer--has-plan" : ""
  ].filter(Boolean).join(" "), B = [
    "nxp-ftc nxp-bg-default nxp-p-20 nxp-rounded-md",
    r ? "nxp-ftc--locked" : "",
    a ? "nxp-ftc--disabled" : "",
    C
  ].filter(Boolean).join(" "), I = f ? /* @__PURE__ */ e(
    "a",
    {
      href: f,
      className: "nxp-body nxp-btn--underline nxp-ftc__link",
      target: "_blank",
      rel: "noopener noreferrer",
      tabIndex: o ? -1 : 0,
      children: h
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "nxp-ftc__link nxp-ftc__link--btn",
      onClick: w,
      disabled: o,
      tabIndex: o ? -1 : 0,
      children: h
    }
  );
  return /* @__PURE__ */ n("div", { className: M, children: [
    b && /* @__PURE__ */ e("span", { className: `nxp-ftc-plan nxp-ftc-plan--${c}`, children: V[c] }),
    /* @__PURE__ */ e("div", { className: B, children: /* @__PURE__ */ n("div", { className: "nxp-ftc__body", children: [
      /* @__PURE__ */ n("div", { className: "nxp-ftc__left", children: [
        /* @__PURE__ */ n("div", { className: "nxp-ftc__title-row", children: [
          /* @__PURE__ */ e("span", { className: "nxp-title-label nxp-cursor-pointer", children: t }),
          m && /* @__PURE__ */ e("span", { className: "nxp-ftc__badge nxp-ftc__badge--new", "aria-label": "New feature", children: "NEW" }),
          v && l && /* @__PURE__ */ e(
            "span",
            {
              className: g[N] ?? g.default,
              "aria-label": `${l} feature`,
              children: l
            }
          ),
          p && /* @__PURE__ */ e(j, { content: p, children: /* @__PURE__ */ e(
            "span",
            {
              className: "nxp-ftc__info-icon",
              tabIndex: o ? -1 : 0,
              role: "button",
              "aria-label": `About ${t}`,
              children: /* @__PURE__ */ e(W, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ n("div", { className: "nxp-ftc__links", children: [
          I,
          r && i && /* @__PURE__ */ n(y, { children: [
            /* @__PURE__ */ e("span", { className: "nxp-ftc__links-sep", "aria-hidden": "true", children: "·" }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-ftc__upgrade-link nxp-ftc__link--btn",
                onClick: i,
                children: [
                  "Upgrade",
                  /* @__PURE__ */ e(F, {})
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-ftc__right", children: [
        x && !r && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-ftc__settings-btn",
            onClick: x,
            disabled: a,
            "aria-label": `${t} settings`,
            tabIndex: a ? -1 : 0,
            children: /* @__PURE__ */ e($, {})
          }
        ),
        u && _ && /* @__PURE__ */ e("a", { href: u, target: "_blank", className: "nxp-ftc__redirect-link", children: /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 19 19", fill: "none", children: /* @__PURE__ */ e("path", { d: "M12.6667 8.77778V13.4444C12.6667 13.857 12.5028 14.2527 12.2111 14.5444C11.9193 14.8361 11.5237 15 11.1111 15H2.55556C2.143 15 1.74733 14.8361 1.45561 14.5444C1.16389 14.2527 1 13.857 1 13.4444V4.88889C1 4.47633 1.16389 4.08067 1.45561 3.78894C1.74733 3.49722 2.143 3.33333 2.55556 3.33333H7.22222M10.3333 1H15M15 1V5.66667M15 1L6.44482 9.55556", stroke: "#1A1A1A", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        r ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-ftc__lock-btn",
            onClick: i,
            "aria-label": `Upgrade to unlock ${t}`,
            title: "Upgrade to unlock",
            children: /* @__PURE__ */ e(R, {})
          }
        ) : /* @__PURE__ */ e(
          E,
          {
            checked: _,
            onChange: L,
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
