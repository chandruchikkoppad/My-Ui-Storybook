import React from 'react';
import Icon from '../Icon';
import './IconButton.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = ({
  label,
  iconName = 'plus_icon',
  onClick,
}) => {
  return (
    <button onClick={onClick} className={classNames('ff-plus-icon')}>
      <Icon
        height={20}
        width={20}
        name={iconName}
        className={'ff-icon-color'}
      />
      <Typography as="div" textAlign="center" className="icon-name">
        {label}
      </Typography>
    </button>
  );
};

export default IconButton;
