interface NavBarIcon {
  name: string;
  [key: string]: any;
}

export interface MobileSkinProps {
  children: React.ReactNode | string;
  orientation?: 'portrait' | 'landscape';
  navBarIcons?: NavBarIcon[];
  topNavBarIcons?: NavBarIcon[];
  mobileHeight?: number;
  mobileWidth?: number;
  UtilityBar?: boolean;
  background?: string;
  tooltip?: Record<string, string>;
  navBarPosition?: 'top' | 'bottom' | 'left';
  tooltipFormatter?: ((title: string) => React.ReactNode) | undefined;
}
