export interface TabConfig {
    /**
     * This property specifies the name of the tab.
     * It is used to uniquely identify each tab.
     */
    name: string;
    /**
     * This property specifies the name of the icon to be displayed within the tab.
     */
    icon: string;
    /**
     * This property specifies the tooltip text to be displayed when hovering over the tab.
     */
    tooltip: string;
  }
  
  /**
   * This interface defines the props for the `SwitchButton` component.
   */
  export interface SwitchButtonProps {
    /**
     * This callback function is triggered when a tab is clicked.
     * It receives the name of the selected tab as an argument.
     */
    handleClick: (selected: string) => void;
  
    /**
     * This property specifies the currently selected tab by name.
     */
    selected: string;
  
    /**
     * This property defines the list of tabs to be displayed within the `SwitchButton` component.
     * Each tab is represented by the `TabConfig` interface.
     */
    tabList: TabConfig[];
  }
  