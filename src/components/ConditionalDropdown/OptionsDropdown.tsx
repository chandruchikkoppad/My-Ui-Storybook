import type { FC, ReactNode } from 'react';
import { dynamicObject, OptionsDropdownProps } from './types';
import './ConditionalDropdown.scss';
import Typography from '../Typography';
import classNames from 'classnames';

const OptionsDropdown:FC<OptionsDropdownProps> = ({
    onSelectVariable,
    dropdownPosition,
    filteredOptions= [],
    position = 'relative',
    width = '300px',
    zIndex = 1000,
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
            : { width,zIndex }
        }
      >
        {filteredOptions?.map((option: dynamicObject): ReactNode => {
          return (
            <div
              className="ff-variable-option"
              onClick={() => onSelectVariable(option)}
              key={option?.id}
            >
              <Typography as="span" fontSize={14}>
                {option?.name}
              </Typography>
            </div>
          );
        })}
      </div>
    );
  };

export default OptionsDropdown;