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
  disableInput? : boolean
  isAdditionalIcon?: boolean;
  additionalIconName?: string;
  onAdditionalIconClick?: () => void;
  additionIconToolTip? : string

  onPromptChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  submitPrompt?: (query: string) => void;
}
