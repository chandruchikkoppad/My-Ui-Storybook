import React, { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';
import './Toast.scss';
import Button from '../Button';
import classNames from 'classnames';
import { ToasterProps } from './types';
import Typography from '../Typography';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
const Toaster: React.FC<ToasterProps> = ({
  isOpen = false,
  variant = 'success',
  toastTitle = 'Success',
  onCancelClick = () => {},
  onConfirmation = () => {},
  toastMessage = 'Hello this is child element',
  displayDuration = 5000,
  confirmationText = 'Confirm',
  zIndex = 1300,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  const iconMap = {
    success: 'success',
    info: 'toast_info',
    warning: 'warning',
    danger: 'error',
    confirm: 'delete',
    alert: 'alert',
  };

  const getToasterIcon = (
    variant: 'success' | 'warning' | 'danger' | 'info' | 'confirm' | 'alert'
  ) => {
    const name = iconMap[variant];
    return <Icon name={name} height={40} width={40} />;
  };
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  useEffect(() => {
    if (isOpen && variant !== 'confirm') {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onCancelClick, 500); // Duration of exit animation
      }, displayDuration);

      return () => {
        clearTimeout(timer);
        setIsExiting(false);
      };
    }
    return () => {};
  }, [isOpen]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onCancelClick();
      setIsExiting(false);
    }, 500);
  };

  if (!isOpen && !isExiting) return null;

  return createPortal(
    <div
      role="alert"
      aria-live="assertive"
      className={classNames('ff-toaster-overlay', {
        exiting: isExiting,
        [currentTheme || '']: true,
      })}
      style={{ zIndex }}
    >
      <div className={classNames('ff-toaster', { exiting: isExiting })}>
        <div className={`ff-toaster-container ff-toaster--${variant}`}>
          {getToasterIcon(variant)}
          <div className="ff-toaster-content">
            <Typography
              color={'var(--tooltip-bg-color)'}
              fontWeight="semi-bold"
              lineHeight="18px"
              className="ff-toaster-content__title"
            >
              {toastTitle}
            </Typography>
            <Typography
              color={'var(--input-default-label-color)'}
              fontWeight="semi-bold"
              fontSize={'10px'}
              className="ff-toaster-content__message"
            >
              {toastMessage}
            </Typography>
            {variant === 'confirm' && (
              <div className="ff-toaster-content__prompt">
                <Button onClick={handleClose} variant="secondary">
                  Cancel
                </Button>
                <Button onClick={onConfirmation} variant="delete">
                  {confirmationText}
                </Button>
              </div>
            )}
          </div>

          <div className="ff-close-icon-wrapper" onClick={handleClose}>
            <Icon name="close" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Toaster;
