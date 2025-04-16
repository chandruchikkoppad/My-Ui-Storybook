type MediaPreviewProps = {
  MediaSrc: string;
  fileName?: string;
  onDeleteClick: (src: string) => void;
  mediaType: string;
  fileId: string;
  thumbnailMediaSrc?: string;
  isDelete?: boolean;
  onExpandClick?: (fileId?: string) => void;
  onDownloadClick?: (fileId?: string) => void;
  isMediaIcon?: boolean;
  iconName?: string;
};
