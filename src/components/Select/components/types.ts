import { DropdownPosition, Option } from '../types';
import { ReactNode, RefObject } from 'react';

export interface DropdownProps {
  options: Option[];
  dropdownPosition: DropdownPosition;
  dropDownHeight: number;
  optionZIndex: number;
  labelAccessor?: string;
  valueAccessor?: string;
  onSelectBlur: () => void;
  onSelectOptionSelector: (option: Option) => void;
  inputRef?: RefObject<HTMLInputElement>;
  selectArrowRef?: RefObject<HTMLDivElement>;
  heightFromTop: number;
  selectedOption?: Option;
  showIcon?: boolean;
  showToolTip?: boolean;
  customReccurenece?: boolean;
  onCancelModal?: () => void;
  onSaveModal?: () => void;
  modalJSXProps?: ReactNode;
  recurrence?: boolean;
  showArrowIcon?: boolean;
  showClearIcon?: boolean;
  noResultsMessage?: string;
  searchedIcon?: string;
  isCustomButtonDisabled?: boolean;
}

export const dropdownDefaultCSSData = {
  margin: 6,
  optionHeight: 32,
  selectInputHeight: 38,
  dropDownWrapperPadding: 0,
};
