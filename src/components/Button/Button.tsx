import './Button.scss';
import { ButtonProps } from './types';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = 'primary',
  backgroundColor,
  size = 'medium',
  onClick,
  label,
  disabled = false,
  children = null,
  type = 'button',
  className = '',
  style = {},
  transparentBackground = true,
  withIcon = false,
  iconName,
  iconPosition,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className="button"
      style={{ backgroundColor, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;
