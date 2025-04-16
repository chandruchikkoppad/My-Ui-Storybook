import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';
import Typography from '../Typography';
import { OverviewModalProps } from './types';
import './overviewModal.scss';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
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

  if (!isOpen) return null;

  const isEmptyData = checkEmpty(multiData);

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
            <div className="image-grid">
              {multiData.map((video, idx) => (
                <div className="ff-overview-modal-image-item" key={idx}>
                  <video src={video.src} autoPlay muted playsInline>
                    Your browser does not support the video tag.
                  </video>

                  <div className="ff-overview-modal-image-name">
                    <Icon name={video.icon} />
                    <Typography>{video.name}</Typography>
                  </div>

                  <div className="ff-overview-modal-image-time">
                    <Icon name="clock_new" />
                    <Typography color="var(--ff-chip-bg)">
                      {video.time}
                    </Typography>
                  </div>

                  <Icon
                    width={16}
                    height={16}
                    className="ff-overview-modal-image-action"
                    name="maximize_new"
                    onClick={() => {
                      const clickedVideo = {
                        ...video,
                        clickedAt: Date.now(),
                      };
                      setSelectedVideo?.(clickedVideo);
                    }}
                  />

                  <Typography
                    color="var(--ff-chip-bg)"
                    className="ff-overview-modal-scripts"
                  >
                    {video.scripts}
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
