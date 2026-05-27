/**
 * Nexter UI Component — TypeScript Declarations
 * v1.5.0 — Covers all 61 exported components + ThemeProvider + RTL support
 *
 * Usage (TypeScript / TSX):
 *   import { Button, Modal, FeatureToggleCard } from 'nexter-ui-component';
 */

import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
  ChangeEvent,
} from 'react';

// ─── Shared primitive types ───────────────────────────────────────────────────

export type NxpSize = 'sm' | 'md' | 'lg';
export type NxpVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type NxpBadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'beta' | 'pro';

// ─── Accordion ────────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: string | number;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  defaultOpen?: (string | number)[];
  /** Allow multiple panels open at once */
  multi?: boolean;
  className?: string;
}

export declare const Accordion: React.FC<AccordionProps>;

// ─── Alert ───────────────────────────────────────────────────────────────────

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Override the default SVG icon with any ReactNode. */
  icon?: ReactNode;
  /** Set to false to hide the icon entirely. Default: true. */
  showIcon?: boolean;
  children?: ReactNode;
  className?: string;
}

export declare const Alert: React.FC<AlertProps>;

// ─── Avatar ──────────────────────────────────────────────────────────────────

export interface AvatarProps {
  size?: NxpSize;
  src?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
}

export declare const Avatar: React.FC<AvatarProps>;

// ─── Badge ───────────────────────────────────────────────────────────────────

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'gradient';
  children?: ReactNode;
  className?: string;
}

export declare const Badge: React.FC<BadgeProps>;

// ─── Banner ──────────────────────────────────────────────────────────────────

export interface BannerProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Visual density: `sm` inline toolbars, `md` default, `lg` hero callouts */
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export declare const Banner: React.FC<BannerProps>;

// ─── Breadcrumb ──────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  /** Custom separator node — defaults to chevron icon */
  separator?: ReactNode;
  /** Prepend a home icon on the first item */
  showHome?: boolean;
  className?: string;
}

export declare const Breadcrumb: React.FC<BreadcrumbProps>;

// ─── Button ──────────────────────────────────────────────────────────────────

export interface ButtonProps {
  /** Visual style variant (default 'secondary') */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link' | 'grad';
  /** Size override (default 'md') */
  size?: 'sm' | 'md' | 'lg';
  /** Square icon-only mode */
  icon?: boolean;
  /** Show spinner and disable interaction */
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;

  // ── Link / anchor props ──────────────────────────────────
  /** Renders an <a> element when supplied */
  href?: string;
  /** Link target. '_blank' auto-adds rel="nofollow noopener noreferrer" */
  target?: '_blank' | '_self' | '_parent' | '_top' | (string & {});
  /** Explicit rel — overrides the auto-generated value */
  rel?: string;
  /** Download attribute for file links */
  download?: string | boolean;

  // ── Element override ─────────────────────────────────────
  /**
   * Swap the root element.
   * Pass Next.js <Link>, React Router <Link>, or any valid element type.
   * @example <Button as={NextLink} href="/dashboard">Go</Button>
   */
  as?: React.ElementType;

  // ── Button-specific ──────────────────────────────────────
  /** HTML button type (default 'button' — prevents accidental form submit) */
  type?: 'button' | 'submit' | 'reset';

  // ── Events ───────────────────────────────────────────────
  onClick?: React.MouseEventHandler<HTMLElement>;

  /** Any additional HTML attributes */
  [key: string]: unknown;
}

export declare const Button: React.FC<ButtonProps>;

// ─── Carousel ────────────────────────────────────────────────────────────────

/** Breakpoint config for slidesPerView */
export interface CarouselBreakpoints {
  desktop?: number;
  tablet?:  number;
  mobile?:  number;
}

/** Data-driven slide object (slides[] prop API) */
export interface CarouselSlide {
  eyebrow?:     ReactNode;
  title?:       ReactNode;
  description?: ReactNode;
  cta?:         string;
  ctaHref?:     string;
  /** Fully custom slide content — overrides text layout */
  content?:     ReactNode;
  /** Inline background (gradient or color) */
  background?:  string;
}

