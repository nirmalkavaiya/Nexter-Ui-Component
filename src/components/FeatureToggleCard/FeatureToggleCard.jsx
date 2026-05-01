import React from 'react';
import { Toggle } from '../Toggle/Toggle';
import { Tooltip } from '../Tooltip/Tooltip';

/* ─── SVG icons ─────────────────────────────────────────────────────────── */

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
      stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M12.03 9.22a1 1 0 0 0 .2 1.1l.04.04a1.21 1.21 0 0 1-1.71 1.71l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91v.11a1.21 1.21 0 0 1-2.42 0v-.06a1 1 0 0 0-.66-.91 1 1 0 0 0-1.1.2l-.04.04a1.21 1.21 0 0 1-1.71-1.71l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H2.1a1.21 1.21 0 0 1 0-2.42h.06a1 1 0 0 0 .91-.66 1 1 0 0 0-.2-1.1l-.04-.04a1.21 1.21 0 0 1 1.71-1.71l.04.04a1 1 0 0 0 1.1.2h.05a1 1 0 0 0 .6-.91V2.1a1.21 1.21 0 0 1 2.42 0v.06a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.04a1.21 1.21 0 0 1 1.71 1.71l-.04.04a1 1 0 0 0-.2 1.1v.05a1 1 0 0 0 .91.6h.11a1.21 1.21 0 0 1 0 2.42h-.06a1 1 0 0 0-.91.6Z"
      stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="2.5" y="6.5" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M2 5.5h7M6 3l3 2.5L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Feature badge (title-row inline) ──────────────────────────────────── */

const FEATURE_BADGE = {
  default: 'nxp-ftc__badge',
  primary: 'nxp-ftc__badge nxp-ftc__badge--primary',
  success: 'nxp-ftc__badge nxp-ftc__badge--success',
  warning: 'nxp-ftc__badge nxp-ftc__badge--warning',
  error:   'nxp-ftc__badge nxp-ftc__badge--error',
  beta:    'nxp-ftc__badge nxp-ftc__badge--beta',
  pro:     'nxp-ftc__badge nxp-ftc__badge--pro',
};

/* ─── Plan badge labels ─────────────────────────────────────────────────── */

const PLAN_LABEL = {
  pro:      'PRO',
  freemium: 'FREEMIUM',
};

/* ─── Component ─────────────────────────────────────────────────────────── */

function FeatureToggleCard({
  /* content */
  title,
  tooltip,

  /* plan */
  planType = 'free',         // 'free' | 'pro' | 'freemium'
  isLocked = false,
  isNew    = false,
  onUpgradeClick,

  /* feature-level badge (backward compat) */
  showBadge    = false,
  badgeText    = 'BETA',
  badgeVariant = 'beta',

  /* docs */
  docsLabel = 'Read Docs',
  docsHref,
  onDocsClick,

  /* interaction */
  isEnabled,
  onToggle,
  onChange,
  onSettingsClick,
  disabled = false,

  className = '',
}) {
  const hasPlanBadge = planType && planType !== 'free';
  const isInteractionLocked = isLocked || disabled;

  function handleToggle(newValue) {
    onChange?.(newValue);
    onToggle?.(newValue);
  }

  /* root classes */
  const outerClass = [
    'nxp-ftc-outer',
    hasPlanBadge ? 'nxp-ftc-outer--has-plan' : '',
  ].filter(Boolean).join(' ');

  const cardClass = [
    'nxp-ftc',
    isLocked  ? 'nxp-ftc--locked'   : '',
    disabled  ? 'nxp-ftc--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  /* docs link element */
  const DocsLink = docsHref
    ? (
      <a
        href={docsHref}
        className="nxp-ftc__link"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isInteractionLocked ? -1 : 0}
      >
        {docsLabel}
      </a>
    ) : (
      <button
        type="button"
        className="nxp-ftc__link nxp-ftc__link--btn"
        onClick={onDocsClick}
        disabled={isInteractionLocked}
        tabIndex={isInteractionLocked ? -1 : 0}
      >
        {docsLabel}
      </button>
    );

  return (
    <div className={outerClass}>

      {/* ── Plan badge — slightly overlaps card top edge ── */}
      {hasPlanBadge && (
        <span className={`nxp-ftc-plan nxp-ftc-plan--${planType}`}>
          {PLAN_LABEL[planType]}
        </span>
      )}

      <div className={cardClass}>
        <div className="nxp-ftc__body">

          {/* ── Left ── */}
          <div className="nxp-ftc__left">
            <div className="nxp-ftc__title-row">
              <span className="nxp-ftc__title">{title}</span>

              {/* NEW badge */}
              {isNew && (
                <span className="nxp-ftc__badge nxp-ftc__badge--new" aria-label="New feature">
                  NEW
                </span>
              )}

              {/* Feature badge (BETA / PRO / etc.) */}
              {showBadge && badgeText && (
                <span
                  className={FEATURE_BADGE[badgeVariant] ?? FEATURE_BADGE.default}
                  aria-label={`${badgeText} feature`}
                >
                  {badgeText}
                </span>
              )}

              {/* Info tooltip */}
              {tooltip && (
                <Tooltip content={tooltip}>
                  <span
                    className="nxp-ftc__info-icon"
                    tabIndex={isInteractionLocked ? -1 : 0}
                    role="button"
                    aria-label={`About ${title}`}
                  >
                    <InfoIcon />
                  </span>
                </Tooltip>
              )}
            </div>

            {/* Bottom links row */}
            <div className="nxp-ftc__links">
              {DocsLink}
              {isLocked && onUpgradeClick && (
                <>
                  <span className="nxp-ftc__links-sep" aria-hidden="true">·</span>
                  <button
                    type="button"
                    className="nxp-ftc__upgrade-link nxp-ftc__link--btn"
                    onClick={onUpgradeClick}
                  >
                    Upgrade
                    <ArrowRightIcon />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="nxp-ftc__right">
            {/* Settings gear — hidden when locked */}
            {onSettingsClick && !isLocked && (
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

            {/* Toggle OR lock button */}
            {isLocked ? (
              <button
                type="button"
                className="nxp-ftc__lock-btn"
                onClick={onUpgradeClick}
                aria-label={`Upgrade to unlock ${title}`}
                title="Upgrade to unlock"
              >
                <LockIcon />
              </button>
            ) : (
              <Toggle
                checked={isEnabled}
                onChange={handleToggle}
                disabled={disabled}
                aria-label={`Enable ${title}`}
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export { FeatureToggleCard };
export default FeatureToggleCard;
