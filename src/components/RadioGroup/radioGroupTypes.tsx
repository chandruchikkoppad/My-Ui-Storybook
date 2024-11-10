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
   * Additional class names to apply to the radio group for custom styling.
   * Optional.
   */
  className?: string;
}
