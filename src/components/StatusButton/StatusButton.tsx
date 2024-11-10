import classNames from 'classnames';
import './StatusButton.scss';
import { StatusButtonProps } from './types';
import Typography from '../Typography';

const StatusButton = ({
  status = 'passed',
  label = '',
  onClick = () => {},
  className = '',
  style = {},
  disabled = false,
  ...props
}: StatusButtonProps) => {
  return (
    <button
      className={classNames(
        'ff-status-button',
        `ff-status-button--${status}`,
        className
      )}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Typography
        as="div"
        fontWeight="semi-bold"
        lineHeight="16px"
        textAlign="center"
        className="ff-status-button__text"
      >
        {label}
      </Typography>
    </button>
  );
};

export default StatusButton;
