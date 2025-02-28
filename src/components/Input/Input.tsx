import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import './Input.scss';
import { InputProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Icon from '../Icon';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      variant = 'primary',
      name = '',
      label,
      disabled = false,
      required = false,
      placeholder = 'Enter input',
      value = type === 'number' ? 0 : '',
      helperText = '',
      error,
      noBorder,
      className = '',
      onChange,
      onBlur,
      onFocus,
      autoComplete = 'off',
      autoFocus = false,
      minValue = -Infinity,
      maxValue = Infinity,
      transparentBackground = false,
      size = 'small',
      isLabelRequired = true,
      onClick,
      onKeyUp,
      reserveHelperTextSpace = false,
      setUpdatedNumberValue = () => {},
      ...props
    },
    ref
  ) => {
    const isValueFilled = !checkEmpty(value);
    const isTypeNumber = type === 'number';
    const numericMin =
      minValue !== undefined ? parseInt(minValue as string, 10) || 0 : 0;
    const numericMax =
      maxValue !== undefined
        ? parseInt(maxValue as string, 10) || Infinity
        : Infinity;

    const [internalValue, setInternalValue] = useState(value);

    const handleIncrementDecrement = (action: string) => {
      const parsedValue = parseInt(value.toString(), 10) || 0;
      let updatedValue = parsedValue;

      if (action === 'increment') {
        updatedValue = Math.min(parsedValue + 1, numericMax);
      } else if (action === 'decrement') {
        updatedValue = Math.max(parsedValue - 1, numericMin);
      }
      setInternalValue(updatedValue);
      setUpdatedNumberValue(updatedValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: any = e.target.value;

      if (type === 'number') {
        if (newValue === '' || newValue === '-') {
          setInternalValue(newValue);
          setUpdatedNumberValue(newValue);
          onChange?.(e);
          return;
        }

        const parsedValue = Number(newValue);

        if (!isNaN(parsedValue)) {
          if (parsedValue >= numericMin && parsedValue <= numericMax) {
            setInternalValue(parsedValue);
            setUpdatedNumberValue(parsedValue);
            onChange?.(e);
          } else {
            setInternalValue(internalValue); 
          }
        }
      } else {
        setInternalValue(newValue);
        onChange?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === 'number') {
        let parsedValue: any = Number(internalValue);

        if (internalValue === '' || internalValue === '-') {
          parsedValue = minValue;
        }
        if (
          isNaN(parsedValue) ||
          parsedValue < numericMin ||
          parsedValue > numericMax
        ) {
          const correctedValue = Math.max(
            numericMin,
            Math.min(parsedValue, numericMax)
          );
          setInternalValue(correctedValue);
          setUpdatedNumberValue(correctedValue);
        }
      }

      onBlur?.(e);
    };

    return (
      <fieldset
        className={classNames('ff-input-fieldset', {
          'ff-input-fieldset--disabled': disabled,
        })}
      >
        <div
          className={classNames('ff-input-container', {
            'ff-input-container--float': isValueFilled,
            'ff-input-container--disabled': !!disabled,
          })}
        >
          {isLabelRequired && (
            <label
              className={classNames(
                `ff-input-label-container ff-input-label-container--${size}`,
                {
                  'ff-input-label-container--danger': !!error,
                }
              )}
              htmlFor={name}
            >
              {required && <span className="required-asterisk">*</span>}
              <span
                className={classNames(
                  `ff-input-label ff-input-label--${variant}`,
                  {
                    'ff-input-label--no-hover': !!value,
                    'ff-input-label--disabled': !!disabled,
                    'ff-input-label--danger': !!error,
                  }
                )}
              >
                {label}
              </span>
            </label>
          )}
          <input
            ref={ref}
            name={name}
            value={value}
            type={type}
            spellCheck={false}
            id={name}
            className={classNames(
              `ff-input ff-input-${variant} default-input ff-input--${size}`,
              {
                ['ff-input--transparentBackground']: !!transparentBackground,
                'ff-input--no-hover': !!value,
                'ff-input--disabled': !!disabled,
                'ff-input--danger': !!error,
                'ff-input--no-border': !!noBorder,
                'ff-input--placeholder': !isLabelRequired,
                'ff-input--number': isTypeNumber,
              },
              `${className}`
            )}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            min={minValue}
            max={maxValue}
            onClick={onClick}
            onKeyUp={onKeyUp}
            {...props}
          />
          {type === 'number' && (
            <div
              className={classNames('arrow-container', {
                ['arrow-container-label']: label,
                ['arrow-container-label-error']: !!error,
              })}
            >
              <Icon
                name="arrow_up"
                hoverEffect={false}
                height={7}
                width={12}
                color="var(--text-area-default-color)"
                onClick={() => handleIncrementDecrement('increment')}
              />

              <Icon
                name="arrow_down"
                height={7}
                width={12}
                color="var(--text-area-default-color)"
                onClick={() => handleIncrementDecrement('decrement')}
              />
            </div>
          )}
          {reserveHelperTextSpace && (
            <span
              className={classNames('ff-input-message', {
                'ff-input-message--space': !!reserveHelperTextSpace,
                'ff-input-message--danger': !!error,
              })}
            >
              {helperText}
            </span>
          )}
          {!reserveHelperTextSpace && helperText && error && (
            <span
              className={classNames('ff-input-message', {
                'ff-input-message--danger': !!error,
              })}
            >
              {helperText}
            </span>
          )}
        </div>
      </fieldset>
    );
  }
);

export default Input;
