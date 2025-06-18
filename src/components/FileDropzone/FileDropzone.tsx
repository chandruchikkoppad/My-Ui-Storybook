import useFileDropzone from '../../hooks/useFileDropzone';
import { FileDropzoneProps } from './types';
import './FileDropzone.scss';
import Icon from '../Icon';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { useEffect, useMemo } from 'react';
import Dropzone from './Dropzone';
import FilePreview from './FilePreview';
import classNames from 'classnames';
import Typography from '../Typography';

const FileDropzone: React.FC<FileDropzoneProps> = ({
  icon = (
    <Icon name="dropzone_icon" height={80} width={80} hoverEffect={false} />
  ),
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
  width = 640,
  height = 188,
  getAcceptedFiles = () => {},
  getRejectedFiles = () => {},
  isWebServiceFileDropZone = false,
  selectedRadioOption,
  radioOptions,
  handleOptionChange,
  selectedFile,
  setSelectedFile,
  handleFileChange,
  handleRemoveFile,
  isApiResponseError = false,
  isDisable = false,
  setShowDrawer,
  setFileContent,
  fileContent = '',
  isUploadIcon = false,
  onUploadFile,
  fileInputRef,
  showNoFilesUploadedMessage = false,
  noFileUploadedText = 'No files are uploaded',
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
    isApiResponseError,

    // onDrop: (accepted, rejected, event) => {}, //onDrop function to handle dropped or selected files explicitly.
  });
  useEffect(() => {
    selectedFile ? acceptedFiles : (acceptedFiles.length = 0);
  }, [selectedFile]);

  getAcceptedFiles(acceptedFiles);
  getRejectedFiles(rejectedFiles);
  const acceptedFilesList = useMemo(
    () =>
      acceptedFiles.map((file) => (
        <FilePreview
          key={file.name}
          file={file}
          onRemoveClick={handleRemoveClick}
          onReplaceClick={handleReplaceClick}
          onUploadFile={onUploadFile}
          isUploadIcon={isUploadIcon}
          error={invalidFileMessage}
          isError={isApiResponseError}
        />
      )),
    [
      acceptedFiles,
      handleRemoveClick,
      handleReplaceClick,
      isUploadIcon,
      onUploadFile,
    ]
  );

  useEffect(() => {
    if (selectedRadioOption?.value === 'Local File' && fileInputRef?.current) {
      fileInputRef.current.click();
    }
  }, [selectedRadioOption]);

  useEffect(() => {
    if (!checkEmpty(acceptedFiles) && setSelectedFile) {
      setSelectedFile(acceptedFiles[0] || null);
    }
  }, [acceptedFiles, setSelectedFile]);
  const rejectedFilesList = useMemo(
    () =>
      rejectedFiles.map((rejectedFile) => (
        <FilePreview
          key={rejectedFile.file.name}
          file={rejectedFile.file}
          error={rejectedFile.errors[0]?.message}
          onRemoveClick={handleRemoveClick}
          onReplaceClick={handleReplaceClick}
          onUploadFile={onUploadFile}
          isUploadIcon={isUploadIcon}
        />
      )),
    [
      rejectedFiles,
      handleRemoveClick,
      handleReplaceClick,
      isUploadIcon,
      onUploadFile,
    ]
  );

  return (
    <div
      className={classNames('ff-file-dropzone-wrapper')}
      style={{ width: `${width}px` }}
    >
      <Dropzone
        icon={icon}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        buttonLabel={buttonLabel}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        height={`${height}px`}
        isWebServiceFileDropZone={isWebServiceFileDropZone}
        selectedRadioOption={selectedRadioOption}
        radioOptions={
          radioOptions ?? [{ label: 'Default Label', value: 'default_value' }]
        }
        handleOptionChange={handleOptionChange}
        selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        handleRemoveFile={handleRemoveFile}
        setSelectedFile={setSelectedFile}
        isDisable={isDisable}
        setShowDrawer={setShowDrawer}
        setFileContent={setFileContent}
        fileContent={fileContent}
      />

      {isWebServiceFileDropZone && (
        <input
          ref={fileInputRef}
          type="file"
          className="ff-input-ref"
          onChange={handleFileChange}
          accept={accept.join(',')}
        />
      )}

      {isWebServiceFileDropZone ? null : (
        <div
          className={'ff-file-details-wrapper'}
          style={{ width: `${width}px` }}
        >
          {showNoFilesUploadedMessage && checkEmpty(acceptedFiles) && (
            <Typography
              fontWeight="semi-bold"
              lineHeight="18px"
              textAlign="center"
              color={'var(--text-color)'}
              className="ff-no-apps-message"
            >
              {noFileUploadedText}
            </Typography>
          )}
          {!checkEmpty(acceptedFiles) && (
            <div className="ff-file-details">{acceptedFilesList}</div>
          )}

          {!checkEmpty(rejectedFiles) && (
            <div className="ff-file-details">{rejectedFilesList}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileDropzone;
