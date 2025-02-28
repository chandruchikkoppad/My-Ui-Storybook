type MediaPreviewProps = {
  MediaSrc: string;
  fileName?: string;
  onDeleteClick: (src: string) => void;
  mediaType: string;
  fileId: string;
};
