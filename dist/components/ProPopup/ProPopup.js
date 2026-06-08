import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { useRef as L, useEffect as l, useCallback as W } from "react";
import { createPortal as q } from "react-dom";
import { cn as N } from "../../lib/utils.js";
import { sanitizeHtml as K } from "../../lib/sanitize.js";
const G = () => /* @__PURE__ */ o("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ o("path", { d: "M11 3L3 11M3 3l8 8", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), J = () => /* @__PURE__ */ o("svg", { width: "9", height: "8", viewBox: "0 0 11 9", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ o("path", { d: "M1 4.5L4 7.5L10 1", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), Q = () => /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: [
  /* @__PURE__ */ o("path", { d: "M2 19h20v2H2v-2zm2-3l3-9 4 6 3-9 3 9 3-6v9H4v-0z" }),
  /* @__PURE__ */ o("path", { d: "M4 7l3 9h10l3-9-4 6-4-6-4 6-4-6z", fillOpacity: "0.85" }),
  /* @__PURE__ */ o("circle", { cx: "12", cy: "5", r: "2" }),
  /* @__PURE__ */ o("circle", { cx: "3", cy: "8", r: "2" }),
  /* @__PURE__ */ o("circle", { cx: "21", cy: "8", r: "2" })
] });
function nn({
  open: e = !1,
  portal: C = !0,
  container: B,
  lockScroll: O,
  details: n,
  title: M,
  list: T,
  buttonText: E,
  buttonLink: I,
  onButtonClick: z,
  buttonIcon: v,
  bottomText: H,
  onClose: t,
  closeOnOverlay: P,
  closeOnEscape: j,
  className: S = ""
}) {
  const a = L(null), d = L(t);
  l(() => {
    d.current = t;
  }, [t]);
  const u = M ?? (n == null ? void 0 : n.title), k = T ?? (n == null ? void 0 : n.list) ?? [], R = E ?? (n == null ? void 0 : n.buttonText) ?? "Upgrade Now", s = I ?? (n == null ? void 0 : n.buttonLink), m = z ?? (n == null ? void 0 : n.onButtonClick), x = v !== void 0 ? v : n == null ? void 0 : n.buttonIcon, p = H ?? (n == null ? void 0 : n.bottomText), A = P ?? (n == null ? void 0 : n.closeOnOverlay) ?? !0, y = j ?? (n == null ? void 0 : n.closeOnEscape) ?? !0, f = C ?? (n == null ? void 0 : n.portal) ?? !0, D = B ?? (n == null ? void 0 : n.container), b = O ?? (n == null ? void 0 : n.lockScroll) ?? f;
  l(() => {
    if (e && b) {
      const r = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = r;
      };
    }
  }, [e, b]);
  const h = W((r) => {
    if (r.key !== "Escape" || !y) return;
    const c = d.current;
    typeof c == "function" && (r.preventDefault(), r.stopPropagation(), c());
  }, [y]);
  if (l(() => {
    if (e)
      return document.addEventListener("keydown", h, !0), () => document.removeEventListener("keydown", h, !0);
  }, [e, h]), l(() => {
    if (!e) return;
    const r = requestAnimationFrame(() => {
      var c;
      return (c = a.current) == null ? void 0 : c.focus();
    });
    return () => cancelAnimationFrame(r);
  }, [e]), !e) return null;
  const F = typeof p == "string" && /<[a-z][\s\S]*>/i.test(p), U = (r) => {
    m && m(r), s && window.open(s, "_blank", "noopener,noreferrer");
  }, _ = x !== void 0 ? x : /* @__PURE__ */ o(Q, {}), g = /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      tabIndex: -1,
      className: N("nxp-pp-backdrop", !f && "nxp-pp-backdrop--inline"),
      onMouseDown: (r) => {
        A && r.target === r.currentTarget && typeof t == "function" && t();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-label": typeof u == "string" ? u : "Upgrade popup",
      children: /* @__PURE__ */ i("div", { className: N("nxp-pp", S), children: [
        t && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "nxp-pp__close",
            "aria-label": "Close popup",
            onClick: t,
            children: /* @__PURE__ */ o(G, {})
          }
        ),
        u && /* @__PURE__ */ o("div", { className: "nxp-pp__title", children: u }),
        k.length > 0 && /* @__PURE__ */ o("ul", { className: "nxp-pp__list", role: "list", children: k.map((r, c) => /* @__PURE__ */ i("li", { className: "nxp-pp__list-item", children: [
          /* @__PURE__ */ o("span", { className: "nxp-pp__check", "aria-hidden": "true", children: /* @__PURE__ */ o(J, {}) }),
          /* @__PURE__ */ o("span", { children: r })
        ] }, c)) }),
        (s || m) && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "nxp-pp__btn",
            onClick: U,
            children: [
              _ && /* @__PURE__ */ o("span", { className: "nxp-pp__btn-icon", children: _ }),
              R
            ]
          }
        ),
        p && (F ? /* @__PURE__ */ o(
          "p",
          {
            className: "nxp-pp__bottom",
            dangerouslySetInnerHTML: { __html: K(p) }
          }
        ) : /* @__PURE__ */ o("p", { className: "nxp-pp__bottom", children: p }))
      ] })
    }
  );
  if (!f) return g;
  const w = D ?? (typeof document < "u" ? document.body : null);
  return w ? q(g, w) : null;
}
export {
  nn as ProPopup,
  nn as default
};
