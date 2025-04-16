
export interface CarouselProps {
  /**
   * Array of items to display in the carousel. Each item can be an image or a video.
   */
  items: { type: 'image' | 'video'; src: string }[];

  /**
   * Name of the slide to display.
   */
  slideName: string;

  /**
   * Name of the icon to be shown along with the slide.
   */
  slideIconName: string;

  /**
   * Name of the icon used for collapse action.
   */
  collapseIconName?: string;

  /**
   * Optional click handler for collapse action.
   */
  onCollapseClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;

  // * Text representing the time in a formatted string
  timeText: string;

  /**
   * Current script number being shown or played.
   */
  currentScripts: number;

  /**
   * Total number of scripts available.
   */
  totalScripts: number;
}
