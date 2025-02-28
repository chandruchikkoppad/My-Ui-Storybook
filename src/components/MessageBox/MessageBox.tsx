import React from 'react';

import './MessageBox.scss';
import Typography from '../Typography';

import type { MessageBoxProps } from './types';
import classNames from 'classnames';

const MessageBox: React.FC<MessageBoxProps> = ({
  content,
  isVisible,
  maxWidth = 300,
  onClick,
  isClickable = true,
  arrowPosition = 'left',
}) => {
  return (
    <div
      onClick={onClick}
      style={
        {
          width: `${maxWidth}px`,
          '--triangle-position': `${maxWidth - 4}px`,
        } as React.CSSProperties
      }
      className={classNames('ff-chat-msg-box', {
        visible: isVisible,
        hidden: !isVisible,
        pointer: isClickable,
        default: !isClickable,
        'chat-arrow-left': arrowPosition === 'left',
        'chat-arrow-right': arrowPosition !== 'left',
      })}
    >
      <div className={classNames('content', `arrow-${arrowPosition}`)}>
        <Typography>{content}</Typography>
      </div>
    </div>
  );
};

export default MessageBox;
