import React, { useEffect, useState } from 'react';
import { CardProps } from './types';
import Typography from '../Typography';
import Icon from '../Icon';
import './StatusCard.scss';

const StatusCard: React.FC<CardProps> = ({
  icon,
  status,
  count,
  text,
  style = { width: '196.4px' },
  resetToggle,
  onSelectedStatus = (_status) => {},
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const hideStatusText = [
    'total defects',
    'defect density',
    'open defects',
    'closed defects',
    'quality score',
  ];

  const swapCountAndText = hideStatusText.includes(status.toLowerCase());

  const redBackground = hideStatusText.includes(status.toLowerCase());

  const handleSelectStatus = (status: string) => {
    if (hideStatusText.includes(status.toLowerCase())) {
      return;
    }
    setIsToggled(true);
    onSelectedStatus(status);
  };

  useEffect(() => {
    setIsToggled(!resetToggle);
  }, [resetToggle]);

  const handleStaticCard = () => {
    if (status.toLowerCase() === 'defect density') {
      return (
        <>
          {count.toString().padStart(2, '0')}
          <Typography fontSize="15px" fontWeight="semi-bold">
            / Modules
          </Typography>
        </>
      );
    } else if (status.toLowerCase() === 'quality score') {
      return `${parseFloat(count.toString()).toFixed(2)}%`;
    } else {
      return count.toString().padStart(2, '0');
    }
  };

  return (
    <div
      className={`ff-card-container ${status.toLowerCase()} ${
        isToggled ? 'toggled' : ''
      }`}
      style={style}
      onClick={() => handleSelectStatus(status)}
    >
      <div className="ff-status-bar">
        <div>
          <Icon name={icon} height={20} width={20} hoverEffect={false} />
        </div>
        {!hideStatusText.includes(status.toLowerCase()) && (
          <Typography
            fontWeight="semi-bold"
            fontSize="10px"
            textAlign="center"
            lineHeight="15px"
            className="ff-status-text"
            as="div"
          >
            {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
          </Typography>
        )}
      </div>
      <div className={`ff-content ${redBackground ? 'red-background' : ''}`}>
        {swapCountAndText ? (
          <>
            <Typography
              fontWeight="semi-bold"
              fontSize="10px"
              className="ff-text"
              lineHeight="15px"
              color='var(--ff-chip-text-color)'
            >
              {text}
            </Typography>
            <Typography
              fontWeight="semi-bold"
              fontSize="24px"
              className="ff-number"
              lineHeight="36px"
            >
              {handleStaticCard()}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              fontWeight="semi-bold"
              fontSize="24px"
              className="ff-number"
              lineHeight="24px"
              color={isToggled ? 'var(--base-bg-color)' : ''}
            >
              {count.toString().padStart(2, '0')}
            </Typography>
            <Typography
              className="ff-text"
              lineHeight="18px"
              color={
                isToggled ? 'var(--base-bg-color)' : 'var(--ff-chip-text-color)'
              }
            >
              {text}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
