import React, { useState, useRef } from 'react';
import {
  IconRadialChartProps,
  ArcParams,
  ArcResult,
  ArcAnglesResult,
} from './types';
import Icon from '../../Icon';
import './IconRadialChart.scss';
import Typography from '../../Typography';

// Function to generate SVG arc paths
const calculateArc = ({
  x,
  y,
  radius,
  startAngle,
  endAngle,
}: ArcParams): ArcResult => {
  const startX = x + radius * Math.cos(startAngle);
  const startY = y + radius * Math.sin(startAngle);
  const endX = x + radius * Math.cos(endAngle);
  const endY = y + radius * Math.sin(endAngle);
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

  if (endAngle - startAngle >= 2 * Math.PI) {
    // Special case for a full circle
    return `
      M ${x + radius} ${y}
      A ${radius} ${radius} 0 1 1 ${x - radius} ${y}  
      A ${radius} ${radius} 0 1 1 ${x + radius} ${y}
    `;
  }

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
};

// Function to calculate arc paths and angles
const calculateArcPaths = (
  percentage: number,
  currentAngle: number,
  radius: number
): ArcAnglesResult => {
  // Normalize percentage to 0-1 range
  const normalizedPercentage = Math.max(0, Math.min(percentage, 100)) / 100;

  const startAngle = currentAngle;
  const angleIncrement = normalizedPercentage * 2 * Math.PI;
  const endAngle = startAngle + angleIncrement;

  // Background arc: always a full circle
  const backgroundArcPath = calculateArc({
    x: 0,
    y: 0,
    radius,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  });

  // Foreground arc: a partial arc based on the normalized percentage
  const foregroundArcPath = calculateArc({
    x: 0,
    y: 0,
    radius,
    startAngle,
    endAngle,
  });

  return { backgroundArcPath, foregroundArcPath };
};

const IconRadialChart: React.FC<IconRadialChartProps> = ({
  radius = 15,
  lineWidth = 5,
  label,
  percentageValue,
  icon,
  fontSize = 10,
  labelColor = '',
  arcColor = 'var(--brand-color)',
  backgroundArcColor = 'var(--ff-select-scroll-thumb-color)',
  isSelectedArch = false,
  onSelect,
}) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  let currentAngle = -Math.PI / 2;
  const svgSize = 2 * (radius + lineWidth);
  const { backgroundArcPath, foregroundArcPath } = calculateArcPaths(
    percentageValue,
    currentAngle,
    radius
  );

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setTooltipPosition({ x: 0, y: 0 });
    setShowTooltip(false);
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const renderTooltip = () => {
    return (
      <div
        className="ff-icon-radial-chart-tooltip"
        style={{
          position: 'absolute',
          left: `${tooltipPosition.x + 15}px`,
          top: `${tooltipPosition.y - 5}px`,
        }}
      >
        <Typography>{`${label} : `}</Typography>
        <Typography>{percentageValue}%</Typography>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="ff-icon-radial-chart-container"
      style={{ '--fontSize': `${fontSize}px` } as React.CSSProperties}
      onClick={onSelect}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        role="img"
      >
        <g
          transform={`translate(${radius + lineWidth}, ${radius + lineWidth})`}
        >
          {/* Background Circle */}
          <path
            d={backgroundArcPath}
            fill="none"
            stroke={backgroundArcColor}
            strokeWidth={lineWidth}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
          {/* Status Arc */}
          <path
            d={foregroundArcPath}
            fill="none"
            stroke={arcColor}
            strokeWidth={lineWidth}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
          {/* Highlight Overlay when selected */}
          {isSelectedArch && (
            <path
              d={foregroundArcPath}
              fill="none"
              stroke="var(--dotted-border-color)"
              strokeOpacity="0.4"
              strokeWidth={lineWidth}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            />
          )}
          {icon ? (
            <foreignObject x="-10" y="-10" width="20" height="20">
              <Icon
                className="ff-radial-chart-icon-padding"
                name={icon}
                height={20}
                width={20}
              />
            </foreignObject>
          ) : (
            <text
              x="0"
              y="0"
              fill={labelColor || arcColor}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {`${Math.round(percentageValue)}%`}
            </text>
          )}
        </g>
      </svg>
      {showTooltip && renderTooltip()}
    </div>
  );
};

export default IconRadialChart;
