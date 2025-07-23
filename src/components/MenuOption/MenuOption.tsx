import { useState, useRef, useContext, useEffect } from 'react';
import './MenuOption.scss';
import Icon from '../Icon';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import useClickOutside from '../../hooks/useClickOutside';
import { getAnchorElement } from '../../utils/getAnchorElement/getAnchorElement';
import {
  OptionCardProps,
  OptionProps,
  MenuOptionProps,
  OptionClick,
} from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const Option = ({ option, onClick, alignOption }: OptionProps) => (
  <div
    className={classNames('ff-options', {
      'ff-disable-option': option.disable,
      'align-center': alignOption === 'center',
      'align-right': alignOption === 'right',
      'align-left': alignOption === 'left',
    })}
    onClick={() => !option.disable && onClick(option)}
  >
    {typeof option.icon === 'string' ? (
      <Icon
        name={option.icon}
        color={option.iconColor}
        height={16}
        width={16}
      />
    ) : (
      (option.icon as React.ReactNode)
    )}

    <Typography
      as="label"
      lineHeight="18px"
      color={option.icon === 'delete' ? 'var(--delete-text-color)' : ''}
    >
      {option.label}
    </Typography>
  </div>
);

const calculatePosition = (
  menuPosition: { top: any; left: any; height: any; width: any },
  dropdownPlacement: string | undefined,
  optionCardHeight: number,
  optionCardWidth?: number
) => {
  const { top, left, height, width } = menuPosition;
  const availableSpace = {
    top,
    bottom: window.innerHeight - (top + height),
    left,
    right: window.innerWidth - (left + width),
  };
  const gap = 2;

  let newTop = top;
  let newLeft = left;

  switch (dropdownPlacement) {
    case 'top':
      newTop =
        availableSpace.top > optionCardHeight + gap
          ? top - optionCardHeight - gap
          : top + height + gap;
      break;
    case 'down':
      newTop =
        availableSpace.bottom > optionCardHeight + gap
          ? top + height + gap
          : top - optionCardHeight - gap;
      break;
    case 'left':
      newLeft =
        availableSpace.left > width + gap
          ? left - width - gap
          : left + width + gap;
      break;
    case 'right':
      newLeft =
        availableSpace.right > width + gap
          ? left + width + gap
          : left - width - gap;
      break;
    case 'bottomLeft':
      newTop =
        availableSpace.bottom > optionCardHeight + gap
          ? top + height + gap
          : top - optionCardHeight - gap;
      if (optionCardWidth) {
        newLeft = left - optionCardWidth + width;
      }
      break;
    default:
      newTop = top;
      newLeft = left;
  }

  // Ensure menu stays within viewport
  newTop = Math.max(0, Math.min(newTop, window.innerHeight - optionCardHeight));
  newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - width));

  return { top: newTop, left: newLeft };
};

const OptionCard = ({
  options,
  onClick,
  menuPosition,
  menuRef,
  closeDropdown,
  zIndex = 1500,
  dropdownPlacement,
  variant,
  isAddResourceButton,
  alignOption,
}: OptionCardProps) => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const optionCardRef = useRef<HTMLDivElement>(null);
  const [optionCardHeight, setOptionCardHeight] = useState(0);
  const [optionCardWidth, setOptionCardWidth] = useState(0);
  useClickOutside(menuRef, closeDropdown, [optionCardRef]);
  useEffect(() => {
    if (optionCardRef.current) {
      setOptionCardHeight(optionCardRef.current.offsetHeight);
      setOptionCardWidth(optionCardRef.current.offsetWidth);
    }
  }, [options]);
  const style = calculatePosition(
    menuPosition,
    dropdownPlacement,
    optionCardHeight,
    optionCardWidth
  );
  return createPortal(
    <div
      className={classNames(
        'ff-option-card',
        { 'ff-option-card--primary': variant === 'primary' },
        { 'ff-option-card--default': variant === 'default' },
        currentTheme
      )}
      style={{ ...style, zIndex, margin: isAddResourceButton ? '0px' : '4px' }}
      ref={optionCardRef}
    >
      {options.map(
        (opt) =>
          !opt.hide && (
            <Tooltip
              key={opt.value}
              title={opt?.tooltipForOption ? opt?.tooltipForOption : ''}
              placement={opt?.tooltipPlacementForOption}
            >
              <Option
                key={opt.value}
                option={opt}
                onClick={onClick}
                alignOption={alignOption}
              />
            </Tooltip>
          )
      )}
    </div>,
    document.body
  );
};

