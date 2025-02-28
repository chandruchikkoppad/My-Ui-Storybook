import React, { useState } from 'react';
import { LineChartProps } from './types';
import './LineChart.scss';
import Typography from '../../Typography';
import {
  MEMORY_VALIDATION_REGEX,
  NUMBER_REGEX,
  UNIT_REGEX,
} from '../../../validations/regex';

interface HoverState {
  cursorX: number | null;
  hoverValues: { [lineIndex: number]: number | string | null };
  dotPositions: { [lineIndex: number]: { x: number; y: number } | null };
  tooltip: { visible: boolean; left: number; top: number };
  currentXValue: string | null;
}

const LineChart: React.FC<LineChartProps> = ({
  data = [],
  width,
  height,
  lineChartWidth,
  yAxisLabel,
  xAxisLabel,
  yAxisValueColor,
  xAxisColor,
  yAxisColor,
  yAxisLabelColor,
  textSize,
  fontWeight,
  numberSize,
  chartName,
  shouldCenterSinglePoint,
  xAxisLabelGap = 16,
}) => {
  const margin = 40;
  const xMax = width - margin * 2;
  const yMax = height - margin * 2;

  const hasData =
    data &&
    data.length > 0 &&
    data?.some((line) => Array.isArray(line?.data) && line?.data?.length > 0);
  if (!hasData) {
    const defaultDates: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const formatted = d?.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
      });
      defaultDates.push(formatted);
    }
    const maxMemory = 1024;
    const numberOfYTicks = 6;
    const numberOfXTicks = 7;
    return (
      <div
        className="ff-line-chart-text"
        style={{ width: width + 20 + xAxisLabelGap, gap: xAxisLabelGap }}
      >
        <div
          className="ff-line-chart-yAxisLabel-warpper"
          style={{ height: height }}
        >
          <Typography
            className="ff-line-chart-yAxisLabel"
            fontSize={textSize}
            fontWeight="semi-bold"
          >
            {yAxisLabel}
          </Typography>
        </div>
        <div className="ff-line-chart-svg">
          <svg height={height} width={width} className="ff-line-chart-svg">
            <g transform={`translate(${margin}, ${margin})`}>
              <line
                x1={0}
                y1={yMax}
                x2={xMax}
                y2={yMax}
                stroke={xAxisColor}
                strokeWidth={1}
              />
              <text
                x={xMax / 2.1}
                y={yMax + margin / 1.2}
                textAnchor="middle"
                fill={yAxisLabelColor}
                className="ff-line-chart-x-axis-label"
                style={{ fontSize: textSize, fontWeight: fontWeight }}
              >
                {xAxisLabel}
              </text>
              {defaultDates.map((date, i) => {
                const tickSpacing = xMax / (numberOfXTicks - 1);
                return (
                  <text
                    key={date}
                    x={i * tickSpacing}
                    y={yMax + 15}
                    textAnchor={
                      i === 0 ? 'start' : i === numberOfXTicks - 1 ? 'end' : 'middle'
                    }
                    fill={yAxisColor}
                    className="ff--line-chart-x-line-data"
                    style={{ fontSize: numberSize }}
                  >
                    {date}
                  </text>
                );
              })}
              {Array.from({ length: numberOfYTicks }).map((_, i) => {
                const yValue = (i * maxMemory) / (numberOfYTicks - 1);
                const displayValue = yValue / 1024;
                const yPos = yMax - (yValue * yMax) / maxMemory;
                return (
                  <text
                    key={`y-${i}`}
                    x={-10}
                    y={yPos}
                    textAnchor="end"
                    fill={yAxisValueColor}
                    className="ff-line-chart-y-axis-text"
                    style={{ fontSize: numberSize }}
                  >
                    {displayValue?.toFixed(1)}
                  </text>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    );
  }

  const roundUp = (value: any, decimals = 2) => {
    let unit = '';

    if (typeof value === 'string') {
      const match = value.match(NUMBER_REGEX);
      const unitMatch = value.match(UNIT_REGEX);
      if (match) {
        value = parseFloat(match[0]);
      }
      if (unitMatch) {
        unit = unitMatch[0];
      }
    }

    const multiplier = Math.pow(10, decimals);
    const roundedValue = Math.ceil(value * multiplier) / multiplier;

    return `${roundedValue} ${unit}`.trim();
  };

  function convertToMB(input: any) {
    if (!isNaN(input)) {
      return parseFloat(input);
    }

    const regex = MEMORY_VALIDATION_REGEX;
    const match = input.match(regex);

    if (!match) {
      throw new Error(
        "Invalid input format. Use '<value> <unit>' format (e.g., '10.9580078125 KB') or just a number."
      );
    }

    const value = parseFloat(match[1]);
    const unit = match[2] ? match[2].toUpperCase() : null;
    switch (unit) {
      case 'GB':
        return parseFloat((value * 1024).toFixed(2));
      case 'MB':
        return parseFloat(value.toFixed(2));
      case 'KB':
        return parseFloat((value / 1024).toFixed(2));
      default:
        throw new Error('Invalid unit. Supported units are GB, MB, and KB.');
    }
  }

  const isDefaultLineChart =
    data?.[0]?.data?.[0]?.hasOwnProperty('date') &&
    data?.[0]?.data?.[0]?.hasOwnProperty('totalMemory');
  const xKey = isDefaultLineChart ? 'date' : 'date';
  const yKey = isDefaultLineChart ? 'totalMemory' : 'value';
  const xScale = (x: string) => {
    const totalPoints = data?.[0]?.data?.length;
    if (totalPoints === 1) {
      return shouldCenterSinglePoint ? xMax / 2 : xMax;
    }
    const index = data[0].data.findIndex((point: any) => point[xKey] === x);
    if (index === -1) return 0;
    return (index / (totalPoints - 1)) * xMax;
  };

  const maxValue = Math.max(
    ...data?.flatMap((line) =>
      line?.data?.map((point: any) => convertToMB(point[yKey]))
    ),
    5
  );

  const yScale = (y: number) => {
    if (chartName === 'memory') {
      const maxMemoryValue = Math.max(
        ...data?.flatMap((line) =>
          line?.data?.map((point: any) => convertToMB(point[yKey]))
        )
      );
      const scaleMax = maxMemoryValue > 1024 ? maxMemoryValue : 1024;
      return yMax - (y * yMax) / scaleMax;
    } else {
      return yMax - (y * yMax) / (maxValue === 0 ? 1024 : maxValue);
    }
  };

  const isAllValuesZero = (lineData: { [key: string]: any }[]) => {
    return lineData.every((point) => convertToMB(point[yKey]) === 0);
  };

  const generateLinePath = (lineData: { [key: string]: any }[]) => {
    if (lineData?.length === 1) {
      const point = lineData?.[0]!;
      const x = xScale(point[xKey]);
      const yValue = yScale(convertToMB(point[yKey]));
      return `M 0 ${yScale(0)} L ${x} ${yValue}`;
    }
    return lineData?.reduce((path, point, i) => {
      const x = xScale(point[xKey]);
      const y = yScale(convertToMB(point[yKey]));
      if (i === 0) {
        return `M ${x} ${y}`;
      }
      const prevPoint = lineData[i - 1];
      const prevX = prevPoint ? xScale(prevPoint[xKey]) : 0;
      const prevY = prevPoint ? yScale(convertToMB(prevPoint[yKey])) : 0;
      return `${path} C ${prevX + (x - prevX) / 2} ${prevY}, ${
        x - (x - prevX) / 2
      } ${y}, ${x} ${y}`;
    }, '');
  };
  const dataPoints = data[0].data;
  const numberOfXTicks = 7;
  const renderTickLabels = () => {
    if (dataPoints.length === 1) {
      const point = dataPoints?.[0];
      return (
        <text
          key={String(point[xKey])}
          x={shouldCenterSinglePoint ? xMax / 2 : xMax}
          y={yMax + 15}
          textAnchor={shouldCenterSinglePoint ? 'middle' : 'end'}
          fill={yAxisColor}
          className="ff--line-chart-x-line-data"
          style={{ fontSize: numberSize }}
        >
          {point[xKey] != null ? String(point[xKey]) : ''}
        </text>
      );
    } else if (dataPoints.length < 7) {
      return dataPoints.map((point: { [x: string]: any; }) => (
        <text
          key={String(point[xKey])}
          x={xScale(point[xKey])}
          y={yMax + 15}
          textAnchor="middle"
          fill={yAxisColor}
          className="ff--line-chart-x-line-data"
          style={{ fontSize: numberSize }}
        >
          {point[xKey] != null ? String(point[xKey]) : ''}
        </text>
      ));
    } else {
      const tickSpacing = xMax / (numberOfXTicks - 1);
      return Array.from({ length: numberOfXTicks }).map((_, i) => {
        const dataIndex = Math.floor(
          (i * (dataPoints?.length - 1)) / (numberOfXTicks - 1)
        );
        const point = dataPoints[dataIndex];
        return (
          <text
            key={String(point?.[xKey])}
            x={i * tickSpacing}
            y={yMax + 15}
            textAnchor={
              i === 0 ? 'start' : i === numberOfXTicks - 1 ? 'end' : 'middle'
            }
            fill={yAxisColor}
            className="ff--line-chart-x-line-data"
            style={{ fontSize: numberSize }}
          >
            {point?.[xKey] != null ? String(point?.[xKey]) : ''}
          </text>
        );
      });
    }
  };

  const renderYAxisLabels = () => {
    const numberOfYTicks = 6;
    if (chartName === 'memory') {
      const dynamicMaxValue = Math.max(maxValue, 1024);
      return Array.from({ length: numberOfYTicks }).map((_, i) => {
        const yValue = (i * dynamicMaxValue) / (numberOfYTicks - 1);
        const displayValue = yValue / 1024; // Convert MB to GB
        return (
          <text
            key={`y-${i}`}
            x={-10}
            y={yScale(yValue)}
            textAnchor="end"
            fill={yAxisValueColor}
            className="ff-line-chart-y-axis-text"
            style={{ fontSize: numberSize }}
          >
            {displayValue.toFixed(1)}
          </text>
        );
      });
    } else {
      return Array.from({ length: numberOfYTicks }).map((_, i) => {
        const yValue = (i * maxValue) / (numberOfYTicks - 1);
        return (
          <text
            key={`y-${i}`}
            x={-10}
            y={yScale(yValue)}
            textAnchor="end"
            fill={yAxisValueColor}
            className="ff-line-chart-y-axis-text"
            style={{ fontSize: numberSize }}
          >
            {yValue.toFixed(0)}
          </text>
        );
      });
    }
  };

  const [hoverState, setHoverState] = useState<HoverState>({
    cursorX: null,
    hoverValues: {},
    dotPositions: {},
    tooltip: { visible: false, left: 0, top: 0 },
    currentXValue: null,
  });

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svgRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - svgRect.left - margin;

    let nearestValues = {
      hoverValues: {} as HoverState['hoverValues'],
      dotPositions: {} as HoverState['dotPositions'],
    };
    let nearestXValue: string | null = null;

    data.forEach((line, lineIndex) => {
      const nearestPoint = line.data.reduce(
        (closest: { distance: number }, point: { [key: string]: any }) => {
          const distance = Math.abs(mouseX - xScale(point[xKey]));
          return distance < closest.distance ? { point, distance } : closest;
        },
        { point: null, distance: Infinity }
      ).point;

      if (nearestPoint) {
        nearestXValue = nearestPoint[xKey];
        nearestValues.hoverValues[lineIndex] = roundUp(nearestPoint[yKey]);
        nearestValues.dotPositions[lineIndex] = {
          x: xScale(nearestPoint[xKey]),
          y: yScale(convertToMB(nearestPoint[yKey])),
        };
      }
    });

    setHoverState({
      cursorX: mouseX,
      hoverValues: nearestValues.hoverValues,
      dotPositions: nearestValues.dotPositions,
      currentXValue: nearestXValue,
      tooltip: nearestXValue
        ? { visible: true, left: e.clientX + 10, top: e.clientY - 20 }
        : { visible: false, left: 0, top: 0 },
    });
  };

  const handleMouseLeave = () =>
    setHoverState({
      cursorX: null,
      hoverValues: {},
      dotPositions: {},
      tooltip: { visible: false, left: 0, top: 0 },
      currentXValue: null,
    });

  return (
    <div
      className="ff-line-chart-text"
      style={{ width: width + 20 + xAxisLabelGap, gap: xAxisLabelGap }}
    >
      <div
        className="ff-line-chart-yAxisLabel-warpper"
        style={{ height: height }}
      >
        <Typography
          className="ff-line-chart-yAxisLabel"
          fontSize={textSize}
          fontWeight="semi-bold"
        >
          {yAxisLabel}
        </Typography>
      </div>
      <div className="ff-line-chart-svg">
        <svg
          height={height}
          width={width}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="ff-line-chart-svg"
        >
          <g transform={`translate(${margin}, ${margin})`}>
            <line x1={0} y1={0} x2={0} y2={yMax} strokeWidth={2} />
            <line
              x1={0}
              y1={yMax}
              x2={xMax}
              y2={yMax}
              stroke={xAxisColor}
              strokeWidth={1}
            />
            <text
              x={xMax / 2.1}
              y={yMax + margin / 1.2}
              textAnchor="middle"
              fill={yAxisLabelColor}
              className="ff-line-chart-x-axis-label"
              style={{ fontSize: textSize, fontWeight: fontWeight }}
            >
              {xAxisLabel}
            </text>
            {data.map((line, index) =>
              line.show !== false ? (
                <g key={index}>
                  <path
                    d={generateLinePath(line.data)}
                    fill="none"
                    stroke={line.color}
                    strokeWidth={lineChartWidth}
                    opacity={!isAllValuesZero(line.data) ? 1 : 0.5}
                  />
                  {hoverState.dotPositions[index] && (
                    <>
                      <line
                        x1={hoverState.dotPositions[index]!.x}
                        y1={0}
                        x2={hoverState.dotPositions[index]!.x}
                        y2={yMax}
                        stroke="gray"
                        strokeWidth={0.5}
                        strokeDasharray="4"
                      />
                      <circle
                        cx={hoverState.dotPositions[index]!.x}
                        cy={hoverState.dotPositions[index]!.y}
                        r={5}
                        fill="white"
                        stroke={line.color}
                        strokeWidth={lineChartWidth}
                        style={{ transition: 'cx 0.1s, cy 0.1s' }}
                      />
                      <line
                        x1={0}
                        y1={hoverState.dotPositions[index]!.y}
                        x2={xMax}
                        y2={hoverState.dotPositions[index]!.y}
                        stroke="gray"
                        strokeWidth={0.5}
                        strokeDasharray="4"
                      />
                    </>
                  )}
                </g>
              ) : null
            )}
            {renderTickLabels()}
            {renderYAxisLabels()}
          </g>
        </svg>
        {hoverState.tooltip.visible && (
          <div
            className="ff-line-chart-tooltip"
            style={{
              left: hoverState.tooltip.left,
              top: hoverState.tooltip.top,
            }}
          >
            <div className="ff-line-chart-date">{hoverState.currentXValue}</div>
            {Object.entries(hoverState.hoverValues).map(
              ([index, value]) =>
                data[Number(index)]?.show !== false && (
                  <div key={index} className="ff-line-chart-inner-tooltip">
                    {data[Number(index)]?.name !== 'default' && (
                      <div
                        className="ff-line-chart-status-dot"
                        style={{ backgroundColor: data[Number(index)]?.color }}
                      />
                    )}
                    {data[Number(index)]?.name}: {value}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LineChart;
