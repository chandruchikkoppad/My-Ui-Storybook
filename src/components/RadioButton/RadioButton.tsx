import React from 'react';
import './RadioButton.scss';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import RadioButtonProps from './radioButtonTypes';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  onChange,
  value,
  disabled = false,
  showTooltip = false,
  tooltipChildren = 'Custom JSX',
  tooltipTitle = 'Custom JSX',
  tooltipPosition = 'right',
  onBlur = () => {},
}) => {
  return (
    <div
      className="ff-radio-wrapper"
      onClick={(event: React.MouseEvent<HTMLDivElement>) =>
        event.stopPropagation()
      }
    >
      <label
        className={classNames('ff-radio', { 'ff-radio--disabled': disabled })}
      >
        <input
          disabled={disabled}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className="ff-radio-input"
        />
        <span className="ff-radio-custom" />
        <Typography color="var(--text-color)" children={label} />
      </label>
      {showTooltip && (
        <Tooltip title={tooltipTitle} placement={tooltipPosition}>
          {tooltipChildren}
        </Tooltip>
      )}
    </div>
  );
};

export default RadioButton;
