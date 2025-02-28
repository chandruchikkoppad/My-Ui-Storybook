import { useCallback, useState } from 'react';
import './ExpandableMenu.scss';
import classNames from 'classnames';
import { ExpandableMenuProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Icon from '../Icon';
import './ExpandableMenu.scss';
import Typography from '../Typography';

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({
  label = '',
  icon = (
    <Icon
      name="arrow_right"
      height={5}
      width={8}
      color={'var(--icons-default-color)'}
    />
  ),
  variant = 'primary',
  size = 'medium',
  disable = false,
  subMenus = [],
  selectedMenu = '',
  onSubMenuClick = () => {},
  menuExpandStatus
}) => {
  const [isExpanded, setIsExpanded] = useState( menuExpandStatus || false );
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setIsHovered(false);
  };

  const handleMouseEnter = useCallback(() => {
    if (!isExpanded) setIsHovered(true);
  }, [isExpanded]);

  const handleMouseLeave = useCallback(() => {
    if (!isExpanded) setIsHovered(false);
  }, [isExpanded]);

  const handleSelectedMenu = (chip: string) => {
    if (!disable) {
      onSubMenuClick(chip);
      setIsExpanded(true);
    }
  };

  const hasExpanded = isExpanded || isHovered;

  return (
    <div
      className={classNames(
        'ff-expandable-chip-menu',
        `ff-expandable-chip-menu--${variant}`,
        {
          'ff-expandable-chip-menu--disabled': disable,
          expanded: hasExpanded,
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`ff-label-chip ff-label-chip--${variant} ff-expandable-chip-menu--${size}`}
        onClick={toggleExpand}
      >
        <Typography>{label}</Typography>
        <span className="arrow-icon">{icon}</span>
      </div>

      {hasExpanded && !checkEmpty(subMenus) && (
        <div
          className={classNames('ff-sub-chips', {
            expanded: hasExpanded,
          })}
        >
          {subMenus.map((chip, index) => (
            <div
              key={index}
              className={classNames(
                'ff-sub-chip',
                `ff-sub-chip--${variant}`,
                `ff-sub-chip--${size}`,
                {
                  selected: selectedMenu === chip,
                }
              )}
              onClick={() => handleSelectedMenu(chip)}
            >
              {chip}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableMenu;
