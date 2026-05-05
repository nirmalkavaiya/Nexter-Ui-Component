const a = "nxp-theme", i = {
  default: {
    "--nxp-primary": "221 72% 40%",
    "--nxp-accent": "244 75% 57%",
    "--nxp-radius": "6px",
    "--nxp-radius-sm": "4px",
    "--nxp-radius-lg": "12px"
  },
  rounded: {
    "--nxp-primary": "221 72% 40%",
    "--nxp-accent": "244 75% 57%",
    "--nxp-radius": "10px",
    "--nxp-radius-sm": "6px",
    "--nxp-radius-lg": "16px"
  },
  sharp: {
    "--nxp-primary": "221 72% 40%",
    "--nxp-accent": "244 75% 57%",
    "--nxp-radius": "2px",
    "--nxp-radius-sm": "1px",
    "--nxp-radius-lg": "4px"
  },
  ocean: {
    "--nxp-primary": "200 85% 40%",
    "--nxp-accent": "180 70% 45%",
    "--nxp-radius": "8px",
    "--nxp-radius-sm": "4px",
    "--nxp-radius-lg": "14px"
  },
  rose: {
    "--nxp-primary": "346 77% 49%",
    "--nxp-accent": "330 80% 55%",
    "--nxp-radius": "8px",
    "--nxp-radius-sm": "4px",
    "--nxp-radius-lg": "14px"
  }
};
function r() {
  return typeof document < "u" ? document.documentElement : null;
}
function x(t, n) {
  const e = r();
  e && e.style.setProperty(t, n);
}
function o(t) {
  const n = r();
  n && Object.entries(t).forEach(([e, p]) => {
    n.style.setProperty(e, p);
  });
}
function c(t) {
  const n = i[t];
  n && o(n);
}
function s(t) {
  const n = r();
  if (n) {
    n.classList.remove("dark", "nxp-dark", "nxp-light"), n.removeAttribute("data-theme"), t === "dark" ? (n.classList.add("nxp-dark"), n.setAttribute("data-theme", "dark")) : t === "light" && (n.classList.add("nxp-light"), n.setAttribute("data-theme", "light"));
    try {
      localStorage.setItem(a, t);
    } catch {
    }
  }
}
function d() {
  const t = r();
  if (!t) return;
  const n = t.classList.contains("nxp-dark") || t.getAttribute("data-theme") === "dark";
  s(n ? "light" : "dark");
}
function u() {
  try {
    const t = localStorage.getItem(a);
    t && s(t);
  } catch {
  }
}
export {
  i as PRESETS,
  c as applyPreset,
  u as initTheme,
  s as setColorMode,
  o as setTheme,
  x as setToken,
  d as toggleDark
};
