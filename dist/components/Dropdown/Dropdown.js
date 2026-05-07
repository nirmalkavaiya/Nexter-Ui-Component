import { jsxs as m, jsx as n } from "react/jsx-runtime";
import { useState as x, useRef as y, useCallback as D, useEffect as F } from "react";
function S({
  options: a = [],
  value: k,
  onChange: l,
  placeholder: N = "Select…",
  disabled: w = !1,
  className: E = ""
}) {
  var b;
  const d = k !== void 0, [L, M] = x(""), c = d ? k : L, [r, u] = x(!1), [f, t] = x(-1), p = y(null), j = y(null), $ = a.filter((e) => !e.divider), g = (b = a.find((e) => e.value === c)) == null ? void 0 : b.label, i = D(() => {
    u(!1), t(-1);
  }, []), h = D(
    (e) => {
      d || M(e.value), l && l(e.value), i();
    },
    [d, l, i]
  );
  F(() => {
    if (!r) return;
    const e = (s) => {
      p.current && !p.current.contains(s.target) && i();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [r, i]);
  const A = (e) => {
    if (!r) {
      (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), u(!0), t(0));
      return;
    }
    const s = $;
    e.key === "ArrowDown" ? (e.preventDefault(), t((o) => Math.min(o + 1, s.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), t((o) => Math.max(o - 1, 0))) : e.key === "Home" ? (e.preventDefault(), t(0)) : e.key === "End" ? (e.preventDefault(), t(s.length - 1)) : e.key === "Enter" && f >= 0 ? (e.preventDefault(), h(s[f])) : e.key === "Escape" && (e.preventDefault(), i());
  };
  let _ = -1;
  return /* @__PURE__ */ m(
    "div",
    {
      className: `nxp-dropdown${r ? " is-open" : ""} ${E}`,
      ref: p,
      children: [
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: "nxp-dropdown__trigger",
            disabled: w,
            "aria-haspopup": "listbox",
            "aria-expanded": r,
            onClick: () => {
              w || u((e) => !e);
            },
            onKeyDown: A,
            children: [
              /* @__PURE__ */ n("span", { className: c ? "text-nxp-text" : "text-nxp-text-faint", children: g || N }),
              /* @__PURE__ */ n("svg", { className: "nxp-dropdown__chevron", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        r && /* @__PURE__ */ n(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: j,
            "aria-label": "Options",
            children: a.map((e, s) => {
              if (e.divider)
                return /* @__PURE__ */ n("div", { className: "nxp-dropdown__divider" }, s);
              _++;
              const o = _, v = e.value === c;
              return /* @__PURE__ */ m(
                "div",
                {
                  className: `nxp-dropdown__item${v ? " is-selected" : ""}${f === o ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": v,
                  onClick: () => h(e),
                  onMouseEnter: () => t(o),
                  children: [
                    /* @__PURE__ */ n("span", { className: "nxp-flex-1", children: e.label }),
                    e.sub && /* @__PURE__ */ n("span", { className: "nxp-dropdown__sub", children: e.sub }),
                    v && /* @__PURE__ */ n("svg", { className: "nxp-dropdown__check", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
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
  S as Dropdown,
  S as default
};
