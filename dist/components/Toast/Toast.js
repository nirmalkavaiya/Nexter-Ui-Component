import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { memo as d } from "react";
const r = () => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "none", viewBox: "0 0 18 18", "aria-hidden": "true", children: [
  /* @__PURE__ */ a("path", { fill: "#0BAA60", d: "M8.194.022a9.163 9.163 0 0 0-4.758 1.894c-.687.529-1.578 1.522-2.093 2.332-.222.348-.655 1.236-.81 1.658a10.94 10.94 0 0 0-.451 1.758c-.11.686-.11 1.99 0 2.676.158.972.409 1.754.835 2.623.465.948.948 1.62 1.723 2.399.779.774 1.452 1.257 2.4 1.722.87.426 1.652.676 2.625.834.687.11 1.99.11 2.678 0a8.894 8.894 0 0 0 2.625-.834c.948-.465 1.621-.948 2.4-1.723.775-.778 1.258-1.45 1.723-2.398.31-.63.465-1.042.634-1.676.222-.845.275-1.306.275-2.285 0-.98-.053-1.44-.275-2.286a8.07 8.07 0 0 0-.634-1.676c-.465-.947-.948-1.62-1.723-2.398-.779-.775-1.452-1.257-2.4-1.722a8.761 8.761 0 0 0-2.607-.828c-.518-.08-1.674-.12-2.167-.07Z" }),
  /* @__PURE__ */ a("path", { fill: "#fff", d: "M13.722 5.135c.176.056.447.32.521.514a.98.98 0 0 1-.021.722c-.113.229-5.913 5.983-6.174 6.127a.844.844 0 0 1-.803-.003c-.148-.077-2.819-2.469-3.274-2.93a.87.87 0 0 1-.264-.651c.007-.532.398-.891.927-.856.127.01.282.042.342.077.095.046 1.874 1.648 2.452 2.201l.166.162 2.635-2.63c1.449-1.444 2.682-2.652 2.746-2.684.243-.123.461-.137.747-.049Z" })
] }), h = () => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "none", viewBox: "0 0 18 18", "aria-hidden": "true", children: [
  /* @__PURE__ */ a("circle", { cx: "9", cy: "9", r: "9", fill: "#E5484D" }),
  /* @__PURE__ */ a("path", { fill: "#fff", d: "M12.182 5.818a.875.875 0 0 0-1.237 0L9 7.763 7.055 5.818a.875.875 0 1 0-1.237 1.237L7.763 9l-1.945 1.945a.875.875 0 1 0 1.237 1.237L9 10.237l1.945 1.945a.875.875 0 1 0 1.237-1.237L10.237 9l1.945-1.945a.875.875 0 0 0 0-1.237Z" })
] });
function f({ variant: l = "default", icon: e, title: s, description: c, onClose: i, className: n = "" }) {
  const o = e !== void 0 ? e : l === "error" ? /* @__PURE__ */ a(h, {}) : /* @__PURE__ */ a(r, {});
  return /* @__PURE__ */ t("div", { className: `nxp-toast${l !== "default" ? ` nxp-toast--${l}` : ""} ${n}`, role: "alert", "aria-live": "assertive", children: [
    o && /* @__PURE__ */ a("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: o }),
    /* @__PURE__ */ t("div", { className: "nxp-toast__body", children: [
      s && /* @__PURE__ */ a("div", { className: "nxp-toast__title", children: s }),
      c && /* @__PURE__ */ a("div", { className: "nxp-toast__desc", children: c })
    ] }),
    i && /* @__PURE__ */ a("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: i, children: /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ a("path", { fill: "#000", d: "m11.474 10 3.977 3.977-1.473 1.473L10 11.473 6.023 15.45 4.55 13.977 8.527 10 4.55 6.022 6.023 4.55 10 8.527l3.978-3.978 1.473 1.473L11.474 10Z" }) }) })
  ] });
}
const x = d(f);
export {
  x as Toast,
  x as default
};
