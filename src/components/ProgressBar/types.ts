export interface ProgressBarProps {
  progressPercentage: number; // The current progress value (0-100)
  color?: string; // Custom color of the progress bar
  trackColor?: string; // Custom color of the track (empty part)
  height?: number;
  label?: string; // Optional label to display inside or outside the progress bar
  showPercentage?: boolean; // Whether to show the percentage inside the bar
  percentageFontSize?: number;
  percentageTextColor?: string;
  labelFontSize?: number; // Font size of the label
  labelTextColor?: string;
}
