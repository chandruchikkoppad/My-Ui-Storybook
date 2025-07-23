export interface OverviewModalProps {
  isOpen: boolean;
  isMaximized: boolean;
  width?: string;
  height?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  icons?: React.ReactNode;
  downloadFileIcon?: boolean;
  onClose: () => void;
  onMaximizeToggle?: () => void;
  showHeader: boolean;
  top?: string;
  overlay?: boolean;
  downloadHandler: () => void;
  zIndex?: number;
  customStyle?: React.CSSProperties;
  multiData?: Array<{
    machineName: string;
    scriptName: string;
    icon: string;
    src: string;
    alt: string;
    runId: string;
    currentScripts: number;
    totalScripts: number;
  }>;
  setSelectedVideo?: (video: {
    currentVideoData: {
      machineName: string;
      scriptName: string;
      icon: string;
      src: string;
      alt: string;
      runId: string;
      currentScripts: number;
      totalScripts: number;
      clickedAt: number;
    };
    allVideoData: Array<{
      machineName: string;
      scriptName: string;
      icon: string;
      src: string;
      alt: string;
      runId: string;
      currentScripts: number;
      totalScripts: number;
    }>;
  }) => void;
}
