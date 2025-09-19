import type { FC, ReactNode } from 'react';
import cx from 'classnames';
import { dynamicObject, OptionsDropdownProps } from './types';
import './VariableSuggestionInputDropDown.scss';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Tooltip from '../Tooltip';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';

const OptionsDropdown: FC<OptionsDropdownProps> = ({
  onSelectVariable,
  dropdownPosition,
  filteredOptions = [],
  position = 'relative',
  width = '100%',
  zIndex,
  truncateTextValue = 34,
}): ReactNode => {
  return (
    <div
      className={cx(`ff-variable-dropdown-container ${position}`)}
      style={
        dropdownPosition
          ? {
              top: dropdownPosition.top + 30,
              left: dropdownPosition.left - 30,
              width,
              zIndex,
            }
          : { width, zIndex }
      }
    >
      {!checkEmpty(filteredOptions) ? (
        filteredOptions?.map((option: dynamicObject): ReactNode => {
          return (
            <div
              className="ff-variable-option"
              onMouseDown={() => onSelectVariable(option)}
              key={option?.id}
            >
              <Tooltip
                title={
                  isTextTruncated(option?.name, truncateTextValue, 'pixel')
                    ? option?.name
                    : ''
                }
              >
                <Typography>
                  {truncateText(option?.name, truncateTextValue, 'pixel')}
                </Typography>
              </Tooltip>
            </div>
          );
        })
      ) : (
        <div className="ff-variable-option no-data">
          <Typography as="div" children="No Option" fontSize={14} />
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