export interface CarouselProps {
  /** v1 data API — array of slide objects */
  slides?:              CarouselSlide[];
  /** v2 JSX API — <Slide> children */
  children?:            ReactNode;
  className?:           string;
  /** Enable auto-advance */
  autoPlay?:            boolean;
  /** Auto-advance interval in ms (default 4000) */
  interval?:            number;
  /** Show prev/next arrow buttons (default true) */
  showArrows?:          boolean;
  /** 'dark' — inverts nav controls for dark/gradient slides */
  variant?:             '' | 'dark';
  /** Enable mouse/touch drag (default true) */
  draggable?:           boolean;
  /** Pixel threshold to trigger navigation on drag (default 50) */
  dragThreshold?:       number;
  /** Velocity threshold in px/ms to trigger navigation (default 0.3) */
  swipeVelocity?:       number;
  /** Pause autoPlay while hovered (default true) */
  pauseOnHover?:        boolean;
  /** Seamless infinite looping (default false) */
  infinite?:            boolean;
  /** Number of slides visible simultaneously */
  slidesPerView?:       number | CarouselBreakpoints;
  /** Gap between slides in pixels */
  gap?:                 number;
  /** ArrowLeft/ArrowRight keyboard nav (default true) */
  keyboardNavigation?:  boolean;
  /** Auto-adjust height to current slide (default false) */
  autoHeight?:          boolean;
  /** Right-to-left mode (default false) */
  rtl?:                 boolean;
  /** Only render visible slides for large carousels (default false) */
  virtual?:             boolean;
  /** ARIA label for the carousel region */
  label?:               string;
  /** Controlled active slide index */
  activeIndex?:         number;
  /** Called when slide changes — receives new 0-based index */
  onSlideChange?:       (index: number) => void;
}

export interface SlideProps {
  children?:   ReactNode;
  background?: string;
  className?:  string;
  style?:      React.CSSProperties;
  [key: string]: unknown;
}

export interface CarouselContextValue {
  current:    number;
  total:      number;
  perView:    number;
  isDragging: boolean;
  goTo:       (index: number) => void;
  goPrev:     () => void;
  goNext:     () => void;
}

/** Composable JSX slide — use as direct child of <Carousel> */
export declare const Slide: React.FC<SlideProps>;

/** Access Carousel state from any descendant component */
export declare function useCarousel(): CarouselContextValue;

export interface CarouselComponent extends React.FC<CarouselProps> {
  Slide: React.FC<SlideProps>;
}

export declare const Carousel: CarouselComponent;

// ─── Checkbox ────────────────────────────────────────────────────────────────

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: ReactNode;
  className?: string;
}

export declare const Checkbox: React.FC<CheckboxProps>;

// ─── ColorPicker ─────────────────────────────────────────────────────────────

export interface ColorPickerValue {
  hex: string;
  alpha: number;
}

export interface ColorPickerProps {
  /** Controlled hex string, e.g. '#1E40AF'. With showAlpha, use { hex, alpha }. */
  value?: string | ColorPickerValue;
  defaultValue?: string;
  onChange?: (value: string | ColorPickerValue) => void;
  swatches?: string[];
  showAlpha?: boolean;
  disabled?: boolean;
  hexLabel?: string;
  alphaLabel?: string;
  className?: string;
}

export declare const ColorPicker: React.FC<ColorPickerProps>;

// ─── Combobox ────────────────────────────────────────────────────────────────

export interface ComboboxOption {
  label: string;
  value: string | number;
}

