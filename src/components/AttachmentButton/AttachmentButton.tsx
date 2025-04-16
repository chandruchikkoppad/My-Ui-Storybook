import React, { useRef, useState } from 'react';
import Typography from '../Typography';
import Button from '../Button';
import IconButton from '../IconButton';
import Toaster from '../Toast';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { AttachmentUploaderProps } from './types';
import './AttachmentButton.scss';

const AttachmentButton: React.FC<AttachmentUploaderProps> = ({
  label,
  selectedFiles,
  onFilesChange,
  disabled = false,
  buttonDisplayType = 'attachment',
  iconName = 'plus_icon',
  maxFileSizeMB,
  maxFiles,
  buttonLabel = 'Select Files',
  showSelectedFiles = true,
  buttonVariant = 'primary',
  deleteButton = true,
  multiple = true,
  addAttachmentButton = true,
  isInfoIconRequired = true,
  onFileListClick,
  types = [],
  attachmentInfoTooltip = '',
  selectedFileMessage = 'This file is already selected',
  required = false,
  errorMessage,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileError, setFileError] = useState<string>('');

  const fileTypes: Record<string, string[]> = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
    video: ['video/mp4', 'video/mpeg', 'video/quicktime'],
    audio: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
    document: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    archive: [
      'application/zip',
      'application/x-rar-compressed',
      'application/x-7z-compressed',
    ],
    spreadsheet: [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    excel: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
  };

  const acceptTypes = types.flatMap((type) => fileTypes[type] || []).join(',');

  const getTooltipTitle = () => {
    if (types.length === 0) {
      return 'Any files are allowed.';
    }
    const acceptedFileTypes = types
      .flatMap((type) => fileTypes[type] || [])
      .map((type) => type.split('/')[1]);
    const lastType = acceptedFileTypes.pop();
    return (
      <span>
        {acceptedFileTypes.join(', ')} and {lastType} files are allowed.
        <br />
        Max size: {maxFileSizeMB} MB
      </span>
    );
  };

  const handleAttachmentClick = () => {
    setFileError('');
    fileInputRef.current?.click();
  };

  const handleFileChange = () => {
    setFileError('');
    if (fileInputRef.current?.files) {
      const files = Array.from(fileInputRef.current.files);
      if (files.length > 5) {
        setFileError('More than 5 files are not allowed.');
        fileInputRef.current.value = '';
        return;
      }
      const newFiles = files.filter(
        (file) =>
          !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
      );

      if (newFiles.length === 0) {
        setFileError(selectedFileMessage);
        fileInputRef.current.value = '';
        return;
      }
      if (
        typeof maxFiles === 'number' &&
        selectedFiles.length + newFiles.length > maxFiles
      ) {
        setFileError(`You can only select up to ${maxFiles} files.`);
        fileInputRef.current.value = '';
        return;
      }
      if (typeof maxFileSizeMB === 'number') {
        const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;
        const oversizedFiles = newFiles.filter(
          (file) => file.size > maxFileSizeBytes
        );
        if (oversizedFiles.length > 0) {
          setFileError(`Maximum file(s) size allowed: ${maxFileSizeMB} MB.`);
          fileInputRef.current.value = '';
          return;
        }
      }

      onFilesChange([...selectedFiles, ...newFiles], newFiles, 'ADD');
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    const deletedFile = updatedFiles.splice(index, 1);
    onFilesChange(updatedFiles, deletedFile, 'DELETE');
  };

  return (
    <div>
      {isInfoIconRequired && (
        <div className="ff-label-icon">
          <Typography
            fontWeight="semi-bold"
            lineHeight="18px"
            as="span"
            required={required}
          >
            {label}
          </Typography>
          <Tooltip
            title={
              attachmentInfoTooltip ? attachmentInfoTooltip : getTooltipTitle()
            }
            placement="bottom-start"
          >
            <Icon name="info" hoverEffect />
          </Tooltip>
        </div>
      )}
      {(!showSelectedFiles || selectedFiles.length === 0) &&
        (buttonDisplayType === 'attachment' ? (
          <Button
            variant={buttonVariant}
            label={buttonLabel}
            size="medium"
            onClick={handleAttachmentClick}
            disabled={disabled}
          />
        ) : buttonDisplayType === 'icon' ? (
          <IconButton
            label={buttonLabel}
            iconName={iconName}
            onClick={handleAttachmentClick}
            isDisable={disabled}
          />
        ) : null)}
      <input
        type="file"
        ref={fileInputRef}
        className="ff-input-field"
        onChange={handleFileChange}
        multiple={multiple}
        accept={acceptTypes}
        required={required}
      />
      {fileError && (
        <Toaster
          isOpen={!!fileError}
          variant="info"
          toastTitle="Error"
          toastMessage={fileError}
          zIndex={10000000}
        />
      )}
      {showSelectedFiles &&
        selectedFiles.map((file, index) => (
          <div
            key={file.name}
            className="ff-attachment-files"
            onClick={onFileListClick}
          >
            <Typography color="var(--brand-color)">{file.name}</Typography>
            {deleteButton && (
              <Tooltip title="Delete">
                <Icon
                  name="delete"
                  hoverEffect={true}
                  color="var(--ff-delete-button-attachment)"
                  variant="danger"
                  onClick={() => handleDeleteFile(index)}
                />
              </Tooltip>
            )}
            {index === selectedFiles.length - 1 && addAttachmentButton && (
              <Tooltip
                title={`${
                  typeof maxFiles === 'number' &&
                  selectedFiles.length >= maxFiles
                    ? `Maximum files can be uploaded: ${maxFiles}`
                    : 'Add File'
                }`}
              >
                <Icon
                  name="add_file"
                  hoverEffect={true}
                  onClick={handleAttachmentClick}
                  disabled={
                    typeof maxFiles === 'number'
                      ? !(selectedFiles.length < maxFiles)
                      : false
                  }
                />
              </Tooltip>
            )}
          </div>
        ))}

      {required && (
        <Typography
          children={errorMessage}
          fontSize={10}
          className="error-text"
        />
      )}
    </div>
  );
};

export default AttachmentButton;
