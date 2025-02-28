import React, { useState } from 'react';
import './ChatModal.scss';
import { createPortal } from 'react-dom';
import Icon from '../Icon';
import Typography from '../Typography';
import type { ChatModalProps } from './types';
import classNames from 'classnames';
import Tooltip from '../Tooltip';

const ChatModal: React.FC<ChatModalProps> = ({
  iconName,
  iconPosition: {
    top: iconTop,
    left: iconLeft,
    bottom: iconBottom,
    right: iconRight,
  },
  hoverIconPosition: {
    top: iconhoverTop,
    left: iconhoverLeft,
    bottom: iconhoverBottom,
    right: iconhoverRight,
  },
  modalPosition: {
    top: modalTop,
    left: modalLeft,
    bottom: modalBottom,
    right: modalRight,
  },

  modalWidth,
  modalHeight,
  headerContent = 'Header Content',
  footerContent = 'Footer Content',
  iconWidth,
  iconHeight,
  modalHeading = 'Ask Fia',
  children,
  onClearChat,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible((prev) => !prev);
    setTimeout(() => setIsOpen((prev) => !prev), 10);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  return (
    <>
      <div
        style={{
          top: iconTop !== undefined ? `${iconTop}px` : undefined,
          left: iconLeft !== undefined ? `${iconLeft}px` : undefined,
          bottom: iconBottom !== undefined ? `${iconBottom}px` : undefined,
          right: iconRight !== undefined ? `${iconRight}px` : undefined,
        }}
        className="ff-dynamic-icon-container"
      >
        <Icon
          className={`ff-dynamic-icon`}
          name={iconName}
          onClick={openModal}
          height={iconHeight}
          width={iconWidth}
        />
        <div
          style={{
            top: iconhoverTop !== undefined ? `${iconhoverTop}px` : undefined,
            left:
              iconhoverLeft !== undefined ? `${iconhoverLeft}px` : undefined,
            bottom:
              iconhoverBottom !== undefined
                ? `${iconhoverBottom}px`
                : undefined,
            right:
              iconhoverRight !== undefined ? `${iconhoverRight}px` : undefined,
          }}
          className={`ff-chat-icon-hover`}
        >
          <Icon name="ask_fia_icon" height={32} width={82} />
        </div>
      </div>

      {/* Modal */}
      {isVisible &&
        createPortal(
          <div
            className={classNames('ff-dynamic-modal', { open: isOpen })}
            style={{
              top: modalTop !== undefined ? `${modalTop}px` : undefined,
              left: modalLeft !== undefined ? `${modalLeft}px` : undefined,
              bottom:
                modalBottom !== undefined ? `${modalBottom}px` : undefined,
              right: modalRight !== undefined ? `${modalRight}px` : undefined,
              position: 'fixed',
              height: modalHeight,
              width: modalWidth,
            }}
          >
            <div className="ff-dynamic-modal-content">
              {headerContent && (
                <div className="ff-dynamic-modal-header">
                  <div className="header-container">
                    <div className="header-left">
                      <Icon height={16} width={16} name="fia_icon" />
                      <Typography fontWeight="medium">
                        {modalHeading}
                      </Typography>
                    </div>
                    <div className="header-right">
                      <span className="action">
                        <Tooltip title="Clear chat" placement="top">
                          <Icon
                            height={16}
                            width={16}
                            name="delete"
                            color="var(--tooltip-text-color)"
                            onClick={onClearChat}
                          />
                        </Tooltip>
                      </span>
                      <span className="action">
                        <Tooltip title="Close" placement="top">
                          <Icon
                            height={16}
                            width={16}
                            name="close"
                            color="var(--tooltip-text-color)"
                            onClick={() => closeModal()}
                          />
                        </Tooltip>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="ff-dynamic-modal-body">{children}</div>
              {footerContent && (
                <div className="ff-dynamic-modal-footer">{footerContent}</div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ChatModal;
