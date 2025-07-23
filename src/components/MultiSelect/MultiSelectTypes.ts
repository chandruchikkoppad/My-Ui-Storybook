import { RefObject } from 'react';
type OptionValue = any;

interface Option {
  [key: string]: OptionValue;
}
interface MultiSelectProps {
  options: Option[];
  type?: 'email' | 'text';
  label: string;
  selectedOptions?: Option[];
  disabled?: boolean;
  onSearch?: (searchedKeyword: string) => void;
  onChange?: (selectedOptions: Option[]) => void;
  acceptNewOption?: boolean;
  zIndex?: number;
  required?: boolean;
  errorMessage?: string;
  withSelectButton?: boolean;
  onSelectButtonClick?: (selectedOptions: Option[]) => void;
  displayCount?: boolean;
  isAllSelected?: boolean;
  onToggleAllSelect?: (checkedState: boolean) => void;
  displayAllSelectedAsText?: boolean;
  placeholderForSearching?: string;
  isAllSelect?: boolean;

  /**  Default is default. choose labels variant if you are using this component for labels dropdown or choose machines if you are using this component in parallel  */
  variant?: 'default' | 'labels' | 'machines';

  /** Pass the function what to do upon clicking label plus icon  */
  onLabelPlusIconClick?: (_enteredKeyword: string) => Promise<void>;

  /** classname to handle styling wrt to multiselect div and and labelplus icon */
  className?: string;

  labelAccessor?: string;

  valueAccessor?: string;

  searchAccessor?: string;

  onEnter?: (newOption: string) => boolean;

  loadMoreOptions?: () => void;

  maxVisibleChips?: number;

  onBlur?: () => void;
  /** default max height is 160px, give max dropdown height while using jsx or want to control how many max options you want to show  */
  maxDropdownHeight?: number;
  /**
   * Ref for select option dropdown
   */
  dropdownContainerRef?: RefObject<HTMLDivElement>;
  noResultsMessage?: string;
  chipAccessor?: string;
}

export { Option, MultiSelectProps };
