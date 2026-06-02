import { jsx as e, jsxs as i, Fragment as F } from "react/jsx-runtime";
import { useEffect as u, useCallback as M } from "react";
import { createPortal as S } from "react-dom";
import { cn as z } from "../../lib/utils.js";
import { sanitizeHtml as I } from "../../lib/sanitize.js";
import { CloseIcon as P } from "../../lib/icons.js";
import { Button as x } from "../Button/Button.js";
function q({
  open: n = !1,
  onClose: t,
  size: p = "md",
  align: h = "left",
  title: o,
  byline: a,
  children: v,
  footer: l,
  footerClassName: y,
  doclink: d,
  doclinkText: _,
  buttonText: b,
  onClick: s,
  className: g = ""
}) {
  u(() => {
    if (n) {
      const r = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = r;
      };
    }
  }, [n]);
  const m = M(
    (r) => {
      r.key === "Escape" && t && t();
    },
    [t]
  );
  u(() => {
    if (n)
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [n, m]);
  const f = !!(d || s), c = l != null && l !== !0 && l !== !1, w = c || f, N = !c && f ? d && s ? "nxp-flex-between" : s ? "nxp-flex-end" : "nxp-flex-start" : "";
  if (!n) return null;
  const L = p !== "md" ? ` nxp-modal--${p}` : "", H = h === "center" ? " nxp-modal--center" : "", E = o || a, $ = _ ?? "Read How it Works", j = b ?? "Save", B = typeof a == "string" && /<[a-z][\s\S]*>/i.test(a);
  return S(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (r) => {
          r.target === r.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof o == "string" ? o : void 0,
        children: /* @__PURE__ */ i("div", { className: `nxp-modal${L}${H} ${g}`.trim(), children: [
          t && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "nxp-modal__close",
              "aria-label": "Close modal",
              onClick: t,
              children: /* @__PURE__ */ e(P, {})
            }
          ),
          E && /* @__PURE__ */ i("div", { className: "nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head", children: [
            o && /* @__PURE__ */ e("div", { className: "nxp-modal__title", children: o }),
            a && (B ? /* @__PURE__ */ e(
              "div",
              {
                className: "nxp-modal__byline",
                dangerouslySetInnerHTML: { __html: I(a) }
              }
            ) : /* @__PURE__ */ e("div", { className: "nxp-modal__byline", children: a }))
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-modal__body", children: v }),
          w && /* @__PURE__ */ e(
            "div",
            {
              className: z("nxp-modal__foot", N, y),
              children: c ? l : /* @__PURE__ */ i(F, { children: [
                d && /* @__PURE__ */ e(
                  x,
                  {
                    className: "nxp-text-primary nxp-weight-regular nxp-text-hover",
                    variant: "underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: d,
                    children: $
                  }
                ),
                s && /* @__PURE__ */ e(x, { type: "button", variant: "primary", onClick: s, children: j })
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
  q as Modal,
  q as default
};
