/**
 * Represents a single option in the radio group.
 */
interface Option {
  /**
   * The unique value of the option.
   */
  value: string;

  /**
   * The display label for the option.
   */
  label: string;

  /**
   * Indicates whether the option is disabled.
   * Optional.
   */
  disabled?: boolean;

  /**
   * Indicates whether the radio button show the tooltip.
   * Optional.
   */
  showTooltip?: boolean;

  /**
   * The content of the tooltip.
   * Optional.
   */
  tooltipChildren?: React.ReactNode;

  /**
   * The content of the tooltip.
   * Optional.
   */
  tooltipTitle?: React.ReactNode;

  /**
   * The position of the tooltip
   */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Props for the RadioGroup component.
 */
interface RadioGroupProps {
  /**
   * An array of options to be rendered in the radio group.
   */
  options: Option[];

  /**
   * The name attribute for the radio inputs, used for grouping.
   */
  name: string;

  /**
   * The currently selected value.
   * Optional.
   */
  selectedValue?: string;

  /**
   * Callback function that is called when the selected option changes.
   * It receives the selected option as an argument.
   * Optional.
   */
  onChange?: (option: Option) => void;

  /**
   * Provides a label at starting position when the string is passed.
   * Optional.
   */
  label?: string;

  /**
   * if isLabel is true then we can display label if not then extra space is not added.
   * Optional.
   */
  isLabel?: boolean;

  /**
   * if isAsteriskRequired is true then we can display asterisk if not then extra space is not added.
   * Optional.
   */
  isAsteriskRequired?: boolean;

  /**
   * Additional class names to apply to the radio group for custom styling.
   * Optional.
   */
  className?: string;

  /**
   * Additional class names to apply to the radio group Label for custom styling.
   * Optional.
   */
  classNameForLabel?: string;

  isError?: boolean;

  errorMessage?: string;

  onBlur?: () => void;

  disabled?: boolean;
}
