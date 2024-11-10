import { forwardRef, useContext, useMemo } from 'react';
import { dropdownDefaultCSSData, DropdownProps } from './dropdownTypes';

import './Dropdown.scss';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import classNames from 'classnames';
import Button from '../Button';

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options,
      handleOptionChange,
      searchedKeyword = '',
      dropdownPosition = {},
      zIndex,
      withSelectButton,
      onSelect,
    },
    ref
  ) => {
    const filteredOptions = options
      ? options.filter((option) =>
          option.label?.toLowerCase().includes(searchedKeyword.toLowerCase())
        )
      : [];
    const { verticalMargin, optionHeight, maxDropdownHeight } =
      dropdownDefaultCSSData;

    const topPosition = useMemo(() => {
      let calculatedDropdownHeight = Math.min(
        filteredOptions.length * optionHeight,
        maxDropdownHeight
      );

      if (filteredOptions.length < 5 && withSelectButton) {
        calculatedDropdownHeight += 32;
      }

      const isEnoughSpaceAvailable =
        dropdownPosition.fromBottom >=
        calculatedDropdownHeight + verticalMargin;
      const topPosition = isEnoughSpaceAvailable
        ? dropdownPosition.top
        : dropdownPosition.top -
          calculatedDropdownHeight -
          dropdownPosition.selectHeight -
          2 * verticalMargin;

      return topPosition;
    }, [filteredOptions.length, withSelectButton, dropdownPosition]);
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.currentTheme;
    return (
      <div
        role="listbox"
        ref={ref}
        className={classNames('ff-multiselect-dropdown-container', {
          [currentTheme || '']: true,
        })}
        style={{
          left: dropdownPosition.left,
          top: topPosition,
          width: dropdownPosition.width,
          zIndex,
        }}
      >
        <div
          className="ff-multiselect-options-wrapper"
          style={{ maxHeight: withSelectButton ? '128px' : '160px' }}
        >
          {filteredOptions.length === 0 ? (
            <div className="dropdown-option-container ">
              <p className="no-options">No Option</p>
            </div>
          ) : (
            filteredOptions.map((info) => (
              <div
                role="option"
                className={`dropdown-option-container`}
                key={info.label}
                onClick={() => handleOptionChange(info, !info.isChecked)}
              >
                <input type="checkbox" checked={info.isChecked} readOnly />
                <span className="dropdown-option-label">{info.label}</span>
              </div>
            ))
          )}
        </div>
        {withSelectButton && filteredOptions.length > 0 && (
          <div className="select-button-container">
            <Button label="Select" variant="tertiary" onClick={onSelect} />
          </div>
        )}
      </div>
    );
  }
);

export default Dropdown;
