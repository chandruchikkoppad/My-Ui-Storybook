import classNames from 'classnames';
import './ArrowsButton.scss';
import { DirectionalArrowButtonProps } from '../type';
import MenuOption from '../../MenuOption/MenuOption';
import { useRef } from 'react';

const ArrowsButton = ({
  direction,
  menuOptions,
  onArrowClick,
  treeRowRef,
  onMenuOptionClick,
  menuOptionZIndex,
}: DirectionalArrowButtonProps & { isActive: boolean }) => {
  const getIconName = () => {
    return `arrows_${direction}_icon`;
  };
  const menuOptionRef = useRef<HTMLDivElement>(null);
  const isAddResourceButton = true;

  return (
    <div>
      <button
        className={classNames(
          'ff-arrow-button',
          `ff-arrow-button--${direction}`
        )}
        onClick={onArrowClick}
      >
        <span ref={menuOptionRef}>
          <MenuOption
            iconName={getIconName()}
            options={menuOptions}
            dropdownPlacement={direction}
            iconSize={12}
            iconButtonSize={24}
            iconButtonBorderRadius={3}
            onOptionClick={onMenuOptionClick}
            treeRowRef={treeRowRef}
            zIndex={menuOptionZIndex}
            isAddResourceButton={isAddResourceButton}
          />
        </span>
      </button>
    </div>
  );
};

export default ArrowsButton;
