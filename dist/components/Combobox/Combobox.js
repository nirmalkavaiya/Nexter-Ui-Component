import { jsxs as M, jsx as x } from "react/jsx-runtime";
import { useState as v, useRef as h, useMemo as w, useEffect as D, useCallback as y } from "react";
function A({ options: l = [], value: s, onChange: i, placeholder: k = "Type to search…", className: E = "" }) {
  const c = s !== void 0, [f, d] = v(""), [o, a] = v(!1), [u, n] = v(-1), _ = h(null), m = h(null), r = w(
    () => l.filter((e) => e.label.toLowerCase().includes(f.toLowerCase())),
    [l, f]
  );
  w(
    () => {
      var e;
      return c && ((e = l.find((t) => t.value === s)) == null ? void 0 : e.label) || "";
    },
    [c, l, s]
  ), D(() => {
    var e;
    if (c && s) {
      const t = ((e = l.find((b) => b.value === s)) == null ? void 0 : e.label) || "";
      d(t);
    }
  }, [s, c, l]);
  const p = y(
    (e) => {
      i && i(e.value), d(e.label), a(!1), n(-1);
    },
    [i]
  );
  D(() => {
    if (!o) return;
    const e = (t) => {
      m.current && !m.current.contains(t.target) && a(!1);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [o]);
  const g = y(
    (e) => {
      if (!o && (e.key === "ArrowDown" || e.key === "Enter")) {
        a(!0), n(0);
        return;
      }
      o && (e.key === "ArrowDown" ? (e.preventDefault(), n((t) => Math.min(t + 1, r.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), n((t) => Math.max(t - 1, 0))) : e.key === "Home" ? (e.preventDefault(), n(0)) : e.key === "End" ? (e.preventDefault(), n(r.length - 1)) : e.key === "Enter" && u >= 0 && r[u] ? (e.preventDefault(), p(r[u])) : e.key === "Escape" && (a(!1), n(-1)));
    },
    [o, r, u, p]
  ), C = y((e) => {
    d(e.target.value), a(!0), n(-1);
  }, []);
  return /* @__PURE__ */ M("div", { className: `nxp-combobox ${E}`, ref: m, children: [
    /* @__PURE__ */ x(
      "input",
      {
        ref: _,
        type: "text",
        className: "nxp-combobox__input",
        value: f,
        placeholder: k,
        onChange: C,
        onFocus: () => a(!0),
        onKeyDown: g,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": o,
        "aria-haspopup": "listbox"
      }
    ),
    o && r.length > 0 && /* @__PURE__ */ x("div", { className: "nxp-combobox__list", role: "listbox", children: r.map((e, t) => /* @__PURE__ */ x(
      "div",
      {
        className: `nxp-combobox__item${u === t ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": u === t,
        onMouseEnter: () => n(t),
        onMouseDown: (b) => {
          b.preventDefault(), p(e);
        },
        children: e.label
      },
      e.value
    )) })
  ] });
}
export {
  A as Combobox,
  A as default
};
