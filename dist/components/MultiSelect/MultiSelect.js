import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as g, useRef as E, useMemo as w, useCallback as d, useEffect as R } from "react";
import { ChevronDownIcon as H } from "../../lib/icons.js";
const J = () => /* @__PURE__ */ r(H, { size: 12 }), Q = () => /* @__PURE__ */ r("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r(
  "path",
  {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function X(p) {
  return p.length ? "options" in p[0] ? p : [{ label: null, options: p }] : [];
}
function ee({
  /* data */
  options: p = [],
  value: o = [],
  onChange: s,
  /* behaviour */
  searchable: $ = !0,
  disabled: i = !1,
  /* translatable UI strings */
  placeholder: q = "Select options",
  searchPlaceholder: M = "Search…",
  noResultsText: B = "No results found",
  clearAllLabel: F = "Clear all",
  removeLabel: K = "Remove",
  className: U = ""
}) {
  const [l, S] = g(!1), [v, A] = g(""), [c, u] = g(-1), _ = E(null), L = E(null), N = E(null), m = w(() => X(p), [p]), O = w(
    () => m.flatMap((e) => e.options ?? []),
    [m]
  ), x = w(() => {
    const e = v.trim().toLowerCase();
    return e ? m.map((n) => ({
      ...n,
      options: (n.options ?? []).filter(
        (t) => t.label.toLowerCase().includes(e)
      )
    })).filter((n) => n.options.length > 0) : m;
  }, [m, v]), b = w(
    () => x.flatMap((e) => e.options ?? []),
    [x]
  ), D = d(() => {
    i || (S(!0), u(-1), requestAnimationFrame(() => {
      var e;
      return (e = L.current) == null ? void 0 : e.focus();
    }));
  }, [i]), f = d(() => {
    S(!1), A(""), u(-1);
  }, []);
  R(() => {
    if (!l) return;
    function e(n) {
      _.current && !_.current.contains(n.target) && f();
    }
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [l, f]);
  const k = d(
    (e) => {
      if (i) return;
      const n = o.includes(e) ? o.filter((t) => t !== e) : [...o, e];
      s == null || s(n);
    },
    [i, o, s]
  ), z = d(
    (e, n) => {
      n.stopPropagation(), s == null || s(o.filter((t) => t !== e));
    },
    [o, s]
  ), G = d(
    (e) => {
      e.stopPropagation(), s == null || s([]);
    },
    [s]
  ), j = d(
    (e) => {
      var n;
      return ((n = O.find((t) => t.value === e)) == null ? void 0 : n.label) ?? String(e);
    },
    [O]
  ), P = d(
    (e) => {
      var n;
      if (!l) {
        ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), D());
        return;
      }
      switch (e.key) {
        case "Escape":
          e.preventDefault(), f(), (n = _.current) == null || n.focus();
          break;
        case "ArrowDown":
          e.preventDefault(), u((t) => Math.min(t + 1, b.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault(), u((t) => Math.max(t - 1, 0));
          break;
        case "Enter":
          e.preventDefault(), c >= 0 && b[c] && k(b[c].value);
          break;
      }
    },
    [l, D, f, b, c, k]
  );
  R(() => {
    if (c < 0 || !N.current) return;
    const e = N.current.querySelector(`[data-idx="${c}"]`);
    e == null || e.scrollIntoView({ block: "nearest" });
  }, [c]);
  const T = [
    "nxp-ms",
    l ? "nxp-ms--open" : "",
    i ? "nxp-ms--disabled" : "",
    U
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    "div",
    {
      ref: _,
      className: T,
      tabIndex: i ? -1 : 0,
      role: "combobox",
      "aria-expanded": l,
      "aria-haspopup": "listbox",
      "aria-disabled": i || void 0,
      onKeyDown: P,
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "nxp-ms__trigger",
            onClick: l ? f : D,
            "aria-label": "Open select",
            children: [
              /* @__PURE__ */ a("div", { className: "nxp-ms__tags-wrap", children: [
                o.length === 0 && /* @__PURE__ */ r("span", { className: "nxp-ms__placeholder", children: q }),
                o.map((e) => /* @__PURE__ */ a("span", { className: "nxp-ms__tag", children: [
                  /* @__PURE__ */ r("span", { className: "nxp-ms__tag-label", children: j(e) }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: "nxp-ms__tag-remove",
                      onPointerDown: (n) => z(e, n),
                      "aria-label": `${K} ${j(e)}`,
                      tabIndex: -1,
                      children: "×"
                    }
                  )
                ] }, e))
              ] }),
              /* @__PURE__ */ a("div", { className: "nxp-ms__trigger-end", children: [
                o.length > 0 && !i && /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: "nxp-ms__clear",
                    onPointerDown: G,
                    "aria-label": F,
                    tabIndex: -1,
                    children: "×"
                  }
                ),
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: `nxp-ms__chevron${l ? " nxp-ms__chevron--up" : ""}`,
                    children: /* @__PURE__ */ r(J, {})
                  }
                )
              ] })
            ]
          }
        ),
        l && /* @__PURE__ */ a("div", { className: "nxp-ms__dropdown", children: [
          $ && /* @__PURE__ */ r("div", { className: "nxp-ms__search-wrap", children: /* @__PURE__ */ r(
            "input",
            {
              ref: L,
              type: "text",
              className: "nxp-ms__search",
              value: v,
              placeholder: M,
              "aria-label": M,
              onChange: (e) => {
                A(e.target.value), u(-1);
              },
              onKeyDown: (e) => {
                ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key) && (e.preventDefault(), P(e));
              }
            }
          ) }),
          /* @__PURE__ */ a(
            "div",
            {
              ref: N,
              className: "nxp-ms__list",
              role: "listbox",
              "aria-multiselectable": "true",
              children: [
                x.length === 0 && /* @__PURE__ */ r("div", { className: "nxp-ms__empty", role: "status", children: B }),
                (() => {
                  let e = 0;
                  return x.map((n) => /* @__PURE__ */ a(
                    "div",
                    {
                      className: "nxp-ms__group",
                      children: [
                        n.label && /* @__PURE__ */ r("div", { className: "nxp-ms__group-label", "aria-label": n.label, children: n.label }),
                        (n.options ?? []).map((t) => {
                          const y = e++, I = o.includes(t.value), V = c === y, h = t.disabled ?? !1;
                          return /* @__PURE__ */ a(
                            "div",
                            {
                              "data-idx": y,
                              className: [
                                "nxp-ms__option",
                                I ? "nxp-ms__option--selected" : "",
                                V ? "nxp-ms__option--focused" : "",
                                h ? "nxp-ms__option--disabled" : ""
                              ].filter(Boolean).join(" "),
                              role: "option",
                              "aria-selected": I,
                              "aria-disabled": h || void 0,
                              onPointerDown: (W) => {
                                W.preventDefault(), h || k(t.value);
                              },
                              onMouseEnter: () => !h && u(y),
                              children: [
                                /* @__PURE__ */ r("span", { className: "nxp-ms__option-label", children: t.label }),
                                I && /* @__PURE__ */ r("span", { className: "nxp-ms__option-check", children: /* @__PURE__ */ r(Q, {}) })
                              ]
                            },
                            t.value
                          );
                        })
                      ]
                    },
                    n.label ?? "__ungrouped"
                  ));
                })()
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  ee as MultiSelect,
  ee as default
};
