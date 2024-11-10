import useFileDropzone from '../../hooks/useFileDropzone';
import { FileDropzoneProps } from './types';
import './FileDropzone.scss';
import Icon from '../Icon';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { useMemo } from 'react';
import Dropzone from './Dropzone';
import FilePreview from './FilePreview';

const FileDropzone: React.FC<FileDropzoneProps> = ({
  icon = <Icon name="dropzone_icon" height={80} width={80} />,
  primaryLabel = 'Drag & drop your file to upload',
  secondaryLabel = 'Or',
  buttonLabel = 'Choose File to upload',
  accept = [],
  multiple = false,
  maxFiles,
  maxSize,
  onMaxFilesError,
  maxSizeErrorMessage = '',
  invalidFileMessage = '',
  fileExistMessage = '',
  validateMIMEType = false,
}) => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    rejectedFiles,
    isDragActive,
    handleRemoveClick,
    handleReplaceClick,
  } = useFileDropzone({
    accept,
    multiple,
    maxFiles,
    maxSize,
    onMaxFilesError,
    maxSizeErrorMessage,
    invalidFileMessage,
    fileExistMessage,
    validateMIMEType,
    // onDrop: (accepted, rejected, event) => {}, //onDrop function to handle dropped or selected files explicitly.
  });

  const acceptedFilesList = useMemo(
    () =>
      acceptedFiles.map((file) => (
        <FilePreview
          key={file.name}
          file={file}
          onRemoveClick={handleRemoveClick}
          onReplaceClick={handleReplaceClick}
        />
      )),
    [acceptedFiles, handleRemoveClick, handleReplaceClick]
  );

  const rejectedFilesList = useMemo(
    () =>
      rejectedFiles.map((rejectedFile) => (
        <FilePreview
          key={rejectedFile.file.name}
          file={rejectedFile.file}
          error={rejectedFile.errors[0]?.message}
          onRemoveClick={handleRemoveClick}
          onReplaceClick={handleReplaceClick}
        />
      )),
    [rejectedFiles, handleRemoveClick, handleReplaceClick]
  );

  return (
    <div className="ff-file-dropzone-wrapper">
      <Dropzone
        icon={icon}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        buttonLabel={buttonLabel}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
      />

      <div className={'ff-file-details-wrapper'}>
        {!checkEmpty(acceptedFiles) && (
          <div className="ff-file-details">{acceptedFilesList}</div>
        )}

        {!checkEmpty(rejectedFiles) && (
          <div className="ff-file-details">{rejectedFilesList}</div>
        )}
      </div>
    </div>
  );
};

export default FileDropzone;
