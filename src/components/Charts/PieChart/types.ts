export type Status = {
  status: 'Passed';
  value: number;
};

export interface PieChartProps {
  radius: number;
  data: Array<{ label: string; value: number }>; 
  colors: string[]; 
  chartBorder: boolean;
}

export type ArcParams = {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
};

export type ArcResult = string;

export type ArcAnglesResult = {
  endAngle: number;
  backgroundArcPath: string;
  foregroundArcPath: string;
  percentage: number;
};
