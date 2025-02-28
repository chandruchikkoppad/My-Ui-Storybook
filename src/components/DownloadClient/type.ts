export interface DownloadClientProps {
  /**
   * Close dialog function to close the modal dialog
   **/
  onClose: () => void;

  /**
   * distance between modal dialog and parent from top
   **/
  top?: string;

  /**
   * distance between modal dialog and parent from left
   **/
  left?: string;

  /**
   * To be used custom properties for the modal dialog through className
   **/
  className?: string;

  /**
   * Description of the dialog box
   **/
  description?: string;

  /**
   * Download button function
   **/
  onClick?: (os: string) => void;

  optionZIndex?: number;
}
