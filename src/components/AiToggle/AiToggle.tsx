import React from 'react';
import { ToggleAiIconProps } from './types';
import './AiToggle.scss';

import Typography from '../Typography';
import classNames from 'classnames';

const AiToggle: React.FC<ToggleAiIconProps> = ({
  onChange,
  disabled,
  checked = false,
  id = 'toggle',
  path,
}) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="ff--ai-switch-container">
      <input
        className="ff--ai-switch-checkbox"
        id={`ff-toggle-${id}`}
        type="checkbox"
        disabled={!!disabled}
        onChange={handleChange}
        checked={checked}
      />
      <label
        className={classNames(`ff--ai-switch-label`, {
          'ff--ai-switch-label--disabled': disabled,
        })}
        htmlFor={`ff-toggle-${id}`}
      >
        <span className="ff--ai-switch-content">
          <span className="ff--ai-switch-content">
            <Typography
              className={classNames('ff--ai-switch-typography', {
                left: checked,
                right: !checked,
              })}
              as="div"
              fontWeight="bold"
              fontSize={18}
              color={
                checked
                  ? 'var(--base-bg-color)'
                  : 'var(--ff-ai-toggle-text-color)'
              }
            >
              AI
            </Typography>
            <img className="ff--ai-switch-image" src={path} alt="AI image" />
          </span>
        </span>
      </label>
    </div>
  );
};

export default AiToggle;
