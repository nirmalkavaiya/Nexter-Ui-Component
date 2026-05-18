import { jsxs as M, jsx as b } from "react/jsx-runtime";
import { useState as x, useRef as w, useMemo as g, useEffect as h, useCallback as C } from "react";
function A({ options: s = [], value: a, onChange: c, placeholder: D = "Type to search…", className: k = "" }) {
  var y;
  const i = a !== void 0, [f, d] = x(""), [o, r] = x(!1), [u, n] = x(-1), E = w(null), m = w(null), l = g(
    () => s.filter((e) => e.label.toLowerCase().includes(f.toLowerCase())),
    [s, f]
  );
  i && ((y = s.find((e) => e.value === a)) != null && y.label), h(() => {
    var e;
    if (i && a) {
      const t = ((e = s.find((p) => p.value === a)) == null ? void 0 : e.label) || "";
      d(t);
    }
  }, [a, i, s]);
  const v = C(
    (e) => {
      c && c(e.value), d(e.label), r(!1), n(-1);
    },
    [c]
  );
  h(() => {
    if (!o) return;
    const e = (t) => {
      m.current && !m.current.contains(t.target) && r(!1);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [o]);
  const _ = (e) => {
    if (!o && (e.key === "ArrowDown" || e.key === "Enter")) {
      r(!0), n(0);
      return;
    }
    o && (e.key === "ArrowDown" ? (e.preventDefault(), n((t) => Math.min(t + 1, l.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), n((t) => Math.max(t - 1, 0))) : e.key === "Home" ? (e.preventDefault(), n(0)) : e.key === "End" ? (e.preventDefault(), n(l.length - 1)) : e.key === "Enter" && u >= 0 && l[u] ? (e.preventDefault(), v(l[u])) : e.key === "Escape" && (r(!1), n(-1)));
  };
  return /* @__PURE__ */ M("div", { className: `nxp-combobox ${k}`, ref: m, children: [
    /* @__PURE__ */ b(
      "input",
      {
        ref: E,
        type: "text",
        className: "nxp-combobox__input",
        value: f,
        placeholder: D,
        onChange: (e) => {
          d(e.target.value), r(!0), n(-1);
        },
        onFocus: () => r(!0),
        onKeyDown: _,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": o,
        "aria-haspopup": "listbox"
      }
    ),
    o && l.length > 0 && /* @__PURE__ */ b("div", { className: "nxp-combobox__list", role: "listbox", children: l.map((e, t) => /* @__PURE__ */ b(
      "div",
      {
        className: `nxp-combobox__item${u === t ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": u === t,
        onMouseEnter: () => n(t),
        onMouseDown: (p) => {
          p.preventDefault(), v(e);
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
