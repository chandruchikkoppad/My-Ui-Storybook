import React, { CSSProperties } from 'react';

export interface TypographyProps {
  /**
   * Font Weight
   */
  fontWeight?: 'regular' | 'medium' | 'semi-bold' | 'bold';

  /**
   * Font Size
   */

  fontSize?: number | string;

  /**
   * Line height
   */

  lineHeight?: string;

  /**
   * Color
   */

  color?: string;

  /**
   *  Text alignment
   */
  textAlign?: 'left' | 'right' | 'center' | 'justify';

  /**
   * For JSX elements
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * htmlFor attribute for element=label,
   */
  htmlFor?: string;
  /**
   * The content to display within the Typography component
   */
  children: React.ReactNode;
  /**
   * To add styles in Typography
   */
  className?: string;
  /**
   * To add letter spacing in Typography
   */
  letterSpacing?: string;
  /**
   * To add onClick function
   */
  onClick?: () => void;
  required?: boolean; // TO add * in the label
  style?: React.CSSProperties;
  cursor?: CSSProperties['cursor'];
  onDoubleClick?: () => void;
}
