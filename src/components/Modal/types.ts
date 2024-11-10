import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  /*** label value for aria-label  */
  contentLabel?: string;

  /*** default header will be provided with title and close icon. */
  isHeaderDisplayed: boolean;

  /*** Title to be displayed in the header when defaultHeader is true*/
  headerTitle?: string;

  /*** Custom class names for the modal content */
  contentClassName?: string;

  /*** Custom class name for the overlay */
  overlayClassName?: string;

  /*** Whether the modal should close when the 'Escape' key is pressed */
  shouldCloseOnEsc?: boolean;

  /*** Whether to hide the app from screen readers when the modal is open */
  ariaHideApp?: boolean; //for screen readers

  /*** Whether the modal should close when clicking outside of it (on the overlay) */
  shouldCloseOnOverlayClick?: boolean;
  //   shouldFocusAfterRender?: boolean;
  //   shouldReturnFocusAfterClose?: boolean;
  headerContent?: string | ReactNode;
  footerContent?: ReactNode;
  /***Content to be displayed inside the modal */
  children: ReactNode;
  isFooterDisplayed: boolean;
  customWidth: string;
  customHeight?: string;
}
