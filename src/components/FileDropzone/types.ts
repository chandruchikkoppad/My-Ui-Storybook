import { ReactNode, RefObject } from 'react';
import { DynamicObj } from '../CreateVariable/types';
export interface RadioOption {
  label: string;
  value: string;
}

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
  width?: number | string;

  height?: number | string;
  /**
   *  Returns the accepted files in the state
   **/
  getAcceptedFiles?: (files: File[]) => void;
  /**
   *  Returns the rejected files in the state
   **/
  getRejectedFiles?: (files: FileRejection[]) => void;

  /**
   *  If its used in WebService has some other functionality so need to pass boolean value.
   **/
  isWebServiceFileDropZone?: boolean;
  /**
   *  Its the selected radio option as a string.
   **/
  selectedRadioOption?: RadioOption;

  /**
   *  Its the array of radio options in pattern of : {  label: string; value: string; }.
   **/
  radioOptions?: RadioOption[];

  /**
   *  Its the function which updates the selected radio option.
   **/
  handleOptionChange?: (option: RadioOption) => void;

  /**
   *  Its the File Name of File Selected from Local File.
   **/
  setSelectedFile?: (file: File | DynamicObj | null) => void;

  /**
   *  Its the File Name of File Selected from Local File.
   **/
  selectedFile?: File | DynamicObj | null;

  /**
   *  Its the function which updates the Selected file from Local Directory.
   **/
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   *  Its the function which makes the selected File empty state.
   **/
  handleRemoveFile?: () => void;

  /**
   *  When The Api for the response fails need to show error message.
   **/
  isApiResponseError?: boolean;

  /**
   *  If isDisable is true not able to access the FileDropzone
   **/
  isDisable?: boolean;

  /**
   *  Its the boolean value setted when the replace is clicked for TestData radio option .
   **/
  setShowDrawer?: (value: boolean | ((prevState: boolean) => boolean)) => void;
  /**
   *  Its the File Name of File Selected from Local File.
   **/
  setFileContent?: (data: string) => void;
  /**
   *  Its the string value present inside the readable file.
   **/
  fileContent?: string;

  isUploadIcon?: boolean;
  onUploadFile?: () => void;

  /**
   *  Its fileInputRef using inside fileDropZone.
   **/
  fileInputRef?: RefObject<HTMLInputElement>;
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
  isApiResponseError?: boolean;
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
  height: number | string;
  isWebServiceFileDropZone?: boolean;
  selectedRadioOption?: Option;
  radioOptions?: RadioOption[];
  handleOptionChange?: (option: RadioOption) => void;
  selectedFile?: File | DynamicObj | null;
  setSelectedFile?: (file: File | DynamicObj | null) => void;
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile?: () => void;
  isDisable?: boolean;
  setShowDrawer?: (value: boolean | ((prevState: boolean) => boolean)) => void;
  setFileContent?: (data: string) => void;
  fileContent?: string;
}

export interface FilePreviewProps {
  file: File;
  error?: string;
  onRemoveClick: (file: File) => void;
  onReplaceClick: (file: File) => void;
  onUploadFile?: VoidFunction;
  isUploadIcon?: boolean;
  isRemoveDisabled?: boolean;
  isError?: boolean;
  isIndependentPreview?: boolean;
}

export interface RadioFilePreviewProps {
  selectedFile: string;
  error?: string;
  onFileRemoveClick?: () => void;
  onFileReplaceClick?: (file: File | null) => void;
  setSelectedFile?: (file: File | null) => void;
  selectedRadioOption?: Option;
  setShowDrawer?: (value: boolean | ((prevState: boolean) => boolean)) => void;
  setFileContent?: (data: string) => void;
  fileContent?: string;
}
