import { jsxs as h, jsx as e } from "react/jsx-runtime";
import "react";
function l({ title: s, byline: a, children: n, footer: d, className: c = "" }) {
  return /* @__PURE__ */ h("div", { className: `nxp-sheet ${c}`, children: [
    (s || a) && /* @__PURE__ */ h("div", { className: "nxp-sheet__head", children: [
      s && /* @__PURE__ */ e("div", { className: "nxp-sheet__title", children: s }),
      a && /* @__PURE__ */ e("div", { className: "nxp-sheet__byline", children: a })
    ] }),
    /* @__PURE__ */ e("div", { className: "nxp-sheet__body", children: n }),
    d && /* @__PURE__ */ e("div", { className: "nxp-sheet__foot", children: d })
  ] });
}
export {
  l as Sheet,
  l as default
};
