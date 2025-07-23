import React, { useContext, useRef, forwardRef } from 'react';
import { dropdownDefaultCSSData, DropdownProps } from './types';
import './Dropdown.scss';
import { checkEmpty } from '../../../utils/checkEmpty/checkEmpty';
import Typography from '../../Typography';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import classNames from 'classnames';
import {
  getLabel,
  getValue,
} from '../../../utils/getSelectOptionValue/getSelectOptionValue';
import useClickOutside from '../../../hooks/useClickOutside';
import Icon from '../../Icon';
import Button from '../../Button';
import { useMergeRefs } from '../../../hooks/useMergeRefs';
import TruncatedTooltip from '../../TruncatedTooltip';
const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options = [],
      optionZIndex = 10000000,
      dropdownPosition,
      labelAccessor,
      onSelectOptionSelector,
      onSelectBlur,
      inputRef,
      selectArrowRef,
      heightFromTop,
      selectedOption,
      valueAccessor,
      showIcon = false,
      customReccurenece = true,
      onCancelModal = () => {},
      onSaveModal = () => {},
      recurrence = false,
      modalJSXProps = <></>,
      showArrowIcon = true,
      showClearIcon = false,
      noResultsMessage,
    },
    ref
  ) => {
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.currentTheme;

    const customRecurrenceOnBlur = customReccurenece ? () => {} : onSelectBlur;

    const optionsWrapperRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(optionsWrapperRef, ref);
    useClickOutside(optionsWrapperRef, customRecurrenceOnBlur, [
      inputRef,
      selectArrowRef,
    ]);

    const { positionX, positionY, fromBottom, width } = dropdownPosition;
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
        const dynamicHeightFromTop =
          heightFromTop <= 25
            ? heightFromTop + 7
            : heightFromTop <= 32
            ? heightFromTop
            : heightFromTop <= 40
            ? heightFromTop - 4
            : heightFromTop <= 50
            ? heightFromTop - 9
            : heightFromTop - 15;
        return {
          left: positionX,
          top: positionY + dynamicHeightFromTop - 10,
          width: showIcon
            ? width + 70
            : showArrowIcon || showClearIcon
            ? width + 32
            : width + 10,
          zIndex: optionZIndex,
          marginLeft: showIcon ? '-31px' : '-2px',
        };
      }
      return {
        zIndex: optionZIndex,
        left: positionX,
        width: showIcon ? width + 70 : showArrowIcon ? width + 32 : width + 10,
        top:
          positionY - selectInputHeight - dropdownContainerHeight + 4 * margin,
        marginLeft: showIcon ? '-29px' : '-2px',
      };
    };

    const dropdownWidth = updateDropdownPosition().width;

    const basePadding = 16;
    const iconPadding = showIcon ? 32 : 0;
    // If custom recurrence modal is shown, the dropdown is likely split into two columns.
    const effectiveContentWidth = customReccurenece
      ? (typeof dropdownWidth === 'number' ? dropdownWidth / 2 : 0) -
        basePadding -
        iconPadding
      : dropdownWidth - basePadding - iconPadding;
    const getOptionLabel = (label: any, icon: string, tooltipWidth: number) => {
      if (React.isValidElement(label)) {
        return label;
      }
      return (
        <div className="ff-select-dropdown-option-wrapper">
          {showIcon && (
            <Icon name={icon} className="ff-select-dropdown__icon" />
          )}
          <Typography
            as="div"
            lineHeight="25px"
            color="var(--ff-select-text-color)"
            className={classNames('ff-select-dropdown-text', {
              'ff-select-dropdown-icon-container': showIcon,
            })}
          >
            <TruncatedTooltip title={label} width={tooltipWidth} />
          </Typography>
        </div>
      );
    };

    const onHandleCancelModal = () => {
      onCancelModal();
    };

    const onHandleSaveModal = () => {
      onSelectBlur();
      onSaveModal();
    };

    return (
      <div
        className={classNames('ff-select-dropdown-wrapper', currentTheme, {
          'ff-select-dropdown-modal-wrapper': recurrence,
          'ff-select-dropdown-mini-modal-wrapper': customReccurenece,
        })}
        ref={mergedRef}
        style={updateDropdownPosition()}
      >
        <div
          className={classNames({
            'ff-select-label-minimodal-wrapper': customReccurenece,
          })}
        >
          {!checkEmpty(options) ? (
            [
              ...options.filter(
                (option) => getValue(option, valueAccessor) === selectedOption
              ),
              ...options.filter(
                (option) => getValue(option, valueAccessor) !== selectedOption
              ),
            ].map((option, index) => (
              <div
                className={classNames(
                  'ff-select-dropdown-option',
                  {
                    'ff-select-dropdown-option__selected':
                      getValue(option, valueAccessor) === selectedOption,
                  },
                  {
                    'ff-select-dropdown-option__disabled':
                      'disable' in option && option['disable'],
                  },
                  currentTheme
                )}
                key={index}
                onClick={() => {
                  if ('disable' in option && option['disable']) return;
                  onSelectOptionSelector(option);
                }}
              >
                {getOptionLabel(
                  getLabel(option, labelAccessor),
                  'iconName' in option && option['iconName'],
                  effectiveContentWidth
                )}
              </div>
            ))
          ) : (
            <Typography
              textAlign="center"
              as="div"
              lineHeight="32px"
              color="var(--ff-select-text-color)"
              className={classNames('ff-select-no-option', currentTheme)}
            >
              {noResultsMessage || 'No Result Found'}
            </Typography>
          )}
        </div>

        {customReccurenece && (
          <div className="ff-select-mini-modal-wrapper" id="ff-select-mini-id">
            <div className="ff-select-modal-wrapper">
              {<>{modalJSXProps}</>}
              <div className="ff-select-mini-modal-footer">
                <Button
                  label="Cancel"
                  variant="tertiary"
                  onClick={onHandleCancelModal}
                />
                <Button
                  label="Save"
                  variant="secondary"
                  onClick={onHandleSaveModal}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Dropdown;
