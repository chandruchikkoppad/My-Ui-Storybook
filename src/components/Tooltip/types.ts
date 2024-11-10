import { ReactNode } from 'react';

type TooltipContainerRef = React.RefObject<HTMLDivElement>;
type TitleRef = React.RefObject<HTMLDivElement>;
type IsTitleEmpty = (tooltipValue: ReactNode | string) => boolean;

interface Position {
  [key: string]: {
    top?: number;
    left?: number;
  };
}
interface TooltipProps {
  /**
   * The text or content to be displayed inside the tooltip.
   * This can be a string or any React node.
   */
  title?: string | React.ReactNode;

  /**
   * The children over which the tooltip will be displayed.
   * Typically a button or any other interactive element.
   */
  children: React.ReactNode;

  /**
   * The placement of the tooltip relative to the children.
   * Defines where the tooltip appears: top, bottom, left, right, etc.
   *
   * @default 'bottom'
   */
  placement?: 
    | 'top' 
    | 'bottom' 
    | 'left' 
    | 'right' 
    | 'top-start' 
    | 'top-end' 
    | 'bottom-start' 
    | 'bottom-end';

  /**
   * Whether the tooltip is disabled.
   * If true, the tooltip will not be displayed.
   *
   * @default false
   */
  disabled?: boolean;
}


export {
  TooltipContainerRef,
  TitleRef,
  IsTitleEmpty,
  Position,
  TooltipProps,
};


