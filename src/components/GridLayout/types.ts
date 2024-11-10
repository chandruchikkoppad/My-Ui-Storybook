import { ReactNode } from 'react';

export interface ContainerProps {
  /**
   * The content to be displayed inside the container.
   * Typically consists of rows and columns.
   *
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * Determines if the container should be fluid (expand to 100% width) or fixed width.
   *
   * @default false
   * @type {boolean}
   */
  fluid?: boolean;

  /**
   * Defines the gap (spacing) between the rows and columns inside the container.
   * Accepts any valid CSS size value (e.g., '10px', '1rem', etc.).
   *
   * @default '0px'
   * @type {string}
   */
  gap?: string;

  /**
   * Classname for Container
   * @default ''
   * @type {string}
   */
  className?:string
}

export interface RowProps {
  /**
   * The content to be displayed inside the row, usually consisting of columns (`<Col />`).
   *
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * The gap (spacing) between columns within the row.
   * Accepts any valid CSS size value.
   *
   * @default '0px'
   * @type {string}
   */
  gap?: string;

  /**
   * @default ''
   * @type string
   */
  className?:string
}

export interface ColProps {
  /**
   * The content to be displayed inside the column.
   *
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * Defines the width of the column as a fraction of 12 (for a 12-column grid system).
   * For example, `size={6}` would make the column take up half the width of the row.
   *
   * @default 12
   * @type {number}
   */
  size?: number;

  /**
   * @default  ''
   * @type string
   * 
   */
  className?: string;
}
