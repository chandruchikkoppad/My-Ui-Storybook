export interface ToggleProps {
  /**
   * Optional onChange handler
   */
  onChange?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  /**
   * Optional disabled state
   */
  disabled?: boolean;
  /**
   * Optional checked state
   */
  checked?: boolean;
  /**
   * Optional id
   */
  id?: string;
  /**
   * What background color to occur upon toggled
   */
  variant?: 'primary' | 'secondary';
}
