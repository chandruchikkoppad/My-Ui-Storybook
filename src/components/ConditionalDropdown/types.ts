import { dropdownPositionType } from '../Editor/types';

export type dynamicObject = {
  [key: string]: any;
};

export type TestDataObject = {
  _id: string;
  name: string;
  actualPath: string;
  searchKey: string;
  parentId: string;
};

export interface ConditionalDropdownProps {
  /**
   * Label for the field
   */
  label?: string;

  /**
   * Value in the input should stored in this state
   */
  hashInputValue?: TestDataObject | dynamicObject;

  /**
   * Function storing and updating the inputValue state
   */
  setHashInputValue?: (value: File | dynamicObject | null) => void;

  /**
   * List of variables
   */
  variableList?: dynamicObject[];
  /**
   * Place holder for the input field
   */
  placeholder?: string;
  /**
   * Function to handle input change
   * @param value
   * @returns
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Function to handle create variable icon click
   */
  onCreateVariableClick?: () => void;
  /**
   * Width of the dropdown
   */
  dropdownWidth?: string;
  /**
   * Name | name of the input field
   */
  name?: string;
  /**
   * value | input field value
   */
  value?: string;
  /**
   * variants to set color/style of the input field
   */
  variant?: 'default' | 'primary';
  /**
   * type to set color/style of the input field
   */
  type?: 'text' | 'password' | 'number' | 'email' | 'url' | 'time';
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
   * classnames to style the input field
   */
  className?: string;
  /**
   * noBorder prop 'true' removes border of input
   */
  noBorder?: boolean;

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
  minValue?: string;
  maxValue?: string;
  /**
   * background of the input field prop
   */
  transparentBackground?: boolean;
  /**
   * size for the input field
   */
  size?: 'small' | 'medium';
  /**
   * isLabelRequired for the input field without label,showing placeholder
   */
  isLabelRequired?: boolean;

  /**
   * If true, dropdown opens when '#' is entered at the first position.
   */
  isHash?: boolean;
  /**
   * Options for the dropdown when `isHash` is true.
   */
  dataFiles?: dynamicObject[];
  /**
   * a boolean prop to show add variable icon or not.
   */
  showAddVariableIcon?: boolean;

  onlyDropdown?: boolean;

  formProps?: Record<string, any>;
}

export interface OptionsDropdownProps {
  /**
   * Position whether absoloute or relative
   */
  position: 'absolute' | 'relative';

  /**
   * Dropdown width
   */
  width: string;

  /**
   * chars entered to search in Input :
   */
  filteredOptions?: dynamicObject[];

  /**
   * Function to handle click on variable
   */
  onSelectVariable: (variable: object) => void;

  /**
   * Dropdown postion used for dropdown placement
   */
  dropdownPosition?: dropdownPositionType;
}
