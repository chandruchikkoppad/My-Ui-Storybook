import { useState, useCallback } from 'react';
import { getExtensionWithPeriod } from '../utils/getExtension/getExtension';
import {
  DropzoneOptions,
  DropzoneState,
  FileError,
  FileRejection,
  FileState,
} from '../components/FileDropzone/types';
import { checkEmpty } from '../utils/checkEmpty/checkEmpty';

const useFileDropzone = (options: DropzoneOptions): DropzoneState => {
  const {
    accept,
    multiple,
    maxSize,
    maxFiles,
    onMaxFilesError,
    onDrop,
    maxSizeErrorMessage,
    invalidFileMessage,
    fileExistMessage,
    validateMIMEType = false,
    isApiResponseError,
  } = options;

  const [files, setFiles] = useState<FileState>({ accepted: [], rejected: [] });
  const [isDragActive, setIsDragActive] = useState(false);

  const validateFileMIMEType = (
    file: File,
    extensionWithPeriod: string
  ): boolean => {
    if (accept.includes(file.type)) return true;

    // these special types doesn't have MIME type, user can pass . extension and get it validated based on file name extension
    const specialTypes = ['.ipa', '.yml', '.md', '.pem', '.properties'];
    return (
      specialTypes.includes(extensionWithPeriod) &&
      accept.includes(extensionWithPeriod)
    );
  };

  const validateFile = useCallback(
    (file: File): FileError[] => {
      const errors: FileError[] = [];

      if (maxSize && file.size > maxSize) {
        errors.push({
          message: maxSizeErrorMessage
            ? maxSizeErrorMessage
            : 'File size exceeds the limit',
          code: 'file-size-exceeded',
        });
      }

      const extensionWithPeriod = getExtensionWithPeriod(file).toLowerCase();

      if (validateMIMEType) {
        if (!validateFileMIMEType(file, extensionWithPeriod) || isApiResponseError ) {
          errors.push({
            message: invalidFileMessage
              ? invalidFileMessage
              : 'Unsupported File Format',
            code: 'file-invalid-type',
          });
        }
      } else if ((accept && !accept.includes(extensionWithPeriod)) || isApiResponseError) {
        errors.push({
          message: invalidFileMessage
            ? invalidFileMessage
            : 'Unsupported File Format',
          code: 'file-invalid-type',
        });
      }

      const fileExists = files.accepted.some(
        (existingFile) =>
          existingFile.name === file.name &&
          getExtensionWithPeriod(existingFile) === getExtensionWithPeriod(file)
      );

      if (fileExists) {
        errors.push({
          message: fileExistMessage ? fileExistMessage : 'File already exists.',
          code: 'file-exists',
        });
      }

      return errors;
    },
    [
      accept,
      maxSize,
      files,
      maxSizeErrorMessage,
      invalidFileMessage,
      fileExistMessage,
    ]
  );

  const replaceFile = useCallback(
    (fileToReplace: File, newFile: File) => {
      if (
        fileToReplace.name === newFile.name &&
        fileToReplace.size === newFile.size
      ) {
        return;
      }
      const errors = validateFile(newFile);

      setFiles((prevFiles) => {
        const updatedAccepted = prevFiles.accepted.filter(
          (file) => file.name !== fileToReplace.name
        );
        const updatedRejected = prevFiles.rejected.filter(
          (rejection) => rejection.file.name !== fileToReplace.name
        );

        return {
          accepted: !checkEmpty(errors)
            ? updatedAccepted
            : [...updatedAccepted, newFile],
          rejected: !checkEmpty(errors)
            ? [...updatedRejected, { file: newFile, errors }]
            : updatedRejected,
        };
      });
    },
    [validateFile]
  );

  const handleReplaceClick = useCallback(
    (fileToReplace: File) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = accept.join(',');
      input.onchange = (event: Event) => {
        const newFile = (event.target as HTMLInputElement)?.files?.[0];
        if (newFile) {
          replaceFile(fileToReplace, newFile);
        }
      };
      input.click();
    },
    [accept, replaceFile]
  );

  const removeFile = useCallback((fileToRemove: File) => {
    setFiles((prevFiles) => ({
      accepted: prevFiles.accepted.filter((file) => file !== fileToRemove),
      rejected: prevFiles.rejected.filter(
        (rejection) => rejection.file !== fileToRemove
      ),
    }));
  }, []);

  const handleRemoveClick = useCallback(
    (file: File) => {
      removeFile(file);
    },
    [removeFile]
  );

  const handleDrop = useCallback(
    (
      event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragActive(false);

      const droppedFiles =
        'dataTransfer' in event
          ? event.dataTransfer?.files
          : event.target?.files;
      if (!droppedFiles) return;

      const droppedOrSelectedFiles = Array.from(droppedFiles);

      if (maxFiles && droppedOrSelectedFiles.length > maxFiles) {
        if (onMaxFilesError) onMaxFilesError();
        return;
      }

      const accepted: File[] = [];
      const rejected: FileRejection[] = [];

      for (const file of droppedOrSelectedFiles) {
        if (maxFiles && files.accepted.length + accepted.length >= maxFiles) {
          if (onMaxFilesError) onMaxFilesError();
          break;
        }

        const errors = validateFile(file);
        if (!checkEmpty(errors)) {
          rejected.push({ file, errors });
        } else {
          accepted.push(file);
        }
      }

      setFiles((prevFiles) => ({
        accepted: [
          ...prevFiles.accepted,
          ...accepted.filter(
            (newFile) =>
              !prevFiles.accepted.some(
                (file) =>
                  file.name === newFile.name &&
                  getExtensionWithPeriod(file) ===
                    getExtensionWithPeriod(newFile)
              )
          ),
        ],
        rejected: [
          ...prevFiles.rejected,
          ...rejected.filter(
            (newFile) =>
              !prevFiles.rejected.some(
                (file) =>
                  file.file.name === newFile.file.name &&
                  getExtensionWithPeriod(file.file) ===
                    getExtensionWithPeriod(newFile.file)
              )
          ),
        ],
      }));

      if ('dataTransfer' in event) {
        event.dataTransfer?.clearData();
      } else {
        (event.target as HTMLInputElement).value = '';
      }

      if (onDrop) onDrop(accepted, rejected, event);
    },
    [maxFiles, validateFile, onMaxFilesError, onDrop, files.accepted]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragActive(false);
  }, []);

  const getRootProps = useCallback(
    (): React.HTMLAttributes<HTMLElement> => ({
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    }),
    [handleDragOver, handleDragLeave, handleDrop]
  );

  const getInputProps = useCallback(
    (): React.InputHTMLAttributes<HTMLInputElement> => ({
      type: 'file',
      onChange: handleDrop,
      multiple,
      accept: accept ? accept.join(',') : '',
    }),
    [handleDrop, multiple, accept]
  );

  return {
    getRootProps,
    getInputProps,
    acceptedFiles: files.accepted,
    rejectedFiles: files.rejected,
    isDragActive,
    handleRemoveClick,
    handleReplaceClick,
  };
};

export default useFileDropzone;
