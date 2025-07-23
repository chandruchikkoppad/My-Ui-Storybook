import './Contentcard.scss';
import Typography from '../Typography';
import { type ContentCardProps } from './types';
import { type FC } from 'react';

const ContentCard: FC<ContentCardProps> = ({
  contentHeader,
  data,
  maxHeight = '',
}) => {
  const normalizeMaxHeightClass = (height: string) => {
    const num = parseInt(height);
    if (isNaN(num)) return 'default';
    const rounded = Math.round(num / 100) * 100;
    return Math.min(Math.max(100, rounded), 1000);
  };

  const heightClass = `scrollable-${normalizeMaxHeightClass(maxHeight)}`;

  return (
    <div className="ff-content-card-container">
      <div className="ff-content-card-nav">
        <Typography as="div" fontWeight={'semi-bold'} lineHeight="35px">
          {contentHeader}
        </Typography>
      </div>
      <div className={`ff-content-card-body scrollable ${heightClass}`}>
        {Object.entries(data).map(([label, value], index) => (
          <div className="ff-content-card-row" key={index + label}>
            <Typography fontWeight="semi-bold">{label}:</Typography>
            <Typography className="ff-content-card-value">{value}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
