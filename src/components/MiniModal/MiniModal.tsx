import {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import {
  MiniEditModalProps,
  Rect,
  AvailableSpace,
  ModalPosition,
} from './types.js';
import Button from '../Button/Button.js';
import useEscapeKey from '../../hooks/keyboardevents/useEscKeyEvent.js';
import useClickOutside from '../../hooks/useClickOutside';
import classNames from 'classnames';
import './MiniModal.scss';
import Typography from '../Typography';

const MiniModal = forwardRef<HTMLDivElement, MiniEditModalProps>(
  (
    {
      anchorRef,
      headerProps,
      childContent,
      cancelButtonProps = () => {},
      proceedButtonProps = () => {},
      footerContent,
      isWrapped = false,
      isAnimated = false,
      isPopOver = false,
      modalPosition = 'bottom',
      leftTopArrow = false,
      firstAnchorRef,
      anchorRefLeftNum,
      modalProperties,
      anchorLeftDistanceForWrapper = 170,
      extraTopSpace,
      extraRightSpace,
      extraLeftSpace,
      isIconModel,
      wrapperProperties,
      arrowProperties,
      arrowZIndex,
      overlay,
      outSideClick,
      ignoreRefs,
    },
    ref
  ) => {
    const [modalPositionState, setModalPositionState] = useState({
      top: 0,
      left: 0,
    });
    const [arrowOffset, setArrowOffset] = useState(0);
    const [increasedIconSize, setIncreasedIconSize] = useState(0);
    const [arrowRight, setArrowRight] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const {
      width: modalWidth,
      height: modalHeight,
      borderRadius: modalBorderRadius = 4,
      zIndex: modalZIndex = 99,
      boxShadow: modalBoxShadow,
      left: modalLeft,
      right: modalRight,
      top: modalTop,
      padding: modalPadding,
    } = modalProperties || {};

    const {
      left: popOverLeft,
      top: popOverTop,
      right: popOverRight = -10,
      size: popOverSize = 10,
    } = arrowProperties || {};
    // Function to calculate available space
    const getAvailableSpace = (rect: Rect): AvailableSpace => {
      const { top, left, bottom, right } = rect;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        spaceTop: top,
        spaceLeft: left,
        spaceRight: viewportWidth - right,
        spaceBottom: viewportHeight - bottom,
      };
    };

    // Helper function to get the anchor element
    const getAnchorElement = () => {
      if (typeof anchorRef === 'string') {
        return document.getElementById(anchorRef);
      }
      return anchorRef?.current || null;
    };

    const anchorElement = getAnchorElement();
    const anchorRect = anchorElement?.getBoundingClientRect();

    if (!isWrapped && anchorRect) {
      const availableSpace = getAvailableSpace(anchorRect);
      const modalHeight = modalProperties?.height ?? 150;
      const modalWidth = modalProperties?.width ?? 480;

      const positionFallbacks: Record<ModalPosition, ModalPosition[]> = {
        top: ['bottom', 'left', 'right'],
        left: ['right', 'top', 'bottom'],
        right: ['left', 'top', 'bottom'],
        bottom: ['top', 'left', 'right'],
      };

      const checkSpace = (direction: ModalPosition) => {
        return (
          availableSpace[
            `space${
              direction.charAt(0).toUpperCase() + direction.slice(1)
            }` as keyof AvailableSpace
          ] <
          (direction === 'top' || direction === 'bottom'
            ? modalHeight
            : modalWidth)
        );
      };

      if (checkSpace(modalPosition)) {
        const fallbacks = positionFallbacks[modalPosition];
        for (const fallback of fallbacks) {
          if (!checkSpace(fallback)) {
            modalPosition = fallback;
            break;
          }
        }
      }
    }

    // Specify for the wrapper div left position
    const calculateAnchorRefLeft = (anchorRefLeftNum?: number) => {
      if (anchorRefLeftNum) {
        return anchorRefLeftNum;
      }
      return 0;
    };

    // Specify for the arrow position in left or top
    const getArrowClassName = () => {
      if (leftTopArrow && modalPosition === 'right') {
        return 'left-top-arrow';
      }
      return modalPosition === 'right' ? 'left-middle-arrow' : '';
    };
    const calculatedAnchorRefLeft = calculateAnchorRefLeft(anchorRefLeftNum);

    // Specify specific wrapper modal position
    const firstAnchor =
      firstAnchorRef?.current &&
      firstAnchorRef?.current?.getBoundingClientRect().left -
        anchorLeftDistanceForWrapper;

    // Specifying the modal top
    const calculateModalTop = () => {
      const safeHeight = modalProperties?.height ?? 0;
      if (modalPosition === 'bottom') {
        return isWrapped
          ? modalPositionState.top + (extraTopSpace?.wrappedModal ?? 5)
          : modalPositionState.top + (extraTopSpace?.normalModal ?? 10);
      } else if (modalPosition === 'right') {
        return leftTopArrow
          ? modalPositionState.top - (extraRightSpace?.leftTopArrow ?? 23)
          : modalPositionState?.top -
              safeHeight / (extraRightSpace?.middleLeftArrow ?? 3.5);
      } else if (modalPosition === 'top') {
        return (
          modalPositionState.top -
          (safeHeight + (extraTopSpace?.normalModal ?? 10))
        );
      } else if (modalPosition === 'left') {
        return leftTopArrow
          ? modalPositionState.top - (extraRightSpace?.leftTopArrow ?? 25)
          : modalPositionState?.top -
              safeHeight / (extraRightSpace?.middleLeftArrow ?? 3.5);
      }
      return modalPositionState.top - safeHeight / 1.5;
    };
    const calculatedModalTop = calculateModalTop();

    // Specifying the modal left
    const calculateModalLeft = () => {
      if (modalPosition === 'right') {
        return (
          modalPositionState.left + (extraLeftSpace?.rightAlignModal ?? 40)
        );
      } else if (firstAnchorRef) {
        return firstAnchor;
      } else if (modalPosition === 'left') {
        return modalPositionState.left - (modalProperties?.width ?? 274) - 15;
      } else {
        return modalPositionState.left - (extraLeftSpace?.normal ?? 30);
      }
    };
    const calculatedModalLeft = calculateModalLeft();

    // Handle escape and enter functionality
    const handleEsc = useEscapeKey('Escape');
    const handleEnter = useEscapeKey('Enter');
    handleEsc(outSideClick);
    handleEnter(proceedButtonProps?.onClick);
    useClickOutside(modalRef, outSideClick, ignoreRefs);

    // Calculate the modal position
    const calculatePosition = useCallback(() => {
      const anchorRect = anchorElement?.getBoundingClientRect();
      const availableSpace = anchorRect && getAvailableSpace(anchorRect);
      const modalRect = modalRef.current?.getBoundingClientRect();
      if (isWrapped && anchorRect) {
        const { height } = anchorRect;
        if (height > 24) {
          const diff = height - 24;
          setIncreasedIconSize(diff);
        }
      }
      if (anchorRect && modalRect && availableSpace) {
        const { bottom, left, right } = anchorRect;
        const { height, width } = modalRect;
        const { spaceBottom } = availableSpace; // Get available space below anchor
        const { scrollX, scrollY } = window;

        let topPosition = bottom + scrollY;
        let leftPosition;
        if (modalPosition == 'right') {
          leftPosition = right + scrollX - 20;
        } else {
          leftPosition = left + scrollX;
        }
        if (width < 280) {
          setArrowRight(6);
        }
        let arrowOffset = 0; // Adjust arrow position dynamically

        // If modal height exceeds available space below, position it above
        if (height > spaceBottom) {
          const diff = height - spaceBottom;
          topPosition = topPosition - diff; // Move modal above anchor
          arrowOffset = diff; // Adjust arrow position
        }

        setModalPositionState({
          top: topPosition,
          left: leftPosition,
        });

        setArrowOffset(arrowOffset);
        setIsVisible(true);
        // Store arrow adjustment
      }
    }, [anchorElement]);

    useLayoutEffect(() => {
      if (!modalRef.current) return;
      calculatePosition();
      const observer = new ResizeObserver((entries) => {
        if (entries.length) {
          calculatePosition();
        }
      });
      observer.observe(modalRef.current);
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);

      return () => {
        window.removeEventListener('resize', calculatePosition);
        observer.disconnect();
        window.removeEventListener('scroll', calculatePosition);
      };
    }, [calculatePosition, modalRef]);

    const {
      height: wrapperHeight = 35,
      top: wrapperTop = -34,
      width: wrapperWidth = 35,
      zIndex: wrapperZIndex = 101,
      boxShadow: wrapperBoxShadow,
    } = wrapperProperties || {};
    const { isOverlay, backgroundColorOverlay, zIndexOverlay } = overlay || {};

    if (isWrapped && isPopOver) {
      return null;
    }

    return createPortal(
      <>
        {isOverlay && (
          <div
            className={classNames('ff-mini-modal-overlay')}
            style={{
              zIndex: zIndexOverlay ?? 98,
              backgroundColor: backgroundColorOverlay ?? 'transparent',
            }}
            onClick={cancelButtonProps?.onClick}
          ></div>
        )}
        <div
          ref={ref || modalRef}
          className={classNames('ff-mini-edit-modal-container', {
            modalVisible: isVisible,
            animatedModal: isAnimated,
          })}
          style={{
            top: `${modalTop ?? calculatedModalTop}px`,
            left: `${modalLeft ?? calculatedModalLeft}px`,
            right: `${modalRight}px`,
          }}
        >
          {isPopOver && (
            <div
              className={`popover-arrow popover-arrow-${
                modalPosition === 'right'
                  ? 'left'
                  : modalPosition === 'top'
                  ? 'bottom'
                  : modalPosition === 'left'
                  ? 'right'
                  : 'top'
              } ${getArrowClassName()}`}
              style={{
                zIndex: `${arrowZIndex}`,
                top: `${popOverTop ? popOverTop + arrowOffset : arrowOffset}px`,
                left: `${popOverLeft && popOverLeft}px`,
                right: `${popOverRight && popOverRight + arrowRight}px`,
                borderWidth: `${
                  modalPosition === 'right'
                    ? `${popOverSize}px ${popOverSize}px ${popOverSize}px 0`
                    : modalPosition === 'top'
                    ? `${popOverSize}px ${popOverSize}px 0 ${popOverSize}px`
                    : modalPosition === 'left'
                    ? `${popOverSize}px 0 ${popOverSize}px ${popOverSize}px`
                    : `0 ${popOverSize}px ${popOverSize}px ${popOverSize}px`
                }`,
              }}
            />
          )}
          {isWrapped && (
            <div
              className={'wrapped-div'}
              style={{
                left: `${calculatedAnchorRefLeft}px`,
                width: `${wrapperWidth + increasedIconSize / 1.2}px`,
                height: `${wrapperHeight + increasedIconSize}px`,
                top: `${wrapperTop - increasedIconSize}px`,
                backgroundColor: isOverlay ? 'white' : 'transparent',
                zIndex: `${wrapperZIndex}`,
                boxShadow:
                  wrapperBoxShadow ??
                  `0px -3px 4px 0px var(--ff-mini-modal-box-shadow)`,
              }}
            ></div>
          )}
          <div
            className={classNames('mini-edit-modal', {
              'mini-edit-modal-wrapper-shadow': !!isWrapped && !modalBoxShadow,
              'mini-edit-modal-arrow-shadow': !!isPopOver && !modalBoxShadow,
            })}
            style={{
              minWidth: isWrapped ? '190px' : '',
              width: `${modalWidth}px`,
              height: `${modalHeight}px`,
              borderRadius: `${modalBorderRadius}px`,
              zIndex: `${modalZIndex}`,
              boxShadow: `${
                modalBoxShadow ??
                '0px 4px 8px var(--ff-mini-modal-arrow-shadow)'
              }`,
              padding: `${modalPadding ?? 4}px`,
            }}
          >
            {headerProps ? (
              <Typography as="div">{headerProps}</Typography>
            ) : isIconModel ? (
              <></>
            ) : (
              <Typography as="header">
                <Typography as="h2">Header text</Typography>
                <hr />
              </Typography>
            )}
            {childContent}
            {footerContent ? (
              <Typography as="footer">{footerContent}</Typography>
            ) : isIconModel ? (
              <></>
            ) : (
              <footer className="modal-footer">
                <Button
                  variant="primary"
                  className="btn-cancel"
                  onClick={cancelButtonProps?.onClick}
                  label={cancelButtonProps?.text}
                />
                <Button
                  variant="secondary"
                  className="btn-proceed"
                  label={proceedButtonProps?.text}
                  onClick={proceedButtonProps?.onClick}
                />
              </footer>
            )}
          </div>
        </div>
      </>,
      document.body
    );
  }
);

export default MiniModal;
