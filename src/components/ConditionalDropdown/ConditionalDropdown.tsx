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
import { ConditionalDropdownProps, dynamicObject } from './types';
import './ConditionalDropdown.scss';
import OptionsDropdown from './OptionsDropdown';
import Tooltip from '../Tooltip';
import Typography from '../Typography';

const ConditionalDropdown = forwardRef<
  HTMLInputElement,
  ConditionalDropdownProps
>(
  (
    {
      label = '',
      hashInputValue = '',
      setHashInputValue,
      variableList = [],
      addForloopPrefix = false,
      placeholder = 'Enter text',
      onChange,
      onCreateVariableClick,
      value = '',
      dropdownWidth = 'inherit',
      isHash = false,
      dataFiles = [],
      showAddVariableIcon = true,
      helperText = '',
      error,
      autoComplete = 'off',
      showHidePasswordIcon = true,
      required = false,
      formProps = {},
      onlyDropdown = false,
      type,
      onFocus,
      onBlur,
      readOnly = false,
      height = '160px',
      truncateTextValue = 34,
      isTruncateText = false,
      ...props
    },
    ref
  ) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [cursorPosition, setCursorPosition] = useState<number | null>(null);
    const [findCursor, setFindCursor] = useState(0);
    const [skipEffect, setSkipEffect] = useState(false);
    const [showCreateVariableIcon, setShowCreateVariableIcon] =
      useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<dynamicObject[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

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
      } else {
        setShowCreateVariableIcon(!value?.includes('$'));
      }
      if (value.startsWith('#') && isHash) {
        const searchQuery = value.slice(1).toLowerCase();
        const filtered = dataFiles.filter((file) =>
          file.name.toLowerCase().includes(searchQuery)
        );
        setFilteredOptions(filtered);
        setShowDropdown(true);
      }
    }, [value]);
    useEffect(() => {
      if (!skipEffect && onlyDropdown) {
        const filteredResults = dataFiles
          .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
          .map((item, index) => ({
            id: index + 1,
            name: item,
          }));
        setFilteredOptions(filteredResults);
        setShowDropdown(filteredResults.length > 0);
      }

      setSkipEffect(false);
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

    function findNearestDollar(input: string, cursorPosition: number): number {
      const lastDollarBeforeCursor = input.lastIndexOf('$', cursorPosition - 1);

      const nextDollarAfterCursor = input.indexOf('$', cursorPosition);

      if (lastDollarBeforeCursor === -1 && nextDollarAfterCursor === -1) {
        return -1;
      } else if (lastDollarBeforeCursor === -1) {
        return nextDollarAfterCursor;
      } else if (nextDollarAfterCursor === -1) {
        return lastDollarBeforeCursor;
      } else {
        return Math.abs(cursorPosition - lastDollarBeforeCursor) <=
          Math.abs(nextDollarAfterCursor - cursorPosition)
          ? lastDollarBeforeCursor
          : nextDollarAfterCursor;
      }
    }

    const handleDropdownClick = (item: dynamicObject) => {
      if (inputRef.current) {
        const { selectionStart, selectionEnd } = inputRef.current;
        const dollarSyntax = `{${
          item.parentVariableType === 'STEPGROUP'
            ? 'SGV'
            : item.type === 'LOCAL'
            ? 'LV'
            : item.type === 'GLOBAL'
            ? 'GV'
            : item.type === 'GROUP'
            ? 'SGV'
            : item?._id?.includes('PARAMETER')
            ? 'SGP'
            : item.type === '_startforloop'
            ? 'FLV_for:'
            : item.type === 'DATAPROVIDER'
            ? 'DPV'
            : 'PEV'
        }${item?.type === '_startforloop' ? '' : '_'}${
          item?.type === 'DATAPROVIDER'
            ? item?.dpName + ':' + item?.varname
            : item.name
        }}`;

        let newValue;
        if ((isHash && value[0] === '#') || onlyDropdown) {
          newValue = item.name + value.slice(selectionEnd || 1);
        } else {
          newValue =
            value.slice(0, findNearestDollar(value, findCursor) || 0) +
            '$' +
            dollarSyntax +
            value.slice(selectionEnd || 0);
        }

        if (onChange) {
          const event = {
            target: {
              value: newValue,
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event, item);
        }
        inputRef.current.value = newValue;
        setHashInputValue?.(item);
        setCursorPosition((selectionStart || 0) + dollarSyntax.length);
        setShowDropdown(false);
        setSkipEffect(true);
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

      const lastDollarBeforeCursor = input.lastIndexOf('$', cursorPosit - 1);
      const nextDollarAfterCursor = input.indexOf('$', cursorPosit);

      if (lastDollarBeforeCursor !== -1) {
        if (cursorPosit === lastDollarBeforeCursor + 1) {
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
          const isInVariableList = variableList.some((file) => {
            const searchableName =
              file.type === '_startforloop' && addForloopPrefix
                ? `FLV_for:${file.name}`
                : file.name;
            return searchableName
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
          if (!isInVariableList) {
            showDropdown = false;
            searchString = '';
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
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const getInputType = (
      type?: 'text' | 'password' | 'number' | 'email' | 'url' | 'time',
      showPassword?: boolean
    ) => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password';
      }
      return type ?? 'text';
    };

    return (
      <div className="ff-add-variable-container">
        <div className="ff-add-variable-input">
          <Input
            readOnly={readOnly}
            {...props}
            name="add_variable"
            ref={inputRef}
            type={getInputType(type, showPassword)}
            value={value}
            onChange={onChange}
            variant="primary"
            label={label}
            placeholder={placeholder}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            onFocus={(e) => {
              setTimeout(() => {
                setIsFocused(true);
                onFocus?.(e);
              }, 500);
            }}
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
          {type === 'password' && showHidePasswordIcon && (
            <Tooltip title={showPassword ? 'Hide' : 'Show'}>
              <Typography as="span" className="ff-password-icon">
                <Icon
                  onClick={togglePasswordVisibility}
                  name={!showPassword ? 'view_access_icon' : 'hide_access_icon'}
                  width={16}
                  height={16}
                  hoverEffect
                />
              </Typography>
            </Tooltip>
          )}
          {!checkEmpty(value) &&
            !isHash &&
            showCreateVariableIcon &&
            showAddVariableIcon && (
              <Tooltip title="Add Variable">
                <Icon
                  onClick={onCreateVariableClick}
                  name="add_variable"
                  width={24}
                  height={24}
                  hoverEffect
                />
              </Tooltip>
            )}
        </div>
        {result?.showDropdown && isFocused && (
          <VariableDropdown
            position="absolute"
            width={dropdownWidth}
            optionsList={variableList.filter((file) => {
              const searchableName =
                file.type === '_startforloop' && addForloopPrefix
                  ? `FLV_for:${file.name}`
                  : file.name;
              return searchableName
                .toLowerCase()
                .includes(result?.searchString.toLowerCase());
            })}
            onSelectVariable={handleDropdownClick}
            height={height}
          />
        )}
        {showDropdown && (isHash || onlyDropdown) && (
          <OptionsDropdown
            position="relative"
            width={dropdownWidth}
            filteredOptions={filteredOptions}
            zIndex={2000}
            onSelectVariable={handleDropdownClick}
            height={height}
            isTruncateText={isTruncateText}
            truncateTextValue={truncateTextValue}
          />
        )}
      </div>
    );
  }
);

export default ConditionalDropdown;
