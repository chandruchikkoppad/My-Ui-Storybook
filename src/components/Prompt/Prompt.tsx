import React, { forwardRef, useEffect, useState } from 'react';

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
    onChange,
    onBlur,
    onFocus,
  }) => {
    const [promptValue, setPromptValue] = useState<string>(value);

    useKeyboardActions([
      { key: 'Enter', action: () => handleKeyBoard('Enter') },
    ]);

    const handleKeyBoard = (key: string) => {
      if (key === 'Enter') {
        if (promptValue) {
          submitPrompt?.(promptValue.trim());
        }
      }
    };

    useEffect(() => {
      if (value !== promptValue) {
        setPromptValue(value);
      }
    }, [value]);

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
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={promptValue}
        />
      </div>
    );
  }
);

export default Prompt;
