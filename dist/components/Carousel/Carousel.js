import { jsxs as o, jsx as a } from "react/jsx-runtime";
import { useState as p, useRef as h, useCallback as _, useEffect as f } from "react";
function x({ slides: n = [], className: u = "" }) {
  const [r, i] = p(0), c = h(null), s = _((e) => {
    if (!c.current) return;
    const t = c.current.children[e];
    t && t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }), i(e);
  }, []);
  return f(() => {
    const e = c.current;
    if (!e) return;
    let t;
    const l = () => {
      cancelAnimationFrame(t), t = requestAnimationFrame(() => {
        const m = e.offsetWidth, d = Math.round(e.scrollLeft / m);
        i(Math.min(Math.max(0, d), n.length - 1));
      });
    };
    return e.addEventListener("scroll", l, { passive: !0 }), () => {
      e.removeEventListener("scroll", l), cancelAnimationFrame(t);
    };
  }, [n.length]), /* @__PURE__ */ o("div", { className: `nxp-carousel ${u}`, children: [
    /* @__PURE__ */ a("div", { className: "nxp-carousel__track", ref: c, children: n.map((e, t) => /* @__PURE__ */ o("div", { className: "nxp-carousel__slide", children: [
      e.eyebrow && /* @__PURE__ */ a("span", { className: "nxp-carousel__eyebrow", children: e.eyebrow }),
      /* @__PURE__ */ a("div", { className: "nxp-carousel__title", children: e.title }),
      e.description && /* @__PURE__ */ a("p", { className: "nxp-carousel__desc", children: e.description }),
      e.cta && /* @__PURE__ */ o(
        "a",
        {
          className: "nxp-carousel__cta",
          href: e.ctaHref || "#",
          onClick: e.ctaHref ? void 0 : (l) => l.preventDefault(),
          children: [
            e.cta,
            " →"
          ]
        }
      )
    ] }, t)) }),
    /* @__PURE__ */ o("div", { className: "nxp-carousel__nav", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => s(r - 1),
          disabled: r === 0,
          "aria-label": "Previous slide",
          children: "‹"
        }
      ),
      /* @__PURE__ */ a("div", { className: "nxp-carousel__dots", children: n.map((e, t) => /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: `nxp-carousel__dot${r === t ? " is-active" : ""}`,
          onClick: () => s(t),
          "aria-label": `Go to slide ${t + 1}`,
          "aria-current": r === t
        },
        t
      )) }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => s(r + 1),
          disabled: r === n.length - 1,
          "aria-label": "Next slide",
          children: "›"
        }
      )
    ] })
  ] });
}
export {
  x as Carousel,
  x as default
};
