import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './ChatModalAi.scss';
import { createPortal } from 'react-dom';
import Typography from '../Typography';
import Icon from '../Icon';
import type { ChatModalAiProps, ChatModalRef } from './types';
import classNames from 'classnames';

const ChatModalAi = forwardRef<ChatModalRef, ChatModalAiProps>(
  (
    {
      iconName,
      hoverTitle,
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
      children,
      onVisibilityChange,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openModal = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsVisible((prev) => !prev);
      onVisibilityChange?.(!isVisible);
      timerRef.current = setTimeout(() => setIsOpen((prev) => !prev), 10);
    };

    const closeModal = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsOpen(false);
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        onVisibilityChange?.(false);
      }, 300);
    };

    useImperativeHandle(ref, () => ({
      closeModal,
    }));

    useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    return (
      <>
        <div
          style={{
            top: iconTop !== undefined ? `${iconTop}px` : undefined,
            left: iconLeft !== undefined ? `${iconLeft}px` : undefined,
            bottom: iconBottom !== undefined ? `${iconBottom}px` : undefined,
            right: iconRight !== undefined ? `${iconRight}px` : undefined,
          }}
          className="ff-ai-dynamic-icon-container"
        >
          <Icon
            className="ff-ai-dynamic-icon"
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
                iconhoverRight !== undefined
                  ? `${iconhoverRight}px`
                  : undefined,
            }}
            className="ff-ai-chat-icon-hover"
          >
            <div className="ai-hover-leaf">
              <Typography
                fontWeight="bold"
                fontSize={14}
                color="var(--chatbot-leaf-text)"
              >
                {hoverTitle}
              </Typography>
            </div>
          </div>
        </div>

        {isVisible &&
          createPortal(
            <div
              className={classNames('ff-ai-dynamic-modal', { open: isOpen })}
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
              <div className="ff-ai-dynamic-modal-content">
                {headerContent && (
                  <div className="ff-ai-dynamic-modal-header">
                    {headerContent}
                  </div>
                )}
                <div className="ff-ai-dynamic-modal-body">{children}</div>
                {footerContent && (
                  <div className="ff-ai-dynamic-modal-footer">
                    {footerContent}
                  </div>
                )}
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }
);

export default ChatModalAi;