export interface ComboboxProps {
  options?: ComboboxOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

export declare const Combobox: React.FC<ComboboxProps>;

// ─── ConfirmButton ───────────────────────────────────────────────────────────

export interface ConfirmButtonProps {
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  message?: ReactNode;
  children?: ReactNode;
  variant?: ButtonProps['variant'];
  disabled?: boolean;
  className?: string;
}

export declare const ConfirmButton: React.FC<ConfirmButtonProps>;

// ─── CopyInput ───────────────────────────────────────────────────────────────

export interface CopyInputProps {
  value?: string;
  copyLabel?: string;
  copiedLabel?: string;
  disabled?: boolean;
  className?: string;
}

export declare const CopyInput: React.FC<CopyInputProps>;

// ─── DatePicker ──────────────────────────────────────────────────────────────

export interface DatePickerProps {
  /** ISO date string 'YYYY-MM-DD' */
  value?: string;
  defaultValue?: string;
  onChange?: (isoDate: string | null) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  clearable?: boolean;
  placeholder?: string;
  todayText?: string;
  clearText?: string;
  monthNames?: string[];
  dayNames?: string[];
  prevMonthLabel?: string;
  nextMonthLabel?: string;
  className?: string;
}

export declare const DatePicker: React.FC<DatePickerProps>;

// ─── DateRangePicker ─────────────────────────────────────────────────────────

export interface DateRange {
  start: string | null;
  end: string | null;
}

export interface DateRangePickerProps {
  value?: DateRange;
  defaultValue?: DateRange;
  onChange?: (range: DateRange) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  clearable?: boolean;
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  monthNames?: string[];
  dayNames?: string[];
  className?: string;
}

export declare const DateRangePicker: React.FC<DateRangePickerProps>;

// ─── Dialog ──────────────────────────────────────────────────────────────────

export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
  iconVariant?: 'warning' | 'error' | 'success' | 'info';
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export declare const Dialog: React.FC<DialogProps>;

// ─── Drawer ──────────────────────────────────────────────────────────────────

export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: ReactNode;
  byline?: ReactNode;
  footer?: ReactNode;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  hideClose?: boolean;
  children?: ReactNode;
  className?: string;
}

export declare const Drawer: React.FC<DrawerProps>;

// ─── Dropdown ────────────────────────────────────────────────────────────────

export interface DropdownOption {
  label: string;
  value: string | number;
  sub?: string;
  divider?: never;
}

export interface DropdownDivider {
  divider: true;
  label?: never;
  value?: never;
}

export interface DropdownProps {
  options?: (DropdownOption | DropdownDivider)[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export declare const Dropdown: React.FC<DropdownProps>;

// ─── EmptyState ──────────────────────────────────────────────────────────────

export interface EmptyStateProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  desc?: ReactNode;
  action?: ReactNode | { label: string; onClick?: () => void };
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  descClassName?: string;
  actionClassName?: string;
}

export declare const EmptyState: React.FC<EmptyStateProps>;

// ─── FeatureToggleCard ───────────────────────────────────────────────────────

export interface FeatureToggleCardProps {
  title: string;
  tooltip?: string;
  tooltipPosition?: NxpTooltipPosition;
  /** Plain text, HTML string, or React node (HTML detected via tag pattern, same as Tooltip). */
  description?: ReactNode;
  /** Non-empty string shows the top plan pill with this text (caller supplies copy, e.g. i18n). */
  planLabel?: string;
  isLocked?: boolean;
  isNew?: boolean;
  onUpgradeClick?: () => void;
  showBadge?: boolean;
  badgeText?: string;
  badgeVariant?: NxpBadgeVariant;
  docsLabel?: string;
  docsHref?: string;
  onDocsClick?: () => void;
  isEnabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  onChange?: (enabled: boolean) => void;
  onSettingsClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export declare const FeatureToggleCard: React.FC<FeatureToggleCardProps>;

// ─── Field ───────────────────────────────────────────────────────────────────

export interface FieldProps {
  label?: ReactNode;
  tooltip?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: ReactNode;
  /** Rendered in the label row after the tooltip (e.g. Status, Badge). */
  extraContent?: ReactNode;
  className?: string;
}

export declare const Field: React.FC<FieldProps>;

// ─── FileUpload ──────────────────────────────────────────────────────────────

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  onFiles?: (files: File[]) => void;
  disabled?: boolean;
  label?: string;
  hint?: string;
  className?: string;
}

export declare const FileUpload: React.FC<FileUploadProps>;

// ─── IconBox ─────────────────────────────────────────────────────────────────

export interface IconBoxProps {
  topline?: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cta?: string;
  href?: string;
  /** Step number — shows a numeric step badge instead of icon */
  step?: number;
  className?: string;
}

export declare const IconBox: React.FC<IconBoxProps>;

// ─── Input ───────────────────────────────────────────────────────────────────

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
}

