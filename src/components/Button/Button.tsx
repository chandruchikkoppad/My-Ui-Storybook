import { forwardRef } from 'react';
import './Button.scss';
import '../../assets/styles/_colors.scss';
import Icon from '../Icon';
import { ButtonProps } from './types';
import classNames from 'classnames';
import Typography from '../Typography';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      backgroundColor,
      border,
      size = 'small',
      onClick,
      onCopy,
      label,
      disabled = false,
      children = null,
      type = 'button',
      className = '',
      style = {},
      iconName,
      iconPosition = 'left',
      isChooseFile = false,
      buttonWidth = 'auto',
      buttonHeight = 'auto',
      handleCloseIcon,
      selectedFile,
      fontSize = 10,
      typographyStyle,

      iconColor = '',
      ...props
    }: ButtonProps,
    ref
  ) => {
    const renderIcon = () =>
      iconName && (
        <div
          onClick={(e) => {
            if (iconName === 'close') {
              e.stopPropagation();
              handleCloseIcon?.();
            }
          }}
        >
          <Icon
            height={isChooseFile ? 14 : 8}
            width={isChooseFile ? 14 : 8}
            color={
              iconName === 'close'
                ? 'var(--ff-delete-button-attachment)'
                : variant === 'danger'
                ? 'var(--status-rejected-text-color)'
                : iconColor ||
                  (variant === 'primary'
                    ? 'var(--primary-icon-color)'
                    : 'var(--secondary-icon-color)')
            }
            name={iconName}
            className="ff-button-icon"
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
          { 'ff-button-choose-file': isChooseFile },
          { 'ff-button-choose-file-text': selectedFile }
        )}
        style={{
          backgroundColor,
          border,
          ...style,
          width: buttonWidth,
          height: buttonHeight,
        }}
        onClick={onClick}
        onCopy={onCopy}
        disabled={disabled}
        {...props}
      >
        {iconPosition === 'left' && renderIcon()}
        <Typography
          fontSize={fontSize}
          style={{ ...typographyStyle }}
          fontWeight="semi-bold"
          className={classNames(`ff-button-${variant}--text`, {
            'ff-button-choose-file-text': selectedFile,
          })}
        >
          {label}
        </Typography>
        {iconPosition === 'right' && renderIcon()}
        {children}
      </button>
    );
  }
);
export default Button;
