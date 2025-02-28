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
  maxFileSizeMB = 5, // Default to 5 MB if not provided
  maxFiles = 10, // Default to 10 files if not provided
  buttonLabel = 'Select Files',
  showSelectedFiles = true,
  buttonVariant = 'primary',
  deleteButton = true,
  multiple = true,
  addAttachmentButton = true,
  isInfoIconRequired = true,
  onFileListClick,
  types = [],
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

  const fileTypes: Record<string, string[]> = {
    image: ['image/jpeg', 'image/png', 'image/gif'],
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
      const newFiles = files.filter(
        (file) =>
          !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
      );
      if (newFiles.length === 0) {
        setFileError('This file is already selected.');
        fileInputRef.current.value = '';
        return;
      }
      if (selectedFiles.length + newFiles.length > maxFiles) {
        setFileError(`You can only select up to ${maxFiles} files.`);
        fileInputRef.current.value = '';
        return;
      }
      const oversizedFiles = newFiles.filter(
        (file) => file.size > maxFileSizeBytes
      );
      if (oversizedFiles.length > 0) {
        setFileError(`Each file must be less than ${maxFileSizeMB} MB.`);
        fileInputRef.current.value = '';
        return;
      }
      onFilesChange([...selectedFiles, ...newFiles]);
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    onFilesChange(updatedFiles);
  };

  return (
    <div>
      {isInfoIconRequired && (
        <div className="ff-label-icon">
          <Typography fontWeight="semi-bold" lineHeight="18px">
            {label}
          </Typography>
          <Tooltip title={getTooltipTitle()} placement="bottom-start">
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
            {index === selectedFiles.length - 1 &&
              selectedFiles.length < maxFiles &&
              addAttachmentButton && (
                <Tooltip title="Add Attachment">
                  <Icon
                    name="add_file"
                    hoverEffect={true}
                    onClick={handleAttachmentClick}
                  />
                </Tooltip>
              )}
          </div>
        ))}
    </div>
  );
};

export default AttachmentButton;
