export interface SearchProps {
  /**
   * Placeholder for the input field
   */
  placeholder?: string;
  /**
   * Callback function to be called when the search button is clicked or enter key is pressed
   */
  onSearch: (query: string) => void;
  /**
   * Additional styles for the button
   */
  disabled?: boolean;
  width?: number;
  value: string;
  isExpand: boolean;
  onClose: () => void;
  onExpand: (isExpand: boolean) => void;
  showClose?: boolean;
  helperText?: string;
  showToaster?: boolean;
  minLength?: number;
  isAISearch?: boolean;
  isAISearchClicked?: boolean;
  handleActiveAiSearch?: () => void;
  isClear?: boolean;
  handleIsClear?: () => void;
  style?: React.CSSProperties;
}
