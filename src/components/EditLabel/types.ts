export interface EditLabelProps {
  onConfirm?: (_text: string, _selectedOption?: Option) => void;
  onCancel?: () => void;
  onClick?: () => void;
  handleCustomError?: (inputText: string) => string;
  value?: string;
  label?: string;
  optionsList?: Option[];
  selectedOption?: Option;
  withDropdown?: boolean;
  inputFieldWidth?: number;
  selectFieldWidth?: number;
  textColor?: string;
  required?: boolean;
  isDisable?: DisabledOptions;
  tooltip?: {
    tooltipTitle?: string;
    tooltipPlacement?:
      | 'bottom'
      | 'top'
      | 'left'
      | 'right'
      | 'top-start'
      | 'top-end'
      | 'bottom-start'
      | 'bottom-end';
  };
  highlightText?: string;
  id?: string;
  isEditable?: boolean;
  setIsEditable?: (id: string | null) => void;
  cursor?: string;
  isOnBlurTrue?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTriggerDoubleClick?: () => void;
  truncatedTextCount?: number;
  confirmIconTooltip?: string;
  cancelIconTooltip?: string;
  inlineValidationError?: boolean;
}

type OptionValue = any;

type DisabledOptions = {
  confirm?: boolean;
  cancel?: boolean;
  textField?: boolean;
};

export interface Option {
  [key: string]: OptionValue;
}