export declare const Input: React.FC<InputProps>;

// ─── Kbd ─────────────────────────────────────────────────────────────────────

export interface KbdProps {
  children?: ReactNode;
  className?: string;
}

export declare const Kbd: React.FC<KbdProps>;

// ─── Modal ───────────────────────────────────────────────────────────────────

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  align?: 'left' | 'center';
  title?: ReactNode;
  byline?: ReactNode;
  /** Custom footer content. When set (and not `true`), replaces preset doc + primary actions. */
  footer?: ReactNode;
  footerClassName?: string;
  /** Preset docs link URL (underline button, new tab). */
  doclink?: string;
  doclinkText?: ReactNode;
  /** Preset primary footer button handler. */
  onClick?: () => void;
  buttonText?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export declare const Modal: React.FC<ModalProps>;

// ─── MultiSelect ─────────────────────────────────────────────────────────────

export interface MultiSelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface MultiSelectGroup {
  label: string;
  options: MultiSelectOption[];
}

export interface MultiSelectProps {
  options?: MultiSelectOption[] | MultiSelectGroup[];
  value?: (string | number)[];
  onChange?: (values: (string | number)[]) => void;
  searchable?: boolean;
  disabled?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
  clearAllLabel?: string;
  removeLabel?: string;
  className?: string;
}

export declare const MultiSelect: React.FC<MultiSelectProps>;

// ─── Notice ──────────────────────────────────────────────────────────────────

export interface NoticeProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
  className?: string;
}

export declare const Notice: React.FC<NoticeProps>;

// ─── NumberInput ─────────────────────────────────────────────────────────────

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  label?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  increaseLabel?: string;
  decreaseLabel?: string;
  className?: string;
}

export declare const NumberInput: React.FC<NumberInputProps>;

// ─── Pagination ──────────────────────────────────────────────────────────────

export interface PaginationProps {
  page?: number;
  totalPages?: number;
  onChange?: (page: number) => void;
  showPrevNext?: boolean;
  className?: string;
}

export declare const Pagination: React.FC<PaginationProps>;

// ─── Popover ─────────────────────────────────────────────────────────────────

export interface PopoverProps {
  trigger?: ReactNode;
  content?: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export declare const Popover: React.FC<PopoverProps>;

// ─── Progress ────────────────────────────────────────────────────────────────

export interface ProgressProps {
  value?: number;
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'error';
  className?: string;
}

export declare const Progress: React.FC<ProgressProps>;

// ─── Radio ───────────────────────────────────────────────────────────────────

export interface RadioOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  options?: RadioOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}

export declare const Radio: React.FC<RadioProps>;

// ─── RadioGroup ───────────────────────────────────────────────────────────────

export type NxpTooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface RadioGroupOption {
  value: string;
  label: string;
  tooltip?: string;
  tooltipPosition?: NxpTooltipPosition;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options?: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  tooltipPosition?: NxpTooltipPosition;
  className?: string;
}

export declare const RadioGroup: React.FC<RadioGroupProps>;

// ─── Search ──────────────────────────────────────────────────────────────────

export interface SearchProps extends ComponentPropsWithoutRef<'input'> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onClear?: () => void;
  disabled?: boolean;
  className?: string;
}

export declare const Search: React.FC<SearchProps>;

// ─── Segmented ───────────────────────────────────────────────────────────────

export interface SegmentedOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface SegmentedProps {
  options?: SegmentedOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}

export declare const Segmented: React.FC<SegmentedProps>;

// ─── Select ──────────────────────────────────────────────────────────────────

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  options?: SelectOption[];
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export declare const Select: React.FC<SelectProps>;

// ─── Sheet ───────────────────────────────────────────────────────────────────

