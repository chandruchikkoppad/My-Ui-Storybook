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

export type DonutChartProps = {
  radius: number;
  lineWidth: number;
  statusValues: StatusValue[];
  legendDetailsType: string;
  isLegendDetails: boolean;
  gapAngle?: number;
};
