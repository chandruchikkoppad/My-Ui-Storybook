export interface AttachmentUploaderProps {
  label: string;
  selectedFiles: File[];
  onFilesChange: (
    files: File[],
    selectedFile?: File[],
    changeType?: 'ADD' | 'DELETE'
  ) => void;
  disabled?: boolean;
  maxFileSizeMB?: number;
  maxFiles?: number;
  buttonLabel?: string;
  showSelectedFiles?: boolean;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary' | 'delete' | 'warning';
  deleteButton: boolean;
  addAttachmentButton: boolean;
  accept?: string[];
  onFileListClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  types?: string[];
  iconName?: string;
  buttonDisplayType?: 'attachment' | 'icon';
  isInfoIconRequired?: boolean;
  multiple?: boolean;
  attachmentInfoTooltip?: string;
  selectedFileMessage?: string;
  required?: boolean;
  errorMessage?: string;
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  truncateMaxLimit?: number;
}
