import React from 'react';
import classNames from 'classnames';
import { ToggleProps } from './types';
import './Toggle.scss';
import Icon from '../Icon';

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  variant = 'primary',
  disabled,
  checked = false,
  id = 'toggle',
  size = 'large',
  icon,
}) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };

  const baseIconSizes = {
    large: 10,
    medium: 8,
    small: 6,
  };

  const defaultIconSize = baseIconSizes[size as 'small' | 'medium' | 'large'];

  const defaultIcons = {
    checked: {
      name: 'check_mark',
      width: defaultIconSize,
      height: defaultIconSize,
    },
    unchecked: {
      name: 'wrong_mark',
      width: defaultIconSize,
      height: defaultIconSize,
    },
  };

  const iconNames = {
    checked: { ...defaultIcons.checked, ...icon?.checked },
    unchecked: { ...defaultIcons.unchecked, ...icon?.unchecked },
  };

  return (
    <div className="ff--switch-container">
      <input
        className="ff--switch-checkbox"
        id={`ff-toggle-${id}`}
        type="checkbox"
        disabled={!!disabled}
        onChange={handleChange}
        checked={checked}
      />
      <label
        className={classNames(
          `ff--switch-label default--${size} ff--switch-label--${variant}`,
          {
            'ff--switch-label--disabled': disabled,
          }
        )}
        htmlFor={`ff-toggle-${id}`}
      >
        <span
          className={classNames(
            `ff--switch-button ff--switch-button--${size}`,
            {
              checked: checked,
            }
          )}
        >
          {checked ? (
            <Icon
              name={iconNames.checked.name}
              width={iconNames.checked.width}
              height={iconNames.checked.height}
              className={`ff-checked-icon--${variant}`}
              disabled={disabled}
              cursorType="pointer"
            />
          ) : (
            <Icon
              name={iconNames.unchecked.name}
              width={iconNames.unchecked.width}
              height={iconNames.unchecked.height}
              className={`ff-unchecked-icon--${variant}`}
              disabled={disabled}
              cursorType="pointer"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
