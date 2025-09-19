import React, { useState } from 'react';
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
      <Tabs
        tabsData={tabsData}
        activeTabId={activeTabIdDefault}
        onTabClick={setActiveTabIdDefault}
      />
    );
  },
};

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

export const CapsuleTabs: Story = {
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] =
      useState<string>('tab-1');

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

export const tabsWithDifferentSpacings: Story = {
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] =
      useState<string>('tab-1');

    return (
      <>
        <Tabs
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
          tabFlexSpacing="center"
        />
        <Tabs
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
          tabFlexSpacing="flex-start"
        />
        <Tabs
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
          tabFlexSpacing="flex-end"
        />
        <Tabs
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
          tabFlexSpacing="space-between"
        />
        <Tabs
          variant={'capsule'}
          tabsData={tabsDataForCapsule}
          activeTabId={activeTabIdCapsule}
          onTabClick={setActiveTabIdCapsule}
          tabFlexSpacing="space-around"
        />
      </>
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
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

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

export const WithoutPadding: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Tabs
          tabsData={tabsData}
          activeTabId={activeTabIdDefault}
          onTabClick={setActiveTabIdDefault}
          noPadding={true}
        />{' '}
        <hr />
        <Tabs
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

export const WithBorderBottom: Story = {
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] =
      useState<string>('tab-1');

    return (
      <Tabs
        isBorderBottomLine={true}
        isBorderRadius={true}
        tabsData={tabsData}
        activeTabId={activeTabIdDefault}
        onTabClick={setActiveTabIdDefault}
      />
    );
  },
};

export default meta;
