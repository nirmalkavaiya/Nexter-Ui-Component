import { jsxs as s, jsx as n, Fragment as v } from "react/jsx-runtime";
import { useState as x, useRef as k, useCallback as N, useEffect as d } from "react";
function I({
  slides: r = [],
  className: _ = "",
  autoPlay: m = !1,
  interval: h = 4e3,
  showArrows: p = !0,
  variant: b = ""
}) {
  const [c, i] = x(0), o = k(null), u = N((e) => {
    if (!o.current) return;
    const t = o.current.children[e];
    t && t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }), i(e);
  }, []);
  return d(() => {
    const e = o.current;
    if (!e) return;
    let t;
    const a = () => {
      cancelAnimationFrame(t), t = requestAnimationFrame(() => {
        const l = e.offsetWidth, f = Math.round(e.scrollLeft / l);
        i(Math.min(Math.max(0, f), r.length - 1));
      });
    };
    return e.addEventListener("scroll", a, { passive: !0 }), () => {
      e.removeEventListener("scroll", a), cancelAnimationFrame(t);
    };
  }, [r.length]), d(() => {
    if (!m || r.length <= 1) return;
    const e = setInterval(() => {
      i((t) => {
        const a = (t + 1) % r.length;
        if (o.current) {
          const l = o.current.children[a];
          l && l.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
        return a;
      });
    }, h);
    return () => clearInterval(e);
  }, [m, h, r.length]), /* @__PURE__ */ s("div", { className: `nxp-carousel${b === "dark" ? " nxp-carousel--dark" : ""} ${_}`.trim(), children: [
    /* @__PURE__ */ n("div", { className: "nxp-carousel__track", ref: o, children: r.map((e, t) => /* @__PURE__ */ n(
      "div",
      {
        className: `nxp-carousel__slide${e.content ? " nxp-carousel__slide--custom" : ""}`,
        style: e.background ? { background: e.background } : void 0,
        children: e.content ? e.content : /* @__PURE__ */ s(v, { children: [
          e.eyebrow && /* @__PURE__ */ n("span", { className: "nxp-carousel__eyebrow", children: e.eyebrow }),
          /* @__PURE__ */ n("div", { className: "nxp-carousel__title", children: e.title }),
          e.description && /* @__PURE__ */ n("p", { className: "nxp-carousel__desc", children: e.description }),
          e.cta && /* @__PURE__ */ s(
            "a",
            {
              className: "nxp-carousel__cta",
              href: e.ctaHref || "#",
              onClick: e.ctaHref ? void 0 : (a) => a.preventDefault(),
              children: [
                e.cta,
                " →"
              ]
            }
          )
        ] })
      },
      t
    )) }),
    /* @__PURE__ */ s("div", { className: "nxp-carousel__nav", children: [
      p && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => u(c - 1),
          disabled: c === 0,
          "aria-label": "Previous slide",
          children: "‹"
        }
      ),
      /* @__PURE__ */ n("div", { className: "nxp-carousel__dots", children: r.map((e, t) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: `nxp-carousel__dot${c === t ? " is-active" : ""}`,
          onClick: () => u(t),
          "aria-label": `Go to slide ${t + 1}`,
          "aria-current": c === t
        },
        t
      )) }),
      p && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => u(c + 1),
          disabled: c === r.length - 1,
          "aria-label": "Next slide",
          children: "›"
        }
      )
    ] })
  ] });
}
export {
  I as Carousel,
  I as default
};
