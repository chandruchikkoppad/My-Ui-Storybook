export type Status =
  | 'passed'
  | 'failed'
  | 'warning'
  | 'skipped'
  | 'Passed'
  | 'Failed'
  | 'Skipped'
  | 'Warning';

export type StatusValue = {
  status: Status;
  value: number;
};

export type ChartItem = {
  key: string;
  value: string | number;
  color?: string;
  percentage?: string | number;
  version?: number[] | string[];
  versionColor?: string[];
  osIcon?: string;
};

export type NormalizedChartItem = {
  key: string;
  value: number | string;
  color?: string;
  normalizedValue?: number;
  unit?: string;
  labelValue?: number | string;
  percentage?: string | number;
  version?: number[] | string[];
  versionColor?: string[];
  osIcon?: string;
};

export type LegendType =
  | 'numberLegend'
  | 'pillLegend'
  | 'memoryLegend'
  | 'tableLegend';

export type DashboardDonutChartProps = {
  radius: number;
  lineWidth: number;
  statusValues: ChartItem[];
  legendDetailsType: string;
  isLegendDetails: boolean;
  gapAngle?: number;
  legendType: LegendType;
  apiDataLabel?: string | number;
  showOnlyLabel?: boolean;
  unit?: string;
  showUnit?: boolean;
  labelFontSize?: number;
  subLabelFontSize?: number;
  legendPosition?: 'bottom' | 'right' | 'left';
  chartGap?: number;
  legendGap?: number;
  tableWidth?: number;
  tableHeight?: number;
  legendValueFontSize?: number;
  legendKeyFontSize?: number;
  legendWithVersionFontSize?: number;
  versionErrorText?: string;
  labelYoffSet?: number;
  subLabelYoffSet?: number;
  capsuleStyle?: {};
  legendTruncate?: number;
  isLegendToolTip?: boolean;
  containerHeight?: number | string;
  onSelectedStatus?: (_value: string) => void;
  selectedStatusKey?: string;
  setSelectedStatusKey?: (_selectedStatusKey: string) => void;
  isOnClick?: boolean;
  zIndex?: number;
};
