import { FC } from 'react';
import classNames from 'classnames';
import './FileDropzone.scss';
import { DroppableProps } from './types';
import Button from '../Button';
import Typography from '../Typography';
import RadioGroup from '../RadioGroup';
import RadioFilePreview from './RadioFilePreview';

const Dropzone: FC<DroppableProps> = ({
  icon,
  primaryLabel,
  secondaryLabel,
  buttonLabel,
  getRootProps,
  getInputProps,
  isDragActive = false,
  height = 188,
  isWebServiceFileDropZone = false,
  selectedRadioOption,
  radioOptions,
  handleOptionChange,
  selectedFile,
  setSelectedFile,
  handleRemoveFile,
  isDisable,
  setShowDrawer,
  setFileContent,
}) => {
  const isWebServiceFile = selectedFile?.name && isWebServiceFileDropZone;
  return (
    <div
      {...getRootProps()}
      className={classNames('ff-file-dropzone', {
        'ff-file-dropzone--active': isDragActive,
        'ff-file-dropzone--webservice-file': isWebServiceFile,
        'ff-file-dropzone--webservice-container': isWebServiceFileDropZone,
        'ff-disable-file-dropzone-wrapper': isDisable,
      })}
      style={{ height: height }}
    >
      {isWebServiceFile ? (
        <RadioFilePreview
          selectedFile={selectedFile.name}
          onFileRemoveClick={handleRemoveFile}
          onFileReplaceClick={setSelectedFile}
          setSelectedFile={setSelectedFile}
          selectedRadioOption={selectedRadioOption}
          setShowDrawer={setShowDrawer}
          setFileContent={setFileContent}
        />
      ) : (
        <>
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
            {isWebServiceFileDropZone ? (
              <div className="ff-radio-group-wrapper">
                <Typography fontWeight="semi-bold">
                  {' '}
                  Choose file from{' '}
                </Typography>
                <RadioGroup
                  name="radio_btn_file_dropzone"
                  options={
                    radioOptions ?? [
                      { label: 'Default Label', value: 'default_value' },
                    ]
                  }
                  selectedValue={selectedRadioOption?.value}
                  onChange={handleOptionChange}
                />
              </div>
            ) : (
              <Button
                variant="primary"
                label={buttonLabel}
                className="choose-file-btn"
                disabled={isDisable}
              >
                <input
                  {...(isDisable
                    ? { style: { cursor: 'not-allowed' }, disabled: true }
                    : getInputProps())}
                />
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropzone;
