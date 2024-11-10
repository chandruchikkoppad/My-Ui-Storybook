import React, { useState } from 'react';
import { DashboardDonutChartProps, ChartItem, LegendType } from './types';
import Typography from '../../Typography';
import './DashBoardDonutChart.scss';
import classNames from 'classnames';

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

const colorMapping = [
  'var(--status-success-text-color)',
  'var(--status-rejected-text-color)',
  'var(--status-warning-text-color)',
  'var(--status-skipped-text-color)',
  'var(--brand-color)',
];

const DashboardDonutChart: React.FC<DashboardDonutChartProps> = ({
  radius = 60,
  lineWidth = 15,
  statusValues = [],
  gapAngle = 0,
  legendDetailsType = '',
  isLegendDetails = true,
  legendType = 'numberLegend',
  showOnlyLabel = false,
}) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const total = statusValues?.reduce((acc, { value }) => acc + value, 0);
  const nonZeroValues = statusValues?.filter(({ value }) => value > 0);

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

  const handleMouseEnter = (itemIndex: number) => {
    setHoveredItemIndex(itemIndex);
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setTooltipPosition({ x: 0, y: 0 });
    setHoveredItemIndex(null);
    setShowTooltip(false);
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({
      x: event.clientX + 10,
      y: event.clientY + 10,
    });
  };

  const SVG_PADDING = 4;
  const DONUT_SVG_SIZE = (radius + lineWidth) * 2 + SVG_PADDING * 2;

  const renderArc = (chartItem: ChartItem, endAngle: number, i: number) => {
    const isFullCircle = nonZeroValues.length === 1;

    // Full circle handling
    const foregroundArcPath = isFullCircle
      ? calculateArc(0, 0, radius, 0, 2 * Math.PI)
      : calculateArc(0, 0, radius, currentAngle, endAngle);

    currentAngle = endAngle + gapAngle;

    return (
      <g key={i}>
        {/* Main arc */}
        <path
          d={foregroundArcPath}
          fill="none"
          stroke={
            chartItem?.color
              ? chartItem.color
              : colorMapping[i % colorMapping.length]
          }
          strokeWidth={lineWidth}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          strokeOpacity={0.8}
          onMouseMove={handleMouseMove}
        />
      </g>
    );
  };

  const renderTooltip = () => {
    return (
      <div
        className="ff-donut-chart-tooltip"
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y,
        }}
      >
        <Typography fontSize={12}>
          {hoveredItemIndex !== null &&
            `${nonZeroValues[hoveredItemIndex]?.key} : `}
        </Typography>
        <Typography fontSize={12}>
          {hoveredItemIndex !== null && nonZeroValues[hoveredItemIndex]?.value}
        </Typography>
      </div>
    );
  };

  const renderLegend = (legendData: ChartItem[], legendType: LegendType) => {
    switch (legendType) {
      case 'numberLegend':
        return (
          <div className="ff-legend-container numberLegend">
            {legendData.map((item, index) => (
              <div className="ff-legend-item" key={index}>
                <Typography
                  fontSize={22}
                  fontWeight="semi-bold"
                  className="ff-legend-value"
                  color={
                    item.color
                      ? item.color
                      : colorMapping[index % colorMapping.length]
                  }
                >
                  {item.value}
                </Typography>
                <Typography fontSize={12} className="ff-legend-key">
                  {item.key}
                </Typography>
              </div>
            ))}
          </div>
        );

      case 'pillLegend':
        return (
          <div className="ff-legend-container pillLegend">
            {legendData.map((item, index) => (
              <div className="ff-legend-item" key={index}>
                <span
                  className="ff-legend-capsule"
                  style={{
                    backgroundColor: item.color
                      ? item.color
                      : colorMapping[index % colorMapping.length],
                  }}
                >
                  <Typography fontSize={10}>{item.value}</Typography>
                </span>
                <Typography className="ff-legend-key">{item.key}</Typography>
              </div>
            ))}
          </div>
        );

      case 'memoryLegend':
        return (
          <div className="ff-legend-container memoryLegend">
            {legendData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="ff-legend-item">
                  <Typography
                    fontSize={22}
                    fontWeight="medium"
                    className="ff-legend-value"
                    color={
                      item.color
                        ? item.color
                        : colorMapping[index % colorMapping.length]
                    }
                  >
                    {item.value}
                  </Typography>
                  <Typography className="ff-legend-key">{item.key}</Typography>
                </div>
              </React.Fragment>
            ))}
          </div>
        );

      case 'tableLegend':
        return (
          <div className="ff-legend-table-wrapper">
            <table className="ff-legend-table tableLegend">
              <thead>
                <tr>
                  <th className="ff-table-header">Name</th>
                  <th className="ff-table-header">%</th>
                  <th className="ff-table-header">Count</th>
                </tr>
              </thead>
              <tbody>
                {legendData.map((item, index) => (
                  <tr
                    className="ff-legend-item"
                    key={index}
                    onMouseEnter={() => setHoveredItemIndex(index)}
                    onMouseLeave={() => setHoveredItemIndex(null)}
                  >
                    <td className="ff-legend-name">
                      <span
                        className="ff-legend-capsule"
                        style={{
                          backgroundColor: item.color
                            ? item.color
                            : colorMapping[index % colorMapping.length],
                        }}
                      >
                        <Typography fontSize={10}>{item.value}</Typography>
                      </span>
                      <Typography fontSize={10}>{item.key}</Typography>
                    </td>
                    <td className="ff-legend-percentage">
                      {((item.value / total) * 100).toFixed(1)}
                    </td>
                    <td className="ff-legend-count">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={classNames('ff-dashboard-donut-chart-section', {
        'ff-dashboard-donut-chart-section-table-legend':
          legendType === 'tableLegend',
      })}
    >
      <div className="ff-dashboard-donut-chart-svg-container">
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
              angle += remainingAngle * (valuePercentage / total);
              const endAngle = currentAngle + angle;

              return renderArc(status, endAngle, i);
            })}
            {showOnlyLabel ? (
              <text
                x="0"
                y="5"
                className="ff-svg-label-text"
                textAnchor="middle"
                fill={colorMapping[3]}
              >
                {legendDetailsType}
              </text>
            ) : (
              (legendType !== 'tableLegend' || hoveredItemIndex !== null) && (
                <>
                  <text x="0" y="5" textAnchor="middle" fill={colorMapping[3]}>
                    {legendType === 'tableLegend' &&
                    hoveredItemIndex !== null &&
                    nonZeroValues[hoveredItemIndex]
                      ? `${(
                          (nonZeroValues[hoveredItemIndex].value / total) *
                          100
                        ).toFixed(1)}%`
                      : total}
                  </text>

                  <text
                    x="0"
                    y="26"
                    textAnchor="middle"
                    fill="var(--text-color)"
                  >
                    {legendType === 'tableLegend' &&
                    hoveredItemIndex !== null &&
                    nonZeroValues[hoveredItemIndex]
                      ? nonZeroValues[hoveredItemIndex].key
                      : legendDetailsType}
                  </text>
                </>
              )
            )}
          </g>
        </svg>
        {legendType === 'tableLegend' && (
          <div>
            <Typography fontWeight="semi-bold">{legendDetailsType} </Typography>
            <Typography> {`Total ${legendDetailsType} - ${total}`} </Typography>
          </div>
        )}
        {showTooltip && renderTooltip()}
      </div>
      {isLegendDetails && renderLegend(nonZeroValues, legendType)}
    </div>
  );
};

export default DashboardDonutChart;
