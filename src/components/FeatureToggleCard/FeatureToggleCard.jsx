import React from 'react';
import { Toggle } from '../Toggle/Toggle';
import { Tooltip } from '../Tooltip/Tooltip';

/* ─── SVG icons ────────────────────────────────────────────────────────── */

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="4.25" r="0.875" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path
      d="M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.03 9.22a1 1 0 0 0 .2 1.1l.04.04a1.21 1.21 0 0 1-1.71 1.71l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91v.11a1.21 1.21 0 0 1-2.42 0v-.06a1 1 0 0 0-.66-.91 1 1 0 0 0-1.1.2l-.04.04a1.21 1.21 0 0 1-1.71-1.71l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H2.1a1.21 1.21 0 0 1 0-2.42h.06a1 1 0 0 0 .91-.66 1 1 0 0 0-.2-1.1l-.04-.04a1.21 1.21 0 0 1 1.71-1.71l.04.04a1 1 0 0 0 1.1.2h.05a1 1 0 0 0 .6-.91V2.1a1.21 1.21 0 0 1 2.42 0v.06a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.04a1.21 1.21 0 0 1 1.71 1.71l-.04.04a1 1 0 0 0-.2 1.1v.05a1 1 0 0 0 .91.6h.11a1.21 1.21 0 0 1 0 2.42h-.06a1 1 0 0 0-.91.6Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Badge variant colours ─────────────────────────────────────────────── */

const BADGE_VARIANTS = {
  default: 'nxp-ftc__badge',
  primary: 'nxp-ftc__badge nxp-ftc__badge--primary',
  success: 'nxp-ftc__badge nxp-ftc__badge--success',
  warning: 'nxp-ftc__badge nxp-ftc__badge--warning',
  error:   'nxp-ftc__badge nxp-ftc__badge--error',
  beta:    'nxp-ftc__badge nxp-ftc__badge--beta',
  pro:     'nxp-ftc__badge nxp-ftc__badge--pro',
};

/* ─── Component ─────────────────────────────────────────────────────────── */

function FeatureToggleCard({
  title,
  tooltip,
  showBadge    = false,
  badgeText    = 'BETA',
  badgeVariant = 'beta',
  docsLabel    = 'Read Docs',
  docsHref,
  onDocsClick,
  isEnabled,
  onToggle,
  onSettingsClick,
  disabled     = false,
  className    = '',
}) {
  const badgeClass = BADGE_VARIANTS[badgeVariant] ?? BADGE_VARIANTS.default;

  const rootClass = [
    'nxp-ftc',
    disabled ? 'nxp-ftc--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  /* docs link: href if provided, otherwise a button-style span */
  const DocsLink = docsHref
    ? <a
        href={docsHref}
        className="nxp-ftc__link"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={disabled ? -1 : 0}
      >
        {docsLabel}
      </a>
    : onDocsClick
      ? <button
          type="button"
          className="nxp-ftc__link nxp-ftc__link--btn"
          onClick={onDocsClick}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          {docsLabel}
        </button>
      : <span className="nxp-ftc__link">{docsLabel}</span>;

  return (
    <div className={rootClass}>
      <div className="nxp-ftc__body">

        {/* ── Left ── */}
        <div className="nxp-ftc__left">
          <div className="nxp-ftc__title-row">
            <span className="nxp-ftc__title">{title}</span>

            {showBadge && badgeText && (
              <span className={badgeClass} aria-label={`${badgeText} feature`}>
                {badgeText}
              </span>
            )}

            {tooltip && (
              <Tooltip content={tooltip}>
                <span
                  className="nxp-ftc__info-icon"
                  tabIndex={disabled ? -1 : 0}
                  role="button"
                  aria-label={`About ${title}`}
                >
                  <InfoIcon />
                </span>
              </Tooltip>
            )}
          </div>

          {DocsLink}
        </div>

        {/* ── Right ── */}
        <div className="nxp-ftc__right">
          {onSettingsClick && (
            <button
              type="button"
              className="nxp-ftc__settings-btn"
              onClick={onSettingsClick}
              disabled={disabled}
              aria-label={`${title} settings`}
              tabIndex={disabled ? -1 : 0}
            >
              <GearIcon />
            </button>
          )}

          <Toggle
            checked={isEnabled}
            onChange={onToggle}
            disabled={disabled}
            aria-label={`Enable ${title}`}
          />
        </div>

      </div>
    </div>
  );
}

export { FeatureToggleCard };
export default FeatureToggleCard;
