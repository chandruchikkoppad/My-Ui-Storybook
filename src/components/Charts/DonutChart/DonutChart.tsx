import React, { useState } from 'react';
import './DonutChart.scss';
import { Status, DonutChartProps, StatusValue } from './type';

const calculateArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  const startX = x + radius * Math.cos(startAngle);
  const startY = y + radius * Math.sin(startAngle);
  const endX = x + radius * Math.cos(endAngle);
  const endY = y + radius * Math.sin(endAngle);
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
};

const useColorMappings = () => ({
  colorMapping: {
    passed: 'var(--status-success-text-color)',
    failed: 'var(--status-rejected-text-color)',
    warning: 'var(--status-warning-text-color)',
    skipped: 'var(--status-skipped-text-color)',
    default: 'var(--brand-color)',
  },
  hoverMapping: {
    passed: 'var(--status-success-bg-color)',
    failed: 'var(--status-rejected-bg-color)',
    warning: 'var(--status-warning-bg-color)',
    skipped: 'var(--status-skipped-bg-color)',
    default: 'var(--status-percentage-growth-bg-color)',
  },
});

const DonutChart: React.FC<DonutChartProps> = ({
  radius = 60,
  lineWidth = 15,
  statusValues = [],
  gapAngle = 0.06,
  legendDetailsType = '',
  isLegendDetails = true,
}) => {
  const [hoveredStatus, setHoveredStatus] = useState<Status | null>(null);
  const { colorMapping, hoverMapping } = useColorMappings();
  const total = statusValues?.reduce((acc, { value }) => acc + value, 0);
  const nonZeroValues = statusValues?.filter(({ value }) => value > 0);
  const statusColors = ['passed', 'failed', 'warning', 'skipped'];
  // Calculate angles and gaps
  const TOTAL_GAP_ANGLE = gapAngle * nonZeroValues.length;
  let remainingAngle = 2 * Math.PI - TOTAL_GAP_ANGLE;
  let currentAngle = Math.PI / 2;

  const MIN_PERCENTAGE = 1;
  const MIN_ANGLE = (MIN_PERCENTAGE / 100) * (2 * Math.PI);
  let minAngleTotal = 0;

  // Adjust for small angles
  nonZeroValues.forEach(({ value }) => {
    const valuePercentage = value / total;
    const angle = Math.max(valuePercentage * (2 * Math.PI), MIN_ANGLE);
    minAngleTotal += angle;
    remainingAngle -= angle;
  });

  const handleMouseEnter = (status: Status) => setHoveredStatus(status);
  const handleMouseLeave = () => setHoveredStatus(null);

  const SVG_PADDING = 4;
  const DONUT_SVG_SIZE = (radius + lineWidth) * 2 + SVG_PADDING * 2;

  const renderArc = (statusValue: StatusValue, endAngle: number, i: number) => {
    const normalizedStatus = statusValue?.status?.toLowerCase() as Status;
    const isFullCircle = nonZeroValues.length === 1;

    // Full circle handling
    const foregroundArcPath = isFullCircle
      ? calculateArc(0, 0, radius, 0, 2 * Math.PI)
      : calculateArc(0, 0, radius, currentAngle, endAngle);

    // Outer arc for hover effect
    const outerArcRadius = radius + lineWidth - 1;
    const outerArcPath = isFullCircle
      ? calculateArc(0, 0, outerArcRadius, 0, 2 * Math.PI)
      : calculateArc(0, 0, outerArcRadius, currentAngle, endAngle);

    currentAngle = endAngle + gapAngle;

    return (
      <g key={i}>
        {/* Main arc */}
        <path
          d={foregroundArcPath}
          fill="none"
          stroke={colorMapping[normalizedStatus as keyof typeof colorMapping]}
          strokeWidth={lineWidth}
          onMouseEnter={() => handleMouseEnter(normalizedStatus)}
          onMouseLeave={handleMouseLeave}
          strokeOpacity={0.8}
        />
        {/* Hover effect */}
        {hoveredStatus === normalizedStatus && (
          <path
            d={outerArcPath}
            fill="none"
            stroke={colorMapping[normalizedStatus as keyof typeof colorMapping]}
            strokeWidth={4}
            strokeOpacity={0.3}
          />
        )}
      </g>
    );
  };

  const renderLegendItem = (statusKey: Status) => {
    const statusData = statusValues?.find(
      (s) => s.status?.toLowerCase() === statusKey?.toLowerCase()
    );
    const value = Math.round(statusData?.value || 0);
    const percentage = ((statusData?.value || 0) / total) * 100;

    return (
      <div
        key={statusKey}
        className={`ff-status-item ${
          hoveredStatus === null || hoveredStatus === statusKey
            ? 'ff-highlighted'
            : 'ff-fade'
        }`}
      >
        <div className="ff-status-label">
          <div
            className="ff-status-color"
            style={{
              backgroundColor:
                colorMapping[statusKey as keyof typeof colorMapping],
            }}
          />
          <div className="ff-status-text">
            {statusKey?.charAt(0)?.toUpperCase() +
              statusKey?.slice(1)?.toLowerCase()}
          </div>
        </div>
        <div className="ff-status-details">
          <div className="ff-status-details-script-count">
            {value}
            <span>{legendDetailsType}</span>
          </div>
          <div className="ff-status-details-script-percentage">
            ({percentage?.toFixed(2)}%)
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ff-donut-chart-section">
      <div className="ff-donut-chart-svg-container">
        <svg
          width={DONUT_SVG_SIZE}
          height={DONUT_SVG_SIZE}
          viewBox={`0 0 ${DONUT_SVG_SIZE} ${DONUT_SVG_SIZE}`}
        >
          <g
            transform={`translate(${radius + lineWidth + SVG_PADDING}, ${
              radius + lineWidth + SVG_PADDING
            })`}
          >
            {nonZeroValues?.map((status, i) => {
              const valuePercentage = status.value / total;
              let angle = Math.max(valuePercentage * (2 * Math.PI), MIN_ANGLE);
              angle += remainingAngle * (valuePercentage / (total / total));
              const endAngle = currentAngle + angle;

              return renderArc(status, endAngle, i);
            })}
            <text x="0" y="-18" textAnchor="middle" fill={colorMapping.default}>
              {hoveredStatus ? hoveredStatus?.toUpperCase() : 'TOTAL'}
            </text>
            <text x="0" y="5" textAnchor="middle" fill={colorMapping.skipped}>
              {hoveredStatus
                ? `${
                    statusValues?.find(
                      (s) => s?.status?.toLowerCase() === hoveredStatus
                    )?.value
                  } ${legendDetailsType}`
                : `${total} ${legendDetailsType}`}
            </text>
            <rect
              x={-17}
              y={14}
              width={34}
              height={18}
              fill={
                hoveredStatus
                  ? hoverMapping[
                      hoveredStatus?.toLowerCase() as keyof typeof hoverMapping
                    ]
                  : hoverMapping.default
              }
              rx="5"
              ry="5"
            />
            <text
              x="0"
              y="26"
              textAnchor="middle"
              fill={
                hoveredStatus
                  ? colorMapping[
                      hoveredStatus?.toLowerCase() as keyof typeof colorMapping
                    ]
                  : colorMapping['default' as keyof typeof colorMapping]
              }
            >
              {hoveredStatus
                ? `${(
                    ((statusValues?.find(
                      (s) => s?.status?.toLowerCase() === hoveredStatus
                    )?.value || 0) /
                      total) *
                    100
                  )?.toFixed(2)}%`
                : '100%'}
            </text>
          </g>
        </svg>
      </div>
      {isLegendDetails && (
        <div className="ff-status-container">
          {statusColors?.map((status) => renderLegendItem(status as Status))}
        </div>
      )}
    </div>
  );
};

export default DonutChart;
