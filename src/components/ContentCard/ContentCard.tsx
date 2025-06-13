import './Contentcard.scss';
import Typography from '../Typography';
import { type ContentCardProps } from './types';
import { type FC } from 'react';

const ContentCard: FC<ContentCardProps> = ({ contentHeader, data }) => {
  return (
    <div className="ff-content-card-container">
      <div className="ff-content-card-nav">
        <Typography as="div" fontWeight={'semi-bold'} lineHeight="35px">
          {contentHeader}
        </Typography>
      </div>
      <div className="ff-content-card-body">
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
