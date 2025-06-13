import { forwardRef } from 'react';
import Typography from '../Typography';
import './StatusIndicator.scss';
import { StatusIndicatorProps } from './types';
import Icon from '../Icon';

const StatusIndicator = forwardRef<HTMLButtonElement, StatusIndicatorProps>(
  (
    {
      label = 'Status',
      iconName = 'update_icon',
      onClick,
      isDisable = false,
      variant = 'default',
      backgroundColor = false,
      border = false,
    },
    ref
  ) => {
    const resolvedIconName = variant === 'danger' ? 'close' : iconName;

    const variantColorMap: Record<string, string> = {
      default: 'var(--ff-avatar-background-color)',
      success: 'var(--status-success-text-color)',
      danger: 'var(--ff-delete-button-attachment)',
    };

    const iconColor = variantColorMap[variant] || variantColorMap.default;

    return (
      <button
        disabled={isDisable}
        onClick={onClick}
        className={`
         ff-status-indicator
          ff-status-indicator--${variant}
          ${
            backgroundColor
              ? `ff-status-indicator--with-bg ff-status-indicator--${variant}-bg`
              : ''
          }
          ${
            border
              ? `ff-status-indicator--with-border ff-status-indicator--${variant}-border`
              : ''
          }
        `}
        ref={ref}
      >
        <div className="ff-status-indicator__content">
          <Icon
            name={resolvedIconName}
            color={iconColor}
            className={`ff-status-indicator__icon ff-status-indicator__icon--${variant}`}
          />

          <Typography
            as="div"
            fontSize={12}
            className={`ff-status-indicator__label ff-status-indicator__label--${variant}`}
            fontWeight="medium"
            lineHeight="20px"
          >
            {label}
          </Typography>
        </div>
      </button>
    );
  }
);

export default StatusIndicator;
