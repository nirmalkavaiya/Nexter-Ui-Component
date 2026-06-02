import React, { memo } from 'react';

function StatCard({ label, value, meta, className = '' }) {
  return (
    <div className={`nxp-stat ${className}`}>
      {label && <div className="nxp-stat__label">{label}</div>}
      {value !== undefined && <div className="nxp-stat__value">{value}</div>}
      {meta && <div className="nxp-stat__meta">{meta}</div>}
    </div>
  );
}

const StatCardMemoized = memo(StatCard);
export { StatCardMemoized as StatCard };
export default StatCardMemoized;
