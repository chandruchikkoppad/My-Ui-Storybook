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
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const total = data.reduce((acc, item) => acc + item.value, 0);
  let currentAngle = -Math.PI / 2;
  const svgSize = 2 * (radius + 5);

  const chartData =
    chartBorder && data.length > 0
      ? [
          {
            label: data[0]?.label || '',
            value: data.slice(1).reduce((acc, item) => acc + item.value, 0),
          },
          ...data.slice(1),
        ]
      : data;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    setTooltipPosition({ x, y });
  };

  const handleMouseEnter = (
    item: { label: string; value: number },
    color: string
  ) => {
    setTooltip({ label: item.label, value: item.value, color });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };
  const legendItems = chartData.map((item, index) => (
    <div key={item.label} className="ff-pie-chart-legend-item">
      <Typography
        as="div"
        fontSize={24}
        fontWeight="semi-bold"
        lineHeight="36px"
        color={colors[index % colors.length] || ''}
      >
        {item.value}
      </Typography>
      <Typography
        as="div"
        fontSize={10}
        fontWeight="regular"
        lineHeight="18px"
        className="ff-Pie-chart-legend-value"
      >
        {item.label}
      </Typography>
    </div>
  ));

  return (
    <div className="ff-pie-chart-container" onMouseMove={handleMouseMove}>
      <div
        className={` ${chartBorder ? 'ff-pie-chart-border' : ''}`}
        style={{ width: svgSize, height: svgSize }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          <g transform={`translate(${radius + 5}, ${radius + 5})`}>
            {chartData.map((item, index) => {
              const { endAngle, backgroundArcPath } = calculateArcAngles(
                item.value,
                total,
                currentAngle,
                radius
              );
              currentAngle = endAngle;
              const color = colors[index % colors.length] || '';

              return (
                <g key={item.label}>
                  <path
                    d={backgroundArcPath}
                    fill={color}
                    stroke="white"
                    strokeWidth={0.5}
                    onMouseEnter={() => handleMouseEnter(item, color)}
                    onMouseLeave={handleMouseLeave}
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
            })}
          </g>
        </svg>
      </div>

      {tooltip && (
        <div
          className="ff-pie-chart-tooltip"
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            border: `2px solid ${tooltip.color}`,
          }}
        >
          {tooltip.label} : {tooltip.value}
        </div>
      )}

      <div className="ff-pie-chart-legend">{legendItems}</div>
    </div>
  );
};

export default PieChart;
