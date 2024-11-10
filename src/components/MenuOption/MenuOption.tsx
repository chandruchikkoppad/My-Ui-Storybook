import { useState, useRef } from 'react';
import './MenuOption.scss';
import Icon from '../Icon';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import {
  OptionCardProps,
  OptionProps,
  MenuOptionProps,
  OptionClick,
} from './types';
import useClickOutside from '../../hooks/useClickOutside';
import Typography from '../Typography';

const Option = ({ option, onClick }: OptionProps) => (
  <div
    className={classNames('ff-options', {
      'ff-disable-option': option.disable,
    })}
    onClick={() => !option.disable && onClick(option)}
  >
    <Icon name={option.icon} height={16} width={16} />
    <Typography
      as="label"
      color={option.icon === 'delete' ? 'var(--delete-text-color)' : ''}
    >
      {option.label}
    </Typography>
  </div>
);

const OptionCard = ({ options, onClick, styles }: OptionCardProps) => {
  return (
    <div className="ff-option-card" style={styles}>
      {options.map((opt) => (
        <Option key={opt.label} option={opt} onClick={onClick} />
      ))}
    </div>
  );
};

const MenuOption = ({
  labelName,
  iconName,
  tooltipTitle,
  tooltipPlacement = 'bottom',
  options = [],
  dropdownPlacement = 'down',
  onClick = () => {},
  onOptionClick = () => {},
  iconButtonSize = 20,
  iconButtonBorderRadius = 7,
  iconSize = 16,
}: MenuOptionProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeDropDown = () => setIsClicked(false);

  const onIconClickHandler = () => {
    onClick();
    setIsClicked((prev) => !prev);
  };

  const handleOptionClick = (option: OptionClick) => {
    onOptionClick(option);
    closeDropDown();
  };

  const dropdownPositionStyles = () => {
    switch (dropdownPlacement) {
      case 'top':
        return { bottom: '100%', left: -2 };
      case 'left':
        return { top: -2, right: '100%' };
      case 'right':
        return { top: -2, left: '100%' };
      case 'down':
      default:
        return { top: '100%', left: -2 };
    }
  };

  useClickOutside(menuRef, closeDropDown);

  return (
    <div className="ff-menu-option-container" ref={menuRef}>
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        <div className="ff-icon-label">
          <div
            className={classNames('ff-menuicon-container', {
              'ff-menuicon-container-clicked': isClicked,
            })}
            onClick={onIconClickHandler}
            style={{
              width: `${iconButtonSize}px`,
              height: `${iconButtonSize}px`,
              borderRadius: `${iconButtonBorderRadius}px`,
            }}
          >
            <Icon
              height={iconSize}
              width={iconSize}
              name={iconName}
              color={
                isClicked
                  ? 'var(--menu-option-icon-color)'
                  : 'var(--menu-option-icon-clicked)'
              }
            />
          </div>
          {labelName && <Typography as="label">{labelName} </Typography>}
        </div>
      </Tooltip>
      {isClicked && (
        <OptionCard
          options={options}
          onClick={handleOptionClick}
          styles={dropdownPositionStyles()}
        />
      )}
    </div>
  );
};

export default MenuOption;
