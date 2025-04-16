import React, { useEffect, useMemo, useState } from 'react';
import {
  DashboardDonutChartProps,
  ChartItem,
  LegendType,
  NormalizedChartItem,
} from './types';
import Typography from '../../Typography';
import './DashboardDonutChart.scss';
import classNames from 'classnames';
import {
  normalizeStorageValue,
  formatMemoryValue,
} from '../../../assets/utils/functionUtils';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';

const toNumber = (val: string | number): number =>
  typeof val === 'number' ? val : parseFloat(val) || 0;
const getRandomColor = (): string => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + ('000000' + color).slice(-6);
};
const getUniqueVersions = (
  item: NormalizedChartItem
): { major: number; ver: string; color: string }[] => {
  const unique: { major: number; ver: string; color: string }[] = [];
  if (item.version && Array.isArray(item.version)) {
    const versionColorMap: Record<number, string> = {};
    item.version.forEach((ver, j) => {
      const verString = String(ver);
      const parts = verString.split('.');
      const major = Number(parts[0]);
      if (!(major in versionColorMap)) {
        const color =
          item.versionColor?.[j % (item.versionColor?.length || 1)] ||
          getRandomColor();
        versionColorMap[major] = color;
        unique.push({ major, ver: verString, color });
      }
    });
  }
  return unique;
};

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

const calculateDonutSegmentBorderPath = (
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
): string => {
  const startOuterX = innerR * Math.cos(startAngle);
  const startOuterY = innerR * Math.sin(startAngle);
  const endOuterX = innerR * Math.cos(endAngle);
  const endOuterY = innerR * Math.sin(endAngle);
  const endInnerX = outerR * Math.cos(endAngle);
  const endInnerY = outerR * Math.sin(endAngle);
  const startInnerX = outerR * Math.cos(startAngle);
  const startInnerY = outerR * Math.sin(startAngle);
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  return `
    M ${startOuterX} ${startOuterY}
    A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
    L ${endInnerX} ${endInnerY}
    A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${startInnerX} ${startInnerY}
    Z
  `;
};

const colorMapping = [
  'var(--status-success-text-color)',
  'var(--status-rejected-text-color)',
  'var(--status-warning-text-color)',
  'var(--status-button-text-skipped)',
  'var(--brand-color)',
];

