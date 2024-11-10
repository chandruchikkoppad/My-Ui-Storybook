import { createPortal } from 'react-dom';
import { DrawerProps } from './Types.js';
import Button from '../Button/Button.js';
import classNames from 'classnames';
import './Drawer.scss';
import { FC, useContext, useEffect, useState } from 'react';
import Icon from '../Icon';
import useEscapeKey from '../../hooks/keyboardevents/useEscKeyEvent.js';
import { ThemeContext } from '../ThemeProvider/ThemeProvider.js';
const Drawer: FC<DrawerProps> = ({
  isOpen = true,
  children = 'Drawer content area',
  onClose = () => {},
  title = 'drawer',
  primaryButtonProps = {},
  secondaryButtonProps = {},
  leftPrimaryButtonProps = {},
  leftSecondaryButtonProps = {},
  showEditButton = false,
  onEdit = () => {},
  overlay = false,
  isFooterRequired = true,
  footerContent = null,
  size = 'medium',
  _isExpanded = false,
  isBackButtonVisible = false,
  _isCloseModalButtonVisible = true,
}: DrawerProps) => {
  const [isExpanded, setIsExpanded] = useState(_isExpanded);

  const handleEsc = useEscapeKey('Escape');

  handleEsc(onClose);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const onCancel = () => {
    if (secondaryButtonProps.onClick) {
      secondaryButtonProps.onClick();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    closeModal();
  }, [isOpen]);

  const closeModal = () => {
    if (!isOpen) {
      setTimeout(() => {
        return null;
      }, 1000);
    }
  };

  const drawerSize = isExpanded ? 'x-large' : size;
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  return createPortal(
    <div className={classNames('ff-drawer-container', currentTheme)}>
      {overlay && <div className="ff-overlay" />}

      <div
        className={classNames('ff-drawer', `ff-drawer--${drawerSize}`, {
          'ff-drawer--open': isOpen,
        })}
      >
        <div className="ff-drawer-header">
          <div className="ff-drawer-action-section">
            <div className="ff-action-button">
              {showEditButton && (
                <button className="ff-expand-collapse-button" onClick={onEdit}>
                  {/* icons are not provided yet so using dummy icons */}
                  <Icon name="logo" height={16} width={16} />
                  Edit
                </button>
              )}
              {_isExpanded && (
                <button
                  className="ff-expand-collapse-button"
                  onClick={toggleExpand}
                >
                  <Icon
                    name={isExpanded ? 'logo' : 'logo'}
                    height={16}
                    width={16}
                  />
                </button>
              )}
              {isBackButtonVisible && (
                <button className="ff-expand-collapse-button" onClick={onClose}>
                  <Icon
                    name="error"
                    height={16}
                    width={16}
                    hoverEffect={false}
                  />
                </button>
              )}
              <div className="ff-drawer-title">{title}</div>
            </div>
            {_isCloseModalButtonVisible && (
              <Icon name="close" hoverEffect={false} onClick={onClose} />
            )}
          </div>
        </div>

        <div
          className={classNames('ff-drawer-body', {
            'no-footer': !isFooterRequired,
          })}
        >
          {children}
        </div>

        {isFooterRequired && (
          <div className="ff-drawer-footer">
            {footerContent ? (
              footerContent
            ) : (
              <>
                <div className="button-container">
                  {leftSecondaryButtonProps.label && (
                    <Button
                      {...leftSecondaryButtonProps}
                      onClick={leftPrimaryButtonProps.onClick}
                      variant="secondary"
                      transparentBackground={true}
                    />
                  )}
                  {leftPrimaryButtonProps.label && (
                    <Button
                      {...leftPrimaryButtonProps}
                      onClick={leftPrimaryButtonProps.onClick}
                      variant="primary"
                      transparentBackground={true}
                    />
                  )}
                </div>
                <div className="button-container">
                  {secondaryButtonProps.label && (
                    <Button
                      {...secondaryButtonProps}
                      onClick={onCancel}
                      variant="secondary"
                      transparentBackground={true}
                    />
                  )}
                  {primaryButtonProps.label && (
                    <Button
                      {...primaryButtonProps}
                      onClick={primaryButtonProps.onClick}
                      variant="primary"
                      transparentBackground={true}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Drawer;
