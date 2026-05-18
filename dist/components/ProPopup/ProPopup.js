import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useEffect as u, useCallback as x } from "react";
import { createPortal as g } from "react-dom";
import { cn as k } from "../../lib/utils.js";
const N = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M11 3L3 11M3 3l8 8", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), b = () => /* @__PURE__ */ e("svg", { width: "11", height: "9", viewBox: "0 0 11 9", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 4.5L4 7.5L10 1", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }) }), L = () => /* @__PURE__ */ c("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("path", { d: "M2 19h20v2H2v-2zm2-3l3-9 4 6 3-9 3 9 3-6v9H4v-0z" }),
  /* @__PURE__ */ e("path", { d: "M4 7l3 9h10l3-9-4 6-4-6-4 6-4-6z", fillOpacity: "0.85" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "5", r: "2" }),
  /* @__PURE__ */ e("circle", { cx: "3", cy: "8", r: "2" }),
  /* @__PURE__ */ e("circle", { cx: "21", cy: "8", r: "2" })
] });
function H({
  open: i = !1,
  title: o,
  list: d = [],
  buttonText: m = "Upgrade Now",
  buttonLink: a,
  onButtonClick: l,
  buttonIcon: s,
  bottomText: t,
  onClose: n,
  closeOnOverlay: f = !0,
  className: v = ""
}) {
  u(() => {
    if (i) {
      const r = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = r;
      };
    }
  }, [i]);
  const p = x(
    (r) => {
      r.key === "Escape" && n && n();
    },
    [n]
  );
  if (u(() => {
    if (i)
      return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [i, p]), !i) return null;
  const _ = typeof t == "string" && /<[a-z][\s\S]*>/i.test(t), y = (r) => {
    l && l(r), a && window.open(a, "_blank", "noopener,noreferrer");
  }, h = s !== void 0 ? s : /* @__PURE__ */ e(L, {});
  return g(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-pp-backdrop",
        onMouseDown: (r) => {
          f && r.target === r.currentTarget && n && n();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof o == "string" ? o : "Upgrade popup",
        children: /* @__PURE__ */ c("div", { className: k("nxp-pp", v), children: [
          n && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "nxp-pp__close",
              "aria-label": "Close popup",
              onClick: n,
              children: /* @__PURE__ */ e(N, {})
            }
          ),
          o && /* @__PURE__ */ e("div", { className: "nxp-pp__title", children: o }),
          d.length > 0 && /* @__PURE__ */ e("ul", { className: "nxp-pp__list", role: "list", children: d.map((r, w) => /* @__PURE__ */ c("li", { className: "nxp-pp__list-item", children: [
            /* @__PURE__ */ e("span", { className: "nxp-pp__check", "aria-hidden": "true", children: /* @__PURE__ */ e(b, {}) }),
            /* @__PURE__ */ e("span", { children: r })
          ] }, w)) }),
          (a || l) && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              className: "nxp-pp__btn",
              onClick: y,
              children: [
                h && /* @__PURE__ */ e("span", { className: "nxp-pp__btn-icon", children: h }),
                m
              ]
            }
          ),
          t && (_ ? /* @__PURE__ */ e(
            "p",
            {
              className: "nxp-pp__bottom",
              dangerouslySetInnerHTML: { __html: t }
            }
          ) : /* @__PURE__ */ e("p", { className: "nxp-pp__bottom", children: t }))
        ] })
      }
    ),
    document.body
  );
}
export {
  H as ProPopup,
  H as default
};
