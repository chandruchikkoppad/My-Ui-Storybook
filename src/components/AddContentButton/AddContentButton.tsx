import React from 'react';
import './AddContentButton.scss';
import Icon from '../Icon';
import Typography from '../Typography';
import IconButton from '../IconButton';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { AddContentButtonProps } from './types';

const AddContentButton: React.FC<AddContentButtonProps> = ({
  iconName = '',
  onButtonClick,
  buttonLabel = 'Label',
  buttonText = 'To Add Group',
  disableButton = false,
  stepCount = 1,
  iconWidth = 120,
  iconHeight = 120,
}) => {
  return (
    <div className={`add-content-button ${disableButton ? 'disabled' : ''}`}>
      {!checkEmpty(iconName) && (
        <div className="icon-container">
          <Icon name={iconName} width={iconWidth} height={iconHeight} />
        </div>
      )}
      <div className="typography-label-button">
        <Typography fontSize="12px" fontWeight="regular" lineHeight="18px">
          step {stepCount} :
        </Typography>
        <Typography fontSize="12px" fontWeight="semi-bold" lineHeight="18px">
          Click
        </Typography>
        <IconButton
          label={buttonLabel}
          onClick={onButtonClick}
          iconName="plus_user_icon"
          isDisable={disableButton}
        />
        <Typography fontSize="12px" fontWeight="semi-bold" lineHeight="18px">
          {buttonText}
        </Typography>
      </div>
    </div>
  );
};

export default AddContentButton;
