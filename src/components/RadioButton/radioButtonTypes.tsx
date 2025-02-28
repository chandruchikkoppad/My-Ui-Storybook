import { ReactElement } from 'react';

/**
 * Props for the RadioButton component.
 */
interface RadioButtonProps {
  /**
   * The display label for the radio button.
   * Optional.
   */
  label?: string | ReactElement;

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
   * Additional CSS classes to be applied to the radio button.
   * Optional.
   */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';

  onBlur?: () => void;
}

export default RadioButtonProps;
