import { jsxs as k, jsx as r } from "react/jsx-runtime";
import { useState as y, useRef as I, useMemo as D, useCallback as f, useEffect as j } from "react";
import { ChevronDownIcon as K, CheckIcon as P } from "../../lib/icons.js";
function B({
  options: c = [],
  value: h,
  onChange: a,
  placeholder: $ = "Select…",
  size: M = "md",
  // 'sm' | 'md' | 'lg'
  disabled: p = !1,
  className: A = "",
  maxHeight: i,
  menuStyle: b
}) {
  const m = h !== void 0, [C, F] = y(""), d = m ? h : C, [s, v] = y(!1), [u, t] = y(-1), x = I(null), L = I(null), N = D(() => c.filter((e) => !e.divider), [c]), O = D(
    () => {
      var e;
      return (e = c.find((n) => n.value === d)) == null ? void 0 : e.label;
    },
    [c, d]
  ), l = f(() => {
    v(!1), t(-1);
  }, []), w = f(
    (e) => {
      m || F(e.value), a && a(e.value), l();
    },
    [m, a, l]
  );
  j(() => {
    if (!s) return;
    const e = (n) => {
      x.current && !x.current.contains(n.target) && l();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [s, l]);
  const R = f(
    (e) => {
      if (!s) {
        (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), v(!0), t(0));
        return;
      }
      const n = N;
      e.key === "ArrowDown" ? (e.preventDefault(), t((o) => Math.min(o + 1, n.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), t((o) => Math.max(o - 1, 0))) : e.key === "Home" ? (e.preventDefault(), t(0)) : e.key === "End" ? (e.preventDefault(), t(n.length - 1)) : e.key === "Enter" && u >= 0 ? (e.preventDefault(), w(n[u])) : e.key === "Escape" && (e.preventDefault(), l());
    },
    [s, N, u, w, l]
  ), S = f(() => {
    p || v((e) => !e);
  }, [p]), g = D(
    () => ({
      ...i != null && i !== "" ? { maxHeight: i } : {},
      ...b
    }),
    [i, b]
  );
  let E = -1;
  return /* @__PURE__ */ k(
    "div",
    {
      className: `nxp-dropdown${s ? " is-open" : ""} ${A}`,
      ref: x,
      children: [
        /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: `nxp-dropdown__trigger nxp-dropdown__trigger--${M}`,
            disabled: p,
            "aria-haspopup": "listbox",
            "aria-expanded": s,
            onClick: S,
            onKeyDown: R,
            children: [
              /* @__PURE__ */ r("span", { className: d ? "text-nxp-text" : "text-nxp-text-faint", children: O || $ }),
              /* @__PURE__ */ r(K, { className: "nxp-dropdown__chevron" })
            ]
          }
        ),
        s && /* @__PURE__ */ r(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: L,
            "aria-label": "Options",
            style: g,
            children: c.map((e, n) => {
              if (e.divider)
                return /* @__PURE__ */ r("div", { className: "nxp-dropdown__divider" }, n);
              E++;
              const o = E, _ = e.value === d;
              return /* @__PURE__ */ k(
                "div",
                {
                  className: `nxp-dropdown__item${_ ? " is-selected" : ""}${u === o ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": _,
                  onClick: () => w(e),
                  onMouseEnter: () => t(o),
                  children: [
                    /* @__PURE__ */ r("span", { className: "nxp-flex-1", children: e.label }),
                    e.sub && /* @__PURE__ */ r("span", { className: "nxp-dropdown__sub", children: e.sub }),
                    _ && /* @__PURE__ */ r(P, { className: "nxp-dropdown__check" })
                  ]
                },
                e.value
              );
            })
          }
        )
      ]
    }
  );
}
export {
  B as Dropdown,
  B as default
};
