import classNames from 'classnames';
import Components from './iconList';
import './Icons.scss';
import { IconProps } from './types';

const Icon = ({
  name,
  height,
  width,
  onClick = () => {},
  color = '#808080',
  hoverEffect = false,
  className = '',
  disabled = false,
  ...props
}: IconProps) => {
  const IconComponent = Components[name];

  const iconHeight = height ? height : 15;
  const iconWidth = width ? width : 15;

  if (!IconComponent) {
    return null;
  }

  return (
    <span
      onClick={disabled ? () => {} : onClick}
      style={{ height: `${iconHeight}px`, width: `${iconWidth}px` }}
      className={classNames('ff-icon-container', {
        'ff-icon-click': !!hoverEffect,
        'ff-icon-disabled': disabled,
        [className]: !!className,
      })}
      {...props}
    >
      <IconComponent height="100%" width="100%" style={{ color: color }} />
    </span>
  );
};

export default Icon;
