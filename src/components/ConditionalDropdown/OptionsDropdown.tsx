import type { FC, ReactNode } from 'react';
import { dynamicObject, OptionsDropdownProps } from './types';
import './ConditionalDropdown.scss';
import Typography from '../Typography';
import classNames from 'classnames';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import Tooltip from '../Tooltip';

const OptionsDropdown: FC<OptionsDropdownProps> = ({
  onSelectVariable,
  dropdownPosition,
  filteredOptions = [],
  position = 'relative',
  width = '300px',
  zIndex = 1000,
  height = '160px',
  truncateTextValue = 34,
  isTruncateText = false,
}): ReactNode => {
  return (
    <div
      className={classNames('ff-variable-dropdown', position)}
      style={
        dropdownPosition
          ? {
              top: dropdownPosition.top + 30,
              left: dropdownPosition.left - 30,
              width,
              zIndex,
            }
          : { width, zIndex, height: height }
      }
    >
      {filteredOptions?.map((option: dynamicObject): ReactNode => {
        const displayText = isTruncateText
          ? truncateText(option?.name, truncateTextValue, 'pixel')
          : option?.name;

        const shouldShowTooltip = isTruncateText
          ? isTextTruncated(option?.name, truncateTextValue, 'pixel')
          : false;

        return (
          <div
            className="ff-variable-option"
            onClick={() => onSelectVariable(option)}
            key={option?.id}
          >
            {isTruncateText ? (
              <Tooltip title={shouldShowTooltip ? option?.name : ''}>
                <Typography>{displayText}</Typography>
              </Tooltip>
            ) : (
              <Typography>{displayText}</Typography>
            )}
          </div>
        );
      })}
      {filteredOptions?.length === 0 && (
        <div className="ff-variable-option .ff-variable-option-no-data ">
          <Typography as="span" fontSize={14}>
            No Option
          </Typography>
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
