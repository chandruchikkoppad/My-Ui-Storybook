import React, { useState } from 'react';
import SessionDropdown from './SessionDropdown';
import { SessionDropdownProps } from './type';

export default {
  title: 'Components/SessionDropdown',
  component: SessionDropdown,
};

const Template = (args: SessionDropdownProps) => <SessionDropdown {...args} />;

export const Resolution = Template.bind({});
Resolution.args = {
  header: 'Resolution',
  primaryItems: ['1440x900', '1440x900', '1440x900', '1440x900', '1440x900'],
  width: '200px',
};

export const ScreenshotsVideos = () => {
  const [activeTabId, setActiveTabId] = useState<string>('tab-1');

  const handlePrimaryTabClick = () => {
    console.log('Primary tab (Screenshots) clicked');
  };

  const handleSecondaryTabClick = () => {
    console.log('Secondary tab (Videos) clicked');
  };

  const handleDownloadClick = () => {
    console.log('Download icon clicked');
  };

  const handleDeleteClick = () => {
    console.log('Delete icon clicked');
  };

  return (
    <SessionDropdown
      header="Screenshots"
      secondaryHeader="Videos"
      primaryCount="04"
      secondaryCount="04"
      tabsData={[
        { id: 'tab-1', label: 'Screenshots', count: '04' },
        { id: 'tab-2', label: 'Videos', count: '04' },
      ]}
      activeTabId={activeTabId}
      onTabClick={(tabId) => {
        console.log(`${tabId} clicked`);
        setActiveTabId(tabId);
      }}
      onPrimaryTabClick={handlePrimaryTabClick}
      onSecondaryTabClick={handleSecondaryTabClick}
      onDownloadClick={handleDownloadClick}
      onDeleteClick={handleDeleteClick}
      primaryItems={[
        <div key="1" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Screenshot 1</span>
        </div>,
        <div key="2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Screenshot 2</span>
        </div>,
        <div key="3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Screenshot 3</span>
        </div>,
        <div key="4" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Screenshot 4</span>
        </div>,
      ]}
      secondaryItems={[
        <div key="1" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Video 1</span>
        </div>,
        <div key="2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Video 2</span>
        </div>,
        <div key="3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Video 3</span>
        </div>,
        <div key="4" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Video 4</span>
        </div>,
      ]}
      width="380px"
      activeTab={activeTabId === 'tab-1' ? 'primary' : 'secondary'}
    />
  );
};

export const InputDropdown = Template.bind({});
InputDropdown.args = {
  header: 'Inputs',
  primaryItems: [
    <input key="1" type="text" placeholder="Enter text 1" style={{ width: '100%', padding: '4px' }} />,
    <input key="2" type="text" placeholder="Enter text 2" style={{ width: '100%', padding: '4px' }} />,
    <input key="3" type="text" placeholder="Enter text 3" style={{ width: '100%', padding: '4px' }} />,
  ],
  width: '250px',
};