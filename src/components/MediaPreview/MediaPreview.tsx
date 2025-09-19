import React, { useEffect, useState } from 'react';
import AttachMedia from '../AttachMedia';
import Modal from '../Modal';
import Icon from '../Icon';
import './MediaPreview.scss';
import { MediaPreviewProps } from './types';
import Tooltip from '../Tooltip';

const MediaPreview: React.FC<MediaPreviewProps> = ({
  onModalClose,
  MediaSrc,
  fileName,
  onDeleteClick,
  mediaType,
  fileId,
  thumbnailMediaSrc,
  isDelete = true,
  onExpandClick,
  onDownloadClick,
  isMediaIcon = false,
  previewOnly = false,
  iconName = 'video_preview',
  isDisabled = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const handleExpand = () => {
    setIsModalOpen(true);
    onExpandClick && onExpandClick(fileId);
  };
  const handleClose = () => {
    onModalClose?.();
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    onDownloadClick && onDownloadClick(fileId);
  };
  useEffect(() => {
    if (previewOnly) {
      setIsModalOpen(true);
    }
  }, [previewOnly]);

  return (
    <div>
      {!previewOnly &&
        (isMediaIcon ? (
          <Icon
            name={iconName}
            hoverEffect
            onClick={handleExpand}
            disabled={isDisabled}
          />
        ) : (
          <AttachMedia
            mediaSrc={MediaSrc}
            mediaType={mediaType}
            onDownloadClick={handleDownload}
            onDeleteClick={() => onDeleteClick?.(MediaSrc)}
            onExpandClick={handleExpand}
            fileName={fileName}
            fileId={fileId}
            thumbnailMediaSrc={thumbnailMediaSrc}
            isDelete={isDelete}
          />
        ))}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          isFooterDisplayed={false}
          isHeaderDisplayed={false}
          customWidth="1130px"
          customHeight="570px"
          zIndex={10000}
        >
          <div className="media-wrapper">
            <div className="ff-expand-icons">
              <Tooltip title="Download File">
                <Icon
                  name="download_file_icon"
                  onClick={handleDownload}
                  color="var(--icons-default-color)"
                  className="header-icons"
                />
              </Tooltip>
              <Tooltip title="Expand">
                <Icon
                  name="expand"
                  onClick={handleExpand}
                  color="var(--icons-default-color)"
                  className="header-icons"
                />
              </Tooltip>
              <Tooltip title="close">
                <Icon
                  name="close"
                  onClick={handleClose}
                  color="var(--icons-default-color)"
                  className="header-icons"
                />
              </Tooltip>
            </div>
            {mediaType === 'image' && (
              <img src={MediaSrc} alt="fileName" height="auto" width="auto" />
            )}
            {mediaType === 'video' && (
              <video
                src={MediaSrc}
                controls
                controlsList="nodownload"
                className="ff-video-preview"
                ref={videoRef}
                onCanPlay={() => {
                  if (videoRef.current) {
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                      playPromise.catch((error) => {
                        console.error('Autoplay failed:', error);
                      });
                    }
                  }
                }}
              />
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MediaPreview;
