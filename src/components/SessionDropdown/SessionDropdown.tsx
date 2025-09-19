import React from 'react';
import './SessionDropdown.scss';
import { SessionDropdownProps } from './type';
import Icon from '../Icon';
import Tabs from '../Tabs';
import Typography from '../Typography';

const SessionDropdown: React.FC<SessionDropdownProps> = ({
  header,
  secondaryHeader,
  primaryCount,
  secondaryCount,
  primaryItems,
  secondaryItems,
  width,
  activeTab = 'primary',
  activeTabId,
  onPrimaryTabClick,
  onSecondaryTabClick,
  onTabClick,
  onDownloadClick,
  onDeleteClick,
  tabsData,
}) => {
  const itemsToDisplay =
    secondaryHeader && activeTab === 'secondary'
      ? secondaryItems
      : primaryItems;

  const handleTabClick = (tabId: string) => {
    if (onTabClick) {
      onTabClick(tabId);
    }
    if (tabId === 'tab-1' && onPrimaryTabClick) {
      onPrimaryTabClick();
    } else if (tabId === 'tab-2' && onSecondaryTabClick) {
      onSecondaryTabClick();
    }
  };

  return (
    <div
      className="ff-resolution-dropdown"
      style={width ? { minWidth: width } : {}}
    >
      <div className="ff-dropdown-notch" />
      <div className="ff-dropdown-header">
        <div className="ff-dropdown-header-content">
          {secondaryHeader && tabsData && activeTabId ? (
            <>
              <Tabs
                tabsData={tabsData}
                activeTabId={activeTabId}
                onTabClick={handleTabClick}
              />
              <div className="ff-dropdown-header-icons">
                <Icon
                  name="download_file"
                  className="ff-dropdown-icon ff-download-icon"
                  onClick={onDownloadClick}
                  width={18}
                  height={20}
                />
                <Icon
                  name="delete_icon"
                  className="ff-dropdown-icon ff-delete-icon"
                  onClick={onDeleteClick}
                  width={25}
                  height={25}
                />
              </div>
            </>
          ) : secondaryHeader ? (
            <div className="ff-dropdown-header-dual">
              <div
                className={`ff-dropdown-header-item ${
                  activeTab === 'primary' ? 'active' : ''
                }`}
                onClick={onPrimaryTabClick}
              >
                <Typography fontWeight="semi-bold" className="ff-dropdown-text">
                  {header}
                </Typography>
                {primaryCount && (
                  <span className="ff-dropdown-count">{primaryCount}</span>
                )}
              </div>
              <div
                className={`ff-dropdown-header-item ${
                  activeTab === 'secondary' ? 'active' : ''
                }`}
                onClick={onSecondaryTabClick}
              >
                <Typography fontWeight="semi-bold" className="ff-dropdown-text">
                  {secondaryHeader}
                </Typography>
                {secondaryCount && (
                  <span className="ff-dropdown-count">{secondaryCount}</span>
                )}
              </div>
              <div className="ff-dropdown-header-icons">
                <Icon
                  name="download_file"
                  className="ff-dropdown-icon ff-download-icon"
                  onClick={onDownloadClick}
                  width={18}
                  height={20}
                />
                <Icon
                  name="delete_icon"
                  className="ff-dropdown-icon ff-delete-icon"
                  onClick={onDeleteClick}
                  width={25}
                  height={25}
                />
              </div>
            </div>
          ) : (
            <Typography fontSize={16} fontWeight="semi-bold">
              {header}
            </Typography>
          )}
        </div>
      </div>
      <ul className="ff-dropdown-list">
        {itemsToDisplay?.map((item, index) => (
          <li key={index} className="ff-dropdown-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionDropdown;