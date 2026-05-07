import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useRef as Z, useState as j, useCallback as $ } from "react";
const q = () => /* @__PURE__ */ c("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("path", { d: "M14 18V10M14 10l-3.5 3.5M14 10l3.5 3.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "24", height: "24", rx: "6", stroke: "currentColor", strokeWidth: "1.4", strokeDasharray: "4 3" })
] }), G = () => /* @__PURE__ */ c("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("path", { d: "M13 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-7Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
  /* @__PURE__ */ e("path", { d: "M13 2v7h7", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" })
] }), Q = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M2 2l8 8M10 2l-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), X = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "5.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ e("path", { d: "M4 7c0-1.66 1.34-3 3-3a3 3 0 0 1 2.83 2M7 10a3 3 0 0 1-2.83-2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
  /* @__PURE__ */ e("path", { d: "M7 4.5v5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] });
function b(t) {
  return t < 1024 ? `${t} B` : t < 1048576 ? `${(t / 1024).toFixed(1)} KB` : `${(t / 1048576).toFixed(1)} MB`;
}
function Y(t) {
  if (typeof t == "string") return /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(t);
  const n = (t == null ? void 0 : t.type) ?? (t == null ? void 0 : t.mime_type) ?? "", _ = (t == null ? void 0 : t.name) ?? (t == null ? void 0 : t.filename) ?? "";
  return n.startsWith("image/") || /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(_);
}
function C(t) {
  return typeof t == "string" ? t : t != null && t.url ? t.url : t instanceof File ? URL.createObjectURL(t) : "";
}
function S(t) {
  return typeof t == "string" ? t.split("/").pop() : (t == null ? void 0 : t.filename) ?? (t == null ? void 0 : t.name) ?? (t == null ? void 0 : t.url) ?? "file";
}
function rt({
  value: t = [],
  // File[] | WPMedia[] | string[]
  onChange: n,
  accept: _ = "*/*",
  multiple: l = !1,
  maxSize: m,
  // bytes
  maxFiles: i,
  disabled: a = !1,
  showPreview: M = !0,
  /* WP Media integration */
  wpMedia: x = !1,
  wpMediaTitle: w = "Select Media",
  wpMediaButton: N = "Use this media",
  wpMediaType: k,
  // 'image' | 'video' | undefined
  /* translatable */
  dropText: D = "Drag & drop files here, or",
  browseText: I = "Browse",
  wpMediaText: F = "Media Library",
  maxSizeText: f,
  removeFileLabel: R = "Remove file",
  errorSizeText: y = (p, g) => `"${p}" exceeds the ${b(g)} limit`,
  errorMaxText: B = (p) => `Maximum ${p} file(s) allowed`,
  className: U = ""
}) {
  const p = Z(null), [g, v] = j(!1), [z, O] = j([]), P = $(() => {
    var o;
    if (!((o = window.wp) != null && o.media)) return;
    const r = window.wp.media({
      title: w,
      button: { text: N },
      multiple: l,
      library: k ? { type: k } : void 0
    });
    r.on("select", () => {
      const s = r.state().get("selection").toJSON(), u = l ? [...t, ...s].slice(0, i ?? 1 / 0) : [s[0]];
      n == null || n(u);
    }), r.open();
  }, [t, l, i, w, N, k, n]), L = $((r) => {
    const o = Array.from(r), s = [], u = o.filter((W) => m && W.size > m ? (s.push(y(W.name, m)), !1) : !0), d = l ? [...t, ...u] : [u[0]].filter(Boolean), h = i ? d.slice(0, i) : d;
    i && d.length > i && s.push(B(i)), O(s), h.length && (n == null || n(h));
  }, [t, l, i, m, y, B, n]), V = (r) => {
    r.preventDefault(), v(!0);
  }, A = () => v(!1), E = (r) => {
    r.preventDefault(), v(!1), a || L(r.dataTransfer.files);
  }, H = (r) => {
    L(r.target.files), r.target.value = "";
  }, J = (r) => n == null ? void 0 : n(t.filter((o, s) => s !== r)), K = [
    "nxp-upload__zone",
    g ? "nxp-upload__zone--over" : "",
    a ? "nxp-upload__zone--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: ["nxp-upload", U].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: K,
        onDragOver: V,
        onDragLeave: A,
        onDrop: E,
        onClick: () => {
          var r;
          return !a && !x && ((r = p.current) == null ? void 0 : r.click());
        },
        "aria-label": "File upload area",
        children: [
          /* @__PURE__ */ e(q, {}),
          /* @__PURE__ */ e("span", { className: "nxp-upload__drop-text", children: D }),
          /* @__PURE__ */ c("div", { className: "nxp-upload__actions", children: [
            x && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse nxp-upload__browse--wp",
                onClick: (r) => {
                  r.stopPropagation(), a || P();
                },
                disabled: a,
                children: [
                  /* @__PURE__ */ e(X, {}),
                  F
                ]
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse",
                onClick: (r) => {
                  var o;
                  r.stopPropagation(), a || (o = p.current) == null || o.click();
                },
                disabled: a,
                children: I
              }
            )
          ] }),
          f && /* @__PURE__ */ e("span", { className: "nxp-upload__hint", children: f }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: p,
              type: "file",
              accept: _,
              multiple: l,
              className: "nxp-hidden",
              onChange: H,
              disabled: a
            }
          )
        ]
      }
    ),
    z.map((r, o) => /* @__PURE__ */ e("p", { className: "nxp-upload__error", role: "alert", children: r }, o)),
    M && t.length > 0 && /* @__PURE__ */ e("div", { className: "nxp-upload__preview", children: t.map((r, o) => {
      const s = Y(r), u = C(r), d = S(r), h = r instanceof File ? b(r.size) : null;
      return /* @__PURE__ */ c("div", { className: "nxp-upload__item", children: [
        /* @__PURE__ */ e("div", { className: "nxp-upload__item-thumb", children: s ? /* @__PURE__ */ e("img", { src: u, alt: d, className: "nxp-upload__item-img" }) : /* @__PURE__ */ e(G, {}) }),
        /* @__PURE__ */ c("div", { className: "nxp-upload__item-info", children: [
          /* @__PURE__ */ e("span", { className: "nxp-upload__item-name", children: d }),
          h && /* @__PURE__ */ e("span", { className: "nxp-upload__item-size", children: h })
        ] }),
        !a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "nxp-upload__item-remove",
            onClick: () => J(o),
            "aria-label": `${R}: ${d}`,
            children: /* @__PURE__ */ e(Q, {})
          }
        )
      ] }, o);
    }) })
  ] });
}
export {
  rt as FileUpload,
  rt as default
};
