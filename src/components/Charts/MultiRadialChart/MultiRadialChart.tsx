import React, { useState } from 'react';
import { MultiRadialChartProps, ChartItem, LegendType } from './types';
import './MultiRadialChart.scss';
import Typography from '../../Typography';

const calculateArc = (
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const startX = centerX + radius * Math.cos(startAngle);
  const startY = centerY + radius * Math.sin(startAngle);
  const endX = centerX + radius * Math.cos(endAngle);
  const endY = centerY + radius * Math.sin(endAngle);
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
};

const MultiRadialChart: React.FC<MultiRadialChartProps> = ({
  radius,
  lineWidth,
  lineCap,
  barValues,
  labelHeading,
  legendType = 'numberLegend',
  isLegendDetails = true,
  isPillValueVisible = true,
  chartToLegendGap = '16px',
  legendGap = '8px',
  labelFontSize = 12,
  subLabelFontSize = 8,
  gapBetweenArch = 10,
  capsuleStyle = { padding: '4px' },
}) => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
    isArc?: boolean;
  }>({
    visible: false,
    x: 0,
    y: 0,
    content: '',
    isArc: false,
  });

  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);

  const renderGradients = () => (
    <defs>
      {barValues.map((bar, i) =>
        Array.isArray(bar.arcColor) ? (
          <linearGradient
            key={`gradient-${i}`}
            id={`gradient-${i}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform="rotate(90)"
          >
            {bar.arcColor.map((color, idx) => (
              <stop
                key={idx}
                offset={`${(idx / (bar.arcColor.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        ) : null
      )}
    </defs>
  );

  const getArcColor = (bar: ChartItem, index: number) =>
    Array.isArray(bar.arcColor) ? `url(#gradient-${index})` : bar.arcColor;

  const getLegendColor = (bar: ChartItem) =>
    Array.isArray(bar.arcColor) ? bar.arcColor[0] : bar.arcColor;

  const parseValueToMB = (value: string | number): number => {
    if (typeof value === 'string') {
      const match = value.trim().match(/^([\d.]+)\s*([a-zA-Z%]*)$/);
      if (!match) return 0;
      const numericValue = parseFloat(match[1] ?? '0');
      const unit = match[2]?.toUpperCase() || '';

      if (isNaN(numericValue)) return 0;

      switch (unit) {
        case 'TB':
          return numericValue * 1024 * 1024;
        case 'GB':
          return numericValue * 1024;
        case 'MB':
          return numericValue;
        case 'KB':
          return numericValue / 1024;
        default:
          return numericValue;
      }
    } else {
      return value;
    }
  };

  const normalizedBarValues = barValues.map((item) => {
    if (typeof item.value === 'string') {
      const parsedValue = parseValueToMB(item.value);
      const normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
      return {
        ...item,
        normalizedValue,
        labelValue: Number.isInteger(normalizedValue)
          ? normalizedValue
          : normalizedValue.toFixed(2),
      };
    }
    return {
      ...item,
      normalizedValue: item.value,
      labelValue: Number.isInteger(item.value)
        ? item.value
        : item.value?.toFixed(2),
    };
  });

  const totalBarValue = normalizedBarValues.reduce(
    (acc, status) => acc + status.normalizedValue,
    0
  );
  const baseRadius = radius;
  const radiusIncrement = lineWidth + gapBetweenArch;
  const maxRadius =
    baseRadius + radiusIncrement * (normalizedBarValues.length - 1);
  const svgSize = 2 * (maxRadius + lineWidth);
  const reversedBarValues = [...normalizedBarValues].reverse();

  const labelLines = labelHeading.trim().split(' ');

  const renderLegend = (legendData: ChartItem[], legendType: LegendType) => {
    switch (legendType) {
      case 'numberLegend':
        return (
          <div
            className="ff-legend-container ff-number-legend"
            style={{ gap: legendGap }}
          >
            {legendData.map((item, index) => (
              <div
                className="ff-legend-item"
                key={index}
                onMouseEnter={(e) => {
                  setHoveredLegend(item.barLabel || item.label);
                  handleMouseEnter(
                    e,
                    `${item.barLabel || 'Data'}: ${item.value}`,
                    false
                  );
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  setHoveredLegend(null);
                  handleMouseLeave();
                }}
              >
                <Typography
                  fontSize={20}
                  fontWeight="semi-bold"
                  className="ff-legend-value"
                  color={getLegendColor(item)}
                >
                  {item.key.padStart(2, '0')}
                </Typography>
                <Typography
                  fontSize={10}
                  className="ff-legend-key"
                  color="var(--text-color)"
                >
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        );

      case 'pillLegend':
        return (
          <div
            className="ff-legend-container ff-pill-legend"
            style={{ gap: legendGap }}
          >
            {legendData
              .slice()
              .reverse()
              .map((item, index) => (
                <div
                  className="ff-legend-item"
                  key={index}
                  onMouseEnter={(e) => {
                    setHoveredLegend(item.barLabel || item.label);
                    handleMouseEnter(
                      e,
                      `${item.barLabel || 'Data'}: ${item.value}`,
                      false
                    );
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    setHoveredLegend(null);
                    handleMouseLeave();
                  }}
                >
                  <span
                    className="ff-legend-capsule"
                    style={{ backgroundColor: getLegendColor(item) }}
                  >
                    <Typography
                      fontSize={10}
                      color="var(--tooltip-text-color)"
                      style={capsuleStyle}
                    >
                      {isPillValueVisible && item.value}
                    </Typography>
                  </span>
                  <Typography className="ff-legend-key">
                    {item.label}
                  </Typography>
                </div>
              ))}
          </div>
        );

      default:
        return null;
    }
  };

  const handleMouseEnter = (
    e: React.MouseEvent,
    content: string,
    isArc: boolean
  ) => {
    const { clientX, clientY } = e;
    setTooltip({
      visible: true,
      x: clientX,
      y: clientY,
      content: content,
      isArc,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTooltip((prev) => ({
      ...prev,
      x: clientX,
      y: clientY,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, content: '', isArc: false });
  };

  const textData = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const getArcColorFromTooltip = () => {
    if (!tooltip.visible) return '';
    const valueString = tooltip.content.split(':')[0]?.trim();
    if (valueString === undefined) return '';
    const matchingBar = normalizedBarValues.find(
      (val) => val.barLabel === valueString
    );
    if (!matchingBar) return '';
    const chartItem: ChartItem = {
      ...matchingBar,
      label: matchingBar.barLabel,
      key: matchingBar.labelValue?.toString() ?? '',
    };
    return getLegendColor(chartItem);
  };
  const DEFAULT_LINE_HEIGHT = 18;
  return (
    <div
      className={`ff-multi-radial-chart-container ${
        legendType === 'numberLegend'
          ? 'ff-multi-radial-chart-number'
          : 'ff-multi-radial-chart-pill'
      }`}
      style={{ gap: chartToLegendGap }}
    >
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute top-0 left-0"
        >
          {renderGradients()}
          <g transform={`translate(${svgSize / 2 + 1}, ${svgSize / 2 + 1})`}>
            {reversedBarValues.map((values, i) => {
              const originalIndex = normalizedBarValues.length - 1 - i;
              const percentage = values.normalizedValue / totalBarValue;
              const angleIncrement = percentage * 2 * Math.PI;
              let startAngle = -Math.PI / 2;
              let endAngle = startAngle + angleIncrement;
              if (values.normalizedValue === totalBarValue) {
                startAngle = 0;
                endAngle = 2 * Math.PI;
              }
              const currentRadius =
                baseRadius + radiusIncrement * originalIndex;

              const backGroundArcPath = calculateArc(
                0,
                0,
                currentRadius,
                0,
                2 * Math.PI
              );

              const arcStyle = {
                opacity:
                  hoveredLegend !== null
                    ? values.barLabel === hoveredLegend
                      ? 1
                      : 0.2
                    : 1,
                transition: 'opacity 0.3s ease',
              };

              // If value is 0, render a dot at the top of the circle (angle = -Math.PI / 2)
              if (values.normalizedValue === 0) {
                const dotX = currentRadius * Math.cos(-Math.PI / 2);
                const dotY = currentRadius * Math.sin(-Math.PI / 2);
                return (
                  <g key={originalIndex}>
                    <path
                      d={backGroundArcPath}
                      fill="none"
                      stroke={values.arcBackgroundColor}
                      strokeWidth={lineWidth}
                      className="transition-all duration-300"
                      style={arcStyle}
                    />
                    <circle
                      cx={dotX}
                      cy={dotY}
                      r={lineWidth + 1}
                      fill={getArcColor(
                        {
                          ...values,
                          label: values.barLabel || '',
                          key: values.labelValue?.toString() || '',
                        },
                        originalIndex
                      )}
                      onMouseEnter={(e) =>
                        handleMouseEnter(
                          e,
                          `${values.barLabel || 'Data'}: ${values.value}`,
                          true
                        )
                      }
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={arcStyle}
                    />
                  </g>
                );
              }

              const foregroundArcPath = calculateArc(
                0,
                0,
                currentRadius,
                startAngle,
                endAngle
              );
              return (
                <g key={originalIndex}>
                  <path
                    d={backGroundArcPath}
                    fill="none"
                    stroke={values.arcBackgroundColor}
                    strokeWidth={lineWidth}
                    className="transition-all duration-300"
                    style={arcStyle}
                  />
                  <path
                    d={foregroundArcPath}
                    fill="none"
                    stroke={getArcColor(
                      {
                        ...values,
                        label: values.barLabel || '',
                        key: values.labelValue?.toString() || '',
                      },
                      originalIndex
                    )}
                    strokeWidth={lineWidth}
                    strokeLinecap={lineCap === 'square' ? 'butt' : 'round'}
                    onMouseEnter={(e) =>
                      handleMouseEnter(
                        e,
                        `${values.barLabel || 'Data'}: ${values.value}`,
                        true
                      )
                    }
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ pointerEvents: 'stroke', ...arcStyle }}
                  />
                </g>
              );
            })}
            <text
              x="0"
              y={`-${lineWidth + gapBetweenArch + 2}`}
              fill={getArcColorFromTooltip()}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {tooltip.visible ? (
                <>
                  <tspan
                    x="0"
                    dy={`${lineWidth + gapBetweenArch - 5}`}
                    className="ff-center-text-tooltip"
                  >
                    {textData(tooltip.content.split(':')[1]?.trim() || '', 5)}
                  </tspan>
                  <tspan
                    x="0"
                    dy={`${lineWidth + gapBetweenArch + 5}`}
                    className="ff-center-text-tooltip"
                  >
                    {textData(tooltip.content.split(':')[0] ?? '', 8)}
                  </tspan>
                </>
              ) : (
                <>
                  {labelLines.map((line, index) => {
                    if (index === 0) {
                      const [firstWord, ...restWords] = line.split(' ');
                      return (
                        <tspan key={index}>
                          <tspan
                            x="0"
                            dy="0"
                            style={{ fontSize: `${labelFontSize}px` }}
                            className="ff-center-first-text"
                          >
                            {firstWord}
                          </tspan>
                          <tspan
                            x="0"
                            dy={DEFAULT_LINE_HEIGHT}
                            style={{ fontSize: `${subLabelFontSize}px` }}
                            className="ff-center-text"
                          >
                            {restWords.join(' ')}
                          </tspan>
                        </tspan>
                      );
                    }
                    return (
                      <tspan
                        key={index}
                        x="0"
                        dy={index === 0 ? 0 : DEFAULT_LINE_HEIGHT}
                        className="ff-center-text"
                        style={{ fontSize: `${subLabelFontSize}px` }}
                      >
                        {line}
                      </tspan>
                    );
                  })}
                </>
              )}
            </text>
          </g>
        </svg>
      </div>
      {tooltip.visible && (
        <div
          className="ff-multi-radial-tooltip"
          style={{
            position: 'fixed',
            top: `${tooltip.y - (tooltip.isArc ? 5 : -10)}px`,
            left: `${tooltip.x + (tooltip.isArc ? 60 : 15)}px`,
            zIndex: 1000,
            transform: tooltip.isArc ? 'translateX(-50%)' : 'none',
            pointerEvents: 'none',
          }}
        >
          {tooltip.content}
        </div>
      )}

      {isLegendDetails &&
        renderLegend(
          normalizedBarValues.map((value) => ({
            ...value,
            label: value?.barLabel,
            key: value.labelValue?.toString(),
          })),
          legendType
        )}
    </div>
  );
};

export default MultiRadialChart;
