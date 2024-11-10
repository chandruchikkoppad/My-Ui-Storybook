import type { Meta, StoryObj } from '@storybook/react';
import AppHeader from './AppHeader';
import Icon from '../Icon';
import { useState } from 'react';

const meta: Meta<typeof AppHeader> = {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AppHeader>;
const defaultArgs = {
  logoIconName: 'fireflink_icon',
  rightContent: (
    <div>
      <Icon name="logo" />
    </div>
  ),
};

const headerMenuItems = [
  {
    menuName: 'Dashboard',
    subMenuItems: [],
  },
  {
    menuName: 'Repo',
    subMenuItems: [
      {
        subMenuName: 'Elements',
        quickMenuItems: [],
      },
      {
        subMenuName: 'Program Elements',
        quickMenuItems: [],
      },
      {
        subMenuName: 'Step Groups',
        quickMenuItems: [
          {
            quickMenuName: 'Success Icon',
            quickMenuIconName: 'success',
          },
          {
            quickMenuName: 'Warning Icon',
            quickMenuIconName: 'warning',
          },
          {
            quickMenuName: 'Info Icon',
            quickMenuIconName: 'info',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Test Data',
    subMenuItems: [],
  },
  {
    menuName: 'Test Dev',
    subMenuItems: [
      {
        subMenuName: 'Scripts',
        quickMenuItems: [
          {
            quickMenuName: 'Delete Icon',
            quickMenuIconName: 'delete',
          },
          {
            quickMenuName: 'Details Icon',
            quickMenuIconName: 'details',
          },
          {
            quickMenuName: 'Sun Icon',
            quickMenuIconName: 'sun_icon',
          },
          {
            quickMenuName: 'Moon Stars Icon',
            quickMenuIconName: 'moon_stars_icon',
          },
          {
            quickMenuName: 'Impact List Icon',
            quickMenuIconName: 'impactList',
          },
        ],
      },
      {
        subMenuName: 'Executions',
        quickMenuItems: [],
      },
    ],
  },
];
const headerHiddenMenuItems = ['Configuration', 'Approval Request'];
const headerRightSideContent = (
  <div>
    <Icon name="logo" />
  </div>
);

export const SampleAppHeader: Story = {
  args: {
    ...defaultArgs,
    rightContent: (
      <div>
        <Icon name="logo" />
      </div>
    ),
    appHeaderMenuItems: headerMenuItems,
    appHeaderHiddenMenuItems: headerHiddenMenuItems,
    selectedMenu: 'Repo',
  },
};
export const Controlled: Story = {
  render: () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Test Data');
    const [selectedSubMenuItem, setSelectedSubMenuItem] = useState('');
    const [selectedQuickMenuItem, setSelectedQuickMenuItem] = useState('');
    const handleMenuClick = (item: string) => {
      setSelectedMenuItem(item);
    };
    const handleSubMenuClick = (item: string) => {
      setSelectedSubMenuItem(item);
    };
    const handleQuickMenuClick = (item: string) => {
      setSelectedQuickMenuItem(item);
    };

    return (
      <>
        <div>
          <AppHeader
            logoIconName="fireflink_icon"
            rightContent={headerRightSideContent}
            appHeaderMenuItems={headerMenuItems}
            appHeaderHiddenMenuItems={headerHiddenMenuItems}
            projectsList={[]}
            selectedMenu={selectedMenuItem}
            selectedSubMenu={selectedSubMenuItem}
            selectedQuickMenu={selectedQuickMenuItem}
            onMenuClick={handleMenuClick}
            onSubMenuClick={handleSubMenuClick}
            onQuickMenuClick={handleQuickMenuClick}
          />
        </div>
      </>
    );
  },
};

export default meta;