export interface SheetProps {
  title?: ReactNode;
  byline?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export declare const Sheet: React.FC<SheetProps>;

// ─── Sidebar ─────────────────────────────────────────────────────────────────

export interface SidebarItemDef {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  href?: string;
  badge?: ReactNode;
  badgeVariant?: string;
  disabled?: boolean;
  children?: SidebarItemDef[];
  type?: 'divider';
}

export interface SidebarProps {
  items?: SidebarItemDef[];
  active?: string;
  defaultActive?: string;
  onSelect?: (id: string, item: SidebarItemDef) => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  collapsible?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  width?: string;
  collapsedWidth?: string;
  className?: string;
}

export declare const Sidebar: React.FC<SidebarProps>;

// ─── Skeleton ────────────────────────────────────────────────────────────────

export interface SkeletonProps {
  variant?: 'line' | 'title' | 'circle';
  width?: string | number;
  style?: CSSProperties;
  className?: string;
}

export declare const Skeleton: React.FC<SkeletonProps>;

// ─── Slider ──────────────────────────────────────────────────────────────────

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
  /** Static unit label, e.g. 'px'. Pass `false` to hide. */
  unit?: string | false;
  /** Array of units — triggers a unit dropdown */
  units?: string[];
  onUnitChange?: (unit: string) => void;
  disabled?: boolean;
  className?: string;
}

export declare const Slider: React.FC<SliderProps>;

// ─── Spinner ─────────────────────────────────────────────────────────────────

export interface SpinnerProps {
  size?: NxpSize;
  className?: string;
}

export declare const Spinner: React.FC<SpinnerProps>;

// ─── StatCard ────────────────────────────────────────────────────────────────

export interface StatCardProps {
  label?: ReactNode;
  value?: ReactNode;
  meta?: ReactNode;
  className?: string;
}

export declare const StatCard: React.FC<StatCardProps>;

// ─── Status ──────────────────────────────────────────────────────────────────

export interface StatusProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'brand';
  children?: ReactNode;
  className?: string;
}

export declare const Status: React.FC<StatusProps>;

// ─── Stepper ─────────────────────────────────────────────────────────────────

export interface StepperProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export declare const Stepper: React.FC<StepperProps>;

// ─── Table ───────────────────────────────────────────────────────────────────

export interface TableColumn<T = Record<string, unknown>> {
  key: keyof T & string;
  label: ReactNode;
  numeric?: boolean;
}

export interface TableProps<T = Record<string, unknown>> {
  columns?: TableColumn<T>[];
  rows?: T[];
  striped?: boolean;
  actions?: (row: T) => ReactNode;
  className?: string;
}

export declare const Table: React.FC<TableProps>;

// ─── Tabs ────────────────────────────────────────────────────────────────────

export interface TabSubItem {
  id: string;
  label: ReactNode;
  content?: ReactNode;
}

export interface TabItem {
  id: string;
  label: ReactNode;
  content?: ReactNode;
  subTabs?: TabSubItem[];
}

export interface TabsProps {
  variant?: 'pill' | 'underline' | 'vertical';
  tabs?: TabItem[];
  activeTab?: string;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

export declare const Tabs: React.FC<TabsProps>;

// ─── Tag ─────────────────────────────────────────────────────────────────────

export interface TagProps {
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'error' | 'info';
  children?: ReactNode;
  className?: string;
}

export declare const Tag: React.FC<TagProps>;

// ─── Textarea ────────────────────────────────────────────────────────────────

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  rows?: number;
  className?: string;
}

export declare const Textarea: React.FC<TextareaProps>;

// ─── Toast ───────────────────────────────────────────────────────────────────

export interface ToastProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export declare const Toast: React.FC<ToastProps>;

// ─── Toggle ──────────────────────────────────────────────────────────────────

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: string;
  label?: ReactNode;
  className?: string;
  /** Show PRO lock UI; click runs `onProClick` instead of toggling */
  isPro?: boolean;
  /** Called when a locked PRO toggle is clicked (opens upgrade modal, etc.) */
  onProClick?: (event?: React.MouseEvent | React.KeyboardEvent) => void;
}

export declare const Toggle: React.FC<ToggleProps>;

// ─── ToggleGrid ──────────────────────────────────────────────────────────────

