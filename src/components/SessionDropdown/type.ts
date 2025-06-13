import { ReactElement } from 'react';

export interface SessionDropdownProps {
  header: string;
  secondaryHeader?: string;
  primaryCount?: string;
  secondaryCount?: string;
  primaryItems: React.ReactNode[];
  secondaryItems?: React.ReactNode[];
  width?: string;
  activeTab?: 'primary' | 'secondary';
  onPrimaryTabClick?: () => void;
  onSecondaryTabClick?: () => void;
  onDownloadClick?: () => void;
  onDeleteClick?: () => void;

  tabsData?: { 
    id: string; 
    label: string; 
    count?: string | number; 
    component?: ReactElement; 
    disabled?: boolean 
  }[];
  activeTabId?: string;
  onTabClick?: (tabId: string) => void;
}