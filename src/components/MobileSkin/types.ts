export interface iconDetails {
  /**
   * details of each icon in which name must be there
   */
  name: string;
  [key: string]: any;
}
export interface MobileSkinProps {
  /**
   * The content inside the mobile skin component
   */
  children: React.ReactNode | string;
  /**
   *    Portrait or landScape View of the Mobile
   */
  orientation: 'portrait' | 'landscape';
  /**
   *   height of the MobileSkin
   */
  mobileHeight?: number;
  /**
   *   width of the MobileSkin
   */
  mobileWidth?: number;
  /**
   * if you need the lower navbar below the mobileSkin you pass this prop
   */
  UtilityBar?: boolean;
  /**
   * takes the icons details like icon name , title, onClick event, height , width, etc but name is must
   */
  navbarIcons?: Array<iconDetails>;
}
