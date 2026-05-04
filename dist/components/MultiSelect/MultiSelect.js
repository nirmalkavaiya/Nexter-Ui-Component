import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as I, useRef as E, useMemo as w, useCallback as d, useEffect as R } from "react";
const H = () => /* @__PURE__ */ r("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r(
  "path",
  {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), J = () => /* @__PURE__ */ r("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r(
  "path",
  {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function Q(p) {
  return p.length ? "options" in p[0] ? p : [{ label: null, options: p }] : [];
}
function Z({
  /* data */
  options: p = [],
  value: o = [],
  onChange: s,
  /* behaviour */
  searchable: B = !0,
  disabled: i = !1,
  /* translatable UI strings */
  placeholder: $ = "Select options",
  searchPlaceholder: L = "Search…",
  noResultsText: q = "No results found",
  clearAllLabel: F = "Clear all",
  removeLabel: K = "Remove",
  className: U = ""
}) {
  const [l, M] = I(!1), [v, S] = I(""), [c, u] = I(-1), _ = E(null), A = E(null), N = E(null), m = w(() => Q(p), [p]), j = w(
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
  }, [m, v]), h = w(
    () => x.flatMap((e) => e.options ?? []),
    [x]
  ), k = d(() => {
    i || (M(!0), u(-1), requestAnimationFrame(() => {
      var e;
      return (e = A.current) == null ? void 0 : e.focus();
    }));
  }, [i]), f = d(() => {
    M(!1), S(""), u(-1);
  }, []);
  R(() => {
    if (!l) return;
    function e(n) {
      _.current && !_.current.contains(n.target) && f();
    }
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [l, f]);
  const D = d(
    (e) => {
      if (i) return;
      const n = o.includes(e) ? o.filter((t) => t !== e) : [...o, e];
      s == null || s(n);
    },
    [i, o, s]
  ), W = d(
    (e, n) => {
      n.stopPropagation(), s == null || s(o.filter((t) => t !== e));
    },
    [o, s]
  ), G = d(
    (e) => {
      e.stopPropagation(), s == null || s([]);
    },
    [s]
  ), O = d(
    (e) => {
      var n;
      return ((n = j.find((t) => t.value === e)) == null ? void 0 : n.label) ?? String(e);
    },
    [j]
  ), P = d(
    (e) => {
      var n;
      if (!l) {
        ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), k());
        return;
      }
      switch (e.key) {
        case "Escape":
          e.preventDefault(), f(), (n = _.current) == null || n.focus();
          break;
        case "ArrowDown":
          e.preventDefault(), u((t) => Math.min(t + 1, h.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault(), u((t) => Math.max(t - 1, 0));
          break;
        case "Enter":
          e.preventDefault(), c >= 0 && h[c] && D(h[c].value);
          break;
      }
    },
    [l, k, f, h, c, D]
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
            onClick: l ? f : k,
            "aria-label": "Open select",
            children: [
              /* @__PURE__ */ a("div", { className: "nxp-ms__tags-wrap", children: [
                o.length === 0 && /* @__PURE__ */ r("span", { className: "nxp-ms__placeholder", children: $ }),
                o.map((e) => /* @__PURE__ */ a("span", { className: "nxp-ms__tag", children: [
                  /* @__PURE__ */ r("span", { className: "nxp-ms__tag-label", children: O(e) }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: "nxp-ms__tag-remove",
                      onPointerDown: (n) => W(e, n),
                      "aria-label": `${K} ${O(e)}`,
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
                    children: /* @__PURE__ */ r(H, {})
                  }
                )
              ] })
            ]
          }
        ),
        l && /* @__PURE__ */ a("div", { className: "nxp-ms__dropdown", children: [
          B && /* @__PURE__ */ r("div", { className: "nxp-ms__search-wrap", children: /* @__PURE__ */ r(
            "input",
            {
              ref: A,
              type: "text",
              className: "nxp-ms__search",
              value: v,
              placeholder: L,
              "aria-label": L,
              onChange: (e) => {
                S(e.target.value), u(-1);
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
                x.length === 0 && /* @__PURE__ */ r("div", { className: "nxp-ms__empty", role: "status", children: q }),
                (() => {
                  let e = 0;
                  return x.map((n) => /* @__PURE__ */ a(
                    "div",
                    {
                      className: "nxp-ms__group",
                      children: [
                        n.label && /* @__PURE__ */ r("div", { className: "nxp-ms__group-label", "aria-label": n.label, children: n.label }),
                        (n.options ?? []).map((t) => {
                          const g = e++, y = o.includes(t.value), V = c === g, b = t.disabled ?? !1;
                          return /* @__PURE__ */ a(
                            "div",
                            {
                              "data-idx": g,
                              className: [
                                "nxp-ms__option",
                                y ? "nxp-ms__option--selected" : "",
                                V ? "nxp-ms__option--focused" : "",
                                b ? "nxp-ms__option--disabled" : ""
                              ].filter(Boolean).join(" "),
                              role: "option",
                              "aria-selected": y,
                              "aria-disabled": b || void 0,
                              onPointerDown: (z) => {
                                z.preventDefault(), b || D(t.value);
                              },
                              onMouseEnter: () => !b && u(g),
                              children: [
                                /* @__PURE__ */ r("span", { className: "nxp-ms__option-label", children: t.label }),
                                y && /* @__PURE__ */ r("span", { className: "nxp-ms__option-check", children: /* @__PURE__ */ r(J, {}) })
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
  Z as MultiSelect,
  Z as default
};
