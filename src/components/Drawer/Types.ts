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
  title: string | ReactNode;
  /**
   * To show the edit button on the header
   */
  showEditButton?: boolean;
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
}
