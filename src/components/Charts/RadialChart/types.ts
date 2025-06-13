export type Status = {
  status:
    | 'Passed'
    | 'Failed'
    | 'Warning'
    | 'Skipped'
    | 'passed'
    | 'failed'
    | 'warning'
    | 'skipped';
  value: number;
};
//main component type
export interface RadialChartProps {
  radius: number;
  lineWidth: number;
  statusValues: Status[];
  onClick?: (status: Status) => void;
  fontSize: number;
  gap?: number;
}

//type for the calculateArc function
export type ArcParams = {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
};

// type for the calculateArc function
export type ArcResult = string;

// type for the calculateArcAngles function
export type ArcAnglesResult = {
  endAngle: number;
  backgroundArcPath: string;
  foregroundArcPath: string;
  percentage: number;
};
