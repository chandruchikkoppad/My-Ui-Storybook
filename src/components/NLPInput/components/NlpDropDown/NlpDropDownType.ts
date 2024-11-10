import { DrowdownPosition, Option } from '../../type';

export interface NlpDropDownListProps {
  /*
   * Callback function triggered on blur event
   */
  onSelectBlur: () => void;

  /*
   * Callback function triggered when an option is selected
   */
  onSelectOptionSelector: (option: Option) => void;

  /*
   * Position of the dropdown relative to the input
   */
  dropdownPosition: DrowdownPosition;

  /*
   * List of options to display in the dropdown
   */
  options?: Option[];

  /*
   * Optional z-index for controlling the dropdown's stacking order
   */
  optionZIndex?: number;

  /*
   * Reference to the input element
   */
  inputRef?: React.RefObject<HTMLInputElement>;

  /*
   * Optional label for the dropdown
   */
  label?: string;

  /*
   * If true, shows an error message related to the dropdown
   */
  hasError?: boolean;

  /*
   * Error message to display when hasError is true
   */
  errorMessage?: string;

  /*
   * If true, disables the dropdown
   */
  disabled?: boolean;
}

export const nlpDropdownDefaultCSSData = {
  margin: 6,
  optionHeight: 32,
  selectInputHeight: 38,
  dropDownWrapperPadding: 0,
};
