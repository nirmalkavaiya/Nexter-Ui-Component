import { jsx as n, jsxs as i } from "react/jsx-runtime";
import { useEffect as v, useCallback as T } from "react";
import { createPortal as O } from "react-dom";
import { cn as I } from "../../lib/utils.js";
const j = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M11 3L3 11M3 3l8 8", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), z = () => /* @__PURE__ */ n("svg", { width: "11", height: "9", viewBox: "0 0 11 9", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 4.5L4 7.5L10 1", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), E = () => /* @__PURE__ */ i("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M2 19h20v2H2v-2zm2-3l3-9 4 6 3-9 3 9 3-6v9H4v-0z" }),
  /* @__PURE__ */ n("path", { d: "M4 7l3 9h10l3-9-4 6-4-6-4 6-4-6z", fillOpacity: "0.85" }),
  /* @__PURE__ */ n("circle", { cx: "12", cy: "5", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "3", cy: "8", r: "2" }),
  /* @__PURE__ */ n("circle", { cx: "21", cy: "8", r: "2" })
] });
function W({
  open: t = !1,
  details: o,
  title: f,
  list: x,
  buttonText: k,
  buttonLink: y,
  onButtonClick: _,
  buttonIcon: h,
  bottomText: b,
  onClose: r,
  closeOnOverlay: w,
  className: g = ""
}) {
  const p = f ?? (o == null ? void 0 : o.title), m = x ?? (o == null ? void 0 : o.list) ?? [], L = k ?? (o == null ? void 0 : o.buttonText) ?? "Upgrade Now", l = y ?? (o == null ? void 0 : o.buttonLink), u = _ ?? (o == null ? void 0 : o.onButtonClick), d = h !== void 0 ? h : o == null ? void 0 : o.buttonIcon, c = b ?? (o == null ? void 0 : o.bottomText), N = w ?? (o == null ? void 0 : o.closeOnOverlay) ?? !0;
  v(() => {
    if (t) {
      const e = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = e;
      };
    }
  }, [t]);
  const s = T(
    (e) => {
      e.key === "Escape" && r && r();
    },
    [r]
  );
  if (v(() => {
    if (t)
      return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [t, s]), !t) return null;
  const B = typeof c == "string" && /<[a-z][\s\S]*>/i.test(c), C = (e) => {
    u && u(e), l && window.open(l, "_blank", "noopener,noreferrer");
  }, a = d !== void 0 ? d : /* @__PURE__ */ n(E, {});
  return O(
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-pp-backdrop",
        onMouseDown: (e) => {
          N && e.target === e.currentTarget && r && r();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof p == "string" ? p : "Upgrade popup",
        children: /* @__PURE__ */ i("div", { className: I("nxp-pp", g), children: [
          r && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: "nxp-pp__close",
              "aria-label": "Close popup",
              onClick: r,
              children: /* @__PURE__ */ n(j, {})
            }
          ),
          p && /* @__PURE__ */ n("div", { className: "nxp-pp__title", children: p }),
          m.length > 0 && /* @__PURE__ */ n("ul", { className: "nxp-pp__list", role: "list", children: m.map((e, M) => /* @__PURE__ */ i("li", { className: "nxp-pp__list-item", children: [
            /* @__PURE__ */ n("span", { className: "nxp-pp__check", "aria-hidden": "true", children: /* @__PURE__ */ n(z, {}) }),
            /* @__PURE__ */ n("span", { children: e })
          ] }, M)) }),
          (l || u) && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "nxp-pp__btn",
              onClick: C,
              children: [
                a && /* @__PURE__ */ n("span", { className: "nxp-pp__btn-icon", children: a }),
                L
              ]
            }
          ),
          c && (B ? /* @__PURE__ */ n(
            "p",
            {
              className: "nxp-pp__bottom",
              dangerouslySetInnerHTML: { __html: c }
            }
          ) : /* @__PURE__ */ n("p", { className: "nxp-pp__bottom", children: c }))
        ] })
      }
    ),
    document.body
  );
}
export {
  W as ProPopup,
  W as default
};
