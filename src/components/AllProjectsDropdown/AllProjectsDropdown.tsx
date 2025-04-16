import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import { truncateText } from '../../utils/truncateText/truncateText';
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
  const [selectedOptions, setSelectedOptions] = useState(selectedOption);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [optionsList, setOptionsList] = useState<optionsType[]>(options);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);
  useEffect(() => {
    if (selectedOption) {
      setSelectedOptions(selectedOption);
    }
  }, [selectedOption]);
  const closeOptions = () => {
    setShowOptions(false);
    setSearchValue('');
    setOptionsList(options);
  };

  const handleMouseEnter = () => {
    if (!disabled) setShowOptions(true);
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
  };

  const [searchValue, setSearchValue] = useState('');
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

  useClickOutside(optionsRef, closeOptions);

  return (
    <div
      className={classNames('ff-all-project', {
        'ff-all-project--disabled': disabled,
      })}
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
              : truncateText(selectedOptions?.label, 8)}
          </Typography>
          <div className={classNames('label-icon')}>
            <Icon
              name={showOptions ? 'arrows_top_icon' : 'arrows_down_icon'}
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
      {showOptions && !disabled && (
        <div
          className={classNames('ff-projects-dropdown')}
          ref={optionsRef}
          onMouseEnter={dropDownMouseEnter}
        >
          <div className="ff-dropdown-search-container">
            <Search
              onSearch={handleSearch}
              value={searchValue}
              isExpand={true}
              onClose={() => {}}
              onExpand={() => {}}
              showClose={false}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
          <div className={classNames('option-card')}>
            {optionsList.map(
              (option, index) =>
                index === 0 && (
                  <div
                    key={index}
                    onClick={() => handleSelectOption(option)}
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
                      {<Tooltip title={option.label}>{option.label}</Tooltip>}
                    </Typography>
                  </div>
                )
            )}
          </div>
          <div>
            {optionsList.length ===1 && (
              <div className="ff-no-data-found">-No Projects-</div>)}
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
                    onClick={() => handleSelectOption(option)}
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
                          title={option.label.length > 25 ? option.label : ''}
                        >
                          {option.label.length < 25
                            ? option.label
                            : truncateText(option.label, 25)}
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
