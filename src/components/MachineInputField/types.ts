export interface MachineType {
  type: string;
  label: string;
  version?: string;
}

export interface MachineInputFieldProps {
  width?: string;
  options: MachineType[];
  runCount: number;
  className?: string;
  contentReverse?: boolean;
  onClick?: () => void;
  modalId?: string;
  trucatedLable?: boolean;
  scriptType?: string;
  readOnly?: boolean;
}
