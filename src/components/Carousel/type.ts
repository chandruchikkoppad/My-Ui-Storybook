export interface CarouselItem {
  /** Source URL for image or video */
  src: string;
  /** Alt text for images */
  alt?: string;
  /** Display name for the slide */
  icon: string;
  /** Formatted time string, e.g. "20:12" */
  currentScripts: number;
  totalScripts: number;
  machineName: string;

  scriptName: string;
  /** Allow additional arbitrary properties without TS errors */
  [key: string]: any;

  /**
   * Optional click handler for collapse action.
   */
  runId: string;
}

export interface CarouselProps {
  /** Array of carousel items */
  items: CarouselItem[];
  /** Optional click handler for collapse action */
  onCollapseClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  initialRunId?: string;
  height?: string | number;
}
