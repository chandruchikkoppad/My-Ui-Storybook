import { ReactNode } from 'react';

export interface StatusButtonProps {
  /**
   * Status of the button
   */
  status:
    | 'passed'
    | 'failed'
    | 'running'
    | 'skipped'
    | 'warning'
    | 'terminated'
    | 'partially-executed'
    | 'aborted'
    | 'not-executed';
  /**
   * Button label (status text)
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Button content
   */
  children?: ReactNode;
  /**
   * Button id
   */
  id?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Classname for the button
   */
  className?: string;
  /**
   * Additional styles for the button
   */
  style?: React.CSSProperties;
}
