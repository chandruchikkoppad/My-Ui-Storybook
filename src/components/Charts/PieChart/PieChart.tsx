import React, { useState } from 'react';
import './PieChart.scss';
import { PieChartProps, ArcParams, ArcResult, ArcAnglesResult } from './types';
import Typography from '../../Typography';

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

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} L ${x} ${y} Z`;
};

const calculateArcAngles = (
  value: number,
  total: number,
  currentAngle: number,
  radius: number
): ArcAnglesResult => {
  if (total === 0) {
    return {
      endAngle: currentAngle,
      backgroundArcPath: '',
      foregroundArcPath: '',
      percentage: 0,
    };
  }

  const percentage = value / total;
  const angleIncrement = percentage * 2 * Math.PI;
  const startAngle = currentAngle;
  const endAngle = startAngle + angleIncrement;

  if (percentage === 1) {
    const path = `
      M ${radius} 0 
      A ${radius} ${radius} 0 1 1 ${-radius} 0 
      A ${radius} ${radius} 0 1 1 ${radius} 0 
      Z
    `;
    return {
      endAngle,
      backgroundArcPath: path,
      foregroundArcPath: path,
      percentage,
    };
  }

  const path = calculateArc({
    x: 0,
    y: 0,
    radius,
    startAngle,
    endAngle,
  });

  return {
    endAngle,
    backgroundArcPath: path,
    foregroundArcPath: path,
    percentage,
  };
};

type Tooltip = {
  label: string;
  value: number;
  color: string;
};

const PieChart: React.FC<PieChartProps> = ({
  radius = 15,
  colors = [],
  data = [],
  chartBorder = false,
}) => {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const normalizedData = data.map((item) => {
    let normalizedValue: number;
    if (typeof item.value === 'string') {
      const parsedValue = parseFloat(item.value);
      normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
    } else {
      normalizedValue = item.value;
    }
    return {
      ...item,
      value: normalizedValue,
      labelValue: Number.isInteger(normalizedValue)
        ? item.value
        : normalizedValue.toFixed(2),
    };
  });

  const total = normalizedData.reduce((acc, item) => acc + item.value, 0);
  const nonZeroCount = normalizedData.filter((item) => item.value > 0).length;
  const isSingleSegment = nonZeroCount === 1;

  let currentAngle = -Math.PI / 2;
  const svgSize = 2 * (radius + 5);

  const chartData =
    chartBorder && normalizedData.length > 0
      ? [
          {
            label: normalizedData[0]?.label || '',
            value: normalizedData
              .slice(1)
              .reduce((acc, item) => acc + item.value, 0),
          },
          ...normalizedData.slice(1),
        ]
      : normalizedData;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    setTooltipPosition({ x, y });
  };

  const handleMouseEnter = (
    item: { label: string; value: number },
    color: string,
    index: number,
    isLegend: boolean = false
  ) => {
    if (isLegend) {
      setHoveredIndex(index);
    } else {
      setTooltip({ label: item.label, value: item.value, color });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
    setHoveredIndex(null);
  };

  const getSegmentStyle = (index: number): React.CSSProperties => ({
    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
  });

  const legendItems = normalizedData.map((item, index) => (
    <div
      key={item.label}
      className="ff-pie-chart-legend-item"
      onMouseEnter={() =>
        handleMouseEnter(item, colors[index % colors.length] || '', index, true)
      }
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        as="div"
        fontSize={24}
        fontWeight="semi-bold"
        lineHeight="36px"
        color={colors[index % colors.length] || ''}
      >
        {item.labelValue}
      </Typography>
      <Typography
        as="div"
        fontSize={10}
        fontWeight="regular"
        lineHeight="18px"
        className="ff-pie-chart-legend-value"
      >
        {item.label}
      </Typography>
    </div>
  ));

  if (total === 0) {
    const fullCirclePath = `M ${radius} 0 A ${radius} ${radius} 0 1 1 ${
      -radius
    } 0 A ${radius} ${radius} 0 1 1 ${radius} 0 Z`;
    return (
      <div className="ff-pie-chart-container" onMouseMove={handleMouseMove}>
        <div
          className={`${chartBorder ? 'ff-pie-chart-border' : ''}`}
          style={{ width: svgSize, height: svgSize }}
        >
          <svg
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
          >
            <g transform={`translate(${radius + 5}, ${radius + 5})`}>
              <path
                d={fullCirclePath}
                fill="var(--tooltip-bg-color)"
                stroke="white"
                strokeWidth={0.5}
                opacity={0.2}
              />
            </g>
          </svg>
        </div>

        {tooltip && (
          <div
            className="ff-pie-chart-tooltip"
            style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
          >
            {tooltip.label} : {tooltip.value}
          </div>
        )}

        <div className="ff-pie-chart-legend">{legendItems}</div>
      </div>
    );
  }

  return (
    <div className="ff-pie-chart-container" onMouseMove={handleMouseMove}>
      <div
        className={`${chartBorder ? 'ff-pie-chart-border' : ''}`}
        style={{ width: svgSize, height: svgSize }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          <g transform={`translate(${radius + 5}, ${radius + 5})`}>
            {chartData.map((item, index) => {
              if (item.value > 0) {
                const color = colors[index % colors.length] || '';
                const { endAngle, backgroundArcPath } = calculateArcAngles(
                  item.value,
                  total,
                  currentAngle,
                  radius
                );
                currentAngle = endAngle;

                if (isSingleSegment) {
                  return (
                    <g
                      key={item.label}
                      onMouseEnter={() => handleMouseEnter(item, color, index)}
                      onMouseLeave={handleMouseLeave}
                      style={getSegmentStyle(index)}
                    >
                      <path
                        d={backgroundArcPath}
                        fill={color}
                        stroke="white"
                        strokeWidth={0.5}
                      />
                      <line
                        x1={0}
                        y1={radius}
                        x2={0}
                        y2={0}
                        stroke="white"
                        strokeWidth={2}
                      />
                    </g>
                  );
                } else {
                  return (
                    <g key={item.label}>
                      <path
                        d={backgroundArcPath}
                        fill={color}
                        stroke="white"
                        strokeWidth={0.5}
                        onMouseEnter={() => handleMouseEnter(item, color, index)}
                        onMouseLeave={handleMouseLeave}
                        style={getSegmentStyle(index)}
                      />
                      <text
                        x={(radius / 2) * Math.cos((currentAngle + endAngle) / 2)}
                        y={(radius / 2) * Math.sin((currentAngle + endAngle) / 2)}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="central"
                      ></text>
                    </g>
                  );
                }
              }
              return null;
            })}
          </g>
        </svg>
      </div>

      {tooltip && (
        <div
          className="ff-pie-chart-tooltip"
          style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
          {tooltip.label} : {tooltip.value}
        </div>
      )}

      <div className="ff-pie-chart-legend">{legendItems}</div>
    </div>
  );
};

export default PieChart;