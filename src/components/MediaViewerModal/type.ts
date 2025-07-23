export interface MediaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay?: () => void;
  mediaType: 'video' | 'image';
  src: string;
  headerTitle?: string;
  onDownload?: () => void;
  onExpand?: () => void;
  showHeader?: boolean;
  showDownload?: boolean;
  showExpand?: boolean;
  width?: string;
  height?: string;
  showControls?: boolean;
  customStyle?: React.CSSProperties;
  overlay?: boolean;
  children?: React.ReactNode;
}
