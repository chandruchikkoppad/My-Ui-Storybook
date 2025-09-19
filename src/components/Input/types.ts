import { IconProps } from '../Icon/types';

export interface InputProps {
  /**
   * Name | name of the input field
   */
  name: string;
  /**
   * Label | field label to be displayed
   */
  label?: string;
  /**
   * value | input field value
   */
  value: string | number;
  /**
   * variants to set color/style of the input field
   */
  variant?: 'default' | 'primary';
  /**
   * type to set color/style of the input field
   */
  type: 'text' | 'password' | 'number' | 'email' | 'url' | 'time';
  /**
   * error | If true, error message will be displayed
   */
  error?: boolean;
  /**
   * helperText | error, success, warning message to be shown
   */
  helperText?: string;
  /**
   * isHelperTextRequired for Helper/Info message to be shown
   */
  isHelperTextRequired?: boolean;
  /**
   * to disable the input field
   */
  disabled?: boolean;
  /**
   * if true, input field will be mandatory
   */
  required?: boolean;
  /**
   * placeholder for the input field
   */
  placeholder?: string;
  /**
   * classnames to style the input field
   */
  className?: string;
  /**
   * noBorder prop 'true' removes border of input
   */
  noBorder?: boolean;
  /**
   * onChange, onKeyDown, onBlur, onFocus actions
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, item?: any) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * id to select the input field uniquely
   */
  id?: string;
  /**
   * if on, suggestion popup will be displayed
   */
  autoComplete?: 'on' | 'off' | 'new-password';
  /**
   * if true, input field is in autofocus state
   */
  autoFocus?: boolean;
  /**
   * minimum and maximum values for the number type input field and their functions
   */
  minValue?: string | number;
  maxValue?: string | number;
  /**
   * background of the input field prop
   */
  transparentBackground?: boolean;
  /**
   * size for the input field
   */
  size?: 'small' | 'medium';
  /**
   * isLabelRequired for the input field without label, showing placeholder
   */
  isLabelRequired?: boolean;
  /**
   * optional '15px' reserve helperText space prop for the input field
   */
  reserveHelperTextSpace?: boolean;

  setUpdatedNumberValue?: (value: number) => void;
  /**
   * Flag to determine if error messages and error styling should be displayed immediately.
   */
  displayErrorImmediately?: boolean;
  /**
   * Flag to determine if search icon for input needs to displayed or not.
   */
  showSearchIcon?: boolean;
  /**
   * Icon props.
   */
  searchIconProps?: IconProps;
  /**
   * Function to search url on icon click.
   */
  handleSearchIconClick?: (e: any) => void;
  /**
   * Allows the user to copy the content but not edit it
   */
  readOnly?: boolean;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  /**
   * Reset min and max value for the input field on blur
   */
  adjustToValidRange?: boolean;
  /**
   * pattern for input component
   */
  pattern?: string;
  /**
   * background for handle input component background
   */
  background?: string;
  /**
   * Prevents the user from entering values greater than the specified maxValue.
   */
  disableAfterMaxValueReached?: boolean;

  /*Sets a custom width for the input field.*/
  helperTextWidth?: string | number;

  /*If true, the label will always be in the fixed position.*/
  fixedLabel?: boolean;
}
