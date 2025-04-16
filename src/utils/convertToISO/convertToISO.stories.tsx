import React from 'react';
import { convertToISO } from './convertToISO';

export default {
  title: 'Utils/convertToISO',
  component: convertToISO,
};

export const WithValidDateTime = () => {
  const input = '25-12-2023 14:30';
  const result = convertToISO(input);
  return (
    <div>
      <strong>Input:</strong> {input} <br />
      <strong>Output:</strong> {result.toISOString()}
    </div>
  );
};

export const WithISOFormat = () => {
  const input = '2023-12-25T14:30:00Z';
  const result = convertToISO(input);
  return (
    <div>
      <strong>Input:</strong> {input} <br />
      <strong>Output:</strong> {result.toISOString()}
    </div>
  );
};

export const WithInvalidFormat = () => {
  try {
    const input = 'Invalid Date String';
    const result = convertToISO(input);
    return (
      <div>
        <strong>Input:</strong> {input} <br />
        <strong>Output:</strong> {result.toISOString()}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <strong>Input:</strong> Invalid Date String <br />
        <strong>Error:</strong> {(error as Error).message}
      </div>
    );
  }
};
