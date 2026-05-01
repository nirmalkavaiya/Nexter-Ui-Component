import React from 'react';

function Avatar({ children, size = 'md', src, alt = '', className = '' }) {
  const sizeClass =
    size === 'sm' ? ' nxp-avatar--sm' :
    size === 'lg' ? ' nxp-avatar--lg' : '';

  return (
    <span className={`nxp-avatar${sizeClass} ${className}`} aria-label={alt || children}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        children
      )}
    </span>
  );
}

export { Avatar };
export default Avatar;
