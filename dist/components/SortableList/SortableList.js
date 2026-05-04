import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { useState as b, useCallback as a } from "react";
const B = () => /* @__PURE__ */ m("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e("circle", { cx: "4.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "4.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "4.5", cy: "10.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "9.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "9.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "9.5", cy: "10.5", r: "1", fill: "currentColor" })
] });
function T({
  items: s = [],
  onChange: t,
  renderItem: x,
  disabled: i = !1,
  className: g = "",
  /* translatable */
  dragHandleLabel: f = "Drag to reorder"
}) {
  const [o, n] = b(null), [d, c] = b(null), _ = a((l, r) => {
    n(l), r.dataTransfer.effectAllowed = "move", r.dataTransfer.setData("text/plain", String(l));
  }, []), D = a((l, r) => {
    r.preventDefault(), r.dataTransfer.dropEffect = "move", l !== d && c(l);
  }, [d]), h = a((l) => {
    if (o === null || o === l) {
      n(null), c(null);
      return;
    }
    const r = [...s], [p] = r.splice(o, 1);
    r.splice(l, 0, p), t == null || t(r), n(null), c(null);
  }, [o, s, t]), y = a(() => {
    n(null), c(null);
  }, []), N = ["nxp-sortable", i ? "nxp-sortable--disabled" : "", g].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: N, role: "list", children: s.map((l, r) => {
    const p = o === r, v = d === r && o !== null && o !== r, S = v && o > r, j = v && o < r;
    return /* @__PURE__ */ m(
      "div",
      {
        role: "listitem",
        className: [
          "nxp-sortable__item",
          p ? "nxp-sortable__item--dragging" : "",
          S ? "nxp-sortable__item--over-top" : "",
          j ? "nxp-sortable__item--over-bottom" : ""
        ].filter(Boolean).join(" "),
        draggable: !i,
        onDragStart: (u) => _(r, u),
        onDragOver: (u) => D(r, u),
        onDrop: () => h(r),
        onDragEnd: y,
        "aria-roledescription": "sortable item",
        children: [
          !i && /* @__PURE__ */ e(
            "span",
            {
              className: "nxp-sortable__handle",
              "aria-label": f,
              title: f,
              children: /* @__PURE__ */ e(B, {})
            }
          ),
          /* @__PURE__ */ e("div", { className: "nxp-sortable__content", children: x ? x(l, r) : /* @__PURE__ */ e("span", { className: "nxp-sortable__label", children: l.label ?? l.id }) })
        ]
      },
      l.id ?? r
    );
  }) });
}
export {
  T as SortableList,
  T as default
};
