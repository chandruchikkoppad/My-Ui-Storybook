import React, { useRef, useState } from 'react';
import './ColorBarSelector.scss';
import classNames from 'classnames';

interface ColorBarSelectorProps {
  getColorValue: (color: string) => void;
  disabled: boolean;
  initialColor: string;
}
const ColorBarSelector: React.FC<ColorBarSelectorProps> = ({
  getColorValue,
  disabled,
  initialColor,
}) => {
  const colorInputRef = useRef<HTMLInputElement | null>(null);
  const [color, setColor] = useState<string>(initialColor); // Needed hexacode for backend

  const handleColorClick = () => {
    if (colorInputRef.current && !disabled) {
      colorInputRef.current.click();
    }
  };

  return (
    <div
      className={classNames('ff-excel-color-selector', {
        'color-selector-disabled': disabled,
      })}
      style={{ backgroundColor: color }}
      onClick={handleColorClick}
    >
      <input
        type="color"
        disabled={disabled}
        className={classNames('ff-excel-color-selector-picker', {
          'color-selector-disabled': disabled,
        })}
        ref={colorInputRef}
        onChange={(e) => {
          setColor(e.target.value);
          getColorValue(e.target.value.replace('#', ''));
        }}
      />
    </div>
  );
};

export default ColorBarSelector;
