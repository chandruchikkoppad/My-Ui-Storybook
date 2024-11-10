import { ReactNode } from 'react';

export interface Option {
  label: string | ReactNode; // The display label for the dropdown option
  value: string; // The value associated with the dropdown option
}

export interface InputWithDropdownProps {
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
  value?: number;

  /**
   * variants to set color/style of the input field
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
   * Options for the select dropdown
   */
  optionsList: Option[];

  /**
   * Selected option for the select dropdown
   */
  selectedOption?: Option;

  /**
   * onChange handler for input changes
   */
  onInputChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * onChange handler for dropdown changes
   */
  onDropdownChangeHandler?: (option: Option) => void;

  /**
   * onInputBlurHandler action for input field
   */
  onInputBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * id to select the input field uniquely
   */
  id?: string;

  /**
   * if on, suggestion popup will be displayed
   */
  autoComplete?: 'on' | 'off';

  /**
   * minimum and maximum values for the number type input field
   */
  minValue?: number;

  maxValue?: number;

  /**
   * background of the input field prop
   */
  isBackgroundTransparent?: boolean;
  /**
   * optionsRequired:false prop removes options from dropdown & shows static label only
   */
  optionsRequired?: boolean;
}
