import { ReactNode } from 'react';
import { DrowdownPosition, NlpRenderOption } from '../../types';

export interface NlpDropDownListProps {
  /*
   * Callback function triggered on blur event
   */
  onSelectBlur: () => void;
  leftIcon?: string;
  webServiceClick?: () => void;
  containerWidth?: string | number;
  /*
   * Callback function triggered when an option is selected
   */
  onSelectOptionSelector: (option: NlpRenderOption) => void;

  /*
   * Position of the dropdown relative to the input
   */
  dropdownPosition: DrowdownPosition;

  /*
   * List of options to display in the dropdown
   */
  options?: NlpRenderOption[];

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

  loadMoreOptions?: () => void;

  chipRef?: React.RefObject<HTMLDivElement>;

  isWebservice?: boolean;
}

export const nlpDropdownDefaultCSSData = {
  margin: 6,
  optionHeight: 32,
  selectInputHeight: 38,
  dropDownWrapperPadding: 0,
};

export type OptionType = {
  label?: ReactNode;
  value?: string;
  displayName?: string;
  videoSrc?: string;
  description?: string;
  nlpType?: string;
  path?: string;
  platform?: string;
  stepInputs?: { type?: string; name?: string }[];
  returnType?: string;
  name?: string;
  nlpName?: string;
};