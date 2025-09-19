export type variableType = "LOCAL" | "GLOBAL" | "GROUP" | "PROJECT_ENVIRONMENT";

export type DynamicObj = {
  [key: string]: any;
};

export interface CreateVariableProps {
  /**
   * Open Create variable Slider
   */
  isOpen: boolean;
  /**
   * Value for the variable name
   */
  variableName: string;
  /**
   * Value for the variable to be created
   */
  variableValue: string;
  /**
   * List for the variable types
   */
  variableTypesList: DynamicObj[];
  /**
   * Selected variable type
   */
  selectedVariableType: DynamicObj;
  /**
   * Function to handle variable type change
   * @param option
   * @returns
   */
  onVariableTypeChange: (option: DynamicObj) => void;
  /**
   * Function to handle close
   */
  onClose?: () => void;
  /**
   * onChange of name
   */
  onNameChange: (value: string) => void;
  /**
   * onChange of value
   */
  onValueChange: (value: string, dropdownItem?: DynamicObj) => void;
  /**
   * Hide value
   */
  hideValue: boolean;
  /**
   * onChange for hide value
   */
  onHideChange: (value: boolean) => void;
  /**
   * Function to handle submit
   */
  handleSubmit: () => void;

  /**
   * verify which drawer is open, create or edit
   */
  mode?: "create" | "edit";
  /**
   * Disable the checkbox
   */
  disabled?: boolean;
  /**
   * Hide or show dropdown for hash values
   */
  isHash?: boolean;
  /**
   * Stores the files data
   */
  dataFiles?: DynamicObj[];
  /**
   * Show or hide password icon
   */
  showHidePasswordIcon?: boolean;
  /**
   * Show placeholder text
   */
  placeholder?: string;
  truncateTextValue?: number;
}
