export type Status =
  | 'passed'
  | 'failed'
  | 'warning'
  | 'skipped'
  | 'Passed'
  | 'Failed'
  | 'Skipped'
  | 'Warning';

export type resultStats = {
  status: Status;
  percentage: number;
  count: number;
};

export type DonutChartProps = {
  radius: number;
  lineWidth: number;
  resultStats: resultStats[];
  legendDetailsType: string;
  isLegendDetails: boolean;
  gapAngle?: number;
  totalCount: number;
};
