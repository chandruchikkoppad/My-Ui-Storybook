import React from 'react';
import { formatDate } from './formatDate';

export default {
  title: 'Utils/formatDate',
  component: formatDate,
};

export const Default = () => {
  const date = new Date(2025, 0, 5);
  const formattedDate = formatDate(date);

  return (
    <div>
      <h3>Test formatDate Utility</h3>
      <pre>Original Date :{JSON.stringify(date, null, 2)}</pre>
      <pre>Formatted Date (DD/MM/YYYY): {formattedDate}</pre>
    </div>
  );
};
