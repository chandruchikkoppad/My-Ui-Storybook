export interface IconProps {
  /** Name of the icon to be displayed. */
  name: string;
  /** Optional click handler function for the icon. */
  onClick?: () => void;
  /** Optional color for the icon. */
  color?: string;
  /** Optional height for the icon. */
  height?: number;
  /** Optional width for the icon. */
  width?: number;
  /** Optional className for the icon. */
  className?: string;
}

export interface DropdownOption {
  /** Unique identifier for the dropdown option. */
  id: number;
  /** Value associated with the dropdown option. */
  value: string;
  /** Label displayed for the dropdown option. */
  label: string;
}
export interface LabelEditTextFieldTypes {
  /** Label text displayed above the input field. */
  label?: string;
  /** Initial text displayed in the input field. */
  text: string;
  /** Text to be highlighted within the displayed text, if provided. */
  highlightText?: string;
  /** Custom error message to be displayed, if applicable. */
  customError?: string;
  /** Confirm icon properties including icon name and click handler. */
  confirmIcon?: IconProps;
  /** Cancel icon properties including icon name and click handler. */
  cancelIcon?: IconProps;
  editIcon?: IconProps;

  /** Type of input field - standard text field or text field with a dropdown. */
  variant?: 'textFieldWithDropdown' | 'textField';
  /** Array of dropdown options used if the dropdown variant is selected. */
  dropdownData?: DropdownOption[];
  /** Width of the input field component. */
  width?: string;
  /** Height of the input field component. */
  height?: string;
  /** Function called when confirming input changes, with input and dropdown values as arguments. */
  confirmAction?: (inputValue: string, dropdownValue: string) => void;

  isOpen?: boolean;
  /**for conditionally handle custom error */
  customErrorCondition?: boolean;
  onClick?: () => void;
  nameTooltipTitle?: string;
}
