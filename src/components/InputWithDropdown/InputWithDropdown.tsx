import classNames from 'classnames';
import './InputWithDropdown.scss';
import { InputWithDropdownProps } from './types';
import Select from '../Select/Select';
import Typography from '../Typography';

const InputWithDropdown = ({
  name = '',
  label,
  value,
  disabled = false,
  required = false,
  placeholder,
  error,
  helperText,
  optionsList,
  selectedOption,
  onDropdownChangeHandler = () => {},
  onInputChangeHandler,
  onInputBlurHandler,
  optionsRequired = true,
}: InputWithDropdownProps) => {
  const isValueFilled = (value !== undefined && value >= 0) || !!value;
  return (
    <div
      className={classNames('ff-input-with-dropdown-container', {
        'ff-input-with-dropdown-container--filled': isValueFilled,
      })}
    >
      <fieldset
        className={classNames('ff-input-with-dropdown', {
          'ff-input-with-dropdown--filled': isValueFilled,
          'ff-input-with-dropdown--no-hover': isValueFilled,
          'ff-input-with-dropdown--disabled': !!disabled,
          'ff-input-with-dropdown--error': !!error,
        })}
      >
        <div className={classNames('ff-floating-label-input-container')}>
          <Typography
            as="label"
            htmlFor={name}
            className={classNames('ff-floating-label', {
              'ff-floating-label--filled': isValueFilled,
              'ff-floating-label--no-hover': isValueFilled,
              'ff-floating-label--error': !!error,
            })}
          >
            {required && <span className="ff-required-asterisk">*</span>}{' '}
            {label}
          </Typography>
          <input
            name={name}
            type="number"
            id={name}
            value={value}
            onChange={onInputChangeHandler}
            onBlur={onInputBlurHandler}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={classNames('ff-floating-input', {
              'ff-floating-input--filled': isValueFilled,
              'ff-floating-input--disabled': !!disabled,
              'ff-floating-input--error': !!error,
            })}
          />
        </div>
        <Select
          optionsList={optionsList}
          selectedOption={selectedOption}
          showLabel={false}
          showBorder={false}
          onChange={onDropdownChangeHandler}
          disabled={disabled || !optionsRequired}
          optionsRequired={optionsRequired}
          className={classNames('ff-floating-dropdown', {
            'ff-floating-dropdown--disabled': !!disabled,
            'ff-floating-dropdown--error': !!error,
          })}
        />
      </fieldset>
      {error && helperText && (
        <span className="ff-helper-text">{helperText}</span>
      )}
    </div>
  );
};

export default InputWithDropdown;
