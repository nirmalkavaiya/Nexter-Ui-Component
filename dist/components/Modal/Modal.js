import { jsx as e, jsxs as p, Fragment as S } from "react/jsx-runtime";
import { useEffect as v, useCallback as y, useMemo as u } from "react";
import { createPortal as k } from "react-dom";
import { cn as D } from "../../lib/utils.js";
import { sanitizeHtml as I } from "../../lib/sanitize.js";
import { CloseIcon as P } from "../../lib/icons.js";
import { Button as _ } from "../Button/Button.js";
function G({
  open: n = !1,
  onClose: t,
  size: m = "md",
  align: f = "left",
  title: r,
  byline: a,
  children: b,
  footer: s,
  footerClassName: w,
  doclink: l,
  doclinkText: g,
  buttonText: N,
  onClick: d,
  className: x = ""
}) {
  v(() => {
    if (n) {
      const o = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = o;
      };
    }
  }, [n]);
  const c = y(
    (o) => {
      o.key === "Escape" && t && t();
    },
    [t]
  );
  v(() => {
    if (n)
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [n, c]);
  const h = !!(l || d), i = s != null && s !== !0 && s !== !1, L = i || h, B = !i && h ? l && d ? "nxp-flex-between" : d ? "nxp-flex-end" : "nxp-flex-start" : "", H = u(
    () => `nxp-modal${m !== "md" ? ` nxp-modal--${m}` : ""}${f === "center" ? " nxp-modal--center" : ""} ${x}`.trim(),
    [m, f, x]
  ), M = u(() => !!(r || a), [r, a]), E = u(
    () => typeof a == "string" && /<[a-z][\s\S]*>/i.test(a),
    [a]
  ), $ = g ?? "Read How it Works", j = N ?? "Save", F = y(
    (o) => {
      o.target === o.currentTarget && t && t();
    },
    [t]
  );
  return n ? k(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: F,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof r == "string" ? r : void 0,
        children: /* @__PURE__ */ p("div", { className: H, children: [
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
          M && /* @__PURE__ */ p("div", { className: "nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head", children: [
            r && /* @__PURE__ */ e("div", { className: "nxp-modal__title", children: r }),
            a && (E ? /* @__PURE__ */ e(
              "div",
              {
                className: "nxp-modal__byline",
                dangerouslySetInnerHTML: { __html: I(a) }
              }
            ) : /* @__PURE__ */ e("div", { className: "nxp-modal__byline", children: a }))
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-modal__body", children: b }),
          L && /* @__PURE__ */ e(
            "div",
            {
              className: D("nxp-modal__foot", B, w),
              children: i ? s : /* @__PURE__ */ p(S, { children: [
                l && /* @__PURE__ */ e(
                  _,
                  {
                    className: "nxp-text-primary nxp-weight-regular nxp-text-hover",
                    variant: "underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: l,
                    children: $
                  }
                ),
                d && /* @__PURE__ */ e(_, { type: "button", variant: "primary", onClick: d, children: j })
              ] })
            }
          )
        ] })
      }
    ),
    document.body
  ) : null;
}
export {
  G as Modal,
  G as default
};
