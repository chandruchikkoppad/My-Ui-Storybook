import React from 'react';
import { TypographyProps } from './types';
import './Typography.scss';

const Typography: React.FC<TypographyProps> = ({
  fontWeight = 'regular',
  fontSize = 12,
  lineHeight = 'normal',
  color = '',
  textAlign = 'left',
  as: Element = 'span',
  letterSpacing = '',
  className = '',
  children,
  htmlFor = '',
  onClick = () => {},
  required = false,
  style = {},
  cursor,
  onDoubleClick = () => {},

}) => {
  const fontSizeValue =
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize;

  return (
    <Element
      className={`ff-text ff-text--${fontWeight} ${className}`}
      {...(Element === 'label' && { htmlFor })}
      style={{
        fontSize: fontSizeValue,
        lineHeight,
        color,
        textAlign,
        letterSpacing,
        cursor,
        ...style,
        
      }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {required && <span className="required-asterisk">*</span>}
      {children}
    </Element>
  );
};

export default Typography;
