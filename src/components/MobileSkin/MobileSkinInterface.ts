interface NavBarIcon {
  name: string;
  [key: string]: any;
}

export interface MobileSkinProps {
  children: React.ReactNode | string;
  orientation?: 'portrait' | 'landscape';
  UtilityBar?: boolean;
  navBarIcons?: NavBarIcon[];
  mobileHeight?: number;
  mobileWidth?: number;
  background?: string;
}
