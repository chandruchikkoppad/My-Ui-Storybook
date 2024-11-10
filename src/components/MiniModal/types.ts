import { ReactNode, RefObject } from 'react';
interface ButtonProps {
  text: string;
  onClick: () => void;
}
interface ModalDimensions {
  width?: number;
  height?: number;
}
export interface MiniEditModalProps {
  /**
   * A reference to the button element that triggers the modal.
   */
  anchorRef: RefObject<HTMLButtonElement>;
  /**
   * Optional properties for configuring the modal header.
   */
  headerProps?: ReactNode;
  /**
   * The main content to be displayed inside the modal
   */
  childContent: ReactNode;
  /**
   * Props for the cancel button inside the modal
   */
  cancelButtonProps: ButtonProps;
  /**
   * Props for the proceed button inside the modal.
   */
  proceedButtonProps: ButtonProps;
  /**
   * Optional content for the footer of the modal.
   */
  footerContent?: ReactNode;
  /**
   * Determines if the modal should be wrapped inside a container element.
   */
  isWrapped?: boolean;
  /**
   * Determines if the modal should have an animation when displayed.
   */
  isAnimated?: boolean;
  /**
   * Specifies if the modal should behave as a popover with an arrow.
   */
  isPopOver?: boolean;
  /**
   * Sets the position of the modal relative to its anchor.
   * bottom: The modal appears below the anchor.
   * right: The modal appears to the right of the anchor.
   */
  modalPosition?: 'bottom' | 'right' | 'top' | 'left';
  /**
   * Adds a top-left aligned arrow to the modal when its position is set to `'right'`.
   */
  leftTopArrow?: boolean;
  /**
   * A reference to an additional anchor element for positioning the modal.
   */
  firstAnchorRef?: RefObject<HTMLButtonElement>;
  /**
   * A numeric value representing the left position of the anchor element, used to calculate the modal's left position.
   */
  anchorRefLeftNum?: number;
  /**
   * Optional properties for configuring the modal's dimensions.
   * width: The width of the modal.
   * height: The height of the modal.
   */
  modalProperties?: ModalDimensions;
  /**distance for the wrapper model from align alignments */
  anchorLeftDistanceForWrapper?: number;
  /**extra top space added from anchor */
  extraTopSpace?: {
    wrappedModal?: number;
    normalModal?: number;
  };
  /**extra right space added from anchor */
  extraRightSpace?: {
    leftTopArrow?: number;
    middleLeftArrow?: number;
  };
  /**extra left space added from anchor */
  extraLeftSpace?: {
    normal?: number;
    rightAlignModal?: number;
  };
}
