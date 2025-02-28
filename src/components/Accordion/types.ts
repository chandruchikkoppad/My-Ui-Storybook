import { ReactNode } from 'react';

export interface AccordionProps {
  /**
   * Accordion Header Title
   */
  headerTitle: string | JSX.Element;
  /**
   * Content that to be shown while Accordion is expanded
   */
  accordionContent: ReactNode;
  /**
   * Custom color for the Accordion header
   */
  color?: string;
  /**
   * Minimum height for the Accordion
   */
  minHeight?: string;
  /**
   * Property to disable accordion
   */
  disable?: boolean;
  /**
   * Info message to user for disabling accordion
   */
  disableInfoMessage?: string;
  /**
   * Icon name for the Accordion state like expand and collapse
   */
  accordionStateIconName?: string;
  /**
   * Accordion collapse and expand Icon width
   */
  AccordionStateIconWidth: number; // Allow string or number for icon size
  /**
   * Accordion collapse and expand Icon height
   */
  AccordionStateIconHeight: number; // Allow string or number for icon size
  /**
   * Optional props for initial state of Accordion
   */
  isExpand?: boolean;
  /**
   * Callback function for the accordion header click
   */
  onClick?: () => void; // onClick handler for accordion header
  /**
   * Providing className for Styles
   */
  className?: string;

  iconColor?: string;
}
