import { forwardRef } from 'react';
import Icon from '../Icon';
import './IconButton.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import { IconButtonProps } from './types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      label,
      iconName = 'plus_user_icon',
      onClick,
      iconHide = false,
      isDisable = false,
    },
    ref
  ) => {
    return (
      <button
        disabled={isDisable}
        onClick={onClick}
        className={classNames('ff-plus-icon', {
          'ff-plus-no-icon': iconHide,
          'ff-plus-disabled': isDisable,
        })}
        ref={ref}
      >
        {!iconHide && (
          <div className="button-icon">
            <Icon
              height={12}
              width={12}
              name={iconName}
              className="ff-icon-color"
              disabled={isDisable}
            />
          </div>
        )}
        <Typography
          as="div"
          textAlign="center"
          className="icon-name"
          fontWeight="semi-bold"
          lineHeight="20px"
        >
          {label}
        </Typography>
      </button>
    );
  }
);

export default IconButton;
