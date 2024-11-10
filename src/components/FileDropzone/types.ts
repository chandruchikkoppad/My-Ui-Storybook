import { ReactNode } from 'react';

export interface FileDropzoneProps {
  /**
   *  Icon to be displayed in the dropzone.
   **/
  icon?: ReactNode;
  /**
   *  Primary label to be shown in dropzone area
   **/
  primaryLabel?: string;
  /**
   *  Secondary label to be shown
   **/
  secondaryLabel?: string;
  /**
   *  Label to be shown in choose file/input button.
   **/
  buttonLabel?: string;
  /**
   *  . extension needs to be passed to allow the type of file to add or MIME type to be validate MIME type
   **/
  accept: string[];
  /**
   *  To allow multiple selection or drop of files.
   **/
  multiple?: boolean;
  /**
   *  Maximum files to be dropped or selected at once.
   **/
  maxFiles?: number;
  /**
   *  Maximum size of the file in numbers.
   **/
  maxSize?: number;
  /**
   *  Function with state to get the boolean value when the maxFiles is less than dropped files.
   **/
  onMaxFilesError?: () => void;
  /**
   *  To show error message if file size exceeds the max size
   **/
  maxSizeErrorMessage?: string;
  /**
   *  To show error message if file is not of accepted file type
   **/
  invalidFileMessage?: string;
  /**
   *  To show error message if file already exist with same name and type
   **/
  fileExistMessage?: string;
  /**
   *  To validate file type based on MIME type but mandatorily need to pass MIME type in accept props
   **/
  validateMIMEType?: boolean;
}
export interface FileState {
  accepted: File[];
  rejected: FileRejection[];
}
export interface FileError {
  message: string;
  code: string;
}

export interface FileRejection {
  file: File;
  errors: FileError[];
}

export interface DropzoneOptions {
  accept: string[];
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number | undefined;
  onDrop?: (
    acceptedFiles: File[],
    rejectedFiles: FileRejection[],
    event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>
  ) => void;
  onMaxFilesError?: () => void;
  maxSizeErrorMessage?: string;
  invalidFileMessage?: string;
  fileExistMessage?: string;
  validateMIMEType?: boolean;
}

export interface DropzoneState {
  getRootProps: () => React.HTMLAttributes<HTMLElement>;
  getInputProps: () => React.InputHTMLAttributes<HTMLInputElement>;
  acceptedFiles: File[];
  rejectedFiles: FileRejection[];
  isDragActive: boolean;
  handleRemoveClick: (file: File) => void;
  handleReplaceClick: (file: File) => void;
}

export interface DroppableProps {
  icon: React.ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  buttonLabel: string;
  getRootProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
}

export interface FilePreviewProps {
  file: File;
  error?: string;
  onRemoveClick: (file: File) => void;
  onReplaceClick: (file: File) => void;
}
