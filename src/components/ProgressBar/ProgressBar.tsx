import React from 'react';
import type { ProgressBarProps } from './types';
import './ProgressBar.scss';
import Typography from '../Typography';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressPercentage,
  totalMemory,
  usedMemory,
  color = 'var(--brand-color)',
  trackColor = '#f0f0f0',
  height = 10,
  label,
  labelFontSize = 12,
  labelTextColor = 'var(--ff-card-status-text-color)',
  showPercentage = false,
  percentageFontSize = 10,
  percentageTextColor = 'var(--tooltip-text-color)',
  progressBarWidth = '200px',
}) => {
  const convertMemoryToMB = (memory: string): number => {
    const trimmed = memory.trim().toLowerCase();
    if (trimmed === '0') return 0;
    const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(kb|mb|gb)$/);
    if (!match || !match[1]) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2];
    if (unit === 'gb') {
      return value * 1024;
    } else if (unit === 'kb') {
      return value / 1024;
    } else {
      return value;
    }
  };

  let computedProgress = 0;
  let computedLabel = label;

  if (totalMemory !== undefined && usedMemory !== undefined) {
    const usedMB = convertMemoryToMB(usedMemory);
    const totalMB = convertMemoryToMB(totalMemory);

    if (totalMB > 0) {
      computedProgress = (usedMB / totalMB) * 100;
      computedLabel = label || usedMemory;
    } else {
      computedProgress = 0;
      computedLabel = '0MB';
    }
  } else {
    computedProgress = progressPercentage || 0;
  }
  // Ensure progress is between 0 and 100
  const validProgress = Math.max(0, Math.min(computedProgress, 100));

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

  const containerStyle: React.CSSProperties = {
    width: progressBarWidth,
  };

  return (
    <div
      className={`ff-progress-bar-container ${
        computedLabel ? 'ff-has-label' : ''
      }`}
      style={containerStyle}
    >
      <div className="ff-progress-bar-track" style={trackStyle}>
        <div className="ff-progress-bar" style={barStyle}>
          {showPercentage && (
            <Typography
              className="ff-progress-bar-percentage"
              fontSize={percentageFontSize}
              color={percentageTextColor}
            >
              {`${Math.round(validProgress)}%`}
            </Typography>
          )}
        </div>
      </div>
      {computedLabel && (
        <Typography
          as="div"
          className="ff-progress-bar-label"
          fontSize={labelFontSize}
          color={labelTextColor}
        >
          {computedLabel}
        </Typography>
      )}
    </div>
  );
};

export default ProgressBar;
