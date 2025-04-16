import { createPortal } from 'react-dom';
import { DrawerProps } from './Types.js';
import Button from '../Button/Button.js';
import classNames from 'classnames';
import './Drawer.scss';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import useEscapeKey from '../../hooks/keyboardevents/useEscKeyEvent.js';
import { ThemeContext } from '../ThemeProvider/ThemeProvider.js';
import Tooltip from '../Tooltip/Tooltip.js';
import useClickOutside from '../../hooks/useClickOutside.js';
const Drawer: FC<DrawerProps> = ({
  isOpen = true,
  children = 'Drawer content area',
  onClose = () => {},
  onBackButtonClick = () => {},
  title = 'drawer',
  primaryButtonProps = {},
  secondaryButtonProps = {},
  leftPrimaryButtonProps = {},
  leftSecondaryButtonProps = {},
  showEditButton = false,
  showTransition = true,
  onEdit = () => {},
  onCollapse = () => {},
  overlay = false,
  isFooterRequired = true,
  footerContent = null,
  size = 'medium',
  _isExpanded = false,
  isBackButtonVisible = false,
  _isCloseModalButtonVisible = true,
  showHeader = true,
  isScrollBar = true,
  backButtonIcon,
  onCloseIconClick,
  customHeader,
  customFooter,
  leftTertiaryButtonProps = {},
  rightTertiaryButtonProps = {},
  zIndex,
  top = '89px',
  height,
  width,
  right = '9px',
  overflow,
  isClickOutside,
}: DrawerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => {
    const openDrawers = document.querySelectorAll('.ff-drawer');
    const lastDrawer = openDrawers[openDrawers.length - 1] as HTMLElement;
    if (
      lastDrawer &&
      lastDrawer.contains(containerRef.current) &&
      isClickOutside
    ) {
      onClose();
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [delayedOpen, setDelayedOpen] = useState(false);
  // useKeyboardActions([{ key: 'Escape', action: onClose }]);
  const handelClose = useEscapeKey('Escape');
  handelClose(onClose);
  const toggleExpand = () => {
    setIsExpanded((prev) => {
      onCollapse(!prev);
      return !prev;
    });
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
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setDelayedOpen(true), 200);
    } else {
      setDelayedOpen(false);
    }
  }, [isOpen]);
  const drawerSize = isExpanded ? 'x-large' : size;
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const transitionDuration = !showTransition ? '0s' : '0.4s';
  const getDefaultZIndex = (
    size: 'small' | 'medium' | 'large' | 'x-large'
  ): number => {
    const zIndexMap: Record<typeof size, number> = {
      small: 1100,
      medium: 1050,
      large: 1000,
      'x-large': 950,
    };

    return zIndexMap[size] ?? 1050;
  };

  const computedZIndex = zIndex ?? getDefaultZIndex(size);
  return createPortal(
    <div className={classNames('ff-drawer-container', currentTheme)}>
      {overlay && (
        <div className={'ff-overlay'} style={{ zIndex: computedZIndex }} />
      )}
      <div
        ref={containerRef}
        className={classNames('ff-drawer', `ff-drawer--${drawerSize}`, {
          'ff-drawer--open': delayedOpen,
        })}
        style={{
          zIndex: computedZIndex,
          top: top,
          height,
          width,
          right: right,
          overflow,
          transition: `all ${transitionDuration} ease-in-out`,
        }}
      >
        {showHeader && (
          <div
            className={classNames('ff-drawer-header', {
              'ff-custom-header': customHeader,
            })}
            style={{ zIndex: computedZIndex }}
          >
            {customHeader ? (
              <div className="ff-custom-header">{customHeader}</div>
            ) : (
              <div className="ff-drawer-action-section">
                <div className="ff-action-button">
                  {showEditButton && (
                    <button
                      className="ff-expand-collapse-button"
                      onClick={onEdit}
                    >
                      <Icon name="logo" height={16} width={16} />
                      Edit
                    </button>
                  )}
                  {_isExpanded && (
                    <Tooltip
                      title={isExpanded ? 'Minimize' : 'Maximize'}
                      placement="bottom"
                    >
                      <button
                        className="ff-expand-collapse-button"
                        onClick={toggleExpand}
                      >
                        <Icon
                          name={
                            isExpanded ? 'minimize_script' : 'maximize_icon'
                          }
                          height={16}
                          width={16}
                        />
                      </button>
                    </Tooltip>
                  )}
                  {isBackButtonVisible &&
                    (backButtonIcon || (
                      <Icon
                        name="back_icon"
                        height={16}
                        width={16}
                        hoverEffect
                        onClick={onBackButtonClick}
                      />
                    ))}
                  {title && <div className="ff-drawer-title">{title}</div>}
                </div>
                {_isCloseModalButtonVisible && (
                  <div className="ff-close-icon">
                    <Icon
                      name="close"
                      hoverEffect={true}
                      onClick={onCloseIconClick || onClose}
                      height={16}
                      width={16}
                      color="var(--tabs-label-active-color)"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div
          className={classNames({
            'ff-drawer-body-with-scroll': isScrollBar,
            'ff-drawer-body': !isScrollBar,
            'no-footer': !isFooterRequired,
          })}
        >
          {' '}
          {children}
        </div>
        {isFooterRequired && (
          <div
            className={classNames('ff-drawer-footer', {
              'ff-custom-footer': customFooter,
            })}
            style={{ zIndex: computedZIndex }}
          >
            {customFooter || footerContent || (
              <>
                <div className="button-container">
                  {leftSecondaryButtonProps.label && (
                    <Button
                      onClick={leftPrimaryButtonProps.onClick}
                      variant="secondary"
                      transparentBackground={true}
                      {...leftSecondaryButtonProps}
                    />
                  )}
                  {leftPrimaryButtonProps.label && (
                    <Button
                      onClick={leftPrimaryButtonProps.onClick}
                      variant="primary"
                      transparentBackground={true}
                      {...leftPrimaryButtonProps}
                    />
                  )}
                  {leftTertiaryButtonProps?.label && (
                    <Button
                      onClick={leftTertiaryButtonProps.onClick}
                      variant="tertiary"
                      transparentBackground={true}
                      {...leftTertiaryButtonProps}
                    />
                  )}
                </div>
                <div className="button-container">
                  {rightTertiaryButtonProps?.label && (
                    <Button
                      onClick={rightTertiaryButtonProps.onClick}
                      variant="tertiary"
                      transparentBackground={true}
                      {...rightTertiaryButtonProps}
                    />
                  )}
                  {secondaryButtonProps.label && (
                    <Button
                      onClick={onCancel}
                      variant="secondary"
                      transparentBackground={true}
                      {...secondaryButtonProps}
                    />
                  )}
                  {primaryButtonProps.label && (
                    <Button
                      onClick={primaryButtonProps.onClick}
                      variant="primary"
                      transparentBackground={true}
                      {...primaryButtonProps}
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
