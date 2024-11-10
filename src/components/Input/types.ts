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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * id to select the input field uniquely
   */
  id?: string;
  /**
   * if on, suggestion popup will be displayed
   */
  autoComplete?: 'on' | 'off';
  /**
   *  minimum and maximum values for the number type input field and their functions
   */
  minValue?: number;
  maxValue?: number;
  /**
   * background of the input field prop
   */
  transparentBackground?: boolean;
}
