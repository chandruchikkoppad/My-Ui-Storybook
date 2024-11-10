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
    value: number;
    color?: string;
  };

export type LegendType = 'numberLegend' | 'pillLegend' | 'memoryLegend' | 'tableLegend'

export type DashboardDonutChartProps = {
  radius: number;
  lineWidth: number;
  statusValues: ChartItem[];
  legendDetailsType: string;
  isLegendDetails: boolean;
  gapAngle?: number;
  legendType: LegendType;
  showOnlyLabel : boolean;
};