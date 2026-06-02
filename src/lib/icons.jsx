import React from 'react';

/**
 * Shared SVG icon primitives.
 * All icons use currentColor so they inherit the parent's color.
 * All accept an optional className and style prop.
 *
 * Usage:
 *   import { CloseIcon, CheckIcon, InfoIcon } from '../../lib/icons';
 */

/** Close / X — 16×16, strokeWidth 1.75 */
export const CloseIcon = ({ size = 16, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Check / Tick — 14×14, strokeWidth 1.5 */
export const CheckIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M2 7l4 4 6-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Info circle — 14×14, strokeWidth 1.5 */
export const InfoIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="4.25" r="0.875" fill="currentColor" />
  </svg>
);

/** Chevron Down — 14×14 default, pass size={12} for compact usage */
export const ChevronDownIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Chevron Left — 14×14 */
export const ChevronLeftIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M9 2L5 7l4 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Chevron Right — 14×14 */
export const ChevronRightIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path
      d="M5 2l4 5-4 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Calendar — 14×14 */
export const CalendarIcon = ({ size = 14, className, style }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M1.5 5.5h11M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

/** Small clear X — 11×11 (used in DatePicker clear button) */
export const DateClearIcon = ({ className, style }) => (
  <svg
    width="11" height="11"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
