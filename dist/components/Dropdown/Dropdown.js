import { jsxs as m, jsx as n } from "react/jsx-runtime";
import { useState as x, useRef as b, useCallback as D, useEffect as F } from "react";
function S({
  options: d = [],
  value: k,
  onChange: l,
  placeholder: E = "Select…",
  disabled: w = !1,
  className: N = ""
}) {
  var _;
  const a = k !== void 0, [L, M] = x(""), c = a ? k : L, [s, u] = x(!1), [f, t] = x(-1), p = b(null), j = b(null), $ = d.filter((e) => !e.divider), g = (_ = d.find((e) => e.value === c)) == null ? void 0 : _.label, i = D(() => {
    u(!1), t(-1);
  }, []), h = D(
    (e) => {
      a || M(e.value), l && l(e.value), i();
    },
    [a, l, i]
  );
  F(() => {
    if (!s) return;
    const e = (r) => {
      p.current && !p.current.contains(r.target) && i();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [s, i]);
  const A = (e) => {
    if (!s) {
      (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), u(!0), t(0));
      return;
    }
    const r = $;
    e.key === "ArrowDown" ? (e.preventDefault(), t((o) => Math.min(o + 1, r.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), t((o) => Math.max(o - 1, 0))) : e.key === "Home" ? (e.preventDefault(), t(0)) : e.key === "End" ? (e.preventDefault(), t(r.length - 1)) : e.key === "Enter" && f >= 0 ? (e.preventDefault(), h(r[f])) : e.key === "Escape" && (e.preventDefault(), i());
  };
  let y = -1;
  return /* @__PURE__ */ m(
    "div",
    {
      className: `nxp-dropdown${s ? " is-open" : ""} ${N}`,
      ref: p,
      children: [
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: "nxp-dropdown__trigger",
            disabled: w,
            "aria-haspopup": "listbox",
            "aria-expanded": s,
            onClick: () => {
              w || u((e) => !e);
            },
            onKeyDown: A,
            children: [
              /* @__PURE__ */ n("span", { style: { color: c ? "var(--nxp-text)" : "var(--nxp-text-faint)" }, children: g || E }),
              /* @__PURE__ */ n("svg", { className: "nxp-dropdown__chevron", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        s && /* @__PURE__ */ n(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: j,
            "aria-label": "Options",
            children: d.map((e, r) => {
              if (e.divider)
                return /* @__PURE__ */ n("div", { className: "nxp-dropdown__divider" }, r);
              y++;
              const o = y, v = e.value === c;
              return /* @__PURE__ */ m(
                "div",
                {
                  className: `nxp-dropdown__item${v ? " is-selected" : ""}${f === o ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": v,
                  onClick: () => h(e),
                  onMouseEnter: () => t(o),
                  children: [
                    /* @__PURE__ */ n("span", { style: { flex: 1 }, children: e.label }),
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
