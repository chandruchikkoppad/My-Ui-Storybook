import React from 'react';
import './AttachMedia.scss';
import Icon from '../Icon/Icon';
import Tooltip from '../Tooltip';
import { AttachMediaProps } from './types';
import Typography from '../Typography';

const AttachMedia: React.FC<AttachMediaProps> = ({
  mediaSrc,
  fileId,
  onExpandClick,
  onDeleteClick,
  onDownloadClick,
  height = '75px',
  width = '79px',
  fileName,
}) => {
  const handleDeleteClick = () => {
    if (onDeleteClick) {
      onDeleteClick(fileId);
    }
  };
  return (
    <div className="ff-attach-media-container" style={{ height, width }}>
      <div className="ff-media-wrapper" style={{ height, width }}>
        <img src={mediaSrc} alt="Attached" />
        <div className="ff-hover-icons">
          <div className="ff-top-icons">
            <div className="ff-icon-container">
              <Tooltip title="Download File" placement="bottom">
                <Icon
                  name="download_file_icon"
                  height={10}
                  width={10}
                  onClick={onDownloadClick}
                  color="var(--icons-default-color)"
                />
              </Tooltip>
            </div>
            <div className="ff-icon-container">
              <Tooltip title="Delete" placement="bottom">
                <Icon
                  name="delete"
                  height={10}
                  width={10}
                  color="var(--ff-delete-button-attachment)"
                  onClick={handleDeleteClick}
                />
              </Tooltip>
            </div>
          </div>
          <div className="ff-expand-icon-container">
            <Tooltip title="Maximize" placement="bottom">
              <Icon
                name="expand_icon"
                height={16}
                width={16}
                onClick={onExpandClick}
              />
            </Tooltip>
          </div>
        </div>
        <Typography
          color="var(--text-area-default-color)"
          fontWeight="medium"
          className="ff-media-text"
        >
          {fileName}
        </Typography>
      </div>
    </div>
  );
};

export default AttachMedia;
