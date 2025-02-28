import React from 'react';
import './MobileSkin.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { MobileSkinProps } from './MobileSkinInterface';

const MobileSkin: React.FC<MobileSkinProps> = ({
  children,
  orientation = '',
  navBarIcons,
  mobileHeight = 448,
  mobileWidth = 220,
  UtilityBar,
}) => {
  const isPortrait = orientation === 'portrait';
  const containerHeight = isPortrait ? mobileHeight : mobileWidth;
  const containerWidth = isPortrait ? mobileWidth : mobileHeight;

  return (
    <div
      className={`ff-mobileskin-wrapper ${
        isPortrait ? 'portrait' : 'landscape'
      }`}
    >
      <div
        className="ff-mobileskin-container"
        style={{
          height: containerHeight + 16,
          width: containerWidth + 16,
        }}
      >
        <div
          className="ff-mobile-container"
          style={{
            width: containerWidth,
            height: containerHeight,
          }}
        >
          <div className="ff-mobile-image-container">
            {React.isValidElement(children) ? (
              children
            ) : (
              <img
                src={children as string}
                alt="Mobile content"
                style={{
                  width: isPortrait ? '100%' : `${mobileWidth * 2.1}px`,
                  height: isPortrait ? '100%' : `${mobileHeight * 0.5}px`,
                }}
              />
            )}
          </div>
        </div>
      </div>
      {UtilityBar && (
        <div className="ff-nav-bar">
          {navBarIcons?.map((icon, index) => {
            const { title, ...iconProps } = icon;
            return (
              <div
                key={index}
                className={`ff-nav-bar-icon ${icon?.className || ''} ${
                  index === navBarIcons.length - 1 ? 'last-icon' : ''
                }`}
              >
                <Tooltip title={title}>
                  <Icon {...iconProps} />
                </Tooltip>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileSkin;
