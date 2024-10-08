export interface IconProps {
  name: string;
  className?: string;
  height?: number;
  width?: number;
  color?: string;
  onClick?: (data?: any) => void;
  hoverEffect?: boolean;
  disabled?: boolean;
}
