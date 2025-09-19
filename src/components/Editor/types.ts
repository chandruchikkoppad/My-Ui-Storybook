export interface DyanamicObj {
  [key: string]: any;
}
export interface EditorProps {
  /**
   * Editor Content Type
   */
  language: 'javascript' | 'html' | 'json' | 'plain text' | 'xml';

  /**
   *
   *Width of the editor
   */
  width: string;

  /**
   * Height of the editor
   */
  height: string;

  /**
   * read only
   */

  readOnly?: boolean;

  /**
   * Variable options list
   */
  variableOptionsList?: [] | DyanamicObj[];

  /**  
   * If true, adds 'FLV_for:' prefix to for loop variables in the dropdown and while searching.
   */
  addForloopPrefix?: boolean;

  /**
   *Value to set in the editor
   */

  value: string;

  /**
   *
   * setter function to set the value for the editor
   */
  setValue: (value: string) => void;

  /**
   * onChange function to handle the input changes
   */
  handleChange: (value: string | undefined, _event: any) => void;

  /**
   * Theme
   */
  theme?: 'light' | 'vs-dark';

  /**
   * type of editor
   */
  isRequisiteType?: boolean;

  /**
   * onPaste
   */
  onPaste?: (pastedContent: string) => void;
  /**
   * If passed true, it will show the variable dropdown
   */
  showVariableDropdown?: boolean;

  /**
   * Defaukt value for the editor
   */
  defaultValue?: string;

  /**
   * Height of the variable dropdown
   */
  VariableDropdownHeight?: string;

  /**
   * Custom Monaco Editor options
   */
  customOptions?: any;
}

export interface dropdownPositionType {
  top: number;
  left: number;
}

export interface VariableDropdownProps {
  /**
   * Position whether absoloute or relative
   */
  position: 'absolute' | 'relative';

  /**
   * Dropdown width
   */
  width: string;

  /**
   * Dropdown height
   */
  height?: string;

  /**
   * List of variables
   */
  optionsList: DyanamicObj[];

  /**
   * Function to handle click on variable
   */
  onSelectVariable: (variable: object) => void;

  /**
   * Dropdown position used for dropdown placement
   */
  dropdownPosition?: dropdownPositionType;
  /**
   * Dropdown zIndex used for dropdown placement
   */
  zIndex?: number;
  /**
   * number of characters upto which the options will get truncated
   */
  truncateTextValue?: number;
}

export interface option {
  [key: string]: any;
}

export interface VariableOption {
  id?: string;
  _id?: string;
  type?: string;
  parentVariableType?: string;
}
