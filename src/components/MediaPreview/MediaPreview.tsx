import React, { useState } from 'react';
import AttachMedia from '../AttachMedia';
import Modal from '../Modal';
import Icon from '../Icon';
import './MediaPreview.scss';

const MediaPreview: React.FC<MediaPreviewProps> = ({
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
  iconName = 'video_preview',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleExpand = () => {
    setIsModalOpen(true);
    onExpandClick && onExpandClick(fileId);
  };
  const handleClose = () => setIsModalOpen(false);
  const handleDownload = () => {
    onDownloadClick && onDownloadClick(fileId);
  };
  return (
    <div>
      {isMediaIcon ? (
        <Icon name={iconName} hoverEffect onClick={handleExpand} />
      ) : (
        <AttachMedia
          mediaSrc={MediaSrc}
          mediaType={mediaType}
          onDownloadClick={handleDownload}
          onDeleteClick={() => onDeleteClick(MediaSrc)}
          onExpandClick={handleExpand}
          fileName={fileName}
          fileId={fileId}
          thumbnailMediaSrc={thumbnailMediaSrc}
          isDelete={isDelete}
        />
      )}

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
              <Icon
                name="download_file_icon"
                onClick={handleDownload}
                color="var(--icons-default-color)"
                className="header-icons"
              />
              <Icon
                name="close"
                onClick={handleClose}
                color="var(--icons-default-color)"
                className="header-icons"
              />
            </div>

            {mediaType === 'image' ? (
              <img src={MediaSrc} alt="fileName" />
            ) : (
              <video src={MediaSrc} controls controlsList="nodownload"></video>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MediaPreview;
