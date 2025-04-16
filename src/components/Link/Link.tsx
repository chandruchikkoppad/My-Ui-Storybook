import { forwardRef } from 'react';
import classNames from 'classnames';
import './Link.scss';
import { LinkProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

const Link = forwardRef<HTMLInputElement, LinkProps>(
  (
    {
      type = 'text',
      variant = 'primary',
      name = '',
      label,
      disabled = false,
      disableLinkIcon = false,
      required = false,
      placeholder = 'Attach Link',
      value,
      error,
      helperText,
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
      isViewMode = false,
      ...props
    },
    ref
  ) => {
    const isValueFilled = !checkEmpty(value);
    const handleClickLink = () => {
      if (value && !error) {
        window.open(value, '_blank');
      }
    };
    return (
      <fieldset
        className={classNames('ff-link-input-fieldset', {
          'ff-link-input-fieldset--disabled': disabled,
        })}
      >
        <div
          className={classNames('ff-link-input-container', {
            'ff-link-input-container--float': isValueFilled,
            'ff-link-input-container--disabled': !!disabled,
          })}
        >
          {isLabelRequired && (
            <label
              className={classNames(
                `ff-link-input-label-container ff-link-input-label-container--${size}`,
                {
                  'ff-link-input-label-container--danger': !!error,
                }
              )}
              htmlFor={name}
            >
              {required && <span className="required-asterisk">*</span>}
              <span
                className={classNames(
                  `ff-link-input-label ff-link-input-label--${variant}`,
                  {
                    'ff-link-input-label--no-hover': !!value,
                    'ff-link-input-label--disabled': !!disabled,
                    'ff-link-input-label--danger': !!error,
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
              `ff-link-input ff-link-input-${variant} default-input ff-link-input--${size}`,
              {
                ['ff-link-input--transparentBackground']:
                  !!transparentBackground,
                'ff-link-input--no-hover': !!value,
                'ff-link-input--disabled': !!disabled,
                'ff-link-input--danger': !!error,
                'ff-link-input--no-border': !!noBorder,
                'ff-link-input--placeholder': !isLabelRequired,
              },
              `${className}`
            )}
            placeholder={placeholder}
            disabled={isViewMode || disabled}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            min={minValue}
            max={maxValue}
            onClick={onClick}
            onKeyUp={onKeyUp}
            {...props}
          />

          <div className="input-link-icon">
            <Tooltip title="Click here to navigate">
              <Icon
                name="link"
                disabled={error || !isValueFilled || disableLinkIcon}
                onClick={error ? () => {} : handleClickLink}
              />
            </Tooltip>
          </div>
        </div>
        {helperText && error && (
          <span
            className={classNames('ff-link-input-message', {
              'ff-link-input-message--danger': !!error,
            })}
          >
            {helperText}
          </span>
        )}
      </fieldset>
    );
  }
);

export default Link;
