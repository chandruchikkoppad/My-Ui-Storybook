import React, { useState } from 'react';
import classNames from 'classnames';
import './Search.scss';
import Icon from '../Icon';
import { SearchProps } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Typography from '../Typography';

const Search = ({
  placeholder = 'Search',
  onSearch,
  disabled = false,
  width = 150,
}: SearchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchvalue, setSearchValue] = useState<string>('');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !checkEmpty(searchvalue)) {
      onSearch(searchvalue.trim());
    } else if (event?.key === 'Escape') {
      handleSearchClearAndClose('Close');
    }
  };
  const onChange = (value: string) => {
    setSearchValue(value);
    if (value === '') {
      onSearch('');
    }
  };
  const handleIconClick = () => {
    setIsExpanded(!disabled);
  };
  const handleSearchClearAndClose = (label: string) => {
    setSearchValue('');
    onSearch('');
    if (label === 'Close') {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={classNames('ff-search-container', {
        expanded: isExpanded,
        disabled: disabled,
      })}
    >
      <div className="ff-search-icon" onClick={handleIconClick}>
        <Icon name="search" height={14} width={14} />
      </div>
      <div
        className={classNames('ff-vertical-line', {
          expanded: isExpanded,
        })}
      ></div>
      <input
        className="ff-search-input"
        name="input"
        style={{ width: isExpanded ? `${width}px` : '0px' }}
        placeholder={placeholder}
        type="text"
        value={searchvalue}
        disabled={disabled}
        autoComplete="off"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      {isExpanded && (
        <>
          <div
            className="ff-search-clear-button"
            onClick={() => {
              handleSearchClearAndClose('Clear');
            }}
          >
            {searchvalue !== '' && (
              <Typography
                children={'clear'}
                fontSize={8}
                color={'var(--ff-search-filed-clear-text)'}
              />
            )}
          </div>
          <div className="ff-search-close-icon">
            <Icon
              height={6}
              width={6}
              name="close"
              hoverEffect={true}
              onClick={() => {
                handleSearchClearAndClose('Close');
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Search;
