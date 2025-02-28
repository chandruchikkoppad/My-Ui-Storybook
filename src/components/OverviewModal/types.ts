import React from 'react';

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

 showheader:boolean

 top?:string;

 overlay?: boolean;

 downloadHandler: () => void;
 
 zIndex?: number;
}

