export interface ToasterProps {
  /**Boolean value to handle state of toaster. */
  isOpen: boolean;

  /**Variant for different type of toast message. */
  variant: 'success' | 'warning' | 'danger' | 'info' | 'confirm';

  /**Title of the toaster  */
  toastTitle: string;

  /**Message for the toaster. */
  toastMessage?: string;

  /**Function to call upon clicking the close icon or cancel button. */
  onCancelClick?: () => void;

  /**Function to call when confirmation the prompt. */
  onConfirmation?: () => void;

  /**Duration in ms for which toaster will stay on the screen */
  displayDuration?: number;

  /**Confirmation text for variant confirm. */
  confirmationText?: string;
  /**z-index value */
  zIndex?: number;
}
