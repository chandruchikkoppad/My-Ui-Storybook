import React from 'react';
import { truncateText } from '../../../utils/truncateText/truncateText';

export const formatCellData = (
  content: React.ReactNode,
  maxLength: number
): React.ReactNode => {
  if (typeof content === 'string') {
    return truncateText(content, maxLength);
  }

  if (React.isValidElement(content)) {
    return React.cloneElement(
      content,
      {},
      formatCellData(content.props.children, maxLength)
    );
  }

  if (Array.isArray(content)) {
    return content.map((child) => formatCellData(child, maxLength));
  }

  return content;
};
