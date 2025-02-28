export type variableType = 'LOCAL' | 'GLOBAL' | 'GROUP' | 'PROJECT_ENVIRONMENT';

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
  value: string;
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
  onValueChange: (value: string) => void;
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
  mode?: 'create' | 'edit';
  /**
   * Disable the checkbox
   */
  disabled?: boolean;
}
