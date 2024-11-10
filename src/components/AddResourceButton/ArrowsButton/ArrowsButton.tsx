import classNames from 'classnames';
import './ArrowsButton.scss';
import { DirectionalArrowButtonProps } from '../type';
import MenuOption from '../../MenuOption/MenuOption';

const ArrowsButton = ({
  direction,
  menuOptions,
  onArrowClick,
}: DirectionalArrowButtonProps & { isActive: boolean }) => {
  const getIconName = () => {
    return `arrows_${direction}_icon`;
  };

  return (
    <div>
      <button
        className={classNames(
          'ff-arrow-button',
          `ff-arrow-button--${direction}`
        )}
        onClick={onArrowClick}
      >
        <MenuOption
          iconName={getIconName()}
          options={menuOptions}
          dropdownPlacement={direction}
          iconSize={12}
          iconButtonSize={24}
          iconButtonBorderRadius={3}
          onOptionClick={() => {}} 
        />
      </button>
    </div>
  );
};

export default ArrowsButton;
