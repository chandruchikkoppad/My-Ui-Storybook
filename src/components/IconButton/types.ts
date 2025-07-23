export interface IconButtonProps {
  label: string;
  iconName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ref?: React.Ref<HTMLButtonElement>;
  iconHide?: boolean;
  isDisable?: boolean;
  variant?: 'default' | 'primary';
}
