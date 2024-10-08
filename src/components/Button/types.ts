import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Variant of the button
   */
  variant: 'primary' | 'secondary' | 'danger' | 'success';
  /**
   * What background color to use
   */
  backgroundColor?: string;
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
   * Pass true for transparentBackground button
   */
  transparentBackground?: boolean;
  /**
   * Pass true if button should be with icon
   */
  withIcon?: boolean;
  /**
   * Give icon name availble in storybook that to be on left side of button
   */
  iconName?: string;
  /**
   * Give icon name availble in storybook that to be on left side of button
   */
  iconPosition?: 'left' | 'right';
}
