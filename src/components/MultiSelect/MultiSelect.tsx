import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './MultiSelect.scss';
import Dropdown from './Dropdown';
import Icon from '../Icon';
import { MultiSelectProps, Option } from './MultiSelectTypes';

const ChipElement = ({
  label,
  onChipCloseClick,
}: {
  label: string;
  onChipCloseClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  if (label) {
    return (
      <div className="ff-multiselect-chip">
        <span className="ff-multiselect-chip-label"> {label}</span>
        <Icon
          color="#71347b"
          className="ff-multiselect-chip-close-icon"
          onClick={onChipCloseClick}
          name="close_pill"
        />
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
  withSelectButton = false,
  onSelect = () => {},
  displayCount = false,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [allOptions, setAllOptions] = useState(options);

  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [isSelectFocusedOnce, setIsSelectFocusedOnce] =
    useState<boolean>(false);
  const [inputError, setInputError] = useState<string>('');

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
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownWrapper = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const selectWrapper = useRef<HTMLInputElement>(null);
  let isFieldSkipped = isSelectFocusedOnce && selectedOptions.length === 0;

  const maxVisibleChips = 2;
  const hiddenCount = selectedOptions.length - maxVisibleChips;

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const toggleDropdown = () => {
    inputRef.current?.focus();
    setIsOpen((prev) => !prev);
    if (!isSelectFocusedOnce && isOpen) {
      setIsSelectFocusedOnce(true);
    }
  };
  const handleOptionChange = (selectedOption: Option, isChecked: boolean) => {
    inputRef.current?.focus();
    const updatedOptions = allOptions.map((option) =>
      option.value === selectedOption.value ? { ...option, isChecked } : option
    );

    setAllOptions(updatedOptions);
    const tempCheckedOptions = updatedOptions
      .filter((option) => option.isChecked)
      .map(({ isChecked, ...rest }) => rest);
    if (!isSelectFocusedOnce) {
      setIsSelectFocusedOnce(true);
    }
    onChange && onChange(tempCheckedOptions);
  };
  const handleChipCloseClick = (
    option: Option,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    handleOptionChange(option, false);
  };
  const handleKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (acceptNewOption && e.key === 'Enter') {
      setInputError('');
      if (type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(searchedKeyword)) {
          setIsOpen(false);
          setInputError('Please enter a valid email address.');
          return;
        }
      }

      const newOption = {
        label: searchedKeyword,
        value: searchedKeyword.toLowerCase(),
        isChecked: true,
      };
      const filteredOptions = [...allOptions].filter(
        (option) => option.isChecked === true
      );

      setAllOptions([...allOptions, newOption]);
      setSearchedKeyword('');
      onChange?.([
        ...filteredOptions,
        { label: searchedKeyword, value: searchedKeyword.toLocaleLowerCase() },
      ]);
      setIsOpen(false);
    }
  };

  const calculatePosition = () => {
    if (dropdownWrapper.current && selectWrapper.current) {
      const rect = dropdownWrapper.current?.getBoundingClientRect();
      const rect2 = selectWrapper.current?.getBoundingClientRect();
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
    const filteredOptions = options.filter((option) =>
      option.value?.toLowerCase().includes(input.toLowerCase())
    );
    onSearch?.(input, filteredOptions.length);
  };
  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, allOptions]);
  const onSelectToggleScroll = (isEnabled: boolean) => {
    const bodyScrollWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = isEnabled ? '' : `${bodyScrollWidth}px`;
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
    if (options?.length > 0) {
      const initializeOptions = options.map((option) => ({
        ...option,
        isChecked: selectedOptions.some(
          (selectedOption) => selectedOption.value === option.value
        ),
      }));
      setAllOptions(initializeOptions);
    }
    const handleClickAnywhere = (event: MouseEvent) => {
      if (
        dropdownWrapper.current &&
        inputRef.current &&
        selectWrapper.current &&
        dropdownRef.current &&
        !inputRef.current.contains(event?.target as Node) &&
        !dropdownRef.current.contains(event?.target as Node) &&
        !selectWrapper.current.contains(event?.target as Node)
      ) {
        setInputError('');
        setIsOpen(false);
        if (!isSelectFocusedOnce) {
          setIsSelectFocusedOnce(true);
        }
      }
    };
    window.addEventListener('resize', calculatePosition);
    window.addEventListener('click', handleClickAnywhere);
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('click', handleClickAnywhere);
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
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
          <span
            className={classNames({
              'active-default-label':
                isOpen ||
                selectedOptions?.length ||
                (isFieldSkipped && required),
              'default-label': !isOpen && !selectedOptions?.length,
            })}
          >
            {label}
          </span>
          <div className="ff-multiselect-chip-container">
            {displayCount ? (
              <>
                {selectedOptions.slice(0, maxVisibleChips).map((option) => (
                  <ChipElement
                    key={option?.label}
                    label={option?.label || ''}
                    onChipCloseClick={(e) => handleChipCloseClick(option, e)}
                  />
                ))}
              </>
            ) : (
              selectedOptions.map((option) => (
                <ChipElement
                  key={option?.label}
                  label={option?.label || ''}
                  onChipCloseClick={(e) => handleChipCloseClick(option, e)}
                />
              ))
            )}
            <div className="ff-multiselect-input-container">
              <input
                value={searchedKeyword}
                type={type}
                autoComplete="off"
                placeholder="search..."
                ref={inputRef}
                onChange={handleSearch}
                onKeyDown={handleKeyEnter}
                id="input-ele"
                className="ff-select-input"
                style={{
                  display:
                    isOpen || selectedOptions.length ? 'inherit' : 'none',
                }}
              />
            </div>
            {hiddenCount > 0 && (
              <div
                className="ff-multiselect-more-chip"
                onClick={toggleDropdown}
              >
                +{hiddenCount}
              </div>
            )}
          </div>
        </div>
        <div onClick={toggleDropdown} className="ff-multiselect__toggle">
          <Icon
            name="arrow_down"
            className={classNames({
              'ff-select-arrow--opened-dropdown': isOpen,
              'ff-select-arrow': !isOpen,
            })}
            color={isOpen ? '#71347b' : '#a3a3a3'}
          />
        </div>
      </div>
      <div ref={dropdownWrapper}>
        {(inputError || (isFieldSkipped && required && errorMessage)) && (
          <div className="error-text">{inputError || errorMessage}</div>
        )}
        {isOpen &&
          createPortal(
            <Dropdown
              ref={dropdownRef}
              searchedKeyword={searchedKeyword}
              checkedOptions={selectedOptions}
              handleOptionChange={handleOptionChange}
              options={allOptions}
              dropdownPosition={dropdownPosition}
              zIndex={zIndex}
              withSelectButton={withSelectButton}
              onSelect={onSelect}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

export default MultiSelect;
