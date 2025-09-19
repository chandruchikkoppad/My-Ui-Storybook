import { forwardRef, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Components from './iconList';
import './Icons.scss';
import { IconProps } from './types';

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      height,
      width,
      onClick = () => {},
      color = 'var(--brand-color)', // Default color
      hoverEffect = false,
      className = '',
      disabled = false,
      variant = 'light',
      isSelected = false,
      x,
      y,
      chartIcon = false,
      tabIndex = -1,
      cursorType,
      ...props
    },
    ref
  ) => {
    const IconComponent = Components[name];

    const iconHeight = height || 16;
    const iconWidth = width || 16;

    if (!IconComponent) {
      return null;
    }
    const iconRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
      if (iconRef.current) {
        if (x !== undefined) {
          iconRef.current.setAttribute('x', String(x));
        }
        if (y !== undefined) {
          iconRef.current.setAttribute('y', String(y));
        }
      }
    }, [x, y]);

    const iconColor =
      variant === 'dark' ? 'var(--ff-icon-color-dark-variant)' : color;

    const getCursor = () => {
      if (disabled) {
        return 'not-allowed';
      } else if (hoverEffect && cursorType) {
        return cursorType;
      } else if (hoverEffect) {
        return 'pointer';
      } else if (cursorType) {
        return cursorType;
      } else {
        return 'default';
      }
    };

    const baseProps = {
      ref: iconRef,
      onClick: disabled ? () => {} : onClick,
      style: {
        height: `${iconHeight}px`,
        width: `${iconWidth}px`,
        cursor: getCursor(),
      },
      className: classNames('ff-icon-container', {
        'ff-icon-click': hoverEffect,
        'ff-icon-disabled': disabled,
        'ff-icon-selected': isSelected,
        'ff-icon-dark': variant === 'dark',
        'ff-icon-danger': variant === 'danger',
        [className]: !!className,
      }),
      tabIndex: tabIndex,
      ...props,
    };

    return (
      <>
        {chartIcon === false ? (
          <span {...baseProps} ref={ref}>
            <IconComponent
              height="100%"
              width="100%"
              style={{ color: iconColor }}
            />
          </span>
        ) : (
          <svg {...baseProps}>
            <IconComponent
              style={{ color: color }}
              height={height}
              width={width}
            />
          </svg>
        )}
      </>
    );
  }
);

export default Icon;
