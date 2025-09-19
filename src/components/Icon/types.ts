export interface IconProps {
  name: string;
  className?: string;
  height?: number;
  width?: number;
  color?: string;
  onClick?: (data?: any) => void;
  hoverEffect?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  variant?: 'dark' | 'light' | 'danger';
  x?: string;
  y?: string;
  chartIcon?: boolean;
  tabIndex?: number;
  toolTipTitle?: string
  cursorType?: string;
}
