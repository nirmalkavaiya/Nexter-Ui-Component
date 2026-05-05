import React from 'react';
import { cn } from '../../lib/utils';

const base =
  'inline-flex items-center justify-center gap-1.5 font-medium transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ' +
  'disabled:pointer-events-none disabled:opacity-50 select-none';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
  secondary:
    'bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80',
  ghost:
    'bg-transparent text-foreground hover:bg-secondary active:bg-secondary/70',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-secondary active:bg-secondary/70',
  link:
    'text-primary underline-offset-4 hover:underline bg-transparent p-0 h-auto',
};

const sizes = {
  sm: 'h-7 px-2.5 text-xs rounded-sm',
  md: 'h-8 px-3 text-sm rounded',
  lg: 'h-9 px-4 text-sm rounded-md',
  icon: 'h-8 w-8 p-0 rounded',
};

function Button({
  variant = 'secondary',
  size = 'md',
  icon = false,
  loading = false,
  disabled = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  return (
    <button
      className={cn(
        base,
        variants[variant] ?? variants.secondary,
        icon ? sizes.icon : sizes[size] ?? sizes.md,
        loading && 'relative text-transparent',
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="nxp-btn__spinner" />
        </span>
      )}
      {children}
    </button>
  );
}

export { Button };
export default Button;
