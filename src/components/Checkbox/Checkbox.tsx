import React, { useEffect, useState } from 'react';
import './Checkbox.scss';
import classNames from 'classnames';
import Icon from '../Icon';
import { CheckboxProps } from './types';
import '../../assets/styles/_colors.scss';
import Typography from '../Typography';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  disabled = false,
  checked: initialChecked = false,
  partial = false,
  onChange,
  variant,
  isDefaultHover = false, 
}) => {
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  return (
    <label className="ff-checkbox--overlay" htmlFor={id}>
      <input
        type="checkbox"
        className="ff-checkbox-input"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span
     
     className={classNames('ff-checkbox-custom', {
      'ff-checkbox-checked': checked,
      'ff-storybook-checkbox--partial': partial && !checked,
      [`ff-checkbox--${variant}`]: variant,
      [`ff-checkbox-checked--${variant}`]: checked && variant,
      'ff-checkbox-hover-shadow':isDefaultHover,
    })}
      >
        {checked && (
          <Icon
            name="tick"
            color="var(--primary-icon-color)"
            className="ff-tick-icon"
          />
        )}
      </span>
      <Typography as="span">{label}</Typography>
    </label>
  );
};

export default Checkbox;
