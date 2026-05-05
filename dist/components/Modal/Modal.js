import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useEffect as i, useCallback as v } from "react";
import { createPortal as y } from "react-dom";
const w = () => /* @__PURE__ */ e(
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
function g({
  open: n = !1,
  onClose: a,
  size: l = "md",
  align: m = "left",
  title: r,
  byline: o,
  children: u,
  footer: s,
  className: f = ""
}) {
  i(() => {
    if (n) {
      const d = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = d;
      };
    }
  }, [n]);
  const t = v(
    (d) => {
      d.key === "Escape" && a && a();
    },
    [a]
  );
  if (i(() => {
    if (n)
      return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
  }, [n, t]), !n) return null;
  const p = l !== "md" ? ` nxp-modal--${l}` : "", x = m === "center" ? " nxp-modal--center" : "", h = r || o || a;
  return y(
    /* @__PURE__ */ e(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (d) => {
          d.target === d.currentTarget && a && a();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof r == "string" ? r : void 0,
        children: /* @__PURE__ */ c("div", { className: `nxp-modal${p}${x} ${f}`.trim(), children: [
          a && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "nxp-modal__close",
              "aria-label": "Close modal",
              onClick: a,
              children: /* @__PURE__ */ e(w, {})
            }
          ),
          h && /* @__PURE__ */ c("div", { className: "nxp-flex nxp-flex-col-center nxp-justify-center nxp-modal__head", children: [
            r && /* @__PURE__ */ e("div", { className: "nxp-modal__title", children: r }),
            o && /* @__PURE__ */ e("div", { className: "nxp-modal__byline", children: o })
          ] }),
          /* @__PURE__ */ e("div", { className: "nxp-modal__body", children: u }),
          s && /* @__PURE__ */ e("div", { className: "nxp-modal__foot", children: s })
        ] })
      }
    ),
    document.body
  );
}
export {
  g as Modal,
  g as default
};
