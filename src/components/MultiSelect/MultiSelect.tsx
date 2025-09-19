import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './MultiSelect.scss';
import Dropdown from './Dropdown';
import Icon from '../Icon';
import { MultiSelectProps, Option } from './MultiSelectTypes';
import Typography from '../Typography';
import Tooltip from '../Tooltip';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import {
  getLabel,
  getValue,
} from '../../utils/getSelectOptionValue/getSelectOptionValue';
import { useMergeRefs } from '../../hooks/useMergeRefs';
import { ALPHA_NUM_EXTENDED_REGEX } from '../../validations/regex';

const MAX_SEARCH_CHARACTER_LENGTH = 100;
const MAX_ALLOWED_PIXEL = 150;
const FONT_SIZE = 6;

const ChipElement = ({
  label,
  onChipCloseClick,
  disableChip,
  zIndex,
}: {
  label: string;
  onChipCloseClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  disableChip: boolean;
  zIndex: number;
}) => {
  if (label) {
    return (
      <div className="ff-multiselect-chip">
        <span
          className={`ff-multiselect-chip-label ${
            disableChip && 'label-padding'
          }`}
        >
          <Tooltip
            style={{ display: 'flex', cursor: 'default' }}
            placement="bottom"
            title={
              isTextTruncated(label, MAX_ALLOWED_PIXEL, 'pixel') ? label : ''
            }
            zIndex={zIndex + 1}
          >
            <Typography fontSize={10} lineHeight={'14px'} as="span">
              {typeof label === 'string'
                ? truncateText(label, MAX_ALLOWED_PIXEL, 'pixel')
                : label}
            </Typography>
          </Tooltip>
        </span>
        {!disableChip && (
          <Icon
            name="close_pill"
            height={12}
            width={12}
            className="ff-multiselect-chip-close-icon"
            onClick={onChipCloseClick}
          />
        )}
      </div>
    );
  }
  return null;
};

