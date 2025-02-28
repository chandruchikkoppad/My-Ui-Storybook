export const validateFileExtension = (
  file: File | React.ChangeEvent<HTMLInputElement>,
  allowedFileTypes: Record<string, string>
) => {
  const selectedFile =
    (file as React.ChangeEvent<HTMLInputElement>).target?.files?.[0] ||
    (file as File);
  const fileExtension =
    '.' + selectedFile?.name?.split('.')?.pop()?.toLowerCase();
  const fileType = selectedFile?.type;
  if (
    ['.ipa', '.y4m', '.yml', '.md', '.pem', '.properties'].includes(
      fileExtension
    ) &&
    Object.keys(allowedFileTypes)?.includes(fileExtension)
  ) {
    return true;
  }
  return (
    allowedFileTypes[fileExtension] &&
    fileType === allowedFileTypes[fileExtension]
  );
};

export const validateZipFileExtension = (
  file: File | React.ChangeEvent<HTMLInputElement>
) => {
  const selectedFile =
    (file as React.ChangeEvent<HTMLInputElement>).target?.files?.[0] ||
    (file as File);
  // List of valid MIME types
  const validMimeTypes = ['application/zip', 'application/x-zip-compressed'];
  // Validating the file extension and MIME type
  return (
    selectedFile &&
    validMimeTypes?.includes(selectedFile?.type) &&
    selectedFile?.name?.toLowerCase()?.endsWith('.zip')
  );
};
