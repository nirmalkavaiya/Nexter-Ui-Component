import { jsx as e, jsxs as c, Fragment as E } from "react/jsx-runtime";
import { useEffect as x, useCallback as $ } from "react";
import { createPortal as F } from "react-dom";
import { cn as S } from "../../lib/utils.js";
import { sanitizeHtml as z } from "../../lib/sanitize.js";
import { Button as f } from "../Button/Button.js";
const I = () => /* @__PURE__ */ e(
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
  open: n = !1,
  onClose: t,
  size: p = "md",
  align: h = "left",
  title: o,
  byline: r,
  children: v,
  footer: l,
  footerClassName: y,
  doclink: d,
  doclinkText: _,
  buttonText: w,
  onClick: s,
  className: g = ""
}) {
  x(() => {
    if (n) {
      const a = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = a;
      };
    }
  }, [n]);
  const i = $(
    (a) => {
      a.key === "Escape" && t && t();
    },
    [t]
  );
  x(() => {
    if (n)
      return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, i]);
  const u = !!(d || s), m = l != null && l !== !0 && l !== !1, b = m || u, L = !m && u ? d && s ? "nxp-flex-between" : s ? "nxp-flex-end" : "nxp-flex-start" : "";
  if (!n) return null;
  const N = p !== "md" ? ` nxp-modal--${p}` : "", k = h === "center" ? " nxp-modal--center" : "", H = o || r || t, M = _ ?? "Read How it Works", j = w ?? "Save", B = typeof r == "string" && /<[a-z][\s\S]*>/i.test(r);
  return F(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (a) => {
          a.target === a.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof o == "string" ? o : void 0,
        children: /* @__PURE__ */ c("div", { className: `nxp-modal${N}${k} ${g}`.trim(), children: [
          t && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "nxp-modal__close",
              "aria-label": "Close modal",
              onClick: t,
              children: /* @__PURE__ */ e(I, {})
            }
          ),
          H && /* @__PURE__ */ c("div", { className: "nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head", children: [
            o && /* @__PURE__ */ e("div", { className: "nxp-modal__title", children: o }),
            r && (B ? /* @__PURE__ */ e(
              "div",
              {
                className: "nxp-modal__byline",
                dangerouslySetInnerHTML: { __html: z(r) }
              }
            ) : /* @__PURE__ */ e("div", { className: "nxp-modal__byline", children: r }))
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-modal__body", children: v }),
          b && /* @__PURE__ */ e(
            "div",
            {
              className: S("nxp-modal__foot", L, y),
              children: m ? l : /* @__PURE__ */ c(E, { children: [
                d && /* @__PURE__ */ e(
                  f,
                  {
                    className: "nxp-text-primary nxp-weight-regular nxp-text-hover",
                    variant: "underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: d,
                    children: M
                  }
                ),
                s && /* @__PURE__ */ e(f, { type: "button", variant: "primary", onClick: s, children: j })
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
