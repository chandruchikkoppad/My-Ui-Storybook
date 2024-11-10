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
              name="replace"
              color={'var(--icons-default-color)'}
              height={16}
              width={16}
              onClick={() => onReplaceClick(file)}
            />
          </Tooltip>
        </div>
        <div className="ff-file-actions__icon-remove">
          <Tooltip title="Remove">
            <Icon
              name="remove"
              height={16}
              width={16}
              color={'var(--default-icon-color)'}
              onClick={() => onRemoveClick(file)}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
