export interface TextareaProps {
  /**
   * Name | name of the textarea field
   */
  name: string;
  /**
   * Label | field label to be displayed
   */
  label: string;
  /**
   * value | textarea field value
   */
  value: string;
  /**
   * variants to set color/style of the textarea field
   */
  variant?: 'default' | 'primary';
  /**
   * error | If true, error message will be displayed
   */
  error?: boolean;
  /**
   * helperText | error, success, warning message to be shown
   */
  helperText?: string;
  /**
   * to disable the textarea field
   */
  disabled?: boolean;
  /**
   * if true, textarea field will be mandatory
   */
  required?: boolean;
  /**
   * placeholder for the textarea field
   */
  placeholder?: string;
  /**
   * classnames to style the textarea field
   */
  className?: string;
  /**
   * onChange, onKeyDown, onBlur, onFocus actions
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  onPaste?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  
  /**
   * id to select the textarea field uniquely
   */
  id?: string;
  /**
   * if on, suggestion popup will be displayed
   */
  autoComplete?: 'on' | 'off';
  /**
   * background of the textarea field prop
   */

  /**
   * capacity | Maximum number of characters allowed in the textarea.
   */
  capacity?: number;
  /**
   * rows | Number of visible text lines in the textarea.
   * Used to control the height of the textarea.
   */
  rows?: number;
  /**
   * cols | Number of visible character widths in the textarea.
   * Used to control the width of the textarea.
   */
  cols?: number;
  /**
   * for resizing purpose
   */
  resize?: boolean;
  errorText?: string;
  /**
   * To make text are read only state
   */
  readOnly?: boolean;
}
