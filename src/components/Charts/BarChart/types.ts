export interface BarChartProps {
  barWidth: number;
  width: number;
  height: number;
  data: Array<{
    label: string;
    value: number | undefined;
    iconName: string;
    versions?: string[];
    id?: string;
    percent?: number;
  }>;
  colors?: string[];
  barGap: number;
  barRadius?: number;
  iconSize?: number;
}
