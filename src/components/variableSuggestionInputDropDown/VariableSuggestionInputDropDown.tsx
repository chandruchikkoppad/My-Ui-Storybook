import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import VariableDropdown from '../Editor/VariableDropdown';
import Icon from '../Icon';
import Input from '../Input';
import { VariableSuggestionInputDropDownProps, dynamicObject } from './types';
import './VariableSuggestionInputDropDown.scss';
import OptionsDropdown from './OptionsDropdown';
import Tooltip from '../Tooltip';

const VariableSuggestionInputDropDown = forwardRef<
  HTMLInputElement,
  VariableSuggestionInputDropDownProps
>(
  (
    {
      label = '',
      hashInputValue = '',
      setHashInputValue,
      variableList = [],
      placeholder = 'Enter text',
      onChange,
      onPaste,
      onCreateVariableClick,
      handleClearInput,
      value = '',
      dropdownWidth = '100%',
      dropdownHeight = '150px',
      isHash = false,
      isOnlyHash = false,
      dataFiles = [],
      showAddVariableIcon = true,
      helperText = '',
      error,
      autoComplete = 'off',
      required = false,
      zIndex = 9999,
      truncateTextValue = 34,
      formProps = {},
      getSelectedVariable = () => {},
      symbol = '$',
      type = 'text',
      clearIcon = true,
      inputTitle = '',
      onBlur,
      ...props
    },
    ref
  ) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [cursorPosition, setCursorPosition] = useState<number | null>(null);
    const [findCursor, setFindCursor] = useState(0);
    const [showCreateVariableIcon, setShowCreateVariableIcon] =
      useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<dynamicObject[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dropdownWidthPx, setDropdownWidthPx] = useState<string>('auto');

    useEffect(() => {
      const inputContainer = containerRef.current?.querySelector(
        '.ff-input-container'
      );
      if (!inputContainer) return;
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const width = `${entry.contentRect.width}px`;
          setDropdownWidthPx(width);
        }
      });
      resizeObserver.observe(inputContainer);
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    useEffect(() => {
      if (cursorPosition !== null && inputRef.current) {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        inputRef.current.focus();
      }
    }, [cursorPosition]);

    useEffect(() => {
      if (isHash) {
        setShowDropdown(value.startsWith('#'));
      }
      const selectedHashValue = dataFiles?.find((file) => file.name === value);
      const selectedDollarValue = variableList?.find(
        (file) => file?.name === value
      );

      if (value.startsWith('#') && isHash) {
        const searchQuery = value.slice(1).toLowerCase();
        const filtered = dataFiles.filter((file) =>
          file.name.toLowerCase().includes(searchQuery)
        );
        setFilteredOptions(filtered);
        setShowDropdown(true);
      }
      const isHashSelected =
        selectedHashValue !== null && value.startsWith('#');
      const isDollarSelected =
        selectedDollarValue !== null && value.startsWith('$');
      const additionalText =
        value.length > (selectedDollarValue?.name.length || 0);
      if (isOnlyHash) {
        setShowCreateVariableIcon(false);
      } else {
        if (
          isDollarSelected ||
          isHashSelected ||
          value.includes('$') ||
          value.includes('#')
        ) {
          setShowCreateVariableIcon(false);
        } else if (additionalText && !value.includes('$')) {
          setShowCreateVariableIcon(true);
        }
      }
    }, [value]);
    const updateCursorPosition = () => {
      if (inputRef.current) {
        setFindCursor(inputRef.current.selectionStart || 0);
      }
    };

    const handleClick = updateCursorPosition;
    const handleKeyUp = updateCursorPosition;

    useEffect(() => {
      if (inputRef.current) {
        setFindCursor(inputRef.current.selectionStart || 0);
      }
    }, [value]);

    const handleDropdownClick = (item: dynamicObject) => {
      if (inputRef.current) {
        const { selectionStart, selectionEnd } = inputRef.current;
        const dollarSyntax = `${item.name}`;

        let newValue;
        if (isHash && value[0] === '#') {
          newValue = item.name + value.slice(selectionEnd || 1);
        } else {
          newValue = item.name;
        }

        if (onChange) {
          const event = {
            target: {
              value: newValue,
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event, item);
          getSelectedVariable(item.name);
        }
        inputRef.current.value = newValue;
        setHashInputValue?.(item);
        setCursorPosition((selectionStart || 0) + dollarSyntax.length);
        setShowDropdown(false);
        setIsDropdownClicked(true);
      }
    };

    function getDropdownState(
      input: string,
      cursorPosit: number,
      variableList: dynamicObject[]
    ): { showDropdown: boolean; searchString: string } {
      let showDropdown = false;
      let searchString = '';
      const checkifCursorPositionhasCloseCurly = value[cursorPosit - 1] === '}';
      if (cursorPosit < 0 || cursorPosit > input.length) {
        return { showDropdown, searchString };
      }

      const lastDollarBeforeCursor = input.lastIndexOf(symbol, cursorPosit - 1);
      const nextDollarAfterCursor = input.indexOf(symbol, cursorPosit);

      if (lastDollarBeforeCursor !== -1) {
        if (isOnlyHash && input[lastDollarBeforeCursor] === '$') {
          showDropdown = false;
        } else if (cursorPosit === lastDollarBeforeCursor + 1) {
          showDropdown = true;
          searchString = '';
        } else {
          searchString = input.slice(
            lastDollarBeforeCursor + 1,
            nextDollarAfterCursor === -1 ? undefined : nextDollarAfterCursor
          );

          if (cursorPosit > lastDollarBeforeCursor + 1) {
            searchString = input.slice(lastDollarBeforeCursor + 1, cursorPosit);
          }
          showDropdown = true;
        }
        if (isDropdownClicked && checkifCursorPositionhasCloseCurly) {
          showDropdown = false;
        }

        if (/[{}]/.test(searchString) || cursorPosit === 0) {
          showDropdown = false;
          searchString = '';
        }

        if (searchString) {
          const isInVariableList = variableList.some((file) =>
            file.name.toLowerCase().includes(searchString.toLowerCase())
          );
          if (!isInVariableList) {
            variableList = [];
          }
        }
      }

      return { showDropdown, searchString };
    }

    const result = getDropdownState(value, findCursor, variableList);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      {
        if (
          !e.relatedTarget ||
          !e.relatedTarget.closest('.dropdown-container')
        ) {
          setIsFocused(false);
        }
      }
    };
    return (
      <div className="ff-add-variable-container">
        <div className="ff-add-variable-input" ref={containerRef}>
          <Tooltip title={inputTitle} style={{ width: '100%' }}>
            <Input
              {...props}
              name="add_variable"
              ref={inputRef}
              type={type}
              value={value}
              onChange={onChange}
              onPaste={() => {
                setShowCreateVariableIcon(true);
              }}
              variant="primary"
              label={label}
              placeholder={placeholder}
              onClick={handleClick}
              onKeyUp={handleKeyUp}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                handleBlur(e);
                onBlur?.(e);
              }}
              autoComplete={autoComplete}
              helperText={helperText}
              error={error}
              required={required}
              {...formProps}
            />
          </Tooltip>
          {!checkEmpty(value) && !isOnlyHash && (
            <div className="ff-variable-icon-container">
              {clearIcon && (
                <Tooltip title="Cancel" style={{ zIndex: 99999 }}>
                  <Icon
                    onClick={handleClearInput}
                    name="close"
                    height={16}
                    width={16}
                    hoverEffect
                  />
                </Tooltip>
              )}
              {showCreateVariableIcon && showAddVariableIcon && (
                <Tooltip title="Create as Variable" style={{ zIndex: 99999 }}>
                  <Icon
                    onClick={onCreateVariableClick}
                    name="add_variable"
                    height={16}
                    width={16}
                    hoverEffect
                  />
                </Tooltip>
              )}
            </div>
          )}
        </div>
        {result?.showDropdown && isFocused && (
          <VariableDropdown
            position="absolute"
            zIndex={zIndex}
            truncateTextValue={truncateTextValue}
            width={dropdownWidthPx}
            height={dropdownHeight}
            optionsList={variableList.filter((file) =>
              file.name
                .toLowerCase()
                .includes(result?.searchString?.toLowerCase())
            )}
            onSelectVariable={handleDropdownClick}
          />
        )}
        {showDropdown && isHash && isFocused && (
          <OptionsDropdown
            position="relative"
            zIndex={zIndex}
            truncateTextValue={truncateTextValue}
            width={dropdownWidthPx}
            filteredOptions={filteredOptions}
            onSelectVariable={handleDropdownClick}
          />
        )}
      </div>
    );
  }
);

export default VariableSuggestionInputDropDown;
