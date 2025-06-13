export interface StatusIndicatorProps {
  label: string;
  iconName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisable?: boolean;
  backgroundColor: boolean;
  border: boolean;
  variant: string;
}
