import { jsx as d, jsxs as t } from "react/jsx-runtime";
import { useEffect as i, useCallback as v } from "react";
import { createPortal as y } from "react-dom";
function b({
  open: l = !1,
  onClose: e,
  size: n = "md",
  title: r,
  byline: c,
  children: s,
  footer: m,
  className: u = ""
}) {
  i(() => {
    if (l) {
      const a = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = a;
      };
    }
  }, [l]);
  const o = v(
    (a) => {
      a.key === "Escape" && e && e();
    },
    [e]
  );
  if (i(() => {
    if (l)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [l, o]), !l) return null;
  const f = n !== "md" ? ` nxp-modal--${n}` : "";
  return y(
    /* @__PURE__ */ d(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (a) => {
          a.target === a.currentTarget && e && e();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": r,
        children: /* @__PURE__ */ t("div", { className: `nxp-modal${f} ${u}`, children: [
          /* @__PURE__ */ t("div", { className: "nxp-modal__head", children: [
            /* @__PURE__ */ t("div", { style: { flex: 1 }, children: [
              r && /* @__PURE__ */ d("div", { className: "nxp-modal__title", children: r }),
              c && /* @__PURE__ */ d("div", { className: "nxp-modal__byline", children: c })
            ] }),
            e && /* @__PURE__ */ d("button", { type: "button", className: "nxp-modal__close", "aria-label": "Close modal", onClick: e, children: "×" })
          ] }),
          /* @__PURE__ */ d("div", { className: "nxp-modal__body", children: s }),
          m && /* @__PURE__ */ d("div", { className: "nxp-modal__foot", children: m })
        ] })
      }
    ),
    document.body
  );
}
export {
  b as Modal,
  b as default
};
