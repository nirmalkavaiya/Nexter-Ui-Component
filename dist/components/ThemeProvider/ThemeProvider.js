import { jsx as g } from "react/jsx-runtime";
import { useState as A, useEffect as v, useCallback as m, useContext as x, createContext as S } from "react";
const u = "nxp-theme", f = "nxp-dark", l = "nxp-light", i = "data-theme", h = S(null);
function L({
  defaultTheme: r = "system",
  target: d,
  storageSync: o = !0,
  children: w
}) {
  var c;
  const [t, p] = A(() => {
    if (o && typeof window < "u") {
      const e = window.localStorage.getItem(u);
      if (e === "light" || e === "dark" || e === "system") return e;
    }
    return r;
  });
  v(() => {
    if (typeof document > "u") return;
    const e = d || document.documentElement;
    e.classList.remove(f, l), e.removeAttribute(i), t === "dark" ? (e.classList.add(f), e.setAttribute(i, "dark")) : t === "light" && (e.classList.add(l), e.setAttribute(i, "light"));
  }, [t, d]);
  const s = m((e) => {
    const n = typeof e == "function" ? e(t) : e;
    o && typeof window < "u" && window.localStorage.setItem(u, n), p(n);
  }, [t, o]), k = m(() => {
    s((e) => {
      var a;
      return e === "light" ? "dark" : e === "dark" || ((a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-color-scheme: dark)").matches) ? "light" : "dark";
    });
  }, [s]), T = t === "system" ? typeof window < "u" && ((c = window.matchMedia) != null && c.call(window, "(prefers-color-scheme: dark)").matches) ? "dark" : "light" : t;
  return /* @__PURE__ */ g(h.Provider, { value: { theme: t, resolvedTheme: T, setTheme: s, toggle: k }, children: w });
}
function b() {
  const r = x(h);
  if (!r)
    throw new Error("useTheme must be used inside <ThemeProvider>");
  return r;
}
export {
  L as ThemeProvider,
  b as useTheme
};
