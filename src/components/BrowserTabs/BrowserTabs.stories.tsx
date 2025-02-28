import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BrowserTabs from './BrowserTabs';
import Typography from '../Typography';

const meta: Meta<typeof BrowserTabs> = {
  title: 'Components/BrowserTabs',
  component: BrowserTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof BrowserTabs>;

const TabContentOne = () => (
  <div>
    <Typography as="h1" fontSize={32} fontWeight="bold">
      Google
    </Typography>
    <Typography as="p">Search anything</Typography>
  </div>
);

const TabContentTwo = () => (
  <div>
    <Typography as="h1" fontSize={32} fontWeight="bold">
      Flipkart
    </Typography>
    <Typography as="p">Shop Now!</Typography>
  </div>
);

const TabContentThree = () => (
  <div>
    <Typography as="h1" fontSize={32} fontWeight="bold">
      Fireflink
    </Typography>
    <Typography as="p">Automate your scripts</Typography>
  </div>
);

const TabContentFour = () => (
  <div>
    <Typography as="h1" fontSize={32} fontWeight="bold">
      Tab--4
    </Typography>
    <Typography as="p">This is the content for Tab - 4</Typography>
  </div>
);

const tabsData = [
  {
    id: 'tab-11',
    label: 'gitlab',
    component: <TabContentOne />,
    tabIcon: 'gitlab',
  },
  {
    id: 'tab-2',
    label: 'Google',
    component: <TabContentTwo />,
    tabIconSrc: 'https://www.google.com/',
  },
  {
    id: 'tab-3',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-4',
    label: 'javascript',
    component: <TabContentOne />,
    tabIcon: 'javascript',
  },
  {
    id: 'tab-5',
    label: 'slack',
    component: <TabContentTwo />,
    tabIcon: 'slack',
  },
  {
    id: 'tab-6',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-7',
    label: 'Yahoo',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-8',
    label: 'Chrome',
    component: <TabContentTwo />,
    tabIcon: 'chrome_icon',
  },
  {
    id: 'tab-9',
    label: 'jenkins',
    component: <TabContentThree />,
    tabIcon: 'jenkins',
  },
];

export const DefaultTabs: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-11');

    return (
      <div>
        <BrowserTabs
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
        />
      </div>
    );
  },
};

const multipleData = [
  {
    id: 'tab-1',
    label: 'Google',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-2',
    label: 'Flipkart',
    component: <TabContentTwo />,
    tabIcon: 'web_service_icon',
  },
  {
    id: 'tab-3',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-4',
    label: 'javascript',
    component: <TabContentOne />,
    tabIcon: 'javascript',
  },
  {
    id: 'tab-5',
    label: 'slack',
    component: <TabContentTwo />,
    tabIcon: 'slack',
  },
  {
    id: 'tab-6',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-7',
    label: 'Yahoo',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-8',
    label: 'Chrome',
    component: <TabContentTwo />,
    tabIcon: 'chrome_icon',
  },
  {
    id: 'tab-9',
    label: 'jenkins',
    component: <TabContentThree />,
    tabIcon: 'jenkins',
  },
  {
    id: 'tab-10',
    label: 'java',
    component: <TabContentOne />,
    tabIcon: 'java',
  },
  {
    id: 'tab-11',
    label: 'github',
    component: <TabContentTwo />,
    tabIcon: 'github',
  },
  {
    id: 'tab-12',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-13',
    label: 'Yahoo',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-14',
    label: 'slack',
    component: <TabContentTwo />,
    tabIcon: 'slack',
  },
  {
    id: 'tab-15',
    label: 'jenkins',
    component: <TabContentThree />,
    tabIcon: 'jenkins',
  },
  {
    id: 'tab-16',
    label: 'csharp',
    component: <TabContentOne />,
    tabIcon: 'csharp',
  },
  {
    id: 'tab-17',
    label: 'gitlab',
    component: <TabContentTwo />,
    tabIcon: 'gitlab',
  },
  {
    id: 'tab-18',
    label: 'Fireflink',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-19',
    label: 'Google',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-20',
    label: 'Chrome',
    component: <TabContentTwo />,
    tabIcon: 'chrome_icon',
  },
  {
    id: 'tab-21',
    label: 'jira',
    component: <TabContentThree />,
    tabIcon: 'jira_logo',
  },
  {
    id: 'tab-22',
    label: 'bitbucket',
    component: <TabContentOne />,
    tabIcon: 'bitbucket',
  },
  {
    id: 'tab-23',
    label: 'slack',
    component: <TabContentTwo />,
    tabIcon: 'slack',
  },
  {
    id: 'tab-24',
    label: 'Amazon',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-25',
    label: 'Google',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-26',
    label: 'Chrome',
    component: <TabContentTwo />,
    tabIcon: 'chrome_icon',
  },
  {
    id: 'tab-27',
    label: 'jira',
    component: <TabContentThree />,
    tabIcon: 'jira_logo',
  },
  {
    id: 'tab-28',
    label: 'azure',
    component: <TabContentOne />,
    tabIcon: 'azure',
  },
  {
    id: 'tab-29',
    label: 'gitlab',
    component: <TabContentTwo />,
    tabIcon: 'gitlab',
  },
  {
    id: 'tab-30',
    label: 'jira',
    component: <TabContentThree />,
    tabIcon: 'jira_logo',
  },
  {
    id: 'tab-31',
    label: 'Yahoo',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-32',
    label: 'slack',
    component: <TabContentTwo />,
    tabIcon: 'slack',
  },
  {
    id: 'tab-33',
    label: 'python',
    component: <TabContentThree />,
    tabIcon: 'python',
  },
  {
    id: 'tab-24',
    label: 'Amazon',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-25',
    label: 'linux',
    component: <TabContentOne />,
    tabIcon: 'linux',
  },
  {
    id: 'tab-26',
    label: 'github',
    component: <TabContentTwo />,
    tabIcon: 'github',
  },
  {
    id: 'tab-27',
    label: 'fire',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-28',
    label: 'Amazon',
    component: <TabContentOne />,
    tabIcon: 'manage_apps',
  },
  {
    id: 'tab-29',
    label: 'Chrome',
    component: <TabContentTwo />,
    tabIcon: 'chrome_icon',
  },
  {
    id: 'tab-30',
    label: 'Amazon',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
  {
    id: 'tab-31',
    label: 'browserstack',
    component: <TabContentOne />,
    tabIcon: 'browserstack_icon',
  },
  {
    id: 'tab-32',
    label: 'gitlab',
    component: <TabContentTwo />,
    tabIcon: 'gitlab',
  },
  {
    id: 'tab-33',
    label: 'vikas',
    component: <TabContentThree />,
    tabIcon: 'moon_stars_icon',
  },
];

export const MultipleTabs: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-11');

    return (
      <BrowserTabs
        tabsData={multipleData}
        activeTabId={activeTabIdDefault}
        onTabClick={setActiveTabIdDefault}
      />
    );
  },
};

export default meta;
