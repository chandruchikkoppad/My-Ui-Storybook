import './FileDropzone.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { RadioFilePreviewProps } from './types';
import Typography from '../Typography';
import { useRef } from 'react';

const RadioFilePreview: React.FC<RadioFilePreviewProps> = ({
  selectedFile,
  onFileRemoveClick,
  onFileReplaceClick,
  selectedRadioOption,
  setShowDrawer,
  setFileContent,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleReplaceClick = () => {
    if (selectedRadioOption?.value === 'Test Data') {
      setShowDrawer?.(true);
      return;
    }
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const readerFileData = new FileReader();
    if (file) {
      readerFileData.readAsText(file);
      readerFileData.onload = async () => {
        const fileContent = await readerFileData.result;
        if (setFileContent) {
          setFileContent(fileContent as string);
        }
      }
      onFileReplaceClick?.(file);
    }
  };
  return (
    <div className="ff-webservice-file-wrapper">
      <div className="ff-file-info">
        <>
          <Tooltip title={selectedFile}>
            <Typography
              lineHeight="18px"
              fontWeight="semi-bold"
              color={'var(--text-color)'}
              className="ff-webservice-file-name"
            >
              {selectedFile}
            </Typography>
          </Tooltip>
        </>
      </div>
      <>
        <Tooltip title="Remove">
          <Icon
            name="close"
            height={12}
            width={12}
            hoverEffect
            onClick={onFileRemoveClick}
          />
        </Tooltip>
      </>
      <>
        <Tooltip title="Replace">
          <Icon
            name="replace_file"
            color={'var(--icons-default-color)'}
            height={16}
            width={16}
            hoverEffect
            onClick={handleReplaceClick}
          />
        </Tooltip>
        <input
        type="file"
        ref={fileInputRef}
        className='ff-input-ref'
        onChange={handleFileChange}
      />
      </>
    </div>
  );
};

export default RadioFilePreview;
