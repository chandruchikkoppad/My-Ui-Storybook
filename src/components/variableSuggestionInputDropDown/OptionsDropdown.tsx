import type { FC, ReactNode } from 'react';
import cx from 'classnames';
import { dynamicObject, OptionsDropdownProps } from './types';
import './VariableSuggestionInputDropDown.scss';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { truncateText } from '../../utils/truncateText/truncateText';

const OptionsDropdown:FC<OptionsDropdownProps> = ({
    onSelectVariable,
    dropdownPosition,
    filteredOptions= [],
    position = 'relative',
    width = '100%',
    zIndex,
    truncateTextValue=34,
  }): ReactNode => {
    return (
      <div
        className={cx(`ff-variable-dropdown ${position}`)}
        style={
          dropdownPosition
            ? {
                top: dropdownPosition.top + 30,
                left: dropdownPosition.left - 30,
                width,
                zIndex
              }
            : { width ,zIndex }
        }
      >
        {!checkEmpty(filteredOptions)? filteredOptions?.map((option: dynamicObject): ReactNode => {
          return (
            <div
              className="ff-variable-option"
              onClick={() => onSelectVariable(option)}
              key={option?.id}
            >
              <Typography as="span" fontSize={14}>
                {truncateText(option?.name,truncateTextValue)}
              </Typography>
            </div>
          );
        }) : (
          <div
              className="ff-variable-option"
            >
              <Typography as='div' children='No Option' fontSize={14} />
            </div>
          
        )}
      </div>
    );
  };

export default OptionsDropdown;