export interface ToggleGridItem {
  key: string;
  label: ReactNode;
  value?: boolean;
  tooltip?: string;
  tooltipPosition?: NxpTooltipPosition;
  /** Show the PRO badge on this item (default false) */
  isPro?: boolean;
  /** Badge label text (default 'PRO') */
  proText?: string;
}

export interface ToggleGridProps {
  items?: ToggleGridItem[];
  /** Number of columns: 1–4 */
  columns?: 1 | 2 | 3 | 4;
  onChange?: (key: string, value: boolean, updatedItems: ToggleGridItem[]) => void;
  /** Controlled map: { [key]: boolean } */
  valueMap?: Record<string, boolean>;
  disabled?: boolean;
  /** Default tooltip position for all items; item.tooltipPosition overrides (default 'top') */
  tooltipPosition?: NxpTooltipPosition;
  className?: string;
}

export declare const ToggleGrid: React.FC<ToggleGridProps>;

// ─── Tooltip ─────────────────────────────────────────────────────────────────

export interface TooltipProps {
  content?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export declare const Tooltip: React.FC<TooltipProps>;

// ─── Separator ───────────────────────────────────────────────────────────────

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  /** Optional text label rendered between the two lines (horizontal only) */
  label?: ReactNode;
  /** When true renders aria-hidden (default: true) */
  decorative?: boolean;
  className?: string;
}

export declare const Separator: React.FC<SeparatorProps>;

// ─── Label ───────────────────────────────────────────────────────────────────

export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export declare const Label: React.FC<LabelProps>;

// ─── AspectRatio ─────────────────────────────────────────────────────────────

export interface AspectRatioProps {
  /** width / height ratio, e.g. 16/9 (default), 4/3, 1 */
  ratio?: number;
  children?: ReactNode;
  className?: string;
}

export declare const AspectRatio: React.FC<AspectRatioProps>;

// ─── Collapsible ─────────────────────────────────────────────────────────────

export interface CollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Trigger content — string or ReactNode */
  trigger?: ReactNode;
  /** Show animated chevron (default: true) */
  showChevron?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export declare const Collapsible: React.FC<CollapsibleProps>;

// ─── ScrollArea ──────────────────────────────────────────────────────────────

export interface ScrollAreaProps {
  /** Fixed height, e.g. '320px' or 320 */
  height?: string | number;
  /** Max-height — use for dynamic content */
  maxHeight?: string | number;
  /** Enable horizontal scroll (default: false) */
  horizontal?: boolean;
  children?: ReactNode;
  className?: string;
}

export declare const ScrollArea: React.FC<ScrollAreaProps>;

// ─── Typography ──────────────────────────────────────────────────────────────

export type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'lead' | 'large' | 'small' | 'muted'
  | 'code' | 'blockquote';

export interface TypographyProps {
  /**
   * Single-element variant — renders the appropriate HTML tag
   * with pre-styled Nexter typography class.
   */
  variant?: TypographyVariant;
  /**
   * Prose wrapper mode — auto-styles all child elements
   * (h1–h6, p, ul, ol, blockquote, code, pre, a…).
   * When true, `variant` is ignored.
   */
  prose?: boolean;
  /** Override the rendered HTML tag */
  as?: React.ElementType;
  children?: ReactNode;
  className?: string;
}

export declare const Typography: React.FC<TypographyProps>;

// ─── ThemeProvider (v1.4.0) ──────────────────────────────────────────────────

/** Supported theme values. `'system'` defers to the OS preference. */
export type NxpTheme = 'light' | 'dark' | 'system';

/** Return value of {@link useTheme}. */
export interface NxpThemeContext {
  /** Current theme setting (`'light'`, `'dark'`, or `'system'`). */
  theme: NxpTheme;
  /**
   * Resolved theme — always `'light'` or `'dark'`.
   * When `theme === 'system'` this reflects the OS preference.
   */
  resolvedTheme: 'light' | 'dark';
  /** Set the theme to a new value. */
  setTheme: (theme: NxpTheme | ((prev: NxpTheme) => NxpTheme)) => void;
  /** Toggle between light and dark (system → resolved opposite). */
  toggle: () => void;
}

