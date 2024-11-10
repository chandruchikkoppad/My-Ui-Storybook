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
}
