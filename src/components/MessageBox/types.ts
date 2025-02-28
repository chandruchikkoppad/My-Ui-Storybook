export interface MessageBoxProps {
  content?: React.ReactNode;
  isVisible: boolean;
  maxWidth?: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  isClickable: boolean;
  arrowPosition: 'left' | 'right';
}
