import classNames from 'classnames';
import './StatusButton.scss';
import { StatusButtonProps } from './types';
import Typography from '../Typography';
import Tooltip from '../Tooltip';

const StatusButton = ({
  status = 'passed',
  label = '',
  onClick = () => {},
  className = '',
  style = {},
  disabled = false,
  ...props
}: StatusButtonProps) => {
  const hasTooltip =
    status === 'partially-executed' || status === 'not-executed';

  return (
    <Tooltip title={hasTooltip ? label : ''} placement="bottom">
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
    </Tooltip>
  );
};

export default StatusButton;
