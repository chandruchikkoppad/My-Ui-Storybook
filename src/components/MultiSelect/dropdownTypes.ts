import { Option } from './MultiSelectTypes';
export const dropdownDefaultCSSData = {
  verticalMargin: 4,
  optionHeight: 32,
  maxDropdownHeight: 160,
};
export interface DropdownProps {
  options: Option[];
  style?: React.CSSProperties;
  handleOptionChange: (option: Option, isChecked: boolean) => void;
  checkedOptions: Option[];
  searchedKeyword: undefined | string;
  dropdownPosition: any;
  zIndex: number;
  withSelectButton?: boolean;
  onSelect?: () => void;
}
