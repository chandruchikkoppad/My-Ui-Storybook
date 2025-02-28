import React from 'react';
import type { ProgressBarProps } from './types';
import './ProgressBar.scss';
import Typography from '../Typography';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressPercentage,
  color = 'var(--brand-color)',
  trackColor = '#f0f0f0',
  height = 10,
  label,
  labelFontSize = 12,
  labelTextColor = 'var(--ff-card-status-text-color)',
  showPercentage = false,
  percentageFontSize = 10,
  percentageTextColor = 'var(--tooltip-text-color)',
}) => {
  // Ensure progress is between 0 and 100
  const validProgress = Math.max(0, Math.min(progressPercentage, 100));

  // Bar style for the filled part
  const barStyle = {
    width: `${validProgress}%`,
    backgroundColor: color,
    height: `${height}px`,
  };

  // Track style for the empty part of the progress bar
  const trackStyle = {
    backgroundColor: trackColor,
    height: `${height}px`,
  };

  return (
    <div className={`ff-progress-bar-container ${label ? 'ff-has-label' : ''}`}>
      <div className="ff-progress-bar-track" style={trackStyle}>
        <div className="ff-progress-bar" style={barStyle}>
          {showPercentage && (
            <Typography
              className="ff-progress-bar-percentage"
              fontSize={percentageFontSize}
              color={percentageTextColor}
            >{`${validProgress}%`}</Typography>
          )}
        </div>
      </div>
      {label && (
        <Typography
          as="div"
          className="ff-progress-bar-label"
          fontSize={labelFontSize}
          color={labelTextColor}
        >
          {label}
        </Typography>
      )}
    </div>
  );
};

export default ProgressBar;
