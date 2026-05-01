import React from 'react';

function Kbd({ children, className = '' }) {
  return (
    <kbd className={`nxp-kbd ${className}`}>{children}</kbd>
  );
}

export { Kbd };
export default Kbd;