const MenuOption = ({
  labelName,
  iconName,
  tooltipTitle,
  tooltipPlacement = 'bottom',
  options = [],
  onClick = () => {},
  onOptionClick = () => {},
  iconButtonSize = 20,
  iconButtonBorderRadius = 7,
  iconSize = 16,
  variant = 'light',
  zIndex = 1500,
  dropdownPlacement = 'down',
  optionCardVariant,
  targetRef = null,
  treeRowRef,
  isAddResourceButton,
  disabled,
  alignOption = 'left',
  displayCard = true,
}: MenuOptionProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    height: 0,
    right: 0,
    width: 0,
  });
  const closeDropDown = () => setIsClicked(false);
  useEffect(() => {
    if (targetRef && !checkEmpty(options)) {
      const parentDom = getAnchorElement(targetRef);
      parentDom?.classList.toggle('hover', isClicked);
    }
    return () => {
      if (targetRef) {
        const parentDom = getAnchorElement(targetRef);
        parentDom?.classList.remove('hover');
      }
    };
  }, [isClicked, targetRef, options]);
  const getScrollableParent = (
    element: HTMLElement | null
  ): HTMLElement | null => {
    if (!element) return null;

    let parent: HTMLElement | null = element.parentElement;

    while (parent) {
      const { overflowY, overflowX } = window.getComputedStyle(parent);

      if (
        (/(auto|scroll|overlay)/.test(overflowY) &&
          parent.scrollHeight > parent.clientHeight) ||
        (/(auto|scroll|overlay)/.test(overflowX) &&
          parent.scrollWidth > parent.clientWidth)
      ) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return document.documentElement;
  };

  useEffect(() => {
    if (!menuRef.current) return;
    const scrollableParent = getScrollableParent(menuRef.current);

    const handleScroll = () => {
      setIsClicked(false);
    };

    // Attach scroll event to detected parent or window
    scrollableParent?.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    if (scrollableParent !== document.documentElement) {
      // Also attach to window if it's not the detected parent
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      scrollableParent?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onIconClickHandler = () => {
    if (disabled) return;
    onClick();
    calculateDims();
    setIsClicked((prev) => !prev);
  };
  const handleOptionClick = (option: OptionClick) => {
    treeRowRef?.current?.children[0]?.children[2]?.classList.remove(
      'table-row-add-button'
    );
    onOptionClick(option);
    closeDropDown();
  };
  const calculateDims = () => {
    if (menuIconRef.current) {
      const rect = menuIconRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        height: rect.height,
        right: rect.right,
        width: rect.width,
      });
    }
  };
  return (
    <div className="ff-menu-option-container" ref={menuRef}>
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        <div className="ff-icon-label">
          <div
            className={classNames('ff-menuicon-container', {
              'ff-menuicon-container-clicked':
                isClicked && displayCard && !checkEmpty(options),
              dark: variant === 'dark',
              'ff-menuicon-container-add-resource': isAddResourceButton,
            })}
            ref={menuIconRef}
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
              disabled={disabled}
              color={
                displayCard && !checkEmpty(options)
                  ? isClicked === (variant === 'dark')
                    ? 'var(--menu-option-icon-clicked)'
                    : 'var(--menu-option-icon-color)'
                  : 'var(--menu-option-icon-clicked)'
              }
            />
          </div>
          {labelName && <Typography as="label">{labelName}</Typography>}
        </div>
      </Tooltip>
      {isClicked && displayCard && !checkEmpty(options) && (
        <OptionCard
          options={options}
          onClick={handleOptionClick}
          menuPosition={menuPosition}
          menuRef={menuRef}
          closeDropdown={closeDropDown}
          zIndex={zIndex}
          dropdownPlacement={dropdownPlacement}
          variant={optionCardVariant}
          isAddResourceButton={isAddResourceButton}
          alignOption={alignOption}
        />
      )}
    </div>
  );
};
export default MenuOption;
