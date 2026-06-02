import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { useState as g, useRef as E, useMemo as _, useCallback as d, useEffect as j } from "react";
import { cn as q } from "../../lib/utils.js";
import { ChevronDownIcon as J } from "../../lib/icons.js";
const Q = () => /* @__PURE__ */ r(J, { size: 12 }), X = () => /* @__PURE__ */ r("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r(
  "path",
  {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function Y(p) {
  return p.length ? "options" in p[0] ? p : [{ label: null, options: p }] : [];
}
function te({
  /* data */
  options: p = [],
  value: o = [],
  onChange: s,
  /* behaviour */
  searchable: F = !0,
  disabled: a = !1,
  /* translatable UI strings */
  placeholder: K = "Select options",
  searchPlaceholder: M = "Search…",
  noResultsText: U = "No results found",
  clearAllLabel: z = "Clear all",
  removeLabel: B = "Remove",
  className: S = ""
}) {
  const [l, A] = g(!1), [v, L] = g(""), [c, u] = g(-1), x = E(null), O = E(null), D = E(null), m = _(() => Y(p), [p]), P = _(
    () => m.flatMap((e) => e.options ?? []),
    [m]
  ), b = _(() => {
    const e = v.trim().toLowerCase();
    return e ? m.map((n) => ({
      ...n,
      options: (n.options ?? []).filter(
        (t) => t.label.toLowerCase().includes(e)
      )
    })).filter((n) => n.options.length > 0) : m;
  }, [m, v]), h = _(
    () => b.flatMap((e) => e.options ?? []),
    [b]
  ), N = d(() => {
    a || (A(!0), u(-1), requestAnimationFrame(() => {
      var e;
      return (e = O.current) == null ? void 0 : e.focus();
    }));
  }, [a]), f = d(() => {
    A(!1), L(""), u(-1);
  }, []);
  j(() => {
    if (!l) return;
    function e(n) {
      x.current && !x.current.contains(n.target) && f();
    }
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [l, f]);
  const k = d(
    (e) => {
      if (a) return;
      const n = o.includes(e) ? o.filter((t) => t !== e) : [...o, e];
      s == null || s(n);
    },
    [a, o, s]
  ), G = d(
    (e, n) => {
      n.stopPropagation(), s == null || s(o.filter((t) => t !== e));
    },
    [o, s]
  ), T = d(
    (e) => {
      e.stopPropagation(), s == null || s([]);
    },
    [s]
  ), R = d(
    (e) => {
      var n;
      return ((n = P.find((t) => t.value === e)) == null ? void 0 : n.label) ?? String(e);
    },
    [P]
  ), $ = d(
    (e) => {
      var n;
      if (!l) {
        ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), N());
        return;
      }
      switch (e.key) {
        case "Escape":
          e.preventDefault(), f(), (n = x.current) == null || n.focus();
          break;
        case "ArrowDown":
          e.preventDefault(), u((t) => Math.min(t + 1, h.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault(), u((t) => Math.max(t - 1, 0));
          break;
        case "Enter":
          e.preventDefault(), c >= 0 && h[c] && k(h[c].value);
          break;
      }
    },
    [l, N, f, h, c, k]
  );
  j(() => {
    if (c < 0 || !D.current) return;
    const e = D.current.querySelector(`[data-idx="${c}"]`);
    e == null || e.scrollIntoView({ block: "nearest" });
  }, [c]);
  const V = _(
    () => q("nxp-ms", l && "nxp-ms--open", a && "nxp-ms--disabled", S),
    [l, a, S]
  );
  return /* @__PURE__ */ i(
    "div",
    {
      ref: x,
      className: V,
      tabIndex: a ? -1 : 0,
      role: "combobox",
      "aria-expanded": l,
      "aria-haspopup": "listbox",
      "aria-disabled": a || void 0,
      onKeyDown: $,
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "nxp-ms__trigger",
            onClick: l ? f : N,
            "aria-label": "Open select",
            children: [
              /* @__PURE__ */ i("div", { className: "nxp-ms__tags-wrap", children: [
                o.length === 0 && /* @__PURE__ */ r("span", { className: "nxp-ms__placeholder", children: K }),
                o.map((e) => /* @__PURE__ */ i("span", { className: "nxp-ms__tag", children: [
                  /* @__PURE__ */ r("span", { className: "nxp-ms__tag-label", children: R(e) }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: "nxp-ms__tag-remove",
                      onPointerDown: (n) => G(e, n),
                      "aria-label": `${B} ${R(e)}`,
                      tabIndex: -1,
                      children: "×"
                    }
                  )
                ] }, e))
              ] }),
              /* @__PURE__ */ i("div", { className: "nxp-ms__trigger-end", children: [
                o.length > 0 && !a && /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: "nxp-ms__clear",
                    onPointerDown: T,
                    "aria-label": z,
                    tabIndex: -1,
                    children: "×"
                  }
                ),
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: `nxp-ms__chevron${l ? " nxp-ms__chevron--up" : ""}`,
                    children: /* @__PURE__ */ r(Q, {})
                  }
                )
              ] })
            ]
          }
        ),
        l && /* @__PURE__ */ i("div", { className: "nxp-ms__dropdown", children: [
          F && /* @__PURE__ */ r("div", { className: "nxp-ms__search-wrap", children: /* @__PURE__ */ r(
            "input",
            {
              ref: O,
              type: "text",
              className: "nxp-ms__search",
              value: v,
              placeholder: M,
              "aria-label": M,
              onChange: (e) => {
                L(e.target.value), u(-1);
              },
              onKeyDown: (e) => {
                ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key) && (e.preventDefault(), $(e));
              }
            }
          ) }),
          /* @__PURE__ */ i(
            "div",
            {
              ref: D,
              className: "nxp-ms__list",
              role: "listbox",
              "aria-multiselectable": "true",
              children: [
                b.length === 0 && /* @__PURE__ */ r("div", { className: "nxp-ms__empty", role: "status", children: U }),
                (() => {
                  let e = 0;
                  return b.map((n) => /* @__PURE__ */ i(
                    "div",
                    {
                      className: "nxp-ms__group",
                      children: [
                        n.label && /* @__PURE__ */ r("div", { className: "nxp-ms__group-label", "aria-label": n.label, children: n.label }),
                        (n.options ?? []).map((t) => {
                          const y = e++, I = o.includes(t.value), W = c === y, w = t.disabled ?? !1;
                          return /* @__PURE__ */ i(
                            "div",
                            {
                              "data-idx": y,
                              className: q(
                                "nxp-ms__option",
                                I && "nxp-ms__option--selected",
                                W && "nxp-ms__option--focused",
                                w && "nxp-ms__option--disabled"
                              ),
                              role: "option",
                              "aria-selected": I,
                              "aria-disabled": w || void 0,
                              onPointerDown: (H) => {
                                H.preventDefault(), w || k(t.value);
                              },
                              onMouseEnter: () => !w && u(y),
                              children: [
                                /* @__PURE__ */ r("span", { className: "nxp-ms__option-label", children: t.label }),
                                I && /* @__PURE__ */ r("span", { className: "nxp-ms__option-check", children: /* @__PURE__ */ r(X, {}) })
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
  te as MultiSelect,
  te as default
};
