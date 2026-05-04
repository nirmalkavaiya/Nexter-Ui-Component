import { jsxs as L, jsx as p } from "react/jsx-runtime";
import { useState as b, useRef as w, useEffect as D, useCallback as M } from "react";
function R({ options: i = [], value: s, onChange: a, placeholder: h = "Type to search…", className: k = "" }) {
  var y;
  const u = s !== void 0, [v, f] = b(""), [n, l] = b(!1), [c, o] = b(-1), E = w(null), d = w(null), r = i.filter(
    (e) => e.label.toLowerCase().includes(v.toLowerCase())
  );
  u && ((y = i.find((e) => e.value === s)) != null && y.label), D(() => {
    var e;
    if (u && s) {
      const t = ((e = i.find((m) => m.value === s)) == null ? void 0 : e.label) || "";
      f(t);
    }
  }, [s, u, i]);
  const x = M(
    (e) => {
      a && a(e.value), f(e.label), l(!1), o(-1);
    },
    [u, a]
  );
  D(() => {
    if (!n) return;
    const e = (t) => {
      d.current && !d.current.contains(t.target) && l(!1);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [n]);
  const _ = (e) => {
    if (!n && (e.key === "ArrowDown" || e.key === "Enter")) {
      l(!0), o(0);
      return;
    }
    n && (e.key === "ArrowDown" ? (e.preventDefault(), o((t) => Math.min(t + 1, r.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), o((t) => Math.max(t - 1, 0))) : e.key === "Home" ? (e.preventDefault(), o(0)) : e.key === "End" ? (e.preventDefault(), o(r.length - 1)) : e.key === "Enter" && c >= 0 && r[c] ? (e.preventDefault(), x(r[c])) : e.key === "Escape" && (l(!1), o(-1)));
  };
  return /* @__PURE__ */ L("div", { className: `nxp-combobox ${k}`, ref: d, children: [
    /* @__PURE__ */ p(
      "input",
      {
        ref: E,
        type: "text",
        className: "nxp-combobox__input",
        value: v,
        placeholder: h,
        onChange: (e) => {
          f(e.target.value), l(!0), o(-1);
        },
        onFocus: () => l(!0),
        onKeyDown: _,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": n,
        "aria-haspopup": "listbox"
      }
    ),
    n && r.length > 0 && /* @__PURE__ */ p("div", { className: "nxp-combobox__list", role: "listbox", children: r.map((e, t) => /* @__PURE__ */ p(
      "div",
      {
        className: `nxp-combobox__item${c === t ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": c === t,
        onMouseEnter: () => o(t),
        onMouseDown: (m) => {
          m.preventDefault(), x(e);
        },
        children: e.label
      },
      e.value
    )) })
  ] });
}
export {
  R as Combobox,
  R as default
};
