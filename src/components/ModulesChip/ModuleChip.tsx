import './ModuleChip.scss';
import classNames from 'classnames';
import { ModuleChipProps } from './types';
import Typography from '../Typography';

const ModuleChip: React.FC<ModuleChipProps> = ({
  label = '',
  isActive = true,
  onClick = () => {},
  isFilterChip = false,
}) => {
  const chipType = isFilterChip ? 'filter' : 'module';
  return (
    <div
      className={classNames('ff-module-chip', {
        'ff-filter-chip': isFilterChip,
        [`ff-${chipType}-chip--active`]: isActive,
        [`ff-${chipType}-chip--hover`]: !isActive,
      })}
      onClick={onClick}
    >
      <Typography
        lineHeight="18px"
        className="module-typography"
        children={label}
      />
    </div>
  );
};

export default ModuleChip;
