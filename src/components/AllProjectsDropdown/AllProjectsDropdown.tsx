import { useState } from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import ffid from '../../utils/ffID/ffid';
import { truncateText } from '../../utils/truncateText/truncateText';
import './AllProjectsDropdown.scss';
import classNames from 'classnames';

const AllProjectsDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    label: 'All Projects',
    value: 'All Projects',
    iconName: 'all_projects',
  });
  const [search, setSearch] = useState(true);

  let options = [
    {
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects',
    },
    {
      label: 'Pantaloon Project',
      value: 'Pantaloon Web Project',
      iconName: 'web_icon',
    },
    {
      label: 'Mobile Project',
      value: 'Mobile Project',
      iconName: 'mobile_icon',
    },
    {
      label: 'Web & Mobile Project',
      value: 'Web & Mobile Project',
      iconName: 'web&mobile_icon',
    },
    {
      label: 'Sales Force',
      value: 'Sales Force',
      iconName: 'sales_force',
    },
    {
      label: 'MS Dynamic',
      value: 'MS Dynamic',
      iconName: 'ms_dynamic',
    },
    {
      label: 'Web Service',
      value: 'Web Service',
      iconName: '',
    },
  ];

  const handleSelect = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: {
    label: string;
    value: string;
    iconName: string;
  }) => {
    setSelectedOptions(option);
    setShowOptions(false);
  };

  const handleInput = () => {
    setSearch(false);
  };

  return (
    <div className={classNames('ff-all-project')}>
      <div
        onClick={handleSelect}
        className={classNames('ff-all-project-dropdown')}
      >
        <Typography
          as={'div'}
          lineHeight={'18px'}
          fontSize={12}
          fontWeight={'regular'}
          className={classNames('projects-label')}
        >
          {truncateText(selectedOptions.label, 12)}
        </Typography>
        <div className={classNames('label-icon')}>
          <Icon
            name="arrows_down_icon"
            color="var(--primary-icon-color)"
            height={8}
            width={8}
          />
        </div>
      </div>
      {showOptions && (
        <div className={classNames('ff-dropdown')}>
          <div className={classNames('ff-search')}>
            {search && <Icon name="search" height={8} width={8} />}
            <input
              type="text"
              placeholder="Search Project"
              onClick={() => handleInput()}
            />
          </div>
          <div
            className={classNames(
              'option-card',
              `${options.length > 4 ? 'scroll' : ''}`
            )}
          >
            {options.map((option) => (
              <div
                key={ffid()}
                onClick={() => handleSelectOption(option)}
                className={classNames(
                  'projects-options',
                  `${
                    option.label === 'All Projects' ? 'all-projects-option' : ''
                  }`
                )}
              >
                <div className={classNames('projects-icons')}>
                  <Icon
                    name={option.iconName}
                    height={12}
                    width={12}
                    color={
                      option.label === 'All Projects'
                        ? 'var(--secondary-icon-color)'
                        : 'var(--primary-icon-color);'
                    }
                  />
                </div>
                <Typography key={ffid()} as={'div'} lineHeight={'30px'}>
                  {option.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjectsDropdown;
