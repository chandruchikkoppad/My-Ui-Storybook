import './AddButton.scss';
import ArrowsButton from './ArrowsButton/ArrowsButton';
import Icon from '../Icon';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AddResourceButtonProps,
  DirectionalArrow,
  validateArrows,
} from './type';
import usePortalPosition from '../../hooks/usePortalPosition';

const AddButton = ({
  id = 'AddModule',
  variant = 'primary',
  directionalArrow = [
    {
      direction: 'right',
      menuOptions: [
        { label: 'Sub Module', value: 'sub_module', icon: '', disable: false },
      ],
    },
  ],
  zIndex = 99,
}: AddResourceButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [positionArrowContainer, setPositionArrowContainer] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const [activeArrow, setActiveArrow] = useState<string>('');
  const arrowContainerRef = useRef<HTMLDivElement>(null);
  const validArrows = validateArrows(directionalArrow);
  const portalPosition = usePortalPosition(arrowContainerRef, isHovered);

  const handleHover = () => {
    if (!activeArrow) {
      setIsHovered(true);
    }
    const { positionX, positionY } = portalPosition(arrowContainerRef);
    setPositionArrowContainer({ left: positionX, top: positionY });
  };

  const handleLeave = () => {
    setIsHovered(false);
    setActiveArrow('');
  };

  const handleArrowClick = (direction: string) => {
    if (activeArrow === direction) {
      setActiveArrow('');
      setIsHovered(false);
    } else {
      setActiveArrow(direction);
      setIsHovered(true);
    }
  };

  const getArrowButtonClass = () => {
    const directions = validArrows
      .map((arrow: { direction: string }) => arrow.direction)
      .sort()
      .join('-');
    return `ff-${directions}`;
  };

  return (
    <div
      className={`ff-add-button-container ${
        isHovered ? `ff-hovered-add-button--${variant}` : ''
      }`}
      id={id}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      ref={arrowContainerRef}
    >
      <span className="ff-add-button">
        <Icon
          name="plus_icon"
          width={16}
          height={16}
          className={
            isHovered
              ? `ff-hovered-add-icon--${variant}`
              : `ff-add-icon--${variant}`
          }
        />
      </span>

      {isHovered &&
        createPortal(
          <div
            className={`ff-arrow-buttons-container ${getArrowButtonClass()}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={{
              left: positionArrowContainer.left,
              top: positionArrowContainer.top,
              zIndex: zIndex,
            }}
          >
            {directionalArrow.map(
              ({ direction, menuOptions }: DirectionalArrow, index: number) => (
                <ArrowsButton
                  key={index}
                  direction={direction}
                  onArrowClick={() => handleArrowClick(direction)}
                  menuOptions={menuOptions}
                  isActive={activeArrow === direction}
                  variant={variant}
                />
              )
            )}
          </div>,
          document.body
        )}
    </div>
  );
};

export default AddButton;
