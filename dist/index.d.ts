/**
 * Nexter UI Component — TypeScript Declarations
 * v1.1.2 — Covers all 54 exported components
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
export type NxpPlanType = 'free' | 'pro' | 'freemium';
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
  /** Override default icon. Pass `null` to hide. */
  icon?: ReactNode;
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

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: NxpSize;
  /** Render as icon-only (square) button */
  icon?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
}

export declare const Button: React.FC<ButtonProps>;

// ─── Carousel ────────────────────────────────────────────────────────────────

export interface CarouselSlide {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  cta?: string;
  ctaHref?: string;
}

export interface CarouselProps {
  slides?: CarouselSlide[];
  className?: string;
}

export declare const Carousel: React.FC<CarouselProps>;

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
  disabled?: boolean;
  className?: string;
}

export declare const Dropdown: React.FC<DropdownProps>;

// ─── EmptyState ──────────────────────────────────────────────────────────────

export interface EmptyStateProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export declare const EmptyState: React.FC<EmptyStateProps>;

// ─── FeatureToggleCard ───────────────────────────────────────────────────────

export interface FeatureToggleCardProps {
  title: string;
  tooltip?: string;
  planType?: NxpPlanType;
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
  title?: ReactNode;
  byline?: ReactNode;
  footer?: ReactNode;
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

// ─── OTPInput ────────────────────────────────────────────────────────────────

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
}

export declare const OTPInput: React.FC<OTPInputProps>;

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

// ─── SortableList ────────────────────────────────────────────────────────────

export interface SortableListItem {
  id: string | number;
  label?: ReactNode;
  [key: string]: unknown;
}

export interface SortableListProps {
  items?: SortableListItem[];
  onChange?: (items: SortableListItem[]) => void;
  renderItem?: (item: SortableListItem) => ReactNode;
  disabled?: boolean;
  className?: string;
}

export declare const SortableList: React.FC<SortableListProps>;

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
}

export declare const Toggle: React.FC<ToggleProps>;

// ─── ToggleGrid ──────────────────────────────────────────────────────────────

export interface ToggleGridItem {
  key: string;
  label: ReactNode;
  value?: boolean;
  tooltip?: string;
}

export interface ToggleGridProps {
  items?: ToggleGridItem[];
  /** Number of columns: 1–4 */
  columns?: 1 | 2 | 3 | 4;
  onChange?: (key: string, value: boolean, updatedItems: ToggleGridItem[]) => void;
  /** Controlled map: { [key]: boolean } */
  valueMap?: Record<string, boolean>;
  disabled?: boolean;
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

// ─── tokens (informational export) ───────────────────────────────────────────

/** Informational string — CSS tokens are auto-injected via JS */
export declare const tokens: string;
