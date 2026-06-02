import React, { memo } from 'react';

function Kbd({ children, className = '' }) {
  return (
    <kbd className={`nxp-kbd ${className}`}>{children}</kbd>
  );
}

const KbdMemoized = memo(Kbd);
export { KbdMemoized as Kbd };
export default KbdMemoized;
