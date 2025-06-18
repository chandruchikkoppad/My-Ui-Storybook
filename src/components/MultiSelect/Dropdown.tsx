import { forwardRef, useContext, useEffect, useMemo, useState } from 'react';
import { dropdownDefaultCSSData, DropdownProps } from './dropdownTypes';
import './Dropdown.scss';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import classNames from 'classnames';
import Button from '../Button';
import Typography from '../Typography';
import Checkbox from '../Checkbox';
import Tooltip from '../Tooltip';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import {
  getLabel,
  getValue,
} from '../../utils/getSelectOptionValue/getSelectOptionValue';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { Option } from './MultiSelectTypes';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';
import {
  ALPHA_NUM_EXTENDED_REGEX,
  START_END_WHITESPACE_REGEX,
} from '../../validations/regex';

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options,
      handleOptionChange,
      searchedKeyword = '',
      dropdownPosition = {},
      zIndex,
      withSelectButton,
      labelAccessor = 'label',
      valueAccessor = 'value',
      searchAccessor = valueAccessor,
      loadMoreOptions,
      isAllSelected,
      onToggleAllSelect,
      isAllSelect,
      maxDropdownHeight: _maxDropdownHeight,
      variant,
      handleIconClick,
      noResultsMessage,
      maxSearchCharacterLength = 25,
    },
    ref
  ) => {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);
    const filteredOptions = options
      ? options.filter((option) =>
          getValue(option, searchAccessor)
            ?.toLowerCase()
            .includes(searchedKeyword.trim().toLowerCase())
        )
      : [];
    const { verticalMargin, optionHeight, maxDropdownHeight } =
      dropdownDefaultCSSData;

    useEffect(() => {
      if (variant !== 'labels') return;
      switch (true) {
        case searchedKeyword.length < 3 && searchedKeyword.trim() !== '':
          setValidationError('Minimum 3 characters required');
          break;
        case !!searchedKeyword &&
          !START_END_WHITESPACE_REGEX.test(searchedKeyword):
          setValidationError('Space is not allowed at starting and at the end');
          break;
        case !!searchedKeyword &&
          !ALPHA_NUM_EXTENDED_REGEX.test(searchedKeyword):
          setValidationError('Name should be alphanumeric');
          break;
        case searchedKeyword.length > maxSearchCharacterLength:
          setValidationError(
            `Maximum ${maxSearchCharacterLength} characters allowed`
          );
          break;
        default:
          setValidationError(null);
      }
    }, [searchedKeyword, variant, maxSearchCharacterLength]);

    const onSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      handleOptionChange({}, false);
    };

    const renderOption = (info: Option, labelAccessor: string) => {
      if (typeof info[labelAccessor] === 'string') {
        return truncateText(
          getLabel(info, labelAccessor),
          dropdownPosition.width - 50,
          'pixel'
        );
      }
      return info[labelAccessor];
    };

    const topPosition = useMemo(() => {
      let calculatedDropdownHeight = Math.min(
        filteredOptions.length * optionHeight,
        _maxDropdownHeight || maxDropdownHeight
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

    useIntersectionObserver(['ff-multiselect-pagination'], {
      root: document.getElementById('ff-multiselect-options-wrapper'),
      rootMargin: '0px',
      threshold: 0.1,
      onIntersect: (entry, _observer) => {
        if (entry.isIntersecting) {
          if (loadMoreOptions) {
            loadMoreOptions();
          }
        }
      },
    });
    useKeyboardActions([
      {
        key: 'ArrowDown',
        action: () => {
          setFocusedIndex((prev) =>
            prev === null ? 0 : (prev + 1) % filteredOptions.length
          );
        },
      },
      {
        key: 'ArrowUp',
        action: () => {
          setFocusedIndex((prev) =>
            prev === null
              ? filteredOptions.length - 1
              : (prev - 1 + filteredOptions.length) % filteredOptions.length
          );
        },
      },
      {
        key: 'Enter',
        action: () => {
          if (focusedIndex !== null) {
            handleOptionChange(
              filteredOptions[focusedIndex] as Option[],
              !filteredOptions[focusedIndex]?.isChecked
            );
          }
        },
      },
    ]);

    useEffect(() => {
      if (focusedIndex !== null) {
        const optionElement = document.querySelector(
          `.dropdown-option-container:nth-child(${focusedIndex + 1})`
        );

        if (optionElement) {
          optionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }
    }, [focusedIndex]);

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
          maxHeight: `${_maxDropdownHeight}px`,
        }}
      >
        <div
          className="ff-multiselect-options-wrapper"
          style={{
            maxHeight: withSelectButton
              ? `${_maxDropdownHeight - 32}px`
              : `${_maxDropdownHeight}px`,
          }}
          id="ff-multiselect-options-wrapper"
        >
          {validationError ? (
            <Typography as="p" className="validation-error">
              {validationError}
            </Typography>
          ) : filteredOptions.length === 0 ? (
            variant === 'labels' && searchedKeyword.trim().length > 2 ? (
              <Typography
                as="p"
                className="no-options"
                onClick={handleIconClick}
              >
                {searchedKeyword}{' '}
                <Typography as="span" color={'var(--brand-color)'}>
                  add label
                </Typography>
              </Typography>
            ) : (
              <Typography textAlign="center" as="p" className="no-options">
                {noResultsMessage || 'No Result Found'}
              </Typography>
            )
          ) : (
            <>
              {isAllSelect && (
                <div className="dropdown-option-container">
                  <Checkbox
                    checked={isAllSelected}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      onToggleAllSelect?.(event.target.checked);
                    }}
                  />
                  <Typography className="dropdown-option-label">All</Typography>
                </div>
              )}

              {filteredOptions.map((info: Option, index) => (
                <div
                  role="option"
                  className={`dropdown-option-container${
                    info.isDisabled ? ' disabled' : ''
                  } ${focusedIndex === index ? 'focused' : ''}`}
                  key={getLabel(info, labelAccessor) + index}
                  onMouseEnter={() => setFocusedIndex(null)}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.target as HTMLInputElement;
                    if (target.type === 'checkbox') {
                      return;
                    }
                    !info?.isDisabled &&
                      handleOptionChange(info, !info.isChecked);
                  }}
                >
                  <Checkbox
                    checked={info.isChecked}
                    disabled={info?.isDisabled}
                  />
                  <Tooltip
                    zIndex={zIndex + 1}
                    title={
                      isTextTruncated(
                        getLabel(info, labelAccessor),
                        dropdownPosition.width - 50,
                        'pixel'
                      )
                        ? getLabel(info, labelAccessor)
                        : ''
                    }
                    children={
                      <Typography
                        className="dropdown-option-label"
                        children={renderOption(info, labelAccessor)}
                      />
                    }
                  />
                </div>
              ))}
              <div id="ff-multiselect-pagination"></div>
            </>
          )}
        </div>
        {withSelectButton && filteredOptions.length > 0 && (
          <div className="select-button-container">
            <Button label="Select" variant="tertiary" onClick={onSelectClick} />
          </div>
        )}
      </div>
    );
  }
);

export default Dropdown;
