export interface ChipsProps {
  /**
   * The text to be displayed on the Chip.
   */
  label: string;
  /**
   * The text to be displayed on hover.
   */
  fullText?: string;
  /**
   * The variant of the Chip.
   */
  variant?: 'primary' | 'success' | 'error' | 'warning' | 'custom';

  /**
   * The callback function to be executed when the Chip is clicked.
   */
  onClick?: () => void;
}
