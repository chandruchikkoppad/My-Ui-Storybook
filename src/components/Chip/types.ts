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
  variant?:
    | 'primary'
    | 'success'
    | 'error'
    | 'warning'
    | 'custom'
    | 'public'
    | 'partial-public'
    | 'private'
    | 'disabled'
    | 'count';

  /**
   * The callback function to be executed when the Chip is clicked.
   */
  /*for giving the dynamic width of chip and chip hover */
  labelWidth?: number;
  fullTextWidth?: number;
  onClick?: () => void;
}
