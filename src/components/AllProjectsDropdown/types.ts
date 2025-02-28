export interface optionsType {
  label: string;
  value: string;
  iconName: string;
  platform?: string;
  appType?: string;
}
export interface AllProjectsDropdownProps {
  options: optionsType[];
  onMenuClick?: () => void;
  onClick: (option: optionsType) => void;
  selectedOption: optionsType;
  selected?: boolean;
  placeholder?: string;
  disabled?:boolean;
}
