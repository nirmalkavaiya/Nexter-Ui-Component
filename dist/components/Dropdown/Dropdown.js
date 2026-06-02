import { jsxs as v, jsx as t } from "react/jsx-runtime";
import { useState as x, useRef as b, useMemo as O, useCallback as y, useEffect as R } from "react";
import { ChevronDownIcon as S, CheckIcon as j } from "../../lib/icons.js";
function q({
  options: c = [],
  value: w,
  onChange: o,
  placeholder: N = "Select…",
  size: E = "md",
  // 'sm' | 'md' | 'lg'
  disabled: _ = !1,
  className: I = ""
}) {
  var D;
  const i = w !== void 0, [$, M] = x(""), d = i ? w : $, [r, u] = x(!1), [f, n] = x(-1), p = b(null), g = b(null), A = O(() => c.filter((e) => !e.divider), [c]), F = (D = c.find((e) => e.value === d)) == null ? void 0 : D.label, a = y(() => {
    u(!1), n(-1);
  }, []), h = y(
    (e) => {
      i || M(e.value), o && o(e.value), a();
    },
    [i, o, a]
  );
  R(() => {
    if (!r) return;
    const e = (s) => {
      p.current && !p.current.contains(s.target) && a();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [r, a]);
  const L = (e) => {
    if (!r) {
      (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), u(!0), n(0));
      return;
    }
    const s = A;
    e.key === "ArrowDown" ? (e.preventDefault(), n((l) => Math.min(l + 1, s.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), n((l) => Math.max(l - 1, 0))) : e.key === "Home" ? (e.preventDefault(), n(0)) : e.key === "End" ? (e.preventDefault(), n(s.length - 1)) : e.key === "Enter" && f >= 0 ? (e.preventDefault(), h(s[f])) : e.key === "Escape" && (e.preventDefault(), a());
  };
  let k = -1;
  return /* @__PURE__ */ v(
    "div",
    {
      className: `nxp-dropdown${r ? " is-open" : ""} ${I}`,
      ref: p,
      children: [
        /* @__PURE__ */ v(
          "button",
          {
            type: "button",
            className: `nxp-dropdown__trigger nxp-dropdown__trigger--${E}`,
            disabled: _,
            "aria-haspopup": "listbox",
            "aria-expanded": r,
            onClick: () => {
              _ || u((e) => !e);
            },
            onKeyDown: L,
            children: [
              /* @__PURE__ */ t("span", { className: d ? "text-nxp-text" : "text-nxp-text-faint", children: F || N }),
              /* @__PURE__ */ t(S, { className: "nxp-dropdown__chevron" })
            ]
          }
        ),
        r && /* @__PURE__ */ t(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: g,
            "aria-label": "Options",
            children: c.map((e, s) => {
              if (e.divider)
                return /* @__PURE__ */ t("div", { className: "nxp-dropdown__divider" }, s);
              k++;
              const l = k, m = e.value === d;
              return /* @__PURE__ */ v(
                "div",
                {
                  className: `nxp-dropdown__item${m ? " is-selected" : ""}${f === l ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": m,
                  onClick: () => h(e),
                  onMouseEnter: () => n(l),
                  children: [
                    /* @__PURE__ */ t("span", { className: "nxp-flex-1", children: e.label }),
                    e.sub && /* @__PURE__ */ t("span", { className: "nxp-dropdown__sub", children: e.sub }),
                    m && /* @__PURE__ */ t(j, { className: "nxp-dropdown__check" })
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
  q as Dropdown,
  q as default
};
