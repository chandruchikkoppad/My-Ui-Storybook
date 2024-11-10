import { useContext, useRef } from 'react';
import { DropDownListProps, dropdownDefaultCSSData } from './dropdownTypes';
import useClickOutside from '../../../../hooks/useClickOutside';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import './Dropdown.scss';
import Typography from '../../../Typography';
import ffid from '../../../../utils/ffID/ffid';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';
import classNames from 'classnames';

const Dropdown = ({
  onSelectBlur,
  onSelectOptionSelector,
  dropdownPosition,
  options = [],
  optionZIndex = 100,
  inputRef,
}: DropDownListProps) => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(optionsWrapperRef, onSelectBlur, [inputRef]);

  const { positionX, positionY, width, fromBottom } = dropdownPosition;
  const { margin, optionHeight, selectInputHeight, dropDownWrapperPadding } =
    dropdownDefaultCSSData;

  const updateDropdownPosition = () => {
    let dropdownContainerHeight;

    if (checkEmpty(options)) {
      dropdownContainerHeight = 32 + 2 * dropDownWrapperPadding;
    } else if (options?.length > 5) {
      dropdownContainerHeight = 160;
    } else {
      dropdownContainerHeight =
        options.length * optionHeight + 2 * dropDownWrapperPadding;
    }

    if (fromBottom > dropdownContainerHeight + margin) {
      return {
        left: positionX,
        top: positionY,
        width: width,
        zIndex: optionZIndex,
      };
    }
    return {
      zIndex: optionZIndex,
      left: positionX,
      width: width,
      top: positionY - selectInputHeight - dropdownContainerHeight - margin,
    };
  };

  return (
    <div className="ff-select-dropdown-wrapper">
      <div
        ref={optionsWrapperRef}
        // inline css required due to multiple overlay scenarios are present
        style={updateDropdownPosition()}
        className={classNames('ff-select-options-wrapper', currentTheme)}
      >
        {!checkEmpty(options) ? (
          options.map((option) => (
            <Typography
              key={ffid()}
              as="div"
              lineHeight="30px"
              className={classNames('ff-select-option', currentTheme)}
              color="var(--ff-select-text-color)"
              onClick={() => onSelectOptionSelector(option)}
            >
              {option.label}
            </Typography>
          ))
        ) : (
          <Typography
            textAlign="center"
            lineHeight="32px"
            as="p"
            color="var(--ff-select-text-color)"
            className="ff-select-no-option"
          >
            No Results found
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
