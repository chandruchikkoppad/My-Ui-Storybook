import React, { useState } from 'react';
import {
  validateFileExtension,
  validateZipFileExtension,
} from './validateFile';

export default {
  title: 'Utils/validateFile',
};

const allowedFileTypes = {
  '.txt': 'text/plain',
  '.zip': 'application/zip',
  '.jpg': 'image/jpeg',
};

export const ValidateFileExtension = () => {
  const [result, setResult] = useState<string | boolean>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validateFileExtension(event, allowedFileTypes);
    setResult(isValid ? 'Valid file type' : 'Invalid file type');
  };

  return (
    <div>
      <h3>Validate File Extension</h3>
      <input type="file" onChange={handleFileChange} />
      <p>Result: {result.toString()}</p>
    </div>
  );
};

export const ValidateZipFileExtension = () => {
  const [result, setResult] = useState<string | boolean>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validateZipFileExtension(event);
    setResult(isValid ? 'Valid ZIP file' : 'Invalid ZIP file');
  };

  return (
    <div>
      <h3>Validate ZIP File Extension</h3>
      <input type="file" onChange={handleFileChange} />
      <p>Result: {result.toString()}</p>
    </div>
  );
};
