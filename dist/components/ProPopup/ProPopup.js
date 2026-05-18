import { jsx as n, jsxs as u } from "react/jsx-runtime";
import { useEffect as y, useCallback as U } from "react";
import { createPortal as W } from "react-dom";
import { cn as b } from "../../lib/utils.js";
import { sanitizeHtml as D } from "../../lib/sanitize.js";
const K = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M11 3L3 11M3 3l8 8", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), q = () => /* @__PURE__ */ n("svg", { width: "9", height: "8", viewBox: "0 0 11 9", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 4.5L4 7.5L10 1", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), A = () => /* @__PURE__ */ u("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M2 19h20v2H2v-2zm2-3l3-9 4 6 3-9 3 9 3-6v9H4v-0z" }),
  /* @__PURE__ */ n("path", { d: "M4 7l3 9h10l3-9-4 6-4-6-4 6-4-6z", fillOpacity: "0.85" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "5", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "3", cy: "8", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "21", cy: "8", r: "2" })
] });
function V({
  open: t = !1,
  portal: _ = !0,
  container: w,
  lockScroll: g,
  details: o,
  title: L,
  list: N,
  buttonText: B,
  buttonLink: C,
  onButtonClick: M,
  buttonIcon: s,
  bottomText: T,
  onClose: e,
  closeOnOverlay: O,
  className: z = ""
}) {
  const p = L ?? (o == null ? void 0 : o.title), v = N ?? (o == null ? void 0 : o.list) ?? [], H = B ?? (o == null ? void 0 : o.buttonText) ?? "Upgrade Now", l = C ?? (o == null ? void 0 : o.buttonLink), i = M ?? (o == null ? void 0 : o.onButtonClick), f = s !== void 0 ? s : o == null ? void 0 : o.buttonIcon, c = T ?? (o == null ? void 0 : o.bottomText), I = O ?? (o == null ? void 0 : o.closeOnOverlay) ?? !0, h = _ ?? (o == null ? void 0 : o.portal) ?? !0, j = w ?? (o == null ? void 0 : o.container), d = g ?? (o == null ? void 0 : o.lockScroll) ?? h;
  y(() => {
    if (t && d) {
      const r = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = r;
      };
    }
  }, [t, d]);
  const m = U(
    (r) => {
      r.key === "Escape" && e && e();
    },
    [e]
  );
  if (y(() => {
    if (t)
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [t, m]), !t) return null;
  const E = typeof c == "string" && /<[a-z][\s\S]*>/i.test(c), P = (r) => {
    i && i(r), l && window.open(l, "_blank", "noopener,noreferrer");
  }, a = f !== void 0 ? f : /* @__PURE__ */ n(A, {}), k = /* @__PURE__ */ n(
    "div",
    {
      className: b("nxp-pp-backdrop", !h && "nxp-pp-backdrop--inline"),
      onMouseDown: (r) => {
        I && r.target === r.currentTarget && e && e();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-label": typeof p == "string" ? p : "Upgrade popup",
      children: /* @__PURE__ */ u("div", { className: b("nxp-pp", z), children: [
        e && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-pp__close",
            "aria-label": "Close popup",
            onClick: e,
            children: /* @__PURE__ */ n(K, {})
          }
        ),
        p && /* @__PURE__ */ n("div", { className: "nxp-pp__title", children: p }),
        v.length > 0 && /* @__PURE__ */ n("ul", { className: "nxp-pp__list", role: "list", children: v.map((r, S) => /* @__PURE__ */ u("li", { className: "nxp-pp__list-item", children: [
          /* @__PURE__ */ n("span", { className: "nxp-pp__check", "aria-hidden": "true", children: /* @__PURE__ */ n(q, {}) }),
          /* @__PURE__ */ n("span", { children: r })
        ] }, S)) }),
        (l || i) && /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: "nxp-pp__btn",
            onClick: P,
            children: [
              a && /* @__PURE__ */ n("span", { className: "nxp-pp__btn-icon", children: a }),
              H
            ]
          }
        ),
        c && (E ? /* @__PURE__ */ n(
          "p",
          {
            className: "nxp-pp__bottom",
            dangerouslySetInnerHTML: { __html: D(c) }
          }
        ) : /* @__PURE__ */ n("p", { className: "nxp-pp__bottom", children: c }))
      ] })
    }
  );
  if (!h) return k;
  const x = j ?? (typeof document < "u" ? document.body : null);
  return x ? W(k, x) : null;
}
export {
  V as ProPopup,
  V as default
};
