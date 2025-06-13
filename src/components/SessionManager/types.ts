export interface SessionManagerProps {
  isRotate?: boolean;
  modal?: string[];
  onClick?: (index: number) => void;
  tooltip?: Record<string, string>;
  icons?: string[];
  className?: string;
}
