export interface AvatarProps {
    /**
   * This property determines the size of the avatar. It can be set to 'small', 'medium', or 'large'.
   */
  variant?: 'small' | 'medium' | 'large';
  /**
   * This property allows you to customize the background color of the avatar.
   */
  backgroundColor?: string;
  /**
   * This property specifies the name of the icon to be displayed within the avatar.
   */
  iconName?: string;
  /**
   * This property allows you to customize the color of the icon within the avatar.
   */
  iconColor?: string;
  /**
   * This property allows you to set a custom size for the avatar, overriding the default size specified by the variant property.
   */
  
  customAvatarSize?: number;
  /**
   * This property allows you to set a custom size for the icon within the avatar.
   */
  customIconSize?: number;
   /**
   * This property specifies the label to display inside the avatar, used as an alternative to the icon.
   */
   label?: string;
   /**
    * This property allows you to customize the font size of the label inside the avatar.
    */
   labelFontSize?: string;
}
