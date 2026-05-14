import { jsx as e, jsxs as m, Fragment as $ } from "react/jsx-runtime";
import { useEffect as x, useCallback as B } from "react";
import { createPortal as F } from "react-dom";
import { cn as H } from "../../lib/utils.js";
import { Button as f } from "../Button/Button.js";
const P = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M12 4L4 12M4 4L12 12",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function R({
  open: a = !1,
  onClose: r,
  size: p = "md",
  align: h = "left",
  title: n,
  byline: l,
  children: v,
  footer: d,
  footerClassName: y,
  doclink: s,
  doclinkText: w,
  buttonText: b,
  onClick: o,
  className: g = ""
}) {
  x(() => {
    if (a) {
      const t = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = t;
      };
    }
  }, [a]);
  const c = B(
    (t) => {
      t.key === "Escape" && r && r();
    },
    [r]
  );
  x(() => {
    if (a)
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [a, c]);
  const u = !!(s || o), i = d != null && d !== !0 && d !== !1, _ = i || u, L = !i && u ? s && o ? "nxp-flex-between" : o ? "nxp-flex-end" : "nxp-flex-start" : "";
  if (!a) return null;
  const N = p !== "md" ? ` nxp-modal--${p}` : "", k = h === "center" ? " nxp-modal--center" : "", j = n || l || r, E = w ?? "Read How it Works", M = b ?? "Save";
  return F(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (t) => {
          t.target === t.currentTarget && r && r();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof n == "string" ? n : void 0,
        children: /* @__PURE__ */ m("div", { className: `nxp-modal${N}${k} ${g}`.trim(), children: [
          r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "nxp-modal__close",
              "aria-label": "Close modal",
              onClick: r,
              children: /* @__PURE__ */ e(P, {})
            }
          ),
          j && /* @__PURE__ */ m("div", { className: "nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head", children: [
            n && /* @__PURE__ */ e("div", { className: "nxp-modal__title", children: n }),
            l && /* @__PURE__ */ e("div", { className: "nxp-modal__byline", children: l })
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-modal__body", children: v }),
          _ && /* @__PURE__ */ e(
            "div",
            {
              className: H("nxp-modal__foot", L, y),
              children: i ? d : /* @__PURE__ */ m($, { children: [
                s && /* @__PURE__ */ e(
                  f,
                  {
                    className: "nxp-text-primary nxp-weight-regular nxp-text-hover",
                    variant: "underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: s,
                    children: E
                  }
                ),
                o && /* @__PURE__ */ e(f, { type: "button", variant: "primary", onClick: o, children: M })
              ] })
            }
          )
        ] })
      }
    ),
    document.body
  );
}
export {
  R as Modal,
  R as default
};
