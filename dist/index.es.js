import { jsx as a, jsxs as f, Fragment as B } from "react/jsx-runtime";
import j, { useState as b, useCallback as k, useRef as w, useEffect as D, useId as F } from "react";
import { createPortal as T } from "react-dom";
function U({ items: e = [], defaultOpen: t = [], multi: n = !1, className: s = "" }) {
  const [l, c] = b(new Set(t)), i = k(
    (r) => {
      c((d) => {
        const u = new Set(d);
        return u.has(r) ? u.delete(r) : (n || u.clear(), u.add(r)), u;
      });
    },
    [n]
  );
  return /* @__PURE__ */ a("div", { className: `nxp-accordion ${s}`, children: e.map((r) => {
    const d = l.has(r.id);
    return /* @__PURE__ */ f(
      "div",
      {
        className: `nxp-accordion__item${d ? " is-open" : ""}`,
        children: [
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              className: "nxp-accordion__head",
              onClick: () => i(r.id),
              "aria-expanded": d,
              "aria-controls": `accordion-body-${r.id}`,
              children: [
                /* @__PURE__ */ a("span", { children: r.title }),
                /* @__PURE__ */ a("svg", { className: "nxp-accordion__chevron", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ a("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              id: `accordion-body-${r.id}`,
              className: "nxp-accordion__body",
              role: "region",
              children: r.content
            }
          )
        ]
      },
      r.id
    );
  }) });
}
const R = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×"
};
function V({ variant: e = "info", icon: t, children: n, className: s = "" }) {
  const l = t !== void 0 ? t : R[e] || "i";
  return /* @__PURE__ */ f(
    "div",
    {
      className: `nxp-alert nxp-alert--${e} ${s}`,
      role: "alert",
      children: [
        /* @__PURE__ */ a("span", { className: "nxp-alert__icon", "aria-hidden": "true", children: l }),
        /* @__PURE__ */ a("div", { className: "nxp-alert__body", children: n })
      ]
    }
  );
}
function q({ children: e, size: t = "md", src: n, alt: s = "", className: l = "" }) {
  return /* @__PURE__ */ a("span", { className: `nxp-avatar${t === "sm" ? " nxp-avatar--sm" : t === "lg" ? " nxp-avatar--lg" : ""} ${l}`, "aria-label": s || e, children: n ? /* @__PURE__ */ a("img", { src: n, alt: s }) : e });
}
function z({ variant: e = "default", children: t, className: n = "" }) {
  return e === "gradient" ? /* @__PURE__ */ a("span", { className: `nxp-badge nxp-badge--gradient ${n}`, children: t }) : ["primary", "success", "warning", "error"].includes(e) ? /* @__PURE__ */ a("span", { className: `nxp-badge nxp-badge--${e} ${n}`, children: t }) : /* @__PURE__ */ a("span", { className: `nxp-badge ${n}`, children: t });
}
const K = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function X({ variant: e = "default", icon: t, title: n, text: s, actions: l, className: c = "" }) {
  const i = t !== void 0 ? t : K[e], r = e !== "default" ? ` nxp-banner--${e}` : "";
  return /* @__PURE__ */ f("div", { className: `nxp-banner${r} ${c}`, role: "region", children: [
    i && /* @__PURE__ */ a("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: i }),
    /* @__PURE__ */ f("div", { className: "nxp-banner__body", children: [
      n && /* @__PURE__ */ a("div", { className: "nxp-banner__title", children: n }),
      s && /* @__PURE__ */ a("p", { className: "nxp-banner__text", children: s }),
      l && /* @__PURE__ */ a("div", { className: "nxp-banner__actions", children: l })
    ] })
  ] });
}
function Y({
  variant: e = "secondary",
  size: t,
  icon: n = !1,
  loading: s = !1,
  disabled: l = !1,
  onClick: c,
  children: i,
  className: r = "",
  ...d
}) {
  const u = [
    "nxp-btn",
    `nxp-btn--${e}`,
    t && t !== "md" ? `nxp-btn--${t}` : "",
    n ? "nxp-btn--icon" : "",
    s ? "nxp-btn--loading" : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(
    "button",
    {
      className: u,
      disabled: l || s,
      onClick: c,
      "aria-disabled": l || s,
      ...d,
      children: [
        s && /* @__PURE__ */ a("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        i
      ]
    }
  );
}
function G({ slides: e = [], className: t = "" }) {
  const [n, s] = b(0), l = w(null), c = k((i) => {
    if (!l.current) return;
    const r = l.current.children[i];
    r && r.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }), s(i);
  }, []);
  return D(() => {
    const i = l.current;
    if (!i) return;
    let r;
    const d = () => {
      cancelAnimationFrame(r), r = requestAnimationFrame(() => {
        const u = i.offsetWidth, o = Math.round(i.scrollLeft / u);
        s(Math.min(Math.max(0, o), e.length - 1));
      });
    };
    return i.addEventListener("scroll", d, { passive: !0 }), () => {
      i.removeEventListener("scroll", d), cancelAnimationFrame(r);
    };
  }, [e.length]), /* @__PURE__ */ f("div", { className: `nxp-carousel ${t}`, children: [
    /* @__PURE__ */ a("div", { className: "nxp-carousel__track", ref: l, children: e.map((i, r) => /* @__PURE__ */ f("div", { className: "nxp-carousel__slide", children: [
      i.eyebrow && /* @__PURE__ */ a("span", { className: "nxp-carousel__eyebrow", children: i.eyebrow }),
      /* @__PURE__ */ a("div", { className: "nxp-carousel__title", children: i.title }),
      i.description && /* @__PURE__ */ a("p", { className: "nxp-carousel__desc", children: i.description }),
      i.cta && /* @__PURE__ */ f(
        "a",
        {
          className: "nxp-carousel__cta",
          href: i.ctaHref || "#",
          onClick: i.ctaHref ? void 0 : (d) => d.preventDefault(),
          children: [
            i.cta,
            " →"
          ]
        }
      )
    ] }, r)) }),
    /* @__PURE__ */ f("div", { className: "nxp-carousel__nav", children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => c(n - 1),
          disabled: n === 0,
          "aria-label": "Previous slide",
          children: "‹"
        }
      ),
      /* @__PURE__ */ a("div", { className: "nxp-carousel__dots", children: e.map((i, r) => /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: `nxp-carousel__dot${n === r ? " is-active" : ""}`,
          onClick: () => c(r),
          "aria-label": `Go to slide ${r + 1}`,
          "aria-current": n === r
        },
        r
      )) }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => c(n + 1),
          disabled: n === e.length - 1,
          "aria-label": "Next slide",
          children: "›"
        }
      )
    ] })
  ] });
}
function Q({
  checked: e,
  onChange: t,
  disabled: n = !1,
  label: s,
  className: l = ""
}) {
  const c = e !== void 0, [i, r] = b(!1), d = c ? e : i, u = F(), o = k(() => {
    n || (c ? t && t(!e) : r((x) => !x));
  }, [n, c, e, t]), p = [
    "nxp-checkbox",
    d ? "is-checked" : "",
    n ? "is-disabled" : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("label", { className: p, htmlFor: u, children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: u,
        type: "checkbox",
        checked: d,
        onChange: o,
        disabled: n,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": d,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        onKeyDown: (x) => {
          x.key === " " && (x.preventDefault(), o());
        },
        onClick: (x) => {
          x.preventDefault(), o();
        },
        children: d && /* @__PURE__ */ a("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ a("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    s && /* @__PURE__ */ a("span", { children: s })
  ] });
}
function J({ options: e = [], value: t, onChange: n, placeholder: s = "Type to search…", className: l = "" }) {
  var g;
  const c = t !== void 0, [i, r] = b(""), [d, u] = b(!1), [o, p] = b(-1), x = w(null), v = w(null), N = e.filter(
    (m) => m.label.toLowerCase().includes(i.toLowerCase())
  );
  c && ((g = e.find((m) => m.value === t)) != null && g.label), D(() => {
    var m;
    if (c && t) {
      const $ = ((m = e.find((L) => L.value === t)) == null ? void 0 : m.label) || "";
      r($);
    }
  }, [t, c, e]);
  const y = k(
    (m) => {
      n && n(m.value), r(m.label), u(!1), p(-1);
    },
    [c, n]
  );
  D(() => {
    if (!d) return;
    const m = ($) => {
      v.current && !v.current.contains($.target) && u(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [d]);
  const _ = (m) => {
    if (!d && (m.key === "ArrowDown" || m.key === "Enter")) {
      u(!0), p(0);
      return;
    }
    d && (m.key === "ArrowDown" ? (m.preventDefault(), p(($) => Math.min($ + 1, N.length - 1))) : m.key === "ArrowUp" ? (m.preventDefault(), p(($) => Math.max($ - 1, 0))) : m.key === "Home" ? (m.preventDefault(), p(0)) : m.key === "End" ? (m.preventDefault(), p(N.length - 1)) : m.key === "Enter" && o >= 0 && N[o] ? (m.preventDefault(), y(N[o])) : m.key === "Escape" && (u(!1), p(-1)));
  };
  return /* @__PURE__ */ f("div", { className: `nxp-combobox ${l}`, ref: v, children: [
    /* @__PURE__ */ a(
      "input",
      {
        ref: x,
        type: "text",
        className: "nxp-combobox__input",
        value: i,
        placeholder: s,
        onChange: (m) => {
          r(m.target.value), u(!0), p(-1);
        },
        onFocus: () => u(!0),
        onKeyDown: _,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": d,
        "aria-haspopup": "listbox"
      }
    ),
    d && N.length > 0 && /* @__PURE__ */ a("div", { className: "nxp-combobox__list", role: "listbox", children: N.map((m, $) => /* @__PURE__ */ a(
      "div",
      {
        className: `nxp-combobox__item${o === $ ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": o === $,
        onMouseEnter: () => p($),
        onMouseDown: (L) => {
          L.preventDefault(), y(m);
        },
        children: m.label
      },
      m.value
    )) })
  ] });
}
function Z({
  open: e = !0,
  onClose: t,
  icon: n,
  iconVariant: s = "warning",
  title: l,
  description: c,
  actions: i,
  className: r = ""
}) {
  return e ? /* @__PURE__ */ f(
    "div",
    {
      className: `nxp-dialog ${r}`,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-label": l,
      children: [
        n && /* @__PURE__ */ a("div", { className: `nxp-dialog__icon nxp-dialog__icon--${s}`, "aria-hidden": "true", children: n }),
        l && /* @__PURE__ */ a("div", { className: "nxp-dialog__title", children: l }),
        c && /* @__PURE__ */ a("p", { className: "nxp-dialog__desc", children: c }),
        i && /* @__PURE__ */ a("div", { className: "nxp-dialog__actions", children: i })
      ]
    }
  ) : null;
}
function ee({
  options: e = [],
  value: t,
  onChange: n,
  placeholder: s = "Select…",
  disabled: l = !1,
  className: c = ""
}) {
  var M;
  const i = t !== void 0, [r, d] = b(""), u = i ? t : r, [o, p] = b(!1), [x, v] = b(-1), N = w(null), y = w(null), _ = e.filter((h) => !h.divider), g = (M = e.find((h) => h.value === u)) == null ? void 0 : M.label, m = k(() => {
    p(!1), v(-1);
  }, []), $ = k(
    (h) => {
      i || d(h.value), n && n(h.value), m();
    },
    [i, n, m]
  );
  D(() => {
    if (!o) return;
    const h = (I) => {
      N.current && !N.current.contains(I.target) && m();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [o, m]);
  const L = (h) => {
    if (!o) {
      (h.key === "Enter" || h.key === " " || h.key === "ArrowDown") && (h.preventDefault(), p(!0), v(0));
      return;
    }
    const I = _;
    h.key === "ArrowDown" ? (h.preventDefault(), v((C) => Math.min(C + 1, I.length - 1))) : h.key === "ArrowUp" ? (h.preventDefault(), v((C) => Math.max(C - 1, 0))) : h.key === "Home" ? (h.preventDefault(), v(0)) : h.key === "End" ? (h.preventDefault(), v(I.length - 1)) : h.key === "Enter" && x >= 0 ? (h.preventDefault(), $(I[x])) : h.key === "Escape" && (h.preventDefault(), m());
  };
  let E = -1;
  return /* @__PURE__ */ f(
    "div",
    {
      className: `nxp-dropdown${o ? " is-open" : ""} ${c}`,
      ref: N,
      children: [
        /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            className: "nxp-dropdown__trigger",
            disabled: l,
            "aria-haspopup": "listbox",
            "aria-expanded": o,
            onClick: () => {
              l || p((h) => !h);
            },
            onKeyDown: L,
            children: [
              /* @__PURE__ */ a("span", { style: { color: u ? "var(--nxp-text)" : "var(--nxp-text-faint)" }, children: g || s }),
              /* @__PURE__ */ a("svg", { className: "nxp-dropdown__chevron", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ a("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        o && /* @__PURE__ */ a(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: y,
            "aria-label": "Options",
            children: e.map((h, I) => {
              if (h.divider)
                return /* @__PURE__ */ a("div", { className: "nxp-dropdown__divider" }, I);
              E++;
              const C = E, S = h.value === u;
              return /* @__PURE__ */ f(
                "div",
                {
                  className: `nxp-dropdown__item${S ? " is-selected" : ""}${x === C ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": S,
                  onClick: () => $(h),
                  onMouseEnter: () => v(C),
                  children: [
                    /* @__PURE__ */ a("span", { style: { flex: 1 }, children: h.label }),
                    h.sub && /* @__PURE__ */ a("span", { className: "nxp-dropdown__sub", children: h.sub }),
                    S && /* @__PURE__ */ a("svg", { className: "nxp-dropdown__check", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ a("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                  ]
                },
                h.value
              );
            })
          }
        )
      ]
    }
  );
}
function ne({ icon: e, title: t, description: n, action: s, className: l = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-empty ${l}`, role: "status", children: [
    e && /* @__PURE__ */ a("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: e }),
    t && /* @__PURE__ */ a("div", { className: "nxp-empty__title", children: t }),
    n && /* @__PURE__ */ a("p", { className: "nxp-empty__desc", children: n }),
    s && /* @__PURE__ */ a("div", { style: { marginTop: 8 }, children: s })
  ] });
}
function te({ label: e, hint: t, error: n, children: s, className: l = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-field ${l}`, children: [
    e && /* @__PURE__ */ a("label", { className: "nxp-field__label", children: e }),
    s,
    t && !n && /* @__PURE__ */ a("span", { className: "nxp-field__hint", children: t }),
    n && /* @__PURE__ */ a("span", { className: "nxp-field__error", role: "alert", children: n })
  ] });
}
function ae({ topline: e, icon: t, title: n, description: s, cta: l, href: c, step: i, className: r = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-iconbox ${r}`, children: [
    e && /* @__PURE__ */ a("div", { className: "nxp-iconbox__topline", children: e }),
    i !== void 0 && /* @__PURE__ */ a("div", { className: "nxp-iconbox__step", children: i }),
    t && !i && /* @__PURE__ */ a("div", { className: "nxp-iconbox__icon", "aria-hidden": "true", children: t }),
    n && /* @__PURE__ */ a("div", { className: "nxp-iconbox__title", children: n }),
    s && /* @__PURE__ */ a("p", { className: "nxp-iconbox__desc", children: s }),
    l && /* @__PURE__ */ f("a", { className: "nxp-iconbox__cta", href: c || "#", onClick: c ? void 0 : (d) => d.preventDefault(), children: [
      l,
      " →"
    ] })
  ] });
}
function se({
  type: e = "text",
  placeholder: t,
  value: n,
  onChange: s,
  disabled: l = !1,
  invalid: c = !1,
  className: i = "",
  ...r
}) {
  const d = ["nxp-input", c ? "nxp-input--invalid" : "", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    "input",
    {
      type: e,
      className: d,
      placeholder: t,
      value: n,
      onChange: s,
      disabled: l,
      "aria-invalid": c ? "true" : void 0,
      ...r
    }
  );
}
function le({ children: e, className: t = "" }) {
  return /* @__PURE__ */ a("kbd", { className: `nxp-kbd ${t}`, children: e });
}
function re({
  open: e = !1,
  onClose: t,
  size: n = "md",
  title: s,
  byline: l,
  children: c,
  footer: i,
  className: r = ""
}) {
  D(() => {
    if (e) {
      const o = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = o;
      };
    }
  }, [e]);
  const d = k(
    (o) => {
      o.key === "Escape" && t && t();
    },
    [t]
  );
  if (D(() => {
    if (e)
      return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [e, d]), !e) return null;
  const u = n !== "md" ? ` nxp-modal--${n}` : "";
  return T(
    /* @__PURE__ */ a(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (o) => {
          o.target === o.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s,
        children: /* @__PURE__ */ f("div", { className: `nxp-modal${u} ${r}`, children: [
          /* @__PURE__ */ f("div", { className: "nxp-modal__head", children: [
            /* @__PURE__ */ f("div", { style: { flex: 1 }, children: [
              s && /* @__PURE__ */ a("div", { className: "nxp-modal__title", children: s }),
              l && /* @__PURE__ */ a("div", { className: "nxp-modal__byline", children: l })
            ] }),
            t && /* @__PURE__ */ a("button", { type: "button", className: "nxp-modal__close", "aria-label": "Close modal", onClick: t, children: "×" })
          ] }),
          /* @__PURE__ */ a("div", { className: "nxp-modal__body", children: c }),
          i && /* @__PURE__ */ a("div", { className: "nxp-modal__foot", children: i })
        ] })
      }
    ),
    document.body
  );
}
const A = {
  default: "ℹ",
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
function ie({
  variant: e = "default",
  icon: t,
  children: n,
  onDismiss: s,
  dismissible: l = !0,
  className: c = ""
}) {
  const [i, r] = b(!1), [d, u] = b(!1), o = k(() => {
    r(!0), setTimeout(() => {
      u(!0), s && s();
    }, 220);
  }, [s]);
  if (d) return null;
  const p = t !== void 0 ? t : A[e] || A.default, x = e !== "default" ? ` nxp-notice--${e}` : "";
  return /* @__PURE__ */ f(
    "div",
    {
      className: `nxp-notice${x}${i ? " is-dismissing" : ""} ${c}`,
      role: "status",
      children: [
        /* @__PURE__ */ a("span", { className: "nxp-notice__icon", "aria-hidden": "true", children: p }),
        /* @__PURE__ */ a("div", { className: "nxp-notice__body", children: n }),
        l && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "nxp-notice__close",
            "aria-label": "Dismiss",
            onClick: o,
            children: "×"
          }
        )
      ]
    }
  );
}
function ce({ page: e, totalPages: t = 1, onChange: n, showPrevNext: s = !0, className: l = "" }) {
  const c = e !== void 0, [i, r] = b(1), d = c ? e : i, u = k(
    (p) => {
      const x = Math.min(t, Math.max(1, p));
      c || r(x), n && n(x);
    },
    [c, n, t]
  ), o = Array.from({ length: t }, (p, x) => x + 1);
  return /* @__PURE__ */ f("nav", { className: `nxp-pagination ${l}`, "aria-label": "Pagination", children: [
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: () => u(d - 1),
        disabled: d === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ),
    o.map((p) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: `nxp-pagination__item${d === p ? " is-active" : ""}`,
        onClick: () => u(p),
        "aria-current": d === p ? "page" : void 0,
        children: p
      },
      p
    )),
    s && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: () => u(d + 1),
        disabled: d === t,
        "aria-label": "Next page",
        children: "›"
      }
    )
  ] });
}
function oe({ title: e, description: t, footer: n, className: s = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-popover ${s}`, role: "tooltip", children: [
    e && /* @__PURE__ */ a("div", { className: "nxp-popover__title", children: e }),
    t && /* @__PURE__ */ a("p", { className: "nxp-popover__desc", children: t }),
    n && /* @__PURE__ */ a("div", { className: "nxp-popover__footer", children: n })
  ] });
}
function de({ value: e = 0, variant: t = "default", className: n = "" }) {
  const s = Math.min(100, Math.max(0, e)), l = t !== "default" ? ` nxp-progress--${t}` : "";
  return /* @__PURE__ */ a(
    "div",
    {
      className: `nxp-progress${l} ${n}`,
      role: "progressbar",
      "aria-valuenow": s,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ a("div", { className: "nxp-progress__bar", style: { width: `${s}%` } })
    }
  );
}
function ue({
  checked: e = !1,
  onChange: t,
  disabled: n = !1,
  name: s,
  value: l,
  label: c,
  className: i = ""
}) {
  const r = F(), d = [
    "nxp-radio",
    e ? "is-checked" : "",
    n ? "is-disabled" : "",
    i
  ].filter(Boolean).join(" "), u = () => {
    n || t && t(l);
  };
  return /* @__PURE__ */ f("label", { className: d, htmlFor: r, children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: r,
        type: "radio",
        name: s,
        value: l,
        checked: e,
        onChange: u,
        disabled: n,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": e,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        onKeyDown: (o) => {
          o.key === " " && (o.preventDefault(), u());
        },
        onClick: (o) => {
          o.preventDefault(), u();
        },
        children: /* @__PURE__ */ a("span", { className: "nxp-radio__inner" })
      }
    ),
    c && /* @__PURE__ */ a("span", { children: c })
  ] });
}
function pe({ value: e, onChange: t, placeholder: n = "Search…", onClear: s, className: l = "" }) {
  const c = e !== void 0, [i, r] = b(""), d = c ? e : i, u = k(
    (o) => {
      const p = o.target.value;
      c || r(p), t && t(p);
    },
    [c, t]
  );
  return /* @__PURE__ */ f("div", { className: `nxp-search ${l}`, children: [
    /* @__PURE__ */ a("span", { className: "nxp-search__icon", "aria-hidden": "true", children: "⌕" }),
    /* @__PURE__ */ a(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: d,
        onChange: u,
        placeholder: n,
        "aria-label": n
      }
    )
  ] });
}
function me({ options: e = [], value: t, onChange: n, className: s = "" }) {
  var u;
  const l = t !== void 0, [c, i] = b((u = e[0]) == null ? void 0 : u.value), r = l ? t : c, d = k(
    (o) => {
      l || i(o), n && n(o);
    },
    [l, n]
  );
  return /* @__PURE__ */ a("div", { className: `nxp-segmented ${s}`, role: "group", "aria-label": "Segmented control", children: e.map((o) => /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: `nxp-segmented__option${r === o.value ? " is-selected" : ""}`,
      onClick: () => d(o.value),
      "aria-pressed": r === o.value,
      children: o.label
    },
    o.value
  )) });
}
function fe({
  options: e = [],
  value: t,
  onChange: n,
  disabled: s = !1,
  placeholder: l,
  className: c = "",
  ...i
}) {
  return /* @__PURE__ */ f(
    "select",
    {
      className: `nxp-select ${c}`,
      value: t,
      onChange: n,
      disabled: s,
      ...i,
      children: [
        l && /* @__PURE__ */ a("option", { value: "", disabled: !0, children: l }),
        e.map((r) => /* @__PURE__ */ a("option", { value: r.value, children: r.label }, r.value))
      ]
    }
  );
}
function he({ title: e, byline: t, children: n, footer: s, className: l = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-sheet ${l}`, children: [
    (e || t) && /* @__PURE__ */ f("div", { className: "nxp-sheet__head", children: [
      e && /* @__PURE__ */ a("div", { className: "nxp-sheet__title", children: e }),
      t && /* @__PURE__ */ a("div", { className: "nxp-sheet__byline", children: t })
    ] }),
    /* @__PURE__ */ a("div", { className: "nxp-sheet__body", children: n }),
    s && /* @__PURE__ */ a("div", { className: "nxp-sheet__foot", children: s })
  ] });
}
function xe({ variant: e = "line", width: t, style: n = {}, className: s = "" }) {
  const l = e === "circle" ? " nxp-skeleton--circle" : e === "title" ? " nxp-skeleton--title" : "", c = { ...t ? { width: t } : {}, ...n };
  return /* @__PURE__ */ a(
    "span",
    {
      className: `nxp-skeleton${l} ${s}`,
      style: c,
      "aria-hidden": "true",
      role: "presentation"
    }
  );
}
function _e({
  min: e = 0,
  max: t = 100,
  step: n = 1,
  value: s,
  onChange: l,
  unit: c = "",
  disabled: i = !1,
  className: r = ""
}) {
  const d = s !== void 0, [u, o] = b(50), p = d ? s : u, x = w(null), v = (p - e) / (t - e) * 100;
  D(() => {
    x.current && x.current.style.setProperty("--val", String(v));
  }, [v]);
  const N = k(
    (y) => {
      const _ = Number(y.target.value);
      d || o(_), l && l(_);
    },
    [d, l]
  );
  return /* @__PURE__ */ f("div", { className: `nxp-slider ${r}`, children: [
    /* @__PURE__ */ a(
      "input",
      {
        ref: x,
        type: "range",
        className: "nxp-slider__range",
        min: e,
        max: t,
        step: n,
        value: p,
        onChange: N,
        disabled: i,
        style: { "--val": v },
        "aria-valuemin": e,
        "aria-valuemax": t,
        "aria-valuenow": p
      }
    ),
    /* @__PURE__ */ f("span", { className: "nxp-slider__value", children: [
      p,
      c
    ] })
  ] });
}
function ve({ size: e = "md", className: t = "" }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: `nxp-spinner${e === "sm" ? " nxp-spinner--sm" : e === "lg" ? " nxp-spinner--lg" : ""} ${t}`,
      role: "status",
      "aria-label": "Loading"
    }
  );
}
function be({ label: e, value: t, meta: n, className: s = "" }) {
  return /* @__PURE__ */ f("div", { className: `nxp-stat ${s}`, children: [
    e && /* @__PURE__ */ a("div", { className: "nxp-stat__label", children: e }),
    t !== void 0 && /* @__PURE__ */ a("div", { className: "nxp-stat__value", children: t }),
    n && /* @__PURE__ */ a("div", { className: "nxp-stat__meta", children: n })
  ] });
}
function Ne({ variant: e = "default", children: t, className: n = "" }) {
  const s = e !== "default" ? ` nxp-status--${e}` : "";
  return /* @__PURE__ */ a("span", { className: `nxp-status${s} ${n}`, "aria-label": `Status: ${e}`, children: t });
}
function ye({
  value: e,
  onChange: t,
  min: n = 0,
  max: s,
  step: l = 1,
  disabled: c = !1,
  className: i = ""
}) {
  const r = e !== void 0, [d, u] = b(0), o = r ? e : d, p = k(
    (y) => {
      const _ = s !== void 0 ? Math.min(s, Math.max(n, y)) : Math.max(n, y);
      r || u(_), t && t(_);
    },
    [r, t, n, s]
  ), x = (y) => {
    const _ = parseInt(y.target.value, 10);
    isNaN(_) || p(_);
  }, v = o <= n, N = s !== void 0 && o >= s;
  return /* @__PURE__ */ f("div", { className: `nxp-stepper ${i}`, "aria-label": "Stepper", children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(o - l),
        disabled: c || v,
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        type: "number",
        className: "nxp-stepper__input",
        value: o,
        onChange: x,
        disabled: c,
        min: n,
        max: s,
        step: l,
        "aria-label": "Value"
      }
    ),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(o + l),
        disabled: c || N,
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
function ke({ columns: e = [], rows: t = [], striped: n = !1, actions: s, className: l = "" }) {
  return /* @__PURE__ */ a("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ f("table", { className: `nxp-table${n ? " nxp-table--striped" : ""} ${l}`, children: [
    /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ f("tr", { children: [
      e.map((c) => /* @__PURE__ */ a("th", { className: c.numeric ? "nxp-table__num" : "", children: c.label }, c.key)),
      s && /* @__PURE__ */ a("th", { style: { textAlign: "right" }, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ a("tbody", { children: t.map((c, i) => /* @__PURE__ */ f("tr", { children: [
      e.map((r) => /* @__PURE__ */ a("td", { className: r.numeric ? "nxp-table__num" : "", children: c[r.key] }, r.key)),
      s && /* @__PURE__ */ a("td", { children: /* @__PURE__ */ a("div", { className: "nxp-table__actions", children: s(c) }) })
    ] }, i)) })
  ] }) });
}
function $e({
  variant: e = "pill",
  tabs: t = [],
  activeTab: n,
  onTabChange: s,
  defaultTab: l,
  className: c = ""
}) {
  const i = n !== void 0, [r, d] = b(l || t[0] && t[0].id), u = i ? n : r, [o, p] = b({}), x = k(
    (_) => {
      i || d(_), s && s(_);
    },
    [i, s]
  ), v = e !== "pill" ? ` nxp-tabs--${e}` : "", N = e === "vertical", y = t.find((_) => _.id === u);
  return /* @__PURE__ */ f("div", { className: `nxp-tabs${v} ${c}`, role: "tablist", children: [
    /* @__PURE__ */ a("div", { className: "nxp-tabs__list", children: t.map((_) => /* @__PURE__ */ f(j.Fragment, { children: [
      /* @__PURE__ */ a(
        "button",
        {
          className: `nxp-tabs__tab${u === _.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": u === _.id,
          onClick: () => x(_.id),
          children: _.label
        }
      ),
      N && _.subTabs && u === _.id && /* @__PURE__ */ a("div", { className: "nxp-tabs__sub-list", children: _.subTabs.map((g) => /* @__PURE__ */ a(
        "button",
        {
          className: `nxp-tabs__sub${o[_.id] === g.id ? " is-active" : ""}`,
          onClick: () => p((m) => ({ ...m, [_.id]: g.id })),
          children: g.label
        },
        g.id
      )) })
    ] }, _.id)) }),
    y && y.content && /* @__PURE__ */ a("div", { className: `nxp-tabs__panel${N ? " nxp-tabs__content" : ""}`, role: "tabpanel", children: y.content })
  ] });
}
function ge({ variant: e = "default", children: t, className: n = "" }) {
  const s = e !== "default" ? ` nxp-tag--${e}` : "";
  return /* @__PURE__ */ a("span", { className: `nxp-tag${s} ${n}`, children: t });
}
function we({
  value: e,
  onChange: t,
  placeholder: n,
  rows: s = 4,
  disabled: l = !1,
  className: c = "",
  ...i
}) {
  return /* @__PURE__ */ a(
    "textarea",
    {
      className: `nxp-textarea ${c}`,
      value: e,
      onChange: t,
      placeholder: n,
      rows: s,
      disabled: l,
      ...i
    }
  );
}
function De({ variant: e = "default", icon: t, title: n, description: s, onClose: l, className: c = "" }) {
  const r = t !== void 0 ? t : e === "error" ? "✕" : "✓";
  return /* @__PURE__ */ f("div", { className: `nxp-toast${e !== "default" ? ` nxp-toast--${e}` : ""} ${c}`, role: "alert", "aria-live": "assertive", children: [
    r && /* @__PURE__ */ a("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: r }),
    /* @__PURE__ */ f("div", { className: "nxp-toast__body", children: [
      n && /* @__PURE__ */ a("div", { className: "nxp-toast__title", children: n }),
      s && /* @__PURE__ */ a("div", { className: "nxp-toast__desc", children: s })
    ] }),
    l && /* @__PURE__ */ a("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: l, children: "×" })
  ] });
}
function Ie({
  checked: e,
  onChange: t,
  disabled: n = !1,
  variant: s,
  label: l,
  className: c = ""
}) {
  const i = e !== void 0, [r, d] = b(!1), u = i ? e : r, o = k(() => {
    n || (i ? t && t(!e) : d((v) => !v));
  }, [n, i, e, t]), p = k(
    (v) => {
      v.key === " " && (v.preventDefault(), o());
    },
    [o]
  ), x = [
    "nxp-toggle",
    u ? "is-checked" : "",
    n ? "is-disabled" : "",
    s ? `nxp-toggle--${s}` : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(
    "div",
    {
      className: x,
      role: "switch",
      "aria-checked": u,
      "aria-disabled": n,
      tabIndex: n ? -1 : 0,
      onClick: o,
      onKeyDown: p,
      children: [
        /* @__PURE__ */ a("span", { className: "nxp-toggle__track", children: /* @__PURE__ */ a("span", { className: "nxp-toggle__thumb" }) }),
        l && /* @__PURE__ */ a("span", { children: l })
      ]
    }
  );
}
function Ce({ content: e, children: t, className: n = "" }) {
  const [s, l] = b(!1), [c, i] = b({ top: 0, left: 0 }), r = w(null), d = w(null), u = k(() => {
    var g, m;
    if (!r.current) return;
    const x = r.current.getBoundingClientRect(), v = ((g = d.current) == null ? void 0 : g.offsetWidth) || 120, N = ((m = d.current) == null ? void 0 : m.offsetHeight) || 30;
    let y = x.top - N - 6 + window.scrollY, _ = x.left + x.width / 2 - v / 2 + window.scrollX;
    _ = Math.max(8, Math.min(_, window.innerWidth - v - 8)), y < 4 && (y = x.bottom + 6 + window.scrollY), i({ top: y, left: _ });
  }, []), o = k(() => {
    l(!0), requestAnimationFrame(u);
  }, [u]), p = k(() => l(!1), []);
  return D(() => {
    if (s)
      return window.addEventListener("scroll", u, !0), window.addEventListener("resize", u), () => {
        window.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u);
      };
  }, [s, u]), /* @__PURE__ */ f(B, { children: [
    /* @__PURE__ */ a(
      "span",
      {
        ref: r,
        className: `nxp-tooltip-wrap ${n}`,
        onMouseEnter: o,
        onMouseLeave: p,
        onFocus: o,
        onBlur: p,
        children: t
      }
    ),
    s && e && T(
      /* @__PURE__ */ a(
        "div",
        {
          ref: d,
          className: "nxp-tooltip",
          style: { top: c.top, left: c.left },
          role: "tooltip",
          children: e
        }
      ),
      document.body
    )
  ] });
}
const Le = "Import dist/style.css to apply Nexter UI design tokens and component styles.";
export {
  U as Accordion,
  V as Alert,
  q as Avatar,
  z as Badge,
  X as Banner,
  Y as Button,
  G as Carousel,
  Q as Checkbox,
  J as Combobox,
  Z as Dialog,
  ee as Dropdown,
  ne as EmptyState,
  te as Field,
  ae as IconBox,
  se as Input,
  le as Kbd,
  re as Modal,
  ie as Notice,
  ce as Pagination,
  oe as Popover,
  de as Progress,
  ue as Radio,
  pe as Search,
  me as Segmented,
  fe as Select,
  he as Sheet,
  xe as Skeleton,
  _e as Slider,
  ve as Spinner,
  be as StatCard,
  Ne as Status,
  ye as Stepper,
  ke as Table,
  $e as Tabs,
  ge as Tag,
  we as Textarea,
  De as Toast,
  Ie as Toggle,
  Ce as Tooltip,
  Le as tokens
};
