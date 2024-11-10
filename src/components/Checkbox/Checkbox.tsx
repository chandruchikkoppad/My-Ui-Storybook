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
}) => {
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setChecked((prev) => !prev), onChange?.(event);
    }
  };

  return (
    <label className="ff-checkbox--overlay" htmlFor={id}>
      <input
        type="checkbox"
        className="ff-checkbox-input"
        id={id}
        name={name}
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <span
        className={classNames('ff-checkbox-custom', {
          'ff-checkbox-checked': checked,
          'ff-storybook-checkbox--partial': partial && !checked,
        })}
      >
        {checked && (
          <Icon
            name="tick"
            height={6}
            width={8}
            color="var(--primary-icon-color)"
          />
        )}
      </span>
      <Typography as="label">{label}</Typography>
    </label>
  );
};

export default Checkbox;
