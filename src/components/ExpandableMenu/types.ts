export interface ExpandableMenuProps {
  /**
   * mandatory | label for the expandable menu
   */
  label: string;
  /**
   * optional | Icon to describe direction of expansion
   */
  icon?: React.ReactNode;
  /**
   * optional | variant of the menu
   */
  variant?: 'primary';
  /**
   * optional | size of the expandable menu
   */
  size?: 'medium';
  /**
   * optional | disable to disable the menu and prevent click events but not hover event
   */
  disable?: boolean;
  /**
   * Mandatory |  sub menus to be shown inside  expandable menu
   */
  subMenus: string[];
  /**
   * optional | selected sub menu of the expandable menu
   */
  selectedMenu?: string;
  /**
   * optional | onSubMenuClick event to perform action on click of sub menu
   */
  onSubMenuClick?: (subChip: any) => void;
}
