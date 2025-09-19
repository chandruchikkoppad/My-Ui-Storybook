import './FileDropzone.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { RadioFilePreviewProps } from './types';
import Typography from '../Typography';
import { useEffect, useRef, useState } from 'react';
import { truncateText } from '../../utils/truncateText/truncateText';

const RadioFilePreview: React.FC<RadioFilePreviewProps> = ({
  selectedFile,
  onFileRemoveClick,
  onFileReplaceClick,
  selectedRadioOption,
  setShowDrawer,
  setFileContent,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [maxTextWidth, setMaxTextWidth] = useState<number>();

  useEffect(() => {
    if (wrapperRef.current) {
      const fullWidth = wrapperRef.current.offsetWidth;
      setMaxTextWidth(fullWidth);
    }
  }, []);

  const getFileExtension = () => {
    if (!selectedFile) return '';
    const lastDotIndex = selectedFile.lastIndexOf('.');
    if (lastDotIndex === -1) return '';
    return selectedFile.substring(lastDotIndex);
  };

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
      };
      onFileReplaceClick?.(file);
    }
  };
  return (
    <div className="ff-webservice-file-wrapper" ref={wrapperRef}>
      <div className="ff-file-info">
        <Tooltip title={selectedFile}>
          <Typography
            lineHeight="18px"
            fontWeight="semi-bold"
            color={'var(--text-color)'}
            className="ff-webservice-file-name"
          >
            {truncateText(selectedFile, maxTextWidth, 'pixel')}
          </Typography>
        </Tooltip>
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
          className="ff-input-ref"
          onChange={handleFileChange}
          accept={getFileExtension()}
        />
      </>
    </div>
  );
};

export default RadioFilePreview;
