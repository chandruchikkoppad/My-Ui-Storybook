import { useEffect, useRef, useState, useCallback, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { MiniEditModalProps } from './types.js';
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
      cancelButtonProps,
      proceedButtonProps,
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
    },
    ref
  ) => {
    const [modalPositionState, setModalPositionState] = useState({
      top: 0,
      left: 0,
    });
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    //specify for the wrapper div left position
    const calculateAnchorRefLeft = (anchorRefLeftNum?: number) => {
      if (anchorRefLeftNum) {
        return anchorRefLeftNum;
      }
      return 0;
    };

    //specify for the arrow position in left or top
    const getArrowClassName = () => {
      if (leftTopArrow && modalPosition === 'right') {
        return 'left-top-arrow';
      }
      return modalPosition === 'right' ? 'left-middle-arrow' : '';
    };
    const calculatedAnchorRefLeft = calculateAnchorRefLeft(anchorRefLeftNum);

    //specifying for specific wrapper modal position
    const firstAnchor =
      firstAnchorRef?.current &&
      firstAnchorRef?.current?.getBoundingClientRect().left -
        anchorLeftDistanceForWrapper;

    //specifying the modal top
    const calculateModalTop = () => {
      const safeHeight = modalProperties?.height ?? 0;
      if (modalPosition === 'bottom') {
        return isWrapped
          ? modalPositionState.top + (extraTopSpace?.wrappedModal ?? 5)
          : modalPositionState.top + (extraTopSpace?.normalModal ?? 10);
      } else if (modalPosition === 'right') {
        return leftTopArrow
          ? modalPositionState.top - (extraRightSpace?.leftTopArrow ?? 30)
          : modalPositionState?.top -
              safeHeight / (extraRightSpace?.middleLeftArrow ?? 3.5);
      } else if (modalPosition === 'top') {
        return (
          modalPositionState.top -
          (safeHeight + (extraTopSpace?.normalModal ?? 10))
        );
      }
      return modalPositionState.top - safeHeight / 1.5;
    };
    const calculatedModalTop = calculateModalTop();

    //specifying the modal left
    const calculateModalLeft = () => {
      if (modalPosition === 'right') {
        return (
          modalPositionState.left + (extraLeftSpace?.rightAlignModal ?? 40)
        );
      } else if (firstAnchorRef) {
        return firstAnchor;
      } else if (modalPosition === 'left') {
        return modalPositionState.left - (modalProperties?.width ?? 404) - 15;
      } else {
        return modalPositionState.left - (extraLeftSpace?.normal ?? 30);
      }
    };
    const calculatedModalLeft = calculateModalLeft();

    //specifying the modal's escape and enter functionality
    const handleEsc = useEscapeKey('Escape');
    const handleEnter = useEscapeKey('Enter');
    handleEsc(cancelButtonProps.onClick);
    handleEnter(proceedButtonProps.onClick);
    useClickOutside(modalRef, cancelButtonProps.onClick);

    //calculate the modal position
    const calculatePosition = useCallback(() => {
      const anchorRect = anchorRef.current?.getBoundingClientRect();
      if (anchorRect) {
        const { bottom, left } = anchorRect;
        const { scrollX, scrollY } = window;
        let topPosition = bottom + scrollY;
        let leftPosition = left + scrollX;

        setModalPositionState({
          top: topPosition,
          left: leftPosition,
        });
      }
    }, [anchorRef, modalProperties]);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        calculatePosition();
      }, 100);
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);

      return () => {
        window.removeEventListener('resize', calculatePosition);
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', calculatePosition);
      };
    }, [calculatePosition]);

    if (isWrapped && isPopOver) {
      return null;
    }

    return createPortal(
      <div
        ref={ref || modalRef}
        className={classNames('ff-mini-edit-modal-container', {
          modalVisible: isVisible,
          animatedModal: isAnimated,
        })}
        style={{
          top: `${calculatedModalTop}px`,
          left: `${calculatedModalLeft}px`,
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
          />
        )}
        {isWrapped && (
          <div
            className={'wrapped-div'}
            style={{ left: `${calculatedAnchorRefLeft}px` }}
          ></div>
        )}
        <div
          className="mini-edit-modal"
          style={{
            minWidth: isWrapped ? '358px' : '',
            width: `${modalProperties?.width}px`,
            height: `${modalProperties?.height}px`,
          }}
        >
          {headerProps ? (
            <Typography as="p">{headerProps}</Typography>
          ) : (
            <Typography as="header">
              <Typography as="h2">Header text</Typography>
              <hr />
            </Typography>
          )}
          <div className="modal-content">{childContent}</div>
          {footerContent ? (
            <Typography as="footer">{footerContent}</Typography>
          ) : (
            <footer className="modal-footer">
              <Button
                variant="primary"
                className="btn-cancel"
                onClick={cancelButtonProps.onClick}
                label={cancelButtonProps.text}
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
      </div>,
      document.body
    );
  }
);

export default MiniModal;
