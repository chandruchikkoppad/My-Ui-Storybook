export interface MediaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay?: () => void;
  mediaType: 'image' | 'video';
  src: string;
  headerTitle: string;
  onDownload?: () => void;
  onExpand?: () => void;
}