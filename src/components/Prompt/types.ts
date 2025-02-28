export interface promptProp {
  width?: number;
  height?: number;
  placeholder?: string;
  iconName?: string;
  iconPosition?: string;
  borderRadius?: number;
  autoFocus?: boolean;
  iconHeight?: number;
  iconWidth?: number;
  iconColor?: string;
  tooltipTitle?: string;
  value: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  submitPrompt?:(query: string) => void;
}
