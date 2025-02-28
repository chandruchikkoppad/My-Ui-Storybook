import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import { ModalProps } from './types';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import classNames from 'classnames';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  contentLabel,
  isHeaderDisplayed,
  headerContent,
  footerContent,
  contentClassName,
  isFooterDisplayed,
  overlayClassName,
  shouldCloseOnEsc = true,
  ariaHideApp = true,
  shouldCloseOnOverlayClick = true,
  customWidth = '660px',
  customHeight = 'auto',
  children,
  zIndex = 1500,
  boxShadow = '',
  border = '',
  background='',
}) => {

 useKeyboardActions(
   shouldCloseOnEsc && isOpen
     ? [
         {
           key: 'Escape',
           action: onClose,
         },
       ]
     : []
 );

 if (!isOpen) return null;

 if (ariaHideApp) {
   document.body.style.overflow = isOpen ? 'hidden' : '';
 }
  if (!isOpen) return null;
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  return createPortal(
    <div
      className={`ff-modal-overlay ${overlayClassName || ''}`}
      style={{ zIndex: zIndex }}
      onClick={shouldCloseOnOverlayClick ? onClose : undefined}
    >
      <div
        style={{
          boxShadow: boxShadow,
          border: border,
          borderRadius: '8px',
          background: background,
        }}
        className="ff-modal-container"
      >
        <div
          className={classNames(
            `ff-modal-content ${currentTheme} ${contentClassName}`,
            {
              'modal-bottom-border': !isFooterDisplayed,
              'modal-top-border': !isHeaderDisplayed,
            }
          )}
          style={{
            width: customWidth,
            height: customHeight,
          }}
          onClick={(e) => e.stopPropagation()}
          aria-label={contentLabel}
        >
          {isHeaderDisplayed && (
            <div className="ff-modal-header">{headerContent}</div>
          )}
          {children}
        </div>
        {isFooterDisplayed && (
          <div className="ff-modal-footer" style={{ width: customWidth }}>
            {footerContent}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
