import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './Search.scss';
import Icon from '../Icon';
import { SearchProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Typography from '../Typography';
import Tooltip from '../Tooltip';
import Toastify, { toast } from '../Toastify/Toastify';
import { useKeyboardActions } from './../../utils/keyBoardActionUtil/UseKeyboardActions';

const Search = ({
  placeholder = 'Search',
  onSearch,
  disabled = false,
  width = 150,
  value = '',
  isExpand = false,
  onClose,
  onExpand,
  showClose = true,
  helperText = 'Minimum 3 characters required',
  showToaster = true,
  minLength = 3,
  isAISearch = false,
  isAISearchClicked = false,
  handleActiveAiSearch,
  isClear = false,
  handleIsClear,
  style = {},
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAnimationActive, setIsAnimationActive] =
    useState<boolean>(isAISearchClicked);

  useEffect(() => {
    if (isExpand && inputRef.current && showClose) {
      inputRef.current.focus();
    }
    setSearchValue('');
  }, [isExpand]);

  const handleInputInteraction = () => {
    setIsAnimationActive(false);
  };

  useEffect(() => {
    setSearchValue(value);
    if (!isAISearchClicked || value) {
      setIsAnimationActive(false);
    } else if (isAISearchClicked) {
      setIsAnimationActive(true);
    }
  }, [value, isAISearchClicked]);

  const handleSearchData = (key: string) => {
    if (key === 'Enter') {
      if (searchValue.trim().length < minLength && showToaster) {
        toast.info(helperText);
      } else if (!checkEmpty(searchValue.trim())) {
        onSearch(searchValue.trim());
      }
    } else if (key === 'Escape') {
      handleSearchClearAndClose('Close');
    }
  };
  useKeyboardActions(
    [
      {
        key: 'Enter',
        action: () => handleSearchData('Enter'),
      },
      {
        key: 'Escape',
        action: () => handleSearchData('Escape'),
      },
    ],
    inputRef
  );

  const handleSearchClearAndClose = (label: string) => {
    setSearchValue('');
    if (label === 'Clear' && isClear) {
      if (isAISearchClicked) {
        setIsAnimationActive(true);
      }
      handleIsClear?.();
    } else {
      onSearch('');
    }
    if (label === 'Close') {
      onClose?.();
    }
    if (label === 'Clear' && isExpand && inputRef.current && showClose) {
      inputRef.current.focus();
    }
  };
  const handleIconClick = () => {
    if (!disabled && !isExpand) {
      onExpand?.(true);
    }
  };
  const handleChange = (data: string) => {
    setSearchValue(data);
    if (showClose) {
      if (data === '') {
        onSearch('');
      }
    } else {
      onSearch(data);
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'Enter' &&
        isExpand &&
        inputRef.current === document.activeElement
      ) {
        if (searchValue.trim().length < minLength && showToaster) {
          toast.info(helperText);
        } else if (!checkEmpty(searchValue.trim())) {
          onSearch(searchValue.trim());
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [
    isExpand,
    onClose,
    searchValue,
    minLength,
    showToaster,
    helperText,
    onSearch,
  ]);

  return (
    <div
      className={classNames('ff-gradient-border-container', {
        'ai-search-active': isAISearchClicked && isExpand,
      })}
    >
      <div
        style={style}
        className={classNames('ff-search-container', {
          expanded: isExpand,
          disabled: disabled,
        })}
      >
        <div
          className={classNames('ff-search-icon', { expanded: isExpand })}
          onClick={handleIconClick}
        >
          <Tooltip
            title={disabled ? 'Search Disabled' : 'Search'}
            disabled={isExpand}
          >
            <Icon
              name="search"
              height={isExpand ? 14 : 16}
              width={isExpand ? 14 : 16}
              disabled={disabled}
            />
          </Tooltip>
        </div>
        <div
          className={classNames('ff-vertical-line', {
            expanded: isExpand,
          })}
        ></div>
        <div
          className={classNames('ff-search-input-block', {
            expanded: isExpand,
          })}
          style={{ width: isExpand ? `${width}px` : '0px' }}
        >
          {' '}
          <input
            className={classNames('ff-search-input', {
              'ai-search-placeholder-animation': isAnimationActive,
              expanded: isExpand,
            })}
            name="input"
            style={{
              width: isExpand
                ? width <= 135
                  ? `${width - 8}px`
                  : `${width}px`
                : '0px',
            }}
            placeholder={placeholder}
            type="text"
            value={searchValue}
            disabled={disabled}
            ref={inputRef}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e.target.value);
              handleInputInteraction();
            }}
          />
        </div>

        <Toastify />
        {isExpand && (
          <>
            <div
              className={classNames('ff-search-clear-button', {
                showClose: !showClose,
              })}
              onClick={() => handleSearchClearAndClose('Clear')}
              style={searchValue ? { cursor: 'pointer' } : {}}
            >
              {searchValue !== '' && (
                <Typography
                  children={'Clear'}
                  fontSize={8}
                  color={'var(--ff-search-filed-clear-text)'}
                />
              )}
            </div>
            <Tooltip title="Close">
              <div
                className={classNames('ff-search-close-icon', {
                  showClose: !showClose,
                })}
              >
                <Icon
                  name="close"
                  hoverEffect={true}
                  onClick={() => {
                    handleSearchClearAndClose('Close');
                  }}
                />
              </div>
            </Tooltip>
            {isAISearch && (
              <>
                <div
                  className={classNames('ff-vertical-line', {
                    expanded: isExpand,
                  })}
                ></div>
                <Icon
                  className={classNames('ff-ai-search-icon')}
                  height={16}
                  width={16}
                  color={isAISearchClicked ? '' : 'var(--ai-search-icon-color)'}
                  name={
                    isAISearchClicked
                      ? 'ai_search_active_icon'
                      : 'ai_search_default_icon'
                  }
                  onClick={handleActiveAiSearch}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
