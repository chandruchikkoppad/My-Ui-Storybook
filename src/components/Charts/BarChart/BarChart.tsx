import React, { useRef, useState } from 'react';
import './BarChart.scss';
import Typography from '../../Typography';
import Icon from '../../Icon';
import { truncateText } from '../../../utils/truncateText/truncateText';
import { convertToBytes } from '../../../utils/convertToBytes/convertToBytes';
import { convertToGB } from '../../../utils/convertToGB/convertToGB';
import { convertToKB } from '../../../utils/convertToKB/convertToKB';
import { convertToTB } from '../../../utils/convertToTB/convertToTB';
import { convertToMB } from '../../../utils/convertToMB/convertToMB';

type BarChartProps = {
  data: {
    label: string;
    value: number | string;
    id?: string;
    percent?: number;
    versions?: string[];
  }[];
  barWidth: number;
  height: number;
  barGap?: number;
  colors?: string[][];
  xAxisLabel?: string;
  isTruncateText?: boolean;
  yAxisLabel?: string;
  padding?: number;
  yAxisDivisions?: number;
  barBorderRadius?: number;
  legend?: boolean;
  showXAxisLabels?: boolean;
  icons?: (string | React.ReactNode)[];
  iconSize?: number;
  backgroundColor?: string;
  legendPosition?: 'top' | 'bottom';
  legendGap?: number;
  extendBarChartRightWidth?: number;
  isYAxisValuePercentage?: boolean;
  selectedBar?: string | null;
  setSelectedBar?: (value: string | null) => void;
  onSelectedBar?: (_label: string) => void;
  totalLabel?: string;
  customToolTip?: boolean;
  isOnclick?: boolean;
  isDashboardVersions?: boolean;
  type?: string;
  isMemory?: boolean;
};

