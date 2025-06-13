import React from 'react';
import Tooltip from '../Tooltip';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';

interface TruncatedTooltipProps {
  title: string;
  width: number;
}

const TruncatedTooltip: React.FC<TruncatedTooltipProps> = ({
  title,
  width,
}) => {
  const isTruncated = isTextTruncated(title, width, 'pixel');
  return (
    <Tooltip title={isTruncated ? title : ''}>
      {truncateText(title, width, 'pixel')}
    </Tooltip>
  );
};
export default TruncatedTooltip;
