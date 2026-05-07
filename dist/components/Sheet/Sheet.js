import { jsxs as d, jsx as s } from "react/jsx-runtime";
import "react";
function a({ title: n, byline: e, children: t, footer: i, className: h = "" }) {
  return /* @__PURE__ */ d("div", { className: `nxp-sheet ${h}`, children: [
    (n || e) && /* @__PURE__ */ d("div", { className: "nxp-sheet__head", children: [
      n && /* @__PURE__ */ s("div", { className: "nxp-sheet__title", children: n }),
      e && /* @__PURE__ */ s("div", { className: "nxp-sheet__byline", children: e })
    ] }),
    /* @__PURE__ */ s("div", { className: "nxp-sheet__body", children: t }),
    i && /* @__PURE__ */ s("div", { className: "nxp-sheet__foot", children: i })
  ] });
}
a.Head = function({ children: e, className: t = "" }) {
  return /* @__PURE__ */ s("div", { className: `nxp-sheet__head ${t}`, children: e });
};
a.Title = function({ children: e, className: t = "" }) {
  return /* @__PURE__ */ s("div", { className: `nxp-sheet__title ${t}`, children: e });
};
a.Byline = function({ children: e, className: t = "" }) {
  return /* @__PURE__ */ s("div", { className: `nxp-sheet__byline ${t}`, children: e });
};
a.Body = function({ children: e, className: t = "" }) {
  return /* @__PURE__ */ s("div", { className: `nxp-sheet__body ${t}`, children: e });
};
a.Foot = function({ children: e, className: t = "" }) {
  return /* @__PURE__ */ s("div", { className: `nxp-sheet__foot ${t}`, children: e });
};
export {
  a as Sheet,
  a as default
};
