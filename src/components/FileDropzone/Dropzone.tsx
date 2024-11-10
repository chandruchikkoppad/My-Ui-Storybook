import { FC } from 'react';
import classNames from 'classnames';
import './FileDropzone.scss';
import { DroppableProps } from './types';
import Button from '../Button';
import Typography from '../Typography';

const Dropzone: FC<DroppableProps> = ({
  icon,
  primaryLabel,
  secondaryLabel,
  buttonLabel,
  getRootProps,
  getInputProps,
  isDragActive = false,
}) => {
  return (
    <div
      {...getRootProps()}
      className={classNames('ff-file-dropzone', {
        'ff-file-dropzone--active': isDragActive,
      })}
    >
      <div className="ff-file-dropzone-content__icon">{icon}</div>
      <div className="ff-file-dropzone-content__labels">
        <Typography
          as="p"
          fontWeight="semi-bold"
          lineHeight="18px"
          textAlign="center"
          color={'var(--text-color)'}
        >
          {primaryLabel}
        </Typography>
        <Typography
          as="p"
          lineHeight="18px"
          textAlign="center"
          color={'var(--text-color)'}
        >
          {secondaryLabel}
        </Typography>
        <Button
          variant="primary"
          label={buttonLabel}
          className="choose-file-btn"
        >
          <input {...getInputProps()} />
        </Button>
      </div>
    </div>
  );
};

export default Dropzone;
