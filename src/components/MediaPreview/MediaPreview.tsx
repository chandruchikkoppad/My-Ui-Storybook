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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleExpand = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = MediaSrc;
    downloadLink.download = fileName || 'download';
    downloadLink.click();
  };
  return (
    <div>
      <AttachMedia
        mediaSrc={MediaSrc}
        mediaType={mediaType}
        onDownloadClick={handleDownload}
        onDeleteClick={() => onDeleteClick(MediaSrc)}
        onExpandClick={handleExpand}
        fileName={fileName}
        fileId={fileId}
      />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          isFooterDisplayed={false}
          isHeaderDisplayed={false}
          customWidth="666px"
          customHeight="366px"
          zIndex={10000}
        >
          <div className="ff-expand-icons">
            <Icon
              name="download_file_icon"
              onClick={handleDownload}
              color="var(--icons-default-color)"
              hoverEffect
            />
            <Icon
              name="close"
              onClick={handleClose}
              color="var(--icons-default-color)"
              hoverEffect
            />
          </div>

          {mediaType === 'image' ? (
            <img
              src={MediaSrc}
              alt="fileName"
              height={'366px'}
              width={'666px'}
            />
          ) : (
            <video
              src={MediaSrc}
              controls
              height={'366px'}
              width={'666px'}
              controlsList="nodownload"
            ></video>
          )}
        </Modal>
      )}
    </div>
  );
};

export default MediaPreview;
