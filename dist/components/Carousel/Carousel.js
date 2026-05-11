import { jsx as a, jsxs as f } from "react/jsx-runtime";
import { useRef as R, useEffect as z, Children as A, isValidElement as J } from "react";
import { Splide as O, SplideSlide as h } from "../../node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js";
/* empty css                                                                     */
import { Slide as q } from "./Slide.js";
function F(t, e) {
  if (typeof t != "object" || t === null) return;
  const { desktop: d = 1, tablet: p = 1, mobile: s = 1 } = t, c = e ? `${e}px` : 0;
  return {
    1024: { perPage: p, gap: c },
    640: { perPage: s, gap: c }
  };
}
function G({ slide: t }) {
  return t.content ? /* @__PURE__ */ a("div", { className: "nxp-carousel__slide", style: t.background ? { background: t.background } : void 0, children: t.content }) : /* @__PURE__ */ f(
    "div",
    {
      className: "nxp-carousel__slide",
      style: t.background ? { background: t.background } : void 0,
      children: [
        t.eyebrow && /* @__PURE__ */ a("span", { className: "nxp-carousel__eyebrow", children: t.eyebrow }),
        t.title && /* @__PURE__ */ a("div", { className: "nxp-carousel__title", children: t.title }),
        t.description && /* @__PURE__ */ a("p", { className: "nxp-carousel__desc", children: t.description }),
        t.cta && /* @__PURE__ */ f(
          "a",
          {
            className: "nxp-carousel__cta",
            href: t.ctaHref || "#",
            onClick: t.ctaHref ? void 0 : (e) => e.preventDefault(),
            children: [
              t.cta,
              " →"
            ]
          }
        )
      ]
    }
  );
}
function y({
  /* ── v1 props (backward compat) ── */
  slides: t = [],
  className: e = "",
  autoPlay: d = !1,
  interval: p = 4e3,
  showArrows: s = !0,
  variant: c = "",
  /* ── v2 props ── */
  children: _,
  draggable: g = !0,
  pauseOnHover: v = !0,
  infinite: m = !1,
  slidesPerView: n = 1,
  gap: u = 0,
  keyboardNavigation: N = !0,
  autoHeight: S = !1,
  rtl: j = !1,
  label: $ = "Carousel",
  /* ── controlled ── */
  activeIndex: l,
  onSlideChange: i,
  /* ── Splide escape-hatch — any raw Splide option ── */
  options: C = {}
}) {
  const b = R(null);
  z(() => {
    var o;
    if (l === void 0) return;
    const r = (o = b.current) == null ? void 0 : o.splide;
    r && r.index !== l && r.go(l);
  }, [l]);
  const D = typeof n == "number" ? Math.max(1, n) : (n == null ? void 0 : n.desktop) ?? 1, k = F(n, u), B = {
    type: m ? "loop" : "slide",
    perPage: D,
    gap: u ? `${u}px` : 0,
    drag: g,
    autoplay: d,
    interval: p,
    pauseOnHover: v,
    direction: j ? "rtl" : "ltr",
    arrows: s,
    pagination: !0,
    autoHeight: S,
    keyboard: N ? "focused" : !1,
    rewind: !m,
    // rewind instead of stop when not looping
    speed: 400,
    easing: "cubic-bezier(0.25,0.1,0.25,1)",
    ...k ? { breakpoints: k } : {},
    ...C
  }, x = A.toArray(_).filter(J), E = t && t.length > 0, H = x.length > 0;
  if (!E && !H) return null;
  const M = [
    "nxp-carousel",
    c === "dark" ? "nxp-carousel--dark" : "",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: M, children: /* @__PURE__ */ f(
    O,
    {
      ref: b,
      options: B,
      "aria-label": $,
      onMoved: (r, o) => i == null ? void 0 : i(o),
      children: [
        (t || []).map((r, o) => /* @__PURE__ */ a(h, { children: /* @__PURE__ */ a(G, { slide: r }) }, `data-${o}`)),
        x.map((r, o) => /* @__PURE__ */ a(h, { children: r }, r.key ?? `jsx-${o}`))
      ]
    }
  ) });
}
y.Slide = q;
y.displayName = "Carousel";
export {
  y as Carousel,
  y as default
};
