import React, { forwardRef, useRef } from 'react';

import './Prompt.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

import type { promptProp } from './types';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';
import classNames from 'classnames';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const Prompt = forwardRef<HTMLInputElement, promptProp>(
  ({
    width = 300,
    height = 40,
    iconHeight = 16,
    iconWidth = 16,
    placeholder = 'Enter text',
    iconName = 'right_arrow_filled_icon',
    iconPosition = 'left',
    borderRadius = 4,
    autoFocus = false,
    value = '',
    iconColor = 'var(--brand-color)',
    tooltipTitle = 'send',
    submitPrompt,
    onPromptChange,
    onBlur,
    onFocus,
  }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useKeyboardActions(
      [{ key: 'Enter', action: () => handleKeyBoard('Enter') }],
      containerRef
    );

    const handleKeyBoard = (key: string) => {
      if (key === 'Enter') {
        if (value) {
          submitPrompt?.(value.trim());
        }
      }
    };

    return (
      <div
        className={classNames('ff-prompt-container', {
          'icon-left': iconPosition === 'left',
          'icon-right': iconPosition !== 'left',
        })}
        style={
          {
            width: `${width}px`,
            height: `${height}px`,
            borderRadius,
          } as React.CSSProperties
        }
        ref={containerRef}
      >
        <Tooltip placement="top" title={tooltipTitle}>
          <Icon
            name={iconName}
            className="ff-prompt-icon"
            height={iconHeight}
            width={iconWidth}
            onClick={submitPrompt}
            color={iconColor}
            disabled={checkEmpty(value)}
          />
        </Tooltip>
        <input
          className="ff-prompt-input"
          type="text"
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={onPromptChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
        />
      </div>
    );
  }
);

export default Prompt;
