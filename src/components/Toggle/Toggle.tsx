import React from 'react';
import classNames from 'classnames';
import { ToggleProps } from './types';
import './Toggle.scss';

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  variant = 'primary',
  disabled,
  checked = false,
  id = 'toggle',
}) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={classNames('ff--switch-container')}>
      <input
        className={classNames(
          `ff--switch-checkbox ff--switch-checkbox--default ff--switch`
        )}
        id={`ff-toggle-${id}`}
        type="checkbox"
        disabled={!!disabled}
        onChange={handleChange}
        checked={checked}
      />
      <label
        className={classNames(
          `ff--switch-label ff--switch default ff--switch-label--${variant}`,
          {
            'ff--switch-label--disabled': disabled,
          }
        )}
        htmlFor={`ff-toggle-${id}`}
      >
        <span className="ff--switch-button">
          {checked ? (
            <div className="ff-check-symbol"></div>
          ) : (
            <div className="ff-wrong-symbol">
              <div className="ff-cross-line"></div>
              <div className="ff-cross-line"></div>
            </div>
          )}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