const MultiSelect = ({
  options = [],
  type = 'text',
  selectedOptions = [],
  onChange = () => {},
  acceptNewOption = false,
  zIndex = 100,
  label = '',
  onSearch = () => {},
  required = false,
  disabled = false,
  errorMessage = 'Fill this field',
  displayCount: initialDisplayCount = false,
  isAllSelected,
  onToggleAllSelect,
  // New prop added
  displayAllSelectedAsText,
  isAllSelect,
  placeholderForSearching = 'Search',
  variant = 'default',
  onLabelPlusIconClick = async () => {},
  className = '',
  onSelectButtonClick = () => {},
  labelAccessor = 'label',
  valueAccessor = 'value',
  searchAccessor = valueAccessor,
  withSelectButton = variant === 'machines' ? true : false,
  loadMoreOptions = () => {},
  onEnter = () => false,
  maxVisibleChips,
  onBlur = () => {},
  maxDropdownHeight = 160,
  dropdownContainerRef,
  noResultsMessage,
  chipAccessor = labelAccessor,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [allOptions, setAllOptions] = useState(options);
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [isSelectFocusedOnce, setIsSelectFocusedOnce] =
    useState<boolean>(false);
  const [inputError, setInputError] = useState<string>('');
  const [displayIcon, setDisplayIcon] = useState<boolean>(false);
  const [displayCount] = useState<boolean>(initialDisplayCount);

  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
    fromBottom: number;
    selectHeight: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
    fromBottom: 0,
    selectHeight: 0,
  });
  const [labelBgColor, setLabelBgColor] = useState<string>('white');
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownWrapper = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const selectWrapper = useRef<HTMLInputElement>(null);
  const mergedRef = useMergeRefs(dropdownRef, dropdownContainerRef);
  let isFieldSkipped = isSelectFocusedOnce && selectedOptions?.length === 0;
  const visibleCharRef = useRef<number>(maxVisibleChips ?? 0);
  useLayoutEffect(() => {
    if (selectWrapper.current) {
      const containerWidth =
        selectWrapper.current.getBoundingClientRect().width;

      if (!selectedOptions) return;
      let totalWidthUsed = 0;
      const visibleChar: Option[] | ((prevState: never[]) => never[]) = [];

      selectedOptions?.forEach((option) => {
        const label = option[labelAccessor];
        const characterCount =
          Math.min(
            label?.length || 0,
            Math.floor(MAX_ALLOWED_PIXEL / FONT_SIZE)
          ) || 0;
        const currentElementChipWidth = characterCount * FONT_SIZE + 25;
        if (totalWidthUsed + currentElementChipWidth <= containerWidth - 60) {
          visibleChar.push(option);
          visibleCharRef.current = visibleChar?.length || 0;
        }
        totalWidthUsed += currentElementChipWidth;
      });
    }
  }, [selectedOptions]);

  const hiddenCount = selectedOptions?.length - visibleCharRef.current;

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (withSelectButton && dropdownRef.current) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
    setIsOpen((prev) => !prev);
    if (!isSelectFocusedOnce && isOpen) {
      setIsSelectFocusedOnce(true);
    }
  };

  const handleOptionChange = (selectedOption: Option, isChecked: boolean) => {
    inputRef.current?.focus();
    const updatedOptions = allOptions.map((option) =>
      getValue(option, valueAccessor) ===
      getValue(selectedOption, valueAccessor)
        ? { ...option, isChecked, sort: Date.now() }
        : option
    );
    setAllOptions(updatedOptions);
    const tempCheckedOptions = updatedOptions
      .filter((option) => option.isChecked)
      .sort((a, b) => a.sort - b.sort)
      .map(({ isChecked, ...rest }) => rest);
    if (!isSelectFocusedOnce) {
      setIsSelectFocusedOnce(true);
    }
    if (checkEmpty(selectedOption)) {
      setIsOpen(false);
      onSelectButtonClick?.(tempCheckedOptions);
      return;
    }
    onChange && onChange(tempCheckedOptions);
    setSearchedKeyword('');
  };

  const handleChipCloseClick = (
    option: Option,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    handleOptionChange(option, false);
  };

  const handleChipCloseAll = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const updatedOptions = allOptions.map((option) => ({
      ...option,
      isChecked: false,
    }));
    setAllOptions(updatedOptions);
    onChange && onChange([]);
  };

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (acceptNewOption && e.key === 'Enter') {
      setInputError('');
      if (type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(searchedKeyword)) {
          setIsOpen(false);
          setInputError('Recipient Email is not valid.');
          return;
        }
      }
      const isDropdownOpen = onEnter?.(searchedKeyword);
      if (isDropdownOpen) {
        setIsOpen(true);
      } else {
        setSearchedKeyword('');
        setIsOpen(false);
      }
    }
  };

  const handleIconClick = async () => {
    try {
      await onLabelPlusIconClick(searchedKeyword);
      // Empty the input field & remove the icon after adding the label successfully
      setSearchedKeyword('');
      setDisplayIcon(false);
    } catch (error) {}
  };

  useEffect(() => {
    const getActualBackgroundColor = (element: HTMLElement | null) => {
      let currentElement = element;
      while (currentElement) {
        const styles = window.getComputedStyle(currentElement);
        if (styles.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          return styles.backgroundColor;
        }
        currentElement = currentElement.parentElement;
      }
      return '';
    };

    if (selectWrapper.current) {
      const parentElement = selectWrapper.current.parentElement?.parentElement;
      if (parentElement) {
        const bgColor = getActualBackgroundColor(parentElement);
        if (bgColor) {
          setLabelBgColor(bgColor);
        }
      }
    }
  }, [selectWrapper.current]);
  const getScrollableParent = (
    element: HTMLElement | null
  ): HTMLElement | null => {
    if (!element) return null;
    let parent: HTMLElement | null = element.parentElement;
    while (parent) {
      const { overflowY, overflowX } = window.getComputedStyle(parent);
      if (
        /(auto|scroll|overlay)/.test(overflowY) ||
        (/(auto|scroll|overlay)/.test(overflowX) &&
          parent.scrollWidth > parent.clientWidth)
      ) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return document.documentElement;
  };

  useEffect(() => {
    calculatePosition();
  }, [searchedKeyword]);

  useEffect(() => {
    if (!selectWrapper.current) return;
    const scrollableParent = getScrollableParent(selectWrapper.current);
    // Attach scroll event to detected parent or window
    scrollableParent?.addEventListener(
      'scroll',
      () => {
        setIsOpen(false);
      },
      {
        passive: true,
      }
    );
    return () => {
      scrollableParent?.removeEventListener('scroll', () => {
        setIsOpen(false);
      });
    };
  }, []);
  const calculatePosition = () => {
    if (dropdownWrapper.current && selectWrapper.current) {
      const rect = dropdownWrapper.current.getBoundingClientRect();
      const rect2 = selectWrapper.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        fromBottom: document.documentElement.clientHeight - (rect.bottom - 4),
        selectHeight: rect2.height,
      });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOpen) {
      setIsOpen(true);
    }
    const input = e.target.value;
    setSearchedKeyword(input);

    onSearch?.(input);
    if (input?.length > 2 && input === input.trim()) {
      const matchedOption = allOptions.find(
        (option) =>
          getLabel(option, searchAccessor)?.toLowerCase() ===
          input.toLowerCase()
      );
      setDisplayIcon(!matchedOption);
    } else {
      setDisplayIcon(false);
    }
  };

  const handleHiddenChips = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const rect = dropdownWrapper.current?.getBoundingClientRect();
    setDropdownPosition((prev) => ({ ...prev, width: rect?.width as number }));
  }, [displayIcon]);

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, allOptions]);

  function getScrollbarWidth(): number {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
  }

  const onSelectToggleScroll = (isEnabled: boolean) => {
    const bodyScrollWidth = getScrollbarWidth();
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style.paddingRight = isEnabled
        ? ''
        : `${bodyScrollWidth}px`;
    }
    document.body.style.overflow = isEnabled ? '' : 'hidden';
  };

  useEffect(() => {
    if (isOpen) {
      onSelectToggleScroll(!isOpen);
    }
    if (dropdownRef?.current) {
      inputRef?.current?.focus();
    }
    return () => {
      onSelectToggleScroll(true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isSelectFocusedOnce) {
      onBlur();
    }
  }, [isOpen, isSelectFocusedOnce]);

  useEffect(() => {
    if (!checkEmpty(options)) {
      let initializeOptions = options;
      if (!checkEmpty(selectedOptions)) {
        initializeOptions = options.map((option) => {
          const selectedIndex = selectedOptions.findIndex(
            (selectedOption) =>
              getValue(selectedOption, valueAccessor) ===
              getValue(option, valueAccessor)
          );

          return {
            ...option,
            isChecked: selectedIndex !== -1,
            ...(selectedIndex !== -1 && { sort: selectedIndex }),
          };
        });
      }
      setAllOptions(initializeOptions);
    }
  }, [options, selectedOptions]);

  useEffect(() => {
    const handleClickAnywhere = (event: MouseEvent) => {
      if (
        withSelectButton &&
        dropdownWrapper.current &&
        selectWrapper.current &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event?.target as Node) &&
        !selectWrapper.current.contains(event?.target as Node)
      ) {
        setInputError('');
        setIsOpen(false);
        if (!isSelectFocusedOnce) {
          setIsSelectFocusedOnce(true);
        }
      }
      if (
        dropdownWrapper.current &&
        inputRef.current &&
        selectWrapper.current &&
        dropdownRef.current &&
        !inputRef.current.contains(event?.target as Node) &&
        !dropdownRef.current.contains(event?.target as Node) &&
        !selectWrapper.current.contains(event?.target as Node) &&
        !(
          event?.target &&
          (event.target as HTMLElement).closest('.ff-label-plus-icon')
        )
      ) {
        setInputError('');
        setIsOpen(false);
        if (!isSelectFocusedOnce) {
          setIsSelectFocusedOnce(true);
        }
      }
    };
    window.addEventListener('resize', calculatePosition);
    window.addEventListener('click', handleClickAnywhere, true);
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('click', handleClickAnywhere);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const hideSearchField =
    displayAllSelectedAsText && selectedOptions?.length === allOptions?.length;
  return (
    <div className={`ff-multiselect-container-with-icon ${className}`}>
      <div
        ref={selectWrapper}
        className={classNames('ff-multiselect-wrapper', {
          'ff-multiselect-wrapper--with-options': selectedOptions?.length,
          'ff-multiselect-wrapper--opened-dropdown': isOpen,
          'ff-multiselect-wrapper--error':
            (isFieldSkipped && required) || inputError,
          'ff-multiselect-wrapper--disabled': disabled,
        })}
      >
        <div className="ff-multiselect" onClick={handleClick}>
          <div className="ff-multiselect__main">
            <Typography
              style={{ backgroundColor: labelBgColor }}
              className={classNames({
                'active-default-label':
                  isOpen ||
                  (!withSelectButton && selectedOptions?.length) ||
                  (isFieldSkipped && required),
                'default-label': !isOpen && !selectedOptions?.length,
              })}
              required={required}
              children={label}
            />
            <div className="ff-multiselect-chip-container">
              {!withSelectButton &&
                (displayAllSelectedAsText &&
                selectedOptions?.length === allOptions?.length &&
                !checkEmpty(allOptions) &&
                labelAccessor !== 'name' ? (
                  <ChipElement
                    zIndex={zIndex}
                    key="all"
                    label="All"
                    onChipCloseClick={handleChipCloseAll}
                    disableChip={false}
                  />
                ) : displayCount ? (
                  <>
                    {selectedOptions
                      .slice(0, visibleCharRef.current)
                      .map((option) => (
                        <ChipElement
                          zIndex={zIndex}
                          key={getLabel(option, labelAccessor)}
                          label={getLabel(option, chipAccessor) || ''}
                          onChipCloseClick={(e) =>
                            handleChipCloseClick(option, e)
                          }
                          disableChip={option?.isDisabled || false}
                        />
                      ))}
                  </>
                ) : (
                  selectedOptions.map((option) => (
                    <ChipElement
                      zIndex={zIndex}
                      key={getLabel(option, labelAccessor)}
                      label={getLabel(option, chipAccessor) || ''}
                      onChipCloseClick={(e) => handleChipCloseClick(option, e)}
                      disableChip={option?.isDisabled || false}
                    />
                  ))
                ))}
              {!hideSearchField && (
                <div className="ff-multiselect-input-container">
                  <input
                    value={searchedKeyword}
                    type={type}
                    autoComplete="off"
                    placeholder={placeholderForSearching}
                    ref={inputRef}
                    onChange={handleSearch}
                    onKeyDown={handleKeyEnter}
                    id="input-ele"
                    className="ff-select-input"
                    style={{
                      display:
                        isOpen || (selectedOptions?.length && !withSelectButton)
                          ? 'inherit'
                          : 'none',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {hiddenCount > 0 && displayCount && (
            <div
              className="ff-multiselect-more-chip"
              onClick={handleHiddenChips}
            >
              <Typography
                fontSize={12}
                fontWeight="semi-bold"
                lineHeight="16px"
                color="var(--brand-color)"
              >
                +{hiddenCount}
              </Typography>
            </div>
          )}
          <div
            onClick={(e) => {
              toggleDropdown(e);
            }}
            className="ff-multiselect__toggle"
          >
            <Icon
              name="arrow_down"
              className={classNames({
                'ff-select-arrow--opened-dropdown': isOpen,
                'ff-select-arrow': !isOpen,
              })}
              color={
                isOpen ? 'var(--brand-color)' : 'var(--default-icon-color)'
              }
              height={8}
              width={12}
            />
          </div>
        </div>
        <div ref={dropdownWrapper}>
          {(inputError || (isFieldSkipped && required && errorMessage)) && (
            <Typography
              children={inputError || errorMessage}
              fontSize={10}
              className="error-text"
            />
          )}

          {isOpen &&
            createPortal(
              <Dropdown
                ref={mergedRef}
                searchedKeyword={searchedKeyword}
                checkedOptions={selectedOptions}
                handleOptionChange={handleOptionChange}
                options={allOptions}
                dropdownPosition={dropdownPosition}
                zIndex={zIndex}
                withSelectButton={withSelectButton}
                labelAccessor={labelAccessor}
                valueAccessor={valueAccessor}
                searchAccessor={searchAccessor}
                loadMoreOptions={loadMoreOptions}
                isAllSelected={isAllSelected}
                onToggleAllSelect={onToggleAllSelect}
                isAllSelect={isAllSelect}
                maxDropdownHeight={maxDropdownHeight}
                variant={variant}
                handleIconClick={handleIconClick}
                noResultsMessage={noResultsMessage}
                maxSearchCharacterLength={MAX_SEARCH_CHARACTER_LENGTH}
              />,
              document.body
            )}
        </div>
      </div>

      {variant === 'labels' && displayIcon && (
        <Tooltip title="Add Label" placement="top" zIndex={zIndex + 1}>
          <Icon
            name={'label_plus'}
            onClick={handleIconClick}
            className="ff-label-plus-icon"
            disabled={
              (MAX_SEARCH_CHARACTER_LENGTH <= (searchedKeyword?.length || 0)) || (!ALPHA_NUM_EXTENDED_REGEX.test(searchedKeyword))
            }
          />
        </Tooltip>
      )}
    </div>
  );
};

export default MultiSelect;
