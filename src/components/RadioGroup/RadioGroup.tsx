import React from 'react';
import RadioButton from '../RadioButton/RadioButton'; // Adjust the import path as necessary
import './RadioGroup.scss';
import classNames from 'classnames';

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  className,
}) => {
  return (
    <div className={classNames('ff-radio-group', className)}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => onChange?.(option)}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
