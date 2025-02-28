import React from 'react';
import { convertFormDataToObject } from './ConvertFormDataToObject';

export default {
  title: 'Utils/convertFormDataToObject',
  component: convertFormDataToObject,
};

export const Default = () => {
  const formData = new FormData();
  formData.append('username', 'Md Imran');
  formData.append('email', 'im@xyz.com');
  formData.append('age', '23');

  const result = convertFormDataToObject(formData);

  return (
    <div>
      <h3>Test convertFormDataToObject</h3>
      <pre>
        Convertion to an Array to show existing FormData:
        {JSON.stringify(Array.from(formData.entries()), null, 2)}
      </pre>
      <pre>Result: {JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};
