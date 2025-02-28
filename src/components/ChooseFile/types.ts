import { DynamicObj } from '../CreateVariable/types';

export interface ChooseFileProps {
  /**
   * Variant of the button
   */
  variant: 'primary' | 'secondary' | 'tertiary' | 'delete' | 'warning';
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * Width in string format can be sent for needed width
   */
  buttonWidth?: string;
  
  /**
   * Height in string format can be sent for needed height
   */
  buttonHeight?: string;

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Type of the button
   */

  type?: 'button' | 'submit';

  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Button id
   */
  id?: string;
  /**
   * onSubmit function handler
   */
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * react ref for the button
   */
  ref?: any;
  /**
   * Classname for the button
   */
  className?: string;
  /**
   * Additional styles for the button
   */
  style?: React.CSSProperties;

  /**
   * Give icon name availble in storybook that to be on left side of button
   */
  iconName?: string;

  /**
   * isChooseFile is a Boolean prop
   */
  isChooseFile?: boolean;

  /**
   * selectedfile object will be send.
   */
  selectedFile?: File | DynamicObj | null;

  /**
   * handleCloseIcon function will set to the initial state .
   */
  handleCloseIcon?: () => void;
}