const BarChart: React.FC<BarChartProps> = ({
  data,
  barWidth,
  height,
  barGap = 20,
  colors = [],
  xAxisLabel,
  isTruncateText = true,
  yAxisLabel,
  padding = 20,
  yAxisDivisions = 5,
  barBorderRadius = 0,
  legend = true,
  showXAxisLabels = true,
  icons = [],
  iconSize,
  legendPosition = 'bottom',
  legendGap = 5,
  extendBarChartRightWidth = 0,
  isYAxisValuePercentage = false,
  selectedBar,
  setSelectedBar,
  onSelectedBar = (_label) => {},
  totalLabel = 'Total Execution',
  customToolTip = false,
  isOnclick = false,
  isDashboardVersions,
  type = '',
  isMemory,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [hoveredLegendIndex, setHoveredLegendIndex] = useState<number | null>(
    null
  );

  const getHighestPriorityMemoryUnit = (
    data: {
      label: string;
      value: string | number;
      id?: string;
      percent?: number;
      versions?: string[];
    }[]
  ) => {
    const priority = ['TB', 'GB', 'MB', 'KB'];

    for (const unit of priority) {
      const found = data.some(
        (item) =>
          typeof item.value === 'string' &&
          item.value.toLowerCase().includes(unit.toLowerCase())
      );
      if (found) {
        return unit;
      }
    }

    return null;
  };
  const unit = getHighestPriorityMemoryUnit(data);
  const normalizedData = data.map((item) => {
    if (typeof item.value === 'string') {
      let normalizedValue = 0;
      if (type === 'memory') {
        normalizedValue = convertToGB(item.value);
      } else if (isMemory) {
        switch (unit) {
          case 'TB':
            normalizedValue = convertToTB(item.value);
            break;
          case 'GB':
            normalizedValue = convertToGB(item.value);
            break;
          case 'MB':
            normalizedValue = convertToMB(item.value);
            break;
          case 'KB':
            normalizedValue = convertToKB(item.value);
            break;
        }
      } else {
        normalizedValue = parseFloat(item.value);
      }
      return {
        ...item,
        normalizedValue,
      };
    }
    return {
      ...item,
      normalizedValue: item.value,
    };
  });

  let totalBytes = 0;
  if (type === 'memory') {
    totalBytes = data.reduce((acc, item) => {
      if (typeof item.value === 'string') {
        return acc + convertToBytes(item.value);
      } else {
        return acc + Number(item.value) * 1024 * 1024 * 1024;
      }
    }, 0);
  }
  const totalMB = totalBytes / (1024 * 1024);

  const totalMemoryDisplay =
    totalMB < 1024
      ? `${Math.round(totalMB)} mb`
      : `${(totalMB / 1024).toFixed(1)} gb`;

  let maxValue = Math.max(
    ...normalizedData.map((item) => item.normalizedValue)
  );
  if (type === 'memory') {
    maxValue = Math.max(maxValue, 1);
  } else {
    maxValue = Math.max(maxValue, yAxisDivisions);
  }

  const topPadding = 40;
  const leftPadding = 40;
  const totalBarWidth =
    normalizedData.length * barWidth + (normalizedData.length - 1) * barGap;
  const chartWidth =
    totalBarWidth + leftPadding * 2 + 10 + extendBarChartRightWidth;

  const id = Date.now();
  const renderGradients = (gradients: string[][]) => {
    return gradients.map((gradient, index) => (
      <defs key={index}>
        <linearGradient
          id={`gradient-${id}-${type}-${index}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          {gradient.map((color, i) => (
            <stop
              key={`${index}-${i}`}
              offset={`${(i / (gradient.length - 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
    ));
  };

  const getFillColor = (index: number) =>
    colors?.[index % colors.length]?.[0]
      ? `url(#gradient-${id}-${type}-${index % colors.length})`
      : 'grey';

  const handleMouseEnter = (
    label: string,
    value: number | string,
    id: string | undefined,
    percent: number | undefined,
    versions?: string[]
  ) => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      tooltip.style.display = 'block';
      if (customToolTip) {
        tooltip.innerHTML = `<div>
          <div><Typography fontWeight='semi-bold'>${label}</Typography></div>
          <div><Typography>${id ? id : ''}</Typography></div>
          <div><Typography>${totalLabel} : ${value} ${
          percent ? '(' + percent + '%)' : ''
        }</Typography></div>
        </div>`;
      } else if (isDashboardVersions) {
        const versionsList = versions ? versions.join(', ') : '';
        tooltip.innerHTML = `
        <div>
          <div><Typography>${totalLabel} : ${value}</Typography></div>
          ${
            versionsList
              ? `<div><Typography>Versions : ${versionsList}</Typography></div>`
              : ''
          }
        </div>`;
      } else {
        if (type === 'memory') {
          tooltip.innerHTML = `<strong>${label}</strong>: ${value} / ${totalMemoryDisplay}`;
        } else {
          tooltip.innerHTML = `<strong>${label}</strong>: ${value} ${
            isYAxisValuePercentage ? '%' : ''
          }`;
        }
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent, isLastBar: boolean = false) => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      const rect = tooltip.parentElement?.getBoundingClientRect();
      const xOffset = window.scrollX;
      const yOffset = window.scrollY;
      const tooltipX = isLastBar
        ? e.clientX - (rect?.left || 0) + xOffset - tooltip.offsetWidth - 10
        : e.clientX - (rect?.left || 0) + xOffset + 10;
      const tooltipY = e.clientY - (rect?.top || 0) + yOffset - 20;
      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY}px`;
    }
  };

  const handleMouseLeave = () => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  };

  const handleSelectLabel = (label: string) => {
    if (setSelectedBar) {
      setSelectedBar(label);
      if (isOnclick) {
        onSelectedBar(label);
      }
    }
  };

  return (
    <div className="ff-bar-chart-container" style={{ width: chartWidth }}>
      <div ref={tooltipRef} className="ff-bar-chart-tooltip" />
      {legend && legendPosition === 'top' && (
        <div className="ff-legend-container">
          <div
            className="ff-bar-chart-legend"
            style={{ gap: `${legendGap}px` }}
          >
            {normalizedData.map((item, index) => (
              <div
                key={item.label}
                className="ff-bar-chart-legend-item"
                onMouseEnter={() => setHoveredLegendIndex(index)}
                onMouseLeave={() => setHoveredLegendIndex(null)}
              >
                {icons[index] && typeof icons[index] === 'string' ? (
                  <Icon
                    name={String(icons[index])}
                    width={iconSize}
                    height={iconSize}
                  />
                ) : (
                  <span
                    className="ff-bar-chart-legend-item-circle"
                    style={{
                      backgroundColor:
                        colors[index % colors.length]?.[0] || 'grey',
                    }}
                  ></span>
                )}
                <Typography
                  as="div"
                  fontSize={10}
                  fontWeight="regular"
                  className="ff-legend-label"
                >
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <svg
          width={chartWidth}
          height={
            height +
            topPadding +
            5 +
            (showXAxisLabels ? 20 : 0) +
            (xAxisLabel ? 20 : 0)
          }
        >
          {Array.isArray(colors) &&
            colors.length > 0 &&
            renderGradients(colors)}
          {/* Y-Axis Labels */}
          {Array.from({ length: yAxisDivisions + 1 }).map((_, i) => {
            const yAxisLabelYPosition =
              height - (i / yAxisDivisions) * height + topPadding + 4;
            const yAxisValue = (i * maxValue) / yAxisDivisions;
            const formattedValue =
              type === 'memory'
                ? yAxisValue.toFixed(1)
                : isYAxisValuePercentage
                ? `${yAxisValue.toFixed(0).padStart(2, '0')}%`
                : yAxisValue.toFixed(0).padStart(2, '0');
            return (
              <text
                key={i}
                x={leftPadding}
                y={yAxisLabelYPosition}
                fill="black"
                textAnchor="middle"
                className="ff-bar-chart-labels"
              >
                {formattedValue}
              </text>
            );
          })}

          {normalizedData.map((item, index) => {
            const computedBarHeight =
              (item.normalizedValue / maxValue) * height;
            const minBarHeight = 2;
            const barHeight =
              item.normalizedValue < 1 ? minBarHeight : computedBarHeight;
            const barX = index * (barWidth + barGap) + leftPadding + padding;
            const barY = height - barHeight + topPadding;
            const iconWidth = iconSize || 20;
            const iconX = barX + barWidth / 2 - iconWidth / 2;
            const iconY = barY - iconWidth;
            const isSelected = selectedBar === item.label;
            const isHovered = hoveredLegendIndex === index;

            return (
              <g key={index}>
                {icons[index] && typeof icons[index] === 'string' && (
                  <g
                    onMouseEnter={() =>
                      handleMouseEnter(
                        item.label,
                        type === 'memory' ? item.value : item.normalizedValue,
                        item.id,
                        item.percent,
                        item.versions
                      )
                    }
                    onMouseMove={(e) =>
                      handleMouseMove(e, index === normalizedData.length - 1)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Icon
                      name={String(icons[index])}
                      x={String(iconX)}
                      y={String(iconY)}
                      width={iconWidth}
                      height={iconWidth}
                      chartIcon={true}
                    />
                  </g>
                )}
                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={getFillColor(index)}
                  rx={barBorderRadius}
                  ry={barBorderRadius}
                  style={{
                    strokeWidth: isSelected ? 3 : 0,
                    opacity: hoveredLegendIndex === null || isHovered ? 1 : 0.3,
                    cursor: isOnclick ? 'pointer' : 'default',
                    transition: 'opacity 0.5s ease',
                  }}
                  onMouseEnter={() =>
                    handleMouseEnter(
                      item.label,
                      type === 'memory' || isMemory
                        ? item.value
                        : item.normalizedValue,
                      item.id,
                      item.percent,
                      item.versions
                    )
                  }
                  onMouseMove={(e) =>
                    handleMouseMove(e, index === normalizedData.length - 1)
                  }
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleSelectLabel(item.label)}
                ></rect>
                {isSelected && isOnclick && (
                  <rect
                    x={barX}
                    y={barY}
                    width={barWidth}
                    height={barHeight}
                    fill="var(--select-chart-highlight-color)"
                    rx={barBorderRadius}
                    ry={barBorderRadius}
                    onMouseEnter={() =>
                      handleMouseEnter(
                        item.label,
                        type === 'memory' ? item.value : item.normalizedValue,
                        item.id,
                        item.percent,
                        item.versions
                      )
                    }
                    onMouseMove={(e) =>
                      handleMouseMove(e, index === normalizedData.length - 1)
                    }
                    onMouseLeave={handleMouseLeave}
                  ></rect>
                )}
                {showXAxisLabels && (
                  <text
                    x={
                      index === 0
                        ? barX
                        : index === normalizedData.length - 1
                        ? barX + barWidth
                        : barX + barWidth / 2
                    }
                    y={height + topPadding + 15}
                    className="ff-bar-chart-labels"
                    fill={isSelected ? 'var(--brand-color)' : 'black'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    textAnchor={index === 0 ? 'start' : 'middle'}
                  >
                    {isTruncateText ? truncateText(item.label, 10) : item.label}
                  </text>
                )}
              </g>
            );
          })}

          <line
            x1={60}
            y1={height + topPadding}
            x2={chartWidth}
            y2={height + topPadding}
            stroke="#D9D9D9"
            strokeWidth="1"
          />

          {xAxisLabel && (
            <text
              x={chartWidth / 2}
              y={height + topPadding + (showXAxisLabels ? 40 : 20)}
              fontSize="12"
              fill="black"
              textAnchor="middle"
              className="ff-bar-chart-labels"
            >
              {xAxisLabel}
            </text>
          )}

          {yAxisLabel && (
            <text
              x={-(height / 2 + 35)}
              y={leftPadding - 30}
              transform="rotate(-90)"
              fill="black"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="ff-bar-chart-labels"
            >
              {yAxisLabel}
            </text>
          )}
        </svg>
      </div>

      {legend && legendPosition === 'bottom' && (
        <div className="ff-legend-container">
          <div
            className="ff-bar-chart-legend"
            style={{ gap: `${legendGap}px` }}
          >
            {data.map((item, index) => (
              <div
                key={item.label}
                className="ff-bar-chart-legend-item"
                onMouseEnter={() => setHoveredLegendIndex(index)}
                onMouseLeave={() => setHoveredLegendIndex(null)}
              >
                {icons[index] && typeof icons[index] === 'string' ? (
                  <Icon
                    name={String(icons[index])}
                    width={iconSize}
                    height={iconSize}
                  />
                ) : (
                  <span
                    className="ff-bar-chart-legend-item-circle"
                    style={{
                      backgroundColor:
                        colors[index % colors.length]?.[0] || 'grey',
                    }}
                  ></span>
                )}
                <div>
                  <Typography
                    as="div"
                    fontSize={10}
                    fontWeight="regular"
                    className="ff-legend-label"
                  >
                    {item.label}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BarChart;
