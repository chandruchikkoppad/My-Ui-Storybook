import React from 'react';
import Icon from '../Icon';
import './Avatar.scss';
import { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({
  variant="small",
  iconName,
  iconColor= 'var(--avatar-icon-color)',
  customAvatarSize,
  customIconSize,
  backgroundColor,
  label,
  labelFontSize,
}) => {
  const truncatedLabel = label?.slice(0, 2);
  return (
    <div
      className={`ff-avatar ff-avatar--${variant}`}
      style={{ height: `${customAvatarSize}px`, width: `${customAvatarSize}px`, backgroundColor }}
    >
     {label ? (
        <span
          className="ff-avatar-label"
          style={{ fontSize: labelFontSize || '14px', color: iconColor }}
        >
          {truncatedLabel}
        </span>
      ) : (
        <Icon
          name={iconName!}
          height={customIconSize}
          width={customIconSize}
          color={iconColor}
        />
      )}
    </div>
  );
};

export default Avatar;
