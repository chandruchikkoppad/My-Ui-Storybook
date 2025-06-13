import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';
import Typography from '../Typography';
import { OverviewModalProps } from './types';
import './overviewModal.scss';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  onClose,
  isMaximized,
  width = '800px',
  height = '432px',
  header,
  children,
  zIndex = 999,
  icons,
  downloadFileIcon = false,
  showHeader = true,
  top = '0',
  overlay = true,
  downloadHandler,
  multiData = [],
  setSelectedVideo,
}) => {
  const [videos, setVideos] = useState(multiData);

  useEffect(() => {
    if (!checkEmpty(multiData)) {
      setVideos(multiData);
    }
  }, [multiData]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEmptyData = checkEmpty(videos);
  const singleClass = videos.length === 1 ? ' image-grid--single' : '';

  const handleVideoEnd = (index: number) => {
    setVideos((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (updated.length === 0) {
        onClose?.();
      }
      return updated;
    });
  };

  const modalContent = (
    <div
      className="ff-overview-modal-overlay"
      style={{
        background: overlay ? 'var(--default-icon-color)' : undefined,
        zIndex,
      }}
    >
      <div
        className={classNames('ff-overview-modal-container', {
          'ff-overview-maximized-container': isMaximized,
        })}
        style={
          {
            '--modal-width': width,
            '--modal-height': height,
            '--modal-top': top,
          } as React.CSSProperties
        }
      >
        {showHeader && (
          <div className="ff-overview-modal-header">
            {header}
            <div className="ff-overview-modal-icons">
              {downloadFileIcon && (
                <Icon
                  width={16}
                  height={16}
                  name="download_file"
                  onClick={downloadHandler}
                />
              )}
              {icons}
            </div>
          </div>
        )}

        <div
          className={classNames('ff-overview-modal-body', {
            'ff-overview-modal-body--centered': isEmptyData,
          })}
        >
          {!isEmptyData ? (
            <div className={`image-grid${singleClass}`}>
              {videos.map((video, idx) => (
                <div className="ff-overview-modal-image-item" key={idx}>
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                    onEnded={() => handleVideoEnd(idx)}
                    className="ff-overview-modal-video"
                  >
                    Your browser does not support the video tag.
                  </video>

                  <div className="ff-overview-modal-image-name">
                    <Icon name={video.icon} />
                    <Typography>
                      {video.machineName} - {video.scriptName}
                    </Typography>
                  </div>

                  <Icon
                    width={16}
                    height={16}
                    className="ff-overview-modal-image-action"
                    name="maximize_new"
                    onClick={() => {
                      const clickedVideo = {
                        currentVideoData: { ...video, clickedAt: Date.now() },
                        allVideoData: videos,
                      };
                      setSelectedVideo?.(clickedVideo);
                    }}
                  />

                  <Typography
                    color="var(--ff-chip-bg)"
                    className="ff-overview-modal-scripts"
                  >
                    {video.currentScripts}/{video.totalScripts}
                  </Typography>
                </div>
              ))}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default OverviewModal;
