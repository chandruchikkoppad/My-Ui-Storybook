import './FileDropzone.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { FilePreviewProps } from './types';
import Typography from '../Typography';

const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  error,
  onRemoveClick,
  onReplaceClick,
  onUploadFile,
  isUploadIcon,
  isRemoveDisabled = false,
}) => {
  return (
    <div key={file.name} className="ff-file-details__item">
      <div className="ff-file-info">
        <div className="ff-file-info__icon">
          <Icon
            name="file"
            color={'var(--icons-default-color)'}
            height={16}
            width={16}
          />
        </div>
        <div className="ff-file-info__name-wrapper">
          <Tooltip title={file?.name}>
            <Typography
              lineHeight="18px"
              fontWeight="semi-bold"
              color={'var(--text-color)'}
              className="ff-file-info__name-wrapper__name"
            >
              {file?.name}
            </Typography>
          </Tooltip>
          {error && (
            <Typography
              fontSize={8}
              color={'var(--error-light)'}
              lineHeight="12px"
              letterSpacing="0.5px"
            >
              {error}
            </Typography>
          )}
        </div>
      </div>
      <div className="ff-file-actions">
        <div className="ff-file-actions__icon-replace">
          <Tooltip title="Replace">
            <Icon
              name="replace_file"
              color={'var(--icons-default-color)'}
              height={16}
              width={16}
              hoverEffect
              onClick={() => onReplaceClick(file)}
            />
          </Tooltip>
        </div>
        <div className="ff-file-actions__icon-remove">
          <Tooltip disabled={isRemoveDisabled} title="Remove">
            <Icon
              disabled={isRemoveDisabled}
              name="close_pill"
              height={16}
              width={16}
              hoverEffect
              onClick={() => onRemoveClick(file)}
            />
          </Tooltip>
        </div>
        {isUploadIcon && (
          <div className="ff-file-actions__icon-remove">
            <Tooltip title="Upload">
              <Icon
                name="upload_pill"
                height={16}
                width={16}
                hoverEffect
                color={'var(--default-icon-color)'}
                onClick={() => {
                  onUploadFile && onUploadFile();
                }}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePreview;
