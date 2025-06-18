import { ReactNode } from 'react';
import { DynamicObj } from '../CreateVariable/types';

export interface ButtonProps {
  /**
   * Variant of the button
   */
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'delete'
    | 'warning'
    | 'custom'
    | 'danger';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border color to use
   */
  border?: string | number;
  /**
   * What border color to use
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
   * Optional click handler for Copying the value
   */
  onCopy?: (event: React.ClipboardEvent<HTMLButtonElement>) => void;
  /**
   * Button content
   */
  children?: ReactNode;
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
   * Give icon name availble in storybook that to be on left side of button
   */
  iconPosition?: 'left' | 'right';
  transparentBackground?: boolean;
  /**
   * form to accept form id in string
   */
  form?: string;

  /**
   * Is the Type ChooseFile for the button
   */
  isChooseFile?: boolean;

  /**
   * Custom Width for the button
   */
  buttonWidth?: string;

  /**
   * Custom Height for the button
   */
  buttonHeight?: string;

  /**
   * selectedfile object will be send.
   */
  selectedFile?: File | DynamicObj | null;

  /**
   * handleCloseIcon function will set to the initial state .
   */
  handleCloseIcon?: () => void;
  /**
   * create custom button font size .
   */

  fontSize?: number;
  /**
   * create custom button style .
   */
  typographyStyle?: React.CSSProperties;
  /* iconColor prop to set the color of the icon
   */
  iconColor?: string;
  /**
   * Is the Type ChooseFile Action Mandatory for the button
   */
  isMandatory?: boolean;
}
