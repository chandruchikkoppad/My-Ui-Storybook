export interface VariableInputProps {
  /**
   * Name | name of the input field
   */
  name: string;
  /**
   * Label | field label to be displayed
   */
  label: string;
  /**
   * value | input field value
   */
  value: string | null;
  /**
   * type to set color/style of the input field
   */
  type: 'text' | 'password' | 'number' | 'email' | 'url' | 'time';
  /**
   * error | If true, error message will be displayed
   */
  error?: boolean;
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
   * onChange, onKeyDown, onBlur, onFocus actions
   */
  onChange?: (value: string) => void | undefined;

  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * id to select the input field uniquely
   */
  id?: string;
  /**
   * list of variables
   */
  list?: string[];
}
