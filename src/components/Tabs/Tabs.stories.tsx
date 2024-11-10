import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import Typography from '../Typography';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Tabs>;

const TabContentOne = () => (
  <div>
    <Typography as="h1" children="Tab--1" fontSize={32} fontWeight="bold" />
    <Typography as="p" children="This is the content for Tab - 1" />
  </div>
);
const TabContentTwo = () => (
  <div>
    <Typography as="h1" children="Tab--2" fontSize={32} fontWeight="bold" />
    <Typography as="p" children="This is the content for Tab - 2" />
  </div>
);
const TabContentThree = () => (
  <div>
    <Typography as="h1" children="Tab--3" fontSize={32} fontWeight="bold" />
    <Typography as="p" children="This is the content for Tab - 3" />
  </div>
);
const TabContentFour = () => (
  <div>
    <Typography as="h1" children="Tab--4" fontSize={32} fontWeight="bold" />
    <Typography as="p" children="This is the content for Tab - 4" />
  </div>
);

export const DefaultTabs: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('0');

    const tabsData = [
      { label: 'Tab--1', component: <TabContentOne /> },
      { label: 'Tab--2', component: <TabContentTwo /> },
      { label: 'Tab--3', component: <TabContentThree /> },
    ];

    return (
      <Tabs
        tabsData={tabsData}
        activeTabId={activeTabIdDefault}
        onTabClick={setActiveTabIdDefault}
      />
    );
  },
};
export const CapsuleTabs: Story = {
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] = useState<string>('0');

    const tabsDataForCapsule = [
      { label: 'Loremipsum_1', component: <TabContentOne /> },
      { label: 'Loremipsum_2', component: <TabContentTwo /> },
      { label: 'Loremipsum_3', component: <TabContentThree /> },
      { label: 'Loremipsum_4', component: <TabContentFour /> },
      { label: 'Loremipsum_5', component: <TabContentFour /> },
    ];

    return (
      <Tabs
        variant={'capsule'}
        tabsData={tabsDataForCapsule}
        activeTabId={activeTabIdCapsule}
        onTabClick={setActiveTabIdCapsule}
      />
    );
  },
};

export const TabsWithDisabledTab: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState<string>('0');

    const tabsDataWithOneDisableAttribute = [
      { label: 'Tab--1', component: <TabContentOne /> },
      { label: 'Tab--2', component: <TabContentTwo />, disabled: true },
      { label: 'Tab--3', component: <TabContentThree /> },
    ];

    return (
      <Tabs
        tabsData={tabsDataWithOneDisableAttribute}
        activeTabId={activeTabId}
        onTabClick={setActiveTabId}
      />
    );
  },
};

export const WithoutBorder: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('0');

    const tabsData = [
      { label: 'Tab--1', component: <TabContentOne /> },
      { label: 'Tab--2', component: <TabContentTwo /> },
      { label: 'Tab--3', component: <TabContentThree /> },
    ];

    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Tabs
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noBorder={true}
        />{' '}
        <hr />
        <Tabs
          variant="capsule"
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noBorder={true}
        />
      </div>
    );
  },
};

export default meta;
