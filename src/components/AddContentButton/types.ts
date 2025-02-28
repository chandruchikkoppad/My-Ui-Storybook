export interface AddContentButtonProps {
  iconName?: string;
  onButtonClick?: () => {} | void;
  buttonLabel: string;
  buttonText: string;
  disableButton?: boolean;
  stepCount: string | number;
  iconWidth?: number;
  iconHeight?: number;
}
