export interface IconButtonProps {
  label: string;
  iconName: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
