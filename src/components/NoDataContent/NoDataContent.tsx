import React from 'react';
import './NoDataContent.scss';
import Icon from '../Icon';
import Typography from '../Typography';
import { NoDataFoundProps } from './type';

const NoDataContent: React.FC<NoDataFoundProps> = ({
  iconName,
  iconWidth = 120,
  iconHeight = 115,
  text,
  textFontSize = '24px',
  textDirectionRow = false,
}) => {
  return (
    <div className={`no_data_message ${textDirectionRow && 'flex-row'}`}>
      <Icon name={iconName} width={iconWidth} height={iconHeight} />
      <Typography fontSize={textFontSize} lineHeight="36px" fontWeight="bold">
        {text}
      </Typography>
    </div>
  );
};

export default NoDataContent;
