export interface LineChartDataPoint {
  point: any;
  x: string;
  y: number;
}

export interface Line {
  show: boolean;
  color: string;
  data: LineChartDataPoint[];
}

export interface LineChartProps {
  data: any[];
  width: number;
  height: number;
  axisColor: string;
  isStatusVariant?: boolean;
  lineChartWidth?: number;
  yAxisLabel?: string;
  xAxisLabel?: string;
  yAxisValueColor?: string;
  xAxisColor?: string;
  yAxisColor?: string;
  yAxisLabelColor?: string;
  textSize?: string | number;
  fontWeight?: string | number;
  numberSize?: string | number;
  proportionalSpacing?: boolean;
  shouldCenterSinglePoint?: boolean;
  chartName?: string;
  xAxisLabelGap?: number;
}
