import { ReactNode } from 'react';

export interface ChatModalProps {
  iconName: string;
  modalWidth: number;
  modalHeight: number;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  iconPosition: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  hoverIconPosition: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };

  modalPosition: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  children: ReactNode;
  iconHeight?: number;
  iconWidth?: number;
  modalHeading?: string;
  onClearChat?: () => void;
}
