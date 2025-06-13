import { forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import './Input.scss';
import { InputProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

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
      displayErrorImmediately = true,
      showSearchIcon = false,
      searchIconProps,
      handleSearchIconClick,
      readOnly = false,
      adjustToValidRange = true,
      pattern,
      background,
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
    const [touched, setTouched] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (value !== internalValue) {
        setInternalValue(value);
      }
    }, [value]);

    const handleIncrementDecrement = (action: string) => {
      const parsedValue = parseInt(internalValue.toString(), 10) || 0;
      let updatedValue = parsedValue;

      if (action === 'increment') {
        updatedValue = Math.min(parsedValue + 1, numericMax);
      } else if (action === 'decrement') {
        updatedValue = Math.max(parsedValue - 1, numericMin);
      }
      setInternalValue(updatedValue);
      setUpdatedNumberValue(updatedValue);

      if (onChange) {
        const syntheticEvent = {
          target: { value: updatedValue.toString(), name },
          currentTarget: { value: updatedValue.toString(), name },
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type === 'number') {
        const invalidKeys = ['e', 'E', '+', '-'];
        if (invalidKeys.includes(e.key)) {
          e.preventDefault();
        }
      }
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
          setInternalValue(parsedValue);
          setUpdatedNumberValue(parsedValue);
          onChange?.(e);
        }
      } else {
        setInternalValue(newValue);
        onChange?.(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (!displayErrorImmediately) {
        setTouched(false);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (!displayErrorImmediately) {
        setTouched(true);
      }
      if (type === 'number' && adjustToValidRange === true) {
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
          const syntheticEvent = {
            target: { value: correctedValue.toString(), name },
            currentTarget: { value: correctedValue.toString(), name },
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          onChange?.(syntheticEvent);
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
                  'ff-input-label-container--danger':
                    (displayErrorImmediately || touched) && !!error,
                }
              )}
              htmlFor={name}
            >
              {required && <span className="required-asterisk">*</span>}
              <span
                className={classNames(
                  `ff-input-label ff-input-label--${variant}`,
                  {
                    'ff-input-label--no-hover': !!internalValue,
                    'ff-input-label--disabled': !!disabled,
                    'ff-input-label--danger':
                      (displayErrorImmediately || touched) && !!error,
                    'ff-input-label--focused': isFocused,
                  }
                )}
              >
                {label}
              </span>
            </label>
          )}
          <input
            style={{ background: background || 'transparent' }}
            readOnly={readOnly}
            ref={ref}
            name={name}
            value={internalValue || value}
            type={type}
            spellCheck={false}
            id={name}
            className={classNames(
              `ff-input ff-input-${variant} default-input ff-input--${size}`,
              {
                ['ff-input--transparentBackground']: !!transparentBackground,
                'ff-input--no-hover': !!internalValue,
                'ff-input--disabled': !!disabled,
                'ff-input--danger':
                  (displayErrorImmediately || touched) && !!error,
                'ff-input--no-border': !!noBorder,
                'ff-input--placeholder': !isLabelRequired,
                'ff-input--number': isTypeNumber,
                'ff-input--focused': isFocused,
                'ff-input--isSearchIcon': showSearchIcon,
              },
              `${className}`
            )}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            min={minValue}
            max={maxValue}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {type === 'number' && (
            <div
              className={classNames('arrow-container', {
                ['arrow-container-label']: label,
                ['arrow-container-label-error']: !!error && (label || required),
                ['arrow-container-no-label-error']: !!error && !label,
              })}
            >
              <Icon
                name="arrow_up"
                hoverEffect={false}
                height={7}
                width={12}
                color={
                  value == maxValue
                    ? 'var(--private-chip-bg-color)'
                    : 'var(--text-area-default-color)'
                }
                onClick={() => handleIncrementDecrement('increment')}
                disabled={disabled}
              />
              <Icon
                name="arrow_down"
                height={7}
                width={12}
                color={
                  value == minValue
                    ? 'var(--private-chip-bg-color)'
                    : 'var(--text-area-default-color)'
                }
                onClick={() => handleIncrementDecrement('decrement')}
                disabled={disabled}
              />
            </div>
          )}
          {showSearchIcon && !(type === 'number') && (
            <div
              className={classNames('arrow-container', {
                ['arrow-container-searchIcon']: showSearchIcon,
              })}
            >
              <Tooltip title={searchIconProps?.toolTipTitle || 'search'}>
                <Icon
                  name={searchIconProps?.name || 'search'}
                  hoverEffect={false}
                  height={searchIconProps?.height || 14}
                  width={searchIconProps?.height || 14}
                  color="var(--text-area-default-color)"
                  onClick={(e) => {
                    if (handleSearchIconClick) {
                      handleSearchIconClick(e);
                    }
                  }}
                  disabled={searchIconProps?.disabled}
                />
              </Tooltip>
            </div>
          )}
          {reserveHelperTextSpace && (
            <span
              className={classNames('ff-input-message', {
                'ff-input-message--space': !!reserveHelperTextSpace,
                'ff-input-message--danger':
                  (displayErrorImmediately || touched) && !!error,
              })}
            >
              {(displayErrorImmediately || touched) && error ? helperText : ''}
            </span>
          )}
          {!reserveHelperTextSpace &&
            (displayErrorImmediately || touched) &&
            helperText &&
            error && (
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
