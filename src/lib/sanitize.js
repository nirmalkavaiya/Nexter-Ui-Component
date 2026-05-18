/**
 * sanitizeHtml — lightweight HTML sanitizer (no external deps).
 *
 * Strips <script>, <iframe>, <object>, <embed>, <form> tags and all
 * inline on* event attributes before passing to dangerouslySetInnerHTML.
 *
 * Use only when the HTML-string detection pattern fires
 * (/<[a-z][\s\S]*>/i.test(str)).
 */
const DANGEROUS_TAGS = /<(script|iframe|object|embed|form|base|meta|link|style)[^>]*>[\s\S]*?<\/\1>/gi;
const DANGEROUS_TAGS_VOID = /<(script|iframe|object|embed|form|base|meta|link|style)[^>]*\/?>/gi;
const EVENT_ATTRS = /\s+on\w+\s*=\s*["'][^"']*["']/gi;
const JAVASCRIPT_HREF = /href\s*=\s*["']\s*javascript:[^"']*["']/gi;

export function sanitizeHtml(html) {
  if (typeof html !== 'string') return html;
  return html
    .replace(DANGEROUS_TAGS, '')
    .replace(DANGEROUS_TAGS_VOID, '')
    .replace(EVENT_ATTRS, '')
    .replace(JAVASCRIPT_HREF, 'href="#"');
}
