import { jsxs as l, jsx as n } from "react/jsx-runtime";
import "react";
import { cn as m } from "../../lib/utils.js";
const p = "inline-flex items-center justify-center gap-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 select-none", s = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
  ghost: "bg-transparent text-foreground hover:bg-secondary active:bg-secondary/70",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
  outline: "border border-border bg-transparent text-foreground hover:bg-secondary active:bg-secondary/70",
  link: "text-primary underline-offset-4 hover:underline bg-transparent p-0 h-auto"
}, r = {
  sm: "h-7 px-2.5 text-xs rounded-sm",
  md: "h-8 px-3 text-sm rounded",
  lg: "h-9 px-4 text-sm rounded-md",
  icon: "h-8 w-8 p-0 rounded"
};
function x({
  variant: o = "secondary",
  size: i = "md",
  icon: a = !1,
  loading: e = !1,
  disabled: t = !1,
  onClick: d,
  children: c,
  className: u = "",
  ...b
}) {
  return /* @__PURE__ */ l(
    "button",
    {
      className: m(
        p,
        s[o] ?? s.secondary,
        a ? r.icon : r[i] ?? r.md,
        e && "relative text-transparent",
        u
      ),
      disabled: t || e,
      onClick: d,
      "aria-disabled": t || e,
      ...b,
      children: [
        e && /* @__PURE__ */ n(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 flex items-center justify-center",
            children: /* @__PURE__ */ n("span", { className: "nxp-btn__spinner" })
          }
        ),
        c
      ]
    }
  );
}
export {
  x as Button,
  x as default
};
