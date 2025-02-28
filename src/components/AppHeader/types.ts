import { ReactNode } from 'react';
import { optionsType } from '../AllProjectsDropdown/types';
export interface AppHeaderProps {
  width?: string;
  borderRadius?:string;
  logoIconName: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  projectsList?: optionsType[];
  appHeaderMenuItems: appHeaderMenuItemProps[];
  appHeaderHiddenMenuItems?: appHeaderHiddenMenuItemProps[];
  selectedMenu: string;
  selectedSubMenu?: string;
  selectedQuickMenu?: string;
  selectedProject?: optionsType;
  onMenuClick?: (text: any) => void;
  onSubMenuClick?: (text: any) => void;
  onQuickMenuClick?: (text: any) => void;
  onProjectMenuClick?: (text: any) => void;
  onProjectDropdownLabelClick?: () => void;
  onMoreMenuOptionClick?: (text: any) => void;
  disabled?:boolean;
}
export interface appHeaderMenuItemProps {
  label: string;
  path?: string;
  disable?: boolean;
  disableText?: string;
  hide?: boolean;
  access?: string;
  subMenuItems?: appHeaderSubMenuItemProps[];
}
export interface appHeaderSubMenuItemProps {
  label: string;
  path?: string;
  disable?: boolean;
  disableText?: string;
  hide?: boolean;
  quickMenuItems?: appHeaderQuickMenuItemProps[];
  hiddenMenuItems?: appHeaderHiddenMenuItemProps[];
}
export interface appHeaderQuickMenuItemProps {
  label: string;
  path: string;
  iconName: string;
  disable?: boolean;
  disableText?: string;
  hide?: boolean;
}
export interface appHeaderHiddenMenuItemProps {
  label: string;
  value: string | string[];
  icon: string;
  disable?: boolean;
  disableText?: string;
  hide?: boolean;
}
