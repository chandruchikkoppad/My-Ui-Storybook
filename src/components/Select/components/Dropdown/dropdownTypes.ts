import { DrowdownPosition, Option } from '../../types';

export interface DropDownListProps {
  onSelectBlur: () => void;
  onSelectOptionSelector: (option: Option) => void;
  dropdownPosition: DrowdownPosition;
  options?: Option[];
  optionZIndex?: number;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const dropdownDefaultCSSData = {
  margin: 6,
  optionHeight: 32,
  selectInputHeight: 38,

  // Future use case if we provide padding-top, padding-bottom for option wrapper
  dropDownWrapperPadding: 0,
};
