import { jsxs as M, Fragment as R, jsx as h } from "react/jsx-runtime";
import { useState as v, useRef as x, useCallback as l, useEffect as F } from "react";
import { createPortal as P } from "react-dom";
function z({ content: c, children: E, className: b = "" }) {
  const [o, u] = v(!1), [a, g] = v({ top: 0, left: 0 }), n = x(null), r = x(null), t = l(() => {
    var w, m;
    if (!n.current) return;
    const e = n.current.getBoundingClientRect(), p = ((w = r.current) == null ? void 0 : w.offsetWidth) || 120, L = ((m = r.current) == null ? void 0 : m.offsetHeight) || 30;
    let s = e.top - L - 6 + window.scrollY, i = e.left + e.width / 2 - p / 2 + window.scrollX;
    i = Math.max(8, Math.min(i, window.innerWidth - p - 8)), s < 4 && (s = e.bottom + 6 + window.scrollY), g({ top: s, left: i });
  }, []), f = l(() => {
    u(!0), requestAnimationFrame(t);
  }, [t]), d = l(() => u(!1), []);
  return F(() => {
    if (o)
      return window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), () => {
        window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
      };
  }, [o, t]), /* @__PURE__ */ M(R, { children: [
    /* @__PURE__ */ h(
      "span",
      {
        ref: n,
        className: `nxp-tooltip-wrap ${b}`,
        onMouseEnter: f,
        onMouseLeave: d,
        onFocus: f,
        onBlur: d,
        children: E
      }
    ),
    o && c && P(
      /* @__PURE__ */ h(
        "div",
        {
          ref: r,
          className: "nxp-tooltip",
          style: { top: a.top, left: a.left },
          role: "tooltip",
          children: c
        }
      ),
      document.body
    )
  ] });
}
export {
  z as Tooltip,
  z as default
};
