import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { useState as x, useCallback as m } from "react";
const C = () => /* @__PURE__ */ r("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("rect", { x: "4.5", y: "1.5", width: "8", height: "9", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ e("path", { d: "M1.5 4.5H3v7A1.5 1.5 0 0 0 4.5 13H10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
] }), f = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function w({
  value: o = "",
  label: i,
  hint: a,
  disabled: n = !1,
  /* translatable */
  copyText: l = "Copy",
  copiedText: d = "Copied!",
  copyLabel: p = "Copy to clipboard",
  className: h = ""
}) {
  const [c, s] = x(!1), y = m(async () => {
    if (!(n || !o)) {
      try {
        await navigator.clipboard.writeText(o);
      } catch {
        const t = document.createElement("textarea");
        t.value = o, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
      }
      s(!0), setTimeout(() => s(!1), 2e3);
    }
  }, [n, o]), u = [
    "nxp-copy",
    n ? "nxp-copy--disabled" : "",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: u, children: [
    i && /* @__PURE__ */ e("label", { className: "nxp-copy__label", children: i }),
    /* @__PURE__ */ r("div", { className: "nxp-copy__wrap", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          className: "nxp-copy__input",
          value: o,
          readOnly: !0,
          "aria-label": i ?? "Copy value",
          disabled: n
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: `nxp-copy__btn${c ? " nxp-copy__btn--copied" : ""}`,
          onClick: y,
          disabled: n,
          "aria-label": p,
          title: p,
          children: [
            c ? /* @__PURE__ */ e(f, {}) : /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e("span", { children: c ? d : l })
          ]
        }
      )
    ] }),
    a && /* @__PURE__ */ e("span", { className: "nxp-copy__hint", children: a })
  ] });
}
export {
  w as CopyInput,
  w as default
};
