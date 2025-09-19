import React, { useContext, useRef, forwardRef, useMemo } from 'react';
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
import { FixedSizeList } from 'react-window';

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
      searchedIcon = '',
      dropDownHeight = 160,
      isCustomButtonDisabled = false,
    },
    ref
  ) => {
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.currentTheme;
    const { optionHeight, dropDownWrapperPadding } = dropdownDefaultCSSData;

    const customRecurrenceOnBlur = customReccurenece ? () => {} : onSelectBlur;

    const optionsWrapperRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(optionsWrapperRef, ref);
    useClickOutside(optionsWrapperRef, customRecurrenceOnBlur, [
      inputRef,
      selectArrowRef,
    ]);

    const { positionX, positionY, fromBottom, width } = dropdownPosition;
    const { margin, selectInputHeight } = dropdownDefaultCSSData;

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
          width:
            showIcon && !checkEmpty(searchedIcon)
              ? width + 70
              : showArrowIcon || showClearIcon
              ? width + 32
              : width + 10,
          zIndex: optionZIndex,
          marginLeft: showIcon && !checkEmpty(searchedIcon) ? '-31px' : '-2px',
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

    const positionStyle = updateDropdownPosition();
    const dropdownWidth = positionStyle.width;

    const basePadding = 16;
    const iconPadding = showIcon ? 32 : 0;
    const effectiveContentWidth = customReccurenece
      ? (typeof dropdownWidth === 'number' ? dropdownWidth / 2 : 0) -
        basePadding -
        iconPadding
      : dropdownWidth - basePadding - iconPadding;

    const sortedOptions = useMemo(() => {
      if (checkEmpty(options)) return [];
      return [
        ...options.filter(
          (option) => getValue(option, valueAccessor) === selectedOption
        ),
        ...options.filter(
          (option) => getValue(option, valueAccessor) !== selectedOption
        ),
      ];
    }, [options, selectedOption, valueAccessor]);

    const getOptionLabel = (
      label: any,
      icon: string | undefined,
      tooltipWidth: number,
      iconColor: string | undefined
    ) => {
      if (React.isValidElement(label)) {
        return label;
      }
      return (
        <div className="ff-select-dropdown-option-wrapper">
          {showIcon && icon && (
            <Icon
              name={icon}
              className="ff-select-dropdown__icon"
              {...(iconColor && { color: iconColor })}
            />
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

    // Calculate height for virtualization
    const listHeight = useMemo(() => {
      if (checkEmpty(options)) return 32;
      if (options.length > 5) return dropDownHeight;
      return options.length * optionHeight;
    }, [options]);

    const renderOptionRow = ({ index, style }: any) => {
      const option = sortedOptions[index];
      if (!option) return null;

      const optionValue = getValue(option, valueAccessor);
      const optionLabel = getLabel(option, labelAccessor);
      const iconName = 'iconName' in option ? option.iconName : undefined;
      const iconColor = 'iconColor' in option ? option.iconColor : undefined;
      const isDisabled = 'disable' in option && option.disable;

      return (
        <div
          className={classNames(
            'ff-select-dropdown-option',
            {
              'ff-select-dropdown-option__selected':
                optionValue === selectedOption,
            },
            {
              'ff-select-dropdown-option__disabled': isDisabled,
            },
            currentTheme
          )}
          key={index}
          style={style}
          onClick={() => {
            if (isDisabled) return;
            onSelectOptionSelector(option);
          }}
        >
          {getOptionLabel(
            optionLabel,
            iconName,
            effectiveContentWidth,
            iconColor
          )}
        </div>
      );
    };

    return (
      <div
        className={classNames('ff-select-dropdown-wrapper', currentTheme, {
          'ff-select-dropdown-modal-wrapper': recurrence,
          'ff-select-dropdown-mini-modal-wrapper': customReccurenece,
        })}
        ref={mergedRef}
        style={positionStyle}
      >
        <div
          className={classNames({
            'ff-select-label-minimodal-wrapper': customReccurenece,
          })}
        >
          {!checkEmpty(options) ? (
            <div
              style={{
                padding: `${dropDownWrapperPadding}px 0`,
                fontSize: '12px',
              }}
            >
              {/* @ts-ignore: Type compatibility issue with react-window */}
              <FixedSizeList
                height={listHeight}
                width="100%"
                itemCount={sortedOptions.length}
                itemSize={optionHeight}
              >
                {renderOptionRow}
              </FixedSizeList>
            </div>
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
                  variant="primary"
                  onClick={onHandleSaveModal}
                  disabled={isCustomButtonDisabled}
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
