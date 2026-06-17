import { jsxs as h, jsx as s } from "react/jsx-runtime";
import { useState as k, useRef as I, useMemo as y, useCallback as f, useEffect as j } from "react";
import { ChevronDownIcon as K, CheckIcon as P } from "../../lib/icons.js";
function B({
  options: a = [],
  value: D,
  onChange: c,
  placeholder: $ = "Select…",
  size: M = "md",
  // 'sm' | 'md' | 'lg'
  disabled: p = !1,
  className: A = "",
  maxHeight: d,
  menuStyle: b
}) {
  const m = D !== void 0, [C, F] = k(""), i = m ? D : C, [r, v] = k(!1), [u, t] = k(-1), x = I(null), L = I(null), N = y(() => a.filter((e) => !e.divider && !e.header), [a]), O = y(
    () => {
      var e;
      return (e = a.find((n) => n.value === i)) == null ? void 0 : e.label;
    },
    [a, i]
  ), l = f(() => {
    v(!1), t(-1);
  }, []), w = f(
    (e) => {
      m || F(e.value), c && c(e.value), l();
    },
    [m, c, l]
  );
  j(() => {
    if (!r) return;
    const e = (n) => {
      x.current && !x.current.contains(n.target) && l();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [r, l]);
  const R = f(
    (e) => {
      if (!r) {
        (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), v(!0), t(0));
        return;
      }
      const n = N;
      e.key === "ArrowDown" ? (e.preventDefault(), t((o) => Math.min(o + 1, n.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), t((o) => Math.max(o - 1, 0))) : e.key === "Home" ? (e.preventDefault(), t(0)) : e.key === "End" ? (e.preventDefault(), t(n.length - 1)) : e.key === "Enter" && u >= 0 ? (e.preventDefault(), w(n[u])) : e.key === "Escape" && (e.preventDefault(), l());
    },
    [r, N, u, w, l]
  ), S = f(() => {
    p || v((e) => !e);
  }, [p]), g = y(
    () => ({
      ...d != null && d !== "" ? { maxHeight: d } : {},
      ...b
    }),
    [d, b]
  );
  let E = -1;
  return /* @__PURE__ */ h(
    "div",
    {
      className: `nxp-dropdown${r ? " is-open" : ""} ${A}`,
      ref: x,
      children: [
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            className: `nxp-dropdown__trigger nxp-dropdown__trigger--${M}`,
            disabled: p,
            "aria-haspopup": "listbox",
            "aria-expanded": r,
            onClick: S,
            onKeyDown: R,
            children: [
              /* @__PURE__ */ s("span", { className: i ? "text-nxp-text" : "text-nxp-text-faint", children: O || $ }),
              /* @__PURE__ */ s(K, { className: "nxp-dropdown__chevron" })
            ]
          }
        ),
        r && /* @__PURE__ */ s(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: L,
            "aria-label": "Options",
            style: g,
            children: a.map((e, n) => {
              if (e.divider)
                return /* @__PURE__ */ s("div", { className: "nxp-dropdown__divider" }, n);
              if (e.header)
                return /* @__PURE__ */ s("div", { className: "nxp-dropdown__header", role: "presentation", children: e.header }, n);
              E++;
              const o = E, _ = e.value === i;
              return /* @__PURE__ */ h(
                "div",
                {
                  className: `nxp-dropdown__item${_ ? " is-selected" : ""}${u === o ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": _,
                  onClick: () => w(e),
                  onMouseEnter: () => t(o),
                  children: [
                    /* @__PURE__ */ s("span", { className: "nxp-flex-1", children: e.label }),
                    e.sub && /* @__PURE__ */ s("span", { className: "nxp-dropdown__sub", children: e.sub }),
                    _ && /* @__PURE__ */ s(P, { className: "nxp-dropdown__check" })
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
