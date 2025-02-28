export interface AttachMediaProps {
  /**
   * The image source to display.
   */
  mediaSrc: string;
  /**
   * Function triggered when the expand icon is clicked.
   */
  onExpandClick: () => void;
  /**
   * Function triggered when the delete icon is clicked.
   */
  onDeleteClick: (mediaSrc: string) => void;
  /**
   * Function triggered when the download icon is clicked.
   */
  onDownloadClick: () => void;
  /**
   * Custom height for the component.
   */
  height?: string;
  /**
   * Custom width for the component.
   */
  width?: string;

  mediaType: string;

  fileName?: string;

  fileId: string;
}
