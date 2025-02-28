/**
 * Represents a single tab in the BrowserTabs component.
 */
export interface BrowserTab {
  /**
   * Unique identifier for the tab.
   */
  id: string;

  /**
   * Label text displayed on the tab.
   */
  label: string;

  /**
   * Optional component to be rendered when the tab is active.
   */
  component?: JSX.Element;

  /**
   * Name of the tab icon.
   */
  tabIcon?: string;
  /**
   * Optional URL for a dynamic icon.
   */
  tabIconSrc?: string;
}

/**
 * Props for the BrowserTabs component.
 */
export interface BrowserTabsProps {
  /**
   * An array of tab objects containing label, icon, and an optional component.
   */
  tabsData: BrowserTab[];

  /**
   * The ID of the currently active tab.
   */
  activeTabId: string;

  /**
   * Function to update the active tab state when a user clicks on a tab.
   * @param id - The unique identifier of the clicked tab.
   */
  onTabClick: (id: string) => void;
  /**
   * Function to add a new tab.
   */
  onTabAdd?: () => void;
  /**
   * Function to close a specific tab.
   * @param index - The index of the tab to be closed.
   */
  onTabClose?: (id: string) => void;
  /**
   * Minimum width for each tab (in pixels).
   */
  minTabWidth?: number;

  /**
   * Maximum width for each tab (in pixels).
   */
  maxTabWidth?: number;

  /**
   * Show the close button only for the active tab.
   */
  showCloseOnActive?: boolean;

  /**
   * Custom CSS class name to override default styles.
   */
  className?: string;
}
