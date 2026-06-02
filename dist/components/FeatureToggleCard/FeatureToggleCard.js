import { jsxs as n, jsx as a } from "react/jsx-runtime";
import "react";
import { Toggle as D } from "../Toggle/Toggle.js";
import { Tooltip as R } from "../Tooltip/Tooltip.js";
import { sanitizeHtml as $ } from "../../lib/sanitize.js";
import { InfoIcon as E } from "../../lib/icons.js";
const P = () => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", fill: "none", viewBox: "0 0 15 15", children: /* @__PURE__ */ a("path", { fill: "#4b465c80", fillRule: "evenodd", d: "M13.006 9.758a.5.5 0 0 0-.172.203.5.5 0 0 0-.03.274c.01.09.06.172.12.243.183.183.315.365.396.578.09.213.131.426.131.649s-.05.446-.131.649a1.67 1.67 0 0 1-.912.912 1.69 1.69 0 0 1-1.842-.365.53.53 0 0 0-.273-.162.4.4 0 0 0-.273.03.45.45 0 0 0-.213.172.44.44 0 0 0-.081.254c0 .537-.172.963-.496 1.287a1.684 1.684 0 0 1-2.389 0 1.7 1.7 0 0 1-.496-1.196.6.6 0 0 0-.091-.304.5.5 0 0 0-.223-.162c-.121-.04-.213-.061-.304-.04a.46.46 0 0 0-.243.12 1.8 1.8 0 0 1-.577.396 1.69 1.69 0 0 1-2.206-.912 1.6 1.6 0 0 1-.132-.649c0-.223.05-.446.132-.649a1.6 1.6 0 0 1 .364-.547.53.53 0 0 0 .162-.274.43.43 0 0 0-.03-.274.45.45 0 0 0-.172-.212.44.44 0 0 0-.254-.082c-.546 0-.981-.182-1.295-.496a1.69 1.69 0 0 1 0-2.393c.314-.314.749-.497 1.194-.497.142 0 .233-.03.304-.08a.46.46 0 0 0 .172-.224.55.55 0 0 0 .04-.304.46.46 0 0 0-.12-.243 1.8 1.8 0 0 1-.396-.578 1.6 1.6 0 0 1-.131-.649c0-.223.05-.446.131-.649a1.669 1.669 0 0 1 .911-.912 1.69 1.69 0 0 1 1.843.365.53.53 0 0 0 .273.162c.091.02.192.01.273-.03l.023-.009a.3.3 0 0 1 .089-.022.5.5 0 0 0 .141-.142.44.44 0 0 0 .081-.253c0-.547.183-.973.496-1.287.638-.64 1.762-.64 2.39 0 .323.324.495.75.495 1.196 0 .142.03.223.081.304s.122.132.203.172a.5.5 0 0 0 .273.03.46.46 0 0 0 .243-.121 1.688 1.688 0 0 1 2.784.517c.091.213.132.426.132.649s-.051.446-.132.649a1.6 1.6 0 0 1-.364.547.6.6 0 0 0-.152.274.42.42 0 0 0 .03.274c.02.04.04.08.04.121.041.061.082.102.142.142.071.05.162.081.253.081.547 0 .972.173 1.286.497.324.324.496.74.496 1.196s-.172.882-.496 1.196a1.66 1.66 0 0 1-1.194.497.54.54 0 0 0-.304.081m-1.094-.203c.112-.263.294-.486.537-.648l.01-.01c.243-.153.516-.244.81-.244.243 0 .405-.06.537-.192a.64.64 0 0 0 .202-.477.7.7 0 0 0-.202-.476.64.64 0 0 0-.476-.203h-.101c-.284 0-.567-.081-.81-.243a1.42 1.42 0 0 1-.547-.65.3.3 0 0 1-.04-.141 1.5 1.5 0 0 1-.061-.76c.05-.294.182-.558.395-.77a.8.8 0 0 0 .182-.264.8.8 0 0 0 .05-.264.8.8 0 0 0-.05-.264.6.6 0 0 0-.142-.223.6.6 0 0 0-.223-.152.65.65 0 0 0-.516 0 .56.56 0 0 0-.223.142c-.253.244-.516.385-.81.436a1.48 1.48 0 0 1-1.508-.649 1.5 1.5 0 0 1-.243-.81c0-.244-.07-.406-.202-.538a.69.69 0 0 0-.952 0 .64.64 0 0 0-.202.477v.1c0 .285-.081.569-.243.812a1.42 1.42 0 0 1-.67.556c-.04.017-.076.032-.12.032a1.5 1.5 0 0 1-.759.06 1.4 1.4 0 0 1-.77-.395.8.8 0 0 0-.262-.182.65.65 0 0 0-.517 0 .6.6 0 0 0-.222.152.8.8 0 0 0-.142.223.8.8 0 0 0-.05.264c0 .09.02.182.05.263s.08.162.142.223c.242.254.384.517.435.811s.02.588-.101.862a1.46 1.46 0 0 1-.517.659 1.45 1.45 0 0 1-.83.274.77.77 0 0 0-.546.202.66.66 0 0 0-.203.477c0 .172.081.344.203.476a.66.66 0 0 0 .475.203h.102a1.477 1.477 0 0 1 1.356.892c.122.274.152.568.101.862s-.182.557-.394.77a.8.8 0 0 0-.183.264.8.8 0 0 0-.05.263c0 .092.02.173.05.254.04.091.081.162.152.223.071.06.142.111.223.142a.65.65 0 0 0 .516 0 .56.56 0 0 0 .223-.142c.253-.243.516-.385.81-.436.08-.02.172-.02.263-.02.202 0 .405.04.597.121.243.091.486.274.658.517.172.244.273.538.273.832 0 .233.081.415.203.537.243.253.698.253.951 0a.66.66 0 0 0 .203-.477v-.101c0-.284.08-.568.243-.811.152-.243.385-.436.648-.547.273-.122.567-.152.86-.102s.557.183.77.396a.7.7 0 0 0 .253.182.65.65 0 0 0 .516 0 .47.47 0 0 0 .223-.142.708.708 0 0 0 .192-.476.8.8 0 0 0-.05-.264.6.6 0 0 0-.143-.213c-.242-.253-.384-.517-.435-.81a1.5 1.5 0 0 1 .101-.863m-6.185-1.56a2.283 2.283 0 0 1 2.278-2.28 2.283 2.283 0 0 1 2.278 2.28 2.283 2.283 0 0 1-2.278 2.282 2.283 2.283 0 0 1-2.278-2.281m1.013 0c0 .7.567 1.268 1.265 1.268a1.267 1.267 0 0 0 0-2.535c-.698 0-1.265.568-1.265 1.268", clipRule: "evenodd" }) }), g = {
  default: "nxp-ftc__badge",
  primary: "nxp-ftc__badge nxp-ftc__badge--primary",
  success: "nxp-ftc__badge nxp-ftc__badge--success",
  warning: "nxp-ftc__badge nxp-ftc__badge--warning",
  error: "nxp-ftc__badge nxp-ftc__badge--error",
  beta: "nxp-ftc__badge nxp-ftc__badge--beta",
  pro: "nxp-ftc__badge nxp-ftc__badge--pro"
};
function W({
  /* content */
  title: l,
  tooltip: p,
  description: e,
  /* plan — top pill: pass `planLabel` text only (no built-in defaults) */
  planLabel: d,
  isLocked: c = !1,
  isNew: u = !1,
  onUpgradeClick: v,
  /* feature-level badge (backward compat) */
  showBadge: N = !1,
  badgeText: o = "BETA",
  badgeVariant: w = "beta",
  /* docs */
  docsLabel: y = "Read Docs",
  docsHref: f,
  onDocsClick: z,
  /* tooltip */
  tooltipPosition: k = "top",
  /* interaction */
  isEnabled: t,
  onToggle: i,
  onChange: s,
  onSettingsClick: _,
  disabled: r = !1,
  redirectLink: x,
  className: B = ""
}) {
  const m = typeof d == "string" ? d.trim() : "", I = !!m, h = c || r, A = typeof e == "string" && /<[a-z][\s\S]*>/i.test(e);
  function C(b) {
    const H = { target: { checked: b } };
    s == null || s(H), i == null || i(b);
  }
  const M = [
    "nxp-ftc-outer"
  ].filter(Boolean).join(" "), j = [
    "nxp-ftc nxp-bg-default nxp-p-20 nxp-rounded-md",
    c ? "nxp-ftc--locked" : "",
    r ? "nxp-ftc--disabled" : "",
    B
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: M, children: [
    I && /* @__PURE__ */ a("span", { className: "nxp-ftc-plan", children: m }),
    /* @__PURE__ */ n("div", { className: j, children: [
      /* @__PURE__ */ n("div", { className: "nxp-ftc__body", children: [
        /* @__PURE__ */ n("div", { className: "nxp-ftc__title-row", children: [
          /* @__PURE__ */ a("span", { className: "nxp-title-label nxp-cursor-pointer", children: l }),
          u && /* @__PURE__ */ a("span", { className: "nxp-ftc__badge nxp-ftc__badge--new", "aria-label": "New", children: "NEW" }),
          N && o && /* @__PURE__ */ a(
            "span",
            {
              className: g[w] ?? g.default,
              "aria-label": `${o} feature`,
              children: o
            }
          ),
          p && /* @__PURE__ */ a(R, { content: p, position: k, children: /* @__PURE__ */ a(
            "span",
            {
              className: "nxp-ftc__info-icon",
              tabIndex: h ? -1 : 0,
              role: "button",
              "aria-label": `About ${l}`,
              children: /* @__PURE__ */ a(E, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ n("div", { className: "nxp-ftc__right", children: [
          _ && !c && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "nxp-ftc__settings-btn" + (t ? " setting-enable" : ""),
              onClick: _,
              disabled: !t || r,
              "aria-label": `${l} settings`,
              tabIndex: !t || r ? -1 : 0,
              children: /* @__PURE__ */ a(P, {})
            }
          ),
          x && t && /* @__PURE__ */ a("a", { href: x, target: "_blank", rel: "noopener noreferrer", className: "nxp-ftc__redirect-link", children: /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 19 19", fill: "none", children: /* @__PURE__ */ a("path", { d: "M12.6667 8.77778V13.4444C12.6667 13.857 12.5028 14.2527 12.2111 14.5444C11.9193 14.8361 11.5237 15 11.1111 15H2.55556C2.143 15 1.74733 14.8361 1.45561 14.5444C1.16389 14.2527 1 13.857 1 13.4444V4.88889C1 4.47633 1.16389 4.08067 1.45561 3.78894C1.74733 3.49722 2.143 3.33333 2.55556 3.33333H7.22222M10.3333 1H15M15 1V5.66667M15 1L6.44482 9.55556", stroke: "#1A1A1A", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          s && /* @__PURE__ */ a(
            D,
            {
              checked: t,
              onChange: C,
              disabled: r,
              "aria-label": `Enable ${l}`,
              isPro: c,
              onProClick: c ? v : void 0
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-ftc__links", children: [
        e && (A ? /* @__PURE__ */ a(
          "div",
          {
            className: "nxp-body nxp-mt-12 nxp-lh-22",
            dangerouslySetInnerHTML: { __html: $(e) }
          }
        ) : /* @__PURE__ */ a("div", { className: "nxp-body nxp-mt-12 nxp-lh-22", children: e })),
        f && /* @__PURE__ */ a(
          "a",
          {
            href: f,
            className: "nxp-body nxp-btn--underline nxp-ftc__link",
            target: "_blank",
            rel: "noopener noreferrer",
            tabIndex: h ? -1 : 0,
            children: y
          }
        )
      ] })
    ] })
  ] });
}
export {
  W as FeatureToggleCard,
  W as default
};
