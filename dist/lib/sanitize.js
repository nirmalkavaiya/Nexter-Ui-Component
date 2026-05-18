const s = /<(script|iframe|object|embed|form|base|meta|link|style)[^>]*>[\s\S]*?<\/\1>/gi, r = /<(script|iframe|object|embed|form|base|meta|link|style)[^>]*\/?>/gi, t = /\s+on\w+\s*=\s*["'][^"']*["']/gi, i = /href\s*=\s*["']\s*javascript:[^"']*["']/gi;
function c(e) {
  return typeof e != "string" ? e : e.replace(s, "").replace(r, "").replace(t, "").replace(i, 'href="#"');
}
export {
  c as sanitizeHtml
};
