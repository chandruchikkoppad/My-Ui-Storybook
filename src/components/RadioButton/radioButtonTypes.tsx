/**
 * Props for the RadioButton component.
 */
interface RadioButtonProps {
  /**
   * The display label for the radio button.
   * Optional.
   */
  label?: string;

  /**
   * The name attribute for the radio button, used for grouping.
   */
  name: string;

  /**
   * The unique value of the radio button.
   * Optional.
   */
  value?: string;

  /**
   * Indicates whether the radio button is checked.
   * Optional.
   */
  checked?: boolean;

  /**
   * Callback function that is called when the radio button's value changes.
   * Receives the change event as an argument.
   * Optional.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Indicates whether the radio button is disabled.
   * Optional.
   */
  disabled?: boolean;
}
