export interface Tab {
  /**
   * Unique identifier for the tab, for handling click events.
   */
  id: string;
  /**
   * Display label for the tab.
   */
  label: string;
  /**
   * The content to display when this tab is active.
   */
  component?: JSX.Element | React.ReactNode;
  /**
   * Optional property to indicate if the tab is disabled.
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * An array of tab objects containing label, component, and optional disabled status.
   */
  tabsData: { label: string; component?: JSX.Element; disabled?: boolean }[];
  /**
   * Defines the styling variant of the tabs.
   */
  variant?: 'default' | 'capsule';
  /**
   * activeTabId : The ID of the currently active tab.
   */
  activeTabId: string;

  /**
   * onTabClick : function updates the active tab state when a user interacts with the tabs,
   */
  onTabClick: (id: string) => void;
  /**
   * noBorder:true , removes the outer border from tabs
   */
  noBorder?: boolean;
}
