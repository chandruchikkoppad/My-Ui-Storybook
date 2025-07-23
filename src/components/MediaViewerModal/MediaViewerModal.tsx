import React, { useRef, useState, useEffect, useCallback } from 'react';
import './MediaViewerModal.scss';
import { MediaViewerModalProps } from './type';
import Icon from '../Icon';
import OverviewModal from '../OverviewModal';
import Typography from '../Typography';

const MediaViewerModal: React.FC<MediaViewerModalProps> = ({
  isOpen,
  onClose,
  isPlaying,
  onTogglePlay,
  mediaType,
  src,
  headerTitle,
  onDownload,
  onExpand,
  showHeader = true,
  showDownload = true,
  showExpand = true,
  width = '800px',
  height = '432px',
  showControls = true,
  customStyle,
  overlay = true,
  children, 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (mediaType === 'video' && videoRef.current && !children) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, mediaType, children]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    setCurrentTime(0);
    onTogglePlay?.();
  }, [onTogglePlay]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSliderChange = useCallback((newTime: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  const handleSliderClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      handleSliderChange(newTime);
    },
    [duration, handleSliderChange]
  );

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  if (!isOpen) return null;

  return (
    <OverviewModal
      isOpen={isOpen}
      onClose={onClose}
      isMaximized={false}
      showHeader={showHeader}
      overlay={overlay}
      downloadHandler={() => {}}
      customStyle={customStyle}
      header={
        <div className="ff-header-content">
          <Icon width={23} height={23} name="automatic_locator" />
          <Typography>
            <span className="ff-header-title">{headerTitle}</span>
          </Typography>
        </div>
      }
      icons={<Icon width={33} height={33} name="close" onClick={onClose} />}
      width={width}
      height={height}
      zIndex={999}
    >
      <div className="ff-video-wrapper">
        {children ? (
          children
        ) : mediaType === 'video' ? (
          <video
            ref={videoRef}
            src={src}
            className="ff-media-video"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleVideoEnd}
          />
        ) : (
          <img src={src} alt="Preview" className="ff-media-image" />
        )}
        <div className="ff-top-right-icons">
          {showDownload && (
            <Icon
              width={20}
              height={23}
              name="download_file"
              color="white"
              onClick={onDownload}
            />
          )}
          {showExpand && (
            <Icon
              width={20}
              height={23}
              name="expand_icon"
              color="white"
              onClick={onExpand}
            />
          )}
        </div>

        {mediaType === 'video' && showControls && !children && (
          <div className="ff-media-controls">
            <button onClick={onTogglePlay} className="ff-play-pause-btn">
              {isPlaying ? (
                <Icon
                  width={35}
                  height={35}
                  name="pause_button"
                  color="white"
                />
              ) : (
                <Icon width={35} height={35} name="play_button" color="white" />
              )}
            </button>
            <div className="ff-progress-bar">
              <span className="ff-current-time">{formatTime(currentTime)}</span>
              <div className="ff-custom-slider" onClick={handleSliderClick}>
                <div className="ff-slider-track">
                  <div
                    className="ff-slider-progress"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  <div
                    className="ff-slider-thumb"
                    style={{ left: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              <span className="ff-total-time">{formatTime(duration)}</span>
            </div>
          </div>
        )}
      </div>
    </OverviewModal>
  );
};

export default MediaViewerModal;
