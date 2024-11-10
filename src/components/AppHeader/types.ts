import { ReactNode } from 'react';

export interface AppHeaderProps {
  logoIconName: string;
  rightContent: ReactNode;
  projectsList: string[];
  appHeaderMenuItems: appHeaderMenuItemProps[];
  appHeaderHiddenMenuItems: string[];
  selectedMenu: string;
  selectedSubMenu : string;
  selectedQuickMenu : string;
  onMenuClick ?:  (text: any) => void;
  onSubMenuClick ?:  (text: any) => void;
  onQuickMenuClick ?:  (text: any) => void;
}
export interface appHeaderMenuItemProps {
  menuName: string;
  subMenuItems: appHeaderSubMenuItemProps[];
}
export interface appHeaderSubMenuItemProps {
  subMenuName: string;
  quickMenuItems: appHeaderQuickMenuItemProps[];
}
export interface appHeaderQuickMenuItemProps {
  quickMenuName: string;
  quickMenuIconName: string;
}
