import { jsx as y, jsxs as P, Fragment as ye } from "react/jsx-runtime";
import xe, { useRef as R, useState as j, useMemo as H, useCallback as I, useEffect as x, useContext as Me, Children as ke, isValidElement as ge, createContext as we } from "react";
import { Slide as le } from "./Slide.js";
const ue = 380, Ee = "cubic-bezier(0.16,1,0.3,1)", ie = we(null);
function ze() {
  const e = Me(ie);
  if (!e) throw new Error("useCarousel must be used inside <Carousel>");
  return e;
}
function De(e, c) {
  x(() => {
    const s = e.current;
    if (!s) return;
    let n;
    const o = new ResizeObserver((f) => {
      cancelAnimationFrame(n), n = requestAnimationFrame(() => {
        f[0] && c(f[0].contentRect);
      });
    });
    return o.observe(s), () => {
      o.disconnect(), cancelAnimationFrame(n);
    };
  }, [e, c]);
}
function Le({ enabled: e, interval: c, paused: s, totalReal: n, goNext: o }) {
  const f = R(o);
  x(() => {
    f.current = o;
  }, [o]), x(() => {
    if (!e || n <= 1 || s) return;
    const d = setInterval(() => f.current(), c);
    return () => clearInterval(d);
  }, [e, c, s, n]);
}
function Re({ trackRef: e, enabled: c, dragThreshold: s, swipeVelocity: n, goPrev: o, goNext: f, rtl: d }) {
  const u = R({ active: !1, startX: 0, startY: 0, delta: 0, t0: 0 }), w = R(o), J = R(f);
  x(() => {
    w.current = o, J.current = f;
  }, [o, f]);
  const [S, m] = j(!1), [Q, $] = j(0), z = I((l, b) => {
    u.current = { active: !0, startX: l, startY: b, delta: 0, t0: Date.now() }, $(0);
  }, []), E = I((l) => {
    if (!u.current.active) return;
    const b = l - u.current.startX;
    u.current.delta = b, Math.abs(b) > 6 && m(!0), $(d ? -b : b);
  }, [d]), D = I(() => {
    if (!u.current.active) return;
    u.current.active = !1;
    const { delta: l, t0: b } = u.current, h = Math.max(1, Date.now() - b), a = Math.abs(l) / h;
    (Math.abs(l) >= s || a >= n) && ((d ? l > 0 : l < 0) ? J.current() : w.current()), $(0), setTimeout(() => m(!1), 50);
  }, [s, n, d]);
  return x(() => {
    if (!c) return;
    const l = e.current;
    if (!l) return;
    const b = (p) => {
      p.preventDefault(), z(p.clientX, p.clientY);
    }, h = (p) => {
      u.current.active && (p.preventDefault(), E(p.clientX));
    }, a = () => D();
    let M = !1;
    const N = (p) => {
      M = !1, z(p.touches[0].clientX, p.touches[0].clientY);
    }, A = (p) => {
      if (!u.current.active) return;
      const Z = Math.abs(p.touches[0].clientX - u.current.startX);
      if (Math.abs(p.touches[0].clientY - u.current.startY) > Z && Z < 10) {
        M = !0, u.current.active = !1, $(0);
        return;
      }
      M || (p.preventDefault(), E(p.touches[0].clientX));
    }, U = () => {
      M || D();
    };
    return l.addEventListener("mousedown", b, { passive: !1 }), window.addEventListener("mousemove", h, { passive: !1 }), window.addEventListener("mouseup", a), l.addEventListener("touchstart", N, { passive: !0 }), l.addEventListener("touchmove", A, { passive: !1 }), l.addEventListener("touchend", U, { passive: !0 }), () => {
      l.removeEventListener("mousedown", b), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", a), l.removeEventListener("touchstart", N), l.removeEventListener("touchmove", A), l.removeEventListener("touchend", U);
    };
  }, [c, z, E, D, e]), { isDragging: S, dragDelta: Q };
}
function $e({ rootRef: e, enabled: c, goPrev: s, goNext: n }) {
  const o = R(s), f = R(n);
  x(() => {
    o.current = s, f.current = n;
  }, [s, n]), x(() => {
    if (!c) return;
    const d = e.current;
    if (!d) return;
    const u = (w) => {
      !d.contains(document.activeElement) && document.activeElement !== d || (w.key === "ArrowLeft" && (w.preventDefault(), o.current()), w.key === "ArrowRight" && (w.preventDefault(), f.current()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [c, e]);
}
function Ne(e, c) {
  if (typeof e == "number") return Math.max(1, Math.floor(e));
  if (typeof e == "object" && e !== null) {
    const { desktop: s = 1, tablet: n = 1, mobile: o = 1 } = e;
    return c > 0 && c <= 640 ? Math.max(1, o) : c > 0 && c <= 1024 ? Math.max(1, n) : Math.max(1, s);
  }
  return 1;
}
function Ae(e, c) {
  const s = [];
  return (e || []).forEach((n, o) => {
    s.push({ __type: "data", __key: `prop-${o}`, ...n });
  }), ke.forEach(c, (n) => {
    var f;
    if (!ge(n)) return;
    (n.type === le || ((f = n.type) == null ? void 0 : f.__isSlide)) && s.push({ __type: "jsx", __key: n.key ?? `jsx-${s.length}`, __node: n });
  }), s;
}
function Xe({ slide: e, slideWidth: c, gapPx: s, isLast: n, index: o, totalInTrack: f }) {
  const d = {
    width: c,
    flexShrink: 0,
    marginRight: n ? 0 : s,
    boxSizing: "border-box",
    ...e.__isClone ? {} : {}
    // clones look identical
  };
  if (e.__type === "jsx") {
    const u = e.__node;
    return xe.cloneElement(u, {
      key: e.__key,
      style: { ...d, ...u.props.style || {} },
      "aria-hidden": e.__isClone ? "true" : void 0,
      "aria-roledescription": "slide",
      "aria-label": e.__isClone ? void 0 : `Slide ${(e.__realIdx ?? o) + 1} of ${f}`
    });
  }
  return /* @__PURE__ */ y(
    "div",
    {
      className: `nxp-carousel__slide${e.content ? " nxp-carousel__slide--custom" : ""}`,
      style: {
        ...d,
        ...e.background ? { background: e.background } : {}
      },
      "aria-roledescription": "slide",
      "aria-label": e.__isClone ? void 0 : `Slide ${(e.__realIdx ?? o) + 1} of ${f}`,
      "aria-hidden": e.__isClone ? "true" : void 0,
      children: e.content ? e.content : /* @__PURE__ */ P(ye, { children: [
        e.eyebrow && /* @__PURE__ */ y("span", { className: "nxp-carousel__eyebrow", children: e.eyebrow }),
        e.title && /* @__PURE__ */ y("div", { className: "nxp-carousel__title", children: e.title }),
        e.description && /* @__PURE__ */ y("p", { className: "nxp-carousel__desc", children: e.description }),
        e.cta && /* @__PURE__ */ P(
          "a",
          {
            className: "nxp-carousel__cta",
            href: e.ctaHref || "#",
            onClick: e.ctaHref ? void 0 : (u) => u.preventDefault(),
            children: [
              e.cta,
              " →"
            ]
          }
        )
      ] })
    },
    e.__key
  );
}
function fe({
  /* ── v1 props (backward compat) ── */
  slides: e = [],
  className: c = "",
  autoPlay: s = !1,
  interval: n = 4e3,
  showArrows: o = !0,
  variant: f = "",
  /* ── v2 props ── */
  children: d,
  draggable: u = !0,
  dragThreshold: w = 50,
  swipeVelocity: J = 0.3,
  pauseOnHover: S = !0,
  infinite: m = !1,
  slidesPerView: Q = 1,
  gap: $ = 0,
  keyboardNavigation: z = !0,
  autoHeight: E = !1,
  rtl: D = !1,
  virtual: l = !1,
  label: b = "Carousel",
  /* ── controlled API ── */
  activeIndex: h,
  onSlideChange: a
}) {
  const M = R(null), N = R(null), [A, U] = j(0), [p, Z] = j(!1), oe = S && p && s, [ee, ae] = j(null), Y = H(
    () => Ae(e, d).map((r, i) => ({ ...r, __realIdx: i })),
    [e, d]
  ), t = Y.length, _ = H(
    () => Ne(Q, A),
    [Q, A]
  ), { displaySlides: B, cloneOffset: k } = H(() => {
    if (!m || t === 0) return { displaySlides: Y, cloneOffset: 0 };
    const r = Math.min(_, t), i = Y.slice(-r).map((C, G) => ({ ...C, __key: `cb-${G}`, __isClone: !0 })), L = Y.slice(0, r).map((C, G) => ({ ...C, __key: `ca-${G}`, __isClone: !0 }));
    return { displaySlides: [...i, ...Y, ...L], cloneOffset: r };
  }, [Y, m, _, t]), [g, q] = j(() => m ? Math.min(_, t) : 0), [te, K] = j(!1), re = R(!1), X = h !== void 0, v = X ? Math.max(0, Math.min(h, t - 1)) : Math.max(0, Math.min(g - k, t - 1)), V = typeof $ == "number" ? $ : parseInt($, 10) || 0, ne = A > 0 ? (A - V * (_ - 1)) / _ : 0, me = ne + V, T = I((r, i = !1) => {
    const L = m ? (r % t + t) % t : Math.max(0, Math.min(r, t - 1)), C = m ? L + k : L;
    i && K(!0), q(C), a == null || a(L);
  }, [t, m, k, a]), W = I(() => {
    if (X) {
      a == null || a((h - 1 + t) % t);
      return;
    }
    if (m)
      q((r) => r - 1), a == null || a((v - 1 + t) % t);
    else {
      if (v <= 0) return;
      T(v - 1);
    }
  }, [X, m, v, t, T, a, h]), O = I(() => {
    if (X) {
      a == null || a((h + 1) % t);
      return;
    }
    if (m)
      q((r) => r + 1), a == null || a((v + 1) % t);
    else {
      if (v >= t - _) return;
      T(v + 1);
    }
  }, [X, m, v, t, _, T, a, h]);
  x(() => {
    if (!m || re.current) return;
    const r = k + t - 1;
    if (!(g > r + (Math.min(_, t) - 1) || g < k)) return;
    re.current = !0;
    const L = setTimeout(() => {
      const G = ((g - k) % t + t) % t + k;
      K(!0), q(G), requestAnimationFrame(() => requestAnimationFrame(() => {
        K(!1), re.current = !1;
      }));
    }, ue);
    return () => clearTimeout(L);
  }, [g, m, k, t, _]), x(() => {
    if (!te) return;
    const r = requestAnimationFrame(() => requestAnimationFrame(() => K(!1)));
    return () => cancelAnimationFrame(r);
  }, [te]), x(() => {
    if (!X) return;
    const r = Math.max(0, Math.min(h, t - 1));
    q(r + k);
  }, [X, h, t, k]), x(() => {
    m && (K(!0), q(v + k));
  }, [_]);
  const de = I((r) => U(r.width), []);
  De(M, de), x(() => {
    M.current && U(M.current.offsetWidth);
  }, []), x(() => {
    if (!E || !N.current) return;
    const r = N.current.children[g];
    if (!r) return;
    const i = new ResizeObserver(([L]) => ae(L.contentRect.height));
    return i.observe(r), ae(r.offsetHeight), () => i.disconnect();
  }, [E, g]), Le({ enabled: s, interval: n, paused: oe, totalReal: t, goNext: O }), $e({ rootRef: M, enabled: z, goPrev: W, goNext: O });
  const F = Re({
    trackRef: N,
    enabled: u && t > 1,
    dragThreshold: w,
    swipeVelocity: J,
    goPrev: W,
    goNext: O,
    rtl: D
  }), se = H(() => {
    if (!l) return null;
    const r = _ + 1;
    return {
      start: Math.max(0, g - r),
      end: Math.min(B.length - 1, g + _ + r - 1)
    };
  }, [l, g, _, B.length]), ce = g * me, pe = {
    display: "flex",
    willChange: "transform",
    transform: `translate3d(${D ? ce + F.dragDelta : -(ce - F.dragDelta)}px, 0, 0)`,
    transition: te || F.isDragging ? "none" : `transform ${ue}ms ${Ee}`,
    ...E && ee != null ? { alignItems: "flex-start" } : {}
  }, _e = [
    "nxp-carousel",
    f === "dark" ? "nxp-carousel--dark" : "",
    F.isDragging ? "nxp-carousel--dragging" : "",
    D ? "nxp-carousel--rtl" : "",
    E ? "nxp-carousel--auto-height" : "",
    c
  ].filter(Boolean).join(" "), ve = H(() => ({
    current: v,
    total: t,
    perView: _,
    isDragging: F.isDragging,
    goTo: T,
    goPrev: W,
    goNext: O
  }), [v, t, _, F.isDragging, T, W, O]);
  if (t === 0) return null;
  const be = !m && v <= 0, he = !m && v >= t - _;
  return /* @__PURE__ */ y(ie.Provider, { value: ve, children: /* @__PURE__ */ P(
    "div",
    {
      ref: M,
      className: _e,
      role: "region",
      "aria-label": b,
      "aria-roledescription": "carousel",
      tabIndex: z ? 0 : void 0,
      onMouseEnter: S ? () => Z(!0) : void 0,
      onMouseLeave: S ? () => Z(!1) : void 0,
      children: [
        /* @__PURE__ */ y(
          "div",
          {
            className: "nxp-carousel__viewport",
            style: E && ee != null ? { height: ee } : void 0,
            children: /* @__PURE__ */ y(
              "div",
              {
                ref: N,
                className: `nxp-carousel__track${F.isDragging ? " nxp-carousel__track--dragging" : ""}`,
                style: pe,
                "aria-live": s ? "off" : "polite",
                children: B.map((r, i) => l && se && (i < se.start || i > se.end) ? /* @__PURE__ */ y(
                  "div",
                  {
                    "aria-hidden": "true",
                    style: {
                      width: ne,
                      flexShrink: 0,
                      marginRight: i === B.length - 1 ? 0 : V
                    }
                  },
                  r.__key
                ) : /* @__PURE__ */ y(
                  Xe,
                  {
                    slide: r,
                    slideWidth: ne,
                    gapPx: V,
                    index: i,
                    isLast: i === B.length - 1,
                    totalInTrack: t
                  },
                  r.__key
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ P("div", { className: "nxp-carousel__nav", role: "group", "aria-label": "Carousel controls", children: [
          o && /* @__PURE__ */ y(
            "button",
            {
              type: "button",
              className: "nxp-carousel__btn nxp-carousel__btn--prev",
              onClick: W,
              disabled: be,
              "aria-label": "Previous slide",
              children: D ? "›" : "‹"
            }
          ),
          /* @__PURE__ */ y(
            "div",
            {
              className: "nxp-carousel__dots",
              role: "tablist",
              "aria-label": "Select slide",
              children: Array.from({ length: t }).map((r, i) => /* @__PURE__ */ y(
                "button",
                {
                  type: "button",
                  role: "tab",
                  className: `nxp-carousel__dot${v === i ? " is-active" : ""}`,
                  onClick: () => T(i),
                  "aria-label": `Slide ${i + 1} of ${t}`,
                  "aria-selected": v === i,
                  tabIndex: v === i ? 0 : -1
                },
                i
              ))
            }
          ),
          o && /* @__PURE__ */ y(
            "button",
            {
              type: "button",
              className: "nxp-carousel__btn nxp-carousel__btn--next",
              onClick: O,
              disabled: he,
              "aria-label": "Next slide",
              children: D ? "‹" : "›"
            }
          )
        ] })
      ]
    }
  ) });
}
fe.Slide = le;
fe.displayName = "Carousel";
export {
  fe as Carousel,
  fe as default,
  ze as useCarousel
};
