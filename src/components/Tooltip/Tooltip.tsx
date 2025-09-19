import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import './Tooltip.scss';
import { createPortal } from 'react-dom';
import {
  Position,
  TooltipProps,
  TooltipContainerRef,
  TitleRef,
  IsTitleEmpty,
} from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import classNames from 'classnames';

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'bottom',
  disabled = false,
  style = {},
  as: Element = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef: TitleRef = useRef(null);
  const tooltipContainerRef: TooltipContainerRef = useRef(null);
  const [finalPlacement, setFinalPlacement] = useState(placement);
  const [tooltipContainerPosition, setTooltipContainerPosition] = useState({
    posX: 0,
    fromRight: 0,
    posY: 0,
    width: 0,
    fromBottom: 0,
  });
  const [titleDimensions, setTitleDimensions] = useState({
    height: 0,
    width: 0,
  });
  const [childrenContainerHeight, setChildrenContainerHeight] = useState(0);
  const { posX, fromRight, posY, width } = tooltipContainerPosition;
  const { height: titleHeight, width: titleWidth } = titleDimensions;
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const styles: Position = {
    left: {
      top: posY - 1,
      left: Math.max(posX - titleWidth - 5, 5),
    },
    right: {
      top: posY - 1,
      left: Math.min(fromRight + 5, window.innerWidth - titleWidth - 15),
    },
    top: {
      top: posY - titleHeight - 5,
      left: Math.max(
        Math.min(
          posX - titleWidth / 2 + width / 2,
          window.innerWidth - titleWidth - 5
        ),
        5
      ),
    },
    bottom: {
      top: posY + childrenContainerHeight + 5,
      left: Math.max(
        Math.min(
          posX - titleWidth / 2 + width / 2,
          window.innerWidth - titleWidth - 5
        ),
        5
      ),
    },
    'top-start': {
      top: posY - titleHeight - 5,
      left: Math.max(Math.min(posX, window.innerWidth - titleWidth - 15), 5),
    },
    'top-end': {
      top: posY - titleHeight - 5,
      left: Math.max(
        Math.min(fromRight - titleWidth, window.innerWidth - titleWidth - 5),
        5
      ),
    },
    'bottom-start': {
      top: posY + childrenContainerHeight + 5,
      left: Math.max(Math.min(posX, window.innerWidth - titleWidth - 15), 5),
    },
    'bottom-end': {
      top: posY + childrenContainerHeight + 5,
      left: Math.max(
        Math.min(fromRight - titleWidth, window.innerWidth - titleWidth - 15),
        5
      ),
    },
  };

  const handleScroll = () => {
    setIsVisible(false);
  };

  const handleClickAnywhere = () => {
    setIsVisible(false);
  };

  const isTitleEmpty: IsTitleEmpty = (tooltipValue) => {
    // If the value is a string, use the checkEmpty util function
    if (typeof tooltipValue === 'string') {
      return checkEmpty(tooltipValue);
    }

    // If the value is a valid React element, check if it has any children
    if (React.isValidElement(tooltipValue)) {
      return React.Children.count(tooltipValue.props.children) === 0;
    }

    // For non-string, non-element values, check if it's null or undefined
    return tooltipValue === undefined || tooltipValue === null;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickAnywhere);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickAnywhere);
    };
  }, []);

  const calculateDim = () => {
    if (!tooltipContainerRef.current || !titleRef.current) return;

    const rect = tooltipContainerRef.current.getBoundingClientRect();
    const titleHeight = titleRef.current.offsetHeight;
    const titleWidth = titleRef.current.offsetWidth;

    setChildrenContainerHeight(rect.height);

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    // Determine placement flip only for basic top/bottom
    if (placement === 'bottom' && spaceBelow < titleHeight + 10) {
      setFinalPlacement('top');
    } else if (placement === 'top' && spaceAbove < titleHeight + 10) {
      setFinalPlacement('bottom');
    } else {
      setFinalPlacement(placement);
    }

    const posX = rect.left + window.scrollX;
    const fromRight = rect.right;

    setTooltipContainerPosition({
      posX,
      fromRight,
      posY: rect.top,
      width: tooltipContainerRef.current.offsetWidth,
      fromBottom: window.innerHeight - tooltipContainerRef.current.offsetTop,
    });

    setTitleDimensions({
      height: titleHeight,
      width: titleWidth,
    });
  };

  useLayoutEffect(() => {
    if (isVisible) {
      calculateDim();
    }
  }, [isVisible]);
  const showTooltip = () => {
    calculateDim();
    setIsVisible(true);
  };

  return (
    <Element
      ref={tooltipContainerRef}
      className={classNames('ff-tooltip-container', currentTheme)}
      onMouseEnter={showTooltip}
      onMouseLeave={() => setIsVisible(false)}
      style={style}
    >
      {children}

      {isVisible &&
        !disabled &&
        !isTitleEmpty(title) &&
        createPortal(
          <Element
            ref={titleRef}
            style={{ ...styles[finalPlacement] }}
            className={classNames('ff-tooltip', currentTheme, {
              'ff-tooltip--visible': isVisible,
            })}
          >
            {title}
          </Element>,
          document.body
        )}
    </Element>
  );
};

export default Tooltip;
