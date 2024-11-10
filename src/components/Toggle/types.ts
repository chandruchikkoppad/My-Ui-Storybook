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

  /**
   * Defines the size of the toggle
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional icon configuration for the toggle. This allows for custom icons to be used for both the checked and unchecked states.
   *
   * @property checked - Icon configuration for the checked state.
   * @property unchecked - Icon configuration for the unchecked state.
   *
   * @example
   * {
   *   checked: { name: 'checked-icon', width: 24, height: 24 },
   *   unchecked: { name: 'unchecked-icon', width: 24, height: 24 }
   * }
   */
  icon?: {
    checked?: { name: string; width: number; height: number };
    unchecked?: { name: string; width: number; height: number };
  };
}
