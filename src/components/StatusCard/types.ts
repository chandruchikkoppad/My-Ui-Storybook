export interface CardProps {
  /** The icon to display in the card */
  icon: string;
  /** The status of the card (Passed, Failed, Warning, Skipped, Flaky) */
  status: 'Passed' | 'Failed' | 'Warning' | 'Skipped' | 'Flaky' | 'Total Defects' | 'Defect Density' | 'Open Defects' | 'Closed Defects' | 'Quality Score';
  /** The number displayed in the card */
  count: number | string;
  /** The description text displayed at the bottom of the card */
  text: string;
  /** Inline Styling */
  style?: React.CSSProperties;
  /** toggle update */
  handleToggleStatus?: (_status: boolean) => void;
  /** make Card Select false */
  resetToggle?: boolean;
  /** call back */
  onSelectedStatus?: (_status: string) => void;
}
