import { jsx as x, jsxs as P, Fragment as ye } from "react/jsx-runtime";
import Me, { useRef as w, useState as I, useMemo as G, useCallback as z, useEffect as y, useContext as ke, Children as we, isValidElement as ge, createContext as Ee } from "react";
import { Slide as le } from "./Slide.js";
const ue = 380, De = "cubic-bezier(0.16,1,0.3,1)", ie = Ee(null);
function Ye() {
  const e = ke(ie);
  if (!e) throw new Error("useCarousel must be used inside <Carousel>");
  return e;
}
function Le(e, c) {
  y(() => {
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
function Re({ enabled: e, interval: c, paused: s, totalReal: n, goNext: o }) {
  const f = w(o);
  y(() => {
    f.current = o;
  }, [o]), y(() => {
    if (!e || n <= 1 || s) return;
    const p = setInterval(() => f.current(), c);
    return () => clearInterval(p);
  }, [e, c, s, n]);
}
function $e({ trackRef: e, enabled: c, dragThreshold: s, swipeVelocity: n, goPrev: o, goNext: f, rtl: p }) {
  const u = w({ active: !1, startX: 0, startY: 0, delta: 0, t0: 0 }), g = w(o), H = w(f);
  y(() => {
    g.current = o, H.current = f;
  }, [o, f]);
  const [U, m] = I(!1), [J, R] = I(0), Y = z((l, b) => {
    u.current = { active: !0, startX: l, startY: b, delta: 0, t0: Date.now() }, R(0);
  }, []), E = z((l) => {
    if (!u.current.active) return;
    const b = l - u.current.startX;
    u.current.delta = b, Math.abs(b) > 6 && m(!0), R(p ? -b : b);
  }, [p]), D = z(() => {
    if (!u.current.active) return;
    u.current.active = !1;
    const { delta: l, t0: b } = u.current, h = Math.max(1, Date.now() - b), a = Math.abs(l) / h;
    (Math.abs(l) >= s || a >= n) && ((p ? l > 0 : l < 0) ? H.current() : g.current()), R(0), setTimeout(() => m(!1), 50);
  }, [s, n, p]);
  return y(() => {
    if (!c) return;
    const l = e.current;
    if (!l) return;
    const b = (d) => {
      d.preventDefault(), Y(d.clientX, d.clientY);
    }, h = (d) => {
      u.current.active && (d.preventDefault(), E(d.clientX));
    }, a = () => D();
    let $ = !1;
    const N = (d) => {
      $ = !1, Y(d.touches[0].clientX, d.touches[0].clientY);
    }, A = (d) => {
      if (!u.current.active) return;
      const Q = Math.abs(d.touches[0].clientX - u.current.startX);
      if (Math.abs(d.touches[0].clientY - u.current.startY) > Q && Q < 10) {
        $ = !0, u.current.active = !1, R(0);
        return;
      }
      $ || (d.preventDefault(), E(d.touches[0].clientX));
    }, X = () => {
      $ || D();
    };
    return l.addEventListener("mousedown", b, { passive: !1 }), window.addEventListener("mousemove", h, { passive: !1 }), window.addEventListener("mouseup", a), l.addEventListener("touchstart", N, { passive: !0 }), l.addEventListener("touchmove", A, { passive: !1 }), l.addEventListener("touchend", X, { passive: !0 }), () => {
      l.removeEventListener("mousedown", b), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", a), l.removeEventListener("touchstart", N), l.removeEventListener("touchmove", A), l.removeEventListener("touchend", X);
    };
  }, [c, Y, E, D, e]), { isDragging: U, dragDelta: J };
}
function Ne({ rootRef: e, enabled: c, goPrev: s, goNext: n }) {
  const o = w(s), f = w(n);
  y(() => {
    o.current = s, f.current = n;
  }, [s, n]), y(() => {
    if (!c) return;
    const p = e.current;
    if (!p) return;
    const u = (g) => {
      !p.contains(document.activeElement) && document.activeElement !== p || (g.key === "ArrowLeft" && (g.preventDefault(), o.current()), g.key === "ArrowRight" && (g.preventDefault(), f.current()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [c, e]);
}
function Ae(e, c) {
  if (typeof e == "number") return Math.max(1, Math.floor(e));
  if (typeof e == "object" && e !== null) {
    const { desktop: s = 1, tablet: n = 1, mobile: o = 1 } = e;
    return c > 0 && c <= 640 ? Math.max(1, o) : c > 0 && c <= 1024 ? Math.max(1, n) : Math.max(1, s);
  }
  return 1;
}
function Xe(e, c) {
  const s = [];
  return (e || []).forEach((n, o) => {
    s.push({ __type: "data", __key: `prop-${o}`, ...n });
  }), we.forEach(c, (n) => {
    var f;
    if (!ge(n)) return;
    (n.type === le || ((f = n.type) == null ? void 0 : f.__isSlide)) && s.push({ __type: "jsx", __key: n.key ?? `jsx-${s.length}`, __node: n });
  }), s;
}
function Te({ slide: e, slideWidth: c, gapPx: s, isLast: n, index: o, totalInTrack: f }) {
  const p = {
    width: c,
    flexShrink: 0,
    marginRight: n ? 0 : s,
    boxSizing: "border-box",
    ...e.__isClone ? {} : {}
    // clones look identical
  };
  if (e.__type === "jsx") {
    const u = e.__node;
    return Me.cloneElement(u, {
      key: e.__key,
      style: { ...p, ...u.props.style || {} },
      "aria-hidden": e.__isClone ? "true" : void 0,
      "aria-roledescription": "slide",
      "aria-label": e.__isClone ? void 0 : `Slide ${(e.__realIdx ?? o) + 1} of ${f}`
    });
  }
  return /* @__PURE__ */ x(
    "div",
    {
      className: `nxp-carousel__slide${e.content ? " nxp-carousel__slide--custom" : ""}`,
      style: {
        ...p,
        ...e.background ? { background: e.background } : {}
      },
      "aria-roledescription": "slide",
      "aria-label": e.__isClone ? void 0 : `Slide ${(e.__realIdx ?? o) + 1} of ${f}`,
      "aria-hidden": e.__isClone ? "true" : void 0,
      children: e.content ? e.content : /* @__PURE__ */ P(ye, { children: [
        e.eyebrow && /* @__PURE__ */ x("span", { className: "nxp-carousel__eyebrow", children: e.eyebrow }),
        e.title && /* @__PURE__ */ x("div", { className: "nxp-carousel__title", children: e.title }),
        e.description && /* @__PURE__ */ x("p", { className: "nxp-carousel__desc", children: e.description }),
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
  children: p,
  draggable: u = !0,
  dragThreshold: g = 50,
  swipeVelocity: H = 0.3,
  pauseOnHover: U = !0,
  infinite: m = !1,
  slidesPerView: J = 1,
  gap: R = 0,
  keyboardNavigation: Y = !0,
  autoHeight: E = !1,
  rtl: D = !1,
  virtual: l = !1,
  label: b = "Carousel",
  /* ── controlled API ── */
  activeIndex: h,
  onSlideChange: a
}) {
  const $ = w(null), N = w(null), A = w(null), [X, d] = I(0), [Q, ee] = I(!1), me = U && Q && s, [te, ae] = I(null), q = G(
    () => Xe(e, p).map((r, i) => ({ ...r, __realIdx: i })),
    [e, p]
  ), t = q.length, _ = G(
    () => Ae(J, X),
    [J, X]
  ), { displaySlides: Z, cloneOffset: M } = G(() => {
    if (!m || t === 0) return { displaySlides: q, cloneOffset: 0 };
    const r = Math.min(_, t), i = q.slice(-r).map((S, W) => ({ ...S, __key: `cb-${W}`, __isClone: !0 })), L = q.slice(0, r).map((S, W) => ({ ...S, __key: `ca-${W}`, __isClone: !0 }));
    return { displaySlides: [...i, ...q, ...L], cloneOffset: r };
  }, [q, m, _, t]), [k, O] = I(() => m ? Math.min(_, t) : 0), [re, B] = I(!1), ne = w(!1), T = h !== void 0, v = T ? Math.max(0, Math.min(h, t - 1)) : Math.max(0, Math.min(k - M, t - 1)), V = typeof R == "number" ? R : parseInt(R, 10) || 0, se = X > 0 ? Math.max(0, (X - V * (_ - 1)) / _) : 0, de = se + V, F = z((r, i = !1) => {
    const L = m ? (r % t + t) % t : Math.max(0, Math.min(r, t - 1)), S = m ? L + M : L;
    i && B(!0), O(S), a == null || a(L);
  }, [t, m, M, a]), K = z(() => {
    if (T) {
      a == null || a((h - 1 + t) % t);
      return;
    }
    if (m)
      O((r) => r - 1), a == null || a((v - 1 + t) % t);
    else {
      if (v <= 0) return;
      F(v - 1);
    }
  }, [T, m, v, t, F, a, h]), C = z(() => {
    if (T) {
      a == null || a((h + 1) % t);
      return;
    }
    if (m)
      O((r) => r + 1), a == null || a((v + 1) % t);
    else {
      if (v >= t - _) return;
      F(v + 1);
    }
  }, [T, m, v, t, _, F, a, h]);
  y(() => {
    if (!m || ne.current) return;
    const r = M + t - 1;
    if (!(k > r + (Math.min(_, t) - 1) || k < M)) return;
    ne.current = !0;
    const L = setTimeout(() => {
      const W = ((k - M) % t + t) % t + M;
      B(!0), O(W), requestAnimationFrame(() => requestAnimationFrame(() => {
        B(!1), ne.current = !1;
      }));
    }, ue);
    return () => clearTimeout(L);
  }, [k, m, M, t, _]), y(() => {
    if (!re) return;
    const r = requestAnimationFrame(() => requestAnimationFrame(() => B(!1)));
    return () => cancelAnimationFrame(r);
  }, [re]), y(() => {
    if (!T) return;
    const r = Math.max(0, Math.min(h, t - 1));
    O(r + M);
  }, [T, h, t, M]), y(() => {
    m && (B(!0), O(v + M));
  }, [_]);
  const pe = z((r) => d(r.width), []);
  Le(N, pe), y(() => {
    N.current && d(N.current.offsetWidth);
  }, []), y(() => {
    if (!E || !A.current) return;
    const r = A.current.children[k];
    if (!r) return;
    const i = new ResizeObserver(([L]) => ae(L.contentRect.height));
    return i.observe(r), ae(r.offsetHeight), () => i.disconnect();
  }, [E, k]), Re({ enabled: s, interval: n, paused: me, totalReal: t, goNext: C }), Ne({ rootRef: $, enabled: Y, goPrev: K, goNext: C });
  const j = $e({
    trackRef: A,
    enabled: u && t > 1,
    dragThreshold: g,
    swipeVelocity: H,
    goPrev: K,
    goNext: C,
    rtl: D
  }), oe = G(() => {
    if (!l) return null;
    const r = _ + 1;
    return {
      start: Math.max(0, k - r),
      end: Math.min(Z.length - 1, k + _ + r - 1)
    };
  }, [l, k, _, Z.length]), ce = k * de, _e = {
    display: "flex",
    willChange: "transform",
    transform: `translate3d(${D ? ce + j.dragDelta : -(ce - j.dragDelta)}px, 0, 0)`,
    transition: re || j.isDragging ? "none" : `transform ${ue}ms ${De}`,
    ...E && te != null ? { alignItems: "flex-start" } : {}
  }, ve = [
    "nxp-carousel",
    f === "dark" ? "nxp-carousel--dark" : "",
    j.isDragging ? "nxp-carousel--dragging" : "",
    D ? "nxp-carousel--rtl" : "",
    E ? "nxp-carousel--auto-height" : "",
    c
  ].filter(Boolean).join(" "), be = G(() => ({
    current: v,
    total: t,
    perView: _,
    isDragging: j.isDragging,
    goTo: F,
    goPrev: K,
    goNext: C
  }), [v, t, _, j.isDragging, F, K, C]);
  if (t === 0) return null;
  const he = !m && v <= 0, xe = !m && v >= t - _;
  return /* @__PURE__ */ x(ie.Provider, { value: be, children: /* @__PURE__ */ P(
    "div",
    {
      ref: $,
      className: ve,
      role: "region",
      "aria-label": b,
      "aria-roledescription": "carousel",
      tabIndex: Y ? 0 : void 0,
      onMouseEnter: U ? () => ee(!0) : void 0,
      onMouseLeave: U ? () => ee(!1) : void 0,
      children: [
        /* @__PURE__ */ x(
          "div",
          {
            ref: N,
            className: "nxp-carousel__viewport",
            style: E && te != null ? { height: te } : void 0,
            children: /* @__PURE__ */ x(
              "div",
              {
                ref: A,
                className: `nxp-carousel__track${j.isDragging ? " nxp-carousel__track--dragging" : ""}`,
                style: _e,
                "aria-live": s ? "off" : "polite",
                children: Z.map((r, i) => l && oe && (i < oe.start || i > oe.end) ? /* @__PURE__ */ x(
                  "div",
                  {
                    "aria-hidden": "true",
                    style: {
                      width: se,
                      flexShrink: 0,
                      marginRight: i === Z.length - 1 ? 0 : V
                    }
                  },
                  r.__key
                ) : /* @__PURE__ */ x(
                  Te,
                  {
                    slide: r,
                    slideWidth: se,
                    gapPx: V,
                    index: i,
                    isLast: i === Z.length - 1,
                    totalInTrack: t
                  },
                  r.__key
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ P("div", { className: "nxp-carousel__nav", role: "group", "aria-label": "Carousel controls", children: [
          o && /* @__PURE__ */ x(
            "button",
            {
              type: "button",
              className: "nxp-carousel__btn nxp-carousel__btn--prev",
              onClick: K,
              disabled: he,
              "aria-label": "Previous slide",
              children: D ? "›" : "‹"
            }
          ),
          /* @__PURE__ */ x(
            "div",
            {
              className: "nxp-carousel__dots",
              role: "tablist",
              "aria-label": "Select slide",
              children: Array.from({ length: t }).map((r, i) => /* @__PURE__ */ x(
                "button",
                {
                  type: "button",
                  role: "tab",
                  className: `nxp-carousel__dot${v === i ? " is-active" : ""}`,
                  onClick: () => F(i),
                  "aria-label": `Slide ${i + 1} of ${t}`,
                  "aria-selected": v === i,
                  tabIndex: v === i ? 0 : -1
                },
                i
              ))
            }
          ),
          o && /* @__PURE__ */ x(
            "button",
            {
              type: "button",
              className: "nxp-carousel__btn nxp-carousel__btn--next",
              onClick: C,
              disabled: xe,
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
  Ye as useCarousel
};
