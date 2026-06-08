import React, { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import { sanitizeHtml } from '../../lib/sanitize';

/* ── Icons ───────────────────────────────────────────────────── */
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="9" height="8" viewBox="0 0 11 9" fill="none" aria-hidden="true">
    <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 19h20v2H2v-2zm2-3l3-9 4 6 3-9 3 9 3-6v9H4v-0z" />
    <path d="M4 7l3 9h10l3-9-4 6-4-6-4 6-4-6z" fillOpacity="0.85" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="3"  cy="8" r="2" />
    <circle cx="21" cy="8" r="2" />
  </svg>
);

/**
 * ProPopup
 *
 * A branded upgrade / upsell popup with a deep-blue card, feature list,
 * a prominent CTA button, and an optional bottom note.
 *
 * Props:
 *   open            {boolean}            — show / hide
 *   details         {object}             — optional grouped content (title, list, buttonText, …)
 *   title           {string|ReactNode}   — heading
 *   list            {string[]}           — feature bullet items (checkmark auto-added)
 *   buttonText      {string}             — CTA label (default "Upgrade Now")
 *   buttonLink      {string}             — URL opened in new tab
 *   onButtonClick   {() => void}         — JS callback on CTA click (use instead of or alongside buttonLink)
 *   buttonIcon      {ReactNode}          — icon inside CTA (default Crown SVG)
 *   bottomText      {string|ReactNode}   — small italic note below button (HTML-aware)
 *   onClose         {() => void}         — called when X, backdrop, or Escape is pressed
 *   closeOnOverlay  {boolean}            — click backdrop to close (default true)
 *   closeOnEscape   {boolean}            — press Escape to close (default true)
 *   portal          {boolean}            — portal to document.body (default true); false = inline render
 *   container       {Element}            — custom portal mount (default document.body)
 *   lockScroll      {boolean}            — lock body scroll when open (default: same as portal)
 *   className       {string}             — extra classes on the card
 */
function ProPopup({
  open           = false,
  portal         = true,
  container,
  lockScroll,
  details,
  title,
  list,
  buttonText,
  buttonLink,
  onButtonClick,
  buttonIcon,
  bottomText,
  onClose,
  closeOnOverlay,
  closeOnEscape,
  className      = '',
}) {
  const backdropRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  const resolvedTitle = title ?? details?.title;
  const resolvedList = list ?? details?.list ?? [];
  const resolvedButtonText = buttonText ?? details?.buttonText ?? 'Upgrade Now';
  const resolvedButtonLink = buttonLink ?? details?.buttonLink;
  const resolvedOnButtonClick = onButtonClick ?? details?.onButtonClick;
  const resolvedButtonIcon = buttonIcon !== undefined ? buttonIcon : details?.buttonIcon;
  const resolvedBottomText = bottomText ?? details?.bottomText;
  const resolvedCloseOnOverlay = closeOnOverlay ?? details?.closeOnOverlay ?? true;
  const resolvedCloseOnEscape = closeOnEscape ?? details?.closeOnEscape ?? true;
  const resolvedPortal = portal ?? details?.portal ?? true;
  const resolvedContainer = container ?? details?.container;
  const resolvedLockScroll = lockScroll ?? details?.lockScroll ?? resolvedPortal;

  /* ── Scroll lock ── */
  useEffect(() => {
    if (open && resolvedLockScroll) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open, resolvedLockScroll]);

  /* ── Esc to close (capture phase beats WP admin / nested handlers) ── */
  const handleKey = useCallback((e) => {
    if (e.key !== 'Escape' || !resolvedCloseOnEscape) return;
    const close = onCloseRef.current;
    if (typeof close !== 'function') return;
    e.preventDefault();
    e.stopPropagation();
    close();
  }, [resolvedCloseOnEscape]);

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKey, true);
    return () => document.removeEventListener('keydown', handleKey, true);
  }, [open, handleKey]);

  /* ── Focus backdrop so keyboard events reach the dialog ── */
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => backdropRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  if (!open) return null;

  /* ── HTML-aware bottomText ── */
  const isBottomHtml =
    typeof resolvedBottomText === 'string' && /<[a-z][\s\S]*>/i.test(resolvedBottomText);

  /* ── CTA handler ── */
  const handleCta = (e) => {
    if (resolvedOnButtonClick) resolvedOnButtonClick(e);
    if (resolvedButtonLink) {
      window.open(resolvedButtonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const icon = resolvedButtonIcon !== undefined ? resolvedButtonIcon : <CrownIcon />;

  const popup = (
    <div
      ref={backdropRef}
      tabIndex={-1}
      className={cn('nxp-pp-backdrop', !resolvedPortal && 'nxp-pp-backdrop--inline')}
      onMouseDown={(e) => {
        if (resolvedCloseOnOverlay && e.target === e.currentTarget && typeof onClose === 'function') onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={typeof resolvedTitle === 'string' ? resolvedTitle : 'Upgrade popup'}
    >
      <div className={cn('nxp-pp', className)}>

        {/* ── Close ── */}
        {onClose && (
          <button
            type="button"
            className="nxp-pp__close"
            aria-label="Close popup"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        )}

        {/* ── Title ── */}
        {resolvedTitle && (
          <div className="nxp-pp__title">{resolvedTitle}</div>
        )}

        {/* ── Feature list ── */}
        {resolvedList.length > 0 && (
          <ul className="nxp-pp__list" role="list">
            {resolvedList.map((item, i) => (
              <li key={i} className="nxp-pp__list-item">
                <span className="nxp-pp__check" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* ── CTA Button ── */}
        {(resolvedButtonLink || resolvedOnButtonClick) && (
          <button
            type="button"
            className="nxp-pp__btn"
            onClick={handleCta}
          >
            {icon && <span className="nxp-pp__btn-icon">{icon}</span>}
            {resolvedButtonText}
          </button>
        )}

        {/* ── Bottom note ── */}
        {resolvedBottomText && (
          isBottomHtml ? (
            <p
              className="nxp-pp__bottom"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(resolvedBottomText) }}
            />
          ) : (
            <p className="nxp-pp__bottom">{resolvedBottomText}</p>
          )
        )}

      </div>
    </div>
  );

  if (!resolvedPortal) return popup;

  const mountNode = resolvedContainer ?? (typeof document !== 'undefined' ? document.body : null);
  if (!mountNode) return null;

  return createPortal(popup, mountNode);
}

export { ProPopup };
export default ProPopup;
