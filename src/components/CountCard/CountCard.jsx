import React, { memo } from 'react';

/**
 * CountCard
 *
 * Props:
 *   value     {ReactNode}  — primary metric / number (e.g. "90+")
 *   label     {ReactNode}  — descriptive text below value (e.g. "Total Blocks")
 *   badge     {ReactNode}  — status tag on the right (e.g. "Inactive")
 *   className {string}     — extra classes applied to the outer wrapper
 */
function CountCard({ value, label, badge, className = '' }) {
  return (
    <div className={`nxp-flex nxp-flex-1 nxp-justify-between nxp-items-start nxp-border-muted nxp-rounded-md nxp-p-16 nxp-bg-default ${className}`.trim()}>
      <div className="nxp-flex nxp-flex-col nxp-gap-4">
        <span className="nxp-subheading">{value}</span>
        <span className="nxp-text-muted nxp-text-sm nxp-title-label nxp-weight-regular">{label}</span>
      </div>
      {badge !== undefined && badge !== null && (
        <span className="nxp-bg-default nxp-border nxp-flex nxp-font-family nxp-items-center nxp-px-12 nxp-py-4 nxp-rounded-xs nxp-text-muted nxp-text-sm nxp-weight-medium nxp-whitespace-nowrap">
          {badge}
        </span>
      )}
    </div>
  );
}

const CountCardMemoized = memo(CountCard);
export { CountCardMemoized as CountCard };
export default CountCardMemoized;
