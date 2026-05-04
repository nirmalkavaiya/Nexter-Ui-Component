import { jsxs as d, jsx as l } from "react/jsx-runtime";
import { useState as H, useRef as j, useMemo as K, useEffect as F, useCallback as Q } from "react";
function E(n, r, e) {
  return Math.min(e, Math.max(r, n));
}
function Z(n) {
  const r = n.replace("#", "");
  return [
    parseInt(r.substring(0, 2), 16) || 0,
    parseInt(r.substring(2, 4), 16) || 0,
    parseInt(r.substring(4, 6), 16) || 0
  ];
}
function ee(n, r, e) {
  return "#" + [n, r, e].map((o) => E(Math.round(o), 0, 255).toString(16).padStart(2, "0")).join("");
}
function te(n, r, e) {
  n /= 255, r /= 255, e /= 255;
  const o = Math.max(n, r, e), p = Math.min(n, r, e), i = o - p;
  let u = 0;
  return i > 0 && (o === n ? u = ((r - e) / i + (r < e ? 6 : 0)) / 6 : o === r ? u = ((e - n) / i + 2) / 6 : u = ((n - r) / i + 4) / 6), [u * 360, o === 0 ? 0 : i / o, o];
}
function $(n, r, e) {
  n /= 360;
  const o = Math.floor(n * 6), p = n * 6 - o, i = e * (1 - r), u = e * (1 - p * r), h = e * (1 - (1 - p) * r), B = [[e, h, i], [u, e, i], [i, e, h], [i, u, e], [h, i, e], [e, i, u]], [x, k, s] = B[o % 6];
  return [x * 255, k * 255, s * 255];
}
function y(n) {
  return te(...Z(n));
}
function D(n, r, e) {
  return ee(...$(n, r, e));
}
function T(n) {
  return /^#[0-9A-Fa-f]{6}$/.test(n);
}
const ne = [
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
function ae({
  value: n,
  defaultValue: r = "#1E40AF",
  onChange: e,
  swatches: o = ne,
  // pass [] to hide
  showAlpha: p = !1,
  disabled: i = !1,
  /* translatable */
  hexLabel: u = "Hex color",
  alphaLabel: h = "Opacity",
  className: B = ""
}) {
  const x = n !== void 0, k = x ? n : r, [s, N] = H(() => y(T(k) ? k : "#1E40AF")), [m, W] = H(1), [g, b] = H(k), [M, I] = H(!1), R = j(null), S = j(null), L = j(!1), f = K(() => D(...s), [s]);
  F(() => {
    x && T(n) && n.toLowerCase() !== f.toLowerCase() && (N(y(n)), b(n));
  }, [x, n]);
  const P = Q((t, c, a, _ = m) => {
    const v = D(t, c, a);
    x || N([t, c, a]), b(v), e == null || e(p ? { hex: v, alpha: _ } : v);
  }, [x, m, p, e]);
  F(() => {
    if (!M) return;
    const t = (c) => {
      var a;
      (a = R.current) != null && a.contains(c.target) || I(!1);
    };
    return document.addEventListener("pointerdown", t), () => document.removeEventListener("pointerdown", t);
  }, [M]);
  function w(t) {
    const c = S.current.getBoundingClientRect(), a = E((t.clientX - c.left) / c.width, 0, 1), _ = E(1 - (t.clientY - c.top) / c.height, 0, 1);
    return [a, _];
  }
  function C(t) {
    L.current = !0, t.currentTarget.setPointerCapture(t.pointerId);
    const [c, a] = w(t);
    P(s[0], c, a);
  }
  function O(t) {
    if (!L.current) return;
    const [c, a] = w(t);
    P(s[0], c, a);
  }
  function V() {
    L.current = !1;
  }
  function q(t) {
    const c = t.target.value;
    b(c);
    const a = c.startsWith("#") ? c : "#" + c;
    if (T(a)) {
      const [_, v, J] = y(a);
      N([_, v, J]), e == null || e(p ? { hex: a, alpha: m } : a);
    }
  }
  function X() {
    const t = g.startsWith("#") ? g : "#" + g;
    T(t) || b(f);
  }
  const Y = `hsl(${s[0]}, 100%, 50%)`, z = `${s[1] * 100}%`, A = `${(1 - s[2]) * 100}%`, U = p ? `rgba(${$(...s).map(Math.round).join(",")},${m})` : f, G = ["nxp-cpicker", i ? "nxp-cpicker--disabled" : "", B].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { ref: R, className: G, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "nxp-cpicker__trigger",
        style: { "--swatch": U },
        onClick: () => !i && I((t) => !t),
        "aria-label": `Color picker, current: ${f}`,
        "aria-expanded": M,
        disabled: i,
        children: [
          /* @__PURE__ */ l("span", { className: "nxp-cpicker__trigger-swatch" }),
          /* @__PURE__ */ l("span", { className: "nxp-cpicker__trigger-hex", children: f.toUpperCase() }),
          /* @__PURE__ */ l("span", { className: "nxp-cpicker__trigger-caret", "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    M && /* @__PURE__ */ d("div", { className: "nxp-cpicker__panel", children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: S,
          className: "nxp-cpicker__gradient",
          style: { background: Y },
          onPointerDown: C,
          onPointerMove: O,
          onPointerUp: V,
          children: [
            /* @__PURE__ */ l("div", { className: "nxp-cpicker__gradient-white" }),
            /* @__PURE__ */ l("div", { className: "nxp-cpicker__gradient-black" }),
            /* @__PURE__ */ l(
              "div",
              {
                className: "nxp-cpicker__thumb",
                style: { left: z, top: A, background: f }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ d("div", { className: "nxp-cpicker__sliders", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__hue",
            min: 0,
            max: 360,
            step: 1,
            value: Math.round(s[0]),
            onChange: (t) => P(Number(t.target.value), s[1], s[2]),
            "aria-label": "Hue"
          }
        ),
        p && /* @__PURE__ */ l("div", { className: "nxp-cpicker__alpha-wrap", children: /* @__PURE__ */ l(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__alpha",
            min: 0,
            max: 100,
            step: 1,
            value: Math.round(m * 100),
            onChange: (t) => {
              const c = Number(t.target.value) / 100;
              W(c), e == null || e({ hex: f, alpha: c });
            },
            "aria-label": h,
            style: {
              "--alpha-start": `rgba(${$(...s).map(Math.round).join(",")},0)`,
              "--alpha-end": `rgba(${$(...s).map(Math.round).join(",")},1)`
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ d("div", { className: "nxp-cpicker__hex-row", children: [
        /* @__PURE__ */ l("div", { className: "nxp-cpicker__preview", style: { background: U } }),
        /* @__PURE__ */ d("div", { className: "nxp-cpicker__hex-wrap", children: [
          /* @__PURE__ */ l("span", { className: "nxp-cpicker__hex-hash", children: "#" }),
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              className: "nxp-cpicker__hex-input",
              value: g.replace("#", "").toUpperCase(),
              maxLength: 6,
              onChange: q,
              onBlur: X,
              "aria-label": u
            }
          )
        ] }),
        p && /* @__PURE__ */ d("div", { className: "nxp-cpicker__alpha-val", children: [
          Math.round(m * 100),
          "%"
        ] })
      ] }),
      o.length > 0 && /* @__PURE__ */ l("div", { className: "nxp-cpicker__swatches", children: o.map((t) => /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: `nxp-cpicker__swatch${t.toLowerCase() === f.toLowerCase() ? " nxp-cpicker__swatch--active" : ""}`,
          style: { background: t },
          onClick: () => {
            const [c, a, _] = y(t);
            N([c, a, _]), b(t), e == null || e(p ? { hex: t, alpha: m } : t);
          },
          "aria-label": t,
          title: t
        },
        t
      )) })
    ] })
  ] });
}
export {
  ae as ColorPicker,
  ae as default
};
