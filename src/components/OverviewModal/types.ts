import { ReactNode } from "react";

export interface OverviewModalProps {
  isOpen: boolean;
  isMaximized: boolean;
  width?: string;
  height?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  icons?: React.ReactNode;
  downloadFileIcon?: boolean;
  onClose: () => void;
  onMaximizeToggle?: () => void;
  showHeader: boolean;
  top?: string;
  overlay?: boolean;
  downloadHandler: () => void;
  zIndex?: number;
  multiData?: {
    name: ReactNode;
    icon: string; 
    src: string; 
    alt: string;
    time?: string;
    scripts?: string;
  }[];
  setSelectedVideo?: (video: {
    name: ReactNode;
    icon: string;
    src: string;
    alt: string;
    time?: string;
    scripts?: string;
    clickedAt: number;
  }) => void;
}
