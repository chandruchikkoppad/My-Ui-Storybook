import { ReactNode } from 'react';
export interface BtnPropsCommon {
  /**
   * Label for the button
   */
  label?: string;
  /**
   * Boolean value to disable the button
   */
  disabled?: boolean;
  /**
   * Onclick function for button
   */
  onClick?: () => void;
  /**
   * Button type
   * @default 'button'
   * @example 'submit'
   * @example 'button'
   */
  type?: 'button' | 'submit';
  /**
   *  form to accept id of form in string format
   */
  form?: string;
}
export interface DrawerProps {
  /**
   * To Open the Drawer
   */
  isOpen: boolean;
  /**
   * To Expand the Drawer
   */
  _isExpanded?: boolean;
  /**
   * To show and  hide the back button of the Drawer
   */
  isBackButtonVisible?: boolean;
  /**
   * To show and  hide the close button of the Drawer
   */
  _isCloseModalButtonVisible?: boolean;
  /**
   * Function to close the drawer
   */
  onClose?: () => void;
  /**
   * Function to go back in the drawer
   */
  onBackButtonClick?: () => void;
  /**
   * Size of the drawer medium = 550px large = 850px
   */
  size?: 'small' | 'medium' | 'large' | 'x-large';
  /**
   * Body Content of the drawer
   */
  children: ReactNode;
  /**
   * Header title for the drawer
   */
  title?: string | ReactNode;
  /**
   * To show the edit button on the header
   */
  showEditButton?: boolean;
  /**
   * To show the transition effect while the drawer comes
   */
  showTransition?: boolean;
  /**
   * Primary | Success button props
   */
  primaryButtonProps?: BtnPropsCommon;
  /**
   * Secondary | Cancel button props
   */
  secondaryButtonProps?: BtnPropsCommon;
  /**
   * Left side Primary Button | Cancel button props
   */
  leftPrimaryButtonProps?: BtnPropsCommon;
  /**
   * Left side Secondary | Cancel button props
   */
  leftSecondaryButtonProps?: BtnPropsCommon;
  /**
   * Left side Tertiary Button | Help button props
   */
  leftTertiaryButtonProps?: BtnPropsCommon;
  /**
   * Right side Tertiary Button | More Info button props
   */
  rightTertiaryButtonProps?: BtnPropsCommon;
  /**
   * Onclick function for edit button
   */
  onEdit?: () => void;
  /**
   * Background overlay for the drawer
   */
  overlay?: boolean;
  /**
   * displays footer if its true, default true
   */
  isFooterRequired?: boolean;
  /**
   * footer Content
   */
  footerContent?: ReactNode;
  /**
   * To show or hide the header
   */
  showHeader?: boolean;
  /**
   *  Custom back button icon
   * The icon to display for the back button.
   * If not provided, a default icon will be used.
   */
  backButtonIcon?: ReactNode;
  /**
   * Callback function when the close icon is clicked
   */
  onCloseIconClick?: () => void;
  /**
   * Custom header for the drawer, replacing the default header.
   * If provided, this will render in place of the default header.
   */
  customHeader?: ReactNode;
  /**
   * Custom footer for the drawer, replacing the default footer.
   * If provided, this will render in place of the default footer.
   */
  customFooter?: ReactNode;
  /**
   * Custom z-index for the drawer
   */
  zIndex?: number;
  /**
   * Custom top for the drawer
   */
  top?: string;
  /**
   * Height of the drawer
   */
  height?: string;
  /**
   *
   * width of the drawer
   */
  width?: string;
  /**
   * Position from right
   */
  right?: string | number;
  /**
   * Custom overflow for the drawer
   */
  overflow?: string;
  /**
   * Callback function returns a boolean value when the drawer is collapsed.
   */
  onCollapse?: (value: boolean) => void;

  /**This optional boolean prop determines whether the drawer body displays a scrollbar when its content overflows. */
  isScrollBar?: boolean;
  /**
   *To  Close the drawer when clicking outside of it.
   */
  isClickOutside?: boolean;
  ignoreRefs?: Array<React.RefObject<HTMLElement>>;
}
