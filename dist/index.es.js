import { jsx as n, jsxs as c, Fragment as be } from "react/jsx-runtime";
import Ne, { useState as C, useCallback as A, useRef as H, useEffect as P, useId as ke, memo as De, useMemo as q } from "react";
import { createPortal as ce } from "react-dom";
function kn({ items: e = [], defaultOpen: t = [], multi: r = !1, className: a = "" }) {
  const [i, s] = C(new Set(t)), l = A(
    (o) => {
      s((u) => {
        const d = new Set(u);
        return d.has(o) ? d.delete(o) : (r || d.clear(), d.add(o)), d;
      });
    },
    [r]
  );
  return /* @__PURE__ */ n("div", { className: `nxp-accordion ${a}`, children: e.map((o) => {
    const u = i.has(o.id);
    return /* @__PURE__ */ c(
      "div",
      {
        className: `nxp-accordion__item${u ? " is-open" : ""}`,
        children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              className: "nxp-accordion__head",
              onClick: () => l(o.id),
              "aria-expanded": u,
              "aria-controls": `accordion-body-${o.id}`,
              children: [
                /* @__PURE__ */ n("span", { children: o.title }),
                /* @__PURE__ */ n("svg", { className: "nxp-accordion__chevron", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ n("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              id: `accordion-body-${o.id}`,
              className: "nxp-accordion__body",
              role: "region",
              children: o.content
            }
          )
        ]
      },
      o.id
    );
  }) });
}
const $e = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×"
};
function gn({ variant: e = "info", icon: t, children: r, className: a = "" }) {
  const i = t !== void 0 ? t : $e[e] || "i";
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-alert nxp-alert--${e} ${a}`,
      role: "alert",
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-alert__icon", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ n("div", { className: "nxp-alert__body", children: r })
      ]
    }
  );
}
function yn({ children: e, size: t = "md", src: r, alt: a = "", className: i = "" }) {
  return /* @__PURE__ */ n("span", { className: `nxp-avatar${t === "sm" ? " nxp-avatar--sm" : t === "lg" ? " nxp-avatar--lg" : ""} ${i}`, "aria-label": a || e, children: r ? /* @__PURE__ */ n("img", { src: r, alt: a }) : e });
}
function wn({ variant: e = "default", children: t, className: r = "" }) {
  return e === "gradient" ? /* @__PURE__ */ n("span", { className: `nxp-badge nxp-badge--gradient ${r}`, children: t }) : ["primary", "success", "warning", "error"].includes(e) ? /* @__PURE__ */ n("span", { className: `nxp-badge nxp-badge--${e} ${r}`, children: t }) : /* @__PURE__ */ n("span", { className: `nxp-badge ${r}`, children: t });
}
const Me = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function Dn({ variant: e = "default", icon: t, title: r, text: a, actions: i, className: s = "" }) {
  const l = t !== void 0 ? t : Me[e], o = e !== "default" ? ` nxp-banner--${e}` : "";
  return /* @__PURE__ */ c("div", { className: `nxp-banner${o} ${s}`, role: "region", children: [
    l && /* @__PURE__ */ n("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: l }),
    /* @__PURE__ */ c("div", { className: "nxp-banner__body", children: [
      r && /* @__PURE__ */ n("div", { className: "nxp-banner__title", children: r }),
      a && /* @__PURE__ */ n("p", { className: "nxp-banner__text", children: a }),
      i && /* @__PURE__ */ n("div", { className: "nxp-banner__actions", children: i })
    ] })
  ] });
}
function $n({
  variant: e = "secondary",
  size: t,
  icon: r = !1,
  loading: a = !1,
  disabled: i = !1,
  onClick: s,
  children: l,
  className: o = "",
  ...u
}) {
  const d = [
    "nxp-btn",
    `nxp-btn--${e}`,
    t && t !== "md" ? `nxp-btn--${t}` : "",
    r ? "nxp-btn--icon" : "",
    a ? "nxp-btn--loading" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "button",
    {
      className: d,
      disabled: i || a,
      onClick: s,
      "aria-disabled": i || a,
      ...u,
      children: [
        a && /* @__PURE__ */ n("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        l
      ]
    }
  );
}
function Mn({ slides: e = [], className: t = "" }) {
  const [r, a] = C(0), i = H(null), s = A((l) => {
    if (!i.current) return;
    const o = i.current.children[l];
    o && o.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }), a(l);
  }, []);
  return P(() => {
    const l = i.current;
    if (!l) return;
    let o;
    const u = () => {
      cancelAnimationFrame(o), o = requestAnimationFrame(() => {
        const d = l.offsetWidth, h = Math.round(l.scrollLeft / d);
        a(Math.min(Math.max(0, h), e.length - 1));
      });
    };
    return l.addEventListener("scroll", u, { passive: !0 }), () => {
      l.removeEventListener("scroll", u), cancelAnimationFrame(o);
    };
  }, [e.length]), /* @__PURE__ */ c("div", { className: `nxp-carousel ${t}`, children: [
    /* @__PURE__ */ n("div", { className: "nxp-carousel__track", ref: i, children: e.map((l, o) => /* @__PURE__ */ c("div", { className: "nxp-carousel__slide", children: [
      l.eyebrow && /* @__PURE__ */ n("span", { className: "nxp-carousel__eyebrow", children: l.eyebrow }),
      /* @__PURE__ */ n("div", { className: "nxp-carousel__title", children: l.title }),
      l.description && /* @__PURE__ */ n("p", { className: "nxp-carousel__desc", children: l.description }),
      l.cta && /* @__PURE__ */ c(
        "a",
        {
          className: "nxp-carousel__cta",
          href: l.ctaHref || "#",
          onClick: l.ctaHref ? void 0 : (u) => u.preventDefault(),
          children: [
            l.cta,
            " →"
          ]
        }
      )
    ] }, o)) }),
    /* @__PURE__ */ c("div", { className: "nxp-carousel__nav", children: [
      /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("div", { className: "nxp-carousel__dots", children: e.map((l, o) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: `nxp-carousel__dot${r === o ? " is-active" : ""}`,
          onClick: () => s(o),
          "aria-label": `Go to slide ${o + 1}`,
          "aria-current": r === o
        },
        o
      )) }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => s(r + 1),
          disabled: r === e.length - 1,
          "aria-label": "Next slide",
          children: "›"
        }
      )
    ] })
  ] });
}
function In({
  checked: e,
  onChange: t,
  disabled: r = !1,
  label: a,
  className: i = ""
}) {
  const s = e !== void 0, [l, o] = C(!1), u = s ? e : l, d = ke(), h = A(() => {
    r || (s ? t && t(!e) : o((_) => !_));
  }, [r, s, e, t]), p = [
    "nxp-checkbox",
    u ? "is-checked" : "",
    r ? "is-disabled" : "",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("label", { className: p, htmlFor: d, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: d,
        type: "checkbox",
        checked: u,
        onChange: h,
        disabled: r,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": u,
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        onKeyDown: (_) => {
          _.key === " " && (_.preventDefault(), h());
        },
        onClick: (_) => {
          _.preventDefault(), h();
        },
        children: u && /* @__PURE__ */ n("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ n("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    a && /* @__PURE__ */ n("span", { children: a })
  ] });
}
function Ln({ options: e = [], value: t, onChange: r, placeholder: a = "Type to search…", className: i = "" }) {
  var y;
  const s = t !== void 0, [l, o] = C(""), [u, d] = C(!1), [h, p] = C(-1), _ = H(null), N = H(null), k = e.filter(
    (x) => x.label.toLowerCase().includes(l.toLowerCase())
  );
  s && ((y = e.find((x) => x.value === t)) != null && y.label), P(() => {
    var x;
    if (s && t) {
      const I = ((x = e.find((L) => L.value === t)) == null ? void 0 : x.label) || "";
      o(I);
    }
  }, [t, s, e]);
  const m = A(
    (x) => {
      r && r(x.value), o(x.label), d(!1), p(-1);
    },
    [s, r]
  );
  P(() => {
    if (!u) return;
    const x = (I) => {
      N.current && !N.current.contains(I.target) && d(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [u]);
  const f = (x) => {
    if (!u && (x.key === "ArrowDown" || x.key === "Enter")) {
      d(!0), p(0);
      return;
    }
    u && (x.key === "ArrowDown" ? (x.preventDefault(), p((I) => Math.min(I + 1, k.length - 1))) : x.key === "ArrowUp" ? (x.preventDefault(), p((I) => Math.max(I - 1, 0))) : x.key === "Home" ? (x.preventDefault(), p(0)) : x.key === "End" ? (x.preventDefault(), p(k.length - 1)) : x.key === "Enter" && h >= 0 && k[h] ? (x.preventDefault(), m(k[h])) : x.key === "Escape" && (d(!1), p(-1)));
  };
  return /* @__PURE__ */ c("div", { className: `nxp-combobox ${i}`, ref: N, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: _,
        type: "text",
        className: "nxp-combobox__input",
        value: l,
        placeholder: a,
        onChange: (x) => {
          o(x.target.value), d(!0), p(-1);
        },
        onFocus: () => d(!0),
        onKeyDown: f,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": u,
        "aria-haspopup": "listbox"
      }
    ),
    u && k.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-combobox__list", role: "listbox", children: k.map((x, I) => /* @__PURE__ */ n(
      "div",
      {
        className: `nxp-combobox__item${h === I ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": h === I,
        onMouseEnter: () => p(I),
        onMouseDown: (L) => {
          L.preventDefault(), m(x);
        },
        children: x.label
      },
      x.value
    )) })
  ] });
}
function Bn({
  open: e = !0,
  onClose: t,
  icon: r,
  iconVariant: a = "warning",
  title: i,
  description: s,
  actions: l,
  className: o = ""
}) {
  return e ? /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-dialog ${o}`,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-label": i,
      children: [
        r && /* @__PURE__ */ n("div", { className: `nxp-dialog__icon nxp-dialog__icon--${a}`, "aria-hidden": "true", children: r }),
        i && /* @__PURE__ */ n("div", { className: "nxp-dialog__title", children: i }),
        s && /* @__PURE__ */ n("p", { className: "nxp-dialog__desc", children: s }),
        l && /* @__PURE__ */ n("div", { className: "nxp-dialog__actions", children: l })
      ]
    }
  ) : null;
}
function Cn({
  options: e = [],
  value: t,
  onChange: r,
  placeholder: a = "Select…",
  disabled: i = !1,
  className: s = ""
}) {
  var w;
  const l = t !== void 0, [o, u] = C(""), d = l ? t : o, [h, p] = C(!1), [_, N] = C(-1), k = H(null), m = H(null), f = e.filter((v) => !v.divider), y = (w = e.find((v) => v.value === d)) == null ? void 0 : w.label, x = A(() => {
    p(!1), N(-1);
  }, []), I = A(
    (v) => {
      l || u(v.value), r && r(v.value), x();
    },
    [l, r, x]
  );
  P(() => {
    if (!h) return;
    const v = (S) => {
      k.current && !k.current.contains(S.target) && x();
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [h, x]);
  const L = (v) => {
    if (!h) {
      (v.key === "Enter" || v.key === " " || v.key === "ArrowDown") && (v.preventDefault(), p(!0), N(0));
      return;
    }
    const S = f;
    v.key === "ArrowDown" ? (v.preventDefault(), N((E) => Math.min(E + 1, S.length - 1))) : v.key === "ArrowUp" ? (v.preventDefault(), N((E) => Math.max(E - 1, 0))) : v.key === "Home" ? (v.preventDefault(), N(0)) : v.key === "End" ? (v.preventDefault(), N(S.length - 1)) : v.key === "Enter" && _ >= 0 ? (v.preventDefault(), I(S[_])) : v.key === "Escape" && (v.preventDefault(), x());
  };
  let D = -1;
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-dropdown${h ? " is-open" : ""} ${s}`,
      ref: k,
      children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: "nxp-dropdown__trigger",
            disabled: i,
            "aria-haspopup": "listbox",
            "aria-expanded": h,
            onClick: () => {
              i || p((v) => !v);
            },
            onKeyDown: L,
            children: [
              /* @__PURE__ */ n("span", { style: { color: d ? "var(--nxp-text)" : "var(--nxp-text-faint)" }, children: y || a }),
              /* @__PURE__ */ n("svg", { className: "nxp-dropdown__chevron", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: m,
            "aria-label": "Options",
            children: e.map((v, S) => {
              if (v.divider)
                return /* @__PURE__ */ n("div", { className: "nxp-dropdown__divider" }, S);
              D++;
              const E = D, T = v.value === d;
              return /* @__PURE__ */ c(
                "div",
                {
                  className: `nxp-dropdown__item${T ? " is-selected" : ""}${_ === E ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": T,
                  onClick: () => I(v),
                  onMouseEnter: () => N(E),
                  children: [
                    /* @__PURE__ */ n("span", { style: { flex: 1 }, children: v.label }),
                    v.sub && /* @__PURE__ */ n("span", { className: "nxp-dropdown__sub", children: v.sub }),
                    T && /* @__PURE__ */ n("svg", { className: "nxp-dropdown__check", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                  ]
                },
                v.value
              );
            })
          }
        )
      ]
    }
  );
}
function En({ icon: e, title: t, description: r, action: a, className: i = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-empty ${i}`, role: "status", children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: e }),
    t && /* @__PURE__ */ n("div", { className: "nxp-empty__title", children: t }),
    r && /* @__PURE__ */ n("p", { className: "nxp-empty__desc", children: r }),
    a && /* @__PURE__ */ n("div", { style: { marginTop: 8 }, children: a })
  ] });
}
function de({ content: e, children: t, className: r = "" }) {
  const [a, i] = C(!1), [s, l] = C({ top: 0, left: 0 }), o = H(null), u = H(null), d = A(() => {
    var y, x;
    if (!o.current) return;
    const _ = o.current.getBoundingClientRect(), N = ((y = u.current) == null ? void 0 : y.offsetWidth) || 120, k = ((x = u.current) == null ? void 0 : x.offsetHeight) || 30;
    let m = _.top - k - 6 + window.scrollY, f = _.left + _.width / 2 - N / 2 + window.scrollX;
    f = Math.max(8, Math.min(f, window.innerWidth - N - 8)), m < 4 && (m = _.bottom + 6 + window.scrollY), l({ top: m, left: f });
  }, []), h = A(() => {
    i(!0), requestAnimationFrame(d);
  }, [d]), p = A(() => i(!1), []);
  return P(() => {
    if (a)
      return window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
        window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
      };
  }, [a, d]), /* @__PURE__ */ c(be, { children: [
    /* @__PURE__ */ n(
      "span",
      {
        ref: o,
        className: `nxp-tooltip-wrap ${r}`,
        onMouseEnter: h,
        onMouseLeave: p,
        onFocus: h,
        onBlur: p,
        children: t
      }
    ),
    a && e && ce(
      /* @__PURE__ */ n(
        "div",
        {
          ref: u,
          className: "nxp-tooltip",
          style: { top: s.top, left: s.left },
          role: "tooltip",
          children: e
        }
      ),
      document.body
    )
  ] });
}
const Ie = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] });
function Sn({
  label: e,
  tooltip: t,
  hint: r,
  error: a,
  required: i = !1,
  htmlFor: s,
  children: l,
  className: o = ""
}) {
  return /* @__PURE__ */ c("div", { className: `nxp-field${a ? " nxp-field--error" : ""} ${o}`, children: [
    e && /* @__PURE__ */ c("div", { className: "nxp-field__label-row", children: [
      /* @__PURE__ */ c("label", { className: "nxp-field__label", htmlFor: s, children: [
        e,
        i && /* @__PURE__ */ n("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      t && /* @__PURE__ */ n(de, { content: t, children: /* @__PURE__ */ n(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ n(Ie, {})
        }
      ) })
    ] }),
    l,
    r && !a && /* @__PURE__ */ n("span", { className: "nxp-field__hint", children: r }),
    a && /* @__PURE__ */ n("span", { className: "nxp-field__error", role: "alert", children: a })
  ] });
}
function jn({ topline: e, icon: t, title: r, description: a, cta: i, href: s, step: l, className: o = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-iconbox ${o}`, children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-iconbox__topline", children: e }),
    l !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-iconbox__step", children: l }),
    t && !l && /* @__PURE__ */ n("div", { className: "nxp-iconbox__icon", "aria-hidden": "true", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-iconbox__title", children: r }),
    a && /* @__PURE__ */ n("p", { className: "nxp-iconbox__desc", children: a }),
    i && /* @__PURE__ */ c("a", { className: "nxp-iconbox__cta", href: s || "#", onClick: s ? void 0 : (u) => u.preventDefault(), children: [
      i,
      " →"
    ] })
  ] });
}
function An({
  type: e = "text",
  placeholder: t,
  value: r,
  onChange: a,
  disabled: i = !1,
  invalid: s = !1,
  className: l = "",
  ...o
}) {
  const u = ["nxp-input", s ? "nxp-input--invalid" : "", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(
    "input",
    {
      type: e,
      className: u,
      placeholder: t,
      value: r,
      onChange: a,
      disabled: i,
      "aria-invalid": s ? "true" : void 0,
      ...o
    }
  );
}
function Wn({ children: e, className: t = "" }) {
  return /* @__PURE__ */ n("kbd", { className: `nxp-kbd ${t}`, children: e });
}
function Fn({
  open: e = !1,
  onClose: t,
  size: r = "md",
  title: a,
  byline: i,
  children: s,
  footer: l,
  className: o = ""
}) {
  P(() => {
    if (e) {
      const h = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = h;
      };
    }
  }, [e]);
  const u = A(
    (h) => {
      h.key === "Escape" && t && t();
    },
    [t]
  );
  if (P(() => {
    if (e)
      return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [e, u]), !e) return null;
  const d = r !== "md" ? ` nxp-modal--${r}` : "";
  return ce(
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (h) => {
          h.target === h.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": a,
        children: /* @__PURE__ */ c("div", { className: `nxp-modal${d} ${o}`, children: [
          /* @__PURE__ */ c("div", { className: "nxp-modal__head", children: [
            /* @__PURE__ */ c("div", { style: { flex: 1 }, children: [
              a && /* @__PURE__ */ n("div", { className: "nxp-modal__title", children: a }),
              i && /* @__PURE__ */ n("div", { className: "nxp-modal__byline", children: i })
            ] }),
            t && /* @__PURE__ */ n("button", { type: "button", className: "nxp-modal__close", "aria-label": "Close modal", onClick: t, children: "×" })
          ] }),
          /* @__PURE__ */ n("div", { className: "nxp-modal__body", children: s }),
          l && /* @__PURE__ */ n("div", { className: "nxp-modal__foot", children: l })
        ] })
      }
    ),
    document.body
  );
}
const pe = {
  default: "ℹ",
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
function Tn({
  variant: e = "default",
  icon: t,
  children: r,
  onDismiss: a,
  dismissible: i = !0,
  className: s = ""
}) {
  const [l, o] = C(!1), [u, d] = C(!1), h = A(() => {
    o(!0), setTimeout(() => {
      d(!0), a && a();
    }, 220);
  }, [a]);
  if (u) return null;
  const p = t !== void 0 ? t : pe[e] || pe.default, _ = e !== "default" ? ` nxp-notice--${e}` : "";
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-notice${_}${l ? " is-dismissing" : ""} ${s}`,
      role: "status",
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-notice__icon", "aria-hidden": "true", children: p }),
        /* @__PURE__ */ n("div", { className: "nxp-notice__body", children: r }),
        i && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-notice__close",
            "aria-label": "Dismiss",
            onClick: h,
            children: "×"
          }
        )
      ]
    }
  );
}
function Pn({ page: e, totalPages: t = 1, onChange: r, showPrevNext: a = !0, className: i = "" }) {
  const s = e !== void 0, [l, o] = C(1), u = s ? e : l, d = A(
    (p) => {
      const _ = Math.min(t, Math.max(1, p));
      s || o(_), r && r(_);
    },
    [s, r, t]
  ), h = Array.from({ length: t }, (p, _) => _ + 1);
  return /* @__PURE__ */ c("nav", { className: `nxp-pagination ${i}`, "aria-label": "Pagination", children: [
    a && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: () => d(u - 1),
        disabled: u === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ),
    h.map((p) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `nxp-pagination__item${u === p ? " is-active" : ""}`,
        onClick: () => d(p),
        "aria-current": u === p ? "page" : void 0,
        children: p
      },
      p
    )),
    a && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: () => d(u + 1),
        disabled: u === t,
        "aria-label": "Next page",
        children: "›"
      }
    )
  ] });
}
function Rn({ title: e, description: t, footer: r, className: a = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-popover ${a}`, role: "tooltip", children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-popover__title", children: e }),
    t && /* @__PURE__ */ n("p", { className: "nxp-popover__desc", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-popover__footer", children: r })
  ] });
}
function On({ value: e = 0, variant: t = "default", className: r = "" }) {
  const a = Math.min(100, Math.max(0, e)), i = t !== "default" ? ` nxp-progress--${t}` : "";
  return /* @__PURE__ */ n(
    "div",
    {
      className: `nxp-progress${i} ${r}`,
      role: "progressbar",
      "aria-valuenow": a,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ n("div", { className: "nxp-progress__bar", style: { width: `${a}%` } })
    }
  );
}
function Hn({
  checked: e = !1,
  onChange: t,
  disabled: r = !1,
  name: a,
  value: i,
  label: s,
  className: l = ""
}) {
  const o = ke(), u = [
    "nxp-radio",
    e ? "is-checked" : "",
    r ? "is-disabled" : "",
    l
  ].filter(Boolean).join(" "), d = () => {
    r || t && t(i);
  };
  return /* @__PURE__ */ c("label", { className: u, htmlFor: o, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: o,
        type: "radio",
        name: a,
        value: i,
        checked: e,
        onChange: d,
        disabled: r,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": e,
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        onKeyDown: (h) => {
          h.key === " " && (h.preventDefault(), d());
        },
        onClick: (h) => {
          h.preventDefault(), d();
        },
        children: /* @__PURE__ */ n("span", { className: "nxp-radio__inner" })
      }
    ),
    s && /* @__PURE__ */ n("span", { children: s })
  ] });
}
function Un({ value: e, onChange: t, placeholder: r = "Search…", onClear: a, className: i = "" }) {
  const s = e !== void 0, [l, o] = C(""), u = s ? e : l, d = A(
    (h) => {
      const p = h.target.value;
      s || o(p), t && t(p);
    },
    [s, t]
  );
  return /* @__PURE__ */ c("div", { className: `nxp-search ${i}`, children: [
    /* @__PURE__ */ n("span", { className: "nxp-search__icon", "aria-hidden": "true", children: "⌕" }),
    /* @__PURE__ */ n(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: u,
        onChange: d,
        placeholder: r,
        "aria-label": r
      }
    )
  ] });
}
function Kn({ options: e = [], value: t, onChange: r, className: a = "" }) {
  var d;
  const i = t !== void 0, [s, l] = C((d = e[0]) == null ? void 0 : d.value), o = i ? t : s, u = A(
    (h) => {
      i || l(h), r && r(h);
    },
    [i, r]
  );
  return /* @__PURE__ */ n("div", { className: `nxp-segmented ${a}`, role: "group", "aria-label": "Segmented control", children: e.map((h) => /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: `nxp-segmented__option${o === h.value ? " is-selected" : ""}`,
      onClick: () => u(h.value),
      "aria-pressed": o === h.value,
      children: h.label
    },
    h.value
  )) });
}
function Yn({
  options: e = [],
  value: t,
  onChange: r,
  disabled: a = !1,
  placeholder: i,
  className: s = "",
  ...l
}) {
  return /* @__PURE__ */ c(
    "select",
    {
      className: `nxp-select ${s}`,
      value: t,
      onChange: r,
      disabled: a,
      ...l,
      children: [
        i && /* @__PURE__ */ n("option", { value: "", disabled: !0, children: i }),
        e.map((o) => /* @__PURE__ */ n("option", { value: o.value, children: o.label }, o.value))
      ]
    }
  );
}
function Vn({ title: e, byline: t, children: r, footer: a, className: i = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-sheet ${i}`, children: [
    (e || t) && /* @__PURE__ */ c("div", { className: "nxp-sheet__head", children: [
      e && /* @__PURE__ */ n("div", { className: "nxp-sheet__title", children: e }),
      t && /* @__PURE__ */ n("div", { className: "nxp-sheet__byline", children: t })
    ] }),
    /* @__PURE__ */ n("div", { className: "nxp-sheet__body", children: r }),
    a && /* @__PURE__ */ n("div", { className: "nxp-sheet__foot", children: a })
  ] });
}
function qn({ variant: e = "line", width: t, style: r = {}, className: a = "" }) {
  const i = e === "circle" ? " nxp-skeleton--circle" : e === "title" ? " nxp-skeleton--title" : "", s = { ...t ? { width: t } : {}, ...r };
  return /* @__PURE__ */ n(
    "span",
    {
      className: `nxp-skeleton${i} ${a}`,
      style: s,
      "aria-hidden": "true",
      role: "presentation"
    }
  );
}
function Jn({
  /* numeric value */
  min: e = 0,
  max: t = 100,
  step: r = 1,
  value: a,
  // controlled
  defaultValue: i = 50,
  // uncontrolled seed
  onChange: s,
  // (numericValue) => void
  /* label */
  label: l,
  /* static unit — string | false */
  unit: o = "px",
  /* dynamic units — string[] — triggers dropdown */
  units: u,
  // e.g. ['px', '%', 'rem', 'em']
  onUnitChange: d,
  // controlled unit handler (unit: string) => void
  disabled: h = !1,
  className: p = ""
}) {
  const _ = a !== void 0, [N, k] = C(i), m = _ ? a : N, f = Array.isArray(u) && u.length > 0, y = f ? u[0] : o || "", x = f && d !== void 0 && o !== void 0 && o !== !1, [I, L] = C(y), D = x ? o : I, w = H(null), v = Math.round((m - e) / (t - e) * 100);
  P(() => {
    w.current && w.current.style.setProperty("--val", String(v));
  }, [v]);
  const S = A((b) => {
    const j = Number(b.target.value);
    _ || k(j), s == null || s(j);
  }, [_, s]), E = A((b) => {
    const j = b.target.value;
    if (j === "") {
      _ || k("");
      return;
    }
    const M = Math.min(t, Math.max(e, Number(j)));
    isNaN(M) || (_ || k(M), s == null || s(M));
  }, [_, e, t, s]), T = A((b) => {
    b.target.value === "" && (_ || k(e), s == null || s(e));
  }, [_, e, s]), U = A((b) => {
    const j = b.target.value;
    x || L(j), d == null || d(j);
  }, [x, d]), R = !f && o !== !1 && D ? /* @__PURE__ */ n("span", { className: "nxp-slider__unit-suffix", children: D }) : null, K = f ? /* @__PURE__ */ n(
    "select",
    {
      className: "nxp-slider__unit-select",
      value: D,
      onChange: U,
      disabled: h,
      "aria-label": "Unit",
      children: u.map((b) => /* @__PURE__ */ n("option", { value: b, children: b }, b))
    }
  ) : null, V = ["nxp-slider", h ? "nxp-slider--disabled" : "", p].filter(Boolean).join(" "), $ = l ? `nxp-slider-${l.replace(/\s+/g, "-").toLowerCase()}` : void 0;
  return /* @__PURE__ */ c("div", { className: V, children: [
    /* @__PURE__ */ c("div", { className: "nxp-slider__header", children: [
      l && /* @__PURE__ */ n("label", { className: "nxp-slider__label", htmlFor: $, children: l }),
      /* @__PURE__ */ c("div", { className: "nxp-slider__controls", children: [
        K,
        /* @__PURE__ */ c("div", { className: "nxp-slider__input-wrap", children: [
          /* @__PURE__ */ n(
            "input",
            {
              type: "number",
              className: "nxp-slider__input",
              value: m,
              min: e,
              max: t,
              step: r,
              disabled: h,
              onChange: E,
              onBlur: T,
              "aria-label": l ? `${l} value` : "Slider value"
            }
          ),
          R
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "input",
      {
        id: $,
        ref: w,
        type: "range",
        className: "nxp-slider__range",
        min: e,
        max: t,
        step: r,
        value: m === "" ? e : m,
        onChange: S,
        disabled: h,
        style: { "--val": v },
        "aria-valuemin": e,
        "aria-valuemax": t,
        "aria-valuenow": m === "" ? e : m,
        "aria-label": l ?? "Slider"
      }
    )
  ] });
}
function zn({ size: e = "md", className: t = "" }) {
  return /* @__PURE__ */ n(
    "span",
    {
      className: `nxp-spinner${e === "sm" ? " nxp-spinner--sm" : e === "lg" ? " nxp-spinner--lg" : ""} ${t}`,
      role: "status",
      "aria-label": "Loading"
    }
  );
}
function Gn({ label: e, value: t, meta: r, className: a = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-stat ${a}`, children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-stat__label", children: e }),
    t !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-stat__value", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-stat__meta", children: r })
  ] });
}
function Xn({ variant: e = "default", children: t, className: r = "" }) {
  const a = e !== "default" ? ` nxp-status--${e}` : "";
  return /* @__PURE__ */ n("span", { className: `nxp-status${a} ${r}`, "aria-label": `Status: ${e}`, children: t });
}
function Zn({
  value: e,
  onChange: t,
  min: r = 0,
  max: a,
  step: i = 1,
  disabled: s = !1,
  className: l = ""
}) {
  const o = e !== void 0, [u, d] = C(0), h = o ? e : u, p = A(
    (m) => {
      const f = a !== void 0 ? Math.min(a, Math.max(r, m)) : Math.max(r, m);
      o || d(f), t && t(f);
    },
    [o, t, r, a]
  ), _ = (m) => {
    const f = parseInt(m.target.value, 10);
    isNaN(f) || p(f);
  }, N = h <= r, k = a !== void 0 && h >= a;
  return /* @__PURE__ */ c("div", { className: `nxp-stepper ${l}`, "aria-label": "Stepper", children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(h - i),
        disabled: s || N,
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ n(
      "input",
      {
        type: "number",
        className: "nxp-stepper__input",
        value: h,
        onChange: _,
        disabled: s,
        min: r,
        max: a,
        step: i,
        "aria-label": "Value"
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(h + i),
        disabled: s || k,
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
function Qn({ columns: e = [], rows: t = [], striped: r = !1, actions: a, className: i = "" }) {
  return /* @__PURE__ */ n("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ c("table", { className: `nxp-table${r ? " nxp-table--striped" : ""} ${i}`, children: [
    /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ c("tr", { children: [
      e.map((s) => /* @__PURE__ */ n("th", { className: s.numeric ? "nxp-table__num" : "", children: s.label }, s.key)),
      a && /* @__PURE__ */ n("th", { style: { textAlign: "right" }, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ n("tbody", { children: t.map((s, l) => /* @__PURE__ */ c("tr", { children: [
      e.map((o) => /* @__PURE__ */ n("td", { className: o.numeric ? "nxp-table__num" : "", children: s[o.key] }, o.key)),
      a && /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n("div", { className: "nxp-table__actions", children: a(s) }) })
    ] }, l)) })
  ] }) });
}
function et({
  variant: e = "pill",
  tabs: t = [],
  activeTab: r,
  onTabChange: a,
  defaultTab: i,
  className: s = ""
}) {
  const l = r !== void 0, [o, u] = C(i || t[0] && t[0].id), d = l ? r : o, [h, p] = C({}), _ = A(
    (f) => {
      l || u(f), a && a(f);
    },
    [l, a]
  ), N = e !== "pill" ? ` nxp-tabs--${e}` : "", k = e === "vertical", m = t.find((f) => f.id === d);
  return /* @__PURE__ */ c("div", { className: `nxp-tabs${N} ${s}`, role: "tablist", children: [
    /* @__PURE__ */ n("div", { className: "nxp-tabs__list", children: t.map((f) => /* @__PURE__ */ c(Ne.Fragment, { children: [
      /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__tab${d === f.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": d === f.id,
          onClick: () => _(f.id),
          children: f.label
        }
      ),
      k && f.subTabs && d === f.id && /* @__PURE__ */ n("div", { className: "nxp-tabs__sub-list", children: f.subTabs.map((y) => /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__sub${h[f.id] === y.id ? " is-active" : ""}`,
          onClick: () => p((x) => ({ ...x, [f.id]: y.id })),
          children: y.label
        },
        y.id
      )) })
    ] }, f.id)) }),
    m && m.content && /* @__PURE__ */ n("div", { className: `nxp-tabs__panel${k ? " nxp-tabs__content" : ""}`, role: "tabpanel", children: m.content })
  ] });
}
function nt({ variant: e = "default", children: t, className: r = "" }) {
  const a = e !== "default" ? ` nxp-tag--${e}` : "";
  return /* @__PURE__ */ n("span", { className: `nxp-tag${a} ${r}`, children: t });
}
function tt({
  value: e,
  defaultValue: t,
  onChange: r,
  placeholder: a,
  rows: i = 4,
  disabled: s = !1,
  invalid: l = !1,
  maxLength: o,
  showCount: u = !1,
  className: d = "",
  ...h
}) {
  const p = e !== void 0, [_, N] = C(t ?? ""), k = p ? e : _;
  function m(y) {
    p || N(y.target.value), r == null || r(y);
  }
  const f = [
    "nxp-textarea",
    l ? "nxp-textarea--invalid" : "",
    s ? "nxp-textarea--disabled" : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: f, children: [
    /* @__PURE__ */ n(
      "textarea",
      {
        className: "nxp-textarea__control",
        value: k,
        onChange: m,
        placeholder: a,
        rows: i,
        disabled: s,
        maxLength: o,
        "aria-invalid": l || void 0,
        ...h
      }
    ),
    u && o != null && /* @__PURE__ */ c("span", { className: "nxp-textarea__count", children: [
      k.length,
      "/",
      o
    ] })
  ] });
}
function rt({ variant: e = "default", icon: t, title: r, description: a, onClose: i, className: s = "" }) {
  const o = t !== void 0 ? t : e === "error" ? "✕" : "✓";
  return /* @__PURE__ */ c("div", { className: `nxp-toast${e !== "default" ? ` nxp-toast--${e}` : ""} ${s}`, role: "alert", "aria-live": "assertive", children: [
    o && /* @__PURE__ */ n("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: o }),
    /* @__PURE__ */ c("div", { className: "nxp-toast__body", children: [
      r && /* @__PURE__ */ n("div", { className: "nxp-toast__title", children: r }),
      a && /* @__PURE__ */ n("div", { className: "nxp-toast__desc", children: a })
    ] }),
    i && /* @__PURE__ */ n("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: i, children: "×" })
  ] });
}
function ge({
  checked: e,
  onChange: t,
  disabled: r = !1,
  variant: a,
  label: i,
  className: s = ""
}) {
  const l = e !== void 0, [o, u] = C(!1), d = l ? e : o, h = A(() => {
    r || (l ? t && t(!e) : u((N) => !N));
  }, [r, l, e, t]), p = A(
    (N) => {
      N.key === " " && (N.preventDefault(), h());
    },
    [h]
  ), _ = [
    "nxp-toggle",
    d ? "is-checked" : "",
    r ? "is-disabled" : "",
    a ? `nxp-toggle--${a}` : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      className: _,
      role: "switch",
      "aria-checked": d,
      "aria-disabled": r,
      tabIndex: r ? -1 : 0,
      onClick: h,
      onKeyDown: p,
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-toggle__track", children: /* @__PURE__ */ n("span", { className: "nxp-toggle__thumb" }) }),
        i && /* @__PURE__ */ n("span", { children: i })
      ]
    }
  );
}
const Le = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), Be = () => /* @__PURE__ */ c("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12.03 9.22a1 1 0 0 0 .2 1.1l.04.04a1.21 1.21 0 0 1-1.71 1.71l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91v.11a1.21 1.21 0 0 1-2.42 0v-.06a1 1 0 0 0-.66-.91 1 1 0 0 0-1.1.2l-.04.04a1.21 1.21 0 0 1-1.71-1.71l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H2.1a1.21 1.21 0 0 1 0-2.42h.06a1 1 0 0 0 .91-.66 1 1 0 0 0-.2-1.1l-.04-.04a1.21 1.21 0 0 1 1.71-1.71l.04.04a1 1 0 0 0 1.1.2h.05a1 1 0 0 0 .6-.91V2.1a1.21 1.21 0 0 1 2.42 0v.06a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.04a1.21 1.21 0 0 1 1.71 1.71l-.04.04a1 1 0 0 0-.2 1.1v.05a1 1 0 0 0 .91.6h.11a1.21 1.21 0 0 1 0 2.42h-.06a1 1 0 0 0-.91.6Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }), Ce = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "2.5", y: "6.5", width: "9", height: "6.5", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round"
    }
  )
] }), Ee = () => /* @__PURE__ */ n("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 5.5h7M6 3l3 2.5L6 8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }), ue = {
  default: "nxp-ftc__badge",
  primary: "nxp-ftc__badge nxp-ftc__badge--primary",
  success: "nxp-ftc__badge nxp-ftc__badge--success",
  warning: "nxp-ftc__badge nxp-ftc__badge--warning",
  error: "nxp-ftc__badge nxp-ftc__badge--error",
  beta: "nxp-ftc__badge nxp-ftc__badge--beta",
  pro: "nxp-ftc__badge nxp-ftc__badge--pro"
}, Se = {
  pro: "PRO",
  freemium: "FREEMIUM"
};
function at({
  /* content */
  title: e,
  tooltip: t,
  /* plan */
  planType: r = "free",
  // 'free' | 'pro' | 'freemium'
  isLocked: a = !1,
  isNew: i = !1,
  onUpgradeClick: s,
  /* feature-level badge (backward compat) */
  showBadge: l = !1,
  badgeText: o = "BETA",
  badgeVariant: u = "beta",
  /* docs */
  docsLabel: d = "Read Docs",
  docsHref: h,
  onDocsClick: p,
  /* interaction */
  isEnabled: _,
  onToggle: N,
  onChange: k,
  onSettingsClick: m,
  disabled: f = !1,
  className: y = ""
}) {
  const x = r && r !== "free", I = a || f;
  function L(S) {
    k == null || k(S), N == null || N(S);
  }
  const D = [
    "nxp-ftc-outer",
    x ? "nxp-ftc-outer--has-plan" : ""
  ].filter(Boolean).join(" "), w = [
    "nxp-ftc",
    a ? "nxp-ftc--locked" : "",
    f ? "nxp-ftc--disabled" : "",
    y
  ].filter(Boolean).join(" "), v = h ? /* @__PURE__ */ n(
    "a",
    {
      href: h,
      className: "nxp-ftc__link",
      target: "_blank",
      rel: "noopener noreferrer",
      tabIndex: I ? -1 : 0,
      children: d
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: "nxp-ftc__link nxp-ftc__link--btn",
      onClick: p,
      disabled: I,
      tabIndex: I ? -1 : 0,
      children: d
    }
  );
  return /* @__PURE__ */ c("div", { className: D, children: [
    x && /* @__PURE__ */ n("span", { className: `nxp-ftc-plan nxp-ftc-plan--${r}`, children: Se[r] }),
    /* @__PURE__ */ n("div", { className: w, children: /* @__PURE__ */ c("div", { className: "nxp-ftc__body", children: [
      /* @__PURE__ */ c("div", { className: "nxp-ftc__left", children: [
        /* @__PURE__ */ c("div", { className: "nxp-ftc__title-row", children: [
          /* @__PURE__ */ n("span", { className: "nxp-ftc__title", children: e }),
          i && /* @__PURE__ */ n("span", { className: "nxp-ftc__badge nxp-ftc__badge--new", "aria-label": "New feature", children: "NEW" }),
          l && o && /* @__PURE__ */ n(
            "span",
            {
              className: ue[u] ?? ue.default,
              "aria-label": `${o} feature`,
              children: o
            }
          ),
          t && /* @__PURE__ */ n(de, { content: t, children: /* @__PURE__ */ n(
            "span",
            {
              className: "nxp-ftc__info-icon",
              tabIndex: I ? -1 : 0,
              role: "button",
              "aria-label": `About ${e}`,
              children: /* @__PURE__ */ n(Le, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ c("div", { className: "nxp-ftc__links", children: [
          v,
          a && s && /* @__PURE__ */ c(be, { children: [
            /* @__PURE__ */ n("span", { className: "nxp-ftc__links-sep", "aria-hidden": "true", children: "·" }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "nxp-ftc__upgrade-link nxp-ftc__link--btn",
                onClick: s,
                children: [
                  "Upgrade",
                  /* @__PURE__ */ n(Ee, {})
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "nxp-ftc__right", children: [
        m && !a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-ftc__settings-btn",
            onClick: m,
            disabled: f,
            "aria-label": `${e} settings`,
            tabIndex: f ? -1 : 0,
            children: /* @__PURE__ */ n(Be, {})
          }
        ),
        a ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-ftc__lock-btn",
            onClick: s,
            "aria-label": `Upgrade to unlock ${e}`,
            title: "Upgrade to unlock",
            children: /* @__PURE__ */ n(Ce, {})
          }
        ) : /* @__PURE__ */ n(
          ge,
          {
            checked: _,
            onChange: L,
            disabled: f,
            "aria-label": `Enable ${e}`
          }
        )
      ] })
    ] }) })
  ] });
}
const je = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), Ae = De(function({ itemKey: t, label: r, value: a, tooltip: i, onToggle: s, disabled: l }) {
  return /* @__PURE__ */ c("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ c("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ n("span", { className: "nxp-tg__item-label", children: r }),
      i && /* @__PURE__ */ n(de, { content: i, children: /* @__PURE__ */ n(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${r}`,
          children: /* @__PURE__ */ n(je, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ n(
      ge,
      {
        checked: a,
        onChange: (o) => s(t, o),
        disabled: l,
        "aria-label": `Enable ${r}`
      }
    )
  ] });
});
function st({
  items: e = [],
  columns: t = 2,
  onChange: r,
  valueMap: a,
  disabled: i = !1,
  className: s = ""
}) {
  const l = a !== void 0, [o, u] = C(
    () => Object.fromEntries(e.map((k) => [k.key, k.value ?? !1]))
  );
  function d() {
    return l ? a : o;
  }
  function h(k, m) {
    const y = { ...d(), [k]: m }, x = e.map((I) => ({
      ...I,
      value: y[I.key] ?? I.value ?? !1
    }));
    l || u(y), r == null || r(k, m, x);
  }
  const p = Math.min(Math.max(Number(t) || 2, 1), 4), _ = d(), N = [
    "nxp-tg",
    `nxp-tg--cols-${p}`,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: N, role: "group", children: e.map((k) => /* @__PURE__ */ n(
    Ae,
    {
      itemKey: k.key,
      label: k.label,
      value: _[k.key] ?? k.value ?? !1,
      tooltip: k.tooltip,
      onToggle: h,
      disabled: i
    },
    k.key
  )) });
}
const We = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n(
  "path",
  {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Fe = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n(
  "path",
  {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function Te(e) {
  return e.length ? "options" in e[0] ? e : [{ label: null, options: e }] : [];
}
function ot({
  /* data */
  options: e = [],
  value: t = [],
  onChange: r,
  /* behaviour */
  searchable: a = !0,
  disabled: i = !1,
  /* translatable UI strings */
  placeholder: s = "Select options",
  searchPlaceholder: l = "Search…",
  noResultsText: o = "No results found",
  clearAllLabel: u = "Clear all",
  removeLabel: d = "Remove",
  className: h = ""
}) {
  const [p, _] = C(!1), [N, k] = C(""), [m, f] = C(-1), y = H(null), x = H(null), I = H(null), L = q(() => Te(e), [e]), D = q(
    () => L.flatMap(($) => $.options ?? []),
    [L]
  ), w = q(() => {
    const $ = N.trim().toLowerCase();
    return $ ? L.map((b) => ({
      ...b,
      options: (b.options ?? []).filter(
        (j) => j.label.toLowerCase().includes($)
      )
    })).filter((b) => b.options.length > 0) : L;
  }, [L, N]), v = q(
    () => w.flatMap(($) => $.options ?? []),
    [w]
  ), S = A(() => {
    i || (_(!0), f(-1), requestAnimationFrame(() => {
      var $;
      return ($ = x.current) == null ? void 0 : $.focus();
    }));
  }, [i]), E = A(() => {
    _(!1), k(""), f(-1);
  }, []);
  P(() => {
    if (!p) return;
    function $(b) {
      y.current && !y.current.contains(b.target) && E();
    }
    return document.addEventListener("pointerdown", $), () => document.removeEventListener("pointerdown", $);
  }, [p, E]);
  const T = A(
    ($) => {
      if (i) return;
      const b = t.includes($) ? t.filter((j) => j !== $) : [...t, $];
      r == null || r(b);
    },
    [i, t, r]
  ), U = A(
    ($, b) => {
      b.stopPropagation(), r == null || r(t.filter((j) => j !== $));
    },
    [t, r]
  ), Y = A(
    ($) => {
      $.stopPropagation(), r == null || r([]);
    },
    [r]
  ), R = A(
    ($) => {
      var b;
      return ((b = D.find((j) => j.value === $)) == null ? void 0 : b.label) ?? String($);
    },
    [D]
  ), K = A(
    ($) => {
      var b;
      if (!p) {
        ["Enter", " ", "ArrowDown"].includes($.key) && ($.preventDefault(), S());
        return;
      }
      switch ($.key) {
        case "Escape":
          $.preventDefault(), E(), (b = y.current) == null || b.focus();
          break;
        case "ArrowDown":
          $.preventDefault(), f((j) => Math.min(j + 1, v.length - 1));
          break;
        case "ArrowUp":
          $.preventDefault(), f((j) => Math.max(j - 1, 0));
          break;
        case "Enter":
          $.preventDefault(), m >= 0 && v[m] && T(v[m].value);
          break;
      }
    },
    [p, S, E, v, m, T]
  );
  P(() => {
    if (m < 0 || !I.current) return;
    const $ = I.current.querySelector(`[data-idx="${m}"]`);
    $ == null || $.scrollIntoView({ block: "nearest" });
  }, [m]);
  const V = [
    "nxp-ms",
    p ? "nxp-ms--open" : "",
    i ? "nxp-ms--disabled" : "",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      ref: y,
      className: V,
      tabIndex: i ? -1 : 0,
      role: "combobox",
      "aria-expanded": p,
      "aria-haspopup": "listbox",
      "aria-disabled": i || void 0,
      onKeyDown: K,
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "nxp-ms__trigger",
            onClick: p ? E : S,
            "aria-label": "Open select",
            children: [
              /* @__PURE__ */ c("div", { className: "nxp-ms__tags-wrap", children: [
                t.length === 0 && /* @__PURE__ */ n("span", { className: "nxp-ms__placeholder", children: s }),
                t.map(($) => /* @__PURE__ */ c("span", { className: "nxp-ms__tag", children: [
                  /* @__PURE__ */ n("span", { className: "nxp-ms__tag-label", children: R($) }),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: "nxp-ms__tag-remove",
                      onPointerDown: (b) => U($, b),
                      "aria-label": `${d} ${R($)}`,
                      tabIndex: -1,
                      children: "×"
                    }
                  )
                ] }, $))
              ] }),
              /* @__PURE__ */ c("div", { className: "nxp-ms__trigger-end", children: [
                t.length > 0 && !i && /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: "nxp-ms__clear",
                    onPointerDown: Y,
                    "aria-label": u,
                    tabIndex: -1,
                    children: "×"
                  }
                ),
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: `nxp-ms__chevron${p ? " nxp-ms__chevron--up" : ""}`,
                    children: /* @__PURE__ */ n(We, {})
                  }
                )
              ] })
            ]
          }
        ),
        p && /* @__PURE__ */ c("div", { className: "nxp-ms__dropdown", children: [
          a && /* @__PURE__ */ n("div", { className: "nxp-ms__search-wrap", children: /* @__PURE__ */ n(
            "input",
            {
              ref: x,
              type: "text",
              className: "nxp-ms__search",
              value: N,
              placeholder: l,
              "aria-label": l,
              onChange: ($) => {
                k($.target.value), f(-1);
              },
              onKeyDown: ($) => {
                ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes($.key) && ($.preventDefault(), K($));
              }
            }
          ) }),
          /* @__PURE__ */ c(
            "div",
            {
              ref: I,
              className: "nxp-ms__list",
              role: "listbox",
              "aria-multiselectable": "true",
              children: [
                w.length === 0 && /* @__PURE__ */ n("div", { className: "nxp-ms__empty", role: "status", children: o }),
                (() => {
                  let $ = 0;
                  return w.map((b) => /* @__PURE__ */ c(
                    "div",
                    {
                      className: "nxp-ms__group",
                      children: [
                        b.label && /* @__PURE__ */ n("div", { className: "nxp-ms__group-label", "aria-label": b.label, children: b.label }),
                        (b.options ?? []).map((j) => {
                          const M = $++, B = t.includes(j.value), g = m === M, W = j.disabled ?? !1;
                          return /* @__PURE__ */ c(
                            "div",
                            {
                              "data-idx": M,
                              className: [
                                "nxp-ms__option",
                                B ? "nxp-ms__option--selected" : "",
                                g ? "nxp-ms__option--focused" : "",
                                W ? "nxp-ms__option--disabled" : ""
                              ].filter(Boolean).join(" "),
                              role: "option",
                              "aria-selected": B,
                              "aria-disabled": W || void 0,
                              onPointerDown: (O) => {
                                O.preventDefault(), W || T(j.value);
                              },
                              onMouseEnter: () => !W && f(M),
                              children: [
                                /* @__PURE__ */ n("span", { className: "nxp-ms__option-label", children: j.label }),
                                B && /* @__PURE__ */ n("span", { className: "nxp-ms__option-check", children: /* @__PURE__ */ n(Fe, {}) })
                              ]
                            },
                            j.value
                          );
                        })
                      ]
                    },
                    b.label ?? "__ungrouped"
                  ));
                })()
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Pe = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "4.5", y: "1.5", width: "8", height: "9", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ n("path", { d: "M1.5 4.5H3v7A1.5 1.5 0 0 0 4.5 13H10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
] }), Re = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function it({
  value: e = "",
  label: t,
  hint: r,
  disabled: a = !1,
  /* translatable */
  copyText: i = "Copy",
  copiedText: s = "Copied!",
  copyLabel: l = "Copy to clipboard",
  className: o = ""
}) {
  const [u, d] = C(!1), h = A(async () => {
    if (!(a || !e)) {
      try {
        await navigator.clipboard.writeText(e);
      } catch {
        const _ = document.createElement("textarea");
        _.value = e, _.style.position = "fixed", _.style.opacity = "0", document.body.appendChild(_), _.select(), document.execCommand("copy"), document.body.removeChild(_);
      }
      d(!0), setTimeout(() => d(!1), 2e3);
    }
  }, [a, e]), p = [
    "nxp-copy",
    a ? "nxp-copy--disabled" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: p, children: [
    t && /* @__PURE__ */ n("label", { className: "nxp-copy__label", children: t }),
    /* @__PURE__ */ c("div", { className: "nxp-copy__wrap", children: [
      /* @__PURE__ */ n(
        "input",
        {
          type: "text",
          className: "nxp-copy__input",
          value: e,
          readOnly: !0,
          "aria-label": t ?? "Copy value",
          disabled: a
        }
      ),
      /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: `nxp-copy__btn${u ? " nxp-copy__btn--copied" : ""}`,
          onClick: h,
          disabled: a,
          "aria-label": l,
          title: l,
          children: [
            u ? /* @__PURE__ */ n(Re, {}) : /* @__PURE__ */ n(Pe, {}),
            /* @__PURE__ */ n("span", { children: u ? s : i })
          ]
        }
      )
    ] }),
    r && /* @__PURE__ */ n("span", { className: "nxp-copy__hint", children: r })
  ] });
}
const Oe = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M4 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), He = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M1.5 6.5L7 1.5l5.5 5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M3 5.5V12a.5.5 0 0 0 .5.5h2.75V9h1.5v3.5H10.5A.5.5 0 0 0 11 12V5.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
] });
function lt({
  items: e = [],
  separator: t,
  // custom separator node — defaults to ChevronIcon
  showHome: r = !1,
  // prepend a home icon on first item
  className: a = ""
}) {
  const i = ["nxp-bc", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("nav", { className: i, "aria-label": "Breadcrumb", children: /* @__PURE__ */ n("ol", { className: "nxp-bc__list", role: "list", children: e.map((s, l) => {
    const o = l === e.length - 1, u = l === 0, d = s.icon ?? (r && u ? /* @__PURE__ */ n(He, {}) : null);
    return /* @__PURE__ */ c("li", { className: "nxp-bc__item", children: [
      !o && (s.href ? /* @__PURE__ */ c("a", { href: s.href, className: "nxp-bc__link", children: [
        d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
        s.label
      ] }) : /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: "nxp-bc__link nxp-bc__link--btn",
          onClick: s.onClick,
          children: [
            d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
            s.label
          ]
        }
      )),
      o && /* @__PURE__ */ c("span", { className: "nxp-bc__current", "aria-current": "page", children: [
        d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
        s.label
      ] }),
      !o && /* @__PURE__ */ n("span", { className: "nxp-bc__sep", "aria-hidden": "true", children: t ?? /* @__PURE__ */ n(Oe, {}) })
    ] }, l);
  }) }) });
}
function ct({
  children: e,
  onConfirm: t,
  /* text — all translatable */
  message: r = "Are you sure?",
  confirmText: a = "Yes, confirm",
  cancelText: i = "Cancel",
  /* styling */
  variant: s = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: l,
  // defaults to same as variant
  size: o = "md",
  // 'sm' | 'md'
  disabled: u = !1,
  /* timing */
  autoResetMs: d = 0,
  // auto-cancel confirmation after N ms (0 = never)
  className: h = ""
}) {
  const [p, _] = C(!1), N = H(null);
  function k() {
    u || (_(!0), d > 0 && (N.current = setTimeout(() => _(!1), d)));
  }
  function m() {
    clearTimeout(N.current), _(!1), t == null || t();
  }
  function f() {
    clearTimeout(N.current), _(!1);
  }
  P(() => () => clearTimeout(N.current), []);
  const y = l ?? s, x = o === "sm" ? " nxp-confirm--sm" : "";
  return p ? /* @__PURE__ */ c("div", { className: `nxp-confirm nxp-confirm--inline${x} ${h}`, role: "group", "aria-label": "Confirm action", children: [
    /* @__PURE__ */ n("span", { className: "nxp-confirm__message", children: r }),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `nxp-confirm__ok nxp-confirm__ok--${y}`,
        onClick: m,
        autoFocus: !0,
        children: a
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-confirm__cancel",
        onClick: f,
        children: i
      }
    )
  ] }) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: [`nxp-btn nxp-btn--${s}`, x, h].filter(Boolean).join(" "),
      onClick: k,
      disabled: u,
      children: e
    }
  );
}
const Ue = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), Ke = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) });
function dt({
  value: e,
  defaultValue: t = 0,
  onChange: r,
  min: a,
  max: i,
  step: s = 1,
  precision: l,
  // decimal places — inferred from step if omitted
  label: o,
  prefix: u,
  suffix: d,
  hint: h,
  error: p,
  disabled: _ = !1,
  readOnly: N = !1,
  className: k = "",
  /* translatable */
  increaseLabel: m = "Increase",
  decreaseLabel: f = "Decrease"
}) {
  var M;
  const y = e !== void 0, [x, I] = C(t), [L, D] = C(""), [w, v] = C(!1), S = y ? e : x, E = l ?? (s % 1 !== 0 ? ((M = String(s).split(".")[1]) == null ? void 0 : M.length) ?? 0 : 0);
  function T(B) {
    return isNaN(B) ? S : (a !== void 0 && (B = Math.max(a, B)), i !== void 0 && (B = Math.min(i, B)), E > 0 ? parseFloat(B.toFixed(E)) : Math.round(B));
  }
  function U(B) {
    const g = T(B);
    y || I(g), r == null || r(g);
  }
  const Y = A(() => U(Number(S) + s), [S, s]), R = A(() => U(Number(S) - s), [S, s]);
  function K(B) {
    B.key === "ArrowUp" && (B.preventDefault(), Y()), B.key === "ArrowDown" && (B.preventDefault(), R());
  }
  const V = a !== void 0 && Number(S) <= a, $ = i !== void 0 && Number(S) >= i, b = [
    "nxp-num",
    p ? "nxp-num--error" : "",
    _ ? "nxp-num--disabled" : "",
    k
  ].filter(Boolean).join(" "), j = w ? L : String(S ?? "");
  return /* @__PURE__ */ c("div", { className: b, children: [
    o && /* @__PURE__ */ n("label", { className: "nxp-num__label", children: o }),
    /* @__PURE__ */ c("div", { className: "nxp-num__wrap", children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--dec",
          onClick: R,
          disabled: _ || N || V,
          "aria-label": f,
          tabIndex: -1,
          children: /* @__PURE__ */ n(Ue, {})
        }
      ),
      /* @__PURE__ */ c("div", { className: "nxp-num__field", children: [
        u && /* @__PURE__ */ n("span", { className: "nxp-num__prefix", children: u }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            className: "nxp-num__input",
            value: j,
            disabled: _,
            readOnly: N,
            "aria-label": o ?? "Number input",
            "aria-invalid": !!p,
            onFocus: () => {
              v(!0), D(String(S ?? ""));
            },
            onChange: (B) => D(B.target.value),
            onBlur: () => {
              v(!1);
              const B = parseFloat(L);
              U(isNaN(B) ? S : B);
            },
            onKeyDown: K
          }
        ),
        d && /* @__PURE__ */ n("span", { className: "nxp-num__suffix", children: d })
      ] }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--inc",
          onClick: Y,
          disabled: _ || N || $,
          "aria-label": m,
          tabIndex: -1,
          children: /* @__PURE__ */ n(Ke, {})
        }
      )
    ] }),
    h && !p && /* @__PURE__ */ n("span", { className: "nxp-num__hint", children: h }),
    p && /* @__PURE__ */ n("span", { className: "nxp-num__error", role: "alert", children: p })
  ] });
}
function pt({
  length: e = 6,
  value: t,
  // controlled: string of digits/chars
  onChange: r,
  // (fullString) => void
  defaultValue: a = "",
  type: i = "number",
  // 'number' | 'text' | 'password'
  disabled: s = !1,
  autoFocus: l = !1,
  separator: o,
  // insert a dash/dot after this index (e.g. 3 → "XXX-XXX")
  separatorChar: u = "–",
  /* translatable */
  inputLabel: d = "OTP digit",
  // aria-label prefix per input
  className: h = ""
}) {
  const p = t !== void 0, [_, N] = C(() => {
    const D = (p ? t : a) ?? "";
    return Array.from({ length: e }, (w, v) => D[v] ?? "");
  });
  P(() => {
    p && N(Array.from({ length: e }, (D, w) => (t ?? "")[w] ?? ""));
  }, [p, t, e]);
  const k = H([]);
  function m(D) {
    var w, v;
    (w = k.current[D]) == null || w.focus(), (v = k.current[D]) == null || v.select();
  }
  const f = A((D) => {
    p || N(D), r == null || r(D.join(""));
  }, [p, r]);
  function y(D, w) {
    const S = w.target.value.slice(-1);
    if (i === "number" && S !== "" && !/^\d$/.test(S)) return;
    const E = [..._];
    E[D] = S, f(E), S && D < e - 1 && m(D + 1);
  }
  function x(D, w) {
    if (w.key === "Backspace") {
      if (_[D]) {
        const v = [..._];
        v[D] = "", f(v);
      } else if (D > 0) {
        const v = [..._];
        v[D - 1] = "", f(v), m(D - 1);
      }
    }
    w.key === "ArrowLeft" && D > 0 && m(D - 1), w.key === "ArrowRight" && D < e - 1 && m(D + 1);
  }
  function I(D) {
    D.preventDefault();
    const w = D.clipboardData.getData("text").replace(/\D/g, i === "number" ? "" : void 0).slice(0, e);
    if (!w) return;
    const v = Array.from({ length: e }, (S, E) => w[E] ?? "");
    f(v), m(Math.min(w.length, e - 1));
  }
  const L = ["nxp-otp", s ? "nxp-otp--disabled" : "", h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: L, role: "group", "aria-label": "OTP input", children: Array.from({ length: e }, (D, w) => /* @__PURE__ */ c(Ne.Fragment, { children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: (v) => {
          k.current[w] = v;
        },
        type: i === "number" ? "tel" : i,
        inputMode: i === "number" ? "numeric" : "text",
        pattern: i === "number" ? "[0-9]*" : void 0,
        maxLength: 1,
        className: "nxp-otp__input",
        value: _[w],
        disabled: s,
        autoFocus: l && w === 0,
        "aria-label": `${d} ${w + 1}`,
        onChange: (v) => y(w, v),
        onKeyDown: (v) => x(w, v),
        onPaste: I,
        onFocus: (v) => v.target.select()
      }
    ),
    o && w === o - 1 && /* @__PURE__ */ n("span", { className: "nxp-otp__sep", "aria-hidden": "true", children: u })
  ] }, w)) });
}
const Ye = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "10.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "10.5", r: "1", fill: "currentColor" })
] });
function ut({
  items: e = [],
  onChange: t,
  renderItem: r,
  disabled: a = !1,
  className: i = "",
  /* translatable */
  dragHandleLabel: s = "Drag to reorder"
}) {
  const [l, o] = C(null), [u, d] = C(null), h = A((m, f) => {
    o(m), f.dataTransfer.effectAllowed = "move", f.dataTransfer.setData("text/plain", String(m));
  }, []), p = A((m, f) => {
    f.preventDefault(), f.dataTransfer.dropEffect = "move", m !== u && d(m);
  }, [u]), _ = A((m) => {
    if (l === null || l === m) {
      o(null), d(null);
      return;
    }
    const f = [...e], [y] = f.splice(l, 1);
    f.splice(m, 0, y), t == null || t(f), o(null), d(null);
  }, [l, e, t]), N = A(() => {
    o(null), d(null);
  }, []), k = ["nxp-sortable", a ? "nxp-sortable--disabled" : "", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: k, role: "list", children: e.map((m, f) => {
    const y = l === f, x = u === f && l !== null && l !== f, I = x && l > f, L = x && l < f;
    return /* @__PURE__ */ c(
      "div",
      {
        role: "listitem",
        className: [
          "nxp-sortable__item",
          y ? "nxp-sortable__item--dragging" : "",
          I ? "nxp-sortable__item--over-top" : "",
          L ? "nxp-sortable__item--over-bottom" : ""
        ].filter(Boolean).join(" "),
        draggable: !a,
        onDragStart: (D) => h(f, D),
        onDragOver: (D) => p(f, D),
        onDrop: () => _(f),
        onDragEnd: N,
        "aria-roledescription": "sortable item",
        children: [
          !a && /* @__PURE__ */ n(
            "span",
            {
              className: "nxp-sortable__handle",
              "aria-label": s,
              title: s,
              children: /* @__PURE__ */ n(Ye, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: "nxp-sortable__content", children: r ? r(m, f) : /* @__PURE__ */ n("span", { className: "nxp-sortable__label", children: m.label ?? m.id }) })
        ]
      },
      m.id ?? f
    );
  }) });
}
const Ve = () => /* @__PURE__ */ c("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M14 18V10M14 10l-3.5 3.5M14 10l3.5 3.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("rect", { x: "2", y: "2", width: "24", height: "24", rx: "6", stroke: "currentColor", strokeWidth: "1.4", strokeDasharray: "4 3" })
] }), qe = () => /* @__PURE__ */ c("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M13 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-7Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M13 2v7h7", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" })
] }), Je = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 2l8 8M10 2l-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), ze = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "5.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M4 7c0-1.66 1.34-3 3-3a3 3 0 0 1 2.83 2M7 10a3 3 0 0 1-2.83-2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
  /* @__PURE__ */ n("path", { d: "M7 4.5v5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] });
function he(e) {
  return e < 1024 ? `${e} B` : e < 1048576 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`;
}
function Ge(e) {
  if (typeof e == "string") return /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(e);
  const t = (e == null ? void 0 : e.type) ?? (e == null ? void 0 : e.mime_type) ?? "", r = (e == null ? void 0 : e.name) ?? (e == null ? void 0 : e.filename) ?? "";
  return t.startsWith("image/") || /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(r);
}
function Xe(e) {
  return typeof e == "string" ? e : e != null && e.url ? e.url : e instanceof File ? URL.createObjectURL(e) : "";
}
function Ze(e) {
  return typeof e == "string" ? e.split("/").pop() : (e == null ? void 0 : e.filename) ?? (e == null ? void 0 : e.name) ?? (e == null ? void 0 : e.url) ?? "file";
}
function ht({
  value: e = [],
  // File[] | WPMedia[] | string[]
  onChange: t,
  accept: r = "*/*",
  multiple: a = !1,
  maxSize: i,
  // bytes
  maxFiles: s,
  disabled: l = !1,
  showPreview: o = !0,
  /* WP Media integration */
  wpMedia: u = !1,
  wpMediaTitle: d = "Select Media",
  wpMediaButton: h = "Use this media",
  wpMediaType: p,
  // 'image' | 'video' | undefined
  /* translatable */
  dropText: _ = "Drag & drop files here, or",
  browseText: N = "Browse",
  wpMediaText: k = "Media Library",
  maxSizeText: m,
  removeFileLabel: f = "Remove file",
  errorSizeText: y = (L, D) => `"${L}" exceeds the ${he(D)} limit`,
  errorMaxText: x = (L) => `Maximum ${L} file(s) allowed`,
  className: I = ""
}) {
  const L = H(null), [D, w] = C(!1), [v, S] = C([]), E = A(() => {
    var j;
    if (!((j = window.wp) != null && j.media)) return;
    const b = window.wp.media({
      title: d,
      button: { text: h },
      multiple: a,
      library: p ? { type: p } : void 0
    });
    b.on("select", () => {
      const M = b.state().get("selection").toJSON(), B = a ? [...e, ...M].slice(0, s ?? 1 / 0) : [M[0]];
      t == null || t(B);
    }), b.open();
  }, [e, a, s, d, h, p, t]), T = A((b) => {
    const j = Array.from(b), M = [], B = j.filter((O) => i && O.size > i ? (M.push(y(O.name, i)), !1) : !0), g = a ? [...e, ...B] : [B[0]].filter(Boolean), W = s ? g.slice(0, s) : g;
    s && g.length > s && M.push(x(s)), S(M), W.length && (t == null || t(W));
  }, [e, a, s, i, y, x, t]), U = (b) => {
    b.preventDefault(), w(!0);
  }, Y = () => w(!1), R = (b) => {
    b.preventDefault(), w(!1), l || T(b.dataTransfer.files);
  }, K = (b) => {
    T(b.target.files), b.target.value = "";
  }, V = (b) => t == null ? void 0 : t(e.filter((j, M) => M !== b)), $ = [
    "nxp-upload__zone",
    D ? "nxp-upload__zone--over" : "",
    l ? "nxp-upload__zone--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: ["nxp-upload", I].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: $,
        onDragOver: U,
        onDragLeave: Y,
        onDrop: R,
        onClick: () => {
          var b;
          return !l && !u && ((b = L.current) == null ? void 0 : b.click());
        },
        "aria-label": "File upload area",
        children: [
          /* @__PURE__ */ n(Ve, {}),
          /* @__PURE__ */ n("span", { className: "nxp-upload__drop-text", children: _ }),
          /* @__PURE__ */ c("div", { className: "nxp-upload__actions", children: [
            u && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse nxp-upload__browse--wp",
                onClick: (b) => {
                  b.stopPropagation(), l || E();
                },
                disabled: l,
                children: [
                  /* @__PURE__ */ n(ze, {}),
                  k
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse",
                onClick: (b) => {
                  var j;
                  b.stopPropagation(), l || (j = L.current) == null || j.click();
                },
                disabled: l,
                children: N
              }
            )
          ] }),
          m && /* @__PURE__ */ n("span", { className: "nxp-upload__hint", children: m }),
          /* @__PURE__ */ n(
            "input",
            {
              ref: L,
              type: "file",
              accept: r,
              multiple: a,
              style: { display: "none" },
              onChange: K,
              disabled: l
            }
          )
        ]
      }
    ),
    v.map((b, j) => /* @__PURE__ */ n("p", { className: "nxp-upload__error", role: "alert", children: b }, j)),
    o && e.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-upload__preview", children: e.map((b, j) => {
      const M = Ge(b), B = Xe(b), g = Ze(b), W = b instanceof File ? he(b.size) : null;
      return /* @__PURE__ */ c("div", { className: "nxp-upload__item", children: [
        /* @__PURE__ */ n("div", { className: "nxp-upload__item-thumb", children: M ? /* @__PURE__ */ n("img", { src: B, alt: g, className: "nxp-upload__item-img" }) : /* @__PURE__ */ n(qe, {}) }),
        /* @__PURE__ */ c("div", { className: "nxp-upload__item-info", children: [
          /* @__PURE__ */ n("span", { className: "nxp-upload__item-name", children: g }),
          W && /* @__PURE__ */ n("span", { className: "nxp-upload__item-size", children: W })
        ] }),
        !l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-upload__item-remove",
            onClick: () => V(j),
            "aria-label": `${f}: ${g}`,
            children: /* @__PURE__ */ n(Je, {})
          }
        )
      ] }, j);
    }) })
  ] });
}
function le(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Qe(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16) || 0,
    parseInt(t.substring(2, 4), 16) || 0,
    parseInt(t.substring(4, 6), 16) || 0
  ];
}
function en(e, t, r) {
  return "#" + [e, t, r].map((a) => le(Math.round(a), 0, 255).toString(16).padStart(2, "0")).join("");
}
function nn(e, t, r) {
  e /= 255, t /= 255, r /= 255;
  const a = Math.max(e, t, r), i = Math.min(e, t, r), s = a - i;
  let l = 0;
  return s > 0 && (a === e ? l = ((t - r) / s + (t < r ? 6 : 0)) / 6 : a === t ? l = ((r - e) / s + 2) / 6 : l = ((e - t) / s + 4) / 6), [l * 360, a === 0 ? 0 : s / a, a];
}
function re(e, t, r) {
  e /= 360;
  const a = Math.floor(e * 6), i = e * 6 - a, s = r * (1 - t), l = r * (1 - i * t), o = r * (1 - (1 - i) * t), u = [[r, o, s], [l, r, s], [s, r, o], [s, l, r], [o, s, r], [r, s, l]], [d, h, p] = u[a % 6];
  return [d * 255, h * 255, p * 255];
}
function ee(e) {
  return nn(...Qe(e));
}
function fe(e, t, r) {
  return en(...re(e, t, r));
}
function ne(e) {
  return /^#[0-9A-Fa-f]{6}$/.test(e);
}
const tn = [
  "#000000",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
  "#1e40af",
  "#065f46",
  "#7c2d12",
  "#1e3a5f",
  "#4a044e"
];
function ft({
  value: e,
  defaultValue: t = "#1E40AF",
  onChange: r,
  swatches: a = tn,
  // pass [] to hide
  showAlpha: i = !1,
  disabled: s = !1,
  /* translatable */
  hexLabel: l = "Hex color",
  alphaLabel: o = "Opacity",
  className: u = ""
}) {
  const d = e !== void 0, h = d ? e : t, [p, _] = C(() => ee(ne(h) ? h : "#1E40AF")), [N, k] = C(1), [m, f] = C(h), [y, x] = C(!1), I = H(null), L = H(null), D = H(!1), w = q(() => fe(...p), [p]);
  P(() => {
    d && ne(e) && e.toLowerCase() !== w.toLowerCase() && (_(ee(e)), f(e));
  }, [d, e]);
  const v = A((M, B, g, W = N) => {
    const O = fe(M, B, g);
    d || _([M, B, g]), f(O), r == null || r(i ? { hex: O, alpha: W } : O);
  }, [d, N, i, r]);
  P(() => {
    if (!y) return;
    const M = (B) => {
      var g;
      (g = I.current) != null && g.contains(B.target) || x(!1);
    };
    return document.addEventListener("pointerdown", M), () => document.removeEventListener("pointerdown", M);
  }, [y]);
  function S(M) {
    const B = L.current.getBoundingClientRect(), g = le((M.clientX - B.left) / B.width, 0, 1), W = le(1 - (M.clientY - B.top) / B.height, 0, 1);
    return [g, W];
  }
  function E(M) {
    D.current = !0, M.currentTarget.setPointerCapture(M.pointerId);
    const [B, g] = S(M);
    v(p[0], B, g);
  }
  function T(M) {
    if (!D.current) return;
    const [B, g] = S(M);
    v(p[0], B, g);
  }
  function U() {
    D.current = !1;
  }
  function Y(M) {
    const B = M.target.value;
    f(B);
    const g = B.startsWith("#") ? B : "#" + B;
    if (ne(g)) {
      const [W, O, G] = ee(g);
      _([W, O, G]), r == null || r(i ? { hex: g, alpha: N } : g);
    }
  }
  function R() {
    const M = m.startsWith("#") ? m : "#" + m;
    ne(M) || f(w);
  }
  const K = `hsl(${p[0]}, 100%, 50%)`, V = `${p[1] * 100}%`, $ = `${(1 - p[2]) * 100}%`, b = i ? `rgba(${re(...p).map(Math.round).join(",")},${N})` : w, j = ["nxp-cpicker", s ? "nxp-cpicker--disabled" : "", u].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: I, className: j, children: [
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        className: "nxp-cpicker__trigger",
        style: { "--swatch": b },
        onClick: () => !s && x((M) => !M),
        "aria-label": `Color picker, current: ${w}`,
        "aria-expanded": y,
        disabled: s,
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-swatch" }),
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-hex", children: w.toUpperCase() }),
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-caret", "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    y && /* @__PURE__ */ c("div", { className: "nxp-cpicker__panel", children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: L,
          className: "nxp-cpicker__gradient",
          style: { background: K },
          onPointerDown: E,
          onPointerMove: T,
          onPointerUp: U,
          children: [
            /* @__PURE__ */ n("div", { className: "nxp-cpicker__gradient-white" }),
            /* @__PURE__ */ n("div", { className: "nxp-cpicker__gradient-black" }),
            /* @__PURE__ */ n(
              "div",
              {
                className: "nxp-cpicker__thumb",
                style: { left: V, top: $, background: w }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c("div", { className: "nxp-cpicker__sliders", children: [
        /* @__PURE__ */ n(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__hue",
            min: 0,
            max: 360,
            step: 1,
            value: Math.round(p[0]),
            onChange: (M) => v(Number(M.target.value), p[1], p[2]),
            "aria-label": "Hue"
          }
        ),
        i && /* @__PURE__ */ n("div", { className: "nxp-cpicker__alpha-wrap", children: /* @__PURE__ */ n(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__alpha",
            min: 0,
            max: 100,
            step: 1,
            value: Math.round(N * 100),
            onChange: (M) => {
              const B = Number(M.target.value) / 100;
              k(B), r == null || r({ hex: w, alpha: B });
            },
            "aria-label": o,
            style: {
              "--alpha-start": `rgba(${re(...p).map(Math.round).join(",")},0)`,
              "--alpha-end": `rgba(${re(...p).map(Math.round).join(",")},1)`
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ c("div", { className: "nxp-cpicker__hex-row", children: [
        /* @__PURE__ */ n("div", { className: "nxp-cpicker__preview", style: { background: b } }),
        /* @__PURE__ */ c("div", { className: "nxp-cpicker__hex-wrap", children: [
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__hex-hash", children: "#" }),
          /* @__PURE__ */ n(
            "input",
            {
              type: "text",
              className: "nxp-cpicker__hex-input",
              value: m.replace("#", "").toUpperCase(),
              maxLength: 6,
              onChange: Y,
              onBlur: R,
              "aria-label": l
            }
          )
        ] }),
        i && /* @__PURE__ */ c("div", { className: "nxp-cpicker__alpha-val", children: [
          Math.round(N * 100),
          "%"
        ] })
      ] }),
      a.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-cpicker__swatches", children: a.map((M) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: `nxp-cpicker__swatch${M.toLowerCase() === w.toLowerCase() ? " nxp-cpicker__swatch--active" : ""}`,
          style: { background: M },
          onClick: () => {
            const [B, g, W] = ee(M);
            _([B, g, W]), f(M), r == null || r(i ? { hex: M, alpha: N } : M);
          },
          "aria-label": M,
          title: M
        },
        M
      )) })
    ] })
  ] });
}
function _e(e) {
  return String(e).padStart(2, "0");
}
function se(e) {
  return e ? `${e.getFullYear()}-${_e(e.getMonth() + 1)}-${_e(e.getDate())}` : "";
}
function X(e) {
  if (!e) return null;
  const [t, r, a] = e.split("-").map(Number);
  if (!t || !r || !a) return null;
  const i = new Date(t, r - 1, a);
  return isNaN(i) ? null : i;
}
function me(e, t) {
  return e && t && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function oe(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function rn(e, t) {
  const r = new Date(e, t, 1).getDay(), a = new Date(e, t + 1, 0).getDate(), i = new Date(e, t, 0).getDate(), s = [];
  for (let o = r - 1; o >= 0; o--)
    s.push({ d: i - o, month: t - 1, year: t === 0 ? e - 1 : e, outside: !0 });
  for (let o = 1; o <= a; o++)
    s.push({ d: o, month: t, year: e, outside: !1 });
  const l = 42 - s.length;
  for (let o = 1; o <= l; o++)
    s.push({ d: o, month: t + 1, year: t === 11 ? e + 1 : e, outside: !0 });
  return s;
}
const an = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), sn = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), on = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), ln = () => /* @__PURE__ */ n("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) });
function _t({
  value: e,
  // ISO string 'YYYY-MM-DD' (controlled)
  defaultValue: t,
  // ISO string (uncontrolled)
  onChange: r,
  // (isoString | null) => void
  minDate: a,
  // ISO string
  maxDate: i,
  // ISO string
  disabled: s = !1,
  clearable: l = !0,
  /* translatable */
  placeholder: o = "Select date",
  todayText: u = "Today",
  clearText: d = "Clear",
  monthNames: h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: p = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: _ = "Previous month",
  nextMonthLabel: N = "Next month",
  className: k = ""
}) {
  const m = e !== void 0, [f, y] = C(() => X(t)), [x, I] = C(!1), [L, D] = C(() => (X(e ?? t) ?? /* @__PURE__ */ new Date()).getFullYear()), [w, v] = C(() => (X(e ?? t) ?? /* @__PURE__ */ new Date()).getMonth()), S = H(null), E = m ? X(e) : f, T = q(() => X(a), [a]), U = q(() => X(i), [i]);
  P(() => {
    if (!x) return;
    const g = (W) => {
      var O;
      (O = S.current) != null && O.contains(W.target) || I(!1);
    };
    return document.addEventListener("pointerdown", g), () => document.removeEventListener("pointerdown", g);
  }, [x]);
  const Y = A((g) => {
    const W = new Date(g.year, g.month, g.d);
    m || y(W), r == null || r(se(W)), I(!1);
  }, [m, r]), R = A((g) => {
    g.stopPropagation(), m || y(null), r == null || r(null);
  }, [m, r]);
  function K() {
    w === 0 ? (v(11), D((g) => g - 1)) : v((g) => g - 1);
  }
  function V() {
    w === 11 ? (v(0), D((g) => g + 1)) : v((g) => g + 1);
  }
  const $ = q(() => rn(L, w), [L, w]), b = oe(/* @__PURE__ */ new Date());
  function j(g) {
    const W = new Date(g.year, g.month, g.d);
    return !!(T && W < oe(T) || U && W > oe(U));
  }
  const M = E ? se(E) : "", B = ["nxp-date", s ? "nxp-date--disabled" : "", x ? "nxp-date--open" : "", k].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: S, className: B, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "nxp-date__trigger",
        onClick: () => !s && I((g) => !g),
        role: "button",
        "aria-label": o,
        "aria-expanded": x,
        tabIndex: s ? -1 : 0,
        onKeyDown: (g) => {
          (g.key === "Enter" || g.key === " ") && (g.preventDefault(), !s && I((W) => !W));
        },
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-date__icon", children: /* @__PURE__ */ n(on, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-date__value${M ? "" : " nxp-date__value--placeholder"}`, children: M || o }),
          l && E && !s && /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__clear", onClick: R, "aria-label": d, children: /* @__PURE__ */ n(ln, {}) })
        ]
      }
    ),
    x && /* @__PURE__ */ c("div", { className: "nxp-date__popover", role: "dialog", "aria-label": "Date picker", children: [
      /* @__PURE__ */ c("div", { className: "nxp-date__header", children: [
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: K, "aria-label": _, children: /* @__PURE__ */ n(an, {}) }),
        /* @__PURE__ */ c("span", { className: "nxp-date__month-label", children: [
          h[w],
          " ",
          L
        ] }),
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: V, "aria-label": N, children: /* @__PURE__ */ n(sn, {}) })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid nxp-date__grid--head", children: p.map((g) => /* @__PURE__ */ n("span", { className: "nxp-date__dow", children: g }, g)) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid", children: $.map((g, W) => {
        const O = new Date(g.year, g.month, g.d), G = me(O, E), Q = me(O, b), F = j(g);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [
              "nxp-date__day",
              g.outside ? "nxp-date__day--outside" : "",
              G ? "nxp-date__day--selected" : "",
              Q ? "nxp-date__day--today" : "",
              F ? "nxp-date__day--disabled" : ""
            ].filter(Boolean).join(" "),
            onClick: () => !F && Y(g),
            disabled: F,
            "aria-label": se(O),
            "aria-selected": G,
            "aria-current": Q ? "date" : void 0,
            children: g.d
          },
          W
        );
      }) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__footer", children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-date__today-btn",
          onClick: () => Y({ d: b.getDate(), month: b.getMonth(), year: b.getFullYear() }),
          children: u
        }
      ) })
    ] })
  ] });
}
function xe(e) {
  return String(e).padStart(2, "0");
}
function Z(e) {
  return e ? `${e.getFullYear()}-${xe(e.getMonth() + 1)}-${xe(e.getDate())}` : "";
}
function te(e) {
  if (!e) return null;
  const [t, r, a] = e.split("-").map(Number);
  if (!t || !r || !a) return null;
  const i = new Date(t, r - 1, a);
  return isNaN(i) ? null : i;
}
function ie(e, t) {
  return e && t && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function ae(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function cn(e, t, r) {
  const a = ae(e), i = ae(t), s = ae(r);
  return a > i && a < s;
}
function dn(e, t) {
  const r = new Date(e, t, 1).getDay(), a = new Date(e, t + 1, 0).getDate(), i = new Date(e, t, 0).getDate(), s = [];
  for (let o = r - 1; o >= 0; o--)
    s.push({ d: i - o, month: t - 1, year: t === 0 ? e - 1 : e, outside: !0 });
  for (let o = 1; o <= a; o++)
    s.push({ d: o, month: t, year: e, outside: !1 });
  const l = 42 - s.length;
  for (let o = 1; o <= l; o++)
    s.push({ d: o, month: t + 1, year: t === 11 ? e + 1 : e, outside: !0 });
  return s;
}
const pn = () => /* @__PURE__ */ n("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), un = () => /* @__PURE__ */ n("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), hn = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), fn = () => /* @__PURE__ */ n("svg", { width: "10", height: "10", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) }), _n = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) });
function ve({
  year: e,
  month: t,
  start: r,
  end: a,
  hovered: i,
  onDayClick: s,
  onDayHover: l,
  prevMonth: o,
  nextMonth: u,
  showPrev: d = !0,
  showNext: h = !0,
  monthNames: p,
  dayNames: _,
  prevLabel: N,
  nextLabel: k
}) {
  const m = q(() => dn(e, t), [e, t]), f = ae(/* @__PURE__ */ new Date()), y = a ?? i;
  return /* @__PURE__ */ c("div", { className: "nxp-drp__cal", children: [
    /* @__PURE__ */ c("div", { className: "nxp-drp__cal-header", children: [
      d ? /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: o, "aria-label": N, children: /* @__PURE__ */ n(pn, {}) }) : /* @__PURE__ */ n("span", {}),
      /* @__PURE__ */ c("span", { className: "nxp-date__month-label", children: [
        p[t],
        " ",
        e
      ] }),
      h ? /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: u, "aria-label": k, children: /* @__PURE__ */ n(un, {}) }) : /* @__PURE__ */ n("span", {})
    ] }),
    /* @__PURE__ */ n("div", { className: "nxp-date__grid nxp-date__grid--head", children: _.map((x) => /* @__PURE__ */ n("span", { className: "nxp-date__dow", children: x }, x)) }),
    /* @__PURE__ */ n("div", { className: "nxp-date__grid", children: m.map((x, I) => {
      const L = new Date(x.year, x.month, x.d), D = ie(L, r), w = ie(L, a), v = ie(L, f), S = r && y && !x.outside && cn(L, r < y ? r : y, r < y ? y : r);
      return /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [
            "nxp-date__day",
            x.outside ? "nxp-date__day--outside" : "",
            D ? "nxp-date__day--selected nxp-date__day--range-start" : "",
            w ? "nxp-date__day--selected nxp-date__day--range-end" : "",
            v ? "nxp-date__day--today" : "",
            S ? "nxp-date__day--in-range" : ""
          ].filter(Boolean).join(" "),
          onClick: () => s(L),
          onMouseEnter: () => l(L),
          "aria-label": Z(L),
          "aria-selected": D || w,
          children: x.d
        },
        I
      );
    }) })
  ] });
}
function mt({
  value: e,
  // { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } (controlled)
  defaultValue: t,
  // same shape (uncontrolled)
  onChange: r,
  // ({ start, end }) => void
  disabled: a = !1,
  clearable: i = !0,
  /* translatable */
  startPlaceholder: s = "Start date",
  endPlaceholder: l = "End date",
  clearText: o = "Clear",
  applyText: u = "Apply",
  monthNames: d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: p = "Previous month",
  nextMonthLabel: _ = "Next month",
  className: N = ""
}) {
  const k = e !== void 0, m = te((k ? e == null ? void 0 : e.start : t == null ? void 0 : t.start) ?? null), f = te((k ? e == null ? void 0 : e.end : t == null ? void 0 : t.end) ?? null), [y, x] = C(m), [I, L] = C(f), [D, w] = C(null), [v, S] = C("start"), [E, T] = C(!1), [U, Y] = C(() => (m ?? /* @__PURE__ */ new Date()).getFullYear()), [R, K] = C(() => (m ?? /* @__PURE__ */ new Date()).getMonth()), V = H(null);
  P(() => {
    k && (x(te((e == null ? void 0 : e.start) ?? null)), L(te((e == null ? void 0 : e.end) ?? null)));
  }, [k, e == null ? void 0 : e.start, e == null ? void 0 : e.end]), P(() => {
    if (!E) return;
    const F = (J) => {
      var z;
      (z = V.current) != null && z.contains(J.target) || T(!1);
    };
    return document.addEventListener("pointerdown", F), () => document.removeEventListener("pointerdown", F);
  }, [E]);
  const $ = R === 11 ? 0 : R + 1, b = R === 11 ? U + 1 : U;
  function j() {
    R === 0 ? (K(11), Y((F) => F - 1)) : K((F) => F - 1);
  }
  function M() {
    R === 11 ? (K(0), Y((F) => F + 1)) : K((F) => F + 1);
  }
  const B = A((F) => {
    if (v === "start" || y && I)
      x(F), L(null), S("end");
    else {
      let J = y, z = F;
      z < J && (J = F, z = y), L(z), S("start"), w(null);
      const we = { start: Z(J), end: Z(z) };
      k || (x(J), L(z)), r == null || r(we), T(!1);
    }
  }, [v, y, I, k, r]), g = A((F) => {
    v === "end" && y && !I && w(F);
  }, [v, y, I]);
  function W(F) {
    F.stopPropagation(), x(null), L(null), S("start"), r == null || r({ start: null, end: null });
  }
  const O = y ? Z(y) : "", G = I ? Z(I) : "", Q = ["nxp-drp", a ? "nxp-drp--disabled" : "", E ? "nxp-drp--open" : "", N].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: V, className: Q, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "nxp-drp__trigger",
        onClick: () => !a && T((F) => !F),
        role: "button",
        "aria-expanded": E,
        tabIndex: a ? -1 : 0,
        onKeyDown: (F) => {
          (F.key === "Enter" || F.key === " ") && (F.preventDefault(), !a && T((J) => !J));
        },
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-date__icon", children: /* @__PURE__ */ n(hn, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-drp__segment${O ? "" : " nxp-date__value--placeholder"}`, children: O || s }),
          /* @__PURE__ */ n("span", { className: "nxp-drp__arrow", children: /* @__PURE__ */ n(_n, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-drp__segment${G ? "" : " nxp-date__value--placeholder"}`, children: G || l }),
          i && (y || I) && !a && /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__clear", onClick: W, "aria-label": o, children: /* @__PURE__ */ n(fn, {}) })
        ]
      }
    ),
    E && /* @__PURE__ */ n("div", { className: "nxp-drp__popover", role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ c("div", { className: "nxp-drp__calendars", children: [
      /* @__PURE__ */ n(
        ve,
        {
          year: U,
          month: R,
          start: y,
          end: I,
          hovered: D,
          onDayClick: B,
          onDayHover: g,
          prevMonth: j,
          nextMonth: () => {
          },
          showPrev: !0,
          showNext: !1,
          monthNames: d,
          dayNames: h,
          prevLabel: p,
          nextLabel: _
        }
      ),
      /* @__PURE__ */ n(
        ve,
        {
          year: b,
          month: $,
          start: y,
          end: I,
          hovered: D,
          onDayClick: B,
          onDayHover: g,
          prevMonth: () => {
          },
          nextMonth: M,
          showPrev: !1,
          showNext: !0,
          monthNames: d,
          dayNames: h,
          prevLabel: p,
          nextLabel: _
        }
      )
    ] }) })
  ] });
}
const mn = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l12 12M13 1L1 13", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) });
function xt({
  open: e = !1,
  onClose: t,
  placement: r = "right",
  size: a = "md",
  title: i,
  byline: s,
  footer: l,
  closeOnBackdrop: o = !0,
  closeOnEscape: u = !0,
  hideClose: d = !1,
  className: h = "",
  children: p
}) {
  const _ = H(null);
  P(() => {
    if (!e) return;
    const m = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = m;
    };
  }, [e]);
  const N = A(
    (m) => {
      m.key === "Escape" && u && t && t();
    },
    [t, u]
  );
  if (P(() => {
    if (e)
      return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [e, N]), P(() => {
    if (!e) return;
    const m = setTimeout(() => {
      var y;
      const f = (y = _.current) == null ? void 0 : y.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      f == null || f.focus();
    }, 50);
    return () => clearTimeout(m);
  }, [e]), !e) return null;
  const k = [
    "nxp-drawer__panel",
    `nxp-drawer__panel--${r}`,
    `nxp-drawer__panel--${a}`,
    h
  ].filter(Boolean).join(" ");
  return ce(
    /* @__PURE__ */ n(
      "div",
      {
        className: `nxp-drawer__backdrop nxp-drawer__backdrop--${r}`,
        onMouseDown: (m) => {
          o && m.target === m.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof i == "string" ? i : "Drawer",
        children: /* @__PURE__ */ c("div", { className: k, ref: _, children: [
          (i || !d) && /* @__PURE__ */ c("div", { className: "nxp-drawer__head", children: [
            /* @__PURE__ */ c("div", { className: "nxp-drawer__head-text", children: [
              i && /* @__PURE__ */ n("div", { className: "nxp-drawer__title", children: i }),
              s && /* @__PURE__ */ n("div", { className: "nxp-drawer__byline", children: s })
            ] }),
            !d && t && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-drawer__close",
                onClick: t,
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ n(mn, {})
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { className: "nxp-drawer__body", children: p }),
          l && /* @__PURE__ */ n("div", { className: "nxp-drawer__foot", children: l })
        ] })
      }
    ),
    document.body
  );
}
const xn = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function ye({
  item: e,
  active: t,
  onSelect: r,
  collapsed: a,
  depth: i = 0
}) {
  const s = Array.isArray(e.children) && e.children.length > 0, l = s && e.children.some((_) => _.id === t), [o, u] = C(l);
  P(() => {
    l && u(!0);
  }, [l]);
  const d = e.id === t;
  function h(_) {
    _.preventDefault(), s && !a ? u((N) => !N) : r == null || r(e.id, e);
  }
  const p = [
    "nxp-sb__item",
    i > 0 ? "nxp-sb__item--child" : "",
    d ? "nxp-sb__item--active" : "",
    l ? "nxp-sb__item--active-parent" : "",
    e.disabled ? "nxp-sb__item--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("li", { children: [
    /* @__PURE__ */ c(
      "a",
      {
        href: e.href ?? "#",
        className: p,
        onClick: h,
        "aria-current": d ? "page" : void 0,
        "aria-disabled": e.disabled || void 0,
        tabIndex: e.disabled ? -1 : 0,
        title: a && typeof e.label == "string" ? e.label : void 0,
        children: [
          e.icon && /* @__PURE__ */ n("span", { className: "nxp-sb__icon", "aria-hidden": "true", children: e.icon }),
          !a && /* @__PURE__ */ n("span", { className: "nxp-sb__label", children: e.label }),
          !a && e.badge != null && /* @__PURE__ */ n("span", { className: `nxp-sb__badge${e.badgeVariant ? ` nxp-sb__badge--${e.badgeVariant}` : ""}`, children: e.badge }),
          !a && s && /* @__PURE__ */ n("span", { className: `nxp-sb__chevron${o ? " nxp-sb__chevron--open" : ""}`, children: /* @__PURE__ */ n(xn, {}) })
        ]
      }
    ),
    s && !a && o && /* @__PURE__ */ n("ul", { className: "nxp-sb__sub", role: "list", children: e.children.map((_) => /* @__PURE__ */ n(
      ye,
      {
        item: _,
        active: t,
        onSelect: r,
        collapsed: a,
        depth: i + 1
      },
      _.id
    )) })
  ] });
}
function vt({
  items: e = [],
  active: t,
  defaultActive: r,
  onSelect: a,
  collapsed: i,
  defaultCollapsed: s = !1,
  onCollapse: l,
  collapsible: o = !0,
  header: u,
  footer: d,
  width: h = "220px",
  collapsedWidth: p = "56px",
  className: _ = ""
}) {
  const N = t !== void 0, [k, m] = C(r ?? null), f = N ? t : k, y = i !== void 0, [x, I] = C(s), L = y ? i : x;
  function D(E, T) {
    N || m(E), a == null || a(E, T);
  }
  function w() {
    const E = !L;
    y || I(E), l == null || l(E);
  }
  const v = [
    "nxp-sb",
    L ? "nxp-sb--collapsed" : "",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("aside", { className: v, style: {
    "--nxp-sb-width": h,
    "--nxp-sb-col-width": p,
    width: L ? p : h
  }, "aria-label": "Sidebar navigation", children: [
    u && /* @__PURE__ */ n("div", { className: "nxp-sb__header", children: u }),
    /* @__PURE__ */ n("nav", { className: "nxp-sb__nav", children: /* @__PURE__ */ n("ul", { className: "nxp-sb__list", role: "list", children: e.map((E) => E.type === "divider" ? /* @__PURE__ */ n("li", { className: "nxp-sb__divider", role: "separator", children: !L && E.label && /* @__PURE__ */ n("span", { className: "nxp-sb__section-label", children: E.label }) }, E.id ?? E.label) : /* @__PURE__ */ n(
      ye,
      {
        item: E,
        active: f,
        onSelect: D,
        collapsed: L
      },
      E.id
    )) }) }),
    d && /* @__PURE__ */ n("div", { className: "nxp-sb__footer", children: d }),
    o && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-sb__toggle",
        onClick: w,
        "aria-label": L ? "Expand sidebar" : "Collapse sidebar",
        children: /* @__PURE__ */ n(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            style: { transform: L ? "rotate(180deg)" : "none", transition: "transform 200ms ease" },
            children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      }
    )
  ] });
}
const bt = "Import dist/style.css to apply Nexter UI design tokens and component styles.";
export {
  kn as Accordion,
  gn as Alert,
  yn as Avatar,
  wn as Badge,
  Dn as Banner,
  lt as Breadcrumb,
  $n as Button,
  Mn as Carousel,
  In as Checkbox,
  ft as ColorPicker,
  Ln as Combobox,
  ct as ConfirmButton,
  it as CopyInput,
  _t as DatePicker,
  mt as DateRangePicker,
  Bn as Dialog,
  xt as Drawer,
  Cn as Dropdown,
  En as EmptyState,
  at as FeatureToggleCard,
  Sn as Field,
  ht as FileUpload,
  jn as IconBox,
  An as Input,
  Wn as Kbd,
  Fn as Modal,
  ot as MultiSelect,
  Tn as Notice,
  dt as NumberInput,
  pt as OTPInput,
  Pn as Pagination,
  Rn as Popover,
  On as Progress,
  Hn as Radio,
  Un as Search,
  Kn as Segmented,
  Yn as Select,
  Vn as Sheet,
  vt as Sidebar,
  qn as Skeleton,
  Jn as Slider,
  ut as SortableList,
  zn as Spinner,
  Gn as StatCard,
  Xn as Status,
  Zn as Stepper,
  Qn as Table,
  et as Tabs,
  nt as Tag,
  tt as Textarea,
  rt as Toast,
  ge as Toggle,
  st as ToggleGrid,
  de as Tooltip,
  bt as tokens
};
