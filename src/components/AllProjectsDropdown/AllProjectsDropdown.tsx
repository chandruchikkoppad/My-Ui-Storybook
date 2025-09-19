import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import './AllProjectsDropdown.scss';
import classNames from 'classnames';
import { AllProjectsDropdownProps, optionsType } from './types';
import Tooltip from '../Tooltip';
import useClickOutside from '../../hooks/useClickOutside';
import Search from '../Search';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const AllProjectsDropdown = ({
  onClick = () => {},
  onMenuClick = () => {},
  options,
  selectedOption = {
    label: 'All Projects',
    value: 'All Projects',
    iconName: 'all_projects',
  },
  selected = false,
  placeholder,
  disabled = false,
}: AllProjectsDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showClicked, setShowClicked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(selectedOption);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [optionsList, setOptionsList] = useState<optionsType[]>(options);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isSecondClickFromOtherTab, setIsSecondClickFromOtherTab] =
    useState(selected);

  useEffect(() => {
    if (optionsList !== options) {
      setOptionsList(options);
    }
  }, [options]);
  useEffect(() => {
    if (!selected) {
      setIsSecondClickFromOtherTab(false);
    }
  }, [selected]);
  useEffect(() => {
    if (selectedOption) {
      setSelectedOptions(selectedOption);
    }
  }, [selectedOption]);
  const closeOptions = () => {
    if (showOptions) {
      setShowOptions(false);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setShowOptions(true);
    }
    if (!disabled && !selected) {
      setShowOptions(true);
    }
  };
  const handleClick = () => {
    if (!disabled) {
      if (showOptions) {
        setShowOptions(false);
      }
      if (!isSecondClickFromOtherTab) {
        setIsSecondClickFromOtherTab(true);
      } else {
        setShowClicked(!showClicked);
      }
    }
    setSearchValue('');
    setOptionsList(options);
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      const timeout = setTimeout(() => {
        closeOptions();
      }, 250);
      setCloseTimeout(timeout);
    }
  };

  const dropDownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleSelectOption = (option: optionsType) => {
    if (!disabled) {
      setSelectedOptions(option);
      closeOptions();
      onClick(option);
      setSearchValue('');
      setOptionsList(options);
    }
    setShowClicked(false);
    setShowOptions(false);
  };

  const handleSearch = (query: string) => {
    if (!disabled) {
      setSearchValue(query);
      if (!checkEmpty(query)) {
        const staticItem = options[0] ?? { label: '', value: '', iconName: '' };
        const filterData = options
          .slice(1)
          .filter((option) =>
            option.label.toLowerCase().includes(query.toLowerCase())
          );
        setOptionsList([staticItem, ...filterData]);
      } else {
        setSearchValue('');
        setOptionsList(options);
      }
    }
  };

  useClickOutside(optionsRef, () => setShowClicked(false), [containerRef]);

  return (
    <div
      className={classNames('ff-all-project', {
        'ff-all-project--disabled': disabled,
      })}
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames('ff-all-project-dropdown', {
          ['ff-all-project-dropdown--selected']: selected,
          ['ff-all-project-dropdown--disabled']: disabled,
        })}
      >
        <div className={classNames('ff-all-project-container')}>
          <Typography
            as={'div'}
            lineHeight={'18px'}
            fontSize={12}
            fontWeight={selected ? 'semi-bold' : 'regular'}
            className={classNames('projects-label')}
            onClick={onMenuClick}
          >
            {selectedOptions.label.length <= 12
              ? selectedOptions.label
              : truncateText(selectedOptions?.label, 12)}
          </Typography>
          <div className={classNames('label-icon')}>
            <div
              className="icon-click-layer"
            />
            <Icon
              name={
                showOptions || showClicked
                  ? 'arrows_top_icon'
                  : 'arrows_down_icon'
              }
              color={
                disabled
                  ? 'var(--disabled-icon-color)'
                  : 'var(--primary-icon-color)'
              }
              height={8}
              width={8}
              hoverEffect={false}
            />
          </div>
        </div>
      </div>
      {(showOptions || showClicked) && !disabled && (
        <div
          className={classNames('ff-projects-dropdown')}
          ref={optionsRef}
          onMouseEnter={dropDownMouseEnter}
        >
          <div
            className="ff-dropdown-search-container"
            onClick={(e) => e.stopPropagation()}
          >
            <Search
              onSearch={handleSearch}
              value={searchValue}
              isExpand={true}
              onClose={() => {}}
              onExpand={() => {}}
              showClose={false}
              placeholder={placeholder}
              disabled={disabled}
              showToaster={false}
            />
          </div>
          <div className={classNames('option-card')}>
            {optionsList.map(
              (option, index) =>
                index === 0 && (
                  <div
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectOption(option);
                    }}
                    className={classNames('ff-projects-options', {
                      ['ff-selected-option']:
                        selectedOption.label === option.label,
                      ['ff-option-disabled']: disabled,
                    })}
                  >
                    <div className={classNames('ff-projects-icons')}>
                      <Icon name={option.iconName} height={12} width={12} />
                    </div>
                    <Typography
                      key={index}
                      as={'div'}
                      lineHeight={'30px'}
                      className="ff-projects-label"
                    >
                      {option.label}
                    </Typography>
                  </div>
                )
            )}
          </div>
          <div>
            {optionsList.length === 1 && (
              <div className="ff-no-data-found">-No Projects-</div>
            )}
          </div>
          <div
            className={classNames(
              'option-card',
              `${optionsList.length > 4 ? 'scroll' : ''}`
            )}
          >
            {optionsList.map(
              (option, index) =>
                index > 0 && (
                  <div
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectOption(option);
                    }}
                    className={classNames('ff-projects-options', {
                      ['ff-selected-option']:
                        selectedOption.label === option.label,
                      ['ff-option-disabled']: disabled,
                    })}
                  >
                    <div className={classNames('ff-projects-icons')}>
                      <Icon name={option.iconName} height={12} width={12} />
                    </div>
                    <Typography
                      key={index}
                      as={'div'}
                      lineHeight={'30px'}
                      className="ff-projects-label"
                    >
                      {
                        <Tooltip
                          title={
                            isTextTruncated(option.label, 165, 'pixel')
                              ? option.label
                              : ''
                          }
                        >
                          {truncateText(option.label, 165, 'pixel')}
                        </Tooltip>
                      }
                    </Typography>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjectsDropdown;
