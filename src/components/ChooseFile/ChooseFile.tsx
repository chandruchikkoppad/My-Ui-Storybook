import { useLayoutEffect, useRef, useState, type FC } from 'react';
import { ChooseFileProps } from './types';
import Button from '../Button';
import Tooltip from '../Tooltip';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';

const ChooseFile: FC<ChooseFileProps> = ({
  variant = 'primary',
  size = 'small',
  onClick,
  label = 'Choose File',
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  iconName,
  isChooseFile = false,
  buttonWidth = 'auto',
  buttonHeight = 'auto',
  selectedFile = {},
  handleCloseIcon,
  isMandatory = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const END_PADDING_RESERVE = 10;

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      setWidth(
        wrapperRef.current.getBoundingClientRect().width - END_PADDING_RESERVE
      );
    }
  }, [buttonWidth]);

  const text = selectedFile?.name || label;
  const truncatedText = width ? truncateText(text, width, 'pixel') : text;
  const showTooltip = width ? isTextTruncated(text, width, 'pixel') : false;
  return (
    <div ref={wrapperRef} style={{ width: buttonWidth }}>
      <Tooltip title={showTooltip ? text : ''}>
        <Button
          variant={variant}
          label={truncatedText}
          type={type}
          onClick={onClick}
          buttonWidth={buttonWidth}
          buttonHeight={buttonHeight}
          isChooseFile={isChooseFile}
          size={size}
          disabled={disabled}
          className={className}
          iconName={iconName}
          style={style}
          iconPosition="right"
          selectedFile={selectedFile}
          handleCloseIcon={handleCloseIcon}
          isMandatory={isMandatory}
        />
      </Tooltip>
    </div>
  );
};

export default ChooseFile;
