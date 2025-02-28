export interface BarValue {
  value: number | string;
  arcColor: string;
  arcBackgroundColor: string;
  barLabel: string;
}

export type LegendType = 'numberLegend' | 'pillLegend';

export interface MultiRadialChartProps {
  radius: number;
  lineWidth: number;
  fontSize: number;
  labelHeading: string;
  lineCap: 'square' | 'round';
  barValues: BarValue[];
  legendType?: LegendType;
  isLegendDetails?: boolean;
  labelFontSize?: number,
  subLabelFontSize?: number
  gapAngle?: number;
  chartToLegendGap?: string;
  legendGap?: string;
  gapBetweenArch?: number;
  capsuleStyle?:object
}
export interface ChartItem extends BarValue {
  label: string;
  key: string;
  color?: string;
}
