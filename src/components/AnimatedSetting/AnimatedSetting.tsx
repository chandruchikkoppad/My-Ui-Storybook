import { forwardRef, useEffect, useRef } from 'react';
import Components from '../Icon/iconList';
import { AnimatedSettingProps } from './type';

const AnimatedSetting = forwardRef<HTMLSpanElement, AnimatedSettingProps>(
  (
    {
      name,
      height = 30,
      width = 30,
      path = '',
      onClick,
      color = 'var(--brand-color)', // Default color
      hoverEffect = false,
      className = '',
      disabled = false,
      variant = 'light',
      isSelected = false,
      x,
      y,
      tabIndex = -1,
      ...props
    },
    ref
  ) => {
    const IconComponent = Components[name];
    if (!IconComponent) return null;

    const iconRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
      if (iconRef.current) {
        if (x !== undefined) iconRef.current.setAttribute('x', String(x));
        if (y !== undefined) iconRef.current.setAttribute('y', String(y));
      }
    }, [x, y]);

    const baseProps = {
      ref,
      onClick: disabled ? undefined : onClick,
      style: {
        height: `${height}px`,
        width: `${width}px`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.3 : 1, // Reduce opacity when disabled
      },

      tabIndex,
      ...props,
    };

    return (
      <span {...baseProps}>
        <img height={height} width={width} src={path} alt="" />
      </span>
    );
  }
);

export default AnimatedSetting;
