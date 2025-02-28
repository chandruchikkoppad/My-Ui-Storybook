import { ReactNode, RefObject } from 'react';
interface ModalDimensions {
  width?: number;
  height?: number;
  borderRadius?: number;
  zIndex?: number;
  boxShadow?: string;
  left?: number;
  top?: number;
  padding?: number;
  right?: number;
}
export interface MiniEditModalProps {
  /**
   * A reference to the button element that triggers the modal.
   */
  anchorRef?: RefObject<HTMLButtonElement> | string;
  id?: string | number;
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
  cancelButtonProps?: any;
  /**
   * Props for the proceed button inside the modal.
   */
  proceedButtonProps?: any;
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
   * Specifies if the modal should behave as a popover with an arrow.
   */
  isIconModel?: boolean;
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
  wrapperProperties?: {
    height?: number;
    top?: number;
    width?: number;
    zIndex?: number;
    boxShadow?: string;
  };
  arrowZIndex?: number;
  arrowProperties?: {
    right?: number;
    left?: number;
    top?: number;
    size?: number;
  };
  overlay?: {
    isOverlay?: boolean;
    zIndexOverlay?: number;
    backgroundColorOverlay?: string;
  };
  outSideClick?: any;
  ignoreRefs?: Array<React.RefObject<HTMLElement>>
}
export interface Rect {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface AvailableSpace {
  spaceTop: number;
  spaceLeft: number;
  spaceRight: number;
  spaceBottom: number;
}
