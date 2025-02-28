import { forwardRef } from 'react';
import classNames from 'classnames';
import './InputWithDropdown.scss';
import { InputWithDropdownProps } from './types';
import Select from '../Select/Select';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const InputWithDropdown = forwardRef<HTMLInputElement, InputWithDropdownProps>(
  (
    {
      name = '',
      label,
      value,
      disabled = false,
      required = false,
      placeholder,
      error,
      helperText,
      optionsList,
      selectedOption = { label: '', value: '' },
      autoComplete = 'off',
      onDropdownChangeHandler = () => { },
      onInputChangeHandler,
      onInputBlurHandler,
      onClick,
      onKeyUp,
      onFocus,
      optionsRequired = true,
      dropdownPosition = 'right',
      type = 'text',
      leftDropDownPositionZindex,
      rightDropDownPositionZindex
    },
    ref
  ) => {
    const isValueFilled = !checkEmpty(value) || dropdownPosition === 'left';

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
            [`ff-input-with-dropdown--${dropdownPosition}`]: dropdownPosition,
          })}
        >
          {dropdownPosition === 'left' && (
            <>
              <Select
                optionsList={optionsList}
                selectedOption={selectedOption}
                showLabel={false}
                showBorder={false}
                onChange={onDropdownChangeHandler}
                disabled={disabled || !optionsRequired}
                optionZIndex={leftDropDownPositionZindex}
                optionsRequired={optionsRequired}
                className={classNames('ff-floating-dropdown', {
                  'ff-floating-dropdown--disabled': !!disabled,
                  'ff-floating-dropdown--error': !!error,
                  'ff-floating-dropdown--left': dropdownPosition === 'left',
                })}
                width={94}
                height={30}
              />
              <div className="seperatorline" />
            </>
          )}
          <div className={classNames('ff-floating-label-input-container')}>
            <Typography
              as="label"
              htmlFor={name}
              className={classNames('ff-floating-label', {
                'ff-floating-label--filled': isValueFilled,
                'ff-floating-label--no-hover': isValueFilled,
                'ff-floating-label--error': !!error,
              })}
              required={required}
            >
              {label}
            </Typography>
            <input
              ref={ref}
              name={name}
              type={type}
              id={name}
              value={value}
              onChange={onInputChangeHandler}
              onBlur={onInputBlurHandler}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              disabled={disabled}
              onClick={onClick}
              onKeyUp={onKeyUp}
              onFocus={onFocus}
              className={classNames('ff-floating-input', {
                'ff-floating-input--filled': isValueFilled,
                'ff-floating-input--disabled': !!disabled,
                'ff-floating-input--error': !!error,
                'ff-floating-input--left-dropdown': dropdownPosition === 'left',
              })}
            />
          </div>
          {dropdownPosition === 'right' && (
            <Select
              optionsList={optionsList}
              selectedOption={selectedOption}
              showLabel={false}
              showBorder={false}
              optionZIndex={rightDropDownPositionZindex
              }
              onChange={onDropdownChangeHandler}
              disabled={disabled || !optionsRequired}
              optionsRequired={optionsRequired}
              className={classNames('ff-floating-dropdown', {
                'ff-floating-dropdown--disabled': !!disabled,
                'ff-floating-dropdown--error': !!error,
              })}
              width={120}
              height={30}
            />
          )}
        </fieldset>
        {error && helperText && (
          <span className="ff-helper-text">{helperText}</span>
        )}
      </div>
    );
  }
);

export default InputWithDropdown;
