import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import { ModalProps } from './types';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

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
  customWidth = '660px', // default width
  customHeight = 'auto', // default height
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && shouldCloseOnEsc) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      if (ariaHideApp) {
        document.body.style.overflow = 'hidden';
      }
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (ariaHideApp) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, onClose, ariaHideApp, shouldCloseOnEsc]);

  if (!isOpen) return null;
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  return createPortal(
    <div
      className={`ff-modal-overlay ${overlayClassName || ''}`}
      onClick={shouldCloseOnOverlayClick ? onClose : undefined}
    >
      <div
        className={`ff-modal-content ${currentTheme} ${contentClassName || ''}`}
        style={{ width: customWidth, height: customHeight }}
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
    </div>,
    document.body
  );
};

export default Modal;
