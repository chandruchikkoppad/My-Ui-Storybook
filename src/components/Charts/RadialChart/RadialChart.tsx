import React, { useMemo } from 'react';
import './RadialChart.scss';
import {
  RadialChartProps,
  ArcParams,
  ArcResult,
  ArcAnglesResult,
} from './types';
import Tooltip from '../../Tooltip';

const useColorMappings = () =>
  useMemo(() => {
    return {
      colorMapping: {
        passed: 'var(--status-success-text-color)',
        failed: 'var(--status-rejected-text-color)',
        warning: 'var(--status-warning-text-color)',
        skipped: 'var(--status-skipped-text-color)',
      },
      backgroundColorMapping: {
        passed: 'var(--status-success-bg-color)',
        failed: 'var(--status-rejected-bg-color)',
        warning: 'var(--status-warning-bg-color)',
        skipped: 'var(--status-skipped-bg-color)',
      },
    };
  }, []);

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

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
};

// Function to calculate arc paths and angles
const calculateArcAngles = (
  statusValue: number,
  total: number,
  currentAngle: number,
  radius: number
): ArcAnglesResult => {
  if (total === 0) {
    const backgroundArcPath = calculateArc({
      x: 0,
      y: 0,
      radius,
      startAngle: 0,
      endAngle: 2 * Math.PI,
    });
    return {
      endAngle: currentAngle,
      backgroundArcPath,
      foregroundArcPath: '',
      percentage: 0,
    };
  }

  const percentage = statusValue / total;
  const angleIncrement = percentage * 2 * Math.PI;
  let startAngle = currentAngle;
  let endAngle = startAngle + angleIncrement;

  // Scenario when statusValue is equal to total
  if (statusValue === total) {
    startAngle = 0;
    endAngle = 2 * Math.PI;
  }

  const backgroundArcPath = calculateArc({
    x: 0,
    y: 0,
    radius,
    startAngle: 0,
    endAngle: 2 * Math.PI,
  });
  const foregroundArcPath = calculateArc({
    x: 0,
    y: 0,
    radius,
    startAngle,
    endAngle,
  });

  return { endAngle, backgroundArcPath, foregroundArcPath, percentage };
};

// RadialChart component
const RadialChart: React.FC<RadialChartProps> = ({
  radius = 15,
  lineWidth = 5,
  statusValues = [],
  onClick = () => {},
  fontSize = 6,
  gap = 12,
}) => {
  const { colorMapping, backgroundColorMapping } = useColorMappings();
  const total = statusValues.reduce((acc, status) => acc + status.value, 0);
  let currentAngle = -Math.PI / 2;
  const svgSize = 2 * (radius + lineWidth);
  return (
    <div
      className="ff-radial-chart-container"
      style={
        {
          '--fontSize': `${fontSize}px`,
          gap: `${gap}px`,
        } as React.CSSProperties
      }
    >
      {statusValues.map((status) => {
        const normalizedStatus = status.status.toLowerCase();
        const { endAngle, backgroundArcPath, foregroundArcPath, percentage } =
          calculateArcAngles(status.value, total, currentAngle, radius);
        currentAngle = endAngle;
        return (
          <Tooltip
            title={`${status.status}: ${Math.round(percentage * 100)}%`}
            zIndex={1000}
          >
            <svg
              key={status.status}
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              onClick={() => onClick(status)}
              role="img"
              aria-label={`${status.status}: ${Math.round(percentage * 100)}%`}
            >
              <g
                transform={`translate(${radius + lineWidth}, ${
                  radius + lineWidth
                })`}
              >
                {/* Background Circle */}
                <path
                  d={backgroundArcPath}
                  fill="none"
                  stroke={
                    backgroundColorMapping[
                      normalizedStatus as keyof typeof colorMapping
                    ]
                  }
                  strokeWidth={lineWidth}
                />
                {/* Status Arc */}
                <path
                  d={foregroundArcPath}
                  fill="none"
                  stroke={
                    colorMapping[normalizedStatus as keyof typeof colorMapping]
                  }
                  strokeWidth={lineWidth}
                />
                {/* Percentage Text */}
                <text
                  x="0"
                  y="0"
                  fill={
                    colorMapping[normalizedStatus as keyof typeof colorMapping]
                  }
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {`${Math.round(percentage * 100)}%`}
                </text>
              </g>
            </svg>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default RadialChart;
