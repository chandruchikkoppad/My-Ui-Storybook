import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from 'react';
import './Select.scss';
import Icon from '../Icon';
import Typography from '../Typography';
import { DropdownPosition, Option, SelectProps } from './types';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import Dropdown from './components/Dropdown';
import { getValue } from '../../utils/getSelectOptionValue/getSelectOptionValue';
import usePortalPosition from '../../hooks/usePortalPosition';
import Tooltip from '../Tooltip';

const Select: FC<SelectProps> = ({
  label = 'Default Label',
  showLabel = true,
  optionsList = [],
  selectedOption = { label: '', value: '' },
  onChange = () => {},
  errorMsg = '',
  className = '',
  optionZIndex = 1500,
  disabled = false,
  showBorder = true,
  required = true,
  optionsRequired = true,
  selectedOptionColor = 'var(--ff-select-text-color)',
  labelAccessor = '',
  valueAccessor = '',
  height = 32,
  width = '100%',
  onBlur = () => {},
  disableInput = false,
  showIcon = false,
  placeHolder = '',
  showToolTip = false,
  onCancelModal = () => {},
  onSaveModal = () => {},
  modalJSXProps = <></>,
  recurrence = false,
  showArrowIcon = true,
  showClearIcon = false,
  handelClear = () => {},
  showOptions = { open: false, toggle: false },
  tooltip = false,
  background = '',
  borderRadius = '0px',
  noResultsMessage,
  dropDownRef,
}) => {
  const selectWidth = typeof width === 'number' ? `${width}px` : width;
  const memoizedOptionsList = useMemo(() => optionsList, [optionsList]);

  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const [customRecurrence, setCustomRecurrence] = useState(false);
  const [searchedOption, setSearchedOption] = useState<any>({
    searchedText: '',
    searchedIcon: '',
  });
  const { searchedText, searchedIcon } = searchedOption;
  const [selectOptionList, setSelectOptionList] = useState<Option[] | []>([]);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({
    positionX: 0,
    positionY: 0,
    width: 0,
    fromBottom: 0,
  });

  const DropdownRef = useRef<HTMLDivElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectArrowRef = useRef<HTMLDivElement>(null);

  const calculatePosition = usePortalPosition(inputRef, showDropdownOptions);

  const handleIconClick = () => {
    if (disabled) return;
    setShowDropdownOptions(!showDropdownOptions);
    setSearchedOption({
      ...searchedOption,
      searchedText: getValue(selectedOption, valueAccessor) || '',
    });
    setSelectOptionList(optionsList);
    if (!showDropdownOptions && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { value } = event.target;

    const filteredOptions = optionsList.filter((option) => {
      const valueData = getValue(option, valueAccessor);
      return typeof valueData === 'string'
        ? valueData.toLowerCase().includes(value.toLowerCase().trim())
        : valueData === Number(value);
    });

    setSelectOptionList(filteredOptions);
    setSearchedOption({
      ...searchedOption,
      searchedText: value,
    });
  };

  const onSelectUpdatePosition = () => {
    if (!showDropdownOptions || !DropdownRef?.current || disabled) return;
    setDropdownPosition(calculatePosition(inputRef));
  };

  const onSelectToggleScroll = (isEnabled: boolean): void => {
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isEnabled) {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    } else {
      document.body.style.paddingRight = `${scrollWidth}px`;
      document.body.style.overflow = 'hidden';
    }
  };

  const handleFocus = () => {
    if (disabled) return;
    setShowDropdownOptions(true);
  };

  useEffect(() => {
    if (showOptions.open) {
      setShowDropdownOptions(true);
    }
  }, [showOptions.toggle]);

  const onSelectBlur = () => {
    setShowDropdownOptions(false);
    setDropdownPosition({
      positionX: 0,
      positionY: 0,
      fromBottom: 0,
      width: 0,
    });
    setSelectOptionList(optionsList);
    if (inputRef?.current === document.activeElement) {
      inputRef?.current?.blur();
      setSearchedOption({
        searchedText: getValue(selectedOption, valueAccessor) || '',
        searchedIcon: selectedOption.iconName || '',
      });
      setCustomRecurrence(false);
      onBlur();
    }
  };

  const onSelectOptionSelector = (option: Option): void => {
    if (disabled) return;
    const isCustomRecurrence = option?.recurrence || false;
    setCustomRecurrence(isCustomRecurrence);
    setSearchedOption({
      searchedText: getValue(selectedOption, valueAccessor),
      searchedIcon: selectedOption.iconName,
    });
    if (onChange) {
      onChange(option);
    }
    if (!isCustomRecurrence) {
      onSelectBlur();
    }
  };

  const handleResizeOrScroll = () => onSelectUpdatePosition();

  const getScrollParent = (element: HTMLElement | null): HTMLElement | null => {
    if (!element) return null;

    let parent = element.parentElement;
    while (parent) {
      const tagName = parent.tagName.toLowerCase();

      // Skip tbody and similar non-scrollable semantic containers
      if (tagName === 'tbody') {
        parent = parent.parentElement;
        continue;
      }

      const style = window.getComputedStyle(parent);
      const overflowY = style.overflowY;

      const isScrollable =
        (overflowY === 'auto' || overflowY === 'scroll') &&
        parent.scrollHeight > parent.clientHeight;

      if (isScrollable) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return document.body;
  };

  useEffect(() => {
    if (!showDropdownOptions || disabled) return;
    if (optionsRequired) {
      onSelectToggleScroll(false);
    }
    onSelectUpdatePosition();
    const scrollableParent = getScrollParent(inputRef.current);
    window.addEventListener('resize', handleResizeOrScroll);
    scrollableParent?.addEventListener('scroll', onSelectBlur);
    return () => {
      onSelectToggleScroll(true);
      window.removeEventListener('resize', handleResizeOrScroll);
      scrollableParent?.removeEventListener('scroll', onSelectBlur);
    };
  }, [showDropdownOptions]);

  useEffect(() => {
    setSearchedOption({
      searchedText: getValue(selectedOption, valueAccessor),
      searchedIcon: selectedOption.iconName,
    });
  }, [
    selectedOption?.label,
    selectedOption?.value,
    selectedOption?.iconName,
    getValue(selectedOption, valueAccessor),
  ]);

  useEffect(() => {
    setSelectOptionList(memoizedOptionsList);
  }, [memoizedOptionsList]);

  if (showLabel) {
    placeHolder = '';
  }

  return (
    <div
      className={`ff-select-wrapper ${className} ${
        showClearIcon ? 'show-clear-icon' : ''
      }`}
      ref={selectWrapperRef}
      style={{
        height: `${height}px`,
        width: `${selectWidth}`,
        background: `${background}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <div
        className={classNames('ff-select', {
          'ff-select__focus': showDropdownOptions,
          'ff-select__disabled': disabled,
          'ff-select__error': !!errorMsg,
          'ff-select__error__focused': !!errorMsg && showDropdownOptions,
          'ff-select__no_border': !showBorder,
        })}
      >
        {showIcon && (
          <Tooltip placement="bottom" title={searchedText}>
            <Icon name={searchedIcon} className="ff-select-input-icon" />
          </Tooltip>
        )}
        <Tooltip title={tooltip ? searchedText : ''} style={{ width: '100%' }}>
          <input
            type="text"
            ref={inputRef}
            id="select-input-element"
            className={classNames('ff-select-inputField', {
              'ff-select-inputField__disabled': disabled,
              'ff-select-inputField__readonly': disableInput,
              'ff-select-inputField__icon': showIcon,
            })}
            onFocus={handleFocus}
            value={searchedText}
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            style={{
              zIndex: optionZIndex,
              color: selectedOptionColor,
            }}
            disabled={disabled}
            onChange={handleChange}
            readOnly={disableInput}
            placeholder={placeHolder}
          />
        </Tooltip>
        {optionsRequired && (
          <div
            ref={selectArrowRef}
            className={classNames('ff-select-arrows-wrapper', {
              'ff-select-arrows-wrapper__disabled': disabled,
            })}
            onClick={handleIconClick}
          >
            {showArrowIcon && (
              <Icon
                name="arrow_down"
                className="ff-select-arrows"
                height={8}
                width={12}
                color={'var(--brand-color)'}
                z-index={9999}
              />
            )}
          </div>
        )}
        {showLabel && (
          <Typography
            as="span"
            className={classNames('ff-select-labels', {
              'ff-select-labels__icon': showIcon,
              'ff-select-labels__active': searchedText,
            })}
            fontSize={searchedText || showDropdownOptions ? 10 : 12}
            lineHeight={searchedText || showDropdownOptions ? '10px' : '12px'}
            required={required}
            style={{ maxWidth: `calc(${selectWidth} - 40px)` }}
          >
            {label}
          </Typography>
        )}
      </div>
      {errorMsg && (
        <Typography
          as="div"
          lineHeight="15px"
          fontSize={10}
          color="var(--error_light)"
          className="ff-select-error-msg"
        >
          {errorMsg}
        </Typography>
      )}

      {optionsRequired && (
        <div ref={DropdownRef}>
          {showDropdownOptions &&
            createPortal(
              <Dropdown
                options={selectOptionList}
                dropdownPosition={dropdownPosition}
                labelAccessor={labelAccessor}
                optionZIndex={optionZIndex}
                inputRef={inputRef}
                selectArrowRef={selectArrowRef}
                onSelectBlur={onSelectBlur}
                onSelectOptionSelector={onSelectOptionSelector}
                heightFromTop={height}
                selectedOption={searchedText}
                showIcon={showIcon}
                showToolTip={showToolTip}
                customReccurenece={customRecurrence}
                onSaveModal={onSaveModal}
                onCancelModal={() => {
                  onCancelModal();
                  setCustomRecurrence(false);
                }}
                modalJSXProps={modalJSXProps}
                recurrence={recurrence}
                valueAccessor={valueAccessor}
                showArrowIcon={showArrowIcon}
                showClearIcon={showClearIcon}
                noResultsMessage={noResultsMessage}
                ref={dropDownRef}
              />,
              document.body
            )}
        </div>
      )}
      {showClearIcon && (
        <Tooltip title="Cancel" style={{ zIndex: 99999 }}>
          <Icon
            name="close"
            height={16}
            width={16}
            onClick={handelClear}
            hoverEffect
          />
        </Tooltip>
      )}
    </div>
  );
};

export default Select;
