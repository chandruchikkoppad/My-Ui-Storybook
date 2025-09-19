import React from 'react';
import './RadioGroup.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import RadioButton from '../RadioButton';

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  label,
  isLabel = false,
  isAsteriskRequired = false,
  className,
  classNameForLabel,
  isError = false,
  errorMessage = '',
  onBlur = () => {},
  disabled,
}) => {
  return (
    <>
      <div
        className={classNames('ff-radio-group', className)}
        onBlur={onBlur}
      >
        {isLabel && (
          <Typography
            fontWeight="semi-bold"
            className={classNames(classNameForLabel)}
          >
            {' '}
            {isAsteriskRequired && (
              <Typography className={classNames('ff-required-asterisk')}>
                *{' '}
              </Typography>
            )}
            {label}{' '}
          </Typography>
        )}
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            showTooltip={option?.showTooltip}
            tooltipChildren={option?.tooltipChildren}
            tooltipTitle={option?.tooltipTitle}
            tooltipPosition={option?.tooltipPosition}
            name={name}
            value={option.value}
            checked={
              selectedValue?.toLowerCase() === option.value?.toLowerCase()
            }
            onChange={() => onChange?.(option)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
      {isError && (
        <Typography
          as="div"
          lineHeight="15px"
          fontSize={10}
          color="var(--error_light)"
          className="ff-radio-error-msg"
        >
          {errorMessage}
        </Typography>
      )}
    </>
  );
};

export default RadioGroup;
