import { jsx as b } from "react/jsx-runtime";
import { createContext as N, useContext as G } from "react";
const M = {
  none: "0",
  xs: "var(--nxp-space-4)",
  sm: "var(--nxp-space-8)",
  md: "var(--nxp-space-12)",
  lg: "var(--nxp-space-16)",
  xl: "var(--nxp-space-24)",
  "2xl": "var(--nxp-space-32)"
};
function j(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : M[e] ?? e;
}
const k = {
  row: "nxp-flex-row",
  "row-reverse": "nxp-flex-row-reverse",
  column: "nxp-flex-col",
  "column-reverse": "nxp-flex-col-reverse"
}, F = {
  start: "nxp-justify-start",
  end: "nxp-justify-end",
  center: "nxp-justify-center",
  between: "nxp-justify-between",
  around: "nxp-justify-around",
  evenly: "nxp-justify-evenly"
}, L = {
  start: "nxp-items-start",
  end: "nxp-items-end",
  center: "nxp-items-center",
  baseline: "nxp-items-baseline",
  stretch: "nxp-items-stretch"
}, E = {
  wrap: "nxp-flex-wrap",
  nowrap: "nxp-flex-nowrap",
  "wrap-reverse": "nxp-flex-wrap-reverse"
}, O = {
  auto: "nxp-self-auto",
  start: "nxp-self-start",
  end: "nxp-self-end",
  center: "nxp-self-center",
  baseline: "nxp-self-baseline",
  stretch: "nxp-self-stretch"
}, T = {
  auto: "nxp-justify-self-auto",
  start: "nxp-justify-self-start",
  end: "nxp-justify-self-end",
  center: "nxp-justify-self-center",
  stretch: "nxp-justify-self-stretch"
}, C = N({ containerType: "flex", cols: void 0 }), V = () => G(C);
function h(...e) {
  return e.filter(Boolean).join(" ").trim() || void 0;
}
function A({
  containerType: e = "flex",
  gap: f = "sm",
  gapX: r,
  gapY: c,
  direction: a,
  justify: s,
  align: x,
  wrap: l,
  cols: n,
  className: u = "",
  style: v = {},
  as: y = "div",
  children: _,
  ...i
}) {
  const p = {}, o = j(f);
  o && (p.gap = o);
  const m = j(r);
  m && (p.columnGap = m);
  const d = j(c);
  d && (p.rowGap = d);
  const t = {};
  if (e === "grid" && n !== void 0)
    if (typeof n == "object") {
      const g = n.lg ?? n.md ?? n.sm ?? 1;
      t["--nxp-c-cols"] = g, n.md !== void 0 && (t["--nxp-c-cols-md"] = n.md), n.sm !== void 0 && (t["--nxp-c-cols-sm"] = n.sm);
    } else
      t["--nxp-c-cols"] = n;
  const w = h(
    e === "grid" ? "nxp-container--grid" : "nxp-container--flex",
    a && k[a],
    s && F[s],
    x && L[x],
    l && E[l],
    u
  );
  return /* @__PURE__ */ b(C.Provider, { value: { containerType: e, cols: n }, children: /* @__PURE__ */ b(
    y,
    {
      className: w,
      style: { ...p, ...t, ...v },
      ...i,
      children: _
    }
  ) });
}
function P({
  grow: e,
  shrink: f,
  order: r,
  alignSelf: c,
  justifySelf: a,
  colSpan: s,
  rowSpan: x,
  className: l = "",
  style: n = {},
  as: u = "div",
  children: v,
  ...y
}) {
  const { containerType: _ } = V(), i = {};
  let p = "", o = "";
  if (_ === "grid") {
    if (s !== void 0)
      if (s === "full")
        p = "nxp-container__item--span-full";
      else if (typeof s == "object") {
        p = "nxp-container__item--span";
        const I = s.lg ?? s.md ?? s.sm ?? 1;
        i["--nxp-c-span"] = I, s.md !== void 0 && (i["--nxp-c-span-md"] = s.md), s.sm !== void 0 && (i["--nxp-c-span-sm"] = s.sm);
      } else
        p = "nxp-container__item--span", i["--nxp-c-span"] = s;
    x !== void 0 && (o = "nxp-container__item--row-span", i["--nxp-c-row-span"] = x);
  }
  const m = e === 1 ? "nxp-grow" : e === 0 ? "nxp-grow-0" : "", d = f === 1 ? "nxp-shrink" : f === 0 ? "nxp-shrink-0" : "";
  let t = "";
  r === "first" ? t = "nxp-order-first" : r === "last" ? t = "nxp-order-last" : r === 0 ? t = "nxp-order-none" : typeof r == "number" && r >= 1 && r <= 5 && (t = `nxp-order-${r}`);
  const w = h(
    p,
    o,
    m,
    d,
    t,
    c && O[c],
    a && T[a],
    l
  ), g = Object.keys(i).length > 0;
  return /* @__PURE__ */ b(
    u,
    {
      className: w,
      style: g ? { ...i, ...n } : Object.keys(n).length > 0 ? n : void 0,
      ...y,
      children: v
    }
  );
}
A.Item = P;
A.displayName = "Container";
P.displayName = "Container.Item";
export {
  A as Container,
  P as Item,
  A as default
};
