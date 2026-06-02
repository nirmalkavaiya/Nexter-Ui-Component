import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { useState as x, useRef as f, useEffect as C, useCallback as _ } from "react";
import { CheckIcon as k } from "../../lib/icons.js";
const b = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("rect", { x: "4.5", y: "1.5", width: "8", height: "9", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ e("path", { d: "M1.5 4.5H3v7A1.5 1.5 0 0 0 4.5 13H10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
] });
function g({
  value: o = "",
  label: c,
  hint: p,
  disabled: n = !1,
  /* translatable */
  copyText: d = "Copy",
  copiedText: u = "Copied!",
  copyLabel: s = "Copy to clipboard",
  className: y = ""
}) {
  const [i, l] = x(!1), a = f(null);
  C(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const m = _(async () => {
    if (!(n || !o)) {
      try {
        await navigator.clipboard.writeText(o);
      } catch {
        const t = document.createElement("textarea");
        t.value = o, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
      }
      l(!0), a.current = setTimeout(() => l(!1), 2e3);
    }
  }, [n, o]), h = [
    "nxp-copy",
    n ? "nxp-copy--disabled" : "",
    y
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: h, children: [
    c && /* @__PURE__ */ e("label", { className: "nxp-copy__label", children: c }),
    /* @__PURE__ */ r("div", { className: "nxp-copy__wrap", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          className: "nxp-copy__input",
          value: o,
          readOnly: !0,
          "aria-label": c ?? "Copy value",
          disabled: n
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: `nxp-copy__btn${i ? " nxp-copy__btn--copied" : ""}`,
          onClick: m,
          disabled: n,
          "aria-label": s,
          title: s,
          children: [
            i ? /* @__PURE__ */ e(k, {}) : /* @__PURE__ */ e(b, {}),
            /* @__PURE__ */ e("span", { children: i ? u : d })
          ]
        }
      )
    ] }),
    p && /* @__PURE__ */ e("span", { className: "nxp-copy__hint", children: p })
  ] });
}
export {
  g as CopyInput,
  g as default
};
