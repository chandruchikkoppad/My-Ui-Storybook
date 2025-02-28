export interface IconRadialChartProps {
  radius: number;
  lineWidth: number;
  label: string;
  percentageValue: number;
  icon?: string;
  fontSize?: number;
  labelColor?:string;
  arcColor?: string;
  backgroundArcColor?: string;
  isSelectedArch?: boolean;
  onSelect?: () => void;
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
  backgroundArcPath: string;
  foregroundArcPath: string;
};