const DashboardDonutChart: React.FC<DashboardDonutChartProps> = ({
  radius = 60,
  tableWidth,
  tableHeight = 120,
  lineWidth = 15,
  statusValues = [],
  gapAngle = 0,
  legendDetailsType = '',
  isLegendDetails = true,
  legendType = 'numberLegend',
  showOnlyLabel = false,
  apiDataLabel,
  unit,
  showUnit = true,
  labelFontSize = 24,
  subLabelFontSize = 14,
  legendPosition = 'bottom',
  chartGap = 0,
  legendGap = 5,
  legendValueFontSize = 22,
  legendKeyFontSize = 12,
  legendWithVersionFontSize = 12,
  versionErrorText,
  labelYoffSet = -5,
  subLabelYoffSet = 20,
  capsuleStyle = {},
  legendTruncate = Infinity,
  isLegendToolTip = false,
  containerHeight = '',
  onSelectedStatus = (_value) => {},
  selectedStatusKey = '',
  setSelectedStatusKey = (_selectedStatusKey) => {},
  isOnClick = false,
}) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [hoveredVersion, setHoveredVersion] = useState<{
    parentIndex: number;
    subIndex: number;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (!selectedStatusKey) {
      setSelectedItemIndex(null);
    }
  }, [selectedStatusKey]);

  useEffect(() => {
    statusValues.forEach((item) => {
      if ((item as ChartItem).version) {
        console.log(`Version for ${item.key}:`, (item as ChartItem).version);
      }
    });
  }, [statusValues]);

  // Normalize data (and keep versionColor if provided)
  const normalizedStatusValues: NormalizedChartItem[] =
    legendType === 'memoryLegend'
      ? statusValues.map((item) => {
          if (typeof item.value === 'string') {
            const { normalizedValue, unit, value } = normalizeStorageValue(
              item.value
            );
            return { ...item, normalizedValue, unit, labelValue: value };
          }
          return {
            ...item,
            normalizedValue: item.value as number,
            labelValue: item.value,
            unit: 'B',
          };
        })
      : statusValues.map((item) => {
          if (typeof item.value === 'string') {
            const parsedValue = parseFloat(item.value);
            const normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
            return {
              ...item,
              normalizedValue,
              unit: '',
              labelValue: Number.isInteger(normalizedValue)
                ? normalizedValue
                : normalizedValue.toFixed(2),
            };
          }
          return {
            ...item,
            normalizedValue: item.value as number,
            unit: '',
            labelValue: Number.isInteger(item.value)
              ? item.value
              : item.value?.toFixed(2),
          };
        });

  const chartValues = normalizedStatusValues?.map((item, index) => ({
    ...item,
    value: item.normalizedValue ?? (item.value as number),
    originalIndex: index,
  }));

  const total =
    chartValues?.reduce((acc, { value }) => acc + toNumber(value), 0) || 0;
  const nonZeroValues =
    chartValues?.filter(({ value }) => toNumber(value) > 0) || [];
  const totalMemory = formatMemoryValue(total);

  // Angle constants
  const MIN_PERCENTAGE = 1;
  const MIN_ANGLE = (MIN_PERCENTAGE / 100) * (2 * Math.PI);

  // Compute arc positions only once so that they remain stable.
  const computedArcs = useMemo(() => {
    if (nonZeroValues.length === 0) return [];
    const totalAngle = 2 * Math.PI;
    const totalGap = gapAngle * nonZeroValues.length;
    let remainingAngleCalc = totalAngle - totalGap;
    nonZeroValues.forEach(({ value }) => {
      const valuePercentage = toNumber(value) / total;
      const baseAngle = Math.max(valuePercentage * totalAngle, MIN_ANGLE);
      remainingAngleCalc -= baseAngle;
    });
    let currAngle = Math.PI / 2;
    return nonZeroValues.map((item) => {
      const valuePercentage = toNumber(item.value) / total;
      const baseAngle = Math.max(valuePercentage * totalAngle, MIN_ANGLE);
      const extraAngle = remainingAngleCalc * valuePercentage;
      const angle = baseAngle + extraAngle;
      const startAngle = currAngle;
      const endAngle = currAngle + angle;
      currAngle = endAngle + gapAngle;
      let subArcs = null;
      return { item, startAngle, endAngle, subArcs };
    });
  }, [nonZeroValues, total, gapAngle, MIN_ANGLE, versionErrorText]);


  const handleSegmentMouseEnter = (originalIndex: number) => {
    setHoveredItemIndex(originalIndex);
    setShowTooltip(true);
  };
  const handleSegmentMouseLeave = () => {
    setHoveredItemIndex(null);
    setShowTooltip(false);
  };
  const handleSegmentMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({ x: event.clientX + 10, y: event.clientY + 10 });
  };
  const handleSelectStatus = (value: string, originalIndex: number) => {
    if (isOnClick && selectedStatusKey !== value) {
      setSelectedItemIndex(originalIndex);
      setSelectedStatusKey(value);
      onSelectedStatus(value);
    } else {
      setSelectedItemIndex(null);
      setSelectedStatusKey('');
      onSelectedStatus('');
    }
  };

  const SVG_PADDING = 3;
  const DONUT_SVG_SIZE = radius * 2 + lineWidth + SVG_PADDING * 2;
  const LABEL_MAX_WIDTH = radius * 2 - lineWidth - SVG_PADDING * 2;
  const borderGap = 2;
  const borderThickness = 2;

  const renderArcSegment = (
    arcData: {
      item: NormalizedChartItem & { originalIndex: number };
      startAngle: number;
      endAngle: number;
      subArcs: any;
    },
    _i: number
  ) => {
    if (arcData.subArcs) {
      // Versioned segment: render each sub-arc with its own event handlers.
      return (
        <g
          key={arcData.item.originalIndex}
          className="donut-segment version-segment"
        >
          {arcData.subArcs.map((sub: any, j: number) => {
            const angleDiff = sub.endAngle - sub.startAngle;
            const isFullCircle = Math.abs(angleDiff - 2 * Math.PI) < 0.01;
            const isActive =
              hoveredVersion !== null
                ? hoveredVersion.parentIndex === arcData.item.originalIndex &&
                  hoveredVersion.subIndex === j
                : hoveredItemIndex !== null
                ? hoveredItemIndex === arcData.item.originalIndex
                : true;
            if (isFullCircle) {
              return (
                <g
                  key={j}
                  className="sub-arc-group"
                  onMouseEnter={(e) => {
                    setHoveredVersion({
                      parentIndex: arcData.item.originalIndex,
                      subIndex: j,
                    });
                    setTooltipPosition({
                      x: e.clientX + 10,
                      y: e.clientY + 10,
                    });
                    setShowTooltip(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredVersion(null);
                    setShowTooltip(false);
                  }}
                  onMouseMove={(e) =>
                    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 })
                  }
                >
                  <circle
                    cx="0"
                    cy="0"
                    r={radius}
                    fill="none"
                    stroke={sub.randomColor}
                    strokeWidth={lineWidth}
                    strokeOpacity={versionErrorText ? 0.2 : isActive ? 1 : 0}
                    style={{
                      transition: 'stroke-opacity 0.5s ease',
                    }}
                  />
                  <g
                    className="sub-arc-border-wrapper"
                    style={{
                      opacity:
                        hoveredVersion &&
                        hoveredVersion.parentIndex ===
                          arcData.item.originalIndex &&
                        hoveredVersion.subIndex === j
                          ? 1
                          : 0,
                      transition: 'opacity 0.5s ease',
                      overflow: 'visible',
                    }}
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r={
                        radius + lineWidth / 2 + borderGap + borderThickness / 2
                      }
                      fill="none"
                      stroke={sub.randomColor}
                      strokeWidth={borderThickness}
                      style={{ transition: 'stroke 0.5s ease' }}
                    />
                  </g>
                </g>
              );
            } else {
              const arcPath = calculateArc(
                0,
                0,
                radius,
                sub.startAngle,
                sub.endAngle
              );
              const subBorderPath = calculateDonutSegmentBorderPath(
                radius + lineWidth / 2 + borderGap,
                radius + lineWidth / 2 + borderGap + borderThickness,
                sub.startAngle,
                sub.endAngle
              );
              const subBorderOpacity =
                hoveredVersion &&
                hoveredVersion.parentIndex === arcData.item.originalIndex &&
                hoveredVersion.subIndex === j
                  ? 1
                  : 0;

              const isSelected = selectedStatusKey === arcData?.item?.key;

              return (
                <g
                  key={j}
                  className="sub-arc-group"
                  onMouseEnter={(e) => {
                    setHoveredVersion({
                      parentIndex: arcData.item.originalIndex,
                      subIndex: j,
                    });
                    setTooltipPosition({
                      x: e.clientX + 10,
                      y: e.clientY + 10,
                    });
                    setShowTooltip(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredVersion(null);
                    setShowTooltip(false);
                  }}
                  onMouseMove={(e) =>
                    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 })
                  }
                >
                  <path
                    d={arcPath}
                    fill="none"
                    stroke={sub.randomColor}
                    strokeWidth={lineWidth}
                    style={{
                      strokeOpacity: isActive ? 1 : 0.2,
                      transition: 'stroke-opacity 0.5s ease',
                    }}
                  />
                  {isSelected && isOnClick && (
                    <path
                      d={arcPath}
                      fill="none"
                      stroke="var(--dotted-border-color)"
                      strokeWidth={lineWidth}
                      strokeOpacity={0.4}
                      pointerEvents="none"
                    />
                  )}
                  <g
                    className="sub-arc-border-wrapper"
                    style={{
                      opacity: subBorderOpacity,
                      transition: 'opacity 0.5s ease',
                      overflow: 'visible',
                    }}
                  >
                    <path
                      d={subBorderPath}
                      fill={sub.randomColor}
                      pointerEvents="none"
                    />
                  </g>
                </g>
              );
            }
          })}
        </g>
      );
    } else {
      // Normal (non-version) segment.
      const angleDiff = arcData.endAngle - arcData.startAngle;
      const isFullCircle = Math.abs(angleDiff - 2 * Math.PI) < 0.01;
      const isActive =
        hoveredItemIndex !== null
          ? hoveredItemIndex === arcData.item.originalIndex
          : hoveredVersion !== null
          ? hoveredVersion.parentIndex === arcData.item.originalIndex
          : true;
      const segmentColor =
        arcData.item.color ||
        colorMapping[arcData.item.originalIndex % colorMapping.length];
      const borderWrapperOpacity =
        hoveredItemIndex === arcData.item.originalIndex ? 1 : 0;

      const isSelected = selectedStatusKey === arcData?.item?.key;

      if (isFullCircle) {
        return (
          <g key={arcData.item.originalIndex} className="donut-segment">
            <circle
              cx="0"
              cy="0"
              r={radius}
              fill="none"
              stroke={segmentColor}
              strokeWidth={lineWidth}
              onMouseEnter={() =>
                handleSegmentMouseEnter(arcData.item.originalIndex)
              }
              onMouseLeave={handleSegmentMouseLeave}
              onMouseMove={handleSegmentMouseMove}
              onClick={() =>
                handleSelectStatus(arcData.item.key, arcData.item.originalIndex)
              }
              style={{
                cursor: isOnClick ? 'pointer' : 'default',
                strokeOpacity: isActive ? 1 : 0.2,
                transition: 'stroke-opacity 0.5s ease',
              }}
            />
            {isSelected && isOnClick && (
              <circle
                cx="0"
                cy="0"
                r={radius}
                fill="none"
                strokeWidth={lineWidth}
                stroke="var(--dotted-border-color)"
                strokeOpacity={0.4}
                pointerEvents="none"
              />
            )}
            <g
              className="donut-border-wrapper"
              style={{
                opacity: borderWrapperOpacity,
                transition: 'opacity 0.5s ease',
                overflow: 'visible',
              }}
            >
              <circle
                cx="0"
                cy="0"
                r={radius + lineWidth / 2 + borderGap + borderThickness / 2}
                fill="none"
                stroke={segmentColor}
                strokeWidth={borderThickness}
                style={{ transition: 'stroke 0.5s ease' }}
              />
            </g>
          </g>
        );
      } else {
        const arcPath = calculateArc(
          0,
          0,
          radius,
          arcData.startAngle,
          arcData.endAngle
        );
        return (
          <g key={arcData.item.originalIndex} className="donut-segment">
            <path
              d={arcPath}
              fill="none"
              stroke={segmentColor}
              strokeWidth={lineWidth}
              onMouseEnter={() =>
                handleSegmentMouseEnter(arcData.item.originalIndex)
              }
              onMouseLeave={handleSegmentMouseLeave}
              onMouseMove={handleSegmentMouseMove}
              onClick={() =>
                handleSelectStatus(arcData.item.key, arcData.item.originalIndex)
              }
              style={{
                cursor: isOnClick ? 'pointer' : 'default',
                strokeOpacity: isActive ? 1 : 0.2,
                transition: 'stroke-opacity 0.5s ease',
              }}
            />
            {isSelected && isOnClick && (
              <path
                d={arcPath}
                fill="none"
                stroke="var(--dotted-border-color)"
                strokeWidth={lineWidth}
                strokeOpacity={0.4}
                pointerEvents="none"
              />
            )}
            <g
              className="donut-border-wrapper"
              style={{
                opacity: borderWrapperOpacity,
                transition: 'opacity 0.5s ease',
                overflow: 'visible',
              }}
            >
              <path
                d={calculateDonutSegmentBorderPath(
                  radius + lineWidth / 2 + borderGap,
                  radius + lineWidth / 2 + borderGap + borderThickness,
                  arcData.startAngle,
                  arcData.endAngle
                )}
                fill={segmentColor}
                pointerEvents="none"
              />
            </g>
          </g>
        );
      }
    }
  };

  // Render tooltip using the shared originalIndex.
  const renderTooltip = () => {
    if (hoveredVersion !== null) {
      const parent = computedArcs.find(
        (arc) => arc.item.originalIndex === hoveredVersion.parentIndex
      );
      const versionVal = Array.isArray(parent?.item?.version)
        ? parent.item.version[hoveredVersion.subIndex]
        : '';
      return (
        <div
          className="ff-donut-chart-tooltip"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <Typography>{`${parent?.item?.key}: ${versionVal}`}</Typography>
        </div>
      );
    }
    if (hoveredItemIndex !== null) {
      const hoveredItem = chartValues.find(
        (item) => item.originalIndex === hoveredItemIndex
      );
      return (
        <div
          className="ff-donut-chart-tooltip"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <Typography>{`${hoveredItem?.key} : `}</Typography>
          <Typography>
            {legendType === 'memoryLegend'
              ? `${hoveredItem?.labelValue} ${hoveredItem?.unit}`
              : hoveredItem?.value}
          </Typography>
          {hoveredItem?.version && (
            <Typography>
              {`Version: ${hoveredItem.version.join(', ')}`}
            </Typography>
          )}
        </div>
      );
    }
    return null;
  };

  // Render legend based on the legend type.
  const renderLegend = (
    legendData: (NormalizedChartItem & { originalIndex: number })[],
    legendType: LegendType,
    legendPosition: string
  ) => {
    const legendCount = legendData.length;
    const legendCountClass =
      legendCount > 6 ? 'ff-count-more' : `ff-count-${legendCount}`;
    const isSideLegend =
      legendPosition === 'left' || legendPosition === 'right';
    const handleToolTip = (
      legendItem: React.ReactNode,
      title: string,
      key: number
    ): React.ReactNode => {
      return isLegendToolTip ? (
        <Tooltip placement="bottom" title={title} key={key}>
          {legendItem}
        </Tooltip>
      ) : (
        legendItem
      );
    };

    switch (legendType) {
      case 'numberLegend': {
        return (
          <div
            className={classNames(
              'ff-legend-container',
              'ff-number-legend',
              legendCountClass,
              { 'ff-side-legend': isSideLegend }
            )}
            style={
              { '--donut-legend-gap': `${legendGap}px` } as React.CSSProperties
            }
          >
            {legendData?.map((item) => {
              return (
                <div
                  key={item.originalIndex}
                  className="ff-legend-item ff-d-flex"
                  onMouseEnter={() => {
                    if (toNumber(item.value) > 0) {
                      setHoveredItemIndex(item.originalIndex);
                    }
                  }}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                >
                  <div className="ff-legend-item">
                    <Typography
                      fontSize={legendValueFontSize}
                      fontWeight="semi-bold"
                      className="ff-legend-value"
                      color={
                        item.color
                          ? item.color
                          : colorMapping[
                              item.originalIndex % colorMapping.length
                            ]
                      }
                    >
                      {item.osIcon && item.osIcon.length > 0 ? (
                        <Icon name={item.osIcon} />
                      ) : (
                        String(item.labelValue || '00').padStart(2, '0') + ' '
                      )}
                      {showUnit && unit?.toUpperCase()}
                    </Typography>
                    <Typography
                      fontSize={legendKeyFontSize}
                      className="ff-legend-key"
                      textAlign="center"
                    >
                      {item.key.length > legendTruncate
                        ? `${item.key.slice(0, legendTruncate)}...`
                        : item.key}
                    </Typography>
                  </div>
                  {item.version && item.version.length > 0 ? (
                    <div className="ff-legend-version-container">
                      <div className="ff-legend-version-grid">
                        {(() => {
                          const uniqueVersions = getUniqueVersions(item);
                          return uniqueVersions.map((ver, j) => (
                            <div
                              key={j}
                              onMouseEnter={() =>
                                setHoveredVersion({
                                  parentIndex: item.originalIndex,
                                  subIndex: j,
                                })
                              }
                              onMouseLeave={() => setHoveredVersion(null)}
                              className="ff-legend-version-item"
                            >
                              <div
                                className="ff-legend-version-circle"
                                style={{ backgroundColor: ver.color }}
                              />
                              <Typography fontSize={legendWithVersionFontSize}>
                                {ver.major}
                              </Typography>
                            </div>
                          ));
                        })()}
                      </div>
                    </div>
                  ) : versionErrorText ? (
                    <Typography
                      textAlign="center"
                      className="ff-legend-version-error"
                      fontSize={14}
                    >
                      {versionErrorText}
                    </Typography>
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      }
      case 'pillLegend': {
        return (
          <div
            className="ff-legend-container ff-pill-legend"
            style={
              {
                '--donut-legend-gap': `${legendGap}px`,
                height: Number(containerHeight) - (DONUT_SVG_SIZE + chartGap),
              } as React.CSSProperties
            }
          >
            {legendData?.map((item) => {
              const legendItem = (
                <div className="ff-legend-item" key={item.originalIndex}>
                  <span
                    className="ff-legend-capsule"
                    style={{
                      backgroundColor: item?.color
                        ? item.color
                        : colorMapping[
                            item.originalIndex % colorMapping.length
                          ],
                      ...capsuleStyle,
                    }}
                  >
                    <Typography
                      className="ff-legend-capsule-content"
                      fontSize={legendValueFontSize}
                    >
                      {item?.labelValue === 0 ? '00' : item?.labelValue}
                    </Typography>
                  </span>
                  <Typography
                    fontSize={legendKeyFontSize}
                    className="ff-legend-key"
                  >
                    {item?.key.length > legendTruncate
                      ? `${item?.key.slice(0, legendTruncate)}...`
                      : item?.key}
                  </Typography>
                </div>
              );
              return handleToolTip(legendItem, item.key, item.originalIndex);
            })}
          </div>
        );
      }
      case 'memoryLegend': {
        return (
          <div
            className={classNames(
              'ff-legend-container',
              'ff-memory-legend',
              legendCountClass,
              { 'ff-side-legend': isSideLegend }
            )}
            style={
              { '--donut-legend-gap': `${legendGap}px` } as React.CSSProperties
            }
          >
            {legendData?.map((item) => {
              const legendItem = (
                <div
                  className="ff-legend-item"
                  key={item.originalIndex}
                  onMouseEnter={() => {
                    if (toNumber(item.value) > 0) {
                      setHoveredItemIndex(item.originalIndex);
                    }
                  }}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                >
                  <Typography
                    fontSize={legendValueFontSize}
                    fontWeight="semi-bold"
                    className="ff-legend-value"
                    color={
                      item.color
                        ? item.color
                        : colorMapping[item.originalIndex % colorMapping.length]
                    }
                  >
                    {item.labelValue} {item.unit}
                  </Typography>
                  <Typography
                    fontSize={legendKeyFontSize}
                    className="ff-legend-key"
                    textAlign="center"
                  >
                    {item.key.length > legendTruncate
                      ? `${item.key.slice(0, legendTruncate)}...`
                      : item.key}
                  </Typography>
                </div>
              );
              return handleToolTip(legendItem, item.key, item.originalIndex);
            })}
          </div>
        );
      }
      case 'tableLegend': {
        return (
          <div
            className="ff-legend-table-wrapper"
            style={{ height: tableHeight }}
          >
            <table className="ff-legend-table">
              <thead className="ff-legend-table-thead">
                <tr>
                  <th
                    className="ff-table-header"
                    style={{ width: tableWidth, textAlign: 'left' }}
                  >
                    Name
                  </th>
                  <th
                    className="ff-table-header"
                    style={{ textAlign: 'left', paddingLeft: '10px' }}
                  >
                    %
                  </th>
                  <th className="ff-table-header" style={{ textAlign: 'left' }}>
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {legendData?.map((item) => (
                  <tr
                    className="ff-legend-item"
                    key={item.originalIndex}
                    onMouseEnter={() => {
                      if (toNumber(item.value) > 0) {
                        setHoveredItemIndex(item.originalIndex);
                      }
                    }}
                    onMouseLeave={() => setHoveredItemIndex(null)}
                  >
                    <td className="ff-legend-name">
                      <span
                        className="ff-legend-capsule"
                        style={{
                          backgroundColor: item.color
                            ? item.color
                            : colorMapping[
                                item.originalIndex % colorMapping.length
                              ],
                        }}
                      >
                        <Typography fontSize={10}>
                          {item?.value === 0 ? '00' : item.value}
                        </Typography>{' '}
                      </span>
                      <Typography fontSize={10}>{item.key}</Typography>
                    </td>
                    <td className="ff-legend-percentage">
                      {item.percentage
                        ? item.percentage
                        : typeof item.value === 'string'
                        ? ((parseFloat(item.value) / total) * 100).toFixed(1)
                        : total === 0
                        ? 0
                        : ((item.value / total) * 100).toFixed(1)}
                    </td>
                    <td className="ff-legend-count">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      default:
        return null;
    }
  };

  // Utility functions for text wrapping (unchanged)
  function wrapText(
    text: string,
    maxWidth: number,
    fontSize: number
  ): string[] {
    const words: string[] = text.split(' ');
    const lines: string[] = [];
    let currentLine: string = '';
    words.forEach((word) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (measureTextWidth(testLine, fontSize) <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
  }
  function measureTextWidth(text: string, fontSize: number): number {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) throw new Error('Unable to get canvas context');
    context.font = `${fontSize}px Poppins`;
    return context.measureText(text).width;
  }
  const truncateChartText = (text: string) => {
    const tempElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    tempElement.style.fontSize = `${subLabelFontSize}px`;
    tempElement.style.visibility = 'hidden';
    const svgContainer = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    svgContainer.appendChild(tempElement);
    document.body.appendChild(svgContainer);
    tempElement.textContent = text;
    let textWidth = tempElement.getComputedTextLength();
    if (textWidth <= LABEL_MAX_WIDTH) {
      document.body.removeChild(svgContainer);
      return text;
    }
    let truncatedText = text;
    while (textWidth > LABEL_MAX_WIDTH && truncatedText.length > 0) {
      truncatedText = truncatedText.slice(0, -1);
      tempElement.textContent = `${truncatedText}...`;
      textWidth = tempElement.getComputedTextLength();
    }
    document.body.removeChild(svgContainer);
    return `${truncatedText}...`;
  };

  return (
    <div
      className={classNames('ff-dashboard-donut-chart-section', {
        'ff-dashboard-donut-chart-section-table-legend':
          legendType === 'tableLegend',
        'legend-position-bottom': legendPosition === 'bottom',
        'legend-position-left': legendPosition === 'left',
        'ff-overflow-visible': true,
      })}
      style={{ gap: `${chartGap}px` }}
    >
      <div className="ff-dashboard-donut-chart-svg-container">
        <svg
          width={DONUT_SVG_SIZE}
          height={DONUT_SVG_SIZE}
          viewBox={`0 0 ${DONUT_SVG_SIZE} ${DONUT_SVG_SIZE}`}
          className="ff-svg-overflow-visible"
        >
          <g
            transform={`translate(${radius + lineWidth / 2 + SVG_PADDING}, ${
              radius + lineWidth / 2 + SVG_PADDING
            })`}
          >
            {total === 0 || nonZeroValues.length === 0 ? (
              <circle
                cx={0}
                cy={0}
                r={radius}
                fill="none"
                stroke="var(--tooltip-bg-color)"
                strokeWidth={lineWidth}
                strokeOpacity={0.8}
                opacity={0.2}
              />
            ) : (
              computedArcs.map((arc, i) => renderArcSegment(arc, i))
            )}
            {showOnlyLabel && (
              <text
                x="0"
                y="5"
                className="ff-svg-label-text"
                textAnchor="middle"
                fill={colorMapping[3]}
                style={{ fontSize: `${labelFontSize}px` }}
              >
                {wrapText(
                  legendDetailsType,
                  LABEL_MAX_WIDTH,
                  labelFontSize
                ).map((line, index, lines) => (
                  <tspan
                    key={index}
                    x="0"
                    dy={index === 0 ? (lines.length > 1 ? -8 : 0) : 24}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            )}
            {!showOnlyLabel && (
              <>
                <text
                  x="0"
                  y={labelYoffSet}
                  textAnchor="middle"
                  fill={colorMapping[3]}
                  style={{ fontSize: `${labelFontSize}px` }}
                >
                  {wrapText(
                    legendType === 'tableLegend' &&
                      hoveredItemIndex !== null &&
                      chartValues.find(
                        (item) => item.originalIndex === hoveredItemIndex
                      )
                      ? `${(
                          ((chartValues.find(
                            (item) => item.originalIndex === hoveredItemIndex
                          )?.value || 0) /
                            total) *
                          100
                        ).toFixed(1)}%`
                      : legendType === 'memoryLegend'
                      ? `${totalMemory}`
                      : isOnClick &&
                        hoveredItemIndex !== null &&
                        chartValues.find(
                          (item) => item.originalIndex === hoveredItemIndex
                        )?.value
                      ? `${
                          chartValues.find(
                            (item) => item.originalIndex === hoveredItemIndex
                          )?.value
                        }`
                      : `${
                          Number.isInteger(total) ? total : total?.toFixed(2)
                        } ${showUnit && unit ? unit.toUpperCase() : ''}`,
                    LABEL_MAX_WIDTH,
                    labelFontSize
                  ).map((line, index) => (
                    <tspan
                      key={index}
                      x="0"
                      dy={index === 0 ? 0 : labelFontSize}
                    >
                      {selectedItemIndex !== null &&
                      chartValues.find(
                        (item) => item.originalIndex === selectedItemIndex
                      )
                        ? index === 0
                          ? chartValues.find(
                              (item) => item.originalIndex === selectedItemIndex
                            )?.value
                          : null
                        : apiDataLabel
                        ? apiDataLabel
                        : line}
                    </tspan>
                  ))}
                </text>
                <text
                  x="0"
                  y={subLabelYoffSet}
                  textAnchor="middle"
                  fill="var(--text-color)"
                  style={{ fontSize: `${subLabelFontSize}px` }}
                >
                  {wrapText(
                    legendType === 'tableLegend' &&
                      hoveredItemIndex !== null &&
                      chartValues.find(
                        (item) => item.originalIndex === hoveredItemIndex
                      )
                      ? chartValues.find(
                          (item) => item.originalIndex === hoveredItemIndex
                        )?.key || ''
                      : isOnClick &&
                        hoveredItemIndex !== null &&
                        chartValues.find(
                          (item) => item.originalIndex === hoveredItemIndex
                        )?.key
                      ? `${
                          chartValues.find(
                            (item) => item.originalIndex === hoveredItemIndex
                          )?.key
                        }`
                      : legendDetailsType,
                    LABEL_MAX_WIDTH,
                    subLabelFontSize
                  ).map((line, index) => (
                    <tspan
                      key={index}
                      x="0"
                      dy={index === 0 ? 0 : subLabelFontSize}
                      fill={
                        (selectedItemIndex !== null &&
                          chartValues.find(
                            (item) => item.originalIndex === selectedItemIndex
                          )?.color) ||
                        (hoveredItemIndex !== null &&
                          isOnClick &&
                          chartValues.find(
                            (item) => item.originalIndex === hoveredItemIndex
                          )?.color) ||
                        ''
                      }
                    >
                      {selectedItemIndex !== null &&
                      chartValues.find(
                        (item) => item.originalIndex === selectedItemIndex
                      )
                        ? index === 0
                          ? truncateChartText(
                              chartValues.find(
                                (item) =>
                                  item.originalIndex === selectedItemIndex
                              )?.key || ''
                            )
                          : null
                        : truncateChartText(line)}
                    </tspan>
                  ))}
                </text>
              </>
            )}
          </g>
        </svg>
        {showTooltip && renderTooltip()}
      </div>
      {isLegendDetails && renderLegend(chartValues, legendType, legendPosition)}
    </div>
  );
};

export default DashboardDonutChart;
