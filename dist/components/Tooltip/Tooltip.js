import { jsxs as R, Fragment as N, jsx as u } from "react/jsx-runtime";
import { useState as p, useRef as P, useCallback as m, useEffect as W } from "react";
import { createPortal as j } from "react-dom";
const l = 8;
function B({
  content: h,
  children: w,
  /** 'top' | 'bottom' | 'left' | 'right' — default 'top' */
  position: n = "top",
  className: X = ""
}) {
  const [a, g] = p(!1), [v, L] = p({ top: 0, left: 0 }), [A, F] = p(n), d = P(null), f = P(null), r = m(() => {
    var Y, E;
    if (!d.current) return;
    const t = d.current.getBoundingClientRect(), i = ((Y = f.current) == null ? void 0 : Y.offsetWidth) || 120, s = ((E = f.current) == null ? void 0 : E.offsetHeight) || 32;
    let o, e, c = n;
    n === "top" ? (o = t.top - s - l + window.scrollY, e = t.left + t.width / 2 - i / 2 + window.scrollX, o < window.scrollY + 8 && (o = t.bottom + l + window.scrollY, c = "bottom")) : n === "bottom" ? (o = t.bottom + l + window.scrollY, e = t.left + t.width / 2 - i / 2 + window.scrollX, o + s > window.scrollY + window.innerHeight - 8 && (o = t.top - s - l + window.scrollY, c = "top")) : n === "left" ? (o = t.top + t.height / 2 - s / 2 + window.scrollY, e = t.left - i - l + window.scrollX, e < 8 && (e = t.right + l + window.scrollX, c = "right")) : n === "right" && (o = t.top + t.height / 2 - s / 2 + window.scrollY, e = t.right + l + window.scrollX, e + i > window.innerWidth - 8 && (e = t.left - i - l + window.scrollX, c = "left")), e = Math.max(8, Math.min(e, window.innerWidth - i - 8)), L({ top: o, left: e }), F(c);
  }, [n]), b = m(() => {
    g(!0), requestAnimationFrame(() => requestAnimationFrame(r));
  }, [r]), x = m(() => g(!1), []);
  W(() => {
    if (a)
      return window.addEventListener("scroll", r, !0), window.addEventListener("resize", r), () => {
        window.removeEventListener("scroll", r, !0), window.removeEventListener("resize", r);
      };
  }, [a, r]);
  const M = w != null && w !== "" ? w : /* @__PURE__ */ u(
    "span",
    {
      className: "nxp-tooltip-wrap__icon",
      role: "img",
      "aria-label": "Info",
      tabIndex: 0,
      children: "ⓘ"
    }
  );
  return /* @__PURE__ */ R(N, { children: [
    /* @__PURE__ */ u(
      "span",
      {
        ref: d,
        className: `nxp-tooltip-wrap ${X}`,
        onMouseEnter: b,
        onMouseLeave: x,
        onFocus: b,
        onBlur: x,
        children: M
      }
    ),
    a && h && j(
      /* @__PURE__ */ u(
        "div",
        {
          ref: f,
          className: "nxp-tooltip",
          "data-position": A,
          style: { top: v.top, left: v.left },
          role: "tooltip",
          "aria-live": "polite",
          children: h
        }
      ),
      document.body
    )
  ] });
}
export {
  B as Tooltip,
  B as default
};
