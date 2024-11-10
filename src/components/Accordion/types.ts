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
}
