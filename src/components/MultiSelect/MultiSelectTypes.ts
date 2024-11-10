interface Option {
  label?: string;
  value?: string;
  accessor?: string;
  isChecked?: boolean;
}
interface MultiSelectProps {
  options: Option[];
  type? : 'email' | 'text';
  label: string;
  selectedOptions?: Option[];
  disabled?: boolean;
  onSearch?: (searchedKeyword: string, resultsLength: number) => void;
  onChange?: (selectedOptions: Option[]) => void;
  acceptNewOption?: boolean;
  zIndex?: number;
  required?: boolean;
  errorMessage?: string;
  withSelectButton?: boolean;
  onSelect?: () => void;
  displayCount?:boolean;
}

export { Option, MultiSelectProps };
