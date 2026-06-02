import { jsxs as _, jsx as r } from "react/jsx-runtime";
import { useState as h, useRef as b, useMemo as N, useCallback as u, useEffect as O } from "react";
import { ChevronDownIcon as R, CheckIcon as S } from "../../lib/icons.js";
function U({
  options: c = [],
  value: k,
  onChange: a,
  placeholder: E = "Select…",
  size: g = "md",
  // 'sm' | 'md' | 'lg'
  disabled: f = !1,
  className: I = ""
}) {
  const p = k !== void 0, [$, M] = h(""), i = p ? k : $, [t, m] = h(!1), [d, s] = h(-1), v = b(null), A = b(null), D = N(() => c.filter((e) => !e.divider), [c]), C = N(
    () => {
      var e;
      return (e = c.find((n) => n.value === i)) == null ? void 0 : e.label;
    },
    [c, i]
  ), l = u(() => {
    m(!1), s(-1);
  }, []), x = u(
    (e) => {
      p || M(e.value), a && a(e.value), l();
    },
    [p, a, l]
  );
  O(() => {
    if (!t) return;
    const e = (n) => {
      v.current && !v.current.contains(n.target) && l();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [t, l]);
  const F = u(
    (e) => {
      if (!t) {
        (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), m(!0), s(0));
        return;
      }
      const n = D;
      e.key === "ArrowDown" ? (e.preventDefault(), s((o) => Math.min(o + 1, n.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), s((o) => Math.max(o - 1, 0))) : e.key === "Home" ? (e.preventDefault(), s(0)) : e.key === "End" ? (e.preventDefault(), s(n.length - 1)) : e.key === "Enter" && d >= 0 ? (e.preventDefault(), x(n[d])) : e.key === "Escape" && (e.preventDefault(), l());
    },
    [t, D, d, x, l]
  ), L = u(() => {
    f || m((e) => !e);
  }, [f]);
  let y = -1;
  return /* @__PURE__ */ _(
    "div",
    {
      className: `nxp-dropdown${t ? " is-open" : ""} ${I}`,
      ref: v,
      children: [
        /* @__PURE__ */ _(
          "button",
          {
            type: "button",
            className: `nxp-dropdown__trigger nxp-dropdown__trigger--${g}`,
            disabled: f,
            "aria-haspopup": "listbox",
            "aria-expanded": t,
            onClick: L,
            onKeyDown: F,
            children: [
              /* @__PURE__ */ r("span", { className: i ? "text-nxp-text" : "text-nxp-text-faint", children: C || E }),
              /* @__PURE__ */ r(R, { className: "nxp-dropdown__chevron" })
            ]
          }
        ),
        t && /* @__PURE__ */ r(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: A,
            "aria-label": "Options",
            children: c.map((e, n) => {
              if (e.divider)
                return /* @__PURE__ */ r("div", { className: "nxp-dropdown__divider" }, n);
              y++;
              const o = y, w = e.value === i;
              return /* @__PURE__ */ _(
                "div",
                {
                  className: `nxp-dropdown__item${w ? " is-selected" : ""}${d === o ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": w,
                  onClick: () => x(e),
                  onMouseEnter: () => s(o),
                  children: [
                    /* @__PURE__ */ r("span", { className: "nxp-flex-1", children: e.label }),
                    e.sub && /* @__PURE__ */ r("span", { className: "nxp-dropdown__sub", children: e.sub }),
                    w && /* @__PURE__ */ r(S, { className: "nxp-dropdown__check" })
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
  U as Dropdown,
  U as default
};
