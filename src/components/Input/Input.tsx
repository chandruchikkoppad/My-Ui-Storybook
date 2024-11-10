import classNames from 'classnames';
import './Input.scss';
import { InputProps } from './types';

const Input = ({
  type = 'text',
  variant = 'primary',
  name = '',
  label,
  disabled = false,
  required = false,
  placeholder = 'Enter input',
  value = '',
  helperText = '',
  error,
  noBorder,
  className = '',
  onChange,
  onBlur,
  onFocus,
  autoComplete = 'off',
  minValue = -Infinity,
  maxValue = Infinity,
  transparentBackground = false,
  ...props
}: InputProps) => {
  return (
    <div
      className={classNames('ff-input-container', {
        'ff-input-container--float': !!value,
        'ff-input-container--disabled': !!disabled,
      })}
    >
      <label
        htmlFor={name}
        className={classNames('ff-input-label-container', {
          'ff-input-label-container--danger': !!error,
        })}
      >
        {required && <span className="required-asterisk">*</span>}
        <span
          className={classNames(`ff-input-label ff-input-label--${variant}`, {
            'ff-input-label--no-hover': !!value,
            'ff-input-label--disabled': !!disabled,
            'ff-input-label--danger': !!error,
          })}
        >
          {label}
        </span>
      </label>
      <input
        name={name}
        value={value}
        type={type}
        spellCheck={false}
        id={name}
        className={classNames(
          `ff-input ff-input--${variant} default-input `,
          {
            ['ff-input--transparentBackground']: !!transparentBackground,
            'ff-input--no-hover': !!value,
            'ff-input--disabled': !!disabled,
            'ff-input--danger': !!error,
            'ff-input--no-border': !!noBorder,
          },
          `${className}`
        )}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        min={minValue}
        max={maxValue}
        {...props}
      />

      {helperText && error && (
        <span
          className={classNames('ff-input-message', {
            'ff-input-message--danger': !!error,
          })}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