export interface ThemeProviderProps {
  /**
   * Initial theme — `'light'`, `'dark'`, or `'system'` (default).
   * If `storageSync` is true and a stored value exists, the stored value wins.
   */
  defaultTheme?: NxpTheme;
  /**
   * DOM element to receive the `.nxp-dark` / `.nxp-light` class.
   * Defaults to `document.documentElement`.
   */
  target?: HTMLElement;
  /**
   * Persist the chosen theme in `localStorage` under key `nxp-theme`.
   * @default true
   */
  storageSync?: boolean;
  children?: ReactNode;
}

/**
 * Wrap your app (or any sub-tree) with this provider to enable
 * Nexter's built-in light/dark theme switching.
 *
 * ```tsx
 * <ThemeProvider defaultTheme="system">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export declare const ThemeProvider: React.FC<ThemeProviderProps>;

/**
 * Access the current theme and controls.
 * Must be used inside {@link ThemeProvider}.
 *
 * ```tsx
 * const { theme, toggle } = useTheme();
 * ```
 */
export declare function useTheme(): NxpThemeContext;

// ─── RTL helpers (v1.5.0) ────────────────────────────────────────────────────

/**
 * RTL support is CSS-driven — add `dir="rtl"` to any ancestor element
 * (typically `<html>` or a wrapper `<div>`).
 *
 * All Nexter components inside will automatically mirror:
 * - Border sides (notice accent bar, sidebar border)
 * - Toggle knob direction
 * - Dropdown / popover opening edge
 * - Breadcrumb / pagination arrow icons
 * - Drawer slide animations
 * - Sidebar child indent & collapse button position
 * - Typography blockquote border & list indent
 * - Search icon position & input padding
 * - NumberInput button order & borders
 * - CopyInput button border side
 * - ColorPicker / DatePicker popover opening edge
 *
 * No JS changes are required. RTL styles are bundled in the package.
 */
export declare const rtlSupport: 'CSS-driven — add dir="rtl" to any ancestor element';

// ─── ProPopup ────────────────────────────────────────────────────────────────

export interface ProPopupDetails {
  title?: ReactNode;
  list?: string[];
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  buttonIcon?: ReactNode;
  bottomText?: ReactNode;
  closeOnOverlay?: boolean;
  /** Portal to document.body (default true). */
  portal?: boolean;
  /** Custom portal mount node (default document.body). */
  container?: Element;
  /** Lock body scroll when open (default: same as portal). */
  lockScroll?: boolean;
}

export interface ProPopupProps {
  /** Show / hide the popup. */
  open?: boolean;
  /** Grouped popup content; individual props override these when both are set. */
  details?: ProPopupDetails;
  /** Heading text. */
  title?: ReactNode;
  /** Feature bullet items — checkmark icon is added automatically. */
  list?: string[];
  /** CTA button label (default "Upgrade Now"). */
  buttonText?: string;
  /** URL opened in a new tab when CTA is clicked. */
  buttonLink?: string;
  /** JS callback fired on CTA click (use instead of or alongside buttonLink). */
  onButtonClick?: () => void;
  /** Icon rendered inside the CTA button (default: Crown SVG). Pass null to hide. */
  buttonIcon?: ReactNode;
  /** Small italic note rendered below the CTA button. HTML strings are auto-detected and rendered safely. */
  bottomText?: ReactNode;
  /** Called when the X button or backdrop is clicked. */
  onClose?: () => void;
  /** Click backdrop to close (default true). */
  closeOnOverlay?: boolean;
  /** Portal to document.body (default true). Set false for inline render in the React tree. */
  portal?: boolean;
  /** Custom portal mount node (default document.body). */
  container?: Element;
  /** Lock body scroll when open (default: same as portal). */
  lockScroll?: boolean;
  /** Extra classes on the popup card. */
  className?: string;
}

export declare const ProPopup: React.FC<ProPopupProps>;

// ─── tokens (informational export) ───────────────────────────────────────────

/** CSS tokens and component styles are auto-injected into the JS bundle. */
export declare const tokens: string;
