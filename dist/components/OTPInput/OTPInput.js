import { jsx as b, jsxs as N } from "react/jsx-runtime";
import O, { useState as R, useEffect as T, useRef as $, useCallback as B } from "react";
function M({
  length: n = 6,
  value: f,
  // controlled: string of digits/chars
  onChange: i,
  // (fullString) => void
  defaultValue: v = "",
  type: o = "number",
  // 'number' | 'text' | 'password'
  disabled: d = !1,
  autoFocus: D = !1,
  separator: _,
  // insert a dash/dot after this index (e.g. 3 → "XXX-XXX")
  separatorChar: k = "–",
  /* translatable */
  inputLabel: y = "OTP digit",
  // aria-label prefix per input
  className: P = ""
}) {
  const s = f !== void 0, [a, A] = R(() => {
    const t = (s ? f : v) ?? "";
    return Array.from({ length: n }, (e, r) => t[r] ?? "");
  });
  T(() => {
    s && A(Array.from({ length: n }, (t, e) => (f ?? "")[e] ?? ""));
  }, [s, f, n]);
  const p = $([]);
  function c(t) {
    var e, r;
    (e = p.current[t]) == null || e.focus(), (r = p.current[t]) == null || r.select();
  }
  const l = B((t) => {
    s || A(t), i == null || i(t.join(""));
  }, [s, i]);
  function j(t, e) {
    const u = e.target.value.slice(-1);
    if (o === "number" && u !== "" && !/^\d$/.test(u)) return;
    const m = [...a];
    m[t] = u, l(m), u && t < n - 1 && c(t + 1);
  }
  function w(t, e) {
    if (e.key === "Backspace") {
      if (a[t]) {
        const r = [...a];
        r[t] = "", l(r);
      } else if (t > 0) {
        const r = [...a];
        r[t - 1] = "", l(r), c(t - 1);
      }
    }
    e.key === "ArrowLeft" && t > 0 && c(t - 1), e.key === "ArrowRight" && t < n - 1 && c(t + 1);
  }
  function x(t) {
    t.preventDefault();
    const e = t.clipboardData.getData("text").replace(/\D/g, o === "number" ? "" : void 0).slice(0, n);
    if (!e) return;
    const r = Array.from({ length: n }, (u, m) => e[m] ?? "");
    l(r), c(Math.min(e.length, n - 1));
  }
  const F = ["nxp-otp", d ? "nxp-otp--disabled" : "", P].filter(Boolean).join(" ");
  return /* @__PURE__ */ b("div", { className: F, role: "group", "aria-label": "OTP input", children: Array.from({ length: n }, (t, e) => /* @__PURE__ */ N(O.Fragment, { children: [
    /* @__PURE__ */ b(
      "input",
      {
        ref: (r) => {
          p.current[e] = r;
        },
        type: o === "number" ? "tel" : o,
        inputMode: o === "number" ? "numeric" : "text",
        pattern: o === "number" ? "[0-9]*" : void 0,
        maxLength: 1,
        className: "nxp-otp__input",
        value: a[e],
        disabled: d,
        autoFocus: D && e === 0,
        "aria-label": `${y} ${e + 1}`,
        onChange: (r) => j(e, r),
        onKeyDown: (r) => w(e, r),
        onPaste: x,
        onFocus: (r) => r.target.select()
      }
    ),
    _ && e === _ - 1 && /* @__PURE__ */ b("span", { className: "nxp-otp__sep", "aria-hidden": "true", children: k })
  ] }, e)) });
}
export {
  M as OTPInput,
  M as default
};
