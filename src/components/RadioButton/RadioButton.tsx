import React from 'react';
import './RadioButton.scss';
import classNames from 'classnames';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  onChange,
  value,
  disabled = false,
}) => {
  return (
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
        className="ff-radio-input"
      />
      <span className="ff-radio-custom" />
      {label}
    </label>
  );
};

export default RadioButton;
