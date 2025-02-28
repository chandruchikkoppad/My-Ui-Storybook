import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TabsWithSilder from './TabsWithSilder';
import Typography from '../Typography';

const meta: Meta<typeof TabsWithSilder> = {
  title: 'Components/TabsWithSilder',
  component: TabsWithSilder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TabsWithSilder>;

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

const tabsData = [
  { id: 'tab-1', label: 'Tab--1', component: <TabContentOne />, count: '02' },
  { id: 'tab-2', label: 'Tab--2', component: <TabContentTwo />, count: 35 },
  { id: 'tab-3', label: 'Tab--3', component: <TabContentThree />, count: 205 },
];

export const DefaultTabs: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

    return (
      <div style={{width:'500px'}}>
        <TabsWithSilder
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
        />
      </div>
    );
  },
};
export const DefaultTabsSlider: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');
    const sliderTabsData = [
      {
        id: 'tab-1',
        label: 'Tab--1SectionOneToShowToolTip',
        component: <TabContentOne />,
        count: '02',
      },
      { id: 'tab-2', label: 'Tab--2', component: <TabContentTwo />, count: 35 },
      {
        id: 'tab-3',
        label: 'Tab--3',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-4',
        label: 'Tab--4',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-5',
        label: 'Tab--5',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-6',
        label: 'Tab--6',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-7',
        label: 'Tab--7',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-8',
        label: 'Tab--8',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-9',
        label: 'Tab--9',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-10',
        label: 'Tab--10',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-11',
        label: 'Tab--11',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-12',
        label: 'Tab--12',
        component: <TabContentThree />,
        count: 205,
      },
      {
        id: 'tab-13',
        label: 'Tab--13',
        component: <TabContentThree />,
        count: 205,
      },
    ];

    return (
      <div style={{width:'500px'}}>
        <TabsWithSilder
          tabsData={sliderTabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
        />
      </div>
    );
  },
};
export const CapsuleTabs: Story = {
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] =
      useState<string>('tab-1');

    const tabsDataForCapsule = [
      {
        id: 'tab-1',
        label: 'Loremipsum_1',
        component: <TabContentOne />,
      },
      {
        id: 'tab-2',
        label: 'Loremipsum_2',
        component: <TabContentTwo />,
      },
      {
        id: 'tab-3',
        label: 'Loremipsum_3',
        component: <TabContentThree />,
      },
      {
        id: 'tab-4',
        label: 'Loremipsum_4',
        component: <TabContentFour />,
      },
      { id: 'tab-5', label: 'Loremipsum_5', component: <TabContentFour /> },
    ];

    return (
      <TabsWithSilder
        variant={'capsule'}
        tabsData={tabsDataForCapsule}
        activeTabId={activeTabIdCapsule}
        onTabClick={setActiveTabIdCapsule}
      />
    );
  },
};
export const CapsuleTabsSlider: Story = {
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] =
      useState<string>('tab-1');

    const tabsDataForCapsule = [
      {
        id: 'tab-1',
        label: 'Loremipsum_1SectionToShowToolTip',
        component: <TabContentOne />,
      },
      {
        id: 'tab-2',
        label: 'Loremipsum_2',
        component: <TabContentTwo />,
      },
      {
        id: 'tab-3',
        label: 'Loremipsum_3',
        component: <TabContentThree />,
      },
      {
        id: 'tab-4',
        label: 'Loremipsum_4',
        component: <TabContentFour />,
      },
      { id: 'tab-5', label: 'Loremipsum_5', component: <TabContentFour /> },
      { id: 'tab-6', label: 'Loremipsum_6', component: <TabContentFour /> },
      { id: 'tab-7', label: 'Loremipsum_7', component: <TabContentFour /> },
      { id: 'tab-8', label: 'Loremipsum_8', component: <TabContentFour /> },
      { id: 'tab-9', label: 'Loremipsum_9', component: <TabContentFour /> },
      { id: 'tab-10', label: 'Loremipsum_10', component: <TabContentFour /> },
      { id: 'tab-11', label: 'Loremipsum_11', component: <TabContentFour /> },
      { id: 'tab-12', label: 'Loremipsum_12', component: <TabContentFour /> },
      { id: 'tab-13', label: 'Loremipsum_13', component: <TabContentFour /> },
      { id: 'tab-14', label: 'Loremipsum_14', component: <TabContentFour /> },
      { id: 'tab-15', label: 'Loremipsum_15', component: <TabContentFour /> },
      { id: 'tab-16', label: 'Loremipsum_16', component: <TabContentFour /> },
      { id: 'tab-17', label: 'Loremipsum_17', component: <TabContentFour /> },
      { id: 'tab-18', label: 'Loremipsum_18', component: <TabContentFour /> },
      { id: 'tab-19', label: 'Loremipsum_19', component: <TabContentFour /> },
    ];

    return (
      <div style={{width:'600px'}}>

        <TabsWithSilder
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
        />
      </div>
    );
  },
};

export const TabsWithDisabledTab: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState<string>('tab-1');

    const tabsDataWithOneDisableAttribute = [
      { id: 'tab-1', label: 'Tab--1', component: <TabContentOne /> },
      {
        id: 'tab-2',
        label: 'Tab--2',
        component: <TabContentTwo />,
        disabled: true,
      },
      { id: 'tab-3', label: 'Tab--3', component: <TabContentThree /> },
    ];

    return (
      <TabsWithSilder
        tabsData={tabsDataWithOneDisableAttribute}
        activeTabId={activeTabId}
        onTabClick={setActiveTabId}
      />
    );
  },
};

export const WithoutBorder: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <TabsWithSilder
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noBorder={true}
        />{' '}
        <hr />
        <TabsWithSilder
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

export const WithoutPadding: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <TabsWithSilder
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noPadding={true}
        />{' '}
        <hr />
        <TabsWithSilder
          variant="capsule"
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noPadding={true}
        />
      </div>
    );
  },
};

export default meta;
