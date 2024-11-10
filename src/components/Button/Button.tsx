import { forwardRef } from 'react';
import './Button.scss';
import '../../assets/styles/_colors.scss';
import Icon from '../Icon';
import { ButtonProps } from './types';
import classNames from 'classnames';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      backgroundColor,
      size = 'small',
      onClick,
      label,
      disabled = false,
      children = null,
      type = 'button',
      className = '',
      style = {},
      iconName,
      iconPosition = 'left',
      ...props
    }: ButtonProps,
    ref
  ) => {
    const renderIcon = () =>
      iconName && (
        <div>
          <Icon
            height={8}
            width={8}
            color={
              variant === 'primary'
                ? `var(--primary-icon-color)`
                : `var(--secondary-icon-color)`
            }
            name={iconName}
          />
        </div>
      );
    return (
      <button
        type={type}
        ref={ref}
        className={classNames(
          'ff-button',
          `ff-button--${size}`,
          `ff-button--${variant}`,
          `${className}`,
          'button'
        )}
        style={{ backgroundColor, ...style }}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {iconPosition === 'left' && renderIcon()}
        <div className={classNames(`ff-button-${variant}--text`)}>{label}</div>
        {iconPosition === 'right' && renderIcon()}
        {children}
      </button>
    );
  }
);
export default Button;